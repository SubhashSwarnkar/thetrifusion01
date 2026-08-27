import {
  DEFAULT_COST_FACTORS,
  DEFAULT_DELIVERABLES,
  DEFAULT_PROCESS,
} from "./companyInfo";

/** Per-slug conversion/trust fields merged onto base landing pages */
export const landingEnrichment = {
  "best-software-company-india": {
    title:
      "How to Choose a Software Company in India | Buyer Guide | TheTriFusion",
    h1: "How to Choose a Software Company in India",
    metaDescription:
      "A practical buyer guide to evaluating software companies in India: portfolio, process, security, communication, post-launch support — plus how TheTriFusion works with startups and SMEs.",
    primaryKeyword: "software company in India",
    intro:
      "Searching for the “best software company in India” usually means you need a reliable partner — not a slogan. Use this guide to evaluate agencies on proof, process, and fit, then see how TheTriFusion approaches delivery for startups and growing businesses.",
    outcomeLine:
      "Get a clear scope review and delivery plan before you commit budget.",
    whatsappMessage:
      "Hi TriFusion, I want help evaluating and scoping a software project in India.",
    audiences: [
      "Founders validating an MVP",
      "SMEs modernizing operations",
      "Retailers launching ecommerce",
      "Teams replacing spreadsheet workflows",
    ],
    timelineRange:
      "Most website MVPs: 3–8 weeks. Custom software or ecommerce builds: 6–16+ weeks depending on scope.",
    relatedPortfolioIds: [
      "dailyconcepts-ecommerce-pos",
      "meditative-yoga-platform",
      "applab-mobile-app",
    ],
    buyerGuide: true,
    criteria: [
      {
        title: "Relevant portfolio, not generic mockups",
        body: "Ask for projects similar to yours — ecommerce, apps, portals, or industry workflows. Review live URLs, responsibilities, and outcomes.",
      },
      {
        title: "Domain experience and discovery depth",
        body: "Strong partners ask about users, edge cases, and operations before quoting. Weak partners jump straight to a fixed price with vague scope.",
      },
      {
        title: "Transparent process and milestones",
        body: "Look for discovery → proposal → design → development → QA → launch/support. You should know what you get at each stage.",
      },
      {
        title: "Security and ownership clarity",
        body: "Confirm source-code ownership, credentials handover, backups, and how sensitive data is handled.",
      },
      {
        title: "Communication cadence",
        body: "Weekly demos, shared task boards, and a named point of contact beat long silent stretches between invoices.",
      },
      {
        title: "Post-launch support",
        body: "Ask what happens after go-live: bug windows, maintenance plans, monitoring, and response expectations.",
      },
    ],
    sections: [
      {
        title: "How TheTriFusion approaches delivery",
        body: "We start with discovery and a written scope, then design and build in visible iterations. You get demo checkpoints, clear ownership of deliverables, and optional managed support after launch — whether the project is a marketing site, ecommerce store, mobile app, or custom business software.",
      },
      {
        title: "Project types we are a strong fit for",
        body: "Startup MVPs, SME websites, ecommerce/online stores, mobile apps, CRM/ERP-style internal tools, and digital marketing paired with product delivery. If you need a 200-person enterprise program with multi-year SLAs, we will tell you honestly when another model fits better.",
      },
      {
        title: "Proof over adjectives",
        body: "Instead of claiming to be #1, we show process, portfolio work, pricing transparency tools, and a consultation focused on your constraints. That is how buyers should evaluate any software company in India — including us.",
      },
    ],
    faqs: [
      {
        question: "What should I prepare before contacting a software company?",
        answer:
          "A short brief helps: business goal, target users, must-have features, references/competitors, approximate timeline, and budget range. Even rough notes improve scoping quality.",
      },
      {
        question: "How does TheTriFusion quote projects?",
        answer:
          "After discovery we share scope options, timeline ranges, and cost factors. Exact pricing depends on features, design depth, integrations, and support needs — we avoid fake one-price-fits-all claims.",
      },
      {
        question: "Where is TheTriFusion based?",
        answer:
          "Jaipur, Rajasthan, India. We work with clients across India and internationally through remote collaboration.",
      },
    ],
    cta: "Book a discovery / scope review",
    primaryCtaLabel: "Get a project estimate",
    primaryCtaHref: "/estimate",
  },
  "ecommerce-website-development": {
    outcomeLine:
      "Go live with a store that handles catalog, checkout, and orders — then grow with SEO and ads.",
    whatsappMessage: "Hi TriFusion, I need an ecommerce website consultation.",
    audiences: [
      "D2C brands",
      "Retailers going online",
      "Wholesalers needing B2B catalogs",
      "Founders replacing Instagram-only selling",
    ],
    timelineRange:
      "Typical ecommerce MVP: 4–10 weeks. Complex catalogs/marketplaces: longer, delivered in phases.",
    relatedPortfolioIds: ["dailyconcepts-ecommerce-pos", "resto-restaurant-website"],
    primaryCtaLabel: "Get a project estimate",
    primaryCtaHref: "/estimate",
  },
  "online-store-development": {
    outcomeLine:
      "Launch a mobile-first online store with checkout, inventory, and admin control.",
    whatsappMessage:
      "Hi TriFusion, I need online store development consultation.",
    audiences: [
      "Startups launching a first store",
      "Local retailers expanding online",
      "Service brands adding product sales",
      "Teams planning marketplace features later",
    ],
    timelineRange:
      "Lean online store: about 3–8 weeks. Marketplace features: phased after MVP.",
    relatedPortfolioIds: ["dailyconcepts-ecommerce-pos", "dentista-dental-clinic"],
    primaryCtaLabel: "Get a project estimate",
    primaryCtaHref: "/estimate",
  },
  "digital-marketing-agency": {
    outcomeLine:
      "Align SEO, ads, and landing pages so marketing spend turns into inquiries.",
    whatsappMessage: "Hi TriFusion, I need a digital marketing consultation.",
    audiences: [
      "Service businesses needing leads",
      "Ecommerce brands needing traffic",
      "SaaS/software teams needing demos",
      "Local businesses expanding online",
    ],
    timelineRange:
      "Campaign setup: 1–3 weeks. SEO compounds over months with consistent content and technical work.",
    relatedPortfolioIds: ["meditative-yoga-platform", "travelix-travel-booking-website"],
    deliverables: [
      "SEO audit & on-page plan",
      "Ads account setup & tracking",
      "Landing page recommendations",
      "Content calendar basics",
      "Weekly/biweekly reporting",
      "Conversion improvements",
    ],
    primaryCtaLabel: "Book a discovery call",
    primaryCtaHref: "/appointment",
  },
  "custom-software-development-company": {
    outcomeLine:
      "Replace spreadsheet chaos with software built around your real workflows.",
    whatsappMessage:
      "Hi TriFusion, I need custom software development consultation.",
    audiences: [
      "SMEs with unique operations",
      "Manufacturers & distributors",
      "Service companies digitizing processes",
      "Product teams building SaaS MVPs",
    ],
    timelineRange:
      "Focused MVP modules: 6–12 weeks. Broader platforms: phased roadmaps over multiple sprints.",
    relatedPortfolioIds: ["applab-mobile-app", "dailyconcepts-ecommerce-pos"],
    primaryCtaLabel: "Get a project estimate",
    primaryCtaHref: "/estimate",
  },
  "msp-managed-it-services": {
    outcomeLine:
      "Keep websites and apps stable with proactive maintenance and clear support.",
    whatsappMessage:
      "Hi TriFusion, I need managed IT / MSP support consultation.",
    audiences: [
      "Businesses with live websites/apps",
      "Teams without in-house DevOps",
      "Stores needing uptime & updates",
      "Clients inheriting vendor-built software",
    ],
    timelineRange:
      "Onboarding audit: about 1–2 weeks, then ongoing monthly support cycles.",
    relatedPortfolioIds: ["meditative-yoga-platform", "alime-photography-website"],
    deliverables: [
      "Health audit & priority list",
      "Updates & security patches",
      "Uptime / error monitoring",
      "Backup verification",
      "Bug-fix window",
      "Monthly status summary",
    ],
    primaryCtaLabel: "Book a discovery call",
    primaryCtaHref: "/appointment",
  },
  "mobile-app-development-company": {
    outcomeLine:
      "Ship an Android/iOS app with clear milestones from design to store release.",
    whatsappMessage:
      "Hi TriFusion, I need a mobile app development consultation.",
    audiences: [
      "Startups building consumer apps",
      "Ecommerce brands needing mobile commerce",
      "Businesses needing field/workforce apps",
      "Clinics and local services with booking flows",
    ],
    timelineRange:
      "Cross-platform MVP: often 8–16 weeks depending on features and backend complexity.",
    relatedPortfolioIds: ["dailyconcepts-ecommerce-pos", "applab-mobile-app"],
    primaryCtaLabel: "Get a project estimate",
    primaryCtaHref: "/estimate",
  },
  "web-development-company-india": {
    outcomeLine:
      "Launch a fast, SEO-ready website that turns visitors into leads.",
    whatsappMessage:
      "Hi TriFusion, I need web development consultation in India.",
    audiences: [
      "SMEs needing a modern website",
      "Agencies outsourcing builds",
      "Founders needing marketing sites",
      "Teams needing web apps/portals",
    ],
    timelineRange:
      "Marketing websites: often 2–6 weeks. Web apps: longer based on workflows.",
    relatedPortfolioIds: [
      "meditative-yoga-platform",
      "pet-sitting-services-website",
      "podcast-landing-page",
    ],
    primaryCtaLabel: "Get a project estimate",
    primaryCtaHref: "/estimate",
  },
  "ui-ux-design-agency": {
    outcomeLine:
      "Validate flows with prototypes before expensive development starts.",
    whatsappMessage: "Hi TriFusion, I need UI/UX design consultation.",
    audiences: [
      "Founders before MVP build",
      "Teams redesigning confusing products",
      "Brands refreshing website UX",
      "Companies needing design systems",
    ],
    timelineRange:
      "Focused UX sprint: 1–3 weeks. Full product UI systems: 3–8 weeks.",
    relatedPortfolioIds: ["alime-photography-website", "podcast-landing-page"],
    deliverables: [
      "User flow mapping",
      "Wireframes",
      "High-fidelity UI",
      "Interactive prototype",
      "Design handoff",
      "Optional design system",
    ],
    primaryCtaLabel: "Book a discovery call",
    primaryCtaHref: "/appointment",
  },
  "crm-erp-software-development": {
    outcomeLine:
      "Connect sales and operations data in one system your team will actually use.",
    whatsappMessage: "Hi TriFusion, I need CRM/ERP software consultation.",
    audiences: [
      "Sales-led SMEs",
      "Distributors & manufacturers",
      "Real-estate and service teams",
      "Companies outgrowing spreadsheets",
    ],
    timelineRange:
      "Single CRM module MVP: often 6–12 weeks. Multi-module ERP: phased roadmap.",
    relatedPortfolioIds: ["applab-mobile-app", "dailyconcepts-ecommerce-pos"],
    primaryCtaLabel: "Get a project estimate",
    primaryCtaHref: "/estimate",
  },
};

const RELATED_BY_SLUG = {
  "best-software-company-india": {
    relatedSolutionSlugs: [
      "custom-software-development-company",
      "web-development-company-india",
      "digital-marketing-agency",
    ],
    relatedBlogSlug: "ecommerce-website-development-cost-india",
  },
  "ecommerce-website-development": {
    relatedSolutionSlugs: [
      "online-store-development",
      "digital-marketing-agency",
      "ui-ux-design-agency",
    ],
    relatedBlogSlug: "custom-website-vs-shopify-vs-woocommerce",
  },
  "online-store-development": {
    relatedSolutionSlugs: [
      "ecommerce-website-development",
      "mobile-app-development-company",
      "digital-marketing-agency",
    ],
    relatedBlogSlug: "dailyconcepts-ecommerce-case-notes",
  },
  "digital-marketing-agency": {
    relatedSolutionSlugs: [
      "web-development-company-india",
      "ecommerce-website-development",
      "best-software-company-india",
    ],
    relatedBlogSlug: "ecommerce-website-development-cost-india",
  },
  "custom-software-development-company": {
    relatedSolutionSlugs: [
      "crm-erp-software-development",
      "mobile-app-development-company",
      "msp-managed-it-services",
    ],
    relatedBlogSlug: "mlm-crm-unilevel-compensation-plan",
  },
  "msp-managed-it-services": {
    relatedSolutionSlugs: [
      "custom-software-development-company",
      "web-development-company-india",
      "crm-erp-software-development",
    ],
    relatedBlogSlug: "dailyconcepts-ecommerce-case-notes",
  },
  "mobile-app-development-company": {
    relatedSolutionSlugs: [
      "ui-ux-design-agency",
      "custom-software-development-company",
      "ecommerce-website-development",
    ],
    relatedBlogSlug: "ev-charging-app-ocpi-ocpp-guide",
  },
  "web-development-company-india": {
    relatedSolutionSlugs: [
      "website-development-company-bhilwara",
      "ui-ux-design-agency",
      "ecommerce-website-development",
    ],
    relatedBlogSlug: "website-development-company-bhilwara",
  },
  "ui-ux-design-agency": {
    relatedSolutionSlugs: [
      "web-development-company-india",
      "mobile-app-development-company",
      "digital-marketing-agency",
    ],
    relatedBlogSlug: "custom-website-vs-shopify-vs-woocommerce",
  },
  "crm-erp-software-development": {
    relatedSolutionSlugs: [
      "custom-software-development-company",
      "msp-managed-it-services",
      "best-software-company-india",
    ],
    relatedBlogSlug: "mlm-crm-unilevel-compensation-plan",
  },
  "website-development-company-bhilwara": {
    relatedSolutionSlugs: [
      "software-company-rajasthan",
      "web-development-company-jaipur",
      "web-development-company-india",
    ],
    relatedBlogSlug: "website-development-company-bhilwara",
  },
  "software-company-rajasthan": {
    relatedSolutionSlugs: [
      "website-development-company-bhilwara",
      "web-development-company-jaipur",
      "custom-software-development-company",
    ],
    relatedBlogSlug: "website-development-company-bhilwara",
  },
  "web-development-company-jaipur": {
    relatedSolutionSlugs: [
      "website-development-company-bhilwara",
      "software-company-rajasthan",
      "web-development-company-india",
    ],
    relatedBlogSlug: "website-development-company-bhilwara",
  },
};

export function enrichLandingPage(page) {
  if (!page) return null;
  const extra = landingEnrichment[page.slug] || {};
  const related = RELATED_BY_SLUG[page.slug] || {
    relatedSolutionSlugs: [],
    relatedBlogSlug: null,
  };

  return {
    primaryCtaLabel: "Get a project estimate",
    primaryCtaHref: "/estimate",
    secondaryCtaLabel: "Book a discovery call",
    secondaryCtaHref: "/appointment",
    deliverables: DEFAULT_DELIVERABLES,
    processSteps: DEFAULT_PROCESS,
    costFactors: DEFAULT_COST_FACTORS,
    relatedPortfolioIds: [],
    audiences: [],
    buyerGuide: false,
    criteria: [],
    updatedAt: "2026-08-20",
    relatedSolutionSlugs: related.relatedSolutionSlugs,
    relatedBlogSlug: related.relatedBlogSlug,
    ...page,
    ...extra,
    relatedSolutionSlugs:
      extra.relatedSolutionSlugs ||
      related.relatedSolutionSlugs ||
      [],
    relatedBlogSlug:
      extra.relatedBlogSlug || related.relatedBlogSlug || null,
    updatedAt: extra.updatedAt || page.updatedAt || "2026-08-20",
    whatsappMessage:
      extra.whatsappMessage ||
      page.whatsappMessage ||
      `Hi TriFusion, I need a consultation about ${page.primaryKeyword}.`,
    outcomeLine:
      extra.outcomeLine ||
      page.outcomeLine ||
      `Talk to TheTriFusion about ${page.primaryKeyword} with a clear next step.`,
  };
}
