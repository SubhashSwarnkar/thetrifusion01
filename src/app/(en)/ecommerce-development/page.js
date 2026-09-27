import EcommerceDevelopmentPage from "views/EcommerceDevelopmentPage";
import JsonLd from "components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  serviceSchema,
} from "lib/schema";
import { buildMetadata } from "lib/seoConfig";
import { absoluteSiteUrl } from "config/site";
import {
  ecommerceFaqs,
  ecommercePackages,
  ecommercePage,
  ecommerceStoreTypes,
  launchGuarantee,
} from "data/ecommerceDevelopmentData";

const PATH = ecommercePage.path;

export const metadata = buildMetadata({
  title: ecommercePage.metaTitle,
  description: ecommercePage.metaDescription,
  keywords: ecommercePage.keywords,
  path: PATH,
  image: ecommercePage.heroImage,
});

export default function RoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: ecommercePage.serviceName, path: PATH },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: ecommercePage.serviceName,
          serviceType: "Ecommerce Development",
          description: ecommercePage.metaDescription,
          path: PATH,
          pricedOffers: ecommercePackages.map((pkg) => ({
            name: `${pkg.name} ecommerce — live in 48 hours or 50% refund`,
            description: pkg.summary,
            price: pkg.price,
            url: `${PATH}#${pkg.id}`,
          })),
          offers: ecommercePackages.map((pkg) => ({
            title: `${pkg.name} (${pkg.priceLabel})`,
            description: pkg.summary,
          })),
        })}
      />
      <JsonLd data={faqSchema(ecommerceFaqs)} />
      <JsonLd
        data={itemListSchema({
          name: "Ecommerce store types we build",
          items: ecommerceStoreTypes.map((store) => ({
            name: store.name,
            path: `${PATH}#${store.id}`,
          })),
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Offer",
          name: launchGuarantee.headline,
          description: launchGuarantee.subheadline,
          url: absoluteSiteUrl(`${PATH}#guarantee`),
          priceCurrency: "INR",
          price: "25000",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "TheTriFusion",
          },
        }}
      />
      <EcommerceDevelopmentPage />
    </>
  );
}
