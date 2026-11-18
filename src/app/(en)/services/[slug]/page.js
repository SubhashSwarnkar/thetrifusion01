import { notFound } from "next/navigation";
import Page from "views/ServiceDetailPage";
import JsonLd from "components/JsonLd";
import LanguageSwitcher from "components/LanguageSwitcher";
import { getServiceBySlug, services } from "data/servicesData";
import { getMarkdownGuidesForService } from "lib/blogMarkdown";
import { hreflangLanguagesForPath } from "data/i18n/routes";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  softwareApplicationSchema,
  webPageSchema,
} from "lib/schema";
import { buildMetadata } from "lib/seoConfig";
import { absoluteSiteUrl } from "config/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

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
    notFound();
  }

  const { title, description, keywords } = serviceMeta(service);
  const path = `/services/${service.slug}`;
  const languages = hreflangLanguagesForPath(path);

  return buildMetadata({
    title,
    description,
    keywords,
    path,
    ...(languages ? { languages } : {}),
  });
}

export default function RoutePage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const pageUrl = absoluteSiteUrl(path);
  const { title: metaTitle } = serviceMeta(service);
  const shortServiceName =
    service.schemaServiceName ||
    service.breadcrumbName ||
    service.serviceType ||
    service.title;

  return (
    <>
      {service ? (
        <>
          <JsonLd
            data={serviceSchema({
              name: shortServiceName,
              serviceType: service.serviceType || shortServiceName,
              description:
                service.metaDescription ||
                service.shortDescription ||
                service.description,
              path,
              price: service.omitSchemaPrice
                ? undefined
                : service.startingFrom || service.pricing?.basic,
              pricedOffers: service.schemaPricedOffers,
              additionalOffers: service.schemaAdditionalOffers,
              offers: service.detailSections?.length
                ? service.detailSections.flatMap((section) => [
                    {
                      title: section.heading,
                      description: section.schemaDescription,
                      url: `${path}#${section.id}`,
                    },
                    ...(section.roles || [])
                      .filter((role) => role.catalogTitle)
                      .map((role) => ({
                        title: role.catalogTitle,
                        description: role.schemaDescription,
                        url: `${path}#${role.id}`,
                      })),
                  ])
                : service.services,
              areaServed: service.schemaAreaServed,
              provider: service.schemaProvider,
              subjectOf: service.subjectOfCaseStudies || [],
              inLanguage: hreflangLanguagesForPath(path) ? "en-IN" : undefined,
            })}
          />
          <JsonLd
            data={breadcrumbSchema(
              [
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                {
                  name: shortServiceName,
                  path,
                },
              ],
              { id: `${pageUrl}#breadcrumb` }
            )}
          />
          <JsonLd
            data={webPageSchema({
              path,
              name: metaTitle,
              dateModified: service.contentUpdatedAt,
              aboutId: `${pageUrl}#service`,
              breadcrumbId: `${pageUrl}#breadcrumb`,
            })}
          />
          {service.faqs?.length ? (
            <JsonLd
              data={faqSchema(
                service.faqs,
                hreflangLanguagesForPath(path) ? "en-IN" : undefined
              )}
            />
          ) : null}
          {service.softwareApplication ? (
            <JsonLd
              data={softwareApplicationSchema({
                ...service.softwareApplication,
                path,
                price:
                  service.softwareApplication.price ??
                  (service.omitSchemaPrice
                    ? undefined
                    : service.startingFrom || service.pricing?.basic),
              })}
            />
          ) : null}
        </>
      ) : null}
      <Page
        languageSwitcher={
          hreflangLanguagesForPath(`/services/${params.slug}`) ? (
            <LanguageSwitcher
              path={`/services/${params.slug}`}
              current="en"
            />
          ) : null
        }
        relatedGuides={getMarkdownGuidesForService(service.slug, 3)}
      />
    </>
  );
}
