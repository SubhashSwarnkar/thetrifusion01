import Page from "views/FAQPage";
import JsonLd from "components/JsonLd";
import { faqs } from "data/faqData";
import { faqPageJsonLd, pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/faq");

export default function RoutePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <Page />
    </>
  );
}
