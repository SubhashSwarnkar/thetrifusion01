import { siteConfig } from "config/site";

/** Jaipur NAP only. City landings are service areas, never fake local offices. */
export const NAP = siteConfig.addressLine;
export const PHONE = siteConfig.phone;
export const HOURS = siteConfig.hoursLabel;
export const UPDATED = "2026-10-17";

export const PRICES = {
  website: { basic: "₹15,000", standard: "₹35,000", premium: "₹75,000" },
  software: { basic: "₹1,00,000", standard: "₹2,50,000", premium: "₹5,00,000" },
  mobile: { basic: "₹50,000" },
  ecommerce: {
    website: "₹25,000",
    android: "₹35,000",
    ios: "₹45,000",
    logistics: "₹99,000",
  },
  digitalMarketing: { basic: "₹15,000", standard: "₹30,000", premium: "₹60,000" },
  fintech: { basic: "₹99,999" },
};

export function officeFaq(city) {
  return {
    question: `Do you have an office in ${city}?`,
    answer: `No. TheTriFusion’s only office is at ${NAP}. Phone ${PHONE}. Hours: ${HOURS}. ${city} is a service area: video calls, WhatsApp, weekly demos, and travel when a kickoff or launch needs to be on site. We will not print a ${city} address for TheTriFusion, and we will not open a Google Business Profile that pretends we sit there.`,
  };
}

export function gstFaq(city) {
  return {
    question: `Do ${city} clients get a GST invoice?`,
    answer: `Yes. Invoices are GST invoices from Trifusion Infotech Private Limited in Jaipur. Hindi and English are both fine for the project. Your ${city} GSTIN stays on your own site, store, or app — we do not borrow it.`,
  };
}

export function siblingCitySlugs(serviceKey, selfSlug, extras = []) {
  // Jaipur HQ only — other city URLs 301 to services and must not be linked.
  const clusters = {
    website: ["website-development-company-jaipur"],
    software: ["custom-software-development-jaipur"],
    mobile: ["mobile-app-development-company-jaipur"],
    ecommerce: ["ecommerce-website-development-jaipur"],
    digitalMarketing: ["digital-marketing-company-jaipur"],
    fintech: ["fintech-app-development-jaipur"],
  };
  return [...new Set([...(clusters[serviceKey] || []), ...extras])].filter(
    (slug) => slug !== selfSlug
  );
}
