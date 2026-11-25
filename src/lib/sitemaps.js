import { services } from "data/servicesData";
import { seoLandingPages, getSeoLandingBySlug } from "data/seoLandingPages";
import { fintechProductPages } from "data/fintechProductPages";
import { Portfolios, isIndexablePortfolio } from "json/landingPageData";
import { NOINDEX_PATHS, REDIRECTED_STATIC_PATHS, pages } from "lib/seoConfig";
import { REDIRECTED_SOLUTION_SLUGS } from "lib/solutionRedirects";
import { isNoindexCitySolutionSlug } from "data/cityLandingRobots";
import { getPublishedMarkdownPosts } from "lib/blogMarkdown";

/** Live child sitemaps — pages, services, solutions, and the new blog. */
export const SITEMAP_IDS = ["pages", "services", "solutions", "blog"];

export const CHILD_SITEMAP_PATHS = {
  pages: "/sitemap-pages.xml",
  services: "/sitemap-services.xml",
  solutions: "/sitemap-solutions.xml",
  blog: "/sitemap-blog.xml",
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

function apexSitemapUrl(path) {
  // Hard rule: sitemaps never emit www or non-apex hosts (even if env mis-sets SITE_URL).
  const APEX = "https://thetrifusion.in";
  if (!path || path === "/") return APEX;
  const value = String(path);
  if (/^https?:\/\//i.test(value)) {
    try {
      const parsed = new URL(value);
      const cleanPath =
        !parsed.pathname || parsed.pathname === "/"
          ? "/"
          : parsed.pathname.replace(/\/+$/, "") || "/";
      if (cleanPath === "/") return APEX;
      return `${APEX}${cleanPath}${parsed.search || ""}`;
    } catch {
      return APEX;
    }
  }
  const withSlash = value.startsWith("/") ? value : `/${value}`;
  const cleanPath =
    withSlash === "/" ? "/" : withSlash.replace(/\/+$/, "") || "/";
  if (cleanPath === "/") return APEX;
  return `${APEX}${cleanPath}`;
}

/** Static paths that must never appear in sitemaps (gone / unpublished hubs). */
const GONE_STATIC_PATHS = new Set();

export function buildSitemapParts() {
  const fallbackDate = new Date("2026-09-24");
  const blogPosts = getPublishedMarkdownPosts();
  const blogHubLastmod =
    blogPosts.length > 0
      ? safeDate(blogPosts[0].updatedAt || blogPosts[0].date, new Date())
      : new Date();

  // Services hub lastmod — keep in sync when the hub is re-submitted to GSC.
  const servicesHubLastmod = new Date("2026-11-25");

  const staticLastmod = {
    "/": new Date("2026-11-25"),
    "/about": fallbackDate,
    "/solutions": new Date("2026-10-12"),
    "/portfolio": new Date("2026-11-25"),
    "/pricing": fallbackDate,
    "/contact": fallbackDate,
    "/faq": new Date("2026-11-25"),
    "/editorial-policy": fallbackDate,
    "/privacy": new Date("2026-11-25"),
    "/terms": new Date("2026-11-25"),
    "/sitemap": new Date("2026-11-09"),
    "/blog": blogHubLastmod,
  };

  const staticRoutes = Object.keys(pages)
    .filter(
      (path) =>
        // Hub lives in sitemap-services.xml (not pages).
        // Blog hub + posts live in sitemap-blog.xml.
        path !== "/services" &&
        path !== "/blog" &&
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
          : path === "/contact" || path === "/solutions"
            ? 0.9
            : 0.7,
    }));

  const servicesHubRoute = {
    url: apexSitemapUrl("/services"),
    lastModified: servicesHubLastmod,
    changeFrequency: "weekly",
    priority: 0.9,
  };

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
      lastModified: project.contentUpdatedAt
        ? safeDate(project.contentUpdatedAt, fallbackDate)
        : fallbackDate,
      changeFrequency: "monthly",
      priority: project.featured ? 0.75 : 0.6,
    })
  );

  const blogHubRoute = {
    url: apexSitemapUrl("/blog"),
    lastModified: blogHubLastmod,
    changeFrequency: "daily",
    priority: 0.7,
  };

  const blogRoutes = blogPosts.map((post) => ({
    url: apexSitemapUrl(`/blog/${post.slug}`),
    lastModified: safeDate(post.updatedAt || post.date, blogHubLastmod),
    changeFrequency: "weekly",
    priority: 0.65,
  }));

  return {
    pages: [...staticRoutes, ...portfolioRoutes],
    services: [servicesHubRoute, ...serviceRoutes, ...fintechRoutes],
    solutions: solutionRoutes,
    blog: [blogHubRoute, ...blogRoutes],
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
  // Prefer the same hard apex used by apexSitemapUrl (ignore mis-set SITE_URL).
  const origin = "https://thetrifusion.in";
  return [
    `${origin}${CHILD_SITEMAP_PATHS.pages}`,
    `${origin}${CHILD_SITEMAP_PATHS.services}`,
    `${origin}${CHILD_SITEMAP_PATHS.solutions}`,
    `${origin}${CHILD_SITEMAP_PATHS.blog}`,
  ];
}

export function getBlogSitemapChunks() {
  return [buildSitemapParts().blog];
}

export function getBlogSitemapChunk(chunkIndex = 0) {
  const chunks = getBlogSitemapChunks();
  return chunks[chunkIndex] || [];
}
