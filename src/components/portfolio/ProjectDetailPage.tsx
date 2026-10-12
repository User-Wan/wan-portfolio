import Link from 'next/link';
import type { Locale, PortfolioProject, ProjectLinkKind } from '@/lib/portfolio-content';
import ProjectMdxContent from './ProjectMdxContent';

const copy = {
  en: { back: 'All projects', previous: 'Previous project', next: 'Next project', category: 'Project type', role: 'My role', period: 'Project period', tags: 'Topics', tech: 'Technology', links: { github: 'GitHub', demo: 'Demo', paper: 'Paper', pdf: 'PDF' } },
  zh: { back: '全部项目', previous: '上一个项目', next: '下一个项目', category: '项目类型', role: '我的职责', period: '项目时间', tags: '主题', tech: '技术栈', links: { github: 'GitHub', demo: '演示', paper: '论文', pdf: 'PDF' } },
} as const;

const categoryNames = {
  en: { research: 'Research project', coursework: 'Course team project' },
  zh: { research: '研究项目', coursework: '课程团队项目' },
} as const;

export default function ProjectDetailPage({ locale, project, projects }: { locale: Locale; project: PortfolioProject; projects: PortfolioProject[] }) {
  const text = copy[locale];
  const projectTitle = project.title[locale];
  const projectIndex = projects.findIndex(({ slug }) => slug === project.slug);
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : undefined;
  const nextProject = projectIndex >= 0 && projectIndex < projects.length - 1 ? projects[projectIndex + 1] : undefined;
  const linkLabel = (kind: ProjectLinkKind) => text.links[kind];
  return (
    <>
      <section className="container detail-hero">
        <div>
          <Link className="text-link" href={`/${locale}/projects/`}>← {text.back}</Link>
          <h1>{projectTitle}</h1>
          <p className="detail-summary">{project.summary[locale]}</p>
          <div className="detail-resource-links">
            {project.links.map((link, index) => <a className="button button-secondary" href={link.url} key={`${link.type}-${index}`} target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noreferrer' : undefined}>{link.label?.[locale] ?? linkLabel(link.type)}<span aria-hidden="true">↗</span></a>)}
          </div>
        </div>
        <dl className="detail-aside">
          <dt>{text.category}</dt><dd>{categoryNames[locale][project.category]}</dd>
          {project.role && <><dt>{text.role}</dt><dd>{project.role[locale]}</dd></>}
          {project.period && <><dt>{text.period}</dt><dd>{project.period[locale]}</dd></>}
          <dt>{text.tags}</dt><dd>{project.tags[locale].join(', ')}</dd>
          {project.tech?.[locale]?.length ? <><dt>{text.tech}</dt><dd>{project.tech[locale].join(', ')}</dd></> : null}
        </dl>
      </section>
      <section className="container detail-body">
        <div className="detail-main"><ProjectMdxContent source={project.body} locale={locale} /></div>
      </section>
      <nav className="container project-pager" aria-label={locale === 'en' ? 'Project navigation' : '项目切换'}>
        {previousProject ? <Link className="project-pager-link project-pager-previous" href={`/${locale}/projects/${previousProject.slug}/`}>
          <span className="project-pager-direction"><span aria-hidden="true">←</span>{text.previous}</span>
          <span className="project-pager-title">{previousProject.title[locale]}</span>
        </Link> : <span />}
        {nextProject ? <Link className="project-pager-link project-pager-next" href={`/${locale}/projects/${nextProject.slug}/`}>
          <span className="project-pager-direction">{text.next}<span aria-hidden="true">→</span></span>
          <span className="project-pager-title">{nextProject.title[locale]}</span>
        </Link> : <span />}
      </nav>
    </>
  );
}
