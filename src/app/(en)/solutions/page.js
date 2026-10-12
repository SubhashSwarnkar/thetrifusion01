import Page from "views/SolutionsHubPage";
import JsonLd from "components/JsonLd";
import { seoLandingPages } from "data/seoLandingPages";
import { REDIRECTED_SOLUTION_SLUGS } from "lib/solutionRedirects";
import { SITE_URL, breadcrumbJsonLd, pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/solutions");

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "TheTriFusion Digital Solutions",
  itemListElement: seoLandingPages
    .filter(
      (page) =>
        page.slug !== "online-store-development" &&
        !REDIRECTED_SOLUTION_SLUGS.has(page.slug)
    )
    .map((page, index) => ({
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
