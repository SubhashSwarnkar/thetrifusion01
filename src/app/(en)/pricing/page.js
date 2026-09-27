import Page from "views/PricingPage";
import JsonLd from "components/JsonLd";
import { breadcrumbSchema } from "lib/schema";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/pricing");

export default function RoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <Page />
    </>
  );
}
