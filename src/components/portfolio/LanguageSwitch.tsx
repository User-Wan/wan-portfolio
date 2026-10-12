'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/portfolio-content';

export default function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}/`;
  const targetLocale = locale === 'en' ? 'zh' : 'en';
  const localizedPath = pathname.replace(/^\/(en|zh)(?=\/|$)/, `/${targetLocale}`).replace(/\/+$/, '');
  const target = `${localizedPath}/`;
  return (
    <Link className="language-link language-switch-pair" href={target} aria-label={locale === 'en' ? 'Switch to Chinese' : '切换到英文'}>
      <span className={locale === 'en' ? 'language-current' : undefined}>EN</span>
      <span aria-hidden="true"> / </span>
      <span className={locale === 'zh' ? 'language-current' : undefined}>中文</span>
    </Link>
  );
}
