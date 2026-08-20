import Page from "views/PricingPage";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/pricing");

export default function RoutePage() {
  return <Page />;
}
