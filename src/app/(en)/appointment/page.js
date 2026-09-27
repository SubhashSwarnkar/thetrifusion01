import Page from "views/AppointmentPage";
import { pageMetadata } from "lib/seoConfig";

export const metadata = pageMetadata("/appointment");

export default function RoutePage() {
  return <Page />;
}
