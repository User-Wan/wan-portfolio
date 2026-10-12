'use client';

import { useState } from 'react';
import { BookOpen, FileText } from 'lucide-react';
import CopyBibtexButton from './CopyBibtexButton';

interface PublicationInteractionsProps {
  doiLabel: string;
  doiHref: string;
  abstractLabel: string;
  abstractTitle: string;
  abstract: string;
  bibtexLabel: string;
  bibtexTitle: string;
  bibtex: string;
  copyLabel: string;
}

export default function PublicationInteractions({
  doiLabel,
  doiHref,
  abstractLabel,
  abstractTitle,
  abstract,
  bibtexLabel,
  bibtexTitle,
  bibtex,
  copyLabel,
}: PublicationInteractionsProps) {
  const [abstractOpen, setAbstractOpen] = useState(false);
  const [bibtexOpen, setBibtexOpen] = useState(false);

  return (
    <>
      <div className="publication-actions">
        <a className="publication-action" href={doiHref} target="_blank" rel="noreferrer">{doiLabel}</a>
        <button
          className={`publication-action${abstractOpen ? ' publication-action-open' : ''}`}
          type="button"
          aria-expanded={abstractOpen}
          aria-controls="publication-abstract-panel"
          onClick={() => setAbstractOpen((open) => !open)}
        >
          <FileText size={14} aria-hidden="true" />
          {abstractLabel}
        </button>
        <button
          className={`publication-action${bibtexOpen ? ' publication-action-open' : ''}`}
          type="button"
          aria-expanded={bibtexOpen}
          aria-controls="publication-bibtex-panel"
          onClick={() => setBibtexOpen((open) => !open)}
        >
          <BookOpen size={14} aria-hidden="true" />
          {bibtexLabel}
        </button>
      </div>
      {abstractOpen && (
        <section className="publication-disclosure-panel" id="publication-abstract-panel">
          <h4>{abstractTitle}</h4>
          <p>{abstract}</p>
        </section>
      )}
      {bibtexOpen && (
        <section className="publication-disclosure-panel publication-bibtex" id="publication-bibtex-panel">
          <h4>{bibtexTitle}</h4>
          <pre><code>{bibtex}</code></pre>
          <CopyBibtexButton value={bibtex} label={copyLabel} />
        </section>
      )}
    </>
  );
}
