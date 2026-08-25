import AdsLandingPage from "views/AdsLandingPage";
import JsonLd from "components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "lib/schema";
import { pageMetadata } from "lib/seoConfig";
import { getAdsLandingByPath } from "data/adsLandingPages";

export function createAdsRoute(path) {
  const landing = getAdsLandingByPath(path);

  function RoutePage() {
    if (!landing) return null;

    return (
      <>
        <JsonLd
          data={breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: landing.serviceName, path: landing.path },
          ])}
        />
        <JsonLd
          data={serviceSchema({
            name: landing.serviceName,
            description: landing.intro,
            path: landing.path,
          })}
        />
        <JsonLd data={faqSchema(landing.faqs)} />
        <AdsLandingPage landing={landing} />
      </>
    );
  }

  return {
    metadata: pageMetadata(path),
    RoutePage,
  };
}
