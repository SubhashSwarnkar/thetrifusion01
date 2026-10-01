import {
  REDIRECTED_SOLUTION_SLUGS,
  SOLUTION_SERVICE_REDIRECTS,
  solutionRedirectDestination,
} from "lib/solutionRedirects";

/** Canonical paths for URLs that permanently redirect. */
const SOLUTION_ALIAS = {
  "online-store-development": "ecommerce-website-development",
};

export function canonicalSolutionSlug(slug) {
  return SOLUTION_ALIAS[slug] || slug;
}

export function canonicalSolutionHref(slug) {
  const redirected = solutionRedirectDestination(slug);
  if (redirected) return redirected;
  const canonical = canonicalSolutionSlug(slug);
  const aliased = solutionRedirectDestination(canonical);
  if (aliased) return aliased;
  return `/solutions/${canonical}`;
}

/**
 * Rewrite aliased solution pages onto the canonical page and drop duplicates.
 * `resolve` loads a page by slug (already enriched).
 */
/** Permanent path redirects from next.config.mjs. Host redirects are separate. */
const EXACT_REDIRECTS = {
  "/project": "/portfolio",
  "/case-studies": "/portfolio",
  "/solutions/online-store-development":
    "/solutions/ecommerce-website-development",
  "/services/web-development": "/services/website-development",
  "/discuss": "/discuss-project",
  "/services/ecommerce-development":
    "/solutions/ecommerce-website-development",
};

for (const item of SOLUTION_SERVICE_REDIRECTS) {
  EXACT_REDIRECTS[`/solutions/${item.slug}`] = item.destination;
}

/** Retired 2024 posts that 301 to /blog. Keep in sync with next.config.mjs. */
const RETIRED_BLOG_SLUGS = new Set([
  "generative-ai-revolution",
  "web3-decentralized-future",
  "quantum-computing-leap",
  "cybersecurity-zero-trust",
  "rise-of-edge-computing",
  "green-tech-sustainable-coding",
  "5g-6g-connectivity",
  "metaverse-business-impact",
  "rust-programming-rise",
  "future-of-devops",
  "fintech-embedded-finance",
  "ethical-ai-challenges",
  "cloud-native-security",
  "low-code-no-code",
  "biotech-crispr-software",
  "autonomous-vehicles-status",
  "smart-cities-iot",
  "space-tech-commercial",
]);

const SITE_HOSTS = new Set([
  "thetrifusion.in",
  "www.thetrifusion.in",
  "thetrifusion.com",
  "www.thetrifusion.com",
]);

function rewritePath(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (path === "/project" || path.startsWith("/project/")) {
    return `/portfolio${path.slice("/project".length)}` || "/portfolio";
  }
  if (EXACT_REDIRECTS[path]) return EXACT_REDIRECTS[path];
  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length).split("/")[0];
    if (RETIRED_BLOG_SLUGS.has(slug)) return "/blog";
  }
  return path;
}

/**
 * Point an internal href at the final URL when next.config would 301/308 it.
 * External sites, hashes, mailto, and tel are left alone. Already-final paths
 * are returned unchanged.
 */
export function canonicalInternalHref(href) {
  if (typeof href !== "string" || !href) return href;
  const trimmed = href.trim();
  if (
    trimmed.startsWith("#") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:") ||
    trimmed.startsWith("javascript:")
  ) {
    return href;
  }

  let url;
  let siteRelative = trimmed.startsWith("/");
  try {
    if (siteRelative) {
      url = new URL(trimmed, "https://thetrifusion.in");
    } else if (/^https?:\/\//i.test(trimmed)) {
      url = new URL(trimmed);
      if (!SITE_HOSTS.has(url.hostname.toLowerCase())) return href;
      siteRelative = false;
    } else {
      return href;
    }
  } catch {
    return href;
  }

  const path = rewritePath(url.pathname || "/");
  const next = `${path}${url.search || ""}${url.hash || ""}`;
  if (siteRelative || trimmed.startsWith("/")) return next;
  return `https://thetrifusion.in${next}`;
}

export function dedupeCanonicalSolutions(pages, resolve) {
  const seen = new Set();
  const out = [];
  for (const page of pages || []) {
    if (!page?.slug) continue;
    if (REDIRECTED_SOLUTION_SLUGS.has(page.slug)) continue;
    const slug = canonicalSolutionSlug(page.slug);
    if (REDIRECTED_SOLUTION_SLUGS.has(slug)) continue;
    if (seen.has(slug)) continue;
    seen.add(slug);
    const canonical = slug === page.slug ? page : resolve(slug);
    if (canonical) out.push(canonical);
  }
  return out;
}
