/**
 * Soft-noindex slug set. Empty on purpose.
 *
 * PR #44 (df4629a, 7 Oct 2026) put 139 off-topic / trending posts here.
 * Those URLs were carrying almost all Google Search Console impressions
 * (~2,000–5,400/day until 6 Oct, then ~10–45/day). The set is cleared so
 * those posts, and any later daily post of any topic, default to
 * index,follow and sit in sitemap-blog.xml.
 *
 * Do not add new daily news/sports/exam/event slugs here. The only blog
 * URLs that stay out of the index are:
 * - ARCHIVE_NOINDEX_SLUGS (empty 2024 posts, 301 to /blog)
 * - BLOG_CANONICAL_REDIRECTS (true duplicates, 308 to the canonical twin)
 */
export const OFFTOPIC_NOINDEX_SLUGS = new Set();
