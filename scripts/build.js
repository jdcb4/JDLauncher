const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "projects.json");
const distDir = path.join(root, "dist");
const rootIndexPath = path.join(root, "index.html");
const distIndexPath = path.join(distDir, "index.html");

const categories = [
  { key: "Game", title: "Games" },
  { key: "Tool", title: "Tools" },
];

function readProjects() {
  const raw = fs.readFileSync(dataPath, "utf8");
  const projects = JSON.parse(raw);

  if (!Array.isArray(projects)) {
    throw new Error("projects.json must contain an array.");
  }

  projects.forEach((project, index) => {
    ["name", "category", "description", "url"].forEach((field) => {
      if (!project[field] || typeof project[field] !== "string") {
        throw new Error(`Project ${index + 1} is missing a string "${field}" value.`);
      }
    });

    if (!categories.some((category) => category.key === project.category)) {
      throw new Error(
        `Project "${project.name}" has unsupported category "${project.category}". Use "Game" or "Tool".`
      );
    }

    try {
      new URL(project.url);
    } catch {
      throw new Error(`Project "${project.name}" has an invalid url: ${project.url}`);
    }
  });

  return projects;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderProject(project) {
  const name = escapeHtml(project.name);
  const description = escapeHtml(project.description);
  const url = escapeHtml(project.url);

  return `          <li class="project">
            <a class="project-link" href="${url}" target="_blank" rel="noopener noreferrer">
              <span class="project-copy">
                <span class="project-name">${name}</span>
                <span class="project-description">${description}</span>
                <span class="project-url">${url}</span>
              </span>
              <span class="project-arrow" aria-hidden="true">-&gt;</span>
            </a>
          </li>`;
}

function renderCategory(category, projects) {
  const items = projects
    .filter((project) => project.category === category.key)
    .map(renderProject)
    .join("\n");

  return `      <section class="panel" aria-labelledby="${category.key.toLowerCase()}-heading">
        <div class="panel-heading">
          <h2 id="${category.key.toLowerCase()}-heading">${category.title}</h2>
          <span>${projects.filter((project) => project.category === category.key).length}</span>
        </div>
        <ul class="projects">
${items}
        </ul>
      </section>`;
}

function renderPage(projects, updatedAt) {
  const panels = categories.map((category) => renderCategory(category, projects)).join("\n\n");
  const updatedIso = updatedAt.toISOString();
  const updatedText = updatedAt.toLocaleString("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
    hour12: false,
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Quick links to JD's games and tools." />
  <title>JD's Launcher</title>
  <style>
    :root {
      --bg: #111318;
      --surface: #191d24;
      --surface-strong: #202632;
      --border: #303744;
      --text: #eef2f7;
      --muted: #a8b1bf;
      --accent: #56c0a8;
      --accent-strong: #f0b44c;
      --shadow: 0 18px 44px rgba(0, 0, 0, 0.3);
      --radius: 8px;
      --font: "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: var(--font);
      color: var(--text);
      background: var(--bg);
      line-height: 1.5;
    }

    .wrap {
      width: min(1040px, calc(100% - 32px));
      margin: 0 auto;
      padding: 40px 0 28px;
    }

    header {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 24px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 20px;
    }

    h1,
    h2,
    p {
      margin: 0;
    }

    h1 {
      font-size: clamp(2rem, 5vw, 3.4rem);
      line-height: 1;
      font-weight: 750;
    }

    .tagline {
      margin-top: 10px;
      color: var(--muted);
      max-width: 54ch;
      font-size: 1rem;
    }

    .github-link {
      color: var(--text);
      border: 1px solid var(--border);
      background: var(--surface);
      border-radius: var(--radius);
      padding: 10px 13px;
      text-decoration: none;
      white-space: nowrap;
      transition: border-color 0.16s ease, background 0.16s ease;
    }

    .github-link:hover,
    .github-link:focus-visible {
      background: var(--surface-strong);
      border-color: var(--accent);
      outline: none;
    }

    .panels {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
      align-items: start;
    }

    .panel {
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .panel-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 16px 18px;
      border-bottom: 1px solid var(--border);
      background: var(--surface-strong);
    }

    .panel-heading h2 {
      font-size: 1rem;
      letter-spacing: 0;
    }

    .panel-heading span {
      display: inline-grid;
      place-items: center;
      min-width: 28px;
      height: 28px;
      border-radius: 999px;
      background: rgba(86, 192, 168, 0.15);
      color: var(--accent);
      font-size: 0.85rem;
      font-weight: 700;
    }

    .projects {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .project + .project {
      border-top: 1px solid var(--border);
    }

    .project-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      min-height: 136px;
      padding: 18px;
      color: inherit;
      text-decoration: none;
      transition: background 0.16s ease;
    }

    .project-link:hover,
    .project-link:focus-visible {
      background: rgba(255, 255, 255, 0.035);
      outline: none;
    }

    .project-copy {
      min-width: 0;
      display: grid;
      gap: 7px;
    }

    .project-name {
      color: var(--text);
      font-size: 1.08rem;
      font-weight: 700;
    }

    .project-description {
      color: var(--muted);
      font-size: 0.94rem;
    }

    .project-url {
      color: var(--accent);
      font-size: 0.82rem;
      overflow-wrap: anywhere;
    }

    .project-arrow {
      flex: 0 0 auto;
      color: var(--accent-strong);
      font-weight: 800;
      transition: transform 0.16s ease;
    }

    .project-link:hover .project-arrow,
    .project-link:focus-visible .project-arrow {
      transform: translateX(3px);
    }

    footer {
      margin-top: 22px;
      color: var(--muted);
      font-size: 0.9rem;
      text-align: center;
    }

    footer a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 700;
    }

    footer a:hover,
    footer a:focus-visible {
      text-decoration: underline;
      outline: none;
    }

    @media (max-width: 760px) {
      .wrap {
        width: min(100% - 24px, 1040px);
        padding-top: 28px;
      }

      header {
        display: block;
      }

      .github-link {
        display: inline-flex;
        margin-top: 18px;
      }

      .panels {
        grid-template-columns: 1fr;
      }

      .project-link {
        min-height: 0;
        padding: 16px;
      }
    }
  </style>
</head>
<body>
  <main class="wrap">
    <header>
      <div>
        <h1>JD's Launcher</h1>
        <p class="tagline">Quick links to JD's games and tools.</p>
      </div>
      <a class="github-link" href="https://github.com/jdcb4/JDLauncher" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </header>

    <div class="panels">
${panels}
    </div>

    <footer>
      Updated <time datetime="${updatedIso}">${escapeHtml(updatedText)}</time> from <a href="https://github.com/jdcb4/JDLauncher" target="_blank" rel="noopener noreferrer">jdcb4/JDLauncher</a>
    </footer>
  </main>
</body>
</html>
`;
}

function writeOutput(html) {
  fs.mkdirSync(distDir, { recursive: true });
  fs.writeFileSync(rootIndexPath, html, "utf8");
  fs.writeFileSync(distIndexPath, html, "utf8");
}

const projects = readProjects();
const html = renderPage(projects, new Date());
writeOutput(html);

console.log(`Built ${projects.length} projects to index.html and dist/index.html.`);
