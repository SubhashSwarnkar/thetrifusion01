import Page from "views/ServicesPage";
import JsonLd from "components/JsonLd";
import { services } from "data/servicesData";
import { SERVICE_HUB_FAQS } from "data/serviceHub";
import { breadcrumbSchema, faqSchema, itemListSchema } from "lib/schema";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/services");

export default function RoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd
        data={itemListSchema({
          name: "IT and digital services",
          items: services.map((service) => ({
            name: service.title,
            path: `/services/${service.slug}`,
          })),
        })}
      />
      <JsonLd data={faqSchema(SERVICE_HUB_FAQS)} />
      <Page />
    </>
  );
}
