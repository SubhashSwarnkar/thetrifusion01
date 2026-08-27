import Page from "views/TeamPage";
import JsonLd from "components/JsonLd";
import { breadcrumbSchema } from "lib/schema";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/team");

export default function RoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Team", path: "/team" },
        ])}
      />
      <Page />
    </>
  );
}
