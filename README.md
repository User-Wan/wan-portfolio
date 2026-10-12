# Yeyun Wan — Personal Portfolio

A bilingual research and project portfolio built with Next.js and TypeScript. It includes project pages, publications, education, and experience in English and Chinese.

This site is adapted from the open-source PRISM portfolio template. The original license is included in [LICENSE](./LICENSE).

## Run locally

Requires Node.js 22 or later.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000/` and choose English or 中文.

## Build

```bash
npm run build
```

The static site is generated in `out/`.

## Deployment

The `main` branch is configured for automatic deployment to GitHub Pages through GitHub Actions. After the first push, set the repository's Pages build source to **GitHub Actions** if GitHub has not enabled it automatically.

Site: https://user-wan.github.io/wan-portfolio/
