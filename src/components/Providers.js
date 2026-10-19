"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useLeadPopupTrigger } from "components/leadPopupTrigger";

const DeferredWidgets = dynamic(() => import("components/DeferredWidgets"), {
  ssr: false,
});

const LeadPopup = dynamic(() => import("components/LeadPopup"), {
  ssr: false,
});

export default function Providers({ children }) {
  const [ready, setReady] = useState(false);
  const showLeadPopup = useLeadPopupTrigger();

  useEffect(() => {
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", show);
      window.removeEventListener("keydown", show);
      setReady(true);
    };
    const timer = window.setTimeout(show, 4500);
    window.addEventListener("pointerdown", show, { once: true, passive: true });
    window.addEventListener("keydown", show, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", show);
      window.removeEventListener("keydown", show);
    };
  }, []);

  return (
    <>
      {children}
      {ready ? <DeferredWidgets /> : null}
      {showLeadPopup ? <LeadPopup /> : null}
    </>
  );
}
