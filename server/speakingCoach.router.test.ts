import { beforeEach, describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";

vi.mock("./db", () => ({
  createSpeakingTrainingRun: vi.fn(),
  getSpeakingProfile: vi.fn(),
  listSpeakingTrainingRuns: vi.fn(),
  upsertSpeakingProfile: vi.fn(),
}));

vi.mock("./_core/llm", () => ({
  invokeLLM: vi.fn(),
}));

import { invokeLLM } from "./_core/llm";
import { createSpeakingTrainingRun, getSpeakingProfile } from "./db";
import { appRouter } from "./routers";

const mockInvokeLLM = vi.mocked(invokeLLM);
const mockCreateRun = vi.mocked(createSpeakingTrainingRun);
const mockGetProfile = vi.mocked(getSpeakingProfile);

function createAuthContext(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "speaking-coach-test-user",
      email: "coach-test@example.com",
      name: "Coach Test",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("speakingCoach.generate", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockGetProfile.mockResolvedValue(undefined);
    mockCreateRun.mockResolvedValue(undefined);
  });

  it("returns the built-in model answer and records a completed training run", async () => {
    mockInvokeLLM.mockResolvedValue({
      choices: [{ index: 0, message: { role: "assistant", content: "**Recommended route / 推荐路径**\nUse the mentor story." }, finish_reason: "stop" }],
    } as Awaited<ReturnType<typeof invokeLLM>>);

    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.speakingCoach.generate({
      promptId: "may-aug-2026-creative-person",
      storyId: "person",
    });

    expect(result.answer).toContain("Use the mentor story.");
    expect(mockInvokeLLM).toHaveBeenCalledWith(expect.objectContaining({
      model: "gpt-5-mini",
      messages: expect.arrayContaining([
        expect.objectContaining({ role: "system" }),
        expect.objectContaining({ role: "user" }),
      ]),
    }));
    expect(mockCreateRun).toHaveBeenCalledWith(expect.objectContaining({
      userId: 1,
      promptId: "may-aug-2026-creative-person",
      status: "completed",
      aiAnswer: expect.stringContaining("Use the mentor story."),
    }));
  });

  it("returns a friendly error and records a failed run when the model is unavailable", async () => {
    mockInvokeLLM.mockRejectedValue(new Error("Temporary provider failure"));

    const caller = appRouter.createCaller(createAuthContext());
    await expect(caller.speakingCoach.generate({
      promptId: "may-aug-2026-creative-person",
      storyId: "person",
    })).rejects.toThrow("训练助手暂时无法生成回答，请稍后重试。");

    expect(mockCreateRun).toHaveBeenCalledWith(expect.objectContaining({
      userId: 1,
      promptId: "may-aug-2026-creative-person",
      status: "failed",
    }));
  });
});
