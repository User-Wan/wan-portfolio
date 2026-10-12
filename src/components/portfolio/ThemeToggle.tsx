'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle({ label }: { label: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('site-theme', next ? 'dark' : 'light');
    setDark(next);
  }

  return (
    <button className="theme-toggle" onClick={toggle} type="button" aria-label={label} title={label}>
      <span aria-hidden="true">{dark ? '☾' : '☼'}</span>
    </button>
  );
}
