import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Yeyun Wan — Research & Projects',
  description: 'Explore research and projects by Yeyun Wan.',
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/favicon.svg` },
};

export default function EntryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
