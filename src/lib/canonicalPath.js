import { SOLUTION_SERVICE_REDIRECTS } from "lib/solutionRedirects";

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
  // GSC 404 junk portfolio slug
  "/portfolio/asd1293uhjkhkjh2": "/portfolio",
};

for (const item of SOLUTION_SERVICE_REDIRECTS) {
  EXACT_REDIRECTS[`/solutions/${item.slug}`] = item.destination;
}

const HASHED_SOLUTION_OG = /^\/solutions\/([^/]+)\/opengraph-image-[^/]+$/;

/**
 * Final apex pathname after permanent path redirects (no host change).
 */
export function canonicalSitePathname(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (path === "/project" || path.startsWith("/project/")) {
    return `/portfolio${path.slice("/project".length)}` || "/portfolio";
  }
  const og = path.match(HASHED_SOLUTION_OG);
  if (og) return `/solutions/${og[1]}/opengraph-image`;
  if (EXACT_REDIRECTS[path]) return EXACT_REDIRECTS[path];
  return path;
}
