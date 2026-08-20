import Page from "views/SolutionLandingPage";
import JsonLd from "components/JsonLd";
import {
  getSeoLandingBySlug,
  seoLandingPages,
} from "data/seoLandingPages";
import { buildMetadata } from "lib/seoConfig";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "lib/schema";

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }) {
  const page = getSeoLandingBySlug(params.slug);

  if (!page) {
    return buildMetadata({
      title: "Solution Not Found | TheTriFusion",
      description: "The requested solution page could not be found.",
      keywords: "solutions, TheTriFusion",
      path: `/solutions/${params.slug}`,
      noIndex: true,
    });
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

  return (
    <>
      {page ? (
        <>
          <JsonLd
            data={serviceSchema({
              name: page.h1,
              description: page.metaDescription,
              path: `/solutions/${page.slug}`,
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
        </>
      ) : null}
      <Page />
    </>
  );
}
