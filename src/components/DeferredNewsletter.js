"use client";

import { useEffect, useState } from "react";

/**
 * Newsletter pulls in toastify. Load it after idle so it is not on the LCP path.
 * The blue placeholder keeps the footer from jumping when the form arrives.
 */
export default function DeferredNewsletter() {
  const [Newsletter, setNewsletter] = useState(null);

  useEffect(() => {
    let cancel = false;
    const load = () => {
      import(/* webpackPrefetch: false, webpackPreload: false */ "components/Newsletter").then(
        (mod) => {
          if (!cancel) setNewsletter(() => mod.default);
        }
      );
    };
    const id = window.setTimeout(load, 8000);
    const onIntent = () => {
      window.clearTimeout(id);
      load();
    };
    window.addEventListener("pointerdown", onIntent, { once: true, passive: true });
    window.addEventListener("keydown", onIntent, { once: true });
    return () => {
      cancel = true;
      window.clearTimeout(id);
      window.removeEventListener("pointerdown", onIntent);
      window.removeEventListener("keydown", onIntent);
    };
  }, []);

  if (!Newsletter) {
    return <div className="min-h-[28rem] bg-theme-blue" aria-hidden="true" />;
  }

  return <Newsletter />;
}
