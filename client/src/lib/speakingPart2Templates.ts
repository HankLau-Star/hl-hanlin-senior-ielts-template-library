export type SpeakingSentence = {
  english: string;
  chinese: string;
};

export type SpeakingPart2Card = {
  id: string;
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  coverage: { english: string; chinese: string }[];
  script: SpeakingSentence[];
  phrases: { english: string; chinese: string }[];
  tips: { prompt: string; advice: string }[];
};

export const speakingPart2Cards: SpeakingPart2Card[] = [
  {
    id: "person",
    category: "人物类",
    categoryEn: "Person",
    title: "科隆多老师",
    titleEn: "Mr. Ke Longduo — Memory Coach & Mentor",
    coverage: [
      { english: "Describe a creative person you admire", chinese: "你钦佩的创意人才" },
      { english: "Describe a successful businessperson / entrepreneur", chinese: "成功的商人 / 创业者" },
      { english: "Describe an impressive teacher or mentor", chinese: "令人印象深刻的老师" },
      { english: "Describe a popular person / social media influencer", chinese: "受欢迎的人 / 网红" },
      { english: "Describe a person who taught you a useful skill", chinese: "教你实用技能的人" },
      { english: "Describe a person who works hard", chinese: "努力工作的人" },
    ],
    script: [
      { english: "The person I’d like to talk about is my memory coach, Mr. Ke Longduo, who is a recognized Grandmaster of Memory in Asia.", chinese: "我想谈的人是我的记忆法导师科隆多老师，他是一位公认的亚洲世界记忆大师。" },
      { english: "I first discovered him through social media, where he has accumulated hundreds of thousands of followers as a prominent content creator.", chinese: "我最早是通过社交媒体认识他的，作为一名知名的内容创作者，他在全网积累了数十万粉丝。" },
      { english: "What impresses me most is his unique ability to demystify complex cognitive techniques—like the Memory Palace—and make them simple for ordinary people.", chinese: "最让我印象深刻的是，他能够将复杂的认知技巧，如记忆宫殿，通俗化，让普通人也能轻松理解。" },
      { english: "Inspired by his expertise, I enrolled in his professional course to systematically train my mental clarity.", chinese: "在他专业能力的感染下，我报名了他的专业课程，开始系统地训练自己的思维专注力。" },
      { english: "Beyond his outstanding teaching, I admire him for his entrepreneurial vision and strong self-discipline.", chinese: "除了卓越的教学能力，我非常钦佩他的创业远见和强大的自律。" },
      { english: "He successfully founded his own educational company and holds various industry certifications, building a stellar reputation in the field.", chinese: "他成功创立了自己的教育公司并拥有多项行业认证，在该领域树立了极佳的声誉。" },
      { english: "Under his guidance, I can now memorize a random deck of playing cards in minutes, which has boosted my cognitive focus tremendously.", chinese: "在他的指导下，我现在能在几分钟内记住一副随机的扑克牌，这极大地提升了我的认知专注力。" },
      { english: "He is not just a teacher to me, but a role model who redefined what it means to be an inspiring mentor in the digital age.", chinese: "对我而言，他不仅是一位老师，更是一位重新定义了数字时代优秀导师含义的榜样。" },
    ],
    phrases: [
      { english: "demystify complex cognitive techniques", chinese: "将复杂的认知技巧通俗化" },
      { english: "entrepreneurial vision", chinese: "创业远见" },
      { english: "stellar reputation", chinese: "极佳的声誉" },
    ],
    tips: [
      { prompt: "商人 / 创业者", advice: "重点强调他创立教育公司、拥有行业认证的第 5、6 句。" },
      { prompt: "网红 / 受欢迎的人", advice: "重点强调数十万粉丝和持续输出优质记忆法内容的第 2 句。" },
      { prompt: "教你技能的人", advice: "重点强调记忆宫殿训练和背扑克牌成果的第 4、7 句。" },
    ],
  },
  {
    id: "object",
    category: "物品类",
    categoryEn: "Object",
    title: "高性能剪辑笔记本电脑",
    titleEn: "High-Performance Laptop",
    coverage: [
      { english: "Describe an electronic device you use frequently", chinese: "常用的电子设备" },
      { english: "Describe a piece of technology that helps you save time", chinese: "帮你节省时间的科技产品" },
      { english: "Describe something expensive you bought", chinese: "你买过的贵重物品" },
      { english: "Describe a useful item you use for work or study", chinese: "用于学习 / 工作的实用物品" },
      { english: "Describe something you can't live without", chinese: "生活中不可或缺的物品" },
      { english: "Describe an item you bought that you were satisfied with", chinese: "买到满意的物品" },
    ],
    script: [
      { english: "The item I’d like to talk about is my high-performance laptop, which I bought early last year.", chinese: "我想谈的物品是我去年年初买的一台高性能笔记本电脑。" },
      { english: "As a junior majoring in Digital Media, I heavily rely on powerful hardware for visual effects, video rendering, and running AI tools.", chinese: "作为一名数字媒体专业的大三学生，我非常依赖强悍的硬件来进行特效处理、视频渲染和运行 AI 工具。" },
      { english: "It comes equipped with a top-tier graphics card and a fast processor, wrapped in a sleek black chassis.", chinese: "它配备了顶级的显卡和高速处理器，包裹在一个利落的黑色外观里。" },
      { english: "I mainly use it for post-production work, such as editing videos for my self-media channel and training memory software.", chinese: "我主要用它做后期制作，比如为我的自媒体频道剪辑视频，以及练习记忆法软件。" },
      { english: "This device has been an absolute game-changer for me because it drastically cuts down video rendering time from hours to minutes.", chinese: "这台设备对我来说完全改变了游戏规则，因为它把视频渲染时间从几小时大幅缩短到了几分钟。" },
      { english: "It not only handles my demanding academic workload smoothly, but also empowers me to produce high-quality videos that have gained millions of views.", chinese: "它不仅顺畅地处理了我繁重的学业任务，还让我能够产出获得数百万播放的高质量视频。" },
      { english: "Honestly, I can barely imagine my daily routine without it, as it serves as the foundation for both my studies and my passion for content creation.", chinese: "老实说，我几乎不敢想象没有它的日常，因为它是我学业和内容创作热情的基石。" },
    ],
    phrases: [
      { english: "game-changer", chinese: "颠覆性的事物 / 改变游戏规则的东西" },
      { english: "drastically cuts down", chinese: "大幅缩减" },
      { english: "demanding academic workload", chinese: "繁重的学业任务" },
    ],
    tips: [
      { prompt: "省时间的科技", advice: "强调第 5 句：视频渲染从几小时缩短到几分钟。" },
      { prompt: "贵重物品 / 满意购物", advice: "强调第 1、6 句：虽然昂贵，但帮助产出了百万播放视频。" },
      { prompt: "实用物品 / 不可或缺", advice: "强调第 2、7 句：它是特效、AI、学业和创作的基础。" },
    ],
  },
  {
    id: "experience",
    category: "经历与技能类",
    categoryEn: "Experience & Skill",
    title: "训练记忆法与运营 AI 自媒体",
    titleEn: "Memory Training & AI Self-Media",
    coverage: [
      { english: "Describe a challenging skill you learned", chinese: "你学到的挑战性技能" },
      { english: "Describe a proud achievement or success", chinese: "值得骄傲的成就 / 成功" },
      { english: "Describe a time you used technology to solve a problem", chinese: "用科技解决问题" },
      { english: "Describe an activity you do to stay focused", chinese: "保持专注的活动" },
      { english: "Describe a positive change in your life", chinese: "生活中的积极改变" },
      { english: "Describe an occasion when you were very busy", chinese: "一次非常忙碌的经历" },
    ],
    script: [
      { english: "A major achievement I am particularly proud of is mastering mnemonic techniques while building my own AI video channel.", chinese: "我特别自豪的一项重大成就是，在搭建自己的 AI 视频频道的同时，掌握了记忆法技巧。" },
      { english: "It started about a year ago when I realized I needed higher mental clarity to handle my demanding visual effects projects.", chinese: "这始于大约一年前，当时我意识到自己需要更高的思维专注力来应对繁重的特效项目。" },
      { english: "I began practicing memory methods daily, forcing myself to memorize random cards and numbers forward and backward.", chinese: "我开始每天练习记忆法，强迫自己顺背和倒背随机的扑克牌与数字。" },
      { english: "At first, it was mentally exhausting, but it gradually built up my mental stamina.", chinese: "刚开始时这非常消耗脑力，但它逐渐培养了我的心理耐力和专注力。" },
      { english: "To push myself further, I combined my major in Digital Media with AI tools, producing short tutorials on AI video editing.", chinese: "为了进一步突破自己，我将数字媒体专业与 AI 工具结合，制作了关于 AI 视频剪辑的短视频教程。" },
      { english: "To my excitement, one of my videos went viral, eventually amassing tens of thousands of followers and over a million views.", chinese: "让我兴奋的是，其中一条视频爆火了，最终积累了数万粉丝和上百万的播放量。" },
      { english: "This experience not only sharpened my cognitive focus, but also proved that persistence can turn ambitious goals into reality.", chinese: "这次经历不仅磨炼了我的认知专注力，也证明了坚持可以将宏大的目标变为现实。" },
    ],
    phrases: [
      { english: "mnemonic techniques", chinese: "记忆术 / 记忆法" },
      { english: "mental stamina", chinese: "心理耐力 / 脑力专注度" },
      { english: "amassing tens of thousands of followers", chinese: "积累了数万粉丝" },
    ],
    tips: [
      { prompt: "挑战性技能 / 保持专注", advice: "重点讲第 3、4 句：记扑克牌和数字，训练 mental stamina。" },
      { prompt: "自豪成就 / 科技解决问题", advice: "重点讲第 5、6 句：结合 AI 与特效专业，做出百万播放视频。" },
      { prompt: "忙碌经历", advice: "强调同时兼顾大学学业、记忆法训练和自媒体日更。" },
    ],
  },
  {
    id: "place",
    category: "地点与自然类",
    categoryEn: "Place & Nature",
    title: "郑州黄河风景名胜区",
    titleEn: "Yellow River Scenic Area in Zhengzhou",
    coverage: [
      { english: "Describe a place you visited that had breathtaking views", chinese: "风景壮丽的地方" },
      { english: "Describe a place near water you like", chinese: "喜欢的临水 / 沿海地点" },
      { english: "Describe a quiet place you go to unwind", chinese: "放松的安静之地" },
      { english: "Describe a place you would like to recommend to others", chinese: "推荐给别人的地方" },
      { english: "Describe a historic or cultural site in your hometown", chinese: "家乡的历史文化景点" },
      { english: "Describe a destination you went to on a short trip", chinese: "短途旅行的目的地" },
    ],
    script: [
      { english: "A destination that left an indelible mark on me is the Yellow River Scenic Area in my hometown, Zhengzhou.", chinese: "一个在我心中留下不可磨灭印记的目的地是我家乡郑州的黄河风景名胜区。" },
      { english: "Located on the northern outskirts of the city, it sits right on the banks of China's iconic mother river.", chinese: "它位于城市的北郊，紧邻中国标志性的母亲河畔。" },
      { english: "I visited it recently on a weekend, looking for a peaceful escape from my hectic academic routine and screen-heavy editing work.", chinese: "我最近利用周末去游览了一次，希望能从忙碌的大学生活和频繁面对屏幕的剪辑工作中寻得一片宁静。" },
      { english: "What makes this place so special is its combination of untouched natural vastness and deep historical roots.", chinese: "这个地方的特别之处在于，它将未经雕琢的自然辽阔感与深厚的历史底蕴完美结合。" },
      { english: "Standing on top of the hill, I could look out over the vast, turbulent river flowing eastward, framed by monumental stone statues.", chinese: "站在山顶之上，我俯瞰着滔滔东流的辽阔大河，远处耸立着宏伟的巨型石雕。" },
      { english: "As someone who spends hours staring at computer screens every day for video editing, being surrounded by such grand scenery felt like absolute healing.", chinese: "作为一个每天为了剪辑视频要在电脑前坐好几个小时的人，置身于如此宏伟的景色中感觉得到了彻底的治愈。" },
      { english: "The sheer majesty of the river completely cleared my head, and I would unhesitatingly recommend this site to anyone seeking tranquility.", chinese: "黄河磅礴的气势彻底清空了我的大脑，我会毫不犹豫地把这个地方推荐给每一个寻求宁静的人。" },
    ],
    phrases: [
      { english: "indelible mark", chinese: "不可磨灭的印记 / 印象深刻" },
      { english: "untouched natural vastness", chinese: "未经雕琢的自然辽阔感" },
      { english: "absolute healing", chinese: "彻底的治愈" },
    ],
    tips: [
      { prompt: "临水之地 / 壮丽景色", advice: "重点描写第 5 句：东流的黄河与石雕。" },
      { prompt: "放松的地方", advice: "重点强调第 3、6 句：离开屏幕剪辑，在自然中得到治愈。" },
      { prompt: "家乡文化景点", advice: "重点强调第 2、4 句：母亲河和深厚的历史底蕴。" },
    ],
  },
];

export const speakingPart2StudySteps = [
  "熟悉卡片：把 4 篇短文读熟，重点记忆高分表达，并确保发音自然、有语调起伏。",
  "套题练习：每天用 5 秒把题目归类到四张卡之一，再计时说满 1 分半到 2 分钟。",
  "录音自查：听自己的停顿、流利度与时态问题，优先保持表达连贯、真实、自然。",
];
