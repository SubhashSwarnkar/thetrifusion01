import { isAdSenseExcludedPath } from "lib/adsensePaths";

/** localStorage + cookie key. Values are "dismissed" or "submitted". */
export const LEAD_POPUP_STORAGE_KEY = "tf_lead_popup";

/** Eligible time on content pages before the popup may open. */
export const LEAD_POPUP_DELAY_MS = 10000;

const BOT_UA =
  /googlebot|bingbot|duckduckbot|baiduspider|yandex|slurp|facebookexternalhit|twitterbot|linkedinbot|embedly|pinterestbot|slackbot|redditbot|applebot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|bytespider|gptbot|claudebot|amazonbot|headlesschrome|phantomjs|selenium|puppeteer|playwright|lighthouse|pagespeed|wget\/|curl\/|scrapy|\bcrawler\b|\bspider\b/i;

function readPopupCookie() {
  try {
    const match = document.cookie.match(
      new RegExp(`(?:^|; )${LEAD_POPUP_STORAGE_KEY}=([^;]*)`)
    );
    if (!match) return null;
    return decodeURIComponent(match[1]);
  } catch {
    return null;
  }
}

/**
 * "dismissed" | "submitted" when the visitor already finished the popup,
 * "unavailable" when localStorage cannot be used (do not show),
 * or null when the popup may still appear.
 */
export function readLeadPopupStatus() {
  if (typeof window === "undefined") return "unavailable";
  try {
    const probe = "__tf_ls_probe";
    window.localStorage.setItem(probe, "1");
    window.localStorage.removeItem(probe);
    const stored = window.localStorage.getItem(LEAD_POPUP_STORAGE_KEY);
    if (stored === "dismissed" || stored === "submitted") return stored;
  } catch {
    return "unavailable";
  }
  const cookie = readPopupCookie();
  if (cookie === "dismissed" || cookie === "submitted") return cookie;
  return null;
}

export function writeLeadPopupStatus(value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LEAD_POPUP_STORAGE_KEY, value);
  } catch {
    // Cookie below still records the choice when storage later throws.
  }
  try {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${LEAD_POPUP_STORAGE_KEY}=${encodeURIComponent(value)}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
  } catch {
    // Ignore cookie write failures.
  }
}

export function isLeadPopupBot() {
  if (typeof navigator === "undefined") return true;
  if (navigator.webdriver) return true;
  return BOT_UA.test(navigator.userAgent || "");
}

/** Storage missing, already answered, or a bot: never arm the popup. */
export function isLeadPopupBlocked() {
  const status = readLeadPopupStatus();
  if (
    status === "unavailable" ||
    status === "dismissed" ||
    status === "submitted"
  ) {
    return true;
  }
  return isLeadPopupBot();
}

export function isCookieBannerOpen() {
  if (typeof document === "undefined") return false;
  return document.querySelector(".tf-cookie-banner") != null;
}

export function isNotFoundView() {
  if (typeof document === "undefined") return false;
  return (
    document.documentElement.dataset.adsense === "off" ||
    document.querySelector("[data-adsense-page='off']") != null
  );
}

/**
 * Content pages only. Excluded routes match the contact/quote funnel
 * (and localized copies). Cookie banner and the 404 view pause this.
 */
export function canCountLeadPopupTime() {
  if (typeof window === "undefined") return false;
  if (isAdSenseExcludedPath(window.location.pathname)) return false;
  if (isNotFoundView()) return false;
  if (isCookieBannerOpen()) return false;
  return true;
}
