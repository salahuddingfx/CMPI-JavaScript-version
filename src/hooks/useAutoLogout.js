import { useEffect, useRef, useCallback } from "react";

export function useAutoLogout({ timeoutMinutes, onLogout, warningMinutes = 5 }) {
  const timeoutMs = timeoutMinutes * 60 * 1000;
  const warningMs = warningMinutes * 60 * 1000;
  const timerRef = useRef(null);
  const warningTimerRef = useRef(null);
  const lastActivityRef = useRef(Date.now());
  const warnedRef = useRef(false);

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
    timerRef.current = null;
    warningTimerRef.current = null;
  }, []);

  const triggerLogout = useCallback(() => {
    clearTimers();
    // Clear all auth data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("cmpi_user");
    onLogout();
  }, [clearTimers, onLogout]);

  const resetTimer = useCallback(() => {
    lastActivityRef.current = Date.now();
    warnedRef.current = false;
    clearTimers();

    // Set warning timer
    if (warningMinutes > 0) {
      warningTimerRef.current = setTimeout(() => {
        const remaining = timeoutMs - (Date.now() - lastActivityRef.current);
        if (remaining <= 0) {
          triggerLogout();
          return;
        }
        // Dispatch custom event for UI to show warning
        window.dispatchEvent(
          new CustomEvent("session-warning", {
            detail: { remainingMs: remaining, timeoutMinutes },
          })
        );
      }, timeoutMs - warningMs);
    }

    // Set logout timer
    timerRef.current = setTimeout(() => {
      triggerLogout();
    }, timeoutMs);
  }, [
    clearTimers,
    triggerLogout,
    timeoutMs,
    warningMs,
    timeoutMinutes,
    warningMinutes,
  ]);

  useEffect(() => {
    const activityEvents = [
      "mousedown",
      "keydown",
      "scroll",
      "touchstart",
      "mousemove",
    ];
    const handler = () => {
      // Only reset if at least 5 seconds since last activity (debounce)
      if (Date.now() - lastActivityRef.current > 5000) {
        resetTimer();
      }
    };

    activityEvents.forEach((event) =>
      document.addEventListener(event, handler, { passive: true })
    );
    resetTimer();

    return () => {
      activityEvents.forEach((event) =>
        document.removeEventListener(event, handler)
      );
      clearTimers();
    };
  }, [resetTimer, clearTimers]);

  return { triggerLogout, resetTimer };
}
