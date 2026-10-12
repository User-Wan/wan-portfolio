'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { SiteLocale } from './SiteShell';

const links = {
  en: [
    { label: 'Home', path: '' },
    { label: 'About', path: 'about/' },
    { label: 'Projects', path: 'projects/' },
    { label: 'Publications', path: 'publications/' },
  ],
  zh: [
    { label: '首页', path: '' },
    { label: '关于我', path: 'about/' },
    { label: '项目', path: 'projects/' },
    { label: '论文', path: 'publications/' },
  ],
} as const;

export default function MainNavigation({ locale }: { locale: SiteLocale }) {
  const pathname = usePathname() || `/${locale}/`;

  return (
    <nav aria-label={locale === 'en' ? 'Main navigation' : '主导航'} className="main-nav">
      {links[locale].map(({ label, path }) => {
        const href = `/${locale}/${path}`;
        const isHome = path === '';
        const isActive = isHome
          ? pathname === `/${locale}` || pathname === `/${locale}/`
          : pathname === href || pathname.startsWith(href);

        return <Link key={path || 'home'} href={href} aria-current={isActive ? 'page' : undefined}>{label}</Link>;
      })}
    </nav>
  );
}
