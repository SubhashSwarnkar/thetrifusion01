import {
  blogPosts,
  isIndexableBlogPost,
  isIndexableBlogSlug,
} from "data/blogData";
import { services } from "data/servicesData";
import { evChargingPageContent } from "data/evChargingPageContent";
import { seoLandingPages, getSeoLandingBySlug } from "data/seoLandingPages";
import {
  hreflangLanguagesForPath,
  LOCALE_CODES,
  localizedPath,
  TRANSLATED_BLOG_SLUGS,
  TRANSLATED_SERVICE_PATH,
} from "data/i18n/routes";
import { Portfolios, isIndexablePortfolio } from "json/landingPageData";
import { NOINDEX_PATHS, pages } from "lib/seoConfig";
import { REDIRECTED_SOLUTION_SLUGS } from "lib/solutionRedirects";
import { siteConfig } from "config/site";

function withHreflang(entry, englishPath) {
  const languages = hreflangLanguagesForPath(englishPath);
  if (!languages) return entry;
  return { ...entry, alternates: { languages } };
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

export default function sitemap() {
  // Bump when core marketing pages change so GSC lastmod is not identical forever
  const siteContentUpdated = new Date("2026-09-24");
  const fallbackDate = siteContentUpdated;

  const staticRoutes = Object.keys(pages)
    .filter((path) => !NOINDEX_PATHS.has(path))
    .map((path) => ({
      url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
      lastModified: siteContentUpdated,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority:
        path === "/"
          ? 1
          : path === "/services" ||
              path === "/contact" ||
              path === "/solutions" ||
              path === "/web-development" ||
              path === "/android-app-development" ||
              path === "/ios-app-development" ||
              path === "/white-label-development" ||
              path === "/ecommerce-development"
            ? 0.9
            : 0.7,
    }));

  const serviceRoutes = services.map((service) =>
    withHreflang(
      {
        url: `${siteConfig.url}/services/${service.slug}`,
        lastModified: service.contentUpdatedAt
          ? safeDate(service.contentUpdatedAt, siteContentUpdated)
          : siteContentUpdated,
        changeFrequency: "weekly",
        priority:
          typeof service.sitemapPriority === "number"
            ? service.sitemapPriority
            : 0.8,
      },
      `/services/${service.slug}`
    )
  );

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
          : siteContentUpdated,
        changeFrequency: "weekly",
        priority: 0.85,
      };
    });

  const blogRoutes = blogPosts
    .filter(isIndexableBlogPost)
    .map((post) =>
      withHreflang(
        {
          url: `${siteConfig.url}/blog/${post.slug}`,
          lastModified: safeDate(
            post.updatedAt || post.date || "2026-09-12",
            fallbackDate
          ),
          changeFrequency: post.featured ? "daily" : "weekly",
          priority: post.featured ? 0.85 : 0.75,
        },
        `/blog/${post.slug}`
      )
    );

  const translatedBlogBySlug = new Map(
    blogPosts.map((post) => [post.slug, post])
  );
  const translatedRoutes = LOCALE_CODES.flatMap((lang) => {
    const blogEntries = TRANSLATED_BLOG_SLUGS.filter(isIndexableBlogSlug).map(
      (slug) => {
      const post = translatedBlogBySlug.get(slug);
      const englishPath = `/blog/${slug}`;
      return {
        url: `${siteConfig.url}${localizedPath(lang, englishPath)}`,
        lastModified: safeDate(
          post?.updatedAt || post?.date || "2026-09-13",
          fallbackDate
        ),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: hreflangLanguagesForPath(englishPath) },
      };
    });
    return [
      ...blogEntries,
      {
        url: `${siteConfig.url}${localizedPath(lang, TRANSLATED_SERVICE_PATH)}`,
        lastModified: safeDate(
          evChargingPageContent.contentUpdatedAt || "2026-09-25",
          fallbackDate
        ),
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: {
          languages: hreflangLanguagesForPath(TRANSLATED_SERVICE_PATH),
        },
      },
    ];
  });

  const portfolioRoutes = Portfolios.filter(isIndexablePortfolio).map(
    (project) => ({
      url: `${siteConfig.url}/portfolio/${project.id}`,
      lastModified: siteContentUpdated,
      changeFrequency: "monthly",
      priority: project.featured ? 0.75 : 0.6,
    })
  );

  const all = [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...blogRoutes,
    ...portfolioRoutes,
    ...translatedRoutes,
  ];

  const seen = new Set();
  return all.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
