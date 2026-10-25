import { notFound } from "next/navigation";
import Page from "views/SolutionLandingPage";
import JsonLd from "components/JsonLd";
import {
  getSeoLandingBySlug,
  seoLandingPages,
} from "data/seoLandingPages";
import {
  getBlogBySlug,
  getRelatedGuidesForSolution,
} from "data/blogData";
import { buildMetadata } from "lib/seoConfig";
import { isNoindexCitySolutionSlug } from "data/cityLandingRobots";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  serviceSchema,
} from "lib/schema";

const CITY_BY_SLUG_SUFFIX = {
  ajmer: { city: "Ajmer", region: "Rajasthan" },
  bhilwara: { city: "Bhilwara", region: "Rajasthan" },
  jaipur: { city: "Jaipur", region: "Rajasthan" },
  jodhpur: { city: "Jodhpur", region: "Rajasthan" },
  kota: { city: "Kota", region: "Rajasthan" },
  udaipur: { city: "Udaipur", region: "Rajasthan" },
  delhi: { city: "Delhi", region: "Delhi" },
  mumbai: { city: "Mumbai", region: "Maharashtra" },
  bangalore: { city: "Bengaluru", region: "Karnataka" },
};

function solutionCity(page) {
  if (page?.serviceAreaCity) {
    return {
      city: page.serviceAreaCity,
      region: page.serviceAreaRegion || "Rajasthan",
    };
  }
  const suffix = String(page?.slug || "").split("-").pop();
  return CITY_BY_SLUG_SUFFIX[suffix] || null;
}

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }) {
  const page = getSeoLandingBySlug(params.slug);

  if (!page) {
    return {
      title: "Solution Not Found | TheTriFusion",
      robots: { index: false, follow: true },
    };
  }

  return buildMetadata({
    title: page.title,
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...(page.secondaryKeywords || [])].join(
      ", "
    ),
    path: `/solutions/${page.slug}`,
    image: `/solutions/${page.slug}/opengraph-image`,
    // Non-Jaipur templated city landings: live but noindex (doorway risk).
    noIndex: isNoindexCitySolutionSlug(page.slug),
  });
}

export default function RoutePage({ params }) {
  const page = getSeoLandingBySlug(params.slug);

  if (!page) {
    notFound();
  }

  const city = solutionCity(page);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: page.h1,
          description: page.metaDescription,
          path: `/solutions/${page.slug}`,
          ...(page.schema || {}),
          serviceType: page.schema?.serviceType || page.h1,
          ...(city
            ? {
                areaServed: [
                  { "@type": "City", name: city.city },
                  { "@type": "AdministrativeArea", name: city.region },
                  { "@type": "Country", name: "India" },
                ],
              }
            : {}),
        })}
      />
      {city ? <JsonLd data={localBusinessSchema()} /> : null}
      <JsonLd data={faqSchema(page.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: page.h1, path: `/solutions/${page.slug}` },
        ])}
      />
      <Page
        relatedGuides={getRelatedGuidesForSolution(page.slug, 6)}
        relatedBlog={
          page.relatedBlogSlug
            ? (() => {
                const post = getBlogBySlug(page.relatedBlogSlug);
                return post
                  ? { slug: post.slug, title: post.title, excerpt: post.excerpt }
                  : null;
              })()
            : null
        }
      />
    </>
  );
}
