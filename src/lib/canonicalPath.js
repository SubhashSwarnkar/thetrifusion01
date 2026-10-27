import { SOLUTION_SERVICE_REDIRECTS } from "lib/solutionRedirects";

/**
 * Permanent path redirects (apex pathname only). Keep in sync with next.config.mjs.
 * Middleware uses this so www/.com → apex is a single hop onto the money URL.
 * Blog paths are intentionally NOT mapped — middleware returns 410 for those.
 */
const EXACT_REDIRECTS = {
  "/project": "/portfolio",
  "/case-studies": "/portfolio",
  "/solutions/online-store-development":
    "/solutions/ecommerce-website-development",
  "/services/web-development": "/services/website-development",
  "/web-development": "/services/website-development",
  "/android-app-development": "/services/android-app-development",
  "/ios-app-development": "/services/ios-app-development",
  "/ai-development": "/services/ai-development",
  "/graphic-design": "/services/graphic-design",
  "/discuss": "/discuss-project",
  "/services/ecommerce-development":
    "/solutions/ecommerce-website-development",
  "/ecommerce-development": "/solutions/ecommerce-website-development",
  // GSC 404 junk portfolio slug
  "/portfolio/asd1293uhjkhkjh2": "/portfolio",
};

for (const item of SOLUTION_SERVICE_REDIRECTS) {
  EXACT_REDIRECTS[`/solutions/${item.slug}`] = item.destination;
}

/**
 * Final apex pathname after permanent path redirects (no host change).
 */
export function canonicalSitePathname(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (path === "/project" || path.startsWith("/project/")) {
    return `/portfolio${path.slice("/project".length)}` || "/portfolio";
  }
  if (EXACT_REDIRECTS[path]) return EXACT_REDIRECTS[path];
  return path;
}
