import { siteConfig } from "config/site";

/** @returns {import("next").MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
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
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
