import type { ReactNode } from 'react';
import Link from 'next/link';
import LanguageSwitch from './LanguageSwitch';
import PageTransition from './PageTransition';
import ThemeToggle from './ThemeToggle';
import MainNavigation from './MainNavigation';
import ScrollProgress from './ScrollProgress';
import PageBreadcrumb from './PageBreadcrumb';

export type SiteLocale = 'en' | 'zh';

const copy = {
  en: {
    nav: ['Home', 'About', 'Projects', 'Publications'],
    theme: 'Toggle color theme',
    footer: 'Research, systems, and human-centered technology.',
    lastUpdated: 'Last updated: October 12, 2026',
  },
  zh: {
    nav: ['首页', '关于我', '项目', '论文'],
    theme: '切换明暗主题',
    footer: '研究、信息系统与以人为中心的技术。',
    lastUpdated: '最近更新：2026年10月12日',
  },
} as const;

export default function SiteShell({ locale, children }: { locale: SiteLocale; children: ReactNode }) {
  const text = copy[locale];
  return (
    <div className="site-frame">
      <a className="skip-link" href="#main">{locale === 'en' ? 'Skip to content' : '跳转到正文'}</a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="wordmark" href={`/${locale}/`} aria-label={locale === 'en' ? 'Yeyun Wan home' : 'Yeyun Wan 首页'}>Yeyun Wan</Link>
          <MainNavigation locale={locale} />
          <div className="header-actions">
            <LanguageSwitch locale={locale} />
            <ThemeToggle label={text.theme} />
          </div>
        </div>
        <ScrollProgress />
        <PageBreadcrumb locale={locale} />
      </header>
      <main id="main" className="site-main"><PageTransition>{children}</PageTransition></main>
      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-last-updated">{text.lastUpdated}</span>
        </div>
      </footer>
    </div>
  );
}
