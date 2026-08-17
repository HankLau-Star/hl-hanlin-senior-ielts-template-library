export type ListeningRule = {
  id: string;
  part: "Part 1" | "Part 2" | "Part 3" | "Part 4" | "All";
  category: "策略" | "题型规律" | "信号词" | "同义替换" | "拼写";
  title: string;
  titleEn: string;
  detail: string;
  note?: string;
};

export type ListeningTerm = {
  term: string;
  meaning: string;
  relation?: string;
  category: "拼写" | "同义替换" | "易混词" | "场景词" | "信号词";
  source?: string;
};

export const listeningPartGuide = [
  { part: "Part 1", title: "跟着看题", titleEn: "Follow the form", detail: "边听边看题干与选项，重点保持题目、录音和答案位置同步。" },
  { part: "Part 2", title: "读全题再听", titleEn: "Read every option", detail: "开始前务必读完整题目与选项；建议至少看两遍，先理解再记住差异点。" },
  { part: "Part 3", title: "按顺序定位", titleEn: "Track the order", detail: "多选题中 A–E 通常按录音顺序出现；匹配题多数也顺序对应，但要防少量例外。" },
  { part: "Part 4", title: "拼写与词形", titleEn: "Spelling first", detail: "高频学术词、数字、日期、单复数和词性都需要在听前预判、听后复核。" },
];

export const listeningRules: ListeningRule[] = [
  { id: "read-twice", part: "Part 2", category: "策略", title: "Part 2 / 3 先读懂全部选项", titleEn: "Read before listening", detail: "Part 2 和 Part 3 开始前先读完整题干与选项；第二遍专门记住选项之间的差异。理解题目比盲听更能提升正确率。" },
  { id: "abcde-order", part: "Part 3", category: "题型规律", title: "多选题多按 A–E 顺序出现", titleEn: "A–E usually follows audio order", detail: "Part 3 多选题中，录音通常按 A、B、C、D、E 的顺序提及内容；不需要跳着找，但仍要听转折。" },
  { id: "matching-order", part: "Part 3", category: "题型规律", title: "匹配题大多按顺序", titleEn: "Matching is mostly sequential", detail: "匹配题通常随录音顺序推进，只有少量题目会打乱；先按顺序定位，发现明显跳转时再调整。" },
  { id: "same-word-trap", part: "All", category: "同义替换", title: "原词重现常是干扰", titleEn: "Exact-word trap", detail: "若录音词与题干/答案词一模一样，要先警惕：雅思常考同义替换。更可能的答案往往是录音中出现的对应改写。", note: "不是绝对规则，仍需以语义与句法位置为准。" },
  { id: "new-info", part: "All", category: "信号词", title: "“新信息”要排除旧信息", titleEn: "New-information signal", detail: "题目问 new information 时，已经知道的内容通常不是答案。留意 already know、until now、I didn't realise、hadn't realised 等提示变化或新增的表达。" },
  { id: "future-trap", part: "All", category: "信号词", title: "时态与计划是重要排除点", titleEn: "Tense and plan traps", detail: "last year、has spent 说明已发生；we hope、will、proposed 等常指未来计划。题目要求当前/过去信息时，不要误选未来内容。" },
  { id: "should-include", part: "All", category: "题型规律", title: "should be included ≠ 已包含", titleEn: "Requirement versus current state", detail: "题目若问课程“应该包含什么”，已包含和完全没包含都可能是干扰；关注说话者提出的建议或待补足内容。" },
  { id: "negative-response", part: "All", category: "题型规律", title: "否定问句中的 No 可能是附和", titleEn: "Negative response", detail: "对方说 It wasn't easy. 回答 No 可能表示“是啊，确实不容易”，是在附和否定而非拒绝。要先判断前一句是否已有否定。" },
  { id: "both-agree", part: "Part 3", category: "信号词", title: "两人都同意，听 too / me too / as well", titleEn: "Shared agreement", detail: "多选或观点题中，第二位说话者若说 me too、too、as well，常意味着两人都认可同一选项。" },
  { id: "map-order", part: "Part 2", category: "题型规律", title: "地图题通常顺序听", titleEn: "Map routes are sequential", detail: "地图题通常沿路线顺序介绍，不像阅读那样跳跃。方位表达要定位：beyond 表示在另一侧或更远处，on the northern boundary 表示北部边缘。" },
  { id: "number-format", part: "Part 4", category: "拼写", title: "数字、日期与单位要预判格式", titleEn: "Numbers and formats", detail: "注意 23 pounds 70 可写作 23.70；a hundred ninety-five 对应 195；end of ___ 若原文是 last day of March，填 March；within 后的空可能是 10 days。" },
  { id: "option-partial", part: "All", category: "题型规律", title: "部分对应也可能是错项", titleEn: "Partial-match distractor", detail: "原文提到 has spent（已经花了），不等于题目中 more money is needed（需要更多钱）。抓住限定词、时态和数量关系。" },
];

export const listeningTerms: ListeningTerm[] = [
  { term: "research", meaning: "研究", relation: "原词重现时要警惕是否存在同义替换", category: "同义替换" },
  { term: "beyond", meaning: "在另一侧；更远处", relation: "地图定位词", category: "场景词", source: "Cambridge 21 T2" },
  { term: "on the northern boundary", meaning: "在北部边缘", relation: "地图定位词", category: "场景词", source: "Cambridge 21 T2" },
  { term: "long queue", meaning: "长时间排队", relation: "queue 常与等待场景关联", category: "场景词", source: "Cambridge 21 T3" },
  { term: "imprecisely", meaning: "不准确地", relation: "≈ inaccurate", category: "同义替换", source: "Cambridge 21 T3" },
  { term: "fuel-efficient", meaning: "燃料效率高的", relation: "≈ fewer emissions（低排放）", category: "同义替换", source: "Cambridge 21 T3" },
  { term: "recycle", meaning: "回收", relation: "≈ biodegradable（可生物降解，注意语义差异）", category: "同义替换", source: "Cambridge 21 T3" },
  { term: "invasive species", meaning: "入侵物种", category: "场景词", source: "Cambridge 21 T3" },
  { term: "accidentally / intentionally", meaning: "偶然地 / 故意地", relation: "反义动作方式", category: "易混词", source: "Cambridge 21 T3" },
  { term: "flexibility", meaning: "灵活性", relation: "≈ changing / adjust / accommodate / be able to change easily", category: "同义替换" },
  { term: "shed", meaning: "小屋；摆脱", relation: "名词与动词含义不同", category: "易混词" },
  { term: "creativity", meaning: "创造力", relation: "new idea 可指向创意", category: "同义替换" },
  { term: "trials / volume / calming / anxiety / medication", meaning: "试验 / 音量 / 镇静的 / 焦虑 / 药物", relation: "高频拼写组", category: "拼写" },
  { term: "independent", meaning: "独立的", relation: "可能与 first / himself 等个人独立线索关联", category: "同义替换", source: "Cambridge 18 T2" },
  { term: "haze / staff", meaning: "烟雾 / 职员、管理人员", category: "场景词", source: "Cambridge 18 T2" },
  { term: "nail / screw", meaning: "钉子（人体中指甲）/ 螺丝钉", category: "易混词", source: "Cambridge 18 T2" },
  { term: "timing / domestic / technical / temporary", meaning: "时机 / 国内的、家庭的 / 技术的 / 临时的", relation: "高频拼写组", category: "拼写" },
  { term: "inquire / enquire", meaning: "询问、打听", relation: "美式 / 英式拼写，意义相同", category: "易混词" },
  { term: "whether or not", meaning: "是否", relation: "不是“自愿”本身，需按完整语境判断", category: "易混词" },
  { term: "harbor / harbour", meaning: "港湾", relation: "美式 / 英式拼写", category: "拼写" },
  { term: "furniture", meaning: "家具", relation: "不可数名词，通常不加 s", category: "易混词" },
  { term: "ham / tuna / salmon", meaning: "火腿 / 金枪鱼 / 三文鱼", relation: "素食题要留意肉类和鱼类排除", category: "场景词" },
  { term: "dissertation", meaning: "毕业论文", relation: "可与 further study 对应", category: "同义替换" },
  { term: "puzzle", meaning: "困惑；拼图", relation: "jigsaw puzzle / crossword puzzle / a puzzle to solve", category: "易混词" },
  { term: "meditation / medicine", meaning: "冥想 / 医学、药", relation: "发音相近，含义不同", category: "易混词" },
  { term: "groom", meaning: "新郎", category: "场景词" },
  { term: "breeds", meaning: "多个品种", relation: "breed 作名词为品种；作动词为饲养繁殖", category: "易混词", source: "Cambridge 17 T2" },
  { term: "shamed / ashamed", meaning: "羞愧、惭愧", relation: "负面情绪词", category: "场景词", source: "Cambridge 17 T2" },
  { term: "dispose / disposal", meaning: "处理、扔掉 / 处理行为或处置", relation: "动词 / 名词", category: "易混词" },
  { term: "demanding / challenging", meaning: "要求高、令人疲惫 / 有难度但值得尝试", relation: "描述任务时区分语气", category: "易混词" },
  { term: "bilingual", meaning: "双语的", category: "拼写" },
  { term: "until now", meaning: "到现在为止", relation: "常暗示“此前一直如此，现在出现变化”", category: "信号词" },
  { term: "work placement", meaning: "工作实习、实习岗位", category: "场景词", source: "Cambridge 17 T3" },
  { term: "adapt / adjust / alter / modify", meaning: "适应 / 调整 / 改变 / 修改", relation: "flexible 的常见改写", category: "同义替换" },
  { term: "mud / cage / atlas / floor", meaning: "泥土 / 笼子 / 地图册 / 地板", relation: "高频拼写组", category: "拼写" },
  { term: "turnover", meaning: "离职率；营业额", relation: "结合工作语境判断", category: "易混词" },
  { term: "tap / trunk / tube / sap / bucket", meaning: "取液口 / 树干 / 管子 / 树液 / 桶", relation: "流程图与自然科学场景", category: "场景词" },
  { term: "litre / diameter / diabetes", meaning: "升 / 直径 / 糖尿病", relation: "拼写易错组", category: "拼写" },
  { term: "founded / set up", meaning: "建立 / 创办", relation: "同义替换", category: "同义替换", source: "Cambridge 16" },
  { term: "refurbishment / premises / warehouse / lorry", meaning: "翻新 / 场所 / 仓库 / 卡车", category: "场景词", source: "Cambridge 16" },
  { term: "put off / amend / realise", meaning: "推迟 / 修改 / 意识到", relation: "常见动作与状态词", category: "同义替换" },
  { term: "precise / specific", meaning: "精确的 / 具体的", relation: "近义替换", category: "同义替换" },
  { term: "rapid motion / fast movement", meaning: "快速运动 / 快速移动", relation: "同义替换", category: "同义替换" },
  { term: "ambiguous / confused attitude", meaning: "模糊的 / 困惑态度", relation: "态度题线索", category: "同义替换" },
  { term: "continuity", meaning: "连续性", relation: "never-ending cycle 可指向持续循环", category: "同义替换" },
  { term: "vegetarian", meaning: "素食者", relation: "听 meat、fish、tuna、salmon 时注意排除", category: "场景词" },
  { term: "acting", meaning: "表演", relation: "≈ drama classes", category: "同义替换" },
  { term: "coincidence / due to chance", meaning: "巧合 / 出于偶然", relation: "同义替换", category: "同义替换" },
  { term: "controversial / faulty", meaning: "有争议的 / 有缺陷的", category: "场景词" },
  { term: "calories / obesity / snack / helmet / tent", meaning: "卡路里 / 肥胖 / 零食 / 头盔 / 帐篷", relation: "高频拼写组", category: "拼写" },
  { term: "career ladder / rapid promotion", meaning: "职业晋升阶梯 / 快速晋升", relation: "职场场景", category: "场景词" },
  { term: "maternity cover", meaning: "产假期间的临时顶替岗位或人员", category: "场景词" },
  { term: "technician / technical / technique / technological / technology", meaning: "技术员 / 技术的 / 技巧 / 科技的 / 科技", relation: "人 / 属性 / 方法 / 形容词 / 总称", category: "易混词" },
  { term: "grind / ground up", meaning: "磨碎 / 过去式或过去分词", category: "易混词" },
  { term: "maintenance / potholes / overtaking / level crossing", meaning: "维护 / 坑洼 / 超车 / 平交道口", category: "场景词" },
  { term: "switch off engines", meaning: "关掉引擎", relation: "≈ not leave engines running", category: "同义替换" },
  { term: "amenity / wire / seeds / pump / posts / bees / clay", meaning: "便利设施 / 电线 / 种子 / 泵 / 帖子 / 蜜蜂 / 粘土", relation: "高频拼写组", category: "拼写" },
  { term: "baths / a tax / textiles", meaning: "浴室（可用复数）/ 一项税 / 纺织品", relation: "词形与拼写提醒", category: "拼写" },
];

export const listeningCambridgeNotes = [
  { id: "c21t2", title: "Cambridge 21 · Test 2", notes: ["地图题通常按路线顺序介绍；注意 beyond 和 on the northern boundary 的方位。", "题目问新信息时，already know 多为旧信息干扰；hadn't realised / I didn't realise 往往提示新增信息。", "题目问 should be included 时，已包含与完全未包含都可能不是答案，要听建议内容。"] },
  { id: "c21t3", title: "Cambridge 21 · Test 3", notes: ["long queue、imprecisely = inaccurate、fuel-efficient = fewer emissions。", "recycle 与 biodegradable 要理解题目要求的具体关系；注意 invasive species、accidentally / intentionally。", "trials、volume、calming、anxiety、medication 是高频拼写词。"] },
  { id: "c21t4", title: "Cambridge 21 · Test 4", notes: ["last year 是过去信号；we hope 是未来计划，按题干时态排除。", "brands in fashion and grocery 可与 food and clothing 对应。", "flexibility 常由 changing、adapt、adjust 等表达替换。"] },
  { id: "c18t2", title: "Cambridge 18 · Test 2", notes: ["independent 可能对应 first 或 himself；注意 haze、staff、nail、screw 等词。", "timing、domestic、technical、temporary 要会听会写；inquire / enquire 仅为美英拼写差异。", "素食相关题中听到 ham、tuna、salmon 要按语境排除。"] },
  { id: "c17", title: "Cambridge 17 · Test 2 / 3", notes: ["breeds 为多个品种；dispose / disposal、demanding / challenging、bilingual 注意词性与拼写。", "until now 经常暗示时间节点变化；work placement 为实习岗位。", "flexible 可由 adapt、adjust、alter、modify、accommodate 等替换。"] },
  { id: "c16", title: "Cambridge 16", notes: ["founded 常由 set up company 改写；originally 需要注意时间线。", "refurbishment、premises、warehouse、lorry 是常见场景词。", "precise = specific；rapid motion = fast movement；ambiguous 可指向 confused attitude。"] },
  { id: "c15", title: "Cambridge 15 · Test 1", notes: ["put up with 强调勉强忍受，be tolerant 更中性或积极。", "注意 consulted（被动受邀顾问）与 use publications to draw attention（主动倡导）的角色差异。", "wire、seeds、pump、clay、baths、textiles 等词需要掌握拼写。"] },
];
