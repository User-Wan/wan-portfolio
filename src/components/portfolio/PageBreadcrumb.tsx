'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { SiteLocale } from './SiteShell';

const labels = {
  en: { about: 'About', projects: 'Projects', publications: 'Publications' },
  zh: { about: '关于我', projects: '项目', publications: '论文' },
} as const;

const projectTitles: Record<string, { en: string; zh: string }> = {
  'semantictwin': { en: 'SemanticTwin', zh: 'SemanticTwin' },
  'acubqa': { en: 'AcuBQA', zh: 'AcuBQA' },
  'heritage-platform': { en: 'HeritagePlatform', zh: 'HeritagePlatform' },
  'masterapply-quest': { en: 'MasterApply Quest', zh: 'MasterApply Quest' },
  'vr-coping-hub': { en: 'VR Coping Hub', zh: 'VR Coping Hub' },
  'drift': { en: 'Drift', zh: 'Drift' },
  'medical-ai-onsd': { en: 'Ocular Ultrasound AI', zh: '眼部超声 AI' },
  'biomedical-chatgpt': { en: 'ChatGPT Applications in Biomedicine', zh: 'ChatGPT 在生物医学中的应用' },
  'vr-stress-recovery': { en: 'LLM-Grounded VR Stress Recovery', zh: 'LLM 引导的 VR 压力恢复系统' },
};

export default function PageBreadcrumb({ locale }: { locale: SiteLocale }) {
  const pathname = usePathname() || `/${locale}/`;
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length < 2 || parts[0] !== locale) return null;

  const section = parts[1];
  const sectionLabel = section === 'about'
    ? labels[locale].about
    : section === 'projects'
      ? labels[locale].projects
      : section === 'publications'
        ? labels[locale].publications
        : null;

  if (!sectionLabel) return null;

  const detailSlug = section === 'projects' ? parts[2] : undefined;
  const detailLabel = detailSlug
    ? projectTitles[detailSlug]?.[locale] ?? detailSlug.split('-').join(' ')
    : null;

  if (section !== 'projects' || !detailLabel) return null;

  return (
    <div className="page-breadcrumb-wrap">
      <nav className="page-breadcrumb container" aria-label={locale === 'en' ? 'Page location' : '页面位置'}>
        <>
          <Link href={`/${locale}/projects/`}>{sectionLabel}</Link>
          <span aria-hidden="true">›</span>
          <span className="page-breadcrumb-current" aria-current="page">{detailLabel}</span>
        </>
      </nav>
    </div>
  );
}
