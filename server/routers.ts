import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { createSpeakingTrainingRun, getSpeakingProfile, listSpeakingTrainingRuns, upsertSpeakingProfile } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { invokeLLM } from "./_core/llm";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { buildCoachSystemPrompt, getCoachText, personalStoryContext, recentPublicPracticePrompts, type StoryId } from "./speakingCoach";

const profileInput = z.object({
  displayName: z.string().trim().min(1).max(96).default("刘涵"),
  currentBand: z.string().trim().max(16).optional(),
  targetBand: z.string().trim().max(16).default("7.0"),
  strengths: z.string().trim().max(2000).optional(),
  weakAreas: z.string().trim().max(2000).optional(),
  interests: z.string().trim().max(2000).optional(),
  personalContext: z.string().trim().max(4000).optional(),
  preferredFeedback: z.enum(["gentle", "balanced", "direct"]).default("balanced"),
});

const storyIdSchema = z.enum(["person", "object", "experience", "place"]);

function cleanOptional(value?: string) {
  return value && value.length > 0 ? value : null;
}

function coachError(message: string) {
  return new TRPCError({ code: "PRECONDITION_FAILED", message });
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  speakingCoach: router({
    prompts: publicProcedure.query(() => recentPublicPracticePrompts),
    storyCards: publicProcedure.query(() => personalStoryContext),
    profile: protectedProcedure.query(({ ctx }) => getSpeakingProfile(ctx.user.id)),
    saveProfile: protectedProcedure.input(profileInput).mutation(async ({ ctx, input }) => {
      return upsertSpeakingProfile(ctx.user.id, {
        displayName: input.displayName,
        currentBand: cleanOptional(input.currentBand),
        targetBand: input.targetBand,
        strengths: cleanOptional(input.strengths),
        weakAreas: cleanOptional(input.weakAreas),
        interests: cleanOptional(input.interests),
        personalContext: cleanOptional(input.personalContext),
        preferredFeedback: input.preferredFeedback,
      });
    }),
    history: protectedProcedure.query(({ ctx }) => listSpeakingTrainingRuns(ctx.user.id)),
    generate: protectedProcedure.input(z.object({
      promptId: z.string().min(1).max(96),
      learnerDraft: z.string().trim().max(6000).optional(),
      storyId: storyIdSchema.optional(),
    })).mutation(async ({ ctx, input }) => {
      const prompt = recentPublicPracticePrompts.find(item => item.id === input.promptId);
      if (!prompt) throw new TRPCError({ code: "NOT_FOUND", message: "练习题未找到，请从近期题目索引中重新选择。" });

      const profile = await getSpeakingProfile(ctx.user.id);
      const storyId = (input.storyId ?? prompt.storyId) as StoryId;

      const systemPrompt = buildCoachSystemPrompt({ profile, storyId, speakingPart: prompt.part });
      const userPrompt = `Practice prompt (${prompt.part}): ${prompt.title} / ${prompt.zh}\n\nLearner draft (optional): ${input.learnerDraft || "No draft yet. Create a first personalized answer."}\n\nUse the selected story card: ${personalStoryContext[storyId].title}.`;

      try {
        const completion = await invokeLLM({
          model: "gpt-5-mini",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
        });
        const answer = getCoachText(completion.choices[0]?.message.content ?? "");
        if (!answer) throw new Error("Built-in model returned an empty response");

        await createSpeakingTrainingRun({ userId: ctx.user.id, promptId: prompt.id, promptTitle: prompt.title, speakingPart: prompt.part, sourceWindow: prompt.sourceWindow, linkedStoryId: storyId, learnerDraft: cleanOptional(input.learnerDraft), aiAnswer: answer, status: "completed" });
        return { answer, prompt, story: personalStoryContext[storyId] };
      } catch (error) {
        console.error("[speakingCoach.generate] Built-in model request failed", error);
        await createSpeakingTrainingRun({ userId: ctx.user.id, promptId: prompt.id, promptTitle: prompt.title, speakingPart: prompt.part, sourceWindow: prompt.sourceWindow, linkedStoryId: storyId, learnerDraft: cleanOptional(input.learnerDraft), status: "failed" });
        throw coachError("训练助手暂时无法生成回答，请稍后重试。");
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
