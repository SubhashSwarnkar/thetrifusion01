import Page from "views/ProjectPage";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/portfolio");

export default function RoutePage() {
  return <Page />;
}
