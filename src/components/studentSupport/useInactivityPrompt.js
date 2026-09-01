import { useCallback, useEffect, useRef, useState } from "react";
import { INACTIVITY_PROMPT_MS, inactivityMessageForAge } from "./studentSupportConfig";

export { inactivityMessageForAge };

/**
 * Shows a gentle nudge after PIVA replies and the student is idle.
 * Timer starts only when loading transitions true → false (PIVA just finished).
 * No API calls — frontend only.
 */
export function useInactivityPrompt({ active, loading, age }) {
  const [prompt, setPrompt] = useState("");
  const timerRef = useRef(null);
  const shownRef = useRef(false);
  const prevLoadingRef = useRef(false);
  const waitingForStudentRef = useRef(false);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const dismiss = useCallback(() => {
    clearTimer();
    setPrompt("");
    shownRef.current = false;
    waitingForStudentRef.current = false;
  }, [clearTimer]);

  const schedulePrompt = useCallback(() => {
    clearTimer();
    shownRef.current = false;
    waitingForStudentRef.current = true;
    timerRef.current = setTimeout(() => {
      if (waitingForStudentRef.current && !shownRef.current) {
        shownRef.current = true;
        setPrompt(inactivityMessageForAge(age));
      }
    }, INACTIVITY_PROMPT_MS);
  }, [age, clearTimer]);

  useEffect(() => {
    if (!active) {
      dismiss();
      prevLoadingRef.current = false;
      return undefined;
    }

    if (loading) {
      clearTimer();
      setPrompt("");
      prevLoadingRef.current = true;
      return undefined;
    }

    // PIVA just finished responding — start waiting for student
    if (prevLoadingRef.current && !loading) {
      schedulePrompt();
    }
    prevLoadingRef.current = loading;

    return clearTimer;
  }, [active, loading, age, dismiss, schedulePrompt, clearTimer]);

  return { prompt, dismiss };
}
