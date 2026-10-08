"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  registerEventNoindexSlugs,
  shouldLoadAdSense,
} from "lib/adsensePaths";
import { ADSENSE_CLIENT_ID } from "lib/trackingConfig";

const NO_EVENT_SLUGS = [];

const ADSENSE_SRC = ADSENSE_CLIENT_ID
  ? `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`
  : "";

function adsenseScriptNodes() {
  return document.querySelectorAll(
    'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
  );
}

function pageTurnsAdsOff() {
  return document.documentElement.dataset.adsense === "off";
}

function removeAdSense() {
  adsenseScriptNodes().forEach((node) => node.remove());
  document
    .querySelectorAll("ins.adsbygoogle, .google-auto-placed")
    .forEach((node) => node.remove());
}

/**
 * Standard AdSense loader. Consent Mode defaults are rendered before this
 * component in SiteHead. Excluded paths and the 404 view omit the tag.
 */
export default function AdSenseScript({ eventNoindexSlugs = NO_EVENT_SLUGS }) {
  registerEventNoindexSlugs(eventNoindexSlugs);
  const pathname = usePathname();
  const pathAllows = Boolean(ADSENSE_SRC) && shouldLoadAdSense(pathname);
  const [pageBlocked, setPageBlocked] = useState(false);
  const allow = pathAllows && !pageBlocked;

  useEffect(() => {
    const sync = () => setPageBlocked(pageTurnsAdsOff());
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-adsense"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("tf-ads-on", allow);
    if (!allow) {
      removeAdSense();
      return undefined;
    }
    if (adsenseScriptNodes().length > 0) return undefined;
    const script = document.createElement("script");
    script.async = true;
    script.src = ADSENSE_SRC;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
    return undefined;
  }, [allow]);

  if (!allow) return null;

  return (
    <script
      async
      src={ADSENSE_SRC}
      crossOrigin="anonymous"
      // A load handler keeps React from hoisting this tag above the
      // consent-default inline script. The handler itself is a no-op.
      onLoad={() => {}}
    />
  );
}
