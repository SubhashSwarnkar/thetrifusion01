"use client";

import { usePathname } from "next/navigation";
import WhatsAppButton from "components/WhatsAppButton";

export default function ContextualWhatsApp() {
  const pathname = usePathname() || "/";

  // Solution landings have in-page + sticky WhatsApp CTAs
  if (pathname.startsWith("/solutions/")) {
    return null;
  }

  let message = "Hi TriFusion, I want a project consultation.";

  if (pathname.startsWith("/services/")) {
    const slug = pathname.replace("/services/", "").split("/")[0];
    message = `Hi TriFusion, I need a consultation about ${slug.replace(/-/g, " ")}.`;
  } else if (pathname === "/appointment") {
    message = "Hi TriFusion, I want to book a discovery call.";
  } else if (pathname === "/contact" || pathname === "/discuss-project") {
    message = "Hi TriFusion, I want to discuss a project and get an estimate.";
  }

  return <WhatsAppButton message={message} />;
}
