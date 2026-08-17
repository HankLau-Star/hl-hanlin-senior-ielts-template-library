import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, BookOpen, ChevronRight, Headphones, Menu, Mic2, PenLine, X } from "lucide-react";

/** Design reminder: Apple-inspired calm glass study tool; minimal copy, bilingual hierarchy, four modules first. */

type SubjectKey = "listening" | "speaking" | "reading" | "writing";
type Subject = { key: SubjectKey; zh: string; en: string; icon: typeof Headphones; sections: string[]; sectionEn: string[] };

const subjects: Subject[] = [
  { key: "listening", zh: "听力", en: "Listening", icon: Headphones, sections: ["Part 1", "Part 2", "Part 3", "Part 4"], sectionEn: ["Social conversation", "Monologue", "Academic discussion", "Academic lecture"] },
  { key: "speaking", zh: "口语", en: "Speaking", icon: Mic2, sections: ["Part 1", "Part 2", "Part 3"], sectionEn: ["Introduction & interview", "Long turn", "Discussion"] },
  { key: "reading", zh: "阅读", en: "Reading", icon: BookOpen, sections: ["Part 1", "Part 2", "Part 3"], sectionEn: ["Passage one", "Passage two", "Passage three"] },
  { key: "writing", zh: "写作", en: "Writing", icon: PenLine, sections: ["小作文", "大作文"], sectionEn: ["Task 1", "Task 2"] },
];

export default function Home() {
  const [activeKey, setActiveKey] = useState<SubjectKey>("listening");
  const [menuOpen, setMenuOpen] = useState(false);
  const active = subjects.find((item) => item.key === activeKey) ?? subjects[0];
  const ActiveIcon = active.icon;
  const selectSubject = (key: SubjectKey) => {
    setActiveKey(key);
    setMenuOpen(false);
    window.setTimeout(() => document.getElementById("chapters")?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  };

  return (
    <main className="minimal-page">
      <header className="topbar">
        <Link href="/" className="wordmark"><span className="wordmark-mark"><span /><span /><span /><span /></span><span><b>HL · 汉林师兄</b><small>HL HANLIN SENIOR'S</small></span></Link>
        <nav className={menuOpen ? "topnav open" : "topnav"}>
          <a href="#modules">四大模块 <small>MODULES</small></a>
          <a href="#chapters">模板章节 <small>CHAPTERS</small></a>
        </nav>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="菜单">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        <a className="topbar-button" href="#modules">开始学习 <span>START</span><ArrowUpRight size={14} /></a>
      </header>

      <section className="minimal-hero">
        <div className="hero-overline"><span /> HANLIN SENIOR'S IELTS TEMPLATE LIBRARY</div>
        <h1><small>HL</small> 汉林师兄的<br /><em>雅思模板库</em></h1>
        <p>个人应试模板，清晰归档，随时复习。<br /><span>Personal templates. Clear structure. Your own route.</span></p>
        <a className="hero-link" href="#modules">进入四大模块 <ChevronRight size={15} /></a>
        <div className="hero-orbit"><img src="/manus-storage/ielts-route-mark_238959ae.png" alt="Hanlin Senior IELTS library mark" /></div>
      </section>

      <section className="modules-section" id="modules">
        <div className="section-topline"><span>01 / 核心模块</span><span>THE FOUR MODULES</span></div>
        <div className="module-intro"><h2>选择一科<br /><em>开始整理。</em></h2><p>四个入口，覆盖你的完整备考路径。<br />Four focused spaces for your IELTS journey.</p></div>
        <div className="module-grid">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return <button key={subject.key} aria-pressed={activeKey === subject.key} className={`module-card ${activeKey === subject.key ? "active" : ""}`} onClick={() => selectSubject(subject.key)}>
              <div className="module-node"><span>0{index + 1}</span><i /></div>
              <Icon className="module-icon" size={31} strokeWidth={1.45} />
              <strong>{subject.zh}</strong><b>{subject.en}</b>
              <span className="module-count">{subject.sections.length} chapters / 章节</span>
              <ArrowUpRight className="module-arrow" size={18} />
            </button>;
          })}
        </div>
      </section>

      <section className="chapters-section" id="chapters">
        <div className="section-topline"><span>02 / 当前章节</span><span>CURRENT CHAPTERS</span></div>
        <div className="chapter-switcher" aria-label="切换当前科目">
          {subjects.map((subject) => { const Icon = subject.icon; return <button key={subject.key} className={activeKey === subject.key ? "selected" : ""} onClick={() => setActiveKey(subject.key)}><Icon size={15} /><span>{subject.zh}</span><small>{subject.en}</small></button>; })}
        </div>
        <div className="chapters-head"><div><div className="active-label"><ActiveIcon size={17} /> ACTIVE MODULE</div><h2>{active.zh} <em>{active.en}</em></h2></div><span className="chapter-note">你的个人模板<br /><small>YOUR PERSONAL NOTES</small></span></div>
        <div className="chapter-track">
          {active.sections.map((section, index) => <button className="chapter-pill" key={section}>
            <span className="chapter-no">0{index + 1}</span><span className="chapter-title">{section}<small>{active.sectionEn[index]}</small></span><span className="chapter-state">待补充<br /><small>TO BE ADDED</small></span><ChevronRight size={16} />
          </button>)}
        </div>
        <div className="glass-note"><span className="glass-dot" /><div><b>模板空间已准备好</b><small>Your template space is ready.</small></div></div>
      </section>

      <footer className="minimal-footer"><span className="footer-mark"><span /><span /><span /></span><span><b>HL · 汉林师兄的雅思模板库</b><small>HL HANLIN SENIOR'S IELTS TEMPLATE LIBRARY</small></span><i>PERSONAL PLAYBOOK · 2026</i></footer>
    </main>
  );
}
