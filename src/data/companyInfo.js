import { siteConfig } from "config/site";

export const LEGAL_NAME = siteConfig.legalName;
export const LEGAL_NAME_SHORT = siteConfig.legalNameShort;
export const WHATSAPP_NUMBER = siteConfig.whatsappNumber;
export const COMPANY_EMAIL = siteConfig.email;
export const COMPANY_PHONE_DISPLAY = siteConfig.phone;
export const LINKEDIN_URL = siteConfig.linkedin;
export const INSTAGRAM_URL = siteConfig.instagram;

export const HOME_FAQS = [
  {
    question: "Where is TheTriFusion located?",
    answer:
      "Trifusion Infotech Private Limited is based in Jaipur, Rajasthan. We serve clients across Rajasthan and India through remote collaboration.",
  },
  {
    question: "What does TheTriFusion build?",
    answer:
      "Core work: websites (often React/Next.js), mobile apps, UI/UX, and digital marketing. We also take specialized builds (fintech, EV charging, MLM CRM) on dedicated pages. We stay available after launch for hosting, fixes, and growth — not a one-off handoff.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Share your brief on the contact or discuss-project page. You get a free scoped estimate — usually within 24 hours — with timeline range and no surprise fees.",
  },
  {
    question: "Do you work with Bhilwara, Udaipur, Kota, or Ajmer clients?",
    answer:
      "Yes. Those cities are service areas from our Jaipur office — video, WhatsApp, and weekly demos. We do not claim storefronts there. See our pages for Bhilwara, Udaipur, Kota, and Ajmer under Solutions.",
  },
];

export const NAP = {
  name: siteConfig.legalName,
  brand: siteConfig.name,
  locality: siteConfig.city,
  region: siteConfig.region,
  country: siteConfig.countryName,
  email: siteConfig.email,
  phone: siteConfig.phone,
};

export const DEFAULT_DELIVERABLES = [
  "Product discovery & scope",
  "UI/UX design",
  "Development & integrations",
  "QA & testing",
  "Deployment & launch",
  "Maintenance & support",
];

export const DEFAULT_PROCESS = [
  {
    title: "Discovery",
    description:
      "We clarify goals, users, constraints, and success metrics before writing a line of code.",
  },
  {
    title: "Proposal",
    description:
      "You get a clear scope, timeline range, milestones, and commercial options — no vague promises.",
  },
  {
    title: "Design",
    description:
      "Wireframes and UI designs validate flows early so development stays focused.",
  },
  {
    title: "Development",
    description:
      "Iterative builds with regular demos keep stakeholders aligned through delivery.",
  },
  {
    title: "QA",
    description:
      "Functional, device, and regression checks reduce launch surprises.",
  },
  {
    title: "Launch & support",
    description:
      "We deploy, monitor, and stay available for fixes, iterations, and managed support.",
  },
];

export const DEFAULT_COST_FACTORS = [
  "Feature scope and complexity",
  "Design depth and number of unique screens",
  "Third-party integrations (payments, CRM, logistics)",
  "Timeline urgency and team size",
  "Content, catalog, and migration effort",
  "Ongoing maintenance and SLA needs",
];
