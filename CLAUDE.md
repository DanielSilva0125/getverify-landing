# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Verify is a SaaS platform for centralized contractor document compliance management, targeted at the Chilean market. The app is in early stage — marketing landing page is live with a waitlist, and the authenticated dashboard is being built out.

- **Domain**: `www.getverify.cl` (marketing), `app.getverify.cl` (dashboard)
- **Language**: Spanish (es-CL) — all user-facing copy, Clerk localization, and metadata are in Spanish

## Commands

```bash
yarn dev      # Start dev server (Next.js 16)
yarn build    # Production build
npm run lint     # ESLint (flat config with next/core-web-vitals + typescript)
```

No test framework is configured.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19
- **Auth**: Clerk (`@clerk/nextjs`) with Spanish localization (`esES`)
- **Database**: Supabase (service-role client only, server-side)
- **Email**: Resend (waitlist confirmation emails)
- **UI**: HeroUI component library + Tailwind CSS v4 + Framer Motion
- **Icons**: lucide-react
- **Validation**: Zod
- **Deployment**: Vercel (with Analytics + Speed Insights)

## Architecture

### Route Groups

The app uses three Next.js route groups under `app/`:

- `(marketing)/` — Public landing page with Navbar/Footer layout. Sections: Hero, PainPoints, Features, MarketSegments, Waitlist, CallToAction
- `(auth)/` — Sign-in page at `/sign-in/[[...sign-in]]` using Clerk's `<SignIn>` component with custom animated wrapper
- `(dashboard)/` — Authenticated area with sidebar/topbar shell (`dashboard-shell.tsx`). Pages: dashboard, contractors, documents, alerts, reports, settings

### Layout Hierarchy

`app/layout.tsx` (root) wraps everything in `ClerkProvider` (Spanish locale) > `HeroUIProvider`. Each route group has its own layout.

### Key Patterns

- **Server actions**: `app/actions/` — e.g., `waitlist.ts` handles form submission with Zod validation
- **Supabase client**: `lib/supabase/server.ts` — service-role only (no browser client), used exclusively in server actions
- **Site config**: `lib/site-config.ts` — canonical URL constant used across metadata/SEO
- **Path alias**: `@/*` maps to project root

### Styling

- Tailwind CSS v4 with `@config` directive in `globals.css` pointing to `tailwind.config.ts`
- HeroUI theme plugin integrated via Tailwind config
- Custom design tokens defined as CSS variables in `globals.css`:
  - `--color-dark-teal: #15292F` (primary text)
  - `--color-accent: #6581EA` (brand blue/purple)
  - `--color-light-teal: #67B4C1`
  - `--color-light-gray: #F1F1F1`
- Custom utility classes: `.btn-glow`, `.mockup-glow`
- Fonts: Figtree (sans, primary) + Geist Mono

### Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
- `NEXT_PUBLIC_MARKETING_URL` (optional, for sign-in back link)
