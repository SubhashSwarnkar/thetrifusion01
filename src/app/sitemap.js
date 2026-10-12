import { allSitemapEntries } from "lib/sitemaps";

/**
 * Single /sitemap.xml for Search Console. URL groups (pages, services,
 * blog, locales) live in lib/sitemaps.js and can be split later with
 * generateSitemaps() once child sitemaps are submitted in GSC.
 */
export default function sitemap() {
  return allSitemapEntries();
}
