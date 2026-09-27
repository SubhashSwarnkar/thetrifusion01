import { notFound } from "next/navigation";
import JsonLd from "components/JsonLd";
import TranslatedDocument from "components/TranslatedDocument";
import { getLocale } from "data/i18n";
import {
  hreflangLanguagesForPath,
  localizedPath,
  TRANSLATED_SERVICE_PATH,
} from "data/i18n/routes";
import { extractBlogFaqs } from "lib/blogFaqs";
import { breadcrumbSchema, faqSchema, serviceSchema } from "lib/schema";
import { buildMetadata } from "lib/seoConfig";

function stripTags(value) {
  return String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function offersFromHtml(html, path) {
  const re = /<h2\b[^>]*>([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2\b|$)/gi;
  const offers = [];
  let match;
  while ((match = re.exec(html))) {
    const title = stripTags(match[1]);
    const description = stripTags(match[2]).slice(0, 320);
    if (!title || !description) continue;
    const id = /id="([^"]+)"/.exec(match[0]);
    offers.push({
      title,
      description,
      url: id ? `${path}#${id[1]}` : path,
    });
  }
  return offers;
}

export function generateMetadata({ params }) {
  const locale = getLocale(params.lang);
  const service = locale?.service;
  if (!locale || !service) {
    return {
      title: "Not found",
      robots: { index: false, follow: true },
    };
  }

  return buildMetadata({
    title: service.metaTitle || service.title,
    description: service.description,
    path: localizedPath(locale.code, TRANSLATED_SERVICE_PATH),
    languages: hreflangLanguagesForPath(TRANSLATED_SERVICE_PATH),
    locale: locale.ogLocale,
  });
}

export default function TranslatedEvServicePage({ params }) {
  const locale = getLocale(params.lang);
  const service = locale?.service;
  if (!locale || !service?.content) notFound();

  const path = localizedPath(locale.code, TRANSLATED_SERVICE_PATH);
  const faqs = extractBlogFaqs(service.content);
  const crumbs = [
    { name: locale.ui.home, path: "/" },
    { name: locale.ui.services, path: "/services" },
    { name: service.breadcrumb || service.title, path },
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.title,
          serviceType: service.serviceType || service.title,
          description: service.description,
          path,
          inLanguage: locale.htmlLang,
          offers: offersFromHtml(service.content, path),
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "Place", name: "Worldwide" },
          ],
          provider: {
            "@type": "Organization",
            "@id": "https://thetrifusion.in/#organization",
            name: "TheTriFusion",
            legalName: "Trifusion Infotech Private Limited",
            url: "https://thetrifusion.in",
          },
        })}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {faqs.length ? <JsonLd data={faqSchema(faqs, locale.htmlLang)} /> : null}
      <TranslatedDocument
        locale={locale}
        englishPath={TRANSLATED_SERVICE_PATH}
        title={service.title}
        excerpt={service.description}
        html={service.content}
        breadcrumbs={crumbs}
      />
    </>
  );
}
