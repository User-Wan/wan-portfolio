import type { Metadata } from 'next';
import ProjectsPage from '@/components/portfolio/ProjectsPage';
import { getProjectSummaries } from '@/lib/projects.server';

export const metadata: Metadata = { title: '项目', description: '研究原型、课程信息系统与以人为中心的产品设计。' };

export default function ChineseProjectsPage() {
  return <ProjectsPage locale="zh" projects={getProjectSummaries()} />;
}
