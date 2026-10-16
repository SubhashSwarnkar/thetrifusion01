import {
  blogPosts,
  isIndexableBlogPost,
} from "data/blogData";
import { services } from "data/servicesData";
import { seoLandingPages, getSeoLandingBySlug } from "data/seoLandingPages";
import { fintechProductPages } from "data/fintechProductPages";
import { Portfolios, isIndexablePortfolio } from "json/landingPageData";
import { NOINDEX_PATHS, pages } from "lib/seoConfig";
import { REDIRECTED_SOLUTION_SLUGS } from "lib/solutionRedirects";
import { siteConfig } from "config/site";

export const SITEMAP_IDS = ["pages", "services", "solutions", "blog"];

export const CHILD_SITEMAP_PATHS = {
  pages: "/sitemap-pages.xml",
  services: "/sitemap-services.xml",
  solutions: "/sitemap-solutions.xml",
  blog: "/sitemap-blog.xml",
};

/** Google allows 50k URLs per file; split blog urlsets well before that. */
export const BLOG_SITEMAP_CHUNK_SIZE = 1000;

export function chunkEntries(entries, size = BLOG_SITEMAP_CHUNK_SIZE) {
  const list = Array.isArray(entries) ? entries : [];
  if (!list.length) return [[]];
  const chunks = [];
  for (let i = 0; i < list.length; i += size) {
    chunks.push(list.slice(i, i + size));
  }
  return chunks;
}

export function blogSitemapPath(chunkIndex) {
  return chunkIndex === 0
    ? "/sitemap-blog.xml"
    : `/sitemap-blog-${chunkIndex + 1}.xml`;
}

export function getBlogSitemapChunks() {
  return chunkEntries(buildSitemapParts().blog);
}

export function getBlogSitemapChunk(chunkIndex) {
  const chunks = getBlogSitemapChunks();
  if (chunkIndex < 0 || chunkIndex >= chunks.length) return null;
  return chunks[chunkIndex];
}

function safeDate(value, fallback) {
  try {
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return fallback;
    return d;
  } catch {
    return fallback;
  }
}

function latestDate(values, fallback) {
  let latest = fallback;
  for (const value of values) {
    if (!value) continue;
    const next = safeDate(value, null);
    if (next && next.getTime() > latest.getTime()) latest = next;
  }
  return latest;
}

export function buildSitemapParts() {
  const fallbackDate = new Date("2026-09-24");

  const newestServiceDate = latestDate(
    [
      ...services.map((service) => service.contentUpdatedAt),
      ...fintechProductPages.map((page) => page.contentUpdatedAt),
    ],
    fallbackDate
  );
  const newestBlogDate = latestDate(
    blogPosts
      .filter(isIndexableBlogPost)
      .map((post) => post.updatedAt || post.date),
    fallbackDate
  );

  const staticLastmod = {
    "/": new Date("2026-10-14"),
    "/about": fallbackDate,
    "/services": newestServiceDate,
    "/solutions": new Date("2026-10-12"),
    "/portfolio": fallbackDate,
    "/pricing": fallbackDate,
    "/contact": fallbackDate,
    "/blog": newestBlogDate,
    "/faq": fallbackDate,
    "/editorial-policy": fallbackDate,
    "/privacy": fallbackDate,
    "/terms": fallbackDate,
    "/sitemap": new Date("2026-10-14"),
  };

  const staticRoutes = Object.keys(pages)
    .filter((path) => !NOINDEX_PATHS.has(path))
    .map((path) => ({
      url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
      lastModified: staticLastmod[path] || fallbackDate,
      changeFrequency: path === "/" || path === "/blog" ? "weekly" : "monthly",
      priority:
        path === "/"
          ? 1
          : path === "/services" ||
              path === "/contact" ||
              path === "/solutions"
            ? 0.9
            : 0.7,
    }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: service.contentUpdatedAt
      ? safeDate(service.contentUpdatedAt, fallbackDate)
      : fallbackDate,
    changeFrequency: "weekly",
    priority:
      typeof service.sitemapPriority === "number"
        ? service.sitemapPriority
        : 0.8,
  }));

  const fintechRoutes = fintechProductPages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: safeDate(page.contentUpdatedAt || "2026-10-14", fallbackDate),
    changeFrequency: "weekly",
    priority: 0.78,
  }));

  const solutionRoutes = seoLandingPages
    .filter(
      (raw) =>
        raw.slug !== "online-store-development" &&
        !REDIRECTED_SOLUTION_SLUGS.has(raw.slug)
    )
    .map((raw) => {
      const page = getSeoLandingBySlug(raw.slug);
      return {
        url: `${siteConfig.url}/solutions/${raw.slug}`,
        lastModified: page?.updatedAt
          ? safeDate(page.updatedAt, fallbackDate)
          : fallbackDate,
        changeFrequency: "weekly",
        priority: raw.slug === "ecommerce-website-development" ? 0.9 : 0.85,
      };
    });

  const blogRoutes = blogPosts.filter(isIndexableBlogPost).map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: safeDate(
      post.updatedAt || post.date || "2026-09-12",
      fallbackDate
    ),
    changeFrequency: post.featured ? "daily" : "weekly",
    priority: post.featured ? 0.85 : 0.75,
  }));

  const portfolioRoutes = Portfolios.filter(isIndexablePortfolio).map(
    (project) => ({
      url: `${siteConfig.url}/portfolio/${project.id}`,
      lastModified: fallbackDate,
      changeFrequency: "monthly",
      priority: project.featured ? 0.75 : 0.6,
    })
  );

  return {
    pages: [...staticRoutes, ...portfolioRoutes],
    services: [...serviceRoutes, ...fintechRoutes],
    solutions: solutionRoutes,
    blog: blogRoutes,
  };
}

export function allSitemapEntries() {
  const parts = buildSitemapParts();
  const all = [
    ...parts.pages,
    ...parts.services,
    ...parts.solutions,
    ...parts.blog,
  ];
  const seen = new Set();
  return all.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

export function childSitemapLocs() {
  const blogChunks = getBlogSitemapChunks();
  return [
    `${siteConfig.url}${CHILD_SITEMAP_PATHS.pages}`,
    `${siteConfig.url}${CHILD_SITEMAP_PATHS.services}`,
    `${siteConfig.url}${CHILD_SITEMAP_PATHS.solutions}`,
    ...blogChunks.map((_, index) => `${siteConfig.url}${blogSitemapPath(index)}`),
  ];
}
