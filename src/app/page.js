import Page from "views/LandingPage";
import JsonLd from "components/JsonLd";
import { services } from "data/servicesData";
import { itemListSchema } from "lib/schema";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/");

export default function RoutePage() {
  return (
    <>
      <JsonLd
        data={itemListSchema({
          name: "TheTriFusion Services",
          items: services.slice(0, 8).map((service) => ({
            name: service.title,
            path: `/services/${service.slug}`,
          })),
        })}
      />
      <Page />
    </>
  );
}
