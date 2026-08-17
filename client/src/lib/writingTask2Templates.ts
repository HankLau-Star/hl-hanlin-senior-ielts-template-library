export type TaskTwoParagraph = {
  title: string;
  titleEn: string;
  english: string;
  chinese: string;
  fillCount?: string;
};

export const taskTwoTypes = [
  { id: "agree", title: "同意与否", titleEn: "Agree / Disagree", templateId: "viewpoint", note: "在开头明确立场；主体一让步，主体二重点支持你的立场。" },
  { id: "discussion", title: "双边讨论", titleEn: "Discuss Both Views", templateId: "viewpoint", note: "先写不支持的一方，再写支持的一方；支持前者用 former，支持后者用 latter。" },
  { id: "advantages", title: "利弊权衡", titleEn: "Advantages / Disadvantages", templateId: "viewpoint", note: "先写你认为较弱的一方，再写分量更大的一方。" },
  { id: "cause-solution", title: "原因与对策", titleEn: "Causes & Solutions", templateId: "report", note: "原因题、问题与解决题均可使用；主体一写原因或后果，主体二写对应措施。" },
];

export const viewpointIntroductions = [
  { type: "同意与否 / Agree or Disagree", english: "In contemporary society, the question of whether 【完整句：题目争议】 has generated considerable debate. While some people maintain that 【完整句：反方观点】, I am convinced that 【完整句：我方立场】, primarily because of 【名词短语：理由1】 and 【名词短语：理由2】.", chinese: "在当代社会，【某件事是否应该发生】引发了广泛争议。尽管有人认为【反方】，但我相信【我方立场】，主要原因是【理由1】和【理由2】。" },
  { type: "双边讨论 / Discuss Both Views", english: "In contemporary society, people hold differing views regarding 【名词短语：争议话题】. Some maintain that 【完整句：观点A】, whereas others believe that 【完整句：观点B】. Although both positions have merit, I find the 【former/latter】 view more persuasive, primarily because of 【名词短语：理由1】 and 【名词短语：理由2】.", chinese: "在当代社会，人们对【争议话题】持不同观点。一些人认为【观点A】，另一些人则认为【观点B】。尽管两种立场都有合理之处，但我认为【前者/后者】更有说服力，主要因为【理由1】和【理由2】。" },
  { type: "利弊权衡 / Advantages Outweigh Disadvantages", english: "In contemporary society, the growing prevalence of 【名词或动名词：题目现象】 has generated considerable debate. Although this development brings both benefits and costs, I am convinced that its 【advantages/disadvantages】 outweigh its 【disadvantages/advantages】, primarily because of 【名词短语：理由1】 and 【名词短语：理由2】.", chinese: "在当代社会，【题目现象】日益普遍，引发了广泛讨论。尽管这一发展既有益处也有代价，但我相信它的【优点/缺点】大于【缺点/优点】，主要因为【理由1】和【理由2】。" },
];

export const viewpointTemplate: TaskTwoParagraph[] = [
  { title: "开头", titleEn: "Introduction", english: "根据题型从上方三种开头中选择一套：交代争议、承认另一方、明确自己的立场，并给出两个理由。", chinese: "只根据题型替换开头；主体段和结尾使用同一套结构。记忆顺序：开—让—转—结。", fillCount: "临场只想 4 项：反方、我方、理由 1、理由 2" },
  { title: "主体段 1：让步", titleEn: "Body 1: Weaker Side", english: "Admittedly, there is some justification for 【名词短语：反方观点、较弱一方或主要弊端】. The principal reason is that 【完整句：这一方成立的原因】, which means that 【完整句：它可能带来的直接结果】. A clear example can be seen in 【名词短语：具体场景】, where 【完整句：例子的具体情况】. This explains why this position may appear reasonable, particularly in the short term. Nevertheless, its overall value is limited because 【完整句：指出它的局限、代价或适用范围】.", chinese: "诚然，【较弱一方】具有一定的合理性。主要原因是【原因】，这意味着【结果】。一个明显的例子可以在【场景】中看到，在这种情况下【例子细节】。这解释了为什么这一观点可能显得合理，尤其是在短期内。然而，它的整体价值仍然有限，因为【局限】。", fillCount: "填 5 项：较弱一方、原因、结果、场景例子、局限" },
  { title: "主体段 2：核心论证", titleEn: "Body 2: Stronger Side", english: "Nevertheless, there are stronger reasons to support 【名词短语：我方观点、较强一方或主要优势】. To begin with, 【完整句：我方分论点1】. When 【完整句：相关条件或行为】, 【完整句：产生的直接结果】, thereby 【动名词短语：产生的进一步影响】. In addition, 【完整句：我方分论点2】. For instance, 【完整句：具体例子】. Taken together, these considerations suggest that 【完整句：说明我方为什么总体上更合理】.", chinese: "然而，有更充分的理由支持【我方】。首先，【分论点1】。当【条件】时，【直接结果】，从而【进一步影响】。此外，【分论点2】。例如，【具体例子】。综合来看，这些因素表明【为什么我方整体上更合理】。", fillCount: "填 6 项：我方、分论点 1、条件、结果与影响、分论点 2、例子" },
  { title: "结尾", titleEn: "Conclusion", english: "In conclusion, although 【名词短语或完整句：概括较弱一方】 should not be entirely overlooked, I remain convinced that 【完整句：重申明确立场】. This is because this position offers greater potential to 【动词原形：核心好处1】 and 【动词原形：核心好处2】, particularly from a long-term perspective.", chinese: "总之，尽管【较弱一方】不应该被完全忽视，但我仍然相信【我的立场】。这是因为这一立场更有可能【好处1】并【好处2】，尤其是从长远角度看。", fillCount: "填 3 项：较弱一方、立场、两个核心好处" },
];

export const reportTemplate: TaskTwoParagraph[] = [
  { title: "开头", titleEn: "Introduction", english: "In contemporary society, 【名词短语：负面问题】 has become a matter of considerable concern. This issue is mainly caused by 【名词短语：原因1】 and 【名词短语：原因2】. Nevertheless, it can be effectively addressed through coordinated action by 【名词：主体1】 and 【名词：主体2】.", chinese: "在当代社会，【问题】已经成为一个令人担忧的现象。它主要由【原因1】和【原因2】导致。不过，通过【主体1】和【主体2】采取协调行动，这一问题可以得到有效处理。", fillCount: "填 5 项：问题、两个原因、两类解决主体" },
  { title: "主体段 1：原因分析", titleEn: "Body 1: Causes", english: "Several interconnected factors account for this problem. The most important is 【名词短语：原因1】, because 【完整句：解释原因1如何导致问题】. When 【完整句：具体条件】, 【完整句：直接结果】, which in turn 【动词：进一步造成的后果】. Another contributing factor is 【名词短语：原因2】. A clear example can be seen in 【名词短语：具体场景】, where 【完整句：例子细节】. Taken together, these factors explain why 【完整句：题目问题持续或恶化】.", chinese: "几个相互关联的因素导致了这一问题。最重要的是【原因1】，因为【解释】。当【条件】时，【直接结果】，进而【进一步后果】。另一个原因是【原因2】。一个明显的例子出现在【场景】中，在这里【例子细节】。综合来看，这些因素解释了为什么【问题持续或恶化】。", fillCount: "填 6 项：两个原因、机制、条件、结果、场景例子、恶化原因" },
  { title: "主体段 2：解决方案", titleEn: "Body 2: Solutions", english: "Nevertheless, a combination of targeted measures could substantially improve the situation. At the institutional level, 【政府、学校或企业】 should 【动词原形：措施1】. By doing so, they could 【动词原形：直接效果】, thereby 【动名词短语：进一步效果】. At the individual or community level, 【个人、家庭或社会组织】 should also be encouraged to 【动词原形：措施2】. For instance, 【完整句：措施如何实施】. If these measures were implemented together, they would not only 【动词原形：缓解当前问题】 but also 【动词原形：预防长期问题】.", chinese: "然而，一系列有针对性的措施可以显著改善情况。在制度层面，【政府、学校或企业】应该【措施1】。通过这样做，它们能够【直接效果】，从而【进一步效果】。在个人或社区层面，还应鼓励【个人、家庭或组织】【措施2】。例如，【具体实施方式】。如果这些措施共同实施，它们不仅能【缓解当前问题】，还能【预防长期问题】。", fillCount: "填 7 项：机构、措施、直接与进一步效果、个人主体、措施、实施例子、短期与长期结果" },
  { title: "结尾", titleEn: "Conclusion", english: "In conclusion, although 【名词短语：问题】 is largely rooted in 【名词短语：原因1】 and 【名词短语：原因2】, it is by no means impossible to address. Through 【名词或动名词：措施1】 and 【名词或动名词：措施2】, its immediate effects can be reduced and its long-term recurrence can be prevented.", chinese: "总之，尽管【问题】主要源于【原因1】和【原因2】，但它并非无法解决。通过【措施1】和【措施2】，既可以减轻当前影响，也可以防止问题长期反复发生。", fillCount: "填 5 项：问题、两个原因、两个措施" },
];

export const taskTwoUsage = [
  { time: "前 5 分钟", title: "只写关键词", detail: "观点题列出立场、较弱一方原因与局限、我方两个理由和一个例子；报告题列出两个原因和两个措施。" },
  { time: "接下来 30 分钟", title: "按模板写作", detail: "固定写四段，不临时增加第三个主体段；根据题型只调整必要的开头。" },
  { time: "最后 5 分钟", title: "检查四类错误", detail: "检查单复数、第三人称单数、时态，以及每句是否都有完整主语和谓语。" },
];

export const taskTwoFillHints = [
  "不要把模板写成脱离题目的空话；所有“短期、长期、社会、个人、可持续”等表述必须与题目相关。",
  "观点型只需记住：反方有理，但有局限；我方更强，长期更优。",
  "报告型只需记住：两个原因对应两个措施，短期缓解加长期预防。",
];
