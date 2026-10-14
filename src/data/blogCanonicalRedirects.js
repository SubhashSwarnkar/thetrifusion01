/**
 * Near-duplicate posts merged onto one canonical URL each (301).
 * Keep in sync with next.config.mjs and lib/internalLinks.js.
 */
export const BLOG_CANONICAL_REDIRECTS = {
  "iphone-18-india-features-apps-businesses":
    "iphone-18-india-price-launch-ios-apps-business",
  "iphone-18-apple-intelligence-business-apps-india":
    "iphone-18-india-price-launch-ios-apps-business",
  "salesforce-koa-crm-reasoning-model-nvidia-nemotron-explained":
    "salesforce-agentforce-koa-ai-push-what-investors-and-teams-watch",
  "salesforce-nvidia-koa-vs-frontier-ai-labs":
    "salesforce-agentforce-koa-ai-push-what-investors-and-teams-watch",
  "nse-ipo-digital-presence-india-companies":
    "ipo-ready-website-digital-presence-india",
  "fashion-d2c-ecommerce-website-cost-india":
    "ecommerce-website-development-cost-india",
};

export function canonicalBlogSlug(slug) {
  return BLOG_CANONICAL_REDIRECTS[slug] || slug;
}

export function canonicalBlogPath(slug) {
  return `/blog/${canonicalBlogSlug(slug)}`;
}
