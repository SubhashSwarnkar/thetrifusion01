import Page from "views/SolutionsHubPage";
import JsonLd from "components/JsonLd";
import { seoLandingPages } from "data/seoLandingPages";
import { SITE_URL, breadcrumbJsonLd, pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/solutions");

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "TheTriFusion Digital Solutions",
  itemListElement: seoLandingPages.map((page, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: page.h1,
    url: `${SITE_URL}/solutions/${page.slug}`,
  })),
};

export default function RoutePage() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ])}
      />
      <Page />
    </>
  );
}
