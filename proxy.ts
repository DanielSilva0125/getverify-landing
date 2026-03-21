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
            // Redirect sign-in and root to the marketing domain
            if (pathname === '/' || pathname.startsWith('/sign-in')) {
                const marketingHost = host.replace(/^app\./, '');
                const target = pathname === '/' ? '/dashboard' : `${pathname}${search}`;
                return NextResponse.redirect(`${protocol}//${marketingHost}${target}`);
            }
            if (isProtectedRoute(req)) {
                await auth.protect();
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
