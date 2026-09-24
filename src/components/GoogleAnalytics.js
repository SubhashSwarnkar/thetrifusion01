"use client";

import { useEffect } from "react";
import { GA_MEASUREMENT_ID } from "lib/gtagConsent";
import { GOOGLE_ADS_ID, GTM_ID, META_PIXEL_ID } from "lib/trackingConfig";

/**
 * GA4 and GTM start on the window load event, then requestIdleCallback,
 * so a full pageview is recorded without competing with LCP.
 * Meta Pixel stays on first interaction or an 8s fallback.
 * AdSense is scheduled from layout.js so every visitor gets it within a few seconds.
 */
const META_DELAY_MS = 8000;
const IDLE_TIMEOUT_MS = 1500;

function appendScript(src, attrs = {}) {
  const existing = document.querySelector(`script[src="${src}"]`);
  if (existing && existing.type !== "text/plain") return;
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  Object.entries(attrs).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });
  document.head.appendChild(script);
}

function loadAnalytics() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  if (GTM_ID) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    appendScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
  }

  const gtagId = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;
  if (gtagId) {
    appendScript(`https://www.googletagmanager.com/gtag/js?id=${gtagId}`);
    window.gtag("js", new Date());
    if (GA_MEASUREMENT_ID) {
      window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: true });
    }
    if (GOOGLE_ADS_ID) {
      window.gtag("config", GOOGLE_ADS_ID);
    }
  }
}

function loadMetaPixel() {
  if (!META_PIXEL_ID || window.fbq) return;
  const fbq = function () {
    if (fbq.callMethod) {
      fbq.callMethod.apply(fbq, arguments);
    } else {
      fbq.queue.push(arguments);
    }
  };
  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  appendScript("https://connect.facebook.net/en_US/fbevents.js");
  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

export default function GoogleAnalytics() {
  useEffect(() => {
    let analyticsStarted = false;
    let loadListener = null;
    const startAnalytics = () => {
      if (analyticsStarted) return;
      analyticsStarted = true;
      loadAnalytics();
    };
    const armAnalytics = () => {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(startAnalytics, { timeout: IDLE_TIMEOUT_MS });
      } else {
        window.setTimeout(startAnalytics, 50);
      }
    };
    if (document.readyState === "complete") armAnalytics();
    else {
      loadListener = armAnalytics;
      window.addEventListener("load", loadListener, { once: true });
    }

    let metaStarted = false;
    let metaTimer = 0;
    const startMeta = () => {
      if (metaStarted) return;
      metaStarted = true;
      window.clearTimeout(metaTimer);
      window.removeEventListener("pointerdown", startMeta);
      window.removeEventListener("keydown", startMeta);
      window.removeEventListener("scroll", startMeta);
      loadMetaPixel();
    };
    metaTimer = window.setTimeout(startMeta, META_DELAY_MS);
    window.addEventListener("pointerdown", startMeta, { once: true, passive: true });
    window.addEventListener("keydown", startMeta, { once: true });
    window.addEventListener("scroll", startMeta, { once: true, passive: true });

    return () => {
      if (loadListener) window.removeEventListener("load", loadListener);
      window.removeEventListener("pointerdown", startMeta);
      window.removeEventListener("keydown", startMeta);
      window.removeEventListener("scroll", startMeta);
      window.clearTimeout(metaTimer);
    };
  }, []);

  return null;
}
