import HtmlSitemapPage from "views/HtmlSitemapPage";
import JsonLd from "components/JsonLd";
import { breadcrumbSchema } from "lib/schema";
import { NOINDEX_PATHS, pageMetadata, pages } from "lib/seoConfig";
import { services } from "data/servicesData";
import { seoLandingPages, getSeoLandingBySlug } from "data/seoLandingPages";
import { REDIRECTED_SOLUTION_SLUGS } from "lib/solutionRedirects";
import { getPublishedBlogPosts } from "data/blogData";
import { fintechProductPages } from "data/fintechProductPages";

export const metadata = pageMetadata("/sitemap");

const CORE_LABELS = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/solutions": "Solutions",
  "/portfolio": "Portfolio",
  "/pricing": "Pricing",
  "/contact": "Contact",
  "/blog": "Blog",
  "/faq": "FAQ",
  "/editorial-policy": "Editorial policy",
  "/privacy": "Privacy",
  "/terms": "Terms",
  "/sitemap": "HTML sitemap",
};

export default function RoutePage() {
  const core = Object.keys(pages)
    .filter((path) => !NOINDEX_PATHS.has(path))
    .map((path) => ({
      href: path,
      label: CORE_LABELS[path] || path,
    }));

  const serviceItems = [
    ...services.map((service) => ({
      href: `/services/${service.slug}`,
      label: service.title,
    })),
    ...fintechProductPages.map((page) => ({
      href: page.path,
      label: page.breadcrumbName,
    })),
  ];

  const solutionItems = seoLandingPages
    .filter(
      (raw) =>
        raw.slug !== "online-store-development" &&
        !REDIRECTED_SOLUTION_SLUGS.has(raw.slug)
    )
    .map((raw) => {
      const page = getSeoLandingBySlug(raw.slug);
      return {
        href: `/solutions/${raw.slug}`,
        label: page?.navLabel || page?.h1 || raw.slug,
      };
    });

  const blogItems = getPublishedBlogPosts().map((post) => ({
    href: `/blog/${post.slug}`,
    label: post.title,
  }));

  const groups = [
    { title: "Company", items: core },
    { title: "Services", items: serviceItems },
    { title: "Solutions", items: solutionItems },
    { title: "India guides", items: blogItems },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sitemap", path: "/sitemap" },
        ])}
      />
      <HtmlSitemapPage groups={groups} />
    </>
  );
}
