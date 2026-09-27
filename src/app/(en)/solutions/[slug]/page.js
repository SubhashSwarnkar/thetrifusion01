import { notFound } from "next/navigation";
import Page from "views/SolutionLandingPage";
import JsonLd from "components/JsonLd";
import {
  getSeoLandingBySlug,
  seoLandingPages,
} from "data/seoLandingPages";
import { getBlogBySlug } from "data/blogData";
import { buildMetadata } from "lib/seoConfig";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "lib/schema";

const CITY_BY_SLUG_SUFFIX = {
  ajmer: "Ajmer",
  bhilwara: "Bhilwara",
  jaipur: "Jaipur",
  jodhpur: "Jodhpur",
  kota: "Kota",
  udaipur: "Udaipur",
};

function solutionCity(slug) {
  const suffix = String(slug || "").split("-").pop();
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
  });
}

export default function RoutePage({ params }) {
  const page = getSeoLandingBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: page.h1,
          description: page.metaDescription,
          path: `/solutions/${page.slug}`,
          ...(page.schema || {}),
          serviceType: page.schema?.serviceType || page.h1,
          ...(solutionCity(page.slug)
            ? {
                areaServed: [
                  { "@type": "City", name: solutionCity(page.slug) },
                  { "@type": "AdministrativeArea", name: "Rajasthan" },
                  { "@type": "Country", name: "India" },
                ],
              }
            : {}),
        })}
      />
      <JsonLd data={faqSchema(page.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: page.h1, path: `/solutions/${page.slug}` },
        ])}
      />
      <Page
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
