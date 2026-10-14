import { notFound } from "next/navigation";
import FintechProductPage from "views/FintechProductPage";
import JsonLd from "components/JsonLd";
import {
  FINTECH_PRODUCT_SLUGS,
  getFintechProductBySlug,
} from "data/fintechProductPages";
import { breadcrumbSchema, faqSchema, serviceSchema } from "lib/schema";
import { buildMetadata } from "lib/seoConfig";

export function generateStaticParams() {
  return FINTECH_PRODUCT_SLUGS.map((product) => ({ product }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const page = getFintechProductBySlug(params.product);
  if (!page) {
    return { title: "Not found", robots: { index: false, follow: true } };
  }
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    path: page.path,
  });
}

export default function RoutePage({ params }) {
  const page = getFintechProductBySlug(params.product);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: page.h1,
          serviceType: page.serviceType,
          description: page.metaDescription,
          path: page.path,
          price: 99999,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Fintech", path: "/services/fintech-app-development" },
          { name: page.breadcrumbName, path: page.path },
        ])}
      />
      <JsonLd data={faqSchema(page.faqs)} />
      <FintechProductPage slug={params.product} />
    </>
  );
}
