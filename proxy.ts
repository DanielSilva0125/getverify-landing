import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
    const host = req.headers.get('host') ?? '';
    const isAppSubdomain = host.startsWith('app.');
    const { pathname, search } = req.nextUrl;
    const protocol = req.nextUrl.protocol;
    const isDev = process.env.NODE_ENV === 'development';

    // In production: hostname-based routing between domains
    if (!isDev) {
        if (isAppSubdomain) {
            // Redirect root to /dashboard (same origin)
            if (pathname === '/') {
                return NextResponse.redirect(new URL('/dashboard', req.url));
            }

            // Redirect /sign-in to marketing domain — only for full page navigations
            // (RSC fetches and POST requests must stay same-origin to avoid CORS)
            const isRSC = req.headers.get('RSC') === '1';
            if (pathname.startsWith('/sign-in') && req.method === 'GET' && !isRSC) {
                const marketingHost = host.replace(/^app\./, '');
                return NextResponse.redirect(`${protocol}//${marketingHost}${pathname}${search}`);
            }

            // Protect dashboard routes with manual auth check (not auth.protect())
            // to avoid cross-origin redirects on RSC fetches
            if (isProtectedRoute(req)) {
                const { userId } = await auth();
                if (!userId) {
                    // Same-origin redirect to /sign-in — avoids CORS issues
                    // Full page navigations will then be redirected to the marketing domain above
                    const signInUrl = new URL('/sign-in', req.url);
                    signInUrl.searchParams.set('redirect_url', req.url);
                    return NextResponse.redirect(signInUrl);
                }
            }
        } else {
            // Marketing domain: redirect /dashboard to app subdomain
            if (pathname.startsWith('/dashboard')) {
                const appHost = host.replace(/^(www\.)?/, 'app.');
                return NextResponse.redirect(`${protocol}//${appHost}${pathname}${search}`);
            }
        }
        return;
    }

    // In dev: everything runs on the same host, just protect dashboard routes
    if (isProtectedRoute(req)) {
        await auth.protect();
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
