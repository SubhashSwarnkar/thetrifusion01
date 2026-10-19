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

    let idleId = 0;
    const insert = () => {
      if (adsenseScriptNodes().length > 0) return;
      const script = document.createElement("script");
      script.async = true;
      script.src = ADSENSE_SRC;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    };
    const timer = window.setTimeout(insert, 3500);
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(insert, { timeout: 3500 });
    }
    return () => {
      window.clearTimeout(timer);
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, [allow]);

  return null;
}
