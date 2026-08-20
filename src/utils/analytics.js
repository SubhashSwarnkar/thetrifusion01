export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...params });
  } catch {
    // Analytics should never break UX
  }
}

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
