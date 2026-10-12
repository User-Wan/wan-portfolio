import type { Locale } from '@/lib/portfolio-content';
import PublicationCard from './PublicationCard';

const copy = {
  en: {
    title: 'Publications',
  },
  zh: {
    title: '论文与研究',
  },
} as const;

export default function PublicationsPage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <>
      <section className="container page-hero">
        <h1 className="page-title">{text.title}</h1>
      </section>
      <section className="container page-content publication-content">
        <PublicationCard locale={locale} />
      </section>
    </>
  );
}
