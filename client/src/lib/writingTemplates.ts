export type TemplateBlock = {
  title: string;
  titleEn: string;
  english: string;
  chinese: string;
  notes?: string[];
};

export type TaskOneTemplate = {
  key: "dynamic" | "static";
  title: string;
  titleEn: string;
  fit: string;
  fitEn: string;
  blocks: TemplateBlock[];
};

export const taskOneTemplates: TaskOneTemplate[] = [
  {
    key: "dynamic",
    title: "动态图",
    titleEn: "Dynamic Charts",
    fit: "折线图、跨年份柱状图、跨年份表格、多年份饼图",
    fitEn: "Line graphs, multi-year bar charts, tables and pie charts",
    blocks: [
      {
        title: "Paragraph 1 — Introduction",
        titleEn: "引言段",
        english: "The [line graph/bar chart/table/pie charts] presents information about [主题], with figures given for [对象] over the period from [起始年份] to [结束年份].",
        chinese: "该[折线图/柱状图/表格/饼图]展示了关于【主题】的信息，数据涉及【对象】，时间跨度从【起始年份】到【结束年份】。",
        notes: ["[主题]：基本照题目改写", "[对象]：国家、产品、人群等", "[X] to [Y]：最早年份 → 最晚年份"],
      },
      {
        title: "Paragraph 2 — Overview",
        titleEn: "概述段",
        english: "Overall, it is clearly evident that the figures for [A] were generally higher/lower than those for [B] over the period examined, although the difference between them varied to some extent. Another striking feature is that [C] experienced an overall upward/downward trend, whereas [D / the remaining category/categories] remained comparatively stable/fluctuated considerably during the period.",
        chinese: "总体而言，在所考察的时期内，A的数据总体高于/低于B，尽管两者之间的差距存在一定变化。另一个明显特征是，C总体呈上升/下降趋势，而D/其余类别则保持相对稳定/出现较明显波动。",
        notes: ["只判断：谁高、谁低、谁上涨、谁下降、谁稳定或波动。", "只有 A、B、C 三个对象时，D 直接写剩下的那个。", "只有 A、B 两个对象时，第二句继续描述 A/B。"],
      },
      {
        title: "Paragraph 3 — Body 1",
        titleEn: "主体段 1",
        english: "Looking first at [A] and [B], the figure for [A] stood at approximately [数字+单位] in [起始年份], compared with around [数字+单位] for [B]. Subsequently, [A] rose/fell steadily to about [数字] in [中间年份] before reaching [数字] by [结束年份]. By contrast, [B] experienced a more moderate increase/decrease, changing from roughly [数字] to [数字] over the same period. As a result, the gap between the two figures widened/narrowed considerably towards the end of the period.",
        chinese: "首先来看A和B，A在【起始年份】的数据约为【数字】，而B约为【数字】。随后，A稳定上升/下降，在【中间年份】达到约【数字】，之后到【结束年份】达到【数字】。相比之下，B经历了幅度相对较小的上升/下降，在同期从约【数字】变为【数字】。因此，到这一时期末，两者之间的差距明显扩大/缩小。",
        notes: ["上升 → rose / increase；下降 → fell / decrease。", "差距扩大 → widened；差距缩小 → narrowed。", "没有明显中间年份时，删掉 to ... in [中间年份]。", "差距没有明显扩大或缩小时，删掉最后一句。"],
      },
      {
        title: "Paragraph 4 — Body 2",
        titleEn: "主体段 2",
        english: "Turning to [C / the remaining category/categories], [C] began at approximately [数字] in [起始年份] and subsequently increased/decreased to around [数字] in [中间年份]. Despite some fluctuations, it eventually reached/fell to approximately [数字] by [结束年份]. Meanwhile, [D] remained relatively stable/fluctuated noticeably, ranging between approximately [最低数字] and [最高数字] throughout the period. By the final year, [C] stood at approximately [数字], compared with [数字] for [D].",
        chinese: "再来看C/其余类别，C在【起始年份】约为【数字】，随后在【中间年份】上升/下降至约【数字】。尽管期间存在一定波动，但最终在【结束年份】达到/下降至约【数字】。与此同时，D保持相对稳定/出现明显波动，在整个时期大约介于【最低值】和【最高值】之间。到最后一年，C约为【数字】，而D约为【数字】。",
        notes: ["C 上涨 → increased / reached；C 下降 → decreased / fell to。", "D 稳定 → remained relatively stable；D 波动 → fluctuated noticeably。", "ranging between 20 and 30 = 在 20 至 30 之间变化。", "只有 A、B、C 三个对象时，删掉 Meanwhile...D 后面的部分。", "5 个以上对象时，将走势相似的类别放在一起。"],
      },
    ],
  },
  {
    key: "static",
    title: "静态图",
    titleEn: "Static Charts",
    fit: "单年份柱状图、单年份表格、单个饼图、没有时间变化的比较图",
    fitEn: "Single-year charts, tables, pie charts and comparison diagrams",
    blocks: [
      {
        title: "Paragraph 1 — Introduction",
        titleEn: "引言段",
        english: "The [bar chart/pie chart/table] presents information about [主题], with figures given for [对象] in [年份].",
        chinese: "该[柱状图/饼图/表格]展示了有关【主题】的信息，给出了【对象】在【年份】的数据。",
        notes: ["只有一个年份 → in 2020。", "没有年份时，可以改成 with figures given for [对象]."],
      },
      {
        title: "Paragraph 2 — Overview",
        titleEn: "概述段",
        english: "Overall, it is clearly evident that [A] accounted for/recorded the largest figure, whereas [B] represented/recorded the smallest. Another noticeable feature is that the figure for [C] was considerably higher than that for [D], while the remaining categories showed relatively smaller differences from one another.",
        chinese: "总体而言，A所占比例/记录的数据最大，而B最小。另一个明显特征是，C的数据显著高于D，而其余类别之间的差异相对较小。",
        notes: ["A = 最大；B = 最小；C = 一个较大的；D = 一个较小的。", "百分比/占比：accounted for the largest proportion。", "普通数字：recorded the largest figure。", "只有 A、B、C 三个类别时，第二句改为比较 A 与 C。"],
      },
      {
        title: "Paragraph 3 — Body 1",
        titleEn: "主体段 1",
        english: "Looking first at the larger figures, [A] accounted for/recorded approximately [数字+单位], making it the highest value among all the categories shown. This was followed by [C], at around [数字], which was approximately [差值] lower than the figure for [A]. By comparison, [D] stood at about [数字], meaning that the difference between [A] and [D] amounted to roughly [差值].",
        chinese: "首先来看数据较大的类别，A约为【数字】，是所有类别中的最高值。其次是C，约为【数字】，比A低约【差值】。相比之下，D约为【数字】，这意味着A与D之间相差大约【差值】。",
        notes: ["只需要找到第一名 A、第二名/较大的 C、较低的 D，然后填入数字。", "不会算差值时，可改成 which was noticeably lower than the figure for [A]。"],
      },
      {
        title: "Paragraph 4 — Body 2",
        titleEn: "主体段 2",
        english: "As for the remaining categories, [B] recorded the lowest figure, at approximately [数字], while [E] stood at around [数字]. The difference between these two categories was relatively small/substantial, at roughly [差值]. Taken together, the figures reveal considerable variation among the categories presented, with the highest values being substantially greater than the lowest ones.",
        chinese: "至于其余类别，B的数据最低，约为【数字】，而E约为【数字】。两者之间的差距相对较小/较大，约为【差值】。总体来看，不同类别之间存在明显差异，其中最高值显著高于最低值。",
        notes: ["B = 最低；E = 其他剩余类别。", "差距小 → relatively small；差距大 → substantial。", "只有 A、B、C 三个类别时，直接写 B 最低，并与 A、C 比较。"],
      },
    ],
  },
];

export const taskOneChecklist = {
  dynamic: ["谁高？谁低？谁涨？谁跌？谁稳定？谁波动？", "P1 题目", "P2 总趋势", "P3 第一组数据", "P4 剩余数据"],
  static: ["先排名：最大、最小、第二/较大、其他", "P1 题目", "P2 最大最小", "P3 较大的数据", "P4 较小/剩余的数据"],
};
