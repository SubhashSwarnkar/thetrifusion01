"use client";

import { useEffect } from "react";
import { GA_MEASUREMENT_ID } from "lib/gtagConsent";
import {
  ADSENSE_CLIENT_ID,
  GOOGLE_ADS_ID,
  GTM_ID,
  META_PIXEL_ID,
} from "lib/trackingConfig";

/**
 * Load AdSense, GTM, GA and Meta after first input or a quiet delay.
 * The AdSense URL stays in the document head (see layout.js) for review.
 * Consent defaults are installed by a tiny inline script before this runs.
 */
const DELAY_MS = 8000;

function appendScript(src, attrs = {}) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  Object.entries(attrs).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });
  document.head.appendChild(script);
}

function loadThirdParties() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  if (ADSENSE_CLIENT_ID) {
    appendScript(
      `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`,
      { crossorigin: "anonymous" }
    );
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

  if (META_PIXEL_ID && !window.fbq) {
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
}

export default function GoogleAnalytics() {
  useEffect(() => {
    let ran = false;
    let timer = 0;

    const run = () => {
      if (ran) return;
      ran = true;
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", run);
      window.removeEventListener("keydown", run);
      window.removeEventListener("scroll", run);
      loadThirdParties();
    };

    timer = window.setTimeout(run, DELAY_MS);
    window.addEventListener("pointerdown", run, { once: true, passive: true });
    window.addEventListener("keydown", run, { once: true });
    window.addEventListener("scroll", run, { once: true, passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", run);
      window.removeEventListener("keydown", run);
      window.removeEventListener("scroll", run);
    };
  }, []);

  return null;
}
