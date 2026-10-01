"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { shouldLoadAdSense } from "lib/adsensePaths";
import { ADSENSE_CLIENT_ID } from "lib/trackingConfig";

/**
 * Manual AdSense display unit. Renders only when client + slot are set.
 * Place only on blog article pages.
 */
export default function AdSenseAd({
  slot,
  format = "auto",
  layout,
  className = "",
  label = "Advertisement",
}) {
  const pathname = usePathname();
  const allowed =
    shouldLoadAdSense(pathname) &&
    (typeof document === "undefined" ||
      document.documentElement.dataset.adsense !== "off");
  const pushed = useRef(false);

  useEffect(() => {
    if (!allowed || !ADSENSE_CLIENT_ID || !slot || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* AdSense may throw if already filled during soft navigations */
    }
  }, [allowed, slot]);

  if (!allowed || !ADSENSE_CLIENT_ID || !slot) return null;

  return (
    <aside className={`adsense-unit ${className}`.trim()} aria-label={label}>
      <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-gray-400">
        {label}
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: 90, width: "100%" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        {...(layout ? { "data-ad-layout": layout } : {})}
      />
    </aside>
  );
}
