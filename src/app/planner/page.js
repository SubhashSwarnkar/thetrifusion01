import Page from "views/PagePlannerPage";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/planner");

export default function RoutePage() {
  return <Page />;
}
