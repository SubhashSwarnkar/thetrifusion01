"use client";

import { useEffect } from "react";
import AdSenseAd from "components/AdSenseAd";
import {
  ADSENSE_BLOG_AUTO_ADS,
  ADSENSE_CLIENT_ID,
  ADSENSE_SLOT_BLOG_BOTTOM,
  ADSENSE_SLOT_BLOG_SIDEBAR,
  ADSENSE_SLOT_BLOG_TOP,
} from "lib/trackingConfig";

/**
 * Enables AdSense Auto ads for this blog article only (not site-wide).
 * Also renders optional manual units when slot IDs are configured.
 */
export function BlogAdSenseAuto() {
  useEffect(() => {
    if (!ADSENSE_CLIENT_ID || !ADSENSE_BLOG_AUTO_ADS) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: ADSENSE_CLIENT_ID,
        enable_page_level_ads: true,
        overlays: { bottom: true },
      });
    } catch {
      /* ignore duplicate init */
    }
  }, []);

  return null;
}

export function BlogAdTop() {
  return (
    <AdSenseAd
      slot={ADSENSE_SLOT_BLOG_TOP}
      className="my-6 min-h-[90px] w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50/80 p-2"
    />
  );
}

export function BlogAdSidebar() {
  return (
    <AdSenseAd
      slot={ADSENSE_SLOT_BLOG_SIDEBAR}
      className="min-h-[280px] w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50/80 p-2"
    />
  );
}

export function BlogAdBottom() {
  return (
    <AdSenseAd
      slot={ADSENSE_SLOT_BLOG_BOTTOM}
      className="my-8 min-h-[90px] w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50/80 p-2"
    />
  );
}
