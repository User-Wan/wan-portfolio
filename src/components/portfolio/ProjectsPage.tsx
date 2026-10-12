'use client';

import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';
import type { Locale, PortfolioProjectSummary, ProjectCategory } from '@/lib/portfolio-content';

const copy = {
  en: {
    title: 'Projects',
    filtersLabel: 'Filter projects',
    all: 'All work', filters: { research: 'Research', coursework: 'Course projects' },
    count: (n: number) => `${n} projects`,
  },
  zh: {
    title: '项目',
    filtersLabel: '筛选项目',
    all: '全部项目', filters: { research: '研究项目', coursework: '课程项目' },
    count: (n: number) => `${n} 个项目`,
  },
} as const;

type Filter = 'all' | ProjectCategory;

export default function ProjectsPage({ locale, projects }: { locale: Locale; projects: PortfolioProjectSummary[] }) {
  const text = copy[locale];
  const [filter, setFilter] = useState<Filter>('all');
  const filteredProjects = useMemo(() => projects.filter((project) => filter === 'all' || project.category === filter), [filter, projects]);
  const filters: Filter[] = ['all', 'research', 'coursework'];
  return (
    <>
      <section className="container page-hero">
        <h1 className="page-title">{text.title}</h1>
      </section>
      <section className="container page-content">
        <div className="filter-row" role="group" aria-label={text.filtersLabel}>
          {filters.map((key) => {
            const label = key === 'all' ? text.all : text.filters[key];
            return <button className="filter-chip" key={key} type="button" aria-pressed={filter === key} onClick={() => setFilter(key)}>{label}</button>;
          })}
        </div>
        <p className="eyebrow">{text.count(filteredProjects.length)}</p>
        <div className="project-grid">
          {filteredProjects.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} href={`/${locale}/projects/${project.slug}/`} />)}
        </div>
      </section>
    </>
  );
}
