import {
  REDIRECTED_SOLUTION_SLUGS,
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
