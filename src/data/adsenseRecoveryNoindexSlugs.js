/**
 * Geo / UPI template slug set used by the former AdSense-recovery noindex
 * pass. Empty on purpose: those posts are index,follow again, with a
 * self-canonical, sitemap lastmod, /blog listing, and llms-full line.
 *
 * Ranking helpers stay so a later audit can still name an India-first
 * variant inside a family. They no longer drive robots or the sitemap.
 *
 * Do not add new daily posts here. Blocklist is only ARCHIVE_NOINDEX_SLUGS
 * (301) and BLOG_CANONICAL_REDIRECTS (308).
 */
export const ADSENSE_RECOVERY_KEPT_SLUGS = new Set([
  "ev-charging-csms-india-cpo-guide",
]);

export const ADSENSE_RECOVERY_NOINDEX_SLUGS = new Set();

const INDIA_VARIANT_RE = /(?:^|-)india(?:n)?(?:-|$)/;
const BROAD_VARIANT_RE =
  /(?:^|-)(?:north-america|apac|southeast-asia|middle-east|europe|anz|benelux|gulf|south-africa-africa|global|worldwide|international)(?:-|$)/;

/** 0 = India-focused, 1 = broad/regional, 2 = single-market variant. */
export function templateVariantTier(slug) {
  const value = String(slug || "");
  if (INDIA_VARIANT_RE.test(value)) return 0;
  if (BROAD_VARIANT_RE.test(value)) return 1;
  return 2;
}

/** Keep every variant. Indexing is no longer a family keep-count. */
export function templateFamilyKeepCount(family, rowCount = 0) {
  return rowCount;
}

/**
 * Rows need `slug` and `clean_words`. Lower tier wins, then more clean words,
 * then slug so ties are stable.
 */
export function keptSlugsForFamily(family, rows) {
  const ranked = [...rows].sort((a, b) => {
    const tierDiff = templateVariantTier(a.slug) - templateVariantTier(b.slug);
    if (tierDiff) return tierDiff;
    const words = Number(b.clean_words) - Number(a.clean_words);
    if (words) return words;
    if (a.slug < b.slug) return -1;
    if (a.slug > b.slug) return 1;
    return 0;
  });
  return ranked
    .slice(0, templateFamilyKeepCount(family, ranked.length))
    .map((row) => row.slug);
}
