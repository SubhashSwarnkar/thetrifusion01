import {
  GOOGLE_ADS_ID,
  GOOGLE_ADS_LEAD_LABEL,
  META_PIXEL_ID,
} from "lib/trackingConfig";

export const AnalyticsEvents = {
  GENERATE_LEAD: "generate_lead",
  CLICK_WHATSAPP: "click_whatsapp",
  CLICK_PHONE: "click_phone",
  CLICK_EMAIL: "click_email",
  BOOK_CONSULTATION: "book_consultation",
  VIEW_CASE_STUDY: "view_case_study",
  PROMO_VIEW: "promo_view",
  PROMO_CLAIM: "promo_claim",
  PROMO_DISMISS: "promo_dismiss",
};

function fireMeta(eventName, params) {
  if (typeof window.fbq !== "function") return;
  if (eventName === AnalyticsEvents.GENERATE_LEAD) {
    window.fbq("track", "Lead", params);
    return;
  }
  if (eventName === AnalyticsEvents.CLICK_WHATSAPP) {
    window.fbq("trackCustom", "WhatsAppClick", params);
    return;
  }
  if (eventName === AnalyticsEvents.CLICK_PHONE) {
    window.fbq("trackCustom", "CallClick", params);
    return;
  }
  window.fbq("trackCustom", eventName, params);
}

function fireGoogleAdsConversion(eventName) {
  if (typeof window.gtag !== "function") return;
  if (!GOOGLE_ADS_ID || !GOOGLE_ADS_LEAD_LABEL) return;
  if (eventName !== AnalyticsEvents.GENERATE_LEAD) return;
  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LEAD_LABEL}`,
  });
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...params });

    if (META_PIXEL_ID) {
      fireMeta(eventName, params);
    }

    fireGoogleAdsConversion(eventName);
  } catch {
    // Analytics should never break UX
  }
}
