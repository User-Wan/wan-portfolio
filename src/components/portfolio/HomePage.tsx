import Link from 'next/link';
import { Github, Mail } from 'lucide-react';
import type { Locale } from '@/lib/portfolio-content';

const copy = {
  en: {
    title: 'Yeyun Wan',
    eyebrow: 'HELLO, I’M',
    kicker: 'Research & Engineering for Intelligent Systems',
    profileDegree: 'Information and Computing Science',
    profileUniversity: "Xi’an Jiaotong-Liverpool University",
    profileSummary: 'I combine research and engineering across applied AI, XR, and software systems, with attention to human needs and real-world applications.',
    heroIntro: 'Information and Computing Science at Xi’an Jiaotong-Liverpool University.',
    focusLabel: 'MY FOCUS',
    focusItems: [
      { number: '01', title: 'Research', detail: ['IDEAS TO EVIDENCE'] },
      { number: '02', title: 'AI & XR', detail: ['MODELS · INTERACTIONS', 'ENVIRONMENTS'] },
      { number: '03', title: 'Systems', detail: ['SOFTWARE · PLATFORMS', 'REAL-WORLD APPLICATIONS'] },
    ],
    profileTags: ['AI', 'Software Systems', 'XR'],
    projects: 'Explore Projects', aboutLink: 'About me', publications: 'Publications',
    selectedLabel: 'SELECTED WORK', selectedTitle: 'Selected projects',
    introTitle: 'About me',
    intro: [
      'I am an undergraduate student in Information and Computing Science at Xi’an Jiaotong-Liverpool University, with experience in applied AI, immersive computing, and software engineering.',
      'Through projects involving retrieval-augmented generation, VR interaction, spatial intelligence, and information systems, I have developed an interest in building intelligent systems that connect technical capabilities with real-world needs. I enjoy exploring problems from research and engineering perspectives, from understanding requirements to developing and evaluating working systems.',
    ],
    educationTitle: 'Education', degree: 'BSc (Hons) in Information and Computing Science (In Progress)', university: "Xi’an Jiaotong-Liverpool University", educationPeriod: 'Sep 2022–Jul 2027 (Expected)', degreeNote: '',
    trainingTitle: 'RAS Lab Summer School', trainingInstitution: 'Fudan University', trainingPeriod: 'Jul 2023–Aug 2023', trainingCoursework: 'Coursework: Robotics, ROS, Computer Vision, Machine Learning Fundamentals, and Research Methodology.',
    experienceTitle: 'Research experience',
    additionalExperienceTitle: 'Additional experience',
    additionalExperience: [
      { period: '2022–2023', title: 'Market Operations Team Leader', organization: 'Campus WeChat Official Account', summary: 'Led a widely shared survey feature, handling questionnaire design, analysis of 100+ responses, and copywriting.' },
      { period: '2022–2023', title: 'Vice President & Head of Technology', organization: 'Traditional-Culture Society', summary: 'Co-organized campus cultural events with more than 3,000 participants.' },
    ],
    technicalTitle: 'Technical proficiencies', technicalCategory: 'Programming & Tools', technicalSkills: ['Unity', 'Python', 'Java', 'C', 'MySQL', 'LaTeX'],
    timeline: [
      { period: 'Jun 2025–Present', title: 'Research Assistant', organization: 'Virtual Engineering Center, Xi’an Jiaotong-Liverpool University', organizationLinks: [{ label: 'Virtual Engineering Center, Xi’an Jiaotong-Liverpool University', href: 'https://www.xjtlu.edu.cn/zh/research/institutes-centres-and-labs/jiangsu-province-engineering-research-center-of-data-science-and-cognitive-computing' }], summary: 'Contributing to research in spatial intelligence, immersive XR interaction, and multimodal AI systems, including system development, experimental evaluation, and technical coordination.' },
      { period: 'Jun 2024–Sep 2024', title: 'Research Assistant', organization: 'Shanghai Key Laboratory of Multidimensional Information Processing, East China Normal University', organizationLinks: [{ label: 'Shanghai Key Laboratory of Multidimensional Information Processing, East China Normal University', href: 'https://ultrasound.ecnu.edu.cn/' }], summary: 'Supported ocular ultrasound research through reference measurement preparation, annotation consistency checks, and the collection of clinical requirements.' },
    ],
    projectSection: 'All projects', projectSub: 'Research projects and course systems, with team context and individual roles made clear.',
    projectLabel: 'PROJECTS',
    publicationSection: 'Publications',
    researchOutputLabel: 'RESEARCH OUTPUT',
    publicationEyebrow: 'PEER-REVIEWED JOURNAL ARTICLE',
    publicationTitle: 'Automated measurement of optic nerve sheath diameter using ocular ultrasound video',
    publicationMeta: 'Medical & Biological Engineering & Computing · Volume 64 · pages 419–433 (2026). First published 14 October 2025.',
    publicationAuthors: 'Renxing Li, Weiyi Tang, Peiqi Li, Qiming Huang, Jiayuan She, Shengkai Li, Haoran Xu, Yeyun Wan, Jing Liu, Hailong Fu, Xiang Li, and Jiangang Chen.',
    publicationRole: 'Author contribution: project administration, as stated in the publisher record.',
    publicationLink: 'View publication details',
    note: 'Course team projects are included. Each project page distinguishes shared team outcomes from my documented contribution.',
  },
  zh: {
    title: 'Yeyun Wan',
    eyebrow: '你好，我是',
    kicker: '面向智能系统的研究与工程实践',
    profileDegree: '信息与计算科学',
    profileUniversity: '西交利物浦大学',
    profileSummary: '我结合研究与工程实践，探索应用人工智能、XR 和软件系统，关注人的需求与真实场景中的应用。',
    heroIntro: '西交利物浦大学信息与计算科学专业本科生。',
    focusLabel: '我的方向',
    focusItems: [
      { number: '01', title: '研究', detail: ['从想法到证据'] },
      { number: '02', title: 'AI 与 XR', detail: ['模型 · 交互', '沉浸式环境'] },
      { number: '03', title: '系统', detail: ['软件 · 平台', '真实场景应用'] },
    ],
    profileTags: ['AI', '软件系统', 'XR'],
    projects: '浏览项目', aboutLink: '关于我', publications: '论文',
    selectedLabel: 'SELECTED WORK / 精选项目', selectedTitle: '精选项目',
    introTitle: '关于我',
    intro: [
      '我目前就读于西交利物浦大学信息与计算科学专业，具有应用人工智能、沉浸式计算与软件工程方面的研究和项目经历。',
      '从检索增强生成、VR 交互与空间智能，到信息系统开发，这些实践让我逐渐关注如何将 AI 技术、软件系统与实际需求相结合。我希望从研究与工程两个角度探索问题，参与从需求理解、系统开发到实际评估的完整过程。',
    ],
    educationTitle: '教育背景', degree: '信息与计算科学理学学士（荣誉，在读）', university: '西交利物浦大学', educationPeriod: '2022年9月–2027年7月（预计）', degreeNote: '',
    trainingTitle: 'RAS Lab 暑期学校', trainingInstitution: '复旦大学', trainingPeriod: '2023年7月–2023年8月', trainingCoursework: '课程内容：机器人、ROS、计算机视觉、机器学习基础与研究方法。',
    experienceTitle: '研究经历',
    additionalExperienceTitle: '其他经历',
    additionalExperience: [
      { period: '2022–2023', title: '市场运营组组长', organization: '校园微信公众号', summary: '主导问卷专题内容的策划与运营，负责问卷设计、100 余份样本分析和文案撰写，内容获得广泛传播。' },
      { period: '2022–2023', title: '副社长兼技术负责人', organization: '传统文化社团', summary: '协同组织校园文化活动，累计参与人数超过 3,000 人。' },
    ],
    technicalTitle: '技术能力', technicalCategory: '编程与工具', technicalSkills: ['Unity', 'Python', 'Java', 'C', 'MySQL', 'LaTeX'],
    timeline: [
      { period: '2025年6月至今', title: '研究助理', organization: '西交利物浦大学 Virtual Engineering Center', organizationLinks: [{ label: '西交利物浦大学 Virtual Engineering Center', href: 'https://www.xjtlu.edu.cn/zh/research/institutes-centres-and-labs/jiangsu-province-engineering-research-center-of-data-science-and-cognitive-computing' }], summary: '参与空间智能、沉浸式 XR 交互与多模态 AI 系统研究，包括系统开发、实验评估和技术协调。' },
      { period: '2024年6月至9月', title: '研究助理', organization: '华东师范大学多维信息处理上海市重点实验室', organizationLinks: [{ label: '华东师范大学多维信息处理上海市重点实验室', href: 'https://ultrasound.ecnu.edu.cn/' }], summary: '参与眼部超声研究，协助准备参考测量、核查标注一致性并收集临床需求。' },
    ],
    projectSection: '全部项目', projectSub: '研究项目与课程信息系统，并清楚说明团队背景和个人职责。',
    projectLabel: '项目',
    publicationSection: '论文与研究成果',
    researchOutputLabel: '研究成果',
    publicationEyebrow: '同行评审期刊论文',
    publicationTitle: 'Automated measurement of optic nerve sheath diameter using ocular ultrasound video',
    publicationMeta: 'Medical & Biological Engineering & Computing，第 64 卷，419–433 页（2026）。在线首发：2025 年 10 月 14 日。',
    publicationAuthors: 'Renxing Li、Weiyi Tang、Peiqi Li、Qiming Huang、Jiayuan She、Shengkai Li、Haoran Xu、Yeyun Wan、Jing Liu、Hailong Fu、Xiang Li 和 Jiangang Chen。',
    publicationRole: '作者贡献：项目管理（依据出版方记录）。',
    publicationLink: '查看论文与出版信息',
    note: '列表包含课程团队项目。每个项目页面都会区分团队共同成果与有材料支持的个人贡献。',
  },
} as const;

export function AboutPage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <section className="container about-page-content">
        <div className="home-main-column">
          <section className="home-about" id="about">
            <h2>{text.introTitle}</h2>
            {text.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <section className="section home-section" id="education">
            <div className="section-heading"><h2>{text.educationTitle}</h2></div>
            <div className="publication-list">
              <article className="publication-item about-timeline-item">
                <div className="publication-year">{text.educationPeriod}</div>
                <div><h3 className="timeline-institution">{text.university}</h3><p className="timeline-qualification">{text.degree}</p>{text.degreeNote && <p>{text.degreeNote}</p>}</div>
              </article>
              <article className="publication-item about-timeline-item">
                <div className="publication-year">{text.trainingPeriod}</div>
                <div>
                  <div className="timeline-role-line education-role-line">
                    <h3 className="timeline-institution">{text.trainingTitle}</h3>
                    <div className="timeline-affiliation"><span>{text.trainingInstitution}</span></div>
                  </div>
                  <p className="timeline-qualification">{text.trainingCoursework}</p>
                </div>
              </article>
            </div>
          </section>

          <section className="section home-section" id="experience">
            <div className="section-heading"><h2>{text.experienceTitle}</h2></div>
            <div className="publication-list">
              {text.timeline.map((item) => (
                <article className="publication-item about-timeline-item" key={`${item.period}-${item.title}`}>
                  <div className="publication-year">{item.period}</div>
                  <div><div className="timeline-role-line"><h3>{item.title}</h3><div className="timeline-affiliation">{item.organizationLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div></div>{'summary' in item && <p>{item.summary}</p>}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="section home-section" id="additional-experience">
            <div className="section-heading"><h2>{text.additionalExperienceTitle}</h2></div>
            <div className="publication-list">
              {text.additionalExperience.map((item) => (
                <article className="publication-item about-timeline-item" key={`${item.period}-${item.title}`}>
                  <div className="publication-year">{item.period}</div>
                  <div>
                    <div className="timeline-role-line"><h3>{item.title}</h3><div className="timeline-affiliation"><span>{item.organization}</span></div></div>
                    <p>{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section home-section" id="technical-proficiencies">
            <div className="section-heading"><h2>{text.technicalTitle}</h2></div>
            <div className="technical-proficiency-row">
              <h3>{text.technicalCategory}</h3>
              <ul>{text.technicalSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          </section>

        </div>
    </section>
  );
}

export default function HomePage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <section className="home-hero">
      <div className="container home-hero-inner">
        <div className="home-hero-copy">
          <p className="home-hero-eyebrow">{text.eyebrow}<span aria-hidden="true" /></p>
          <h1>{text.title}</h1>
          <p className="home-hero-tagline">{text.profileSummary}</p>
          <p className="home-hero-intro">{text.heroIntro}</p>
          <div className="hero-actions home-hero-actions">
            <Link className="button button-primary" href={`/${locale}/projects/`}>{text.projects}<span aria-hidden="true">→</span></Link>
            <Link className="button button-secondary" href={`/${locale}/about/`}>{text.aboutLink}</Link>
          </div>
          <div className="home-social-links">
            <a className="home-social-link" href="https://github.com/User-Wan" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={20} aria-hidden="true" />
            </a>
            <span className="home-social-divider" aria-hidden="true" />
            <a className="home-social-link" href="mailto:evelyn_827@163.com" aria-label="Email Yeyun Wan">
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="home-focus">
          <p className="home-focus-eyebrow"><span aria-hidden="true" />{text.focusLabel}</p>
          <h2>{text.kicker}</h2>
          <div className="home-focus-map">
            <svg className="home-focus-connector" viewBox="0 0 600 430" preserveAspectRatio="none" aria-hidden="true">
              <path d="M245 48 H315 V158 H350 V345 H245" />
              <circle cx="245" cy="48" r="5" />
              <circle cx="350" cy="158" r="5" />
              <circle cx="245" cy="345" r="5" />
            </svg>
            {text.focusItems.map((item, index) => (
              <div className={`home-focus-item home-focus-item-${index + 1}`} key={item.number}>
                <div className="home-focus-number">{item.number}<span aria-hidden="true" /></div>
                <h3>{item.title}</h3>
                <p>{item.detail.map((line) => <span key={line}>{line}</span>)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
