import type { Metadata } from 'next';
import SiteShell from '@/components/portfolio/SiteShell';
import '../globals.css';

export const metadata: Metadata = {
  title: { default: 'Yeyun Wan | Research & Projects', template: '%s | Yeyun Wan' },
  description: 'Research and projects in applied AI, spatial intelligence, XR, and information systems.',
  openGraph: { locale: 'en_US', type: 'website', title: 'Yeyun Wan | Research & Projects' },
};

const themeScript = `try { const t = localStorage.getItem('site-theme'); if (t === 'dark') { document.documentElement.classList.add('dark'); document.documentElement.dataset.theme = 'dark'; } } catch (_) {}`;

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body><SiteShell locale="en">{children}</SiteShell></body>
    </html>
  );
}
