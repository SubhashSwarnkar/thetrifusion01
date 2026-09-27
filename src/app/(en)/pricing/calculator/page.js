import Page from "views/PriceCalculatorPage";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/pricing/calculator");

export default function RoutePage() {
  return <Page />;
}
