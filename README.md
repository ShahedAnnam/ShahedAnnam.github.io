# Portfolio Website

A dark, "portfolio-as-codebase" themed personal site. Plain HTML/CSS/JS —
no build step, no npm install. Works straight in VS Code and on GitHub Pages.

## File map

```
index.html      Home page (hero + featured projects)
projects.html   Full project showcase
about.html      Education timeline, skills, personal blurb
contact.html    Contact links
css/style.css   All styling / design tokens (colors, fonts, spacing)
js/script.js    Typing effect, mobile menu, active-nav highlighting
```

## What to edit first

Every placeholder is wrapped so you can find it fast:
- Search the project for the text `EDIT ME` — that's every spot with
  placeholder copy (name, email, links, bio text, dates).
- Anything with `class="edit-me"` also has a subtle dashed amber
  outline when you preview the site, so you can visually spot
  unfinished sections.

Priority order:
1. `<title>` and `.sidebar-brand .name` in all 4 HTML files (your name)
2. Hero text + `data-typed` attribute in `index.html`
3. Project cards in `index.html` and `projects.html`
4. Education timeline + skills tags in `about.html`
5. Contact links in `contact.html` and the sidebar footer socials
   (repeated in all 4 files)

## Previewing locally in VS Code

Easiest option: install the **"Live Server"** extension in VS Code,
right-click `index.html` → "Open with Live Server". It auto-reloads
on save.

## Publishing on GitHub Pages

1. Create a new GitHub repo. If you want it at `https://<username>.github.io`
   directly, name the repo exactly `<username>.github.io`. Otherwise any
   repo name works and it'll be served at `https://<username>.github.io/<repo-name>/`.
2. Push these files to the repo root (not inside a subfolder), e.g.:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch `main`, folder `/ (root)`. Save.
5. Wait a minute, then visit the URL GitHub shows on that same Pages
   settings screen.

## Customizing the look

All colors, fonts, and spacing live in `css/style.css` under the
`:root { ... }` block at the top — change a value there and it updates
everywhere. Fonts (Space Grotesk / Inter / JetBrains Mono) are loaded
from Google Fonts in each page's `<head>`.

## Adding a project

Copy one `.card` block in `projects.html` (and optionally `index.html`
for featured ones), then edit the tag, title, tech pills, description,
and links.
