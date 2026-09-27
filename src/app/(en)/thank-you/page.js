import Page from "views/ThankYouPage";
import { buildMetadata } from "lib/seoConfig";

export const metadata = buildMetadata({
  title: "Thanks | TheTriFusion",
  description: "Your project enquiry was received by the Jaipur team.",
  keywords: "thank you, TheTriFusion",
  path: "/thank-you",
  noIndex: true,
});

export default function RoutePage() {
  return <Page />;
}
