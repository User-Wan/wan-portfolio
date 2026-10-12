# Yeyun Wan — 个人作品集

基于 Next.js 和 TypeScript 构建的中英双语个人网站，展示项目、论文、教育背景与研究经历。

本网站基于开源 PRISM 作品集模板改造，原项目许可见 [LICENSE](./LICENSE)。

## 本地运行

需要 Node.js 22 或更高版本。

```bash
npm ci
npm run dev
```

打开 `http://localhost:3000/`，然后选择 English 或中文。

## 构建

```bash
npm run build
```

静态网站文件生成在 `out/` 目录。

## 部署

`main` 分支已配置通过 GitHub Actions 自动部署到 GitHub Pages。首次推送后，如果 GitHub 没有自动启用 Pages，请在仓库 Settings → Pages 中将 Build and deployment 的 Source 设为 **GitHub Actions**。

网站地址：https://user-wan.github.io/wan-portfolio/
