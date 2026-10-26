import { services } from "data/servicesData";
import { seoLandingPages, getSeoLandingBySlug } from "data/seoLandingPages";
import { fintechProductPages } from "data/fintechProductPages";
import { Portfolios, isIndexablePortfolio } from "json/landingPageData";
import { NOINDEX_PATHS, REDIRECTED_STATIC_PATHS, pages } from "lib/seoConfig";
import { REDIRECTED_SOLUTION_SLUGS } from "lib/solutionRedirects";
import { isNoindexCitySolutionSlug } from "data/cityLandingRobots";
import { siteConfig } from "config/site";

/** Live child sitemaps only — blogs removed from the site. */
export const SITEMAP_IDS = ["pages", "services", "solutions"];

export const CHILD_SITEMAP_PATHS = {
  pages: "/sitemap-pages.xml",
  services: "/sitemap-services.xml",
  solutions: "/sitemap-solutions.xml",
};

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

function apexSitemapUrl(path) {
  // Hard rule: sitemaps never emit www or non-apex hosts.
  if (!path || path === "/") return siteConfig.url;
  const value = String(path);
  if (/^https?:\/\//i.test(value)) {
    try {
      const parsed = new URL(value);
      const suffix = `${parsed.pathname}${parsed.search}` || "/";
      return suffix === "/"
        ? siteConfig.url
        : `${siteConfig.url}${suffix}`;
    } catch {
      return siteConfig.url;
    }
  }
  return `${siteConfig.url}${value.startsWith("/") ? value : `/${value}`}`;
}

/** Static paths that must never appear in sitemaps (gone / unpublished hubs). */
const GONE_STATIC_PATHS = new Set(["/blog"]);

export function buildSitemapParts() {
  const fallbackDate = new Date("2026-09-24");

  const newestServiceDate = latestDate(
    [
      ...services.map((service) => service.contentUpdatedAt),
      ...fintechProductPages.map((page) => page.contentUpdatedAt),
    ],
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
    "/faq": fallbackDate,
    "/editorial-policy": fallbackDate,
    "/privacy": fallbackDate,
    "/terms": fallbackDate,
    "/sitemap": new Date("2026-10-26"),
  };

  const staticRoutes = Object.keys(pages)
    .filter(
      (path) =>
        !NOINDEX_PATHS.has(path) &&
        !REDIRECTED_STATIC_PATHS.has(path) &&
        !GONE_STATIC_PATHS.has(path)
    )
    .map((path) => ({
      url: apexSitemapUrl(path),
      lastModified: staticLastmod[path] || fallbackDate,
      changeFrequency: path === "/" ? "weekly" : "monthly",
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
    url: apexSitemapUrl(`/services/${service.slug}`),
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
    url: apexSitemapUrl(page.path),
    lastModified: safeDate(page.contentUpdatedAt || page.updatedAt, fallbackDate),
    changeFrequency: "weekly",
    priority: 0.78,
  }));

  const solutionRoutes = seoLandingPages
    .filter(
      (raw) =>
        raw.slug !== "online-store-development" &&
        !REDIRECTED_SOLUTION_SLUGS.has(raw.slug) &&
        !isNoindexCitySolutionSlug(raw.slug)
    )
    .map((raw) => {
      const page = getSeoLandingBySlug(raw.slug);
      return {
        url: apexSitemapUrl(`/solutions/${raw.slug}`),
        lastModified: page?.updatedAt
          ? safeDate(page.updatedAt, fallbackDate)
          : fallbackDate,
        changeFrequency: "weekly",
        priority: raw.slug === "ecommerce-website-development" ? 0.9 : 0.85,
      };
    });

  const portfolioRoutes = Portfolios.filter(isIndexablePortfolio).map(
    (project) => ({
      url: apexSitemapUrl(`/portfolio/${project.id}`),
      lastModified: fallbackDate,
      changeFrequency: "monthly",
      priority: project.featured ? 0.75 : 0.6,
    })
  );

  return {
    pages: [...staticRoutes, ...portfolioRoutes],
    services: [...serviceRoutes, ...fintechRoutes],
    solutions: solutionRoutes,
    blog: [],
  };
}

export function allSitemapEntries() {
  const parts = buildSitemapParts();
  const all = [...parts.pages, ...parts.services, ...parts.solutions];
  const seen = new Set();
  return all.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

export function childSitemapLocs() {
  return [
    `${siteConfig.url}${CHILD_SITEMAP_PATHS.pages}`,
    `${siteConfig.url}${CHILD_SITEMAP_PATHS.services}`,
    `${siteConfig.url}${CHILD_SITEMAP_PATHS.solutions}`,
  ];
}

/** @deprecated Blog sitemap removed; stubs keep old routes from crashing. */
export function getBlogSitemapChunks() {
  return [[]];
}

export function getBlogSitemapChunk(_chunkIndex) {
  return [];
}
