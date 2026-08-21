import { AIChatBox, type Message } from "@/components/AIChatBox";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { startLogin } from "@/const";
import { ArrowLeft, BadgeCheck, BrainCircuit, Check, Loader2, LockKeyhole, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useMemo, useState } from "react";

type FeedbackTone = "gentle" | "balanced" | "direct";

export default function SpeakingTrainer() {
  const { isAuthenticated, loading } = useAuth();
  const promptsQuery = trpc.speakingCoach.prompts.useQuery();
  const storiesQuery = trpc.speakingCoach.storyCards.useQuery();
  const profileQuery = trpc.speakingCoach.profile.useQuery(undefined, { enabled: isAuthenticated });
  const profileSave = trpc.speakingCoach.saveProfile.useMutation({ onSuccess: () => profileQuery.refetch() });
  const coachMutation = trpc.speakingCoach.generate.useMutation();
  const [selectedPromptId, setSelectedPromptId] = useState("");
  const [selectedStoryId, setSelectedStoryId] = useState<"person" | "object" | "experience" | "place">("person");
  const [messages, setMessages] = useState<Message[]>([]);
  const [profile, setProfile] = useState({ currentBand: "", targetBand: "7.0", strengths: "", weakAreas: "", interests: "", personalContext: "", preferredFeedback: "balanced" as FeedbackTone });

  const prompts = promptsQuery.data ?? [];
  const selectedPrompt = useMemo(() => prompts.find(prompt => prompt.id === selectedPromptId) ?? prompts[0], [prompts, selectedPromptId]);

  useEffect(() => {
    if (prompts.length && !selectedPromptId) setSelectedPromptId(prompts[0].id);
  }, [prompts, selectedPromptId]);

  useEffect(() => {
    if (!selectedPrompt) return;
    setSelectedStoryId(selectedPrompt.storyId);
  }, [selectedPrompt?.id]);

  useEffect(() => {
    const value = profileQuery.data;
    if (!value) return;
    setProfile({
      currentBand: value.currentBand ?? "",
      targetBand: value.targetBand ?? "7.0",
      strengths: value.strengths ?? "",
      weakAreas: value.weakAreas ?? "",
      interests: value.interests ?? "",
      personalContext: value.personalContext ?? "",
      preferredFeedback: (value.preferredFeedback as FeedbackTone) ?? "balanced",
    });
  }, [profileQuery.data]);

  const saveProfile = () => profileSave.mutate(profile);
  const sendMessage = (content: string) => {
    if (!selectedPrompt) return;
    const userMessage: Message = { role: "user", content };
    setMessages(previous => [...previous, userMessage]);
    coachMutation.mutate({ promptId: selectedPrompt.id, learnerDraft: content, storyId: selectedStoryId }, {
      onSuccess: result => setMessages(previous => [...previous, { role: "assistant", content: result.answer }]),
      onError: error => setMessages(previous => [...previous, { role: "assistant", content: `**训练暂不可用**\n\n${error.message}` }]),
    });
  };

  if (loading || promptsQuery.isLoading) return <div className="trainer-loading"><Loader2 size={22} /> 正在准备刘涵的口语训练空间…</div>;

  return (
    <main className="trainer-page">
      <header className="trainer-topbar">
        <Link href="/" className="trainer-back"><ArrowLeft size={16} /> 返回模板库</Link>
        <div className="trainer-brand"><span>HL</span><b>刘涵的口语训练</b><small>HANKLAU SPEAKING LAB</small></div>
        {isAuthenticated ? <span className="trainer-status"><BadgeCheck size={15} /> 个人档案已连接</span> : <button onClick={startLogin} className="trainer-login"><LockKeyhole size={14} /> 登录保存训练记录</button>}
      </header>

      <section className="trainer-hero">
        <div><p className="trainer-eyebrow"><Sparkles size={14} /> PRIVATE PRACTICE ROUTE</p><h1>把近期题目<br /><em>串进你的故事。</em></h1><p>选择题目与母题后，让训练助手以你的 Part 1 人设、Part 2 母题、Part 3 逻辑链为上下文，生成可继续修改的口语答案。</p></div>
        <div className="trainer-principles"><span>01 / 真实个人素材</span><span>02 / 母题优先匹配</span><span>03 / 可编辑再练习</span></div>
      </section>

      <section className="trainer-layout">
        <aside className="trainer-sidebar">
          <div className="trainer-panel-heading"><span>01</span><div><b>近期练习题</b><small>MAY–AUG 2026 · PUBLIC INDEX</small></div></div>
          <div className="trainer-prompt-list">
            {prompts.map(prompt => <button key={prompt.id} className={prompt.id === selectedPrompt?.id ? "is-active" : ""} onClick={() => setSelectedPromptId(prompt.id)}><span>{prompt.part}</span><b>{prompt.zh}</b><small>{prompt.title}</small></button>)}
          </div>
          <p className="trainer-source-note">题目仅作为近期公开练习索引使用；不同地区和考期可能不同。</p>
        </aside>

        <section className="trainer-workspace">
          <div className="trainer-workspace-head"><div><span>02 / 今日串题</span><h2>{selectedPrompt?.zh}</h2><p>{selectedPrompt?.title}</p></div><small>{selectedPrompt?.sourceWindow}</small></div>
          <div className="story-selector">
            <div><b>选择你的母题</b><small>AI 将优先使用这张卡的真实细节</small></div>
            <div className="story-grid">{Object.entries(storiesQuery.data ?? {}).map(([id, story]) => <button key={id} onClick={() => setSelectedStoryId(id as typeof selectedStoryId)} className={id === selectedStoryId ? "selected" : ""}><span>{story.title.split(" /")[0]}</span><small>{story.useFor.split("、")[0]}</small></button>)}</div>
          </div>

          {!isAuthenticated ? <div className="trainer-auth-card"><BrainCircuit size={22} /><div><b>登录后开启专属训练</b><p>保存你的口语水平、弱项和练习记录；AI 才能持续按刘涵的母题和学习状态给出反馈。</p></div><button onClick={startLogin}>现在登录</button></div> : <>
            <div className="profile-card"><div><span>03 / 你的口语画像</span><b>让反馈更贴合你的现状</b></div><div className="profile-fields"><label>当前分数<input value={profile.currentBand} onChange={event => setProfile({ ...profile, currentBand: event.target.value })} placeholder="例如 6.0" /></label><label>目标分数<input value={profile.targetBand} onChange={event => setProfile({ ...profile, targetBand: event.target.value })} /></label><label>擅长什么<textarea value={profile.strengths} onChange={event => setProfile({ ...profile, strengths: event.target.value })} placeholder="例如：故事细节、发音、科技类表达" /></label><label>最需改进<textarea value={profile.weakAreas} onChange={event => setProfile({ ...profile, weakAreas: event.target.value })} placeholder="例如：逻辑展开、时态、卡顿" /></label></div><button className="profile-save" onClick={saveProfile} disabled={profileSave.isPending}>{profileSave.isPending ? <Loader2 size={14} /> : <Check size={14} />} 保存画像</button></div>
            <AIChatBox messages={messages} onSendMessage={sendMessage} isLoading={coachMutation.isPending} height="560px" placeholder="先写下你会怎么回答，或直接说“请为我生成第一版回答”…" emptyStateMessage="选择题目与母题后，开始今天的串题训练。" suggestedPrompts={["请为我生成第一版回答", "帮我把答案控制在 90 秒", "用我的母题给我一个更自然的开头"]} className="trainer-chat" />
          </>}
        </section>
      </section>
    </main>
  );
}
