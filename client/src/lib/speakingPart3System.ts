export const partThreeSteps = [
  { index: "01", title: "缓冲开场", titleEn: "Buffer opening", sentence: "Well, to be honest, I think there are a few different reasons behind this." },
  { index: "02", title: "观点 + 核心逻辑", titleEn: "Position + core logic", sentence: "The way I see it, [现象/观点], mainly because [核心逻辑链句型 1]." },
  { index: "03", title: "具体举例 / 场景", titleEn: "Example / scenario", sentence: "A case in point would be [具体人群/品牌/生活场景]." },
  { index: "04", title: "补充逻辑 / 深化", titleEn: "Further reasoning", sentence: "On top of that, another thing worth mentioning is that [核心逻辑链句型 2]." },
  { index: "05", title: "让步转折", titleEn: "Concession", sentence: "That said, I would still lean towards [让步观点或核心本质]." },
  { index: "06", title: "典型场景收尾", titleEn: "Situational close", sentence: "This is especially true when [典型适用场景]." },
];

export type LogicChain = {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  fits: string[];
  sentences: { english: string; chinese: string }[];
};

export const partThreeLogicChains: LogicChain[] = [
  {
    id: "stress",
    title: "压力链",
    titleEn: "Stress Chain",
    description: "核心首选：从竞争、负担与情绪恢复切入。",
    fits: ["运动", "兴趣爱好", "旅行", "宠物", "工作生活平衡", "年轻人压力", "休息的重要性"],
    sentences: [
      { english: "Fierce competition often pushes people to work under constant pressure, leaving them exhausted and stressed.", chinese: "激烈的竞争迫使人们在持续压力下工作，使人精疲力竭。" },
      { english: "Maintaining a healthy balance is particularly important. It helps people relieve pressure and improve both physical and mental well-being.", chinese: "保持健康平衡尤为重要，它能帮助缓解压力，提升身心健康。" },
      { english: "Whenever people face pressure or a difficult task, they often look for ways to take their mind off it to avoid burnout.", chinese: "每当面临压力或难题，人们往往寻求转移注意力以避免职业倦怠。" },
    ],
  },
  {
    id: "habit",
    title: "习惯链",
    titleEn: "Habit Chain",
    description: "从重复经验、低成本选择与行为惯性解释现象。",
    fits: ["新科技 / App", "做计划", "快速决策", "消费习惯", "回复消息"],
    sentences: [
      { english: "I suppose it has a lot to do with habit and repeated experience.", chinese: "我觉得这很大程度上与习惯和反复经历有关。" },
      { english: "People are not always making a completely new decision; most of the time, they are following a pattern they have built up over the years.", chinese: "人们并不总是做全新决定，大部分时候只是在沿用多年建立的行为模式。" },
      { english: "The familiar option feels safe, easy and low-effort, while a new option may feel inconvenient or uncomfortable at first.", chinese: "熟悉的选择让人觉得安全省力，而新选择一开始可能显得麻烦或不适。" },
    ],
  },
  {
    id: "technology",
    title: "科技与算法链",
    titleEn: "Technology & Algorithm",
    description: "从注意力、个性化内容和数字自律讨论科技影响。",
    fits: ["手机与友谊", "短视频成瘾", "AI 依赖", "信息过载", "社交媒体"],
    sentences: [
      { english: "Algorithm-driven social media constantly captures people's attention by offering personalized content, making it difficult to control screen time.", chinese: "算法驱动的社媒通过个性化内容不断捕捉注意力，让人难以控制屏幕时间。" },
      { english: "Whenever people face pressure, they sometimes bury their head in the sand and scroll through social media to take their mind off it, even though it is only a band-aid solution.", chinese: "面对压力时，人们有时会逃避现实去刷社媒转移注意力，即便这只是权宜之计。" },
      { english: "Digital self-discipline has become increasingly important, allowing people to use technology wisely instead of becoming overly dependent on it.", chinese: "数字自律越来越重要，它能让人明智地使用科技而非过度依赖。" },
    ],
  },
  {
    id: "external",
    title: "外部评价与社交认同链",
    titleEn: "External Evaluation",
    description: "从外部信号、熟悉感与从众行为解释选择。",
    fits: ["广告影响", "盲目消费", "追星", "时尚流行", "他人看法"],
    sentences: [
      { english: "People's choices are often shaped by outside signals and social recognition rather than completely isolated decisions.", chinese: "人们的选择常受外部信号和社交认同塑造，而非孤立做决定。" },
      { english: "When people see the same signal again and again, it can create familiarity, trust and a sense of social approval.", chinese: "当人们反复看到同一信号时，会产生熟悉感、信任感和社交认同感。" },
      { english: "Outside information should be a reference, but it can also push people to follow the crowd blindly.", chinese: "外部信息应仅供参考，但它有时也会推着人们盲目跟风。" },
    ],
  },
  {
    id: "upbringing",
    title: "原生家庭与成长环境链",
    titleEn: "Upbringing & Family",
    description: "从家庭环境、早期经验和榜样作用解释长期行为。",
    fits: ["性格形成", "沟通方式", "理财观念", "情绪表达", "代沟问题"],
    sentences: [
      { english: "A person's behavior and values are deeply rooted in their family environment and early childhood experiences.", chinese: "一个人的行为和价值观深植于其家庭环境和早期童年经历。" },
      { english: "Parents naturally set an example for their children, so early upbringing subtly shapes how one communicates, manages emotions, and handles problems.", chinese: "父母自然而然树立榜样，早期抚养潜移默化地塑造了沟通、情绪管理和解决问题的模式。" },
      { english: "The emotional support and communication style within a family lay the foundation for how a person interacts with the outside world.", chinese: "家庭内部的情感支持和沟通方式，为一个人如何与外界互动奠定了基础。" },
    ],
  },
];
