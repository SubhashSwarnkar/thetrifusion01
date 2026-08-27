const STORAGE_KEY = "tf_attribution_v1";
const COOKIE_KEY = "tf_attr";
const COOKIE_DAYS = 90;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
];

function hasPaidClick(params) {
  return UTM_KEYS.some((key) => Boolean(params.get(key)));
}

function readCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1")}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name, value, days) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function parseStored(raw) {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Capture first-touch attribution into sessionStorage + cookie.
 * Safe to call multiple times; only first non-empty touch is kept.
 */
export function captureAttribution() {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  const existing =
    parseStored(sessionStorage.getItem(STORAGE_KEY)) ||
    parseStored(readCookie(COOKIE_KEY));

  if (existing?.landing_page && !hasPaidClick(params)) {
    return existing;
  }
  const attribution = {
    landing_page: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || "",
    captured_at: new Date().toISOString(),
  };

  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) attribution[key] = value;
  });

  const serialized = JSON.stringify(attribution);
  sessionStorage.setItem(STORAGE_KEY, serialized);
  writeCookie(COOKIE_KEY, serialized, COOKIE_DAYS);
  return attribution;
}

export function getAttribution() {
  if (typeof window === "undefined") {
    return {
      landing_page: "",
      referrer: "",
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
      gclid: "",
      gbraid: "",
      wbraid: "",
      fbclid: "",
    };
  }

  const stored =
    parseStored(sessionStorage.getItem(STORAGE_KEY)) ||
    parseStored(readCookie(COOKIE_KEY)) ||
    captureAttribution() ||
    {};

  return {
    landing_page: stored.landing_page || window.location.pathname,
    referrer: stored.referrer || document.referrer || "",
    utm_source: stored.utm_source || "",
    utm_medium: stored.utm_medium || "",
    utm_campaign: stored.utm_campaign || "",
    utm_term: stored.utm_term || "",
    utm_content: stored.utm_content || "",
    gclid: stored.gclid || "",
    gbraid: stored.gbraid || "",
    wbraid: stored.wbraid || "",
    fbclid: stored.fbclid || "",
  };
}
