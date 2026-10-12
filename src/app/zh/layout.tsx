import type { Metadata } from 'next';
import SiteShell from '@/components/portfolio/SiteShell';
import '../globals.css';

export const metadata: Metadata = {
  title: { default: 'Yeyun Wan｜研究与项目', template: '%s｜Yeyun Wan' },
  description: '围绕应用 AI、空间智能、XR 与信息系统展开的研究和项目。',
  openGraph: { locale: 'zh_CN', type: 'website', title: 'Yeyun Wan｜研究与项目' },
};

const themeScript = `try { const t = localStorage.getItem('site-theme'); if (t === 'dark') { document.documentElement.classList.add('dark'); document.documentElement.dataset.theme = 'dark'; } } catch (_) {}`;

export default function ChineseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body><SiteShell locale="zh">{children}</SiteShell></body>
    </html>
  );
}
