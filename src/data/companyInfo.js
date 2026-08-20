import { siteConfig } from "config/site";

export const WHATSAPP_NUMBER = siteConfig.whatsappNumber;
export const COMPANY_EMAIL = siteConfig.email;
export const COMPANY_PHONE_DISPLAY = siteConfig.phone;
export const LINKEDIN_URL = siteConfig.linkedin;
export const INSTAGRAM_URL = siteConfig.instagram;

export const NAP = {
  name: siteConfig.name,
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
