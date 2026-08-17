import { useState } from "react";
import { Link } from "wouter";
import { taskOneChecklist, taskOneTemplates } from "@/lib/writingTemplates";
import { speakingPart2Cards, speakingPart2StudySteps } from "@/lib/speakingPart2Templates";
import { languageBank, orefSteps, partOneExamples, personaDimensions, universalDetails } from "@/lib/speakingPart1System";
import { publicPart2Prompts, publicPart2Sources, type StoryId } from "@/lib/publicPart2Index";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowUpRight, BookOpen, ChevronRight, Headphones, Menu, Mic2, PenLine, Search, X } from "lucide-react";

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
        {activeKey === "speaking" && selectedSection === "Part 1" && <SpeakingPartOnePanel />}
        {activeKey === "speaking" && selectedSection === "Part 2" && <SpeakingPartTwoPanel />}
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

function SpeakingPartOnePanel() {
  return (
    <div className="speaking-part-one-panel">
      <div className="speaking-one-head"><div><span className="active-label">SPEAKING / PART 1</span><h3>一版一表一人设 <em>OREF System</em></h3><p>以不变的人设、模板和细节，应对不断变化的题库。</p></div><div className="one-head-tag">PART 1<br /><small>PLAYBOOK</small></div></div>
      <section className="one-section"><div className="one-section-title"><span>01</span><div><b>一版 / OREF</b><small>万能逻辑公式模板</small></div></div><div className="oref-grid">{orefSteps.map((step) => <article key={step.key}><strong>{step.key}</strong><div><h4>{step.name} <small>{step.chinese}</small></h4><p>{step.detail}</p>{step.starters.map((starter) => <span key={starter}>{starter}</span>)}</div></article>)}</div></section>
      <section className="one-section"><div className="one-section-title"><span>02</span><div><b>一人设 / PERSONA MAP</b><small>六维专属人设映射表</small></div></div><div className="persona-grid">{personaDimensions.map((persona, index) => <article key={persona.label}><span>0{index + 1}</span><h4>{persona.label}<small>{persona.title}</small></h4><div className="persona-phrases">{persona.phrases.map((phrase) => <b key={phrase}>{phrase}</b>)}</div><p>{persona.topics}</p></article>)}</div></section>
      <section className="one-section"><div className="one-section-title"><span>03</span><div><b>万能 / UNIVERSALS</b><small>没听懂、想不到或题目抽象时的插拔细节</small></div></div><div className="universal-grid">{universalDetails.map((item) => <article key={item.title}><h4>{item.title}<small>{item.titleEn}</small></h4><p>{item.fit}</p><blockquote>{item.quote}</blockquote></article>)}</div></section>
      <section className="one-section language-section"><div className="one-section-title"><span>04</span><div><b>一表 / LANGUAGE BANK</b><small>高分语料与地道句式</small></div></div><div className="mbti-card"><b>王牌性格说明 / MBTI</b><p>{languageBank.mbti}</p></div><div className="language-grid"><div><span>提分表达 / KEY PHRASES</span>{languageBank.verbs.map((item) => <p key={item.english}><b>{item.english}</b><small>{item.chinese}</small></p>)}</div><div><span>频率表达 / TIME PHRASES</span>{languageBank.frequency.map((item) => <p key={item.english}><b>{item.english}</b><small>{item.chinese}</small></p>)}</div></div></section>
      <section className="one-section"><div className="one-section-title"><span>05</span><div><b>实战 / LIVE ASSEMBLY</b><small>题目—框架—人设的组装示例</small></div></div><Accordion type="single" collapsible className="part-one-example-accordion">{partOneExamples.map((example, index) => <AccordionItem key={example.question} value={`example-${index}`}><AccordionTrigger className="part-one-example-trigger"><span>0{index + 1}</span><div><b>{example.question}</b><small>{example.chinese}</small></div></AccordionTrigger><AccordionContent className="part-one-example-content">{example.answer.map((sentence, sentenceIndex) => <p key={sentence}><span>{["O", "R", "E", "F"][sentenceIndex] ?? "U"}</span>{sentence}</p>)}</AccordionContent></AccordionItem>)}</Accordion></section>
      <div className="part-one-reminder"><b>考场操作 / EXAM FLOW</b><span>任何题目先判断：连哪个人设？用 OREF 哪一步？是否需要万能细节或 MBTI？然后大声说出来并录音复盘。</span></div>
    </div>
  );
}

function SpeakingPartTwoPanel() {
  return (
    <div className="speaking-part-two-panel">
      <div className="speaking-panel-head">
        <div><span className="active-label">SPEAKING / PART 2</span><h3>四张母题卡 <em>4 Core Stories</em></h3><p>人物、物品、经历、地点 · 用真实个人素材快速串题。</p></div>
        <div className="speaking-panel-stat"><strong>4</strong><span>母题 / STORIES</span><small>Personal · Reusable · Adaptable</small></div>
      </div>
      <div className="speaking-panel-intro"><b>使用方法 / HOW TO USE</b><span>先用 5 秒把题目归类到一张卡，再根据题目重点切换对应句子；后续可继续把真题题目与母题卡建立适配关系。</span></div>
      <Accordion type="single" collapsible className="speaking-card-accordion">
        {speakingPart2Cards.map((card, index) => <AccordionItem value={card.id} key={card.id} className="speaking-story-card">
          <AccordionTrigger className="speaking-story-trigger">
            <span className="speaking-card-no">0{index + 1}</span>
            <span className="speaking-card-title"><strong>{card.category} · {card.title}</strong><small>{card.categoryEn} · {card.titleEn}</small></span>
            <span className="speaking-coverage-count">{card.coverage.length} topics<br /><small>可串题</small></span>
          </AccordionTrigger>
          <AccordionContent className="speaking-story-content">
            <div className="speaking-section-label">COVERS / 可覆盖题目</div>
            <div className="coverage-grid">{card.coverage.map((item) => <div className="coverage-item" key={item.english}><b>{item.english}</b><small>{item.chinese}</small></div>)}</div>
            <div className="speaking-section-label script-label">7.5 SCRIPT / 逐句中英文讲稿</div>
            <div className="script-lines">{card.script.map((line, lineIndex) => <div className="script-line" key={line.english}><span>{lineIndex + 1}</span><div><p>{line.english}</p><small>{line.chinese}</small></div></div>)}</div>
            <div className="speaking-bottom-grid">
              <div><div className="speaking-section-label">KEY PHRASES / 高分表达</div><div className="phrase-list">{card.phrases.map((phrase) => <div key={phrase.english}><b>{phrase.english}</b><small>{phrase.chinese}</small></div>)}</div></div>
              <div><div className="speaking-section-label">PIVOT TIPS / 转题提示</div><div className="pivot-list">{card.tips.map((tip) => <div key={tip.prompt}><b>{tip.prompt}</b><small>{tip.advice}</small></div>)}</div></div>
            </div>
          </AccordionContent>
        </AccordionItem>)}
      </Accordion>
      <PublicPart2Index />
      <div className="speaking-study-steps"><div><span>考前落地 / STUDY PLAN</span><strong>三步法</strong></div><div>{speakingPart2StudySteps.map((step, index) => <p key={step}><b>0{index + 1}</b>{step}</p>)}</div></div>
    </div>
  );
}

function PublicPart2Index() {
  const [filter, setFilter] = useState<"all" | StoryId>("all");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visiblePrompts = publicPart2Prompts.filter((item) => (filter === "all" || item.storyId === filter) && (!normalizedQuery || `${item.promptEn} ${item.promptZh} ${item.category}`.toLowerCase().includes(normalizedQuery)));
  const filters: { value: "all" | StoryId; label: string; labelEn: string }[] = [
    { value: "all", label: "全部", labelEn: "All" },
    { value: "person", label: "人物", labelEn: "Person" },
    { value: "object", label: "物品", labelEn: "Object" },
    { value: "experience", label: "经历", labelEn: "Experience" },
    { value: "place", label: "地点", labelEn: "Place" },
  ];

  return (
    <section className="public-index-panel">
      <div className="public-index-head"><div><span className="speaking-section-label">PUBLIC PRACTICE INDEX / 公开练习题索引</span><h4>Part 2 题目 × 母题适配</h4><p>题目为公开练习主题的简短索引，用于训练归类与母题选择；并非完整剑桥套题或受限出版材料的转载。</p></div><div className="public-index-count"><strong>{visiblePrompts.length}</strong><span>题目 / PROMPTS</span></div></div>
      <div className="public-index-controls"><div className="prompt-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索题目 / Search prompts" aria-label="搜索 Part 2 题目" /></div><div className="prompt-filters">{filters.map((item) => <button key={item.value} className={filter === item.value ? "active" : ""} onClick={() => setFilter(item.value)}>{item.label}<small>{item.labelEn}</small></button>)}</div></div>
      <div className="prompt-index-list">{visiblePrompts.map((item) => <article key={item.id}><div className="prompt-index-category">{item.category}</div><div className="prompt-index-prompt"><b>{item.promptEn}</b><small>{item.promptZh}</small></div><div className={`story-chip ${item.storyId}`}><span>适配母题</span><b>{item.storyLabel}</b></div><small className="prompt-source">{item.source}</small></article>)}</div>
      {visiblePrompts.length === 0 && <div className="prompt-empty">未找到匹配题目。试试人物、物品、经历或地点关键词。</div>}
      <div className="public-index-sources"><span>来源 / SOURCES</span>{publicPart2Sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label}<ArrowUpRight size={12} /></a>)}</div>
    </section>
  );
}
