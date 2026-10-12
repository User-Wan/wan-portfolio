import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailPage from '@/components/portfolio/ProjectDetailPage';
import { getAllProjects, getProject, getProjectSlugs } from '@/lib/projects.server';

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title.zh, description: project.summary.zh } : {};
}

export default async function ChineseProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectDetailPage locale="zh" project={project} projects={getAllProjects()} />;
}
