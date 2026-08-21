import { describe, expect, it } from "vitest";

import { buildCoachSystemPrompt, getCoachText } from "./speakingCoach";

describe("Built-in speaking coach integration", () => {
  it("preserves the bilingual coaching contract without an external Gemini key", () => {
    const prompt = buildCoachSystemPrompt({ speakingPart: "Part 2", storyId: "person" });

    expect(prompt).toContain("Recommended route / 推荐路径");
    expect(prompt).toContain("Band 7-style answer");
    expect(prompt).toContain("科隆多老师");
    expect(prompt).not.toContain("GEMINI_API_KEY");
  });

  it("extracts visible text from plain and multipart model responses", () => {
    expect(getCoachText("  A natural spoken answer.  ")).toBe("A natural spoken answer.");
    expect(getCoachText([
      { type: "text", text: "First paragraph." },
      { type: "image_url" },
      { type: "text", text: "Second paragraph." },
    ])).toBe("First paragraph.\nSecond paragraph.");
  });
});
