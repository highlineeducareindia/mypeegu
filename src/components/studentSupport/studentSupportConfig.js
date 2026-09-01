/** Frontend-only PIVA chat settings (no Gemini calls). */
export const INACTIVITY_PROMPT_MS = 45000;

export function inactivityMessageForAge(age) {
  const n = Number(age);
  if (Number.isFinite(n) && n <= 10) return "Still with me? 😊";
  if (Number.isFinite(n) && n >= 18) {
    return "Still with me? We can take this one step at a time.";
  }
  return "Still with me? 😊";
}
