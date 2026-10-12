import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container page-hero">
      <p className="eyebrow">404 · NOT FOUND / 页面未找到</p>
      <h1 className="page-title">
        This page isn’t here.
        <br />
        <span lang="zh-CN">这个页面暂时不存在。</span>
      </h1>
      <p className="page-lede">
        The address may be outdated. Try the home page or browse the projects.
        <br />
        <span lang="zh-CN">链接可能已失效。你可以返回首页，或浏览项目。</span>
      </p>
      <nav className="hero-actions" aria-label="404 navigation / 错误页面导航">
        <Link className="button button-primary" href="/en/">English home</Link>
        <Link className="button button-secondary" href="/en/projects/">English projects</Link>
        <Link className="button button-primary" href="/zh/" lang="zh-CN">中文首页</Link>
        <Link className="button button-secondary" href="/zh/projects/" lang="zh-CN">浏览中文项目</Link>
      </nav>
    </section>
  );
}
