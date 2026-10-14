import { serviceNav } from "./serviceNav";

/** Published starting prices from /pricing and service pages. Do not invent. */
export const SERVICE_PRICE_FROM = {
  "software-development": 100000,
  "website-development": 15000,
  "mobile-app-development": 50000,
  "ios-app-development": 250000,
  "android-app-development": 250000,
  "ai-development": 200000,
  devops: 100000,
  "ui-ux-design": 20000,
  "graphic-design": 10000,
  branding: 30000,
  "digital-marketing": 15000,
  rpa: 50000,
  salesforce: 80000,
  "business-modernization": 150000,
  "on-demand": 50000,
  "mlm-crm-development": 350000,
  "fintech-app-development": 99999,
  "ev-charging-app-development": 450000,
  "crm-erp-development": 300000,
};

export const ECOMMERCE_PRICE_FROM = 25000;

export function formatInrFrom(amount) {
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
  return `From ${formatted}`;
}

export const SERVICE_HUB_GROUPS = [
  {
    id: "build",
    heading: "Build",
    intro:
      "Websites, apps, and custom software scoped from Jaipur for Indian teams.",
    slugs: [
      "software-development",
      "website-development",
      "mobile-app-development",
      "ios-app-development",
      "android-app-development",
    ],
  },
  {
    id: "industry",
    heading: "Industry",
    intro:
      "Vertical products: fintech rails, EV charging CMS, MLM, CRM/ERP, and extra developers.",
    slugs: [
      "fintech-app-development",
      "ev-charging-app-development",
      "mlm-crm-development",
      "crm-erp-development",
      "on-demand",
    ],
  },
  {
    id: "grow",
    heading: "Grow",
    intro: "Brand, design, and demand once the product exists.",
    slugs: ["digital-marketing", "branding", "graphic-design", "ui-ux-design"],
  },
  {
    id: "automate",
    heading: "Automate",
    intro: "AI, bots, Salesforce, cloud, and replacing spreadsheet ops.",
    slugs: [
      "ai-development",
      "rpa",
      "salesforce",
      "devops",
      "business-modernization",
    ],
  },
];

export function hubServiceBySlug(slug) {
  const item = serviceNav.find((service) => service.slug === slug);
  if (!item) return null;
  const priceFrom = SERVICE_PRICE_FROM[slug];
  return {
    ...item,
    href: `/services/${item.slug}`,
    priceFrom,
    priceFromLabel: Number.isFinite(priceFrom)
      ? formatInrFrom(priceFrom)
      : null,
  };
}

export function htmlSitemapServiceGroups() {
  return SERVICE_HUB_GROUPS.map((group) => ({
    ...group,
    items: group.slugs.map(hubServiceBySlug).filter(Boolean),
  }));
}
