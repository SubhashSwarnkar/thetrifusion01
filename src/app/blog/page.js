import Page from "views/BlogPage";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/blog");

export default function RoutePage() {
  return <Page />;
}
