import Page from "views/LandingPage";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/");

export default function RoutePage() {
  return <Page />;
}
