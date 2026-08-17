# 专属口语 AI：接入选项与边界（2026-08-17）

## 核验结论

“开源模型”与“免费、可直接嵌入网站的在线 AI”不是同一件事。DeepSeek 官方 API 需要申请 API Key；其在线调用不是零配置的完全免费服务。Gemini Developer API 提供免费层，但免费层模型访问与速率有限，且官方定价页面说明免费层提交内容会用于改进产品；付费层则不用于改进产品。Gemini 限流以 RPM、TPM、RPD 等维度按项目计算，具体额度以 AI Studio 账户为准。

## 两种可行路线

| 方案 | 用户体验 | 个人化与隐私 | 成本与维护 |
| --- | --- | --- | --- |
| 免费层 API + 私密服务端代理 | 网站中直接“抽题—母题匹配—生成回答”；可在数据库保存个人画像、母题和练习历史 | API Key 不暴露在浏览器；免费层通常有配额与内容使用条款，必须接受对应隐私边界 | 起步成本低，但会受配额与服务条款变化影响 |
| 自托管开源模型 | 个人画像和练习记录可完全自主控制；可离线或私有运行 | 最强隐私，但需要独立托管、GPU/算力、模型运维和安全维护 | 并非免费运行；硬件或云主机成本、部署复杂度更高 |

## 项目实现前提

当前项目是纯前端静态网站，不能安全保存 API Key，也无法长期保存个人水平、口语反馈和训练历史。要实现“AI 了解我、结合我的母题串题、持续给出个性化回答”，需要升级为带服务端、数据库和用户数据存储的应用。AI 调用必须从服务端发起，不能放在浏览器前端。

## 近期题库配合方式

近期公开题目将以“题目索引 + 时间窗口 + 来源链接 + 你的母题适配”保存。AI 每次训练可读取：题目、相关 Part 2 母题、Part 1 人设、Part 3 逻辑链、历史弱项，生成一份个性化示范回答和追问。

## 官方来源

1. DeepSeek API Docs, [Your First API Call / Models](https://api-docs.deepseek.com/quick_start/pricing)
2. Google AI for Developers, [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing)
3. Google AI for Developers, [Rate limits](https://ai.google.dev/gemini-api/docs/rate-limits)
