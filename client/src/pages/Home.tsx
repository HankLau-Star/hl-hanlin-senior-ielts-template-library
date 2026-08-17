import { useState } from "react";
import { Link } from "wouter";
import { taskOneChecklist, taskOneTemplates } from "@/lib/writingTemplates";
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
  const [selectedSection, setSelectedSection] = useState("Part 1");
  const active = subjects.find((item) => item.key === activeKey) ?? subjects[0];
  const ActiveIcon = active.icon;
  const selectSubject = (key: SubjectKey) => {
    setActiveKey(key);
    setSelectedSection(key === "writing" ? "小作文" : (subjects.find((item) => item.key === key)?.sections[0] ?? "Part 1"));
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
          {subjects.map((subject) => { const Icon = subject.icon; return <button key={subject.key} className={activeKey === subject.key ? "selected" : ""} onClick={() => selectSubject(subject.key)}><Icon size={15} /><span>{subject.zh}</span><small>{subject.en}</small></button>; })}
        </div>
        <div className="chapters-head"><div><div className="active-label"><ActiveIcon size={17} /> ACTIVE MODULE</div><h2>{active.zh} <em>{active.en}</em></h2></div><span className="chapter-note">你的个人模板<br /><small>YOUR PERSONAL NOTES</small></span></div>
        <div className="chapter-track">
          {active.sections.map((section, index) => <button className={`chapter-pill ${selectedSection === section ? "is-selected" : ""}`} key={section} onClick={() => setSelectedSection(section)}>
            <span className="chapter-no">0{index + 1}</span><span className="chapter-title">{section}<small>{active.sectionEn[index]}</small></span><span className="chapter-state">待补充<br /><small>TO BE ADDED</small></span><ChevronRight size={16} />
          </button>)}
        </div>
        <div className="glass-note"><span className="glass-dot" /><div><b>模板空间已准备好</b><small>Your template space is ready.</small></div></div>
        {activeKey === "writing" && selectedSection === "小作文" && <TaskOnePanel />}
      </section>

      <footer className="minimal-footer"><span className="footer-mark"><span /><span /><span /></span><span><b>HL · 汉林师兄的雅思模板库</b><small>HL HANLIN SENIOR'S IELTS TEMPLATE LIBRARY</small></span><i>PERSONAL PLAYBOOK · 2026</i></footer>
    </main>
  );
}

function TaskOnePanel() {
  const [activeTemplate, setActiveTemplate] = useState<"dynamic" | "static">("dynamic");
  const template = taskOneTemplates.find((item) => item.key === activeTemplate) ?? taskOneTemplates[0];

  return (
    <div className="task-one-panel">
      <div className="task-one-head">
        <div><span className="active-label">WRITING / TASK 1</span><h3>小作文 <em>Task 1</em></h3><p>图表题个人模板 · Personal chart templates</p></div>
        <div className="task-tabs" role="tablist" aria-label="小作文模板类型">
          {taskOneTemplates.map((item) => <button key={item.key} className={activeTemplate === item.key ? "active" : ""} onClick={() => setActiveTemplate(item.key)} role="tab" aria-selected={activeTemplate === item.key}><span>{item.title}</span><small>{item.titleEn}</small></button>)}
        </div>
      </div>
      <div className="task-fit"><span>适用题型 / FITS</span><b>{template.fit}</b><small>{template.fitEn}</small></div>
      <div className="task-blocks">
        {template.blocks.map((block, index) => <article className="task-block" key={block.title}>
          <div className="task-block-index">0{index + 1}</div>
          <div className="task-block-content"><div className="task-block-title"><h4>{block.title}</h4><span>{block.titleEn}</span></div><p className="template-english">{block.english}</p><p className="template-chinese">{block.chinese}</p>{block.notes && <div className="template-notes"><span>怎么用 / HOW TO USE</span>{block.notes.map((note) => <small key={note}>{note}</small>)}</div>}</div>
        </article>)}
      </div>
      <div className="task-checklist"><div><span>考试只做这个 / EXAM CHECKLIST</span><strong>{activeTemplate === "dynamic" ? "动态图" : "静态图"}</strong></div><div className="checklist-items">{taskOneChecklist[activeTemplate].map((item) => <span key={item}>{item}</span>)}</div></div>
      <div className="task-warning"><b>最重要 / KEY RULE</b><span>模板可以删句，绝对不要为了写完模板而描述图里不存在的趋势。</span><small>You may remove sentences. Never describe a trend that does not appear in the chart.</small></div>
    </div>
  );
}
