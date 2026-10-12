export type Locale = 'en' | 'zh';
export type ProjectCategory = 'research' | 'coursework';
export type ProjectLinkKind = 'github' | 'demo' | 'paper' | 'pdf';

export interface ProjectLink {
  type: ProjectLinkKind;
  url: string;
  label?: Record<Locale, string>;
}

export interface ProjectLocalizedText {
  en: string;
  zh: string;
}

export interface PortfolioProjectSummary {
  slug: string;
  order: number;
  category: ProjectCategory;
  featured: boolean;
  spotlightOrder?: number;
  spotlight?: ProjectLocalizedText;
  title: ProjectLocalizedText;
  summary: ProjectLocalizedText;
  role?: ProjectLocalizedText;
  tags: Record<Locale, string[]>;
  period?: ProjectLocalizedText;
  tech?: Record<Locale, string[]>;
  links: ProjectLink[];
}

export interface PortfolioProject extends PortfolioProjectSummary {
  body: string;
}
