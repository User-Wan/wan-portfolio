'use client';

import { useState } from 'react';

export default function CopyBibtexButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return <button className="copy-bibtex" type="button" onClick={copy} aria-label={label}>{copied ? '✓' : '▢'}</button>;
}
