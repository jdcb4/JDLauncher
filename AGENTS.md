# JBOXGames homepage

- This is a buildless static homepage. Edit root `index.html`, `assets/styles.css`, and assets; `dist/` is generated and checked in for the existing Cloudflare Pages integration.
- Run `npm run build` after source edits and commit the regenerated `dist/` alongside them. `npm run preview` serves the build at http://127.0.0.1:4173.
- Production is the existing Cloudflare Pages project `jdlauncher`, connected to this repository's `main` branch. Both jboxgames.com and www.jboxgames.com are attached.
- Do not add redirects to GitHub or change other project subdomains. Google Play has no supplied URL; keep its note non-interactive.
- PRODUCT.md records the brief, DESIGN.md and .impeccable/design.json record the visual system. Keep the static publish allowlist in scripts/build.js; development notes must not ship.
- docs/legacy-projects.json is the archived inventory from the replaced launcher, not homepage content.
