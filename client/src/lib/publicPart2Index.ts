export type StoryId = "person" | "object" | "experience" | "place";

export type PublicPart2Prompt = {
  id: string;
  promptEn: string;
  promptZh: string;
  category: "Person" | "Object" | "Experience" | "Place";
  storyId: StoryId;
  storyLabel: string;
  source: "IDP example topic" | "IELTS Liz practice topic";
};

// Public practice-topic index. Prompts are short practice labels, not a reproduced Cambridge book or complete cue card.
export const publicPart2Prompts: PublicPart2Prompt[] = [
  { id: "p01", promptEn: "Talk about a creative person you admire", promptZh: "谈谈你钦佩的创意人士", category: "Person", storyId: "person", storyLabel: "人物：科隆多老师", source: "IDP example topic" },
  { id: "p02", promptEn: "Describe a teacher who made a positive difference", promptZh: "描述一位带来积极影响的老师", category: "Person", storyId: "person", storyLabel: "人物：科隆多老师", source: "IDP example topic" },
  { id: "p03", promptEn: "Describe a person who taught you a skill", promptZh: "描述教会你一项技能的人", category: "Person", storyId: "person", storyLabel: "人物：科隆多老师", source: "IELTS Liz practice topic" },
  { id: "p04", promptEn: "Talk about a successful entrepreneur", promptZh: "谈谈一位成功的创业者", category: "Person", storyId: "person", storyLabel: "人物：科隆多老师", source: "IELTS Liz practice topic" },
  { id: "p05", promptEn: "Describe a popular online creator", promptZh: "描述一位受欢迎的网络创作者", category: "Person", storyId: "person", storyLabel: "人物：科隆多老师", source: "IELTS Liz practice topic" },
  { id: "p06", promptEn: "Describe someone you respect", promptZh: "描述一位你尊敬的人", category: "Person", storyId: "person", storyLabel: "人物：科隆多老师", source: "IELTS Liz practice topic" },
  { id: "p07", promptEn: "Describe a kind person you know", promptZh: "描述一位你认识的善良的人", category: "Person", storyId: "person", storyLabel: "人物：科隆多老师", source: "IELTS Liz practice topic" },
  { id: "p08", promptEn: "Talk about a family member you get on with", promptZh: "谈谈一位和你相处融洽的家人", category: "Person", storyId: "person", storyLabel: "人物：科隆多老师", source: "IELTS Liz practice topic" },
  { id: "p09", promptEn: "Describe an older person you like", promptZh: "描述一位你喜欢的年长者", category: "Person", storyId: "person", storyLabel: "人物：科隆多老师", source: "IELTS Liz practice topic" },
  { id: "o01", promptEn: "Talk about an electronic device you use a lot", promptZh: "谈谈你经常使用的电子设备", category: "Object", storyId: "object", storyLabel: "物品：高性能剪辑本", source: "IDP example topic" },
  { id: "o02", promptEn: "Describe technology that saves you time", promptZh: "描述一项能为你节省时间的科技产品", category: "Object", storyId: "object", storyLabel: "物品：高性能剪辑本", source: "IDP example topic" },
  { id: "o03", promptEn: "Talk about an expensive purchase you value", promptZh: "谈谈一件你珍视的昂贵购买", category: "Object", storyId: "object", storyLabel: "物品：高性能剪辑本", source: "IDP example topic" },
  { id: "o04", promptEn: "Describe a useful item for study or work", promptZh: "描述一件用于学习或工作的实用物品", category: "Object", storyId: "object", storyLabel: "物品：高性能剪辑本", source: "IDP example topic" },
  { id: "o05", promptEn: "Describe a product you recently bought", promptZh: "描述一件你最近购买的产品", category: "Object", storyId: "object", storyLabel: "物品：高性能剪辑本", source: "IDP example topic" },
  { id: "o06", promptEn: "Talk about an item you cannot easily live without", promptZh: "谈谈一件你很难离开的物品", category: "Object", storyId: "object", storyLabel: "物品：高性能剪辑本", source: "IELTS Liz practice topic" },
  { id: "o07", promptEn: "Describe a useful website", promptZh: "描述一个有用的网站", category: "Object", storyId: "object", storyLabel: "物品：高性能剪辑本", source: "IELTS Liz practice topic" },
  { id: "o08", promptEn: "Talk about a photograph you like", promptZh: "谈谈一张你喜欢的照片", category: "Object", storyId: "object", storyLabel: "物品：高性能剪辑本", source: "IELTS Liz practice topic" },
  { id: "o09", promptEn: "Describe a language you have learned", promptZh: "描述一门你学过的语言", category: "Object", storyId: "object", storyLabel: "物品：高性能剪辑本", source: "IELTS Liz practice topic" },
  { id: "e01", promptEn: "Describe a challenging skill you learned", promptZh: "描述一项你学过的挑战性技能", category: "Experience", storyId: "experience", storyLabel: "经历：记忆法与 AI 自媒体", source: "IDP example topic" },
  { id: "e02", promptEn: "Talk about an achievement you are proud of", promptZh: "谈谈一项让你自豪的成就", category: "Experience", storyId: "experience", storyLabel: "经历：记忆法与 AI 自媒体", source: "IDP example topic" },
  { id: "e03", promptEn: "Describe a time technology helped solve a problem", promptZh: "描述一次科技帮助你解决问题的经历", category: "Experience", storyId: "experience", storyLabel: "经历：记忆法与 AI 自媒体", source: "IDP example topic" },
  { id: "e04", promptEn: "Talk about an activity that helps you focus", promptZh: "谈谈一项帮助你保持专注的活动", category: "Experience", storyId: "experience", storyLabel: "经历：记忆法与 AI 自媒体", source: "IELTS Liz practice topic" },
  { id: "e05", promptEn: "Describe a positive change in your life", promptZh: "描述你生活中的积极改变", category: "Experience", storyId: "experience", storyLabel: "经历：记忆法与 AI 自媒体", source: "IDP example topic" },
  { id: "e06", promptEn: "Talk about a very busy time", promptZh: "谈谈一段非常忙碌的时期", category: "Experience", storyId: "experience", storyLabel: "经历：记忆法与 AI 自媒体", source: "IDP example topic" },
  { id: "e07", promptEn: "Describe advice you received", promptZh: "描述你收到过的一条建议", category: "Experience", storyId: "experience", storyLabel: "经历：记忆法与 AI 自媒体", source: "IELTS Liz practice topic" },
  { id: "e08", promptEn: "Talk about good news you received", promptZh: "谈谈你收到过的好消息", category: "Experience", storyId: "experience", storyLabel: "经历：记忆法与 AI 自媒体", source: "IELTS Liz practice topic" },
  { id: "e09", promptEn: "Describe an unexpected event you enjoyed", promptZh: "描述一次你喜欢的意外事件", category: "Experience", storyId: "experience", storyLabel: "经历：记忆法与 AI 自媒体", source: "IELTS Liz practice topic" },
  { id: "e10", promptEn: "Talk about a hobby or leisure activity", promptZh: "谈谈一项爱好或休闲活动", category: "Experience", storyId: "experience", storyLabel: "经历：记忆法与 AI 自媒体", source: "IDP example topic" },
  { id: "e11", promptEn: "Describe something you do to relax", promptZh: "描述一件你用来放松的事", category: "Experience", storyId: "experience", storyLabel: "经历：记忆法与 AI 自媒体", source: "IELTS Liz practice topic" },
  { id: "l01", promptEn: "Describe a place you visited and enjoyed", promptZh: "描述一个你去过且喜欢的地方", category: "Place", storyId: "place", storyLabel: "地点：郑州黄河风景区", source: "IDP example topic" },
  { id: "l02", promptEn: "Talk about a place with impressive views", promptZh: "谈谈一个风景令人印象深刻的地方", category: "Place", storyId: "place", storyLabel: "地点：郑州黄河风景区", source: "IDP example topic" },
  { id: "l03", promptEn: "Describe a place near water you enjoy", promptZh: "描述一个你喜欢的临水地点", category: "Place", storyId: "place", storyLabel: "地点：郑州黄河风景区", source: "IELTS Liz practice topic" },
  { id: "l04", promptEn: "Talk about a peaceful place", promptZh: "谈谈一个让你感到平静的地方", category: "Place", storyId: "place", storyLabel: "地点：郑州黄河风景区", source: "IELTS Liz practice topic" },
  { id: "l05", promptEn: "Describe a historic site in your country", promptZh: "描述你国家的一处历史地点", category: "Place", storyId: "place", storyLabel: "地点：郑州黄河风景区", source: "IDP example topic" },
  { id: "l06", promptEn: "Talk about a cultural place in your hometown", promptZh: "谈谈家乡的一处文化地点", category: "Place", storyId: "place", storyLabel: "地点：郑州黄河风景区", source: "IDP example topic" },
  { id: "l07", promptEn: "Describe a short trip you enjoyed", promptZh: "描述一次你喜欢的短途旅行", category: "Place", storyId: "place", storyLabel: "地点：郑州黄河风景区", source: "IDP example topic" },
  { id: "l08", promptEn: "Talk about a tourist destination you would recommend", promptZh: "谈谈一个你愿意推荐的旅游目的地", category: "Place", storyId: "place", storyLabel: "地点：郑州黄河风景区", source: "IDP example topic" },
  { id: "l09", promptEn: "Describe a journey that did not go as planned", promptZh: "描述一次没有按计划进行的旅程", category: "Place", storyId: "place", storyLabel: "地点：郑州黄河风景区", source: "IELTS Liz practice topic" },
  { id: "l10", promptEn: "Talk about a place that has animals", promptZh: "谈谈一个有动物的地方", category: "Place", storyId: "place", storyLabel: "地点：郑州黄河风景区", source: "IELTS Liz practice topic" },
];

export const publicPart2Sources = [
  { label: "IDP IELTS · Cue Card Topics & Tips", url: "https://ielts.idp.com/thailand/about/news-and-articles/article-cue-card-topics-for-speaking-test" },
  { label: "IELTS Liz · Part 2 Topics & Questions", url: "https://ieltsliz.com/ielts-speaking-part-2-topics/" },
  { label: "British Council · Free Speaking Practice", url: "https://takeielts.britishcouncil.org/prepare/ielts-free-practice-mock-tests/academic/speaking" },
];
