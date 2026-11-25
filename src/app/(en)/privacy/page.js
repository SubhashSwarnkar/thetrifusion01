import Page from "views/PrivacyPage";
import JsonLd from "components/JsonLd";
import { breadcrumbSchema } from "lib/schema";
import { buildMetadata } from "lib/seoConfig";

export const metadata = buildMetadata({
  title: "Privacy Policy | TheTriFusion",
  description:
    "How Trifusion Infotech Pvt Ltd (TheTriFusion) in Jaipur collects, uses and stores enquiry and website data when you contact us or use thetrifusion.in.",
  keywords: "privacy policy, TheTriFusion",
  path: "/privacy",
});

export default function RoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <Page />
    </>
  );
}
