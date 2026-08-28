"use client";

import { usePathname } from "next/navigation";
import WhatsAppWidget from "components/WhatsAppWidget";
import { getServiceBySlug } from "data/servicesData";

export default function ContextualWhatsApp() {
  const pathname = usePathname() || "/";

  let message = "Hi TriFusion, I want a project consultation.";

  if (pathname.startsWith("/web-development")) {
    message = "Hi TriFusion, I want a website development quote from the Jaipur team.";
  } else if (pathname.startsWith("/android-app-development")) {
    message = "Hi TriFusion, I want an Android app development quote from the Jaipur team.";
  } else if (pathname.startsWith("/ios-app-development")) {
    message = "Hi TriFusion, I want an iOS app development quote from the Jaipur team.";
  } else if (pathname.startsWith("/white-label-development")) {
    message = "Hi TriFusion, I want to discuss white-label / partner development from Jaipur.";
  } else if (pathname.startsWith("/services/")) {
    const slug = pathname.replace("/services/", "").split("/")[0];
    const service = getServiceBySlug(slug);
    message =
      service?.whatsappMessage ||
      `Hi TriFusion, I need a consultation about ${slug.replace(/-/g, " ")}.`;
  } else if (pathname === "/appointment") {
    message = "Hi TriFusion, I want to book a discovery call.";
  } else if (pathname === "/contact" || pathname === "/discuss-project") {
    message = "Hi TriFusion, I want to discuss a project and get an estimate.";
  } else if (pathname.startsWith("/pricing")) {
    message = "Hi TriFusion, I want to discuss project pricing and starting ranges.";
  } else if (pathname.startsWith("/portfolio")) {
    message = "Hi TriFusion, I saw your portfolio work and want to discuss a new project.";
  }

  return <WhatsAppWidget defaultMessage={message} />;
}
