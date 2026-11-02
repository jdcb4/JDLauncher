# JBOXGames

JD's developer homepage: a static HTML/CSS site introducing his hobby game projects, RVLRY and Quick Quiz.

Production: [jboxgames.com](https://jboxgames.com/) and [www.jboxgames.com](https://www.jboxgames.com/).

## Edit and preview

Edit `index.html` for content and `assets/styles.css` for design. The page needs no client JavaScript or runtime dependencies. Fonts are self-hosted; their SIL Open Font Licenses are alongside them in `assets/fonts/`.

```powershell
npm ci
npm run build
npm run preview
```

Open http://127.0.0.1:4173. The build copies an explicit list of public files and assets to `dist/`. Commit source and generated `dist/` together. `docs/legacy-projects.json` retains the previous launcher's project inventory for reference.

## Deploy

The existing Cloudflare Pages project is `jdlauncher`, in account `b504f1cc4473463a01b6ba5963437200`, connected to [jdcb4/JDLauncher](https://github.com/jdcb4/JDLauncher). Production branch: `main`. Build command: `npm run build`. Output directory: `dist`. Wrangler configuration: `wrangler.jsonc`.

Push a verified commit to `main` to trigger the GitHub integration. `build-and-deploy.bat` runs installation/build and offers a commit message before pushing. For an immediate manual deployment, authenticate with `npx wrangler login` and run:

```powershell
npm run deploy
```

Local OAuth authentication is sufficient; no secret values belong in this repository. Non-interactive deployment can use `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, with Pages edit permission scoped to this account.

Both public domains were already assigned to this Pages project on 2 November 2026, and both served the old launcher with HTTP 200 directly. No active redirect to GitHub was observed. This change replaces the static content in place, preserving the existing domain associations. No other project subdomains or mail records need changes.

## Verify and roll back

After deployment, check both HTTPS URLs return 200, retain their public hostname, and display “Small games. Good company.” Check RVLRY, Quick Quiz, email and GitHub links; local font/CSS loading; keyboard focus; desktop/mobile layout; and reduced motion. A missing path should return the custom 404 page with HTTP 404.

In Cloudflare Pages → `jdlauncher` → Deployments, select a previously successful production deployment and choose Rollback. The pre-redesign deployment ID is `1750e148-45ab-4d8b-a749-758d97374f3a`, sourced from commit `57122267dd53a60bcb6a926cc36d5ef99bf74c89`. Revert the source change as well before a later push if restoring it permanently. The site has no database, persistent application data or migrations.
