# Free hosting with Cloudflare Pages

This site is a static Vite app and can be hosted on Cloudflare Pages without a
Replit subscription. The Replit deployment remains separate and is not changed
by this setup.

## Deploy from Git

1. Push the project repository to a Git provider supported by Cloudflare Pages.
2. In Cloudflare, create a Pages project and connect that repository.
3. Use these build settings:

   - **Root directory:** repository root (`.`)
   - **Framework preset:** None
   - **Build command:** `pnpm --filter @workspace/mr-pottel-site run build`
   - **Build output directory:** `artifacts/mr-pottel-site/dist/public`

4. Save and deploy. Cloudflare will provide a `*.pages.dev` address.

The root `pnpm-lock.yaml` and workspace configuration are used for dependency
installation. No `PORT` or `BASE_PATH` build variables are required.

## Optional custom domain

You can attach a domain you own in the Cloudflare Pages project settings.
Registering or renewing a custom domain may have a separate cost; using the
provided `*.pages.dev` address does not require buying one.
