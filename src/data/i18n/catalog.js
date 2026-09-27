/**
 * Evergreen pages that have es/pt/ar/id/hi translations.
 * English URLs stay unprefixed. Translated URLs are /{lang}{englishPath}.
 */

export const TRANSLATED_BLOG_SLUGS = [
  "ev-charging-app-ocpi-ocpp-guide",
  "ecommerce-website-development-cost-india",
  "ecommerce-app-development-cost-india",
  "custom-website-vs-shopify-vs-woocommerce",
  "flutter-vs-react-native-2024",
  "how-to-build-ecommerce-website-india-2026",
  "chatgpt-1980s-ai-photo-prompt-guide",
  "google-gemini-vs-chatgpt-india-business",
  "ai-app-development-cost-india-2026",
  "ui-ux-for-ai-products-india",
];

export const TRANSLATED_SERVICE_SLUG = "ev-charging-app-development";

export const TRANSLATED_SERVICE_PATH = `/services/${TRANSLATED_SERVICE_SLUG}`;

const BLOG_SLUG_SET = new Set(TRANSLATED_BLOG_SLUGS);

export function isTranslatedBlogSlug(slug) {
  return BLOG_SLUG_SET.has(slug);
}

export function isTranslatedEnglishPath(englishPath) {
  if (!englishPath) return false;
  if (englishPath === TRANSLATED_SERVICE_PATH) return true;
  const match = englishPath.match(/^\/blog\/([a-z0-9-]+)$/);
  return Boolean(match && BLOG_SLUG_SET.has(match[1]));
}
