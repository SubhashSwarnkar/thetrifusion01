/**
 * India ranking pass: titles/H1 with India + Jaipur, Jaipur HQ links only,
 * and explicit areaServed India. Non-Jaipur city landings and blog guides
 * were removed (410 / 301) — link only live money URLs.
 * extraSections / relatedLinks are unioned in servicePageSeo.js.
 */

const INDIA_AREA_SERVED = [
  { "@type": "Country", name: "India" },
  { "@type": "City", name: "Jaipur" },
  { "@type": "AdministrativeArea", name: "Rajasthan" },
];

const CITY_LINKS_WEBSITE = [
  {
    href: "/solutions/website-development-company-jaipur",
    title: "Website development company in Jaipur (HQ)",
    text: "Patrakar Colony studio: jewellers, hotels, Sitapura exporters. From ₹15,000.",
  },
];

function citySection(heading, paragraphs, links) {
  return {
    extraSections: [
      {
        id: "india-city-pages",
        heading,
        paragraphs,
      },
    ],
    relatedLinks: links,
    schemaAreaServed: INDIA_AREA_SERVED,
  };
}

export const serviceIndiaOnpage = {
  "website-development": {
    // Keep H1; title trimmed per indexed-pages spec. Location copy lives in servicePlan.
    metaTitle: "Website Development Company in India | From ₹15,000",
    bannerTitle: "Website Development Company in India — Jaipur Studio",
    metaDescription:
      "Business websites, WordPress, Next.js and ecommerce built in Jaipur for all India. From ₹15,000, live in 3–8 weeks, with SEO set up at launch.",
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "software-development": {
    metaTitle: "Custom Software Development Company India | From ₹1,00,000",
    bannerTitle: "Custom Software Development Company in India",
    metaDescription:
      "Portals, CRM/ERP modules, APIs and SaaS MVPs for Indian SMEs. Written scope, weekly demos, you own the code. MVPs from ₹1,00,000 in 6–12 weeks.",
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "mobile-app-development": {
    metaTitle: "Mobile App Development in India | iOS + Android from ₹50,000",
    bannerTitle: "Mobile App Development Company in India: iOS and Android",
    metaDescription:
      "One React Native or Flutter app for iOS and Android, with backend and admin panel. From ₹50,000; focused MVP in 8–12 weeks. Jaipur team, all India.",
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "digital-marketing": {
    // Apex canonical preserved; www historical duplicate — observe, do not churn host.
    metaTitle:
      "Digital Marketing Agency in India | SEO & Ads from Jaipur, ₹15,000",
    bannerTitle: "Digital Marketing Agency in India — Jaipur Studio",
    ...citySection(
      "SEO and ads for India (Jaipur studio)",
      [
        "This /services URL is the national digital marketing write-up: SEO, Google Ads and Meta Ads from ₹15,000 (ad spend separate; no ranking guarantee). City flavour only: [Jaipur](/solutions/digital-marketing-company-jaipur).",
      ],
      [
        {
          href: "/solutions/digital-marketing-company-jaipur",
          title: "Digital marketing company in Jaipur",
          text: "Local SEO and ads for jewellers, hotels and exporters.",
        },
      ]
    ),
  },
  "fintech-app-development": {
    metaTitle: "Fintech App Development India | Jaipur BBPS, AEPS & DMT",
    bannerTitle: "Fintech App Development: BBPS, AEPS & DMT Software",
    // Duplicate Jaipur H2 removed; module list lives in servicePlan scopeHeading.
    // relatedLinks come from servicePlan (replaceRelatedLinks); do not re-union here.
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "ai-development": {
    metaTitle: "AI Chatbot & AI Agent Development in India | WhatsApp, RAG",
    bannerTitle: "AI Chatbot & AI Agent Development in India | WhatsApp, RAG",
    metaDescription:
      "WhatsApp AI chatbots, document search (RAG), invoice/PDF extraction and AI agents with human review. 2–4 week pilot first. Plans from ₹2,00,000.",
    locationLine:
      "Practical AI from Jaipur — features inside products, not model-training labs.",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "India delivery from Jaipur, Rajasthan",
        paragraphs: [
          "AI features ship from the same Patrakar Colony studio as [website development](/services/website-development) and [custom software](/services/software-development). Published pilots from ₹2,00,000. We do not invent branch offices outside Jaipur.",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "ui-ux-design": {
    metaTitle: "UI/UX Design Agency in India | Figma Product Design from Jaipur",
    bannerTitle: "UI/UX Design Agency in India — Jaipur Studio",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Hindi UI and India product design",
        paragraphs: [
          "Figma product UI from Jaipur for Indian websites and apps, from ₹20,000. Continue to [website development](/services/website-development) or [mobile app development](/services/mobile-app-development).",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/services/website-development",
        title: "Website development",
        text: "Ship the designed UI on a live site.",
      },
      {
        href: "/services/branding",
        title: "Branding",
        text: "Logo and guidelines before product screens.",
      },
      {
        href: "/services/graphic-design",
        title: "Graphic design",
        text: "Campaign creatives after the product UI exists.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  branding: {
    metaTitle: "Branding Agency India | Identity Systems from Jaipur",
    bannerTitle: "Brand strategy and identity systems from Jaipur",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Brand systems for Indian businesses, built in Jaipur",
        paragraphs: [
          "Strategy notes, naming when scoped, logo suite, colour, type and guidelines from Patrakar Colony, Jaipur for buyers across India — from ₹30,000 — then a [website](/services/website-development) or [ecommerce store](/solutions/ecommerce-website-development) that uses the same system. We are not a trademark attorney and we do not sell registrability promises.",
          "D2C and SME teams often arrive with a festival date and three conflicting logos in WhatsApp. We still start with the identity the website can obey: primary mark, reverse, colour that survives GST invoice paper, and type that works in Hindi when the store is bilingual. Campaign execution after the system exists is [graphic design](/services/graphic-design). Product screens are [UI/UX](/services/ui-ux-design).",
          "Published branding packs: ₹30,000 / ₹60,000 / ₹1,20,000 on [pricing](/pricing). Delivery is remote across India with optional Jaipur studio meetings by appointment.",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  rpa: {
    metaTitle: "RPA Services in India | Business Process Automation from Jaipur",
    bannerTitle: "RPA Services in India — Jaipur Studio",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "RPA for Indian SMEs, from Jaipur",
        paragraphs: [
          "Invoice, Tally and CRM bots from Jaipur for buyers across India, from ₹50,000. If the spreadsheet is the product, see [business modernization](/services/business-modernization).",
          "The first process we usually record is the one accounts already do twice: GST invoice PDF to Tally, or a portal report into a sheet. A bot that copies a validated row and stops on a mismatch is RPA. A model that “decides” an exception is [AI development](/services/ai-development). We do not invent hours-saved percentages. Published plans: ₹50,000 / ₹1,00,000 / ₹2,00,000. UiPath, Power Automate or Python is a stack choice in the written scope. We are not listed as a UiPath partner on this page.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/services/business-modernization",
        title: "Business modernization",
        text: "When the spreadsheet itself should become software.",
      },
      {
        href: "/services/ai-development",
        title: "AI development",
        text: "When the exception needs a model, not a deterministic bot.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  salesforce: {
    metaTitle: "Salesforce Developers in Jaipur | Flows, Apex & Integrations",
    bannerTitle: "Salesforce Developers in Jaipur | Flows, Apex & Integrations",
    metaDescription:
      "Salesforce Flows, Apex/LWC, data migration and website or ERP integrations for orgs you already use. Independent Jaipur team. Work from ₹80,000.",
    locationLine:
      "Salesforce work from Jaipur — on your existing org, not a forced new CRM.",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Salesforce work from Jaipur for Indian orgs",
        paragraphs: [
          "Flows, Apex and integrations on an org you already pay for, from ₹80,000. If a commissions CRM will not fit, see [custom CRM](/services/crm-erp-development).",
          "Indian mid-market teams often already pay for Sales Cloud and then ask for a commissions tree, Tally invoice sync, or a WhatsApp note on the lead. We implement what Fits Flows first. Apex and LWC when Flows are not enough. We are an independent Salesforce development team, not a Salesforce consulting partner. Published work starts from ₹80,000. If the cheaper long-term answer is a custom CRM, we say so before you buy more licences.",
          "Kickoff is a video review of your org with the access you grant. Delivery is from Jaipur. Hindi field labels are ordinary when your sales team works in Hindi. Website or ERP connections are scoped after we read the other system’s docs.",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "crm-erp-development": {
    metaTitle: "Custom CRM Software Development Company in Jaipur, India",
    bannerTitle: "Custom CRM Software Development Company in Jaipur, India",
    metaDescription:
      "Custom CRM for Indian SMEs: leads, pipelines, quotations, WhatsApp notes and IndiaMART lead capture. You own the code. CRM module MVP from ₹3,00,000.",
    locationLine:
      "Custom CRM from Jaipur — pipelines your sales team will actually use.",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "CRM built around Indian sales workflows",
        paragraphs: [
          "Pipelines, quotations, WhatsApp notes and website lead capture for Indian SMEs — built from our Jaipur, Rajasthan studio with remote delivery. A CRM module MVP starts from ₹3,00,000. Full warehouse and GST ERP modules are on [ERP software development](/services/erp-software-development). See also [custom software](/services/software-development).",
          "Exporters and vendors across India usually need leads from a website form and a WhatsApp note next to the deal — not a 40-module ERP poster on day one. We ship one CRM module first: pipeline, accounts, follow-ups. You own the code after payment. Salesforce stays the right buy when Sales Cloud already fits; we will say so. We do not claim branch offices outside Jaipur.",
          "IndiaMART-style lead capture is in scope when you have the mailbox or API. We do not scrape portals. Mobile companions sit on [mobile app development](/services/mobile-app-development). Network-marketing trees belong on [MLM software](/services/mlm-crm-development). Live ops proof: [Connect Dairy](/portfolio/connect-dairy-supply-chain).",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "erp-software-development": {
    metaTitle: "ERP Software Development Company in India | Jaipur Studio",
    bannerTitle: "ERP Software Development in India — Jaipur Studio",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "ERP for Indian SMEs (studio in Jaipur, Rajasthan)",
        paragraphs: [
          "GST finance, inventory, procurement, manufacturing, HR and multi-branch ERP from Jaipur for buyers across India. Multi-module programmes typically start from ₹6,00,000. Sales CRM stays on [custom CRM development](/services/crm-erp-development). See also [custom software](/services/software-development).",
          "Manufacturers in Sitapura and traders across Rajasthan usually need stock that matches the invoice, PO→GRN discipline, and books a CA can close — not a CRM with an inventory tab. We phase modules so the floor keeps running. You own the code after payment. Tally, SAP or Odoo stay the right buy when they already fit; we will say so. Live ops proof: [Connect Dairy](/portfolio/connect-dairy-supply-chain).",
          "Mobile warehouse companions sit on [mobile app development](/services/mobile-app-development). Spreadsheet cutovers without a full ERP map sit on [business modernization](/services/business-modernization).",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/portfolio/connect-dairy-supply-chain",
        title: "Connect Dairy case study",
        text: "Live ops — fleets, roles and P&L.",
      },
      {
        href: "/portfolio/dailyconcepts-ecommerce-pos",
        title: "DailyConcepts case study",
        text: "Live storefront plus POS-style admin.",
      },
      {
        href: "/services/crm-erp-development",
        title: "Custom CRM development",
        text: "Pipelines and lead follow-ups.",
      },
      {
        href: "/services/business-modernization",
        title: "Business modernization",
        text: "Phased spreadsheet cutovers.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "mlm-crm-development": {
    metaTitle: "MLM Software Company in Jaipur | Binary, Unilevel, Matrix",
    bannerTitle: "MLM Software Development Company in Jaipur, India",
    metaDescription:
      "Custom MLM software for binary, unilevel, matrix and hybrid plans: genealogy, e-wallet, KYC, payouts and distributor apps. Plans from ₹3,50,000.",
    locationLine:
      "MLM software from Jaipur — compensation engines, not a generic CRM plugin.",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "MLM software from Jaipur, India",
        paragraphs: [
          "Binary, unilevel and matrix plans from Jaipur, published from ₹3,50,000. We do not give legal advice on the Direct Selling Rules.",
          "The software is genealogy, e-wallet, KYC, e-pin and payouts as scoped — not a licence to sell. Direct selling in India sits under the Consumer Protection (Direct Selling) Rules, 2021. We will not print a compensation plan you did not approve, and we will not promise a “SEBI-approved MLM”. Wallet payouts that sit on a bank rail belong next to [fintech app development](/services/fintech-app-development) when you already have the partner.",
          "Published plans: ₹3,50,000 / ₹6,50,000 / ₹12,00,000 on [pricing](/pricing). Distributor apps are iOS, Android and web when the scope says so. Delivery is from Jaipur with weekly demos. You own the code after completion and payment.",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "ev-charging-app-development": {
    contentUpdatedAt: "2026-11-25",
    metaTitle: "EV Charging App & CSMS Software Development | OCPP",
    bannerTitle:
      "EV Charging Management Software & White-Label Charging App for CPOs in India",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "EV charging software from Jaipur for operators across India",
        paragraphs: [
          "White-label EV charging management software (CMS & app) for Indian CPOs, fleets and charger owners — from ₹4,50,000 ex-GST after discovery. Live client proof: [PlugOne](/portfolio/plugone-ev-charging-platform) (OCPP + OCPI; Ecoplug, Sonic, ChargeMOD, ChargeIndia). See [custom software](/services/software-development) when charging sits inside a larger product; [Android](/services/android-app-development) when drivers need a Play Store client.",
        ],
      },
    ],
    // relatedLinks from servicePlan (replaceRelatedLinks).
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "business-modernization": {
    metaTitle: "Legacy Software Modernization India | Excel to Web App",
    bannerTitle:
      "Business & Legacy Software Modernization in Jaipur, India",
    // india-city-pages + relatedLinks live in servicePlan (replaceRelatedLinks).
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "on-demand": {
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Hire developers in India, from Jaipur",
        paragraphs: [
          "Named React, Node and mobile developers from the Patrakar Colony, Jaipur studio for teams across India (and remote clients). Project engagements start from ₹50,000 on [pricing](/pricing); monthly seat rates are quoted in writing — we do not invent a public rate card.",
          "Staff augmentation means a named person inside your sprint, NDA/IP in the contract, IST overlap that also covers morning UK hours. A written MVP with a first-release cut is still [custom software](/services/software-development) or [mobile app development](/services/mobile-app-development). Play Store-first products sit on [Android app development](/services/android-app-development).",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "graphic-design": {
    metaTitle:
      "Graphic Design Company in India | Social, Ads & Print from Jaipur",
    bannerTitle: "Graphic design for campaigns, print and packaging artwork",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Campaign creatives for brands across India",
        paragraphs: [
          "Social sets, ad visuals, brochures, catalogues and packaging artwork from Jaipur for teams across India — project packs from ₹10,000. Identity systems (strategy, logo, guidelines) sit on [branding](/services/branding). Traffic after creatives exist sits on [digital marketing](/services/digital-marketing). Product UI is [UI/UX](/services/ui-ux-design).",
          "We match colours and type to the live [website](/services/website-development) when we also built it, so festival posts do not invent a fifth blue. Remote delivery nationwide; studio meetings in Jaipur by appointment.",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  devops: {
    metaTitle: "DevOps Services Company in Jaipur & India | Free Audit",
    bannerTitle: "DevOps & Cloud Services in Jaipur and India",
    // Location H2s merged away; fact box + process cover Jaipur delivery.
    // relatedLinks from servicePlan (replaceRelatedLinks).
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "ios-app-development": {
    extraSections: [
      {
        id: "india-city-pages",
        heading: "iPhone apps for Indian businesses, from Jaipur",
        paragraphs: [
          "Swift or React Native from Jaipur, from ₹2,50,000. Both stores: [mobile app development](/services/mobile-app-development). City context: [Jaipur apps](/solutions/mobile-app-development-company-jaipur).",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "android-app-development": {
    metaTitle: "Android App Development Company in Jaipur | Kotlin Apps",
    bannerTitle: "Android App Development Company in Jaipur",
    metaDescription:
      "Kotlin or React Native Android apps with Play Console setup, signing and store listing. Focused MVP from ₹2,50,000 in 8–12 weeks. Jaipur team.",
    // relatedLinks / city sections come from servicePlan (replaceRelatedLinks).
    schemaAreaServed: INDIA_AREA_SERVED,
  },
};
