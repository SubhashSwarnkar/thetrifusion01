"use client";

import { useEffect } from "react";

const TAWK_SRC = process.env.NEXT_PUBLIC_TAWK_SRC || "";

function loadTawk() {
  if (!TAWK_SRC || TAWK_SRC.includes("YOUR_TAWK")) return;
  if (document.getElementById("tawk-script")) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = TAWK_SRC;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");
  script.id = "tawk-script";
  document.body.appendChild(script);
}

/**
 * Defer third-party chat until idle or first user interaction.
 * Skips load when Tawk ID is not configured.
 */
export default function LiveChat() {
  useEffect(() => {
    if (!TAWK_SRC || TAWK_SRC.includes("YOUR_TAWK")) return undefined;

    let loaded = false;
    const run = () => {
      if (loaded) return;
      loaded = true;
      loadTawk();
      cleanup();
    };

    const onInteract = () => run();
    const events = ["pointerdown", "keydown", "scroll", "touchstart"];
    events.forEach((event) =>
      window.addEventListener(event, onInteract, { once: true, passive: true })
    );

    let idleId;
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(run, { timeout: 8000 });
    } else {
      idleId = window.setTimeout(run, 6000);
    }

    function cleanup() {
      events.forEach((event) =>
        window.removeEventListener(event, onInteract)
      );
      if ("requestIdleCallback" in window && typeof idleId === "number") {
        window.cancelIdleCallback?.(idleId);
      } else if (idleId) {
        window.clearTimeout(idleId);
      }
    }

    return cleanup;
  }, []);

  return null;
}
