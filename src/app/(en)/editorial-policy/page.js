import Page from "views/EditorialPolicyPage";
import JsonLd from "components/JsonLd";
import { breadcrumbSchema } from "lib/schema";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/editorial-policy");

export default function RoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Editorial policy", path: "/editorial-policy" },
        ])}
      />
      <Page />
    </>
  );
}
