"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  LEAD_POPUP_DELAY_MS,
  canCountLeadPopupTime,
  isLeadPopupBlocked,
  isLeadPopupEligiblePath,
} from "lib/leadPopupGate";

/**
 * One clock for the whole visit. Client navigations do not reset it.
 * The dialog chunk stays unloaded until this returns true.
 */
let blocked = null;
let triggered = false;
const clock = {
  primed: false,
  elapsed: 0,
  runningSince: null,
};

export function useLeadPopupTrigger() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const eligible = isLeadPopupEligiblePath(pathname);

  useEffect(() => {
    if (!eligible) {
      setReady(false);
      return undefined;
    }
    if (blocked === null) blocked = isLeadPopupBlocked();
    if (blocked) return undefined;
    if (triggered) {
      setReady(true);
      return undefined;
    }

    if (!clock.primed) {
      clock.primed = true;
      // Time already spent on this document counts when the first paint
      // is an eligible content page (cookie banner closed, not a 404).
      if (canCountLeadPopupTime() && typeof performance !== "undefined") {
        const already = performance.now();
        clock.elapsed = already;
        clock.runningSince = already;
      }
    }

    const tick = () => {
      if (triggered) return;
      if (!canCountLeadPopupTime()) {
        if (clock.runningSince != null) {
          clock.elapsed += performance.now() - clock.runningSince;
          clock.runningSince = null;
        }
        return;
      }
      if (clock.runningSince == null) clock.runningSince = performance.now();
      const total = clock.elapsed + (performance.now() - clock.runningSince);
      if (total >= LEAD_POPUP_DELAY_MS) {
        triggered = true;
        setReady(true);
      }
    };

    tick();
    const id = window.setInterval(tick, 250);
    return () => window.clearInterval(id);
  }, [eligible]);

  return ready && eligible;
}
