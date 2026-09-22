import { siteConfig } from "config/site";

const DISALLOW = [
  "/admin/",
  "/dashboard/",
  "/api/",
  "/test/",
  "/staging/",
  "/login/",
  "/preview/",
  "/thank-you/",
  "/estimate",
  "/planner",
  "/timeline",
  "/pricing/calculator",
  "/appointment",
  "/discuss-project",
];

/** AI / classic search crawlers — explicit Allow so public content is crawlable. */
const AI_SEARCH_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "Applebot",
];

/** @returns {import("next").MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW,
      },
      ...AI_SEARCH_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW,
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
