import Link from 'next/link';
import type { Locale, PortfolioProjectSummary, ProjectCategory } from '@/lib/portfolio-content';

interface ProjectCardProps {
  project: PortfolioProjectSummary;
  locale: Locale;
  href?: string;
}

const copy: Record<Locale, { category: Record<ProjectCategory, string> }> = {
  en: {
    category: { research: 'Research', coursework: 'Coursework' },
  },
  zh: {
    category: { research: '研究项目', coursework: '课程项目' },
  },
};

export default function ProjectCard({ project, locale, href }: ProjectCardProps) {
  const labels = copy[locale];

  const card = (
    <article className="project-card">
      <div className="project-card-content">
        <div className="project-card-heading">
          <h3>{project.title[locale]}</h3>
          {project.period?.[locale] && <time className="project-card-period">{project.period[locale]}</time>}
        </div>
        <p className="project-card-summary">{project.summary[locale]}</p>
        <ul className="tag-list mt-4" aria-label={locale === 'en' ? 'Project topics and category' : '项目主题与类别'}>
          {project.tags[locale].map((tag) => <li className="tag list-none" key={tag}>{tag}</li>)}
          <li className="tag project-category-tag">{labels.category[project.category]}</li>
        </ul>
      </div>
    </article>
  );

  return href ? <Link className="project-card-link" href={href}>{card}</Link> : card;
}
