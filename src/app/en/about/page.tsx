import type { Metadata } from 'next';
import { AboutPage } from '@/components/portfolio/HomePage';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Yeyun Wan, including education, research experience, projects, and publications.',
};

export default function EnglishAboutPage() {
  return <AboutPage locale="en" />;
}
