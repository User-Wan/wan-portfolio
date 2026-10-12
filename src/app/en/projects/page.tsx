import type { Metadata } from 'next';
import ProjectsPage from '@/components/portfolio/ProjectsPage';
import { getProjectSummaries } from '@/lib/projects.server';

export const metadata: Metadata = { title: 'Projects', description: 'Research prototypes, course systems, and human-centered product work.' };

export default function EnglishProjectsPage() {
  return <ProjectsPage locale="en" projects={getProjectSummaries()} />;
}
