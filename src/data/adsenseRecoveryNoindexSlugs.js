/**
 * Country/variant template duplicates that stay HTTP 200 with a self-canonical
 * and `noindex, follow`. Same treatment as OFFTOPIC_NOINDEX_SLUGS: out of the
 * sitemap, out of getPublishedBlogPosts, and AdSense-excluded.
 *
 * Do not add these to ARCHIVE_NOINDEX_SLUGS (that set 404s and 301s to /blog).
 * Do not add posts that are outside these eight families.
 *
 * In each family exactly one post stays indexable, except
 * ev-charging-csms-X-cpo-guide which keeps two (EV is the priority service).
 * Rank: India-focused, then a broad/regional variant, then highest clean_words.
 * Broad/regional tokens: north-america, apac, southeast-asia, middle-east,
 * europe, anz, benelux, gulf, south-africa-africa, global, worldwide,
 * international.
 *
 * Kept indexable:
 * - chatgpt-ai-tools-for-australian-startups-2026
 * - claude-ai-for-uae-businesses-2026
 * - ev-charging-csms-india-cpo-guide
 * - ev-charging-csms-uk-europe-cpo-guide
 * - fintech-app-development-uae-gulf-2026
 * - gemini-ai-for-philippine-bpo-businesses-2026
 * - mobile-app-development-cost-guide-uae-gulf
 * - upi-charges-in-india-2026-complete-guide
 * - website-development-cost-guide-new-zealand-2026
 */
export const ADSENSE_RECOVERY_KEPT_SLUGS = new Set([
  "chatgpt-ai-tools-for-australian-startups-2026",
  "claude-ai-for-uae-businesses-2026",
  "ev-charging-csms-india-cpo-guide",
  "ev-charging-csms-uk-europe-cpo-guide",
  "fintech-app-development-uae-gulf-2026",
  "gemini-ai-for-philippine-bpo-businesses-2026",
  "mobile-app-development-cost-guide-uae-gulf",
  "upi-charges-in-india-2026-complete-guide",
  "website-development-cost-guide-new-zealand-2026",
]);

export const ADSENSE_RECOVERY_NOINDEX_SLUGS = new Set([
  "chatgpt-ai-tools-for-brazilian-startups-2026",
  "chatgpt-ai-tools-for-indonesian-startups-2026",
  "chatgpt-ai-tools-for-kenyan-startups-2026",
  "chatgpt-ai-tools-for-nigerian-startups-2026",
  "chatgpt-ai-tools-for-pakistan-startups-2026",
  "chatgpt-ai-tools-for-philippine-startups-2026",
  "chatgpt-ai-tools-for-us-startups-2026",
  "claude-ai-agents-for-canadian-businesses-2026",
  "claude-ai-for-irish-smes-2026",
  "ev-charging-csms-canada-north-america-cpo-guide",
  "ev-charging-csms-france-benelux-cpo-guide",
  "ev-charging-csms-ireland-cpo-guide",
  "ev-charging-csms-japan-apac-cpo-guide",
  "ev-charging-csms-new-zealand-anz-cpo-guide",
  "ev-charging-csms-philippines-southeast-asia-cpo-guide",
  "ev-charging-csms-singapore-malaysia-cpo-guide",
  "ev-charging-csms-south-africa-africa-cpo-guide",
  "ev-charging-csms-uae-middle-east-cpo-guide",
  "fintech-app-development-canada-2026",
  "fintech-app-development-france-2026",
  "fintech-app-development-japan-2026",
  "fintech-app-development-kenya-2026",
  "fintech-app-development-new-zealand-2026",
  "fintech-app-development-nigeria-2026",
  "fintech-app-development-pakistan-2026",
  "fintech-app-development-saudi-arabia-2026",
  "fintech-app-development-singapore-malaysia-2026",
  "gemini-ai-for-german-smes-2026",
  "gemini-ai-for-mexican-smes-2026",
  "gemini-ai-for-saudi-smes-2026",
  "gemini-ai-for-south-african-smes-2026",
  "gemini-ai-for-uk-smes-2026",
  "mobile-app-development-cost-guide-brazil-2026",
  "mobile-app-development-cost-guide-indonesia-2026",
  "mobile-app-development-cost-guide-kenya-2026",
  "mobile-app-development-cost-guide-nigeria-2026",
  "mobile-app-development-cost-guide-pakistan-2026",
  "mobile-app-development-cost-guide-singapore-malaysia-2026",
  "mobile-app-development-cost-guide-uk-2026",
  "mobile-app-development-cost-guide-united-states-2026",
  "ai-agentic-ecommerce-upi-india-2026",
  "free-upi-transactions-india-what-businesses-still-pay",
  "hidden-upi-charges-settlement-fees-indian-sme",
  "upi-autopay-mandate-charges-india-explained",
  "upi-charges-impact-ecommerce-checkout-cost-india",
  "upi-mdr-charges-for-merchants-india",
  "upi-p2m-charges-person-to-merchant-india",
  "upi-payment-gateway-charges-comparison-india",
  "upi-qr-code-payment-charges-offline-shops-india",
  "upi-vs-card-vs-netbanking-charges-ecommerce-india",
  "website-development-cost-guide-australia-2026",
  "website-development-cost-guide-germany-2026",
  "website-development-cost-guide-ireland-2026",
  "website-development-cost-guide-mexico-2026",
  "website-development-cost-guide-saudi-arabia-2026",
  "website-development-cost-guide-singapore-malaysia",
  "website-development-cost-guide-south-africa-2026",
  "website-development-cost-guide-uae-dubai-2026",
]);

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

export function templateFamilyKeepCount(family) {
  return family === "ev-charging-csms-X-cpo-guide" ? 2 : 1;
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
    .slice(0, templateFamilyKeepCount(family))
    .map((row) => row.slug);
}
