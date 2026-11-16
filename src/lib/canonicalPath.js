import { SOLUTION_SERVICE_REDIRECTS } from "lib/solutionRedirects";
import { PORTFOLIO_SLUGS } from "lib/portfolioSlugs";

/** Keep in sync with data/i18n/routes LOCALE_CODES (edge-safe; no i18n import). */
const LOCALE_CODES = ["es", "pt", "ar", "id", "hi"];
/** Keep in sync with data/i18n/catalog TRANSLATED_SERVICE_PATH. */
const ENGLISH_EV_SERVICE_PATH = "/services/ev-charging-app-development";

/**
 * Permanent path redirects (apex pathname only).
 * Middleware is the only redirect hop (next.config redirects stay empty) so
 * www/.com always lands on https://thetrifusion.in + final path in one 308.
 * Blog paths are intentionally NOT mapped — middleware returns 410 for those.
 */
const EXACT_REDIRECTS = {
  "/project": "/portfolio",
  "/case-studies": "/portfolio",
  "/solutions/online-store-development":
    "/solutions/ecommerce-website-development",
  "/services/web-development": "/services/website-development",
  "/web-development": "/services/website-development",
  // Short / retired service slugs that used to 404+noindex (GSC drop).
  "/services/mobile-app": "/services/mobile-app-development",
  "/services/android-app": "/services/android-app-development",
  "/services/ios-app": "/services/ios-app-development",
  "/services/mlm-crm": "/services/mlm-crm-development",
  // Pre-rename core slug (servicesData once used mobile-development).
  "/services/mobile-development": "/services/mobile-app-development",
  "/android-app-development": "/services/android-app-development",
  "/ios-app-development": "/services/ios-app-development",
  "/ai-development": "/services/ai-development",
  "/graphic-design": "/services/graphic-design",
  "/discuss": "/discuss-project",
  "/services/ecommerce-development":
    "/solutions/ecommerce-website-development",
  "/ecommerce-development": "/solutions/ecommerce-website-development",
  "/portfolio/atharv-narayan-wellness-website":
    "/portfolio/atharv-narayan-dairy-logistics-website",
};

for (const item of SOLUTION_SERVICE_REDIRECTS) {
  EXACT_REDIRECTS[`/solutions/${item.slug}`] = item.destination;
}

for (const lang of LOCALE_CODES) {
  EXACT_REDIRECTS[`/${lang}`] = "/";
  EXACT_REDIRECTS[`/${lang}/services`] = "/services";
}

const HASHED_SOLUTION_OG = /^\/solutions\/([^/]+)\/opengraph-image-[^/]+$/;
const PORTFOLIO_SLUG_PATH = /^\/portfolio\/([^/]+)$/;
const LOCALE_EV_SERVICE_PATH = new RegExp(
  `^/(${LOCALE_CODES.join("|")})/services/ev-charging-app-development$`
);

/**
 * Collapse /project and /portfolio unknown slugs to the portfolio hub in one hop.
 */
function portfolioCanonicalPath(path) {
  if (path === "/project" || path.startsWith("/project/")) {
    path = `/portfolio${path.slice("/project".length)}` || "/portfolio";
  }
  const portfolio = path.match(PORTFOLIO_SLUG_PATH);
  if (portfolio && !PORTFOLIO_SLUGS.has(portfolio[1])) {
    return "/portfolio";
  }
  return path;
}

/**
 * Final apex pathname after permanent path redirects (no host change).
 * Locale EV service pages are intentionally left unchanged here so they stay
 * HTTP 200; use documentCanonicalPathname() for their English Link/canonical.
 */
export function canonicalSitePathname(pathname) {
  // Strip one or more trailing slashes so /path/ and /path/// match /path.
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (path === "/project" || path.startsWith("/project/")) {
    return portfolioCanonicalPath(path);
  }
  const og = path.match(HASHED_SOLUTION_OG);
  if (og) return `/solutions/${og[1]}/opengraph-image`;
  if (EXACT_REDIRECTS[path]) return EXACT_REDIRECTS[path];
  // Unknown / junk portfolio slugs (GSC crawl waste) → hub.
  return portfolioCanonicalPath(path);
}

/**
 * Pathname advertised in Link rel=canonical / HTML canonical / og:url.
 * Locale EV copies stay live (200, noindex) but point at the English money URL.
 */
export function documentCanonicalPathname(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (LOCALE_EV_SERVICE_PATH.test(path)) {
    return ENGLISH_EV_SERVICE_PATH;
  }
  return canonicalSitePathname(path);
}
