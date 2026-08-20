import Page from "views/TeamPage";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/team");

export default function RoutePage() {
  return <Page />;
}
