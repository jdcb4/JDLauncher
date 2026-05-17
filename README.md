# JDLauncher

A static launcher page for JD's games and tools.

## Edit Projects

Edit `projects.json`. Each project needs:

- `name`
- `category`: `Game` or `Tool`
- `description`
- `url`

Then run:

```powershell
npm run build
```

The build writes:

- `index.html` for opening locally
- `dist/index.html` for Cloudflare Pages

The footer date is refreshed every time the build runs.

## Manual Build And Deploy

Double-click `build-and-deploy.bat`.

It will:

1. Install npm dependencies.
2. Build the static page.
3. Commit the changes.
4. Push to `origin main`.
5. Let Cloudflare Pages deploy automatically from the GitHub push.

## Cloudflare Pages

Recommended Cloudflare Pages settings:

- Project name: `jdlauncher`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

You can connect the GitHub repository directly in the Cloudflare dashboard. After that, every push to `main` deploys automatically.

Leave the Cloudflare Pages deploy command empty. This project only needs the build command and output directory above. If a deploy command is set to `npx wrangler pages deploy`, Cloudflare will try to use an API token and may fail with an authentication error.
