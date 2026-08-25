import Page from "views/ServiceDetailPage";
import JsonLd from "components/JsonLd";
import { getServiceBySlug, services } from "data/servicesData";
import { breadcrumbSchema, serviceSchema } from "lib/schema";
import { buildMetadata } from "lib/seoConfig";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found | TheTriFusion",
      description: "The requested service page could not be found.",
      keywords: "services, TheTriFusion",
      path: `/services/${params.slug}`,
      noIndex: true,
    });
  }

  const title = `${service.title} Services | Jaipur | TheTriFusion`;
  const description =
    service.shortDescription ||
    `${service.title} from TheTriFusion in Jaipur, Rajasthan — for businesses across India.`;

  return buildMetadata({
    title,
    description,
    keywords: `${service.title} Jaipur, ${service.slug}, IT services Rajasthan, TheTriFusion`,
    path: `/services/${service.slug}`,
  });
}

export default function RoutePage({ params }) {
  const service = getServiceBySlug(params.slug);

  return (
    <>
      {service ? (
        <>
          <JsonLd
            data={serviceSchema({
              name: service.title,
              description: service.shortDescription || service.description,
              path: `/services/${service.slug}`,
            })}
          />
          <JsonLd
            data={breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title, path: `/services/${service.slug}` },
            ])}
          />
        </>
      ) : null}
      <Page />
    </>
  );
}
