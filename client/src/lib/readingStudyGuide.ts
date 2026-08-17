export type ReadingStrategy = {
  id: string;
  category: "题型策略" | "判断题" | "逻辑信号" | "同义替换" | "定位";
  title: string;
  titleEn: string;
  detail: string;
  note?: string;
};

export type ReadingTerm = {
  term: string;
  meaning: string;
  relation?: string;
  category: "同义替换" | "词义辨析" | "逻辑词" | "场景词" | "词形拼写";
  source?: string;
};

export const readingStrategies: ReadingStrategy[] = [
  { id: "heading-last", category: "定位", title: "标题题优先回到段落核心", titleEn: "Heading from paragraph core", detail: "若最后一题是段落标题题，优先抓最后一段的主题句、转折词与结论句。标题考段落主旨，而不是零散细节。" },
  { id: "logical-consequence", category: "逻辑信号", title: "consequently 导出结果", titleEn: "Consequently = result", detail: "consequently = as a result / therefore，用来承接前半句原因并引出结果。阅读中要把它当作因果逻辑定位点。" },
  { id: "contrast-however", category: "逻辑信号", title: "However 后常是作者真实立场", titleEn: "However signals contrast", detail: "当段落以 However 强转折开头，并出现 misrepresents、criticising 等词时，作者通常在否定或修正前文的观点。" },
  { id: "false-conflict", category: "判断题", title: "FALSE：原文与题干明确冲突", titleEn: "False = explicit conflict", detail: "事实相反、绝对限定冲突，或因果/条件关系被颠倒，都属于 FALSE。名词可能相同，但动词、限定词或比较对象冲突即可判错。" },
  { id: "ng-missing", category: "判断题", title: "NOT GIVEN：缺少关键判断信息", titleEn: "NG = missing key evidence", detail: "NG 不是“几乎没提到”，而是虽提到相关话题，却缺少判断题干真伪的关键年份、比较对象、数量或结论。" },
  { id: "false-ng-example", category: "判断题", title: "比较对象被替换，判 FALSE", titleEn: "Changed comparison = false", detail: "如果原文比较“北极熊与棕熊”，题干却写成“不同北极熊群体”，原文已明确限定比较对象，题干与之冲突，应为 FALSE。", note: "题干只添加了原文没有的“最、唯一、所有”等信息，但原文未反驳时，仍可能是 NOT GIVEN。" },
  { id: "normative-fact", category: "判断题", title: "建议不等于事实发生", titleEn: "Suggestion is not fact", detail: "原文说 The time seems right for abandoning… 是建议或呼吁；题干说 many scientists are now turning away 则是事实性陈述。原文未证明该事实，应判 NOT GIVEN。" },
  { id: "set-aside", category: "同义替换", title: "Setting aside = 例外处理", titleEn: "Set aside = exception", detail: "Setting aside such greats as Darwin and Einstein 表示“暂且不论这些例外”；可与 exception to a general rule 对应。" },
  { id: "relation-precision", category: "同义替换", title: "find → locate → detect → pinpoint", titleEn: "Finding precision ladder", detail: "find 泛指找到；locate 表示定位；detect 是察觉到；pinpoint 指精确定位。阅读中既要认同义，也要看精确度是否被题干夸大。" },
  { id: "absolute-limits", category: "判断题", title: "绝对词要逐一核验", titleEn: "Check absolute limits", detail: "all、only、never、always、best、most 等限定词决定题干强度。原文若只说 most、promising 或 some，题干的绝对结论不能直接成立。" },
];

export const readingTerms: ReadingTerm[] = [
  { term: "gear", meaning: "装备；齿轮", category: "词义辨析", source: "Cambridge 21" },
  { term: "champion", meaning: "拥护者、支持者；冠军", relation: "涉及支持/反对立场时优先理解为倡导者", category: "词义辨析", source: "Cambridge 21" },
  { term: "abolition / tragedy", meaning: "废除 / 悲剧", category: "场景词", source: "Cambridge 21 T1" },
  { term: "imported labour / Polish worker", meaning: "进口劳动力 / 波兰工人", relation: "具体含义由经济与劳动力语境决定", category: "场景词", source: "Cambridge 21 T1" },
  { term: "sugar farming", meaning: "甘蔗或甜菜等制糖原料的种植业", relation: "farming 泛指农业、耕种或养殖；farm 可作农场/耕作", category: "词义辨析", source: "Cambridge 21 T1" },
  { term: "interests", meaning: "利益、权益", relation: "经济/政治语境中不是“兴趣”", category: "词义辨析", source: "Cambridge 21 T1" },
  { term: "ubiquitous / commonplace", meaning: "无处不在的 / 常见的", relation: "常见同义替换", category: "同义替换", source: "Cambridge 21 T1" },
  { term: "once regarded as a luxury", meaning: "曾经被视为奢侈品", relation: "once = 曾经；regarded as = 被视为", category: "逻辑词", source: "Cambridge 21 T1" },
  { term: "largely paralysed", meaning: "基本上瘫痪；在很大程度上无法动弹", category: "场景词" },
  { term: "maze / stamp", meaning: "迷宫 / 印章、标记、邮票", category: "词义辨析" },
  { term: "reap / algorithm / roll out", meaning: "收获 / 算法 / 上线、部署", relation: "warn against = 警告不要；security standards = 安全标准", category: "场景词", source: "Cambridge 21 T2" },
  { term: "poaching", meaning: "偷猎；水煮（蛋）", category: "词义辨析" },
  { term: "horn / thick / swell", meaning: "牛羊角 / 厚的 / 增长、膨胀", category: "场景词" },
  { term: "get around", meaning: "出行、四处走动、通勤", relation: "the problem of getting around a city = 市内出行难题", category: "同义替换" },
  { term: "single-storey / high-rise blocks", meaning: "平房 / 高层住宅楼群", category: "场景词" },
  { term: "transit", meaning: "运输、运送、通行；交通系统", relation: "mass / rapid transit = 大众、快速公共交通", category: "场景词" },
  { term: "incremental / gradual", meaning: "渐进的、逐步的", relation: "同义替换", category: "同义替换", source: "Cambridge 21 T3" },
  { term: "have yet to be", meaning: "尚未被……", relation: "The final decision has yet to be made = 最终决定尚未做出", category: "逻辑词" },
  { term: "understate / overstate", meaning: "轻描淡写 / 夸大、言过其实", category: "词义辨析" },
  { term: "dispute / controversy", meaning: "争议 / 争论", relation: "同义替换", category: "同义替换" },
  { term: "block", meaning: "街区、大块、大楼、障碍物；阻挡、阻塞", relation: "名词与动词均常考", category: "词义辨析" },
  { term: "shore", meaning: "陆地与水交界处；海岸、河岸、湖岸", category: "场景词" },
  { term: "biogas / biofuel", meaning: "沼气 / 生物燃料", category: "场景词", source: "Cambridge 21 T4" },
  { term: "solid / liquid / gas", meaning: "固体 / 液体 / 气体", category: "场景词" },
  { term: "subtraction task", meaning: "减法任务", category: "场景词" },
  { term: "decide against / hold back", meaning: "决定不做 / 阻碍", relation: "hold back 常作为 prevent / hinder 的替换", category: "同义替换" },
  { term: "shoddy / inferior", meaning: "劣质的、粗制滥造的 / 次等的", relation: "同义替换；deter = 阻止、威慑，含义不同", category: "同义替换" },
  { term: "more than enough", meaning: "绰绰有余、远超所需", category: "同义替换" },
  { term: "adhesive / painstaking", meaning: "粘合剂、有粘性的 / 煞费苦心的、一丝不苟的", category: "场景词" },
  { term: "nature reserve / wildlife preserve", meaning: "自然保护区 / 野生动物保护区", relation: "conserve 常作动词；conservation area 才可指保护区域", category: "词义辨析" },
  { term: "congestion / traffic jam / gridlock / bottleneck", meaning: "拥堵 / 堵车 / 交通瘫痪 / 瓶颈", relation: "常见同义替换", category: "同义替换", source: "Cambridge 17" },
  { term: "fortress / depot", meaning: "堡垒 / 仓库、存储站", relation: "depot 可与 storage 对应", category: "场景词" },
  { term: "urban hub / smart grid", meaning: "城市枢纽 / 智能电网", relation: "embedded within urban fabric = 融入城市肌理", category: "场景词", source: "Cambridge 17" },
  { term: "amenity / amenities", meaning: "便利设施、生活配套", relation: "可数名词；常指停车、餐饮、Wi-Fi、卫生间等", category: "词义辨析" },
  { term: "alliance / did a deal", meaning: "联盟 / 达成交易或合作", relation: "题目语境中可相互关联", category: "同义替换", source: "Cambridge 17 T1 P3" },
  { term: "grazing / meadow", meaning: "吃草 / 草地", category: "场景词" },
  { term: "sum / account", meaning: "一笔钱 / 叙述、账户", relation: "account 在书评语境可指“叙述”", category: "词义辨析" },
  { term: "initiative / commissioned", meaning: "倡议、举措 / 委托创作、正式委任", category: "场景词" },
  { term: "ceiling / chamber", meaning: "天花板 / 房间、厅堂", relation: "bed chamber = 卧室", category: "场景词" },
  { term: "even-handed sympathy / unbiased approach", meaning: "不偏不倚的同情 / 公正方法", relation: "同义替换", category: "同义替换" },
  { term: "scroll / clay / decipher", meaning: "卷轴 / 粘土 / 破译、解读", category: "场景词" },
  { term: "resembling / reassembling", meaning: "相似于 / 重新组装", relation: "拼写和词义均不同", category: "词义辨析" },
  { term: "triple the size", meaning: "三倍大小", category: "逻辑词" },
  { term: "demise / scarcity", meaning: "终结、消亡 / 稀缺", category: "场景词" },
  { term: "implement / subsidy / main staple", meaning: "实施 / 补贴 / 主要主食", category: "场景词" },
  { term: "feed on / prey on", meaning: "以……为食 / 捕食", relation: "语境相关替换", category: "同义替换" },
  { term: "roost / descendant", meaning: "鸟类栖息处 / 后代", category: "场景词" },
  { term: "nurturing / caring", meaning: "培育的、养育性的 / 关怀的", relation: "性格描述可关联", category: "同义替换" },
  { term: "thorn / pesticide / weedcide", meaning: "刺 / 杀虫剂 / 除草剂", relation: "-cide 词根与“杀灭”相关", category: "词形拼写", source: "Cambridge 18" },
  { term: "taxonomy / ditch / pit / roller", meaning: "分类法 / 沟渠 / 坑 / 滚筒", category: "场景词" },
  { term: "oxen / haul", meaning: "牛（ox 复数）/ 拖运", category: "词形拼写" },
  { term: "druids", meaning: "德鲁伊；古凯尔特祭司或智者阶层", category: "场景词" },
];

export const readingCambridgeNotes = [
  { id: "c21t1", title: "Cambridge 21 · Test 1", notes: ["糖业文章注意 interests 在经济政治语境中为“利益”，consequently 为因果信号。", "ubiquitous ≈ commonplace；once regarded as a luxury 表示曾被视为奢侈品。", "Sugar bourgeoisie、trade barriers、subsidies 等词需放在经济保护语境中理解。"] },
  { id: "c21t2", title: "Cambridge 21 · Test 2", notes: ["AI 文章注意 roll out、warn against、privacy security standards、defence mechanisms。", "末题标题题优先回最后一段抓主旨；reap、algorithm 等为核心词。"] },
  { id: "c21t3", title: "Cambridge 21 · Test 3", notes: ["城市出行文章：get around = 出行/通勤；mass transit、high-rise blocks、single-storey 均为城市交通词。", "incremental = gradual；have yet to be 表示尚未被完成。", "判断题牢记：FALSE 是冲突，NOT GIVEN 是缺关键信息。"] },
  { id: "c21t4", title: "Cambridge 21 · Test 4", notes: ["能源文章注意 biogas、biofuel 与 solid/liquid/gas 的物态关系。", "decide against = 决定不做；hold back = 阻碍。", "shoddy ↔ inferior；deter 则意为阻止，不能混同。"] },
  { id: "c18", title: "Cambridge 18", notes: ["thorn、pesticide、weedcide、taxonomies、ditch、pit、roller 等自然与技术词需积累。", "resembling 与 reassembling 的意义完全不同；decipher = 破译。", "作者建议不等于许多人已在行动，注意事实陈述与规范性呼吁的区别。"] },
  { id: "c17", title: "Cambridge 17", notes: ["congestion 可与 traffic jam、gridlock、bottleneck 替换。", "urban hub、smart grid、amenities 是城市与建筑语境高频词。", "setting aside such greats 表示例外处理；However 后常是作者真实评价。"] },
  { id: "c16", title: "Cambridge 16", notes: ["经典 FALSE / NG：原文比较北极熊与棕熊，题干改成不同北极熊群体，比较对象冲突，判 FALSE。", "若题干加最强比较但原文未给比较对象或数据，通常为 NOT GIVEN。"] },
  { id: "c15", title: "Cambridge 15", notes: ["书评题注意 account 可指叙述，even-handed sympathy 可对应 unbiased approach。", "最后段指出 book doesn't quite hit the mark 时，答案通常围绕作者认为缺失的核心讨论。"] },
];
