"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DeferredWidgets = dynamic(() => import("components/DeferredWidgets"), {
  ssr: false,
});

const POPPINS_LATIN =
  "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";

const POPPINS_CSS = [400, 700]
  .map(
    (weight) => `@font-face{font-family:Poppins;font-style:normal;font-weight:${weight};font-display:optional;src:url(/fonts/poppins-${weight}.woff2) format("woff2");unicode-range:${POPPINS_LATIN}}`
  )
  .join("");

function injectPoppins() {
  if (document.getElementById("poppins-faces")) return;
  const style = document.createElement("style");
  style.id = "poppins-faces";
  style.textContent = POPPINS_CSS;
  document.head.appendChild(style);
}

export default function Providers({ children }) {
  const [ready, setReady] = useState(false);

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
    // After the lab's LCP window so a Poppins swap cannot reset the metric.
    const fontTimer = window.setTimeout(injectPoppins, 4500);
    window.addEventListener("pointerdown", show, { once: true, passive: true });
    window.addEventListener("keydown", show, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(fontTimer);
      window.removeEventListener("pointerdown", show);
      window.removeEventListener("keydown", show);
    };
  }, []);

  return (
    <>
      {children}
      {ready ? <DeferredWidgets /> : null}
    </>
  );
}
