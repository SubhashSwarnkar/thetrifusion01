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
    // National capability URL: India primary; Jaipur = authentic HQ, not the only geo in the title.
    metaTitle:
      "Website Development Company in India | Jaipur Studio, from ₹15,000",
    bannerTitle: "Website Development Company in India — Jaipur Studio",
    ...citySection(
      "Jaipur HQ, Rajasthan — delivery across India",
      [
        "This /services URL is the national capability write-up: stack, WordPress vs Next.js, published plans (₹15,000 / ₹35,000 / ₹75,000) and FAQs for buyers across India. The studio is in Jaipur, Rajasthan; we deliver by video and WhatsApp and do not invent branch offices. Local industry flavour for the Patrakar Colony studio sits on [website development company in Jaipur](/solutions/website-development-company-jaipur). Stores belong on [ecommerce website development](/solutions/ecommerce-website-development).",
      ],
      CITY_LINKS_WEBSITE
    ),
  },
  "software-development": {
    metaTitle:
      "Custom Software Development Company in India | Jaipur, from ₹1,00,000",
    bannerTitle:
      "Custom Software Development Company in India — Jaipur Studio",
    ...citySection(
      "India delivery from a Jaipur, Rajasthan studio",
      [
        "India-wide process, Tally, NDA and ownership live on this national /services URL. HQ is Jaipur, Rajasthan — not a claim of offices in every city. Local industry copy: [custom software in Jaipur](/solutions/custom-software-development-jaipur). Published MVPs from ₹1,00,000. The old slug software-development-company-jaipur still 308s here so we do not split that query.",
      ],
      [
        {
          href: "/solutions/custom-software-development-jaipur",
          title: "Custom software development in Jaipur (HQ)",
          text: "Dealer portals, hotel ops, Sitapura dispatch. From ₹1,00,000.",
        },
      ]
    ),
  },
  "mobile-app-development": {
    metaTitle:
      "Mobile App Development Company in India | Jaipur, from ₹50,000",
    bannerTitle: "Mobile App Development Company in India — Jaipur Studio",
    ...citySection(
      "Cross-platform apps for India, built in Jaipur",
      [
        "Cross-platform process and store FAQs live on this national URL. Studio: Jaipur, Rajasthan; remote delivery across India. City flavour: [Jaipur](/solutions/mobile-app-development-company-jaipur). From ₹50,000. Native store MVPs from ₹2,50,000 each on [iOS](/services/ios-app-development) and [Android](/services/android-app-development).",
      ],
      [
        {
          href: "/solutions/mobile-app-development-company-jaipur",
          title: "Mobile app development company in Jaipur",
          text: "Dealer, hotel and field apps from Patrakar Colony.",
        },
      ]
    ),
  },
  "digital-marketing": {
    metaTitle:
      "Digital Marketing Agency in Jaipur, India | SEO & Ads from ₹15,000",
    bannerTitle: "Digital Marketing Agency in Jaipur, India",
    ...citySection(
      "SEO and ads from Jaipur",
      [
        "India-wide SEO, Google Ads and Meta Ads live here (from ₹15,000; ad spend separate; no ranking guarantee). City copy: [Jaipur](/solutions/digital-marketing-company-jaipur). The old slug digital-marketing-agency still 308s here.",
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
    metaTitle:
      "Fintech App Development Company in India | Jaipur BBPS, AEPS & DMT",
    bannerTitle:
      "Fintech App Development Company in India — Jaipur Studio",
    ...citySection(
      "BBPS, AEPS, DMT and recharge for India (Jaipur studio)",
      [
        "This apex /services URL is the national fintech capability hub (from ₹99,999): retailer app, distributor panel, admin. You bring the bank or API partner; we do not issue NPCI/RBI licences. Prefer the apex host https://thetrifusion.in — www is redirected. Child modules: [BBPS](/services/fintech-app-development/bbps-software), [AEPS](/services/fintech-app-development/aeps-software), [DMT](/services/fintech-app-development/dmt-software), [recharge](/services/fintech-app-development/recharge-software). Local flavour only: [Jaipur](/solutions/fintech-app-development-jaipur).",
      ],
      [
        {
          href: "/services/fintech-app-development/bbps-software",
          title: "BBPS software",
          text: "Bharat BillPay retailer and distributor panels.",
        },
        {
          href: "/services/fintech-app-development/aeps-software",
          title: "AEPS software",
          text: "Aadhaar-enabled payments on partner-certified devices.",
        },
        {
          href: "/solutions/fintech-app-development-jaipur",
          title: "Fintech app development in Jaipur",
          text: "Local studio flavour — same product family, not a second national canonical.",
        },
      ]
    ),
  },
  "ai-development": {
    metaTitle: "AI Development Company in India | Chatbots, RAG & Agents",
    bannerTitle: "AI Development Company in India — Jaipur Studio",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "India delivery from Jaipur, Rajasthan",
        paragraphs: [
          "AI features ship from the same Patrakar Colony studio as [website development](/services/website-development) and [custom software](/services/software-development). Published pilots from ₹2,00,000. We do not invent branch offices outside Jaipur.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/services/software-development",
        title: "Custom software development",
        text: "When the AI feature sits inside a product you own.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "ui-ux-design": {
    metaTitle: "UI/UX Design Agency in Jaipur, India | Figma Product Design",
    bannerTitle: "UI/UX Design Agency in Jaipur, India",
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
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  branding: {
    metaTitle:
      "Branding Agency in Jaipur, India | Logo, Identity & Guidelines",
    bannerTitle: "Branding Agency in Jaipur, India",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Brand identity Indian D2C can put on a website",
        paragraphs: [
          "Logo, colour, type and guidelines from Jaipur, from ₹30,000, then a [website](/services/website-development) or [ecommerce store](/solutions/ecommerce-website-development). We are not a trademark attorney.",
          "Indian D2C labels often arrive with a festival drop date and no guidelines PDF. We still start with the system the website can use: primary mark, reverse, colour that survives GST invoice paper, and type that works in Hindi if the store is bilingual. Campaign kits after the identity exists are [graphic design](/services/graphic-design). We will not file a trademark or promise a class number.",
          "Published branding packs: ₹30,000 / ₹60,000 / ₹1,20,000 on [pricing](/pricing). Naming is in scope only when you ask. The studio is at Patrakar Colony, Jaipur; delivery is remote across India.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/services/website-development",
        title: "Website development",
        text: "Put the identity on a live company site.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  rpa: {
    extraSections: [
      {
        id: "india-city-pages",
        heading: "RPA for Indian SMEs, from Jaipur",
        paragraphs: [
          "Invoice, Tally and CRM bots from Jaipur, from ₹50,000. If the spreadsheet is the product, see [business modernization](/services/business-modernization).",
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
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  salesforce: {
    metaTitle:
      "Salesforce Implementation Company in India | Jaipur Flows & Apex",
    bannerTitle:
      "Salesforce Customization & Implementation in Jaipur, India",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Salesforce work from Jaipur for Indian orgs",
        paragraphs: [
          "Flows, Apex and integrations on an org you already pay for, from ₹80,000. If a commissions CRM will not fit, see [custom CRM](/services/crm-erp-development).",
          "Indian mid-market teams often already pay for Sales Cloud and then ask for a commissions tree, Tally invoice sync, or a WhatsApp note on the lead. We implement what Fits Flows first. Apex and LWC when Flows are not enough. We do not claim Summit-partner status. Published work starts from ₹80,000. If the cheaper long-term answer is a custom CRM, we say so before you buy more licences.",
          "Kickoff is a video review of your org with the access you grant. Delivery is from Jaipur. Hindi field labels are ordinary when your sales team works in Hindi. Website or ERP connections are scoped after we read the other system’s docs.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/services/crm-erp-development",
        title: "Custom CRM & ERP",
        text: "When Salesforce seats will not hold the process.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "crm-erp-development": {
    metaTitle: "Custom CRM Development Company in India | Jaipur Studio",
    bannerTitle: "Custom CRM Software Development in India — Jaipur Studio",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "CRM for Indian SMEs (studio in Jaipur, Rajasthan)",
        paragraphs: [
          "Pipelines, quotations, WhatsApp notes and website lead capture for Indian SMEs — built from our Jaipur, Rajasthan studio with remote delivery. A CRM module MVP starts from ₹3,00,000. Full warehouse and GST ERP modules are on [ERP software development](/services/erp-software-development). See also [custom software](/services/software-development).",
          "Exporters and vendors across India usually need leads from a website form and a WhatsApp note next to the deal — not a 40-module ERP poster on day one. We ship one CRM module first: pipeline, accounts, follow-ups. You own the code after payment. Salesforce stays the right buy when Sales Cloud already fits; we will say so. We do not claim branch offices outside Jaipur.",
          "IndiaMART-style lead capture is in scope when you have the mailbox or API. We do not scrape portals. Mobile companions sit on [mobile app development](/services/mobile-app-development). Network-marketing trees belong on [MLM software](/services/mlm-crm-development). Live ops proof: [Connect Dairy](/portfolio/connect-dairy-supply-chain).",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/portfolio/connect-dairy-supply-chain",
        title: "Connect Dairy case study",
        text: "Live agri-logistics ops — fleets, roles, P&L.",
      },
      {
        href: "/portfolio/dailyconcepts-ecommerce-pos",
        title: "DailyConcepts case study",
        text: "Live storefront plus POS-style admin.",
      },
      {
        href: "/services/erp-software-development",
        title: "ERP software development",
        text: "Inventory, GST finance, MRP and multi-branch.",
      },
      {
        href: "/services/mlm-crm-development",
        title: "MLM CRM development",
        text: "When the brief is a commissions tree.",
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
    extraSections: [
      {
        id: "india-city-pages",
        heading: "EV charging CMS from Jaipur, India",
        paragraphs: [
          "OCPP and OCPI software for Indian CPOs and eMSPs, from ₹4,50,000. See [custom software](/services/software-development) when the product still needs building around the CSMS.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/services/software-development",
        title: "Custom software development",
        text: "When CSMS sits inside a larger product.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "business-modernization": {
    metaTitle:
      "Legacy Software Modernization in India | Excel to Software, Jaipur",
    bannerTitle:
      "Business & Legacy Software Modernization in Jaipur, India",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Spreadsheet-to-software for Indian SMEs",
        paragraphs: [
          "Phased web apps from Jaipur, from ₹1,50,000. Greenfield products belong on [custom software](/services/software-development).",
          "The first slice is almost always the spreadsheet everyone is afraid to break: dispatch, dealer rates, or month-end GST. We keep the old file running until the new module takes that job. Bots that sit on the old process without replacing it are [RPA](/services/rpa). A boxed CRM you already pay for is [Salesforce](/services/salesforce) when it fits.",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "on-demand": {
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Hire developers in India, from Jaipur",
        paragraphs: [
          "Named React, Node and mobile developers from the Patrakar Colony, Jaipur studio for teams across India (and remote clients). Project engagements start from ₹50,000 on [pricing](/pricing); monthly seat rates are quoted in writing — we do not invent a public rate card.",
          "This page is staff-aug: a named person inside your sprint, NDA/IP in the contract, IST overlap that also covers morning UK hours. A written MVP with a first-release cut is still [custom software](/services/software-development) or [mobile app development](/services/mobile-app-development). Play Store-first products sit on [Android app development](/services/android-app-development).",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "graphic-design": {
    metaTitle:
      "Graphic Design Company in India | Social, Ads & Packs from Jaipur",
    bannerTitle: "Graphic Design Services in India — Jaipur Studio",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Creatives that match the live Indian site",
        paragraphs: [
          "Social, ads and catalogues from Jaipur for brands across India. Brand systems sit on [branding](/services/branding); traffic on [digital marketing](/services/digital-marketing). Product UI is [UI/UX](/services/ui-ux-design).",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  devops: {
    extraSections: [
      {
        id: "india-city-pages",
        heading: "DevOps from Jaipur, India",
        paragraphs: [
          "CI/CD, Kubernetes and cloud from Jaipur, starting with a free infrastructure audit. Related: [custom software](/services/software-development) when the product still needs building.",
        ],
      },
    ],
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
    metaTitle:
      "Android App Development Company in India | Play Store from Jaipur",
    bannerTitle: "Android App Development Company in India — Jaipur Studio",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Play Store apps for India, built in Jaipur",
        paragraphs: [
          "Kotlin or React Native from Jaipur, Rajasthan, from ₹2,50,000. Both stores: [mobile app development](/services/mobile-app-development). City flavour (not a second national canonical): [Jaipur apps](/solutions/mobile-app-development-company-jaipur). Live proof: [PlugOne](/portfolio/plugone-ev-charging-platform).",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/portfolio/plugone-ev-charging-platform",
        title: "PlugOne case study",
        text: "Live EV charging product with Android clients.",
      },
      {
        href: "/portfolio/connect-dairy-supply-chain",
        title: "Connect Dairy case study",
        text: "Live agri-logistics web & mobile.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
};
