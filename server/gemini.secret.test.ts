import { describe, expect, it } from "vitest";

describe("Gemini API configuration", () => {
  it("accepts the configured server-side API key", async () => {
    const apiKey = process.env.GEMINI_API_KEY;
    expect(apiKey, "GEMINI_API_KEY must be configured for the speaking trainer").toBeTruthy();

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey!)}`,
    );

    expect(response.ok, `Gemini model-list request failed with ${response.status}`).toBe(true);
    const payload = (await response.json()) as { models?: unknown[] };
    expect(Array.isArray(payload.models)).toBe(true);
  }, 20_000);
});
