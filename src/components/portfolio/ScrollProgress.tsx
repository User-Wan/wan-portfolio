'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = /^\/(en|zh)\/?$/.test(pathname ?? '');

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.max(0, Math.min(progress, 1))})`;
      }
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [pathname]);

  return isHome ? null : <div className="scroll-progress" ref={progressRef} aria-hidden="true" />;
}
