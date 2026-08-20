import Page from "views/DiscussProjectPage";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/discuss-project");

export default function RoutePage() {
  return <Page />;
}
