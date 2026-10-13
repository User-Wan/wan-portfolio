import type { Locale } from '@/lib/portfolio-content';
import PublicationInteractions from './PublicationInteractions';

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const bibtex = `@article{Li2026AutomatedONSD,
  title   = {Automated measurement of optic nerve sheath diameter using ocular ultrasound video},
  author  = {Li, Renxing and Tang, Weiyi and Li, Peiqi and Huang, Qiming and She, Jiayuan and Li, Shengkai and Xu, Haoran and Wan, Yeyun and Liu, Jing and Fu, Hailong and Li, Xiang and Chen, Jiangang},
  journal = {Medical \\& Biological Engineering \\& Computing},
  year    = {2026},
  volume  = {64},
  pages   = {419--433},
  doi     = {10.1007/s11517-025-03442-7}
}`;

const copy = {
  en: {
    journalGroup: 'Journal articles',
    conferenceGroup: 'Conference contributions',
    manuscriptGroup: 'Ongoing research',
    journal: 'Medical & Biological Engineering & Computing (MBEC) · Volume 64 · pages 419–433',
    published: 'February 2026',
    doi: 'DOI', abstractLink: 'Abstract', bibtexLink: 'BibTeX',
    abstractTitle: 'Abstract', bibtexTitle: 'BibTeX citation', copy: 'Copy BibTeX to clipboard',
    pdf: 'PDF',
    abstract: 'Measuring optic nerve sheath diameter (ONSD) from ultrasound video can be difficult because it depends on operator skill and manual frame selection. This paper presents an automated pipeline that combines kernel correlation filter tracking and SLIC segmentation to identify a suitable frame, then uses a Gaussian mixture model and KL-divergence-based method to map and measure the sheath. Compared with the average measurements of two expert clinicians, the method reports a mean error of 0.04, mean squared deviation of 0.054, and an intraclass correlation coefficient of 0.782.',
    authors: ['Renxing Li', 'Weiyi Tang', 'Peiqi Li', 'Qiming Huang', 'Jiayuan She', 'Shengkai Li', 'Haoran Xu', 'Yeyun Wan', 'Jing Liu', 'Hailong Fu', 'Xiang Li', 'Jiangang Chen*'],
  },
  zh: {
    journalGroup: '期刊论文',
    conferenceGroup: '会议投稿与展示',
    manuscriptGroup: '在研工作',
    journal: 'Medical & Biological Engineering & Computing (MBEC) · 第 64 卷 · 419–433 页',
    published: '2026 年 2 月',
    doi: 'DOI', abstractLink: '摘要', bibtexLink: 'BibTeX',
    abstractTitle: '摘要', bibtexTitle: 'BibTeX 引用', copy: '复制 BibTeX',
    pdf: 'PDF',
    abstract: '从超声视频中测量视神经鞘直径（ONSD）依赖操作者经验，也需要人工挑选合适的视频帧。论文提出一套自动化流程：先结合核相关滤波跟踪与 SLIC 分割筛选合适帧，再使用高斯混合模型和基于 KL 散度的方法定位并测量视神经鞘。与两位专家医师的平均测量值比较，该方法报告的平均误差为 0.04、均方偏差为 0.054，组内相关系数为 0.782。',
    authors: ['Renxing Li', 'Weiyi Tang', 'Peiqi Li', 'Qiming Huang', 'Jiayuan She', 'Shengkai Li', 'Haoran Xu', 'Yeyun Wan', 'Jing Liu', 'Hailong Fu', 'Xiang Li', 'Jiangang Chen*'],
  },
} as const;

type PublicationAuthor = { name: string; self?: boolean; corresponding?: boolean };
type PublicationKind = 'journal' | 'conference' | 'poster' | 'demo' | 'manuscript';
type Entry = {
  title: string;
  authors: PublicationAuthor[];
  venue: string;
  kind: PublicationKind;
  status?: Record<Locale, string>;
  pdf?: string;
};

const kindLabels: Record<PublicationKind, Record<Locale, string>> = {
  journal: { en: 'Full paper', zh: '完整论文' },
  conference: { en: 'Full paper', zh: '完整论文' },
  poster: { en: 'Poster', zh: 'Poster' },
  demo: { en: 'Demo', zh: 'Demo' },
  manuscript: { en: 'Full paper', zh: '完整论文' },
};
const statusKinds: Record<string, string> = {
  Published: 'published',
  Accepted: 'accepted',
  'Under Review': 'under-review',
  'In Preparation': 'in-preparation',
};

const conferenceEntries: Entry[] = [
  {
    title: 'AcuBQA: A RAG-based Bilingual Acupuncture QA System via Domain-Specific Fine-tuning',
    authors: [{ name: 'Yeyun Wan', self: true }, { name: 'Ruizhe Wang' }, { name: 'Ruoxuan Mai' }, { name: 'Qilei Sun', corresponding: true }],
    venue: '41st China Conference on Computer Applications · 2026',
    kind: 'conference',
    status: { en: 'Accepted', zh: '已录用' },
    pdf: `${publicBasePath}/papers/acubqa-2026.pdf`,
  },
  {
    title: 'A User-Controlled VR Coping Hub: Three Interaction Cases',
    authors: [{ name: 'Yeyun Wan', self: true }, { name: 'Binwei Lei' }, { name: 'Ruoxuan Mai' }, { name: 'Qilei Sun', corresponding: true }],
    venue: "ACM Symposium on Virtual Reality Software and Technology (VRST '26)",
    kind: 'poster',
    status: { en: 'Accepted', zh: '已录用' },
    pdf: `${publicBasePath}/papers/vr-coping-toolkit-vrst-poster.pdf`,
  },
];

const manuscriptEntries: Entry[] = [
  {
    title: 'Enhancing VR Stress Recovery with LLM-based Conversational Grounding and Embodied High-Fidelity Avatar',
    authors: [{ name: 'Binwei Lei' }, { name: 'Cheng Lian' }, { name: 'Ruoxuan Mai' }, { name: 'Yeyun Wan', self: true }, { name: 'Qilei Sun', corresponding: true }],
    venue: 'IEEE Transactions on Visualization and Computer Graphics (TVCG) · 2026',
    kind: 'manuscript',
    status: { en: 'Under Review', zh: '审稿中' },
  },
  {
    title: 'Demonstrating Drift: Breath-Paced Travel Through Restorative Virtual Worlds with a Live Physiological Mirror',
    authors: [{ name: 'Binwei Lei' }, { name: 'Yeyun Wan', self: true }, { name: 'Ruoxuan Mai' }, { name: 'Qilei Sun', corresponding: true }],
    venue: "ACM Symposium on Virtual Reality Software and Technology (VRST '26)",
    kind: 'demo',
    status: { en: 'Under Review', zh: '审稿中' },
  },
];

function AuthorLine({ authors, locale }: { authors: PublicationAuthor[]; locale: Locale }) {
  return <p className="publication-showcase-authors">{authors.map((author, index) => <span key={author.name}>{index > 0 && (locale === 'en' ? ', ' : '、')}{author.self ? <strong className="publication-author-self">{author.name}</strong> : author.name}{author.corresponding && <sup>*</sup>}</span>)}.</p>;
}

function Group({ title, entries, locale, pdfLabel }: { title: string; entries: Entry[]; locale: Locale; pdfLabel: string }) {
  return (
    <section className="publication-group">
      <h2>{title}</h2>
      {entries.map((entry) => (
        <article className="publication-showcase" key={entry.title}>
          <h3>{entry.title}</h3>
          <AuthorLine authors={entry.authors} locale={locale} />
          <div className="publication-showcase-meta"><span>{entry.venue}</span><div className="publication-badges">{entry.status && <span className={`publication-badge publication-badge-${statusKinds[entry.status.en]}`}>{entry.status[locale]}</span>}<span className="publication-badge publication-badge-kind">{kindLabels[entry.kind][locale]}</span></div></div>
          {entry.pdf && <div className="publication-extra-actions"><a className="publication-action" href={entry.pdf} target="_blank" rel="noreferrer">{pdfLabel}</a></div>}
        </article>
      ))}
    </section>
  );
}

export default function PublicationCard({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <div className="publication-showcase-list">
      <section className="publication-group">
        <h2>{text.journalGroup}</h2>
        <article className="publication-showcase">
          <div className="publication-entry-heading"><h3>Automated measurement of optic nerve sheath diameter using ocular ultrasound video</h3><span>{text.published}</span></div>
          <div className="publication-badges publication-journal-badges"><span className="publication-badge publication-badge-published">{locale === 'en' ? 'Published' : '已发表'}</span><span className="publication-badge publication-badge-kind">{kindLabels.journal[locale]}</span></div>
          <AuthorLine authors={text.authors.map((author) => ({ name: author.replace('*', ''), self: author.replace('*', '') === 'Yeyun Wan', corresponding: author.endsWith('*') }))} locale={locale} />
          <p className="publication-showcase-journal">{text.journal}</p>
          <PublicationInteractions doiLabel={text.doi} doiHref="https://doi.org/10.1007/s11517-025-03442-7" abstractLabel={text.abstractLink} abstractTitle={text.abstractTitle} abstract={text.abstract} bibtexLabel={text.bibtexLink} bibtexTitle={text.bibtexTitle} bibtex={bibtex} copyLabel={text.copy} />
        </article>
      </section>
      <Group title={text.conferenceGroup} entries={conferenceEntries} locale={locale} pdfLabel={text.pdf} />
      <Group title={text.manuscriptGroup} entries={manuscriptEntries} locale={locale} pdfLabel={text.pdf} />
    </div>
  );
}
