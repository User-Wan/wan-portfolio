import type { Metadata } from 'next';
import PublicationsPage from '@/components/portfolio/PublicationsPage';

export const metadata: Metadata = { title: 'Publications', description: 'Research outputs and publication records.' };

export default function EnglishPublicationsPage() {
  return <PublicationsPage locale="en" />;
}
