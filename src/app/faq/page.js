import Page from "views/FAQPage";
import JsonLd from "components/JsonLd";
import { faqs } from "data/faqData";
import { breadcrumbSchema, faqSchema } from "lib/schema";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/faq");

export default function RoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />
      <Page />
    </>
  );
}
