'use client';

import { useEffect, useId, useRef, useState } from 'react';

export default function MermaidDiagram({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const renderCount = useRef(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const render = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: document.documentElement.classList.contains('dark') ? 'dark' : 'neutral',
          markdownAutoWrap: false,
          flowchart: { wrappingWidth: 280, nodeSpacing: 32, rankSpacing: 42 },
        });
        const id = `project-diagram-${reactId}-${renderCount.current++}`;
        const result = await mermaid.render(id, chart);
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = result.svg;
          setFailed(false);
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    };

    void render();
    const observer = new MutationObserver(() => void render());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [chart, reactId]);

  return (
    <div className="project-diagram" aria-label="Project architecture diagram">
      {failed && <pre className="project-diagram-fallback">{chart}</pre>}
      <div ref={containerRef} className={failed ? 'project-diagram-hidden' : undefined} />
    </div>
  );
}
