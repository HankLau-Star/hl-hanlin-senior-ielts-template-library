import { useState } from "react";
import { Link } from "wouter";
import { taskOneChecklist, taskOneTemplates } from "@/lib/writingTemplates";
import { opinionBlocks, opinionOpenings, reportBlocks, taskTwoExamFlow, taskTwoTypes, type TaskTwoBlock } from "@/lib/taskTwoTemplates";
import { speakingPart2Cards, speakingPart2StudySteps } from "@/lib/speakingPart2Templates";
import { languageBank, orefSteps, partOneExamples, personaDimensions, universalDetails } from "@/lib/speakingPart1System";
import { publicPart2Prompts, publicPart2Sources, type StoryId } from "@/lib/publicPart2Index";
import { publicTaskOnePrompts, publicTaskOneSources, type TaskOneKind } from "@/lib/publicTask1Index";
import { partThreeLogicChains, partThreeSteps } from "@/lib/speakingPart3System";
import { listeningCambridgeNotes, listeningPartGuide, listeningRules, listeningTerms } from "@/lib/listeningStudyGuide";
import { readingCambridgeNotes, readingStrategies, readingTerms } from "@/lib/readingStudyGuide";
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
        {activeKey === "listening" && <ListeningGuidePanel />}
        {activeKey === "reading" && <ReadingGuidePanel />}
        {activeKey === "writing" && selectedSection === "小作文" && <TaskOnePanel />}
        {activeKey === "writing" && selectedSection === "大作文" && <TaskTwoPanel />}
        {activeKey === "speaking" && selectedSection === "Part 1" && <SpeakingPartOnePanel />}
        {activeKey === "speaking" && selectedSection === "Part 2" && <SpeakingPartTwoPanel />}
        {activeKey === "speaking" && selectedSection === "Part 3" && <SpeakingPartThreePanel />}
      </section>

      <footer className="minimal-footer"><span className="footer-mark"><span /><span /><span /></span><span><b>HL · 汉林师兄的雅思模板库</b><small>HL HANLIN SENIOR'S IELTS TEMPLATE LIBRARY</small></span><i>PERSONAL PLAYBOOK · 2026</i></footer>
    </main>
  );
}

function markTaskTwoFill(text: string) {
  return text.split(/(【[^】]+】)/g).map((part, index) => part.startsWith("【") ? <span className="task-two-fill" key={`${part}-${index}`}>{part}</span> : part);
}

function TaskTwoBlocks({ blocks, showChinese }: { blocks: TaskTwoBlock[]; showChinese: boolean }) {
  return (
    <Accordion type="multiple" defaultValue={[blocks[0].id]} className="task-two-accordion">
      {blocks.map((block, index) => <AccordionItem key={block.id} value={block.id} className="task-two-item">
        <AccordionTrigger className="task-two-trigger"><span>0{index + 1}</span><div><b>{block.label}</b><strong>{block.title}</strong></div></AccordionTrigger>
        <AccordionContent className="task-two-content"><div className="task-two-english"><small>固定英文句 / FIXED SENTENCE</small><p>{markTaskTwoFill(block.english)}</p></div>{showChinese && <div className="task-two-chinese"><small>中文逻辑 / CHINESE LOGIC</small><p>{markTaskTwoFill(block.chinese)}</p></div>}<div className="task-two-fills"><span>本段要填</span>{block.fills.map((fill) => <b key={fill}>{fill}</b>)}</div>{block.notes && <aside className="task-two-notes"><span>批注 / COACH NOTES</span>{block.notes.map((note) => <p key={note}>{markTaskTwoFill(note)}</p>)}</aside>}</AccordionContent>
      </AccordionItem>)}
    </Accordion>
  );
}

function TaskTwoPanel() {
  const [activeType, setActiveType] = useState("agree");
  const [showChinese, setShowChinese] = useState(true);
  const active = taskTwoTypes.find((item) => item.id === activeType) ?? taskTwoTypes[0];
  const isOpinion = active.id !== "report";
  const blocks = isOpinion ? opinionBlocks : reportBlocks;

  return (
    <div className="task-two-panel">
      <div className="task-two-head">
        <div><span className="active-label">WRITING / TASK 2</span><h3>大作文 <em>Task 2</em></h3><p>四种题型，两套母模板；先辨题，再落笔。</p></div>
        <button className="task-two-language" type="button" onClick={() => setShowChinese(!showChinese)}>{showChinese ? "隐藏中文逻辑" : "显示中文逻辑"}<small>{showChinese ? "EN ONLY" : "EN + 中文"}</small></button>
      </div>

      <section className="task-two-map">
        <div className="task-two-map-head"><div><span>题型—模板路线图</span><b>Question → Template</b></div><small>先点题型，再读对应轨道</small></div>
        <div className="task-two-route"><span>固定结构 · 观点型轨道</span><i /><span>临场判断／填空</span></div>
        <div className="task-two-type-grid">{taskTwoTypes.map((type) => <button type="button" key={type.id} className={activeType === type.id ? "active" : ""} onClick={() => setActiveType(type.id)}><span>{type.no}</span><b>{type.title}</b><small>{type.titleEn}</small><em>{type.template}</em></button>)}</div>
        <div className="task-two-prompt"><div><small>当前题型 / ACTIVE TYPE</small><strong>{active.title} <em>· {active.focus}</em></strong><p>“{active.prompt}”</p></div><span>{active.template}</span></div>
      </section>

      <section className="task-two-template">
        <div className="task-two-template-head"><div><span>{isOpinion ? "观点型母模板 / OPINION TRACK" : "报告型母模板 / REPORT TRACK"}</span><h4>{isOpinion ? "开—让—转—结" : "问题—原因—措施—可解决"}</h4><p>{isOpinion ? "同意与否、双边讨论和利弊权衡共用主体段与结尾；只需按题型选择开头。" : "原因与对策类按问题、原因与双层措施展开；若问问题与解决方案，主体段 1 改写问题或后果即可。"}</p></div><div className="task-two-track-stat"><b>{isOpinion ? "3" : "1"}</b><span>{isOpinion ? "题型共用一条轨道" : "题型使用一条轨道"}</span></div></div>
        {isOpinion && <div className="task-two-openings"><div className="task-two-section-title"><span>01</span><div><b>开头段 / OPENING SWITCH</b><small>三种开头，后文共用</small></div></div><Accordion type="single" collapsible className="task-two-opening-accordion">{opinionOpenings.map((opening, index) => <AccordionItem key={opening.id} value={opening.id}><AccordionTrigger className="task-two-opening-trigger"><span>0{index + 1}</span><div><b>{opening.label}</b><small>{opening.title}</small></div></AccordionTrigger><AccordionContent className="task-two-opening-content"><p className="task-two-opening-en">{markTaskTwoFill(opening.english)}</p>{showChinese && <p className="task-two-opening-zh">{markTaskTwoFill(opening.chinese)}</p>}<div className="task-two-fills"><span>开头要填</span>{opening.fills.map((fill) => <b key={fill}>{fill}</b>)}</div>{opening.notes?.map((note) => <p className="task-two-inline-note" key={note}>{note}</p>)}</AccordionContent></AccordionItem>)}</Accordion></div>}
        <TaskTwoBlocks blocks={blocks} showChinese={showChinese} />
      </section>

      <section className="task-two-flow"><div><span>考场操作 / EXAM FLOW</span><h4>40 分钟，按轨道走完。</h4></div><div className="task-two-flow-grid">{taskTwoExamFlow.map((step) => <article key={step.time + step.title}><b>{step.time}</b><div><strong>{step.title}</strong><p>{step.text}</p></div></article>)}</div><aside><b>最重要 / KEY RULE</b><span>模板服务于题目相关性。真正需要临场创造的，是两个理由、一个例子和一个局限；不要为了套句而写与题目无关的内容。</span></aside></section>
    </div>
  );
}

function ListeningGuidePanel() {
  const [ruleFilter, setRuleFilter] = useState<"全部" | "策略" | "题型规律" | "信号词" | "同义替换" | "拼写">("全部");
  const [termFilter, setTermFilter] = useState<"全部" | "拼写" | "同义替换" | "易混词" | "场景词" | "信号词">("全部");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleRules = listeningRules.filter((item) => ruleFilter === "全部" || item.category === ruleFilter);
  const visibleTerms = listeningTerms.filter((item) => (termFilter === "全部" || item.category === termFilter) && (!normalizedQuery || `${item.term} ${item.meaning} ${item.relation ?? ""} ${item.source ?? ""}`.toLowerCase().includes(normalizedQuery)));
  const ruleFilters: (typeof ruleFilter)[] = ["全部", "策略", "题型规律", "信号词", "同义替换", "拼写"];
  const termFilters: (typeof termFilter)[] = ["全部", "拼写", "同义替换", "易混词", "场景词", "信号词"];
  return (
    <div className="listening-guide-panel">
      <div className="listening-guide-head"><div><span className="active-label">LISTENING / PLAYBOOK</span><h3>听力复习手册 <em>Listening Field Notes</em></h3><p>先看题，再定位；抓信号词，也识别同义替换。把每一次错题整理成下一次的预判。</p></div><div className="listening-guide-stat"><strong>{listeningTerms.length}</strong><span>词条 / NOTES</span></div></div>
      <section className="listening-part-grid">{listeningPartGuide.map((item, index) => <article key={item.part}><span>0{index + 1}</span><div><b>{item.part}</b><h4>{item.title}<small>{item.titleEn}</small></h4><p>{item.detail}</p></div></article>)}</section>
      <section className="listening-rules"><div className="listening-section-title"><span>01</span><div><b>题型策略与信号 / STRATEGY MAP</b><small>按类别快速回顾解题原则</small></div></div><div className="listening-filter-row">{ruleFilters.map((item) => <button key={item} onClick={() => setRuleFilter(item)} className={ruleFilter === item ? "active" : ""}>{item}</button>)}</div><Accordion type="single" collapsible className="listening-rule-accordion">{visibleRules.map((item, index) => <AccordionItem value={item.id} key={item.id}><AccordionTrigger className="listening-rule-trigger"><span>0{index + 1}</span><div><b>{item.title}</b><small>{item.titleEn}</small></div><i>{item.part} · {item.category}</i></AccordionTrigger><AccordionContent className="listening-rule-content"><p>{item.detail}</p>{item.note && <aside><b>提醒 / NOTE</b><span>{item.note}</span></aside>}</AccordionContent></AccordionItem>)}</Accordion></section>
      <section className="listening-vocab"><div className="listening-section-title"><span>02</span><div><b>词汇与替换库 / VOCAB BANK</b><small>拼写、同义替换、易混词与场景词</small></div></div><div className="listening-vocab-controls"><div className="listening-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索词汇、中文、替换或套题" aria-label="搜索听力词汇" /></div><div className="listening-filter-row">{termFilters.map((item) => <button key={item} onClick={() => setTermFilter(item)} className={termFilter === item ? "active" : ""}>{item}</button>)}</div></div><div className="listening-term-list">{visibleTerms.map((item) => <article key={`${item.term}-${item.source ?? "base"}`}><div><b>{item.term}</b><small>{item.category}</small></div><p>{item.meaning}</p>{item.relation && <span>{item.relation}</span>}{item.source && <i>{item.source}</i>}</article>)}</div>{visibleTerms.length === 0 && <div className="listening-empty">没有找到匹配词条。可以搜索英文、中文或 Cambridge 套题编号。</div>}</section>
      <section className="listening-cambridge"><div className="listening-section-title"><span>03</span><div><b>剑桥套题笔记 / CAMBRIDGE NOTES</b><small>按套题回看错题规律与高频表达</small></div></div><Accordion type="single" collapsible className="listening-cambridge-accordion">{listeningCambridgeNotes.map((item) => <AccordionItem key={item.id} value={item.id}><AccordionTrigger className="listening-cambridge-trigger"><span>CAM</span><b>{item.title}</b></AccordionTrigger><AccordionContent className="listening-cambridge-content"><ul>{item.notes.map((note) => <li key={note}>{note}</li>)}</ul></AccordionContent></AccordionItem>)}</Accordion></section>
      <div className="listening-guide-rule"><b>复盘原则 / REVIEW RULE</b><span>听力规则是高概率提示，不是机械公式。每次做题仍需同时判断语义、限定条件、时态、数量和说话者态度。</span></div>
    </div>
  );
}

function ReadingGuidePanel() {
  const [strategyFilter, setStrategyFilter] = useState<"全部" | "题型策略" | "判断题" | "逻辑信号" | "同义替换" | "定位">("全部");
  const [termFilter, setTermFilter] = useState<"全部" | "同义替换" | "词义辨析" | "逻辑词" | "场景词" | "词形拼写">("全部");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleStrategies = readingStrategies.filter((item) => strategyFilter === "全部" || item.category === strategyFilter);
  const visibleTerms = readingTerms.filter((item) => (termFilter === "全部" || item.category === termFilter) && (!normalizedQuery || `${item.term} ${item.meaning} ${item.relation ?? ""} ${item.source ?? ""}`.toLowerCase().includes(normalizedQuery)));
  const strategyFilters: (typeof strategyFilter)[] = ["全部", "题型策略", "判断题", "逻辑信号", "同义替换", "定位"];
  const termFilters: (typeof termFilter)[] = ["全部", "同义替换", "词义辨析", "逻辑词", "场景词", "词形拼写"];
  return (
    <div className="reading-guide-panel">
      <div className="reading-guide-head"><div><span className="active-label">READING / PLAYBOOK</span><h3>阅读真题手册 <em>Reading Field Notes</em></h3><p>先辨题型，再抓逻辑；不凭印象做判断，而是用原文中的关系、限定词和证据来确认答案。</p></div><div className="reading-guide-stat"><strong>{readingTerms.length}</strong><span>词条 / NOTES</span></div></div>
      <section className="reading-focus-grid"><article><span>01</span><div><b>判断题</b><small>TRUE / FALSE / NOT GIVEN</small><p>先查是否冲突，再查是否缺失关键证据。</p></div></article><article><span>02</span><div><b>逻辑词</b><small>CAUSE · CONTRAST · LIMIT</small><p>consequently、however、only 等词决定句子关系。</p></div></article><article><span>03</span><div><b>同义替换</b><small>PARAPHRASE</small><p>认出改写，也比较词义强度与精确度。</p></div></article></section>
      <section className="reading-strategies"><div className="reading-section-title"><span>01</span><div><b>题型策略与逻辑 / STRATEGY MAP</b><small>通过判断、转折、因果和限定词定位答案</small></div></div><div className="reading-filter-row">{strategyFilters.map((item) => <button key={item} className={strategyFilter === item ? "active" : ""} onClick={() => setStrategyFilter(item)}>{item}</button>)}</div><Accordion type="single" collapsible className="reading-strategy-accordion">{visibleStrategies.map((item, index) => <AccordionItem value={item.id} key={item.id}><AccordionTrigger className="reading-strategy-trigger"><span>0{index + 1}</span><div><b>{item.title}</b><small>{item.titleEn}</small></div><i>{item.category}</i></AccordionTrigger><AccordionContent className="reading-strategy-content"><p>{item.detail}</p>{item.note && <aside><b>提醒 / NOTE</b><span>{item.note}</span></aside>}</AccordionContent></AccordionItem>)}</Accordion></section>
      <section className="reading-vocab"><div className="reading-section-title"><span>02</span><div><b>词汇与替换库 / VOCAB BANK</b><small>词义辨析、逻辑词、场景词和剑桥真题语境</small></div></div><div className="reading-vocab-controls"><div className="reading-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索词汇、中文、替换或套题" aria-label="搜索阅读词汇" /></div><div className="reading-filter-row">{termFilters.map((item) => <button key={item} className={termFilter === item ? "active" : ""} onClick={() => setTermFilter(item)}>{item}</button>)}</div></div><div className="reading-term-list">{visibleTerms.map((item) => <article key={`${item.term}-${item.source ?? "base"}`}><div><b>{item.term}</b><small>{item.category}</small></div><p>{item.meaning}</p>{item.relation && <span>{item.relation}</span>}{item.source && <i>{item.source}</i>}</article>)}</div>{visibleTerms.length === 0 && <div className="reading-empty">没有找到匹配词条。可以搜索英文、中文或 Cambridge 套题编号。</div>}</section>
      <section className="reading-cambridge"><div className="reading-section-title"><span>03</span><div><b>剑桥套题笔记 / CAMBRIDGE NOTES</b><small>按套题回看题型、逻辑与高频词</small></div></div><Accordion type="single" collapsible className="reading-cambridge-accordion">{readingCambridgeNotes.map((item) => <AccordionItem key={item.id} value={item.id}><AccordionTrigger className="reading-cambridge-trigger"><span>CAM</span><b>{item.title}</b></AccordionTrigger><AccordionContent className="reading-cambridge-content"><ul>{item.notes.map((note) => <li key={note}>{note}</li>)}</ul></AccordionContent></AccordionItem>)}</Accordion></section>
      <div className="reading-guide-rule"><b>复盘原则 / REVIEW RULE</b><span>判断题不要猜“意思差不多”。只问一件事：原文是否明确支持、明确反驳，还是缺少决定题干真伪的关键证据？</span></div>
    </div>
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
      <PublicTaskOneIndex />
    </div>
  );
}

function PublicTaskOneIndex() {
  const [filter, setFilter] = useState<"all" | TaskOneKind>("all");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visiblePrompts = publicTaskOnePrompts.filter((item) => (filter === "all" || item.kind === filter) && (!normalizedQuery || `${item.promptEn} ${item.promptZh} ${item.chartType}`.toLowerCase().includes(normalizedQuery)));
  const filters: { value: "all" | TaskOneKind; label: string; labelEn: string }[] = [
    { value: "all", label: "全部", labelEn: "All" },
    { value: "dynamic", label: "动态图", labelEn: "Dynamic" },
    { value: "static", label: "静态图", labelEn: "Static" },
    { value: "map-process", label: "地图流程", labelEn: "Maps & Process" },
  ];

  return (
    <section className="task-one-index-panel">
      <div className="task-index-head"><div><span className="speaking-section-label">PUBLIC PRACTICE INDEX / 公开练习题索引</span><h4>小作文题目 × 模板方向</h4><p>题目为公开练习主题的简短索引，用来训练题型识别与模板选择；并非完整剑桥出版题库或图表原件的转载。</p></div><div className="task-index-count"><strong>{visiblePrompts.length}</strong><span>题目 / PROMPTS</span></div></div>
      <div className="task-index-controls"><div className="prompt-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索题目 / Search Task 1" aria-label="搜索小作文题目" /></div><div className="prompt-filters">{filters.map((item) => <button key={item.value} className={filter === item.value ? "active" : ""} onClick={() => setFilter(item.value)}>{item.label}<small>{item.labelEn}</small></button>)}</div></div>
      <div className="task-index-list">{visiblePrompts.map((item) => <article key={item.id}><div className={`task-kind-chip ${item.kind}`}><span>{item.kindLabel}</span><small>{item.chartType}</small></div><div className="task-index-prompt"><b>{item.promptEn}</b><small>{item.promptZh}</small></div><div className={`task-template-chip ${item.kind}`}><span>建议模板</span><b>{item.template}</b></div><small className="task-index-source">{item.source}</small></article>)}</div>
      {visiblePrompts.length === 0 && <div className="prompt-empty">未找到匹配题目。可尝试图表类型或“地图”“变化”等关键词。</div>}
      <div className="task-index-sources"><span>来源 / SOURCES</span>{publicTaskOneSources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label}<ArrowUpRight size={12} /></a>)}</div>
    </section>
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

function SpeakingPartThreePanel() {
  return (
    <div className="speaking-part-three-panel">
      <div className="speaking-three-head"><div><span className="active-label">SPEAKING / PART 3</span><h3>一框架 · 五逻辑链 <em>Logic Chain System</em></h3><p>用完整逻辑链回答抽象问题；先选择一条解释路径，再把它展开成 6 步表达。</p></div><div className="three-head-mark"><b>1</b><span>FRAME</span><b>5</b><span>CHAINS</span></div></div>
      <section className="three-framework"><div className="three-section-head"><span>01</span><div><b>万能主框架 / MASTER FRAME</b><small>六步递进拓展</small></div></div><div className="part-three-steps">{partThreeSteps.map((step) => <article key={step.index}><span>{step.index}</span><div><h4>{step.title}<small>{step.titleEn}</small></h4><p>{step.sentence}</p></div></article>)}</div></section>
      <section className="three-chains"><div className="three-section-head"><span>02</span><div><b>五大万能逻辑链 / FIVE CHAINS</b><small>根据题目选择一条核心解释路径</small></div></div><Accordion type="single" collapsible className="logic-chain-accordion">{partThreeLogicChains.map((chain, index) => <AccordionItem key={chain.id} value={chain.id} className="logic-chain-item"><AccordionTrigger className="logic-chain-trigger"><span>0{index + 1}</span><div><b>{chain.title}</b><small>{chain.titleEn} · {chain.description}</small></div><i>{chain.fits.length} 场景</i></AccordionTrigger><AccordionContent className="logic-chain-content"><div className="chain-fits"><span>适用场景 / FITS</span><div>{chain.fits.map((fit) => <b key={fit}>{fit}</b>)}</div></div><div className="chain-sentences">{chain.sentences.map((sentence, sentenceIndex) => <article key={sentence.english}><span>0{sentenceIndex + 1}</span><div><p>{sentence.english}</p><small>{sentence.chinese}</small></div></article>)}</div><div className="chain-usage"><b>如何接入 / HOW TO PLUG IN</b><span>把本逻辑链中的第 1 句放在第 2 步“核心逻辑”，第 2 句放在第 4 步“补充逻辑”，再用具体生活场景完成第 3 与第 6 步。</span></div></AccordionContent></AccordionItem>)}</Accordion></section>
      <div className="part-three-reminder"><b>考场操作 / EXAM FLOW</b><span>遇到抽象题，先用缓冲句争取时间；从五条逻辑链中选一条主链，再补一个具体例子，最后做让步或场景收尾。</span></div>
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
