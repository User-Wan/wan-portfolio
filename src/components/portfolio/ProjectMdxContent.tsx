import { Children, isValidElement, type ComponentProps, type ReactNode } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { MDXComponents } from 'mdx/types';
import remarkGfm from 'remark-gfm';
import type { Locale } from '@/lib/portfolio-content';
import MermaidDiagram from './MermaidDiagram';

function createComponents(locale: Locale): MDXComponents {
  return {
    LocaleContent: ({ lang, children }: { lang?: string; children: ReactNode }) => lang === locale ? <>{children}</> : null,
    pre: ({ children, ...props }: ComponentProps<'pre'>) => {
      const child = Children.only(children);
      if (isValidElement<{ className?: string; children?: ReactNode }>(child)) {
        const language = child.props.className?.match(/language-([\w-]+)/)?.[1];
        const code = child.props.children;
        if (language === 'mermaid' && typeof code === 'string') return <MermaidDiagram chart={code} />;
      }
      return <div className="project-code-scroll"><pre {...props}>{children}</pre></div>;
    },
    a: ({ href, children, ...props }: ComponentProps<'a'>) => {
      const external = Boolean(href?.startsWith('http'));
      return <a href={href} {...props} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{children}</a>;
    },
    img: (props: ComponentProps<'img'>) => <img {...props} loading="lazy" />,
    video: (props: ComponentProps<'video'>) => <video controls preload="metadata" {...props} />,
  };
}

export default function ProjectMdxContent({ source, locale }: { source: string; locale: Locale }) {
  return (
    <div className="project-mdx">
      <MDXRemote source={source} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} components={createComponents(locale)} />
    </div>
  );
}
