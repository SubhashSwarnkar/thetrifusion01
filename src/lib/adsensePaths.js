import { OFFTOPIC_NOINDEX_SLUGS } from "data/offtopicNoindexSlugs";
import { ADSENSE_RECOVERY_NOINDEX_SLUGS } from "data/adsenseRecoveryNoindexSlugs";
import { LOCALE_CODES } from "data/i18n/routes";
import { ADS_LANDING_PATHS } from "lib/seoConfig";

/**
 * Paths where the AdSense script and ad units must not load.
 * Matched after the locale prefix is removed, with or without a trailing slash.
 */
export const ADSENSE_EXCLUDED_PATHS = [
  "/thank-you",
  "/contact",
  "/estimate",
  "/planner",
  "/timeline",
  "/appointment",
  "/discuss-project",
  "/pricing/calculator",
  "/login",
  // Thin pages (short portfolio case cards, team list): no ads on low-content screens.
  "/portfolio",
  "/team",
  // Paid-ads landings stay noindex, follow and must not load adsbygoogle.js.
  // Same paths as ADS_LANDING_PATHS in lib/seoConfig.js.
  ...ADS_LANDING_PATHS,
];

const NOT_FOUND_PATHS = new Set([
  "/_not-found",
  "/404",
  "/not-found",
]);

export function normalizePathname(pathname) {
  if (pathname == null) return "";
  let path = String(pathname).split("?")[0].split("#")[0];
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path || "/";
}

/** Drop /es, /pt, /ar, /id, /hi so localized copies use the same rules. */
export function pathWithoutLocale(pathname) {
  const path = normalizePathname(pathname);
  const parts = path.split("/");
  if (parts[1] && LOCALE_CODES.includes(parts[1])) {
    const rest = `/${parts.slice(2).join("/")}`;
    return normalizePathname(rest);
  }
  return path;
}

export function isNotFoundPath(pathname) {
  const path = normalizePathname(pathname);
  return NOT_FOUND_PATHS.has(path) || NOT_FOUND_PATHS.has(pathWithoutLocale(pathname));
}

/**
 * Event-post slugs, filled from posts whose `event` field is set.
 * AdSenseScript registers the list so this module does not import blog HTML.
 */
let eventNoindexSlugs = new Set();

export function registerEventNoindexSlugs(slugs) {
  eventNoindexSlugs = new Set(slugs || []);
}

function isNoindexBlogPath(path) {
  const match = /^\/blog\/([^/]+)$/.exec(path);
  if (!match) return false;
  const slug = match[1];
  return (
    OFFTOPIC_NOINDEX_SLUGS.has(slug) ||
    ADSENSE_RECOVERY_NOINDEX_SLUGS.has(slug) ||
    eventNoindexSlugs.has(slug)
  );
}

export function isAdSenseExcludedPath(pathname) {
  if (pathname == null || pathname === "") return false;
  if (isNotFoundPath(pathname)) return true;
  const path = pathWithoutLocale(pathname);
  if (isNoindexBlogPath(path)) return true;
  return ADSENSE_EXCLUDED_PATHS.some(
    (excluded) => path === excluded || path.startsWith(`${excluded}/`)
  );
}

/**
 * Content pages (home, blog, services, solutions) load AdSense.
 * A missing pathname is treated as allowed so the static HTML still contains
 * the standard head snippet. The 404 view turns ads off after it mounts.
 */
export function shouldLoadAdSense(pathname) {
  if (!pathname) return true;
  return !isAdSenseExcludedPath(pathname);
}
