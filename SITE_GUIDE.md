# Site Guide

This repository contains the bilingual portfolio website for Yeyun Wan.

## Local development

Use Node.js 22 or later.

```bash
npm ci
npm run dev
```

The local site runs at `http://localhost:3000/`. English and Chinese pages are under `/en/` and `/zh/`.

To make a static export:

```bash
npm run build
```

The generated site is written to `out/`.

## Updating the site

- Project details: `src/content/projects/` (`.mdx` files, English and Chinese content in each file).
- About page, education, and experience: `src/components/portfolio/HomePage.tsx`.
- Publication entries: `src/components/portfolio/PublicationCard.tsx`.
- Shared visual styles: `src/app/globals.css`.
- Publicly linked PDFs and the favicon: `public/`.

## GitHub Pages deployment

Pushing to `main` starts the GitHub Actions workflow in `.github/workflows/deploy.yml`. It builds a static export with the `/wan-portfolio` base path and deploys `out/` to GitHub Pages.

If GitHub Pages has not been enabled for the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

The published site is at https://user-wan.github.io/wan-portfolio/.
