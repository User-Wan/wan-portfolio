import type { Metadata } from 'next';
import PublicationsPage from '@/components/portfolio/PublicationsPage';

export const metadata: Metadata = { title: '论文与研究', description: '研究成果与正式出版记录。' };

export default function ChinesePublicationsPage() {
  return <PublicationsPage locale="zh" />;
}
