export type StoryId = "person" | "object" | "experience" | "place";

export const personalStoryContext: Record<StoryId, { title: string; summary: string; useFor: string }> = {
  person: {
    title: "科隆多老师 / Memory Coach & Mentor",
    summary: "刘涵的记忆法导师；通过社交媒体认识，擅长把记忆宫殿等复杂技巧讲清楚，并创办教育公司。刘涵在他的指导下训练了随机扑克牌记忆和专注力。",
    useFor: "人物、老师、导师、努力的人、创业者、教技能的人、受欢迎的人。",
  },
  object: {
    title: "高性能剪辑笔记本电脑 / High-Performance Laptop",
    summary: "刘涵为数字媒体专业的视觉效果、视频渲染、AI 工具和自媒体剪辑使用的高性能笔记本电脑；它显著缩短渲染时间，也支持高质量内容产出。",
    useFor: "电子设备、节省时间的科技、贵重物品、学习或工作用品、满意购物、不可或缺的物品。",
  },
  experience: {
    title: "记忆法训练与 AI 自媒体 / Memory Training & AI Self-Media",
    summary: "刘涵在大学数字媒体学习、记忆法训练与 AI 视频内容创作之间建立规律；训练卡片和数字记忆，提高专注力，并通过 AI 剪辑教程积累了播放和关注。",
    useFor: "挑战性技能、成就、科技解决问题、保持专注、积极改变、忙碌经历。",
  },
  place: {
    title: "个人创作与专注空间 / Personal Creative Workspace",
    summary: "刘涵用于剪辑、记忆训练和个人创作的安静空间；有清晰的设备安排、可进入深度专注状态，也承载了数字媒体学习与内容创作的日常。",
    useFor: "地点、安静场所、学习场所、想再去的地方、适合专注的空间。",
  },
};

export const speakingFrameworkContext = {
  part1: "Part 1 采用 OREF：Opinion（直接观点）→ Reason（原因）→ Example（具体细节）→ Feeling（感受或反思）。回答自然、2–4 句即可。",
  part2: "Part 2 优先选择最贴合的一张个人母题卡，保留真实的个人细节；先定位题型，再删减或强化相应句子，形成 1–2 分钟连贯故事。",
  part3: "Part 3 使用六步逻辑：直接观点 → 解释原因 → 举例 → 对比或影响 → 让步 → 总结。按问题需要选择压力、习惯、科技算法、外部评价或原生家庭等逻辑链。",
};

export const recentPublicPracticePrompts = [
  { id: "may-aug-2026-creative-person", title: "A creative person you admire", zh: "一位你欣赏的有创意的人", part: "Part 2", storyId: "person" as StoryId, sourceWindow: "May–August 2026", sourceUrl: "https://resources.cathoven.com/ielts-speaking/cue-card-bank" },
  { id: "may-aug-2026-useful-tech", title: "A technology item that saves you time", zh: "一件帮你节省时间的科技产品", part: "Part 2", storyId: "object" as StoryId, sourceWindow: "May–August 2026", sourceUrl: "https://resources.cathoven.com/ielts-speaking/cue-card-bank" },
  { id: "may-aug-2026-proud-skill", title: "A challenging skill you learned", zh: "一项你学会的有挑战性的技能", part: "Part 2", storyId: "experience" as StoryId, sourceWindow: "May–August 2026", sourceUrl: "https://resources.cathoven.com/ielts-speaking/cue-card-bank" },
  { id: "may-aug-2026-quiet-place", title: "A place where you can focus", zh: "一个你能够专注的地方", part: "Part 2", storyId: "place" as StoryId, sourceWindow: "May–August 2026", sourceUrl: "https://resources.cathoven.com/ielts-speaking/cue-card-bank" },
  { id: "may-aug-2026-teachers", title: "Teachers", zh: "老师与导师", part: "Part 1", storyId: "person" as StoryId, sourceWindow: "May–August 2026", sourceUrl: "https://joespeaking.com/ielts-speaking-questions/2026-may-aug" },
  { id: "may-aug-2026-websites", title: "Websites", zh: "网站与网络信息", part: "Part 1", storyId: "experience" as StoryId, sourceWindow: "May–August 2026", sourceUrl: "https://joespeaking.com/ielts-speaking-questions/2026-may-aug" },
  { id: "may-aug-2026-technology-impact", title: "How technology changes daily life", zh: "科技如何改变日常生活", part: "Part 3", storyId: "object" as StoryId, sourceWindow: "May–August 2026", sourceUrl: "https://resources.cathoven.com/ielts-speaking/cue-card-bank" },
  { id: "may-aug-2026-focus-habits", title: "Habits that support focus", zh: "有助于专注的习惯", part: "Part 3", storyId: "experience" as StoryId, sourceWindow: "May–August 2026", sourceUrl: "https://resources.cathoven.com/ielts-speaking/cue-card-bank" },
];

export function buildCoachSystemPrompt(input: {
  profile?: { currentBand?: string | null; targetBand?: string | null; strengths?: string | null; weakAreas?: string | null; interests?: string | null; personalContext?: string | null; preferredFeedback?: string | null };
  storyId?: StoryId | null;
  speakingPart: string;
}) {
  const story = input.storyId ? personalStoryContext[input.storyId] : undefined;
  const profile = input.profile;

  return `You are Hank Lau's private IELTS speaking coach. You must be supportive, precise, and honest. Generate IELTS-appropriate English without inventing test experience, scores, or personal facts. Use the learner's existing materials first, and explicitly mark optional invented bridging details as [customize].

Learner profile: current band=${profile?.currentBand || "not set"}; target=${profile?.targetBand || "7.0"}; strengths=${profile?.strengths || "not set"}; weak areas=${profile?.weakAreas || "not set"}; interests=${profile?.interests || "Digital Media, memory training, AI video creation"}; private context=${profile?.personalContext || "not set"}; feedback style=${profile?.preferredFeedback || "balanced"}.

Speaking framework: ${input.speakingPart === "Part 1" ? speakingFrameworkContext.part1 : input.speakingPart === "Part 2" ? speakingFrameworkContext.part2 : speakingFrameworkContext.part3}

Selected personal story: ${story ? `${story.title}. ${story.summary} Best uses: ${story.useFor}` : "Choose a suitable story only if it naturally fits."}

Response format in Markdown:
1. **Recommended route / 推荐路径** — explain in Chinese which story/framework to use and why.
2. **Band 7-style answer** — natural spoken English, split into short paragraphs.
3. **Personalize it / 个性化替换** — 2–3 optional slots marked [customize].
4. **Coach notes / 教练反馈** — 3 concise points on logic, vocabulary and delivery.
Avoid claiming the prompt is an official IELTS question. Do not overstuff idioms or make the answer sound memorized.`;
}
