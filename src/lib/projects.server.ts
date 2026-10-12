import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { PortfolioProject, PortfolioProjectSummary } from './portfolio-content';

const projectsDirectory = path.join(process.cwd(), 'src', 'content', 'projects');

function readProjectFiles(): PortfolioProject[] {
  return fs.readdirSync(projectsDirectory)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const fileContents = fs.readFileSync(path.join(projectsDirectory, fileName), 'utf8');
      const parsed = matter(fileContents);
      const project = { ...parsed.data, body: parsed.content } as PortfolioProject;

      if (!project.slug || !project.title?.en || !project.title?.zh || !project.summary?.en || !project.summary?.zh) {
        throw new Error(`Project MDX is missing required bilingual metadata: ${fileName}`);
      }

      return { ...project, links: project.links ?? [] };
    })
    .sort((first, second) => first.order - second.order);
}

export function getAllProjects(): PortfolioProject[] {
  return readProjectFiles();
}

export function getProjectSummaries(): PortfolioProjectSummary[] {
  return readProjectFiles().map(({ body: _body, ...summary }) => summary);
}

export function getProject(slug: string): PortfolioProject | undefined {
  return readProjectFiles().find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return readProjectFiles().map((project) => project.slug);
}
