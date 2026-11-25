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
  "erp-software-development": 600000,
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
      "Vertical products: fintech rails, EV charging CMS, MLM, CRM, ERP, and extra developers.",
    slugs: [
      "fintech-app-development",
      "ev-charging-app-development",
      "mlm-crm-development",
      "crm-erp-development",
      "erp-software-development",
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

/** Buyer-routing FAQs for /services (visible + FAQPage JSON-LD). */
export const SERVICE_HUB_FAQS = [
  {
    question: "Do I need custom CRM or full ERP software?",
    answer:
      "Choose custom CRM development when the job is pipelines, quotations and WhatsApp follow-ups. Choose ERP software development when you need GST finance, inventory, MRP or multi-branch books. Many teams start with CRM and add ERP modules later.",
  },
  {
    question: "Which page is for BBPS, AEPS, DMT or recharge software?",
    answer:
      "Start on fintech app development for a multi-rail retailer stack. Open the child pages when the brief is only one rail: BBPS software, AEPS software, DMT software, or recharge software. TheTriFusion builds the panels; you bring the licensed bank, BBPOU or aggregator partner.",
  },
  {
    question: "Where do I start for EV charging / CSMS software?",
    answer:
      "Use EV charging app development for white-label CSMS, driver apps, OCPP and OCPI. PlugOne is a live client case study on the portfolio — we are the software studio, not a competing public network.",
  },
  {
    question: "iOS, Android, or cross-platform mobile apps?",
    answer:
      "Use mobile app development when both stores ship in one release. Use iOS app development or Android app development when one store is the product. UI and flows sit on UI/UX design.",
  },
  {
    question: "Website, ecommerce store, or custom software?",
    answer:
      "Company and lead-gen sites sit on website development. Product catalogues with checkout sit on ecommerce website development. Logins, roles and ops tools sit on custom software development.",
  },
  {
    question: "When should I pick AI development vs RPA?",
    answer:
      "AI development covers WhatsApp bots, RAG and agents with a human review step. RPA covers deterministic invoice, Tally and CRM bots. If spreadsheets still run the process, start with business modernization before adding either.",
  },
  {
    question: "Do you also offer design, branding and dedicated developers?",
    answer:
      "Yes. Branding covers identity systems; graphic design covers campaign creatives; UI/UX design covers product screens. Hire dedicated developers (on-demand) when you need named React, Node or mobile seats inside your sprint.",
  },
];
