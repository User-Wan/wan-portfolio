import type { Metadata } from 'next';
import { AboutPage } from '@/components/portfolio/HomePage';

export const metadata: Metadata = {
  title: '关于我',
  description: 'Yeyun Wan 的个人介绍、教育背景、研究经历、项目与论文。',
};

export default function ChineseAboutPage() {
  return <AboutPage locale="zh" />;
}
