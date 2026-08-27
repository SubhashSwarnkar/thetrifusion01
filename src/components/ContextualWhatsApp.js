"use client";

import { usePathname } from "next/navigation";
import WhatsAppButton from "components/WhatsAppButton";

export default function ContextualWhatsApp() {
  const pathname = usePathname() || "/";

  // Solution landings have in-page + sticky WhatsApp CTAs
  if (pathname.startsWith("/solutions/")) {
    return null;
  }
  if (
    pathname.startsWith("/web-development") ||
    pathname.startsWith("/android-app-development") ||
    pathname.startsWith("/ios-app-development") ||
    pathname.startsWith("/white-label-development")
  ) {
    return null;
  }

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
    message = `Hi TriFusion, I need a consultation about ${slug.replace(/-/g, " ")}.`;
  } else if (pathname === "/appointment") {
    message = "Hi TriFusion, I want to book a discovery call.";
  } else if (pathname === "/contact" || pathname === "/discuss-project") {
    message = "Hi TriFusion, I want to discuss a project and get an estimate.";
  }

  return <WhatsAppButton message={message} />;
}
