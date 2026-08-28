import Page from "views/ServiceDetailPage";
import JsonLd from "components/JsonLd";
import { getServiceBySlug, services } from "data/servicesData";
import { breadcrumbSchema, faqSchema, serviceSchema } from "lib/schema";
import { buildMetadata } from "lib/seoConfig";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function serviceMeta(service) {
  return {
    title:
      service.metaTitle ||
      `${service.bannerTitle || service.title} | TheTriFusion`,
    description:
      service.metaDescription ||
      service.shortDescription ||
      `${service.title} from TheTriFusion in Jaipur, Rajasthan — for businesses across India.`,
    keywords: service.keywords,
  };
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found | TheTriFusion",
      description: "The requested service page could not be found.",
      path: `/services/${params.slug}`,
      noIndex: true,
    });
  }

  const { title, description, keywords } = serviceMeta(service);

  return buildMetadata({
    title,
    description,
    keywords,
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
              name: service.bannerTitle || service.title,
              serviceType: service.serviceType || service.title,
              description:
                service.metaDescription ||
                service.shortDescription ||
                service.description,
              path: `/services/${service.slug}`,
              price: service.startingFrom || service.pricing?.basic,
              offers: service.services,
            })}
          />
          <JsonLd
            data={breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              {
                name: service.bannerTitle || service.title,
                path: `/services/${service.slug}`,
              },
            ])}
          />
          {service.faqs?.length ? <JsonLd data={faqSchema(service.faqs)} /> : null}
        </>
      ) : null}
      <Page />
    </>
  );
}
