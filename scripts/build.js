const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
// Publish only this allowlist; project notes and credentials stay local.
const files = [
  "index.html",
  "404.html",
  "_headers",
  "robots.txt",
  "sitemap.xml",
];
for (const font of ["bricolage-grotesque.ttf", "manrope.ttf"]) {
  if (!fs.existsSync(path.join(root, "assets", "fonts", font)))
    throw new Error(`Missing checked-in font: ${font}`);
}
fs.mkdirSync(dist, { recursive: true });
for (const file of files)
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
fs.cpSync(path.join(root, "assets"), path.join(dist, "assets"), {
  recursive: true,
});
console.log("Built JBOXGames into dist/ (static HTML, CSS and local fonts).");
