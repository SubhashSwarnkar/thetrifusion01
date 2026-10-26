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
    metaTitle:
      "Website Development Company in Jaipur, India | From ₹15,000",
    bannerTitle: "Website Development Company in Jaipur, India",
    ...citySection(
      "Jaipur HQ and India-wide delivery",
      [
        "This India page is the capability write-up: stack, WordPress vs Next.js, published plans (₹15,000 / ₹35,000 / ₹75,000) and FAQs. Local industry copy for the Patrakar Colony studio sits on [website development company in Jaipur](/solutions/website-development-company-jaipur). We deliver across India by video and WhatsApp; we do not print fake local offices. Stores belong on [ecommerce website development](/solutions/ecommerce-website-development).",
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
      "Custom software from Jaipur",
      [
        "India-wide process, Tally, NDA and ownership live here. Local industry copy: [custom software in Jaipur](/solutions/custom-software-development-jaipur). Published MVPs from ₹1,00,000. The old slug software-development-company-jaipur still 308s here so we do not split that query.",
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
      "Mobile App Development Company in Jaipur, India | From ₹50,000",
    bannerTitle: "Mobile App Development Company in Jaipur, India",
    ...citySection(
      "iOS and Android apps from Jaipur",
      [
        "Cross-platform process and store FAQs live here. City copy: [Jaipur](/solutions/mobile-app-development-company-jaipur). From ₹50,000. Native store MVPs from ₹2,50,000 each on [iOS](/services/ios-app-development) and [Android](/services/android-app-development).",
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
      "BBPS, AEPS, DMT and recharge from Jaipur",
      [
        "Modules and product URLs live here (from ₹99,999). You bring the bank or API partner. City copy: [Jaipur](/solutions/fintech-app-development-jaipur).",
      ],
      [
        {
          href: "/solutions/fintech-app-development-jaipur",
          title: "Fintech app development in Jaipur",
          text: "Retailer app, distributor panel, admin. From ₹99,999.",
        },
        {
          href: "/services/fintech-app-development/bbps-software",
          title: "BBPS software",
          text: "Bharat BillPay retailer and distributor panels.",
        },
      ]
    ),
  },
  "ai-development": {
    metaTitle:
      "AI Development Company in Jaipur, India | Chatbots, RAG & Agents",
    bannerTitle: "AI Development Company in Jaipur, India",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "India delivery from Jaipur",
        paragraphs: [
          "AI features ship from the same Patrakar Colony studio as [website development](/services/website-development) and [custom software](/services/software-development). Published pilots from ₹2,00,000.",
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
          "Flows, Apex and integrations on an org you already pay for, from ₹80,000. If a commissions CRM will not fit, see [custom CRM/ERP](/services/crm-erp-development).",
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
    metaTitle:
      "Custom CRM & ERP Development Company in Jaipur, India",
    bannerTitle: "Custom CRM & ERP Software Development in Jaipur, India",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "CRM/ERP for Indian SMEs",
        paragraphs: [
          "Pipelines, inventory, GST billing and Tally from Jaipur. A CRM module MVP starts from ₹3,00,000. See also [custom software](/services/software-development).",
          "Jaipur exporters and NCR vendors usually need leads from a website form, a WhatsApp note, and a GST invoice that matches Tally — not a 40-module ERP poster. We ship one CRM module first: pipeline, accounts, follow-ups. Inventory and GST billing are the second slice when the first is in use. You own the code after payment. Salesforce stays the right buy when Sales Cloud already fits; we will say so.",
          "IndiaMART-style lead capture is in scope when you have the mailbox or API. We do not scrape portals. Mobile companions sit on [mobile app development](/services/mobile-app-development). Network-marketing trees belong on [MLM software](/services/mlm-crm-development).",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/services/mlm-crm-development",
        title: "MLM CRM development",
        text: "When the brief is a commissions tree.",
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
          "Named React, Node and mobile developers from Jaipur. Project work from ₹50,000.",
          "This page is staff-aug: a named person inside your sprint, NDA/IP in the contract, IST overlap that also covers morning UK hours. A written MVP with a first-release cut is still [custom software](/services/software-development) or [mobile app development](/services/mobile-app-development).",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
  "graphic-design": {
    metaTitle:
      "Graphic Design Company in Jaipur, India | Social, Ads & Packs",
    bannerTitle: "Graphic Design Services in Jaipur, India",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Creatives that match the live Indian site",
        paragraphs: [
          "Social, ads and catalogues from Jaipur. Brand systems sit on [branding](/services/branding); traffic on [digital marketing](/services/digital-marketing). Product UI is [UI/UX](/services/ui-ux-design).",
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
      "Android App Development Company in Jaipur, India | Play Store",
    bannerTitle: "Android App Development Company in Jaipur, India",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Play Store apps from Jaipur, India",
        paragraphs: [
          "Kotlin or React Native from Jaipur, from ₹2,50,000. Both stores: [mobile app development](/services/mobile-app-development). City context: [Jaipur apps](/solutions/mobile-app-development-company-jaipur).",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
  },
};
