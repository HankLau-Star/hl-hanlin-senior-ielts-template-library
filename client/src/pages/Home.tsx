import { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Headphones,
  Highlighter,
  Menu,
  Mic2,
  PenLine,
  Search,
  Sparkles,
  X,
} from "lucide-react";

/**
 * Design reminder: “纸上航线” / editorial study tool.
 * Use paper-white space, ink navy typography, coral route markers, and
 * asymmetric index-led layouts. Do not invent template body copy.
 */

type SubjectKey = "listening" | "speaking" | "reading" | "writing";

type Subject = {
  key: SubjectKey;
  label: string;
  english: string;
  description: string;
  count: string;
  icon: typeof Headphones;
  accent: string;
  image?: string;
  sections: string[];
};

const subjects: Subject[] = [
  {
    key: "listening",
    label: "听力",
    english: "LISTENING",
    description: "从 Part 1 到 Part 4，按场景和题型整理你的听力应对路径。",
    count: "4 个章节",
    icon: Headphones,
    accent: "coral",
    image: "/manus-storage/ielts-listening-illustration_38b9b238.png",
    sections: ["Part 1", "Part 2", "Part 3", "Part 4"],
  },
  {
    key: "speaking",
    label: "口语",
    english: "SPEAKING",
    description: "把 Part 1、Part 2、Part 3 的表达骨架，变成可以反复练习的答案。",
    count: "3 个章节",
    icon: Mic2,
    accent: "navy",
    sections: ["Part 1", "Part 2", "Part 3"],
  },
  {
    key: "reading",
    label: "阅读",
    english: "READING",
    description: "留下定位、判断和取舍的思路，让每一篇文章都能快速复盘。",
    count: "3 个章节",
    icon: BookOpen,
    accent: "olive",
    sections: ["Part 1", "Part 2", "Part 3"],
  },
  {
    key: "writing",
    label: "写作",
    english: "WRITING",
    description: "小作文与大作文分开归档，逐步补全你的个人写作模板。",
    count: "2 个章节",
    icon: PenLine,
    accent: "sand",
    image: "/manus-storage/ielts-writing-illustration_8fd4b857.png",
    sections: ["小作文", "大作文"],
  },
];

const subjectByKey = Object.fromEntries(subjects.map((subject) => [subject.key, subject])) as Record<SubjectKey, Subject>;

export default function Home() {
  const [activeKey, setActiveKey] = useState<SubjectKey>("listening");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSubject = useMemo(() => subjectByKey[activeKey], [activeKey]);
  const ActiveIcon = activeSubject.icon;

  const chooseSubject = (key: SubjectKey) => {
    setActiveKey(key);
    setMenuOpen(false);
    window.setTimeout(() => document.getElementById("template-library")?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="IELTS Template Study 首页">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
            <span className="brand-name">IELTS <em>Template Study</em></span>
          </Link>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="主导航">
            <a href="#route">学习航线</a>
            <a href="#template-library">模板库</a>
            <a href="#notes">使用说明</a>
          </nav>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "关闭菜单" : "打开菜单"}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a className="header-action" href="#template-library">打开模板库 <ArrowUpRight size={15} /></a>
        </div>
      </header>

      <section className="hero-section" id="route">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> PERSONAL IELTS PLAYBOOK <span className="eyebrow-dot" /></div>
          <h1>把零散技巧，<br /><i>整理成自己的</i><br /><span>应试手册。</span></h1>
          <p className="hero-description">这是你的雅思个人模板工作台。按听、说、读、写建立章节，留下真正对自己有效的应对方式。</p>
          <div className="hero-actions">
            <a className="primary-button" href="#template-library">浏览四科模板 <ChevronRight size={17} /></a>
            <a className="text-button" href="#notes"><Highlighter size={16} /> 如何使用</a>
          </div>
          <div className="hero-meta"><span><Check size={14} /> 四科清晰归档</span><span><Check size={14} /> 模板随时补充</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-note note-top">四科 · 12 个章节</div>
          <div className="hero-image-frame"><img src="/manus-storage/ielts-paper-route-hero_0828f1d8.png" alt="纸张、笔记和四科学习线索组成的雅思备考桌面" /></div>
          <div className="hero-note note-bottom"><span className="note-index">01</span><span>从今天要练的部分开始</span></div>
          <div className="route-stamp">MY<br />ROUTE</div>
        </div>
      </section>

      <section className="subjects-section" aria-labelledby="subjects-title">
        <div className="section-heading">
          <div><div className="section-kicker">01 / THE ROUTE</div><h2 id="subjects-title">四科，一条<br /><i>清晰的路线。</i></h2></div>
          <p>不用在一堆资料里来回寻找。<br />从科目进入，再打开对应章节。</p>
        </div>
        <div className="subject-rail" aria-label="雅思四科选择">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return <button key={subject.key} className={`subject-card ${activeKey === subject.key ? "is-active" : ""} accent-${subject.accent}`} onClick={() => chooseSubject(subject.key)}>
              <span className="subject-number">0{index + 1}</span>
              <span className="subject-icon"><Icon size={22} strokeWidth={1.6} /></span>
              <span className="subject-label">{subject.label}</span>
              <span className="subject-english">{subject.english}</span>
              <span className="subject-count">{subject.count}</span>
              <span className="subject-arrow"><ArrowUpRight size={18} /></span>
            </button>;
          })}
        </div>
      </section>

      <section className="library-section" id="template-library" aria-labelledby="library-title">
        <div className="library-index"><span className="section-kicker">02 / YOUR LIBRARY</span><div className="index-rule" /><p>选择一科<br />开始整理</p><div className="index-mini-mark"><span /><span /><span /></div></div>
        <div className="library-main">
          <div className="library-heading"><div><div className="section-kicker">CURRENTLY OPEN</div><h2 id="library-title"><ActiveIcon size={27} strokeWidth={1.7} /> {activeSubject.label}<small>{activeSubject.english}</small></h2></div><div className="search-hint"><Search size={16} /> 模板搜索将在内容补充后开放</div></div>
          <p className="library-intro">{activeSubject.description}</p>
          <div className="template-list">
            {activeSubject.sections.map((section, index) => <button className="template-row" key={section}>
              <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="row-title">{section}</span>
              <span className="row-status">待补充 <span className="status-dot" /></span>
              <ChevronRight className="row-chevron" size={20} />
            </button>)}
          </div>
          <div className="empty-template"><Sparkles size={18} /><div><strong>你的模板会放在这里</strong><span>等你发来具体内容后，我会按章节整理成易读、可复习的模板。</span></div></div>
        </div>
        <aside className="library-aside">
          {activeSubject.image ? <img src={activeSubject.image} alt="当前科目纸张插画" /> : <div className="aside-quote"><span>“</span><p>先搭好<br /><em>答案的骨架。</em></p><small>— personal note</small></div>}
          <div className="aside-caption"><span>YOUR NOTES</span><span>{activeSubject.label} / 0{activeSubject.sections.length}</span></div>
        </aside>
      </section>

      <section className="notes-section" id="notes">
        <div className="notes-card"><span className="notes-number">03</span><div><div className="section-kicker">A SMALL REMINDER</div><h2>模板不是标准答案，<br /><i>而是你的起点。</i></h2><p>把你真正说得出口、写得顺手、听得懂的表达留下来。之后每一次练习，都只需要打开对应的一页。</p></div><div className="notes-signature"><img src="/manus-storage/ielts-route-mark_238959ae.png" alt="四科学习路线标志" /><span>keep your<br />own route</span></div></div>
      </section>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span><span>IELTS Template Study</span></div><span className="footer-note">A personal playbook for your next band score.</span><span className="footer-year">2026 / BUILD YOUR ROUTE</span></footer>
    </main>
  );
}
