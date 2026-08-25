export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-NSKGY1KSP4";

export const COOKIE_CONSENT_KEY = "tf_cookie_consent";

/** EEA + UK + Switzerland — consent banners apply here */
export const EEA_CONSENT_REGIONS = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "IS",
  "LI",
  "NO",
  "GB",
  "CH",
];

export const CONSENT_GRANTED = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
};

export const CONSENT_DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
};

/**
 * Runs before gtag.js / config. Order matches Google consent mode docs.
 * Restores a saved choice immediately so later pages keep the same state.
 */
export const CONSENT_DEFAULT_INLINE = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  region: ${JSON.stringify(EEA_CONSENT_REGIONS)},
  wait_for_update: 500
});
gtag('consent', 'default', {
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  analytics_storage: 'granted'
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
try {
  var saved = localStorage.getItem(${JSON.stringify(COOKIE_CONSENT_KEY)});
  if (saved === 'granted') {
    gtag('consent', 'update', ${JSON.stringify(CONSENT_GRANTED)});
  } else if (saved === 'denied') {
    gtag('consent', 'update', ${JSON.stringify(CONSENT_DENIED)});
  }
} catch (e) {}
`;
