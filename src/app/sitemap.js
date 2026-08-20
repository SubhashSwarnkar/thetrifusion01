import { blogPosts } from "data/blogData";
import { services } from "data/servicesData";
import { seoLandingPages, getSeoLandingBySlug } from "data/seoLandingPages";
import { Portfolios } from "json/landingPageData";
import { NOINDEX_PATHS, pages } from "lib/seoConfig";
import { siteConfig } from "config/site";

export default function sitemap() {
  const fallbackDate = new Date("2026-08-20");

  const staticRoutes = Object.keys(pages)
    .filter((path) => !NOINDEX_PATHS.has(path))
    .map((path) => ({
      url: path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${path}`,
      lastModified: fallbackDate,
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
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: fallbackDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const solutionRoutes = seoLandingPages.map((raw) => {
    const page = getSeoLandingBySlug(raw.slug);
    return {
      url: `${siteConfig.url}/solutions/${raw.slug}`,
      lastModified: page?.updatedAt
        ? new Date(page.updatedAt)
        : fallbackDate,
      changeFrequency: "weekly",
      priority: 0.85,
    };
  });

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.date || "2026-08-20"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const portfolioRoutes = Portfolios.map((project) => ({
    url: `${siteConfig.url}/portfolio/${project.id}`,
    lastModified: fallbackDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const all = [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...blogRoutes,
    ...portfolioRoutes,
  ];

  const seen = new Set();
  return all.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
