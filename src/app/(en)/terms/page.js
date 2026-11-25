import Page from "views/TermsPage";
import JsonLd from "components/JsonLd";
import { breadcrumbSchema } from "lib/schema";
import { buildMetadata } from "lib/seoConfig";

export const metadata = buildMetadata({
  title: "Terms of Service | TheTriFusion",
  description:
    "Terms for using thetrifusion.in and hiring Trifusion Infotech Pvt Ltd (TheTriFusion) in Jaipur for software, websites, apps and digital projects.",
  keywords: "terms of service, TheTriFusion",
  path: "/terms",
});

export default function RoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      <Page />
    </>
  );
}
