/**
 * 17 Oct 2026 India ranking pass: titles/H1 with India + Jaipur, city-page
 * clusters, related guides, and explicit areaServed India.
 * extraSections / relatedLinks are unioned in servicePageSeo.js.
 */

const INDIA_AREA_SERVED = [
  { "@type": "Country", name: "India" },
  { "@type": "City", name: "Jaipur" },
  { "@type": "AdministrativeArea", name: "Rajasthan" },
  { "@type": "City", name: "Delhi" },
  { "@type": "City", name: "Mumbai" },
  { "@type": "City", name: "Bengaluru" },
];

const CITY_LINKS_WEBSITE = [
  {
    href: "/solutions/website-development-company-jaipur",
    title: "Website development company in Jaipur (HQ)",
    text: "Patrakar Colony studio: jewellers, hotels, Sitapura exporters. From ₹15,000.",
  },
  {
    href: "/solutions/website-development-company-delhi",
    title: "Website development company in Delhi NCR",
    text: "GST-ready company sites for Gurgaon, Noida and Okhla — from Jaipur.",
  },
  {
    href: "/solutions/website-development-company-mumbai",
    title: "Website development company in Mumbai",
    text: "D2C, trading and studio sites. No Mumbai office.",
  },
  {
    href: "/solutions/website-development-company-bangalore",
    title: "Website development company in Bangalore",
    text: "SaaS and product marketing sites. No Bengaluru office.",
  },
  {
    href: "/solutions/website-development-company-jodhpur",
    title: "Website development company in Jodhpur",
    text: "Handicraft catalogues, hotels and solar EPCs.",
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
    contentUpdatedAt: "2026-10-17",
  };
}

export const serviceIndiaOnpage = {
  "website-development": {
    metaTitle:
      "Website Development Company in Jaipur, India | From ₹15,000",
    bannerTitle: "Website Development Company in Jaipur, India",
    ...citySection(
      "City pages: Jaipur HQ, Delhi, Mumbai, Bangalore, Jodhpur",
      [
        "This India page is the capability write-up: stack, WordPress vs Next.js, published plans (₹15,000 / ₹35,000 / ₹75,000) and FAQs. Local landings with unique industry copy sit on the city URLs — [website development company in Jaipur](/solutions/website-development-company-jaipur) (Patrakar Colony studio), [Delhi NCR](/solutions/website-development-company-delhi), [Mumbai](/solutions/website-development-company-mumbai), [Bangalore](/solutions/website-development-company-bangalore) and [Jodhpur](/solutions/website-development-company-jodhpur). Existing Rajasthan pages remain for [Bhilwara](/solutions/website-development-company-bhilwara), [Udaipur](/solutions/website-development-company-udaipur), [Kota](/solutions/website-development-company-kota) and [Ajmer](/solutions/website-development-company-ajmer). Each city page uses the Jaipur NAP; we do not print fake local offices.",
        "Related guides: [Google’s official-site box in AI Search](/blog/google-official-site-indian-business-website-2026) and [DPDP privacy notices](/blog/dpdp-privacy-notice-indian-website-2026). Stores belong on [ecommerce website development](/solutions/ecommerce-website-development).",
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
      "City pages for custom software",
      [
        "India-wide process, Tally, NDA and ownership live here. Local industry copy: [custom software in Jaipur](/solutions/custom-software-development-jaipur), [Delhi NCR](/solutions/software-development-company-delhi), [Mumbai](/solutions/software-development-company-mumbai), [Bangalore](/solutions/software-development-company-bangalore) and [Jodhpur](/solutions/software-development-company-jodhpur). Published MVPs from ₹1,00,000. The old slug software-development-company-jaipur still 308s here so we do not split that query.",
        "Related guides: [TCS–ManageEngine sovereign cloud — own the billing module](/blog/tcs-manageengine-sovereign-cloud-software-india-2026) and [GST e-invoice custom software](/blog/gst-einvoice-custom-software-india-2026).",
      ],
      [
        {
          href: "/solutions/custom-software-development-jaipur",
          title: "Custom software development in Jaipur (HQ)",
          text: "Dealer portals, hotel ops, Sitapura dispatch. From ₹1,00,000.",
        },
        {
          href: "/solutions/software-development-company-delhi",
          title: "Software development company in Delhi NCR",
          text: "E-invoice helpers and vendor portals from Jaipur.",
        },
        {
          href: "/blog/tcs-manageengine-sovereign-cloud-software-india-2026",
          title: "TCS–ManageEngine vs a billing module you own",
          text: "Sovereign-cloud headlines are not a first module.",
        },
      ]
    ),
  },
  "mobile-app-development": {
    metaTitle:
      "Mobile App Development Company in Jaipur, India | From ₹50,000",
    bannerTitle: "Mobile App Development Company in Jaipur, India",
    ...citySection(
      "City pages for iOS and Android apps",
      [
        "Cross-platform process and store FAQs live here. City copy: [Jaipur](/solutions/mobile-app-development-company-jaipur), [Delhi NCR](/solutions/mobile-app-development-company-delhi), [Mumbai](/solutions/mobile-app-development-company-mumbai), [Bangalore](/solutions/mobile-app-development-company-bangalore) and [Jodhpur](/solutions/mobile-app-development-company-jodhpur). From ₹50,000. Native store MVPs from ₹2,50,000 each on [iOS](/services/ios-app-development) and [Android](/services/android-app-development).",
        "Related: [Motorola Signature 27 — what India’s app teams actually ship](/blog/motorola-signature-27-india-whats-known) and the [ecommerce app cost guide](/blog/ecommerce-app-development-cost-india).",
      ],
      [
        {
          href: "/solutions/mobile-app-development-company-jaipur",
          title: "Mobile app development company in Jaipur",
          text: "Dealer, hotel and field apps from Patrakar Colony.",
        },
        {
          href: "/solutions/mobile-app-development-company-delhi",
          title: "Mobile app development company in Delhi NCR",
          text: "Field-sales and logistics companions from Jaipur.",
        },
      ]
    ),
  },
  "digital-marketing": {
    metaTitle:
      "Digital Marketing Agency in Jaipur, India | SEO & Ads from ₹15,000",
    bannerTitle: "Digital Marketing Agency in Jaipur, India",
    ...citySection(
      "City pages for SEO and ads",
      [
        "India-wide SEO, Google Ads and Meta Ads live here (from ₹15,000; ad spend separate; no ranking guarantee). City copy: [Jaipur](/solutions/digital-marketing-company-jaipur), [Delhi](/solutions/digital-marketing-company-delhi), [Mumbai](/solutions/digital-marketing-company-mumbai), [Bangalore](/solutions/digital-marketing-company-bangalore) and [Jodhpur](/solutions/digital-marketing-company-jodhpur). The old slug digital-marketing-agency still 308s here.",
        "Related guides: [Dussehra AI Max festive ads](/blog/dussehra-ai-max-festive-ads-india-2026) and [Ads inside AI Overviews](/blog/google-ai-overviews-ads-festive-india-2026).",
      ],
      [
        {
          href: "/solutions/digital-marketing-company-jaipur",
          title: "Digital marketing company in Jaipur",
          text: "Local SEO and ads for jewellers, hotels and exporters.",
        },
        {
        href: "/blog/dussehra-ai-max-festive-ads-india-2026",
        title: "Dussehra AI Max festive ads (India 2026)",
        text: "Landing page first; campaign type is a scope choice.",
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
      "City pages for BBPS, AEPS, DMT and recharge",
      [
        "Modules and product URLs live here (from ₹99,999). You bring the bank or API partner. City copy: [Jaipur](/solutions/fintech-app-development-jaipur), [Delhi NCR](/solutions/fintech-app-development-delhi), [Mumbai](/solutions/fintech-app-development-mumbai), [Bangalore](/solutions/fintech-app-development-bangalore) and [Jodhpur](/solutions/fintech-app-development-jodhpur).",
        "Related: [CERT-In payment-API keys on recharge panels](/blog/cert-in-payment-api-recharge-panel-india-2026) and [BBPS NEFT on recharge panels](/blog/bbps-neft-corporate-recharge-panel-india-2026).",
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
          "AI features ship from the same Patrakar Colony studio as [website development](/services/website-development) and [custom software](/services/software-development). Published pilots from ₹2,00,000. Related guide: [MeitY’s AI consultation — ship a reviewable product](/blog/meity-ai-consultation-custom-ai-india-2026) and [WhatsApp AI vs a custom chatbot](/blog/whatsapp-business-ai-vs-custom-chatbot-india).",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/blog/meity-ai-consultation-custom-ai-india-2026",
        title: "MeitY AI consultation for Indian buyers",
        text: "Reviewable product vs a deepfake demo.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
    contentUpdatedAt: "2026-10-17",
  },
  "ui-ux-design": {
    metaTitle: "UI/UX Design Agency in Jaipur, India | Figma Product Design",
    bannerTitle: "UI/UX Design Agency in Jaipur, India",
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Hindi UI and India product design",
        paragraphs: [
          "Figma product UI from Jaipur for Indian websites and apps, from ₹20,000. Related: [Hindi and Indic UI/UX](/blog/hindi-indic-ui-ux-design-india-2026), then [website development](/services/website-development) or [mobile app development](/services/mobile-app-development).",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/blog/hindi-indic-ui-ux-design-india-2026",
        title: "Hindi / Indic UI/UX in India",
        text: "Real Hindi pages, not a widget.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
    contentUpdatedAt: "2026-10-17",
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
          "Logo, colour, type and guidelines from Jaipur, from ₹30,000, then a [website](/services/website-development) or [ecommerce store](/solutions/ecommerce-website-development). Related: [D2C branding and trademarks in India](/blog/d2c-branding-trademark-india-festive-2026). We are not a trademark attorney.",
          "Indian D2C labels often arrive with a festival drop date and no guidelines PDF. We still start with the system the website can use: primary mark, reverse, colour that survives GST invoice paper, and type that works in Hindi if the store is bilingual. Campaign kits after the identity exists are [graphic design](/services/graphic-design). We will not file a trademark or promise a class number.",
          "Published branding packs: ₹30,000 / ₹60,000 / ₹1,20,000 on [pricing](/pricing). Naming is in scope only when you ask. The studio is at Patrakar Colony, Jaipur; delivery is remote across India.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/blog/d2c-branding-trademark-india-festive-2026",
        title: "D2C branding and trademarks (India)",
        text: "What we design vs what a lawyer files.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
    contentUpdatedAt: "2026-10-17",
  },
  rpa: {
    extraSections: [
      {
        id: "india-city-pages",
        heading: "RPA for Indian SMEs, from Jaipur",
        paragraphs: [
          "Invoice, Tally and CRM bots from Jaipur, from ₹50,000. Related: [UiPath AI Trust Layer audit default — record the process first](/blog/uipath-ai-trust-layer-audit-off-rpa-india-2026). If the spreadsheet is the product, see [business modernization](/services/business-modernization).",
          "The first process we usually record is the one accounts already do twice: GST invoice PDF to Tally, or a portal report into a sheet. A bot that copies a validated row and stops on a mismatch is RPA. A model that “decides” an exception is [AI development](/services/ai-development). We do not invent hours-saved percentages. Published plans: ₹50,000 / ₹1,00,000 / ₹2,00,000. UiPath, Power Automate or Python is a stack choice in the written scope. We are not listed as a UiPath partner on this page.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/blog/uipath-ai-trust-layer-audit-off-rpa-india-2026",
        title: "RPA vs UiPath LLM audit default for Indian SMEs",
        text: "Record the process before you buy a platform.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
    contentUpdatedAt: "2026-10-17",
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
          "Flows, Apex and integrations on an org you already pay for, from ₹80,000. Related: [Salesforce Hunter and Piper — one working Flow](/blog/salesforce-hunter-piper-agents-sme-india-2026). If a commissions CRM will not fit, see [custom CRM/ERP](/services/crm-erp-development).",
          "Indian mid-market teams often already pay for Sales Cloud and then ask for a commissions tree, Tally invoice sync, or a WhatsApp note on the lead. We implement what Fits Flows first. Apex and LWC when Flows are not enough. We do not claim Summit-partner status. Published work starts from ₹80,000. If the cheaper long-term answer is a custom CRM, we say so before you buy more licences.",
          "Kickoff is a video review of your org with the access you grant. Delivery is from Jaipur. Hindi field labels are ordinary when your sales team works in Hindi. Website or ERP connections are scoped after we read the other system’s docs.",
          "A typical first slice is one Flow that replaces a spreadsheet of follow-ups, or an Apex class that writes GST invoice numbers back from Tally. Delhi NCR distributors often want IndiaMART leads in a queue a sales manager can close on the phone. Mumbai trading desks want a custom object that does not fight Sales Cloud’s opportunity stages. We implement on the org you already pay for. If you do not have Salesforce yet, we will not sell you licences — we will say whether a custom CRM is cheaper over two years.",
          "What we will not print: a licence count we have not seen, a “certified partner” badge that is not in this repo, or an Agentforce guarantee. Share the org, the objects that hurt, and whether Tally or a website must sync. We return a written range in INR.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/blog/salesforce-hunter-piper-agents-sme-india-2026",
        title: "Salesforce Hunter and Piper for Indian SMEs",
        text: "Implement, don’t collect keynotes.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
    contentUpdatedAt: "2026-10-17",
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
          "Pipelines, inventory, GST billing and Tally from Jaipur. A CRM module MVP starts from ₹3,00,000. Related: [MLM CRM and GST IMS payouts](/blog/mlm-crm-gst-ims-payouts-india-2026) and [custom software](/services/software-development).",
          "Jaipur exporters and NCR vendors usually need leads from a website form, a WhatsApp note, and a GST invoice that matches Tally — not a 40-module ERP poster. We ship one CRM module first: pipeline, accounts, follow-ups. Inventory and GST billing are the second slice when the first is in use. You own the code after payment. Salesforce stays the right buy when Sales Cloud already fits; we will say so.",
          "IndiaMART-style lead capture is in scope when you have the mailbox or API. We do not scrape portals. Mobile companions sit on [mobile app development](/services/mobile-app-development). Network-marketing trees belong on [MLM software](/services/mlm-crm-development).",
          "Published CRM module MVPs start at ₹3,00,000; broader ERP-lite is phased (₹6,00,000 / ₹11,00,000 bands on [pricing](/pricing) where listed). Discovery is a video call from Jaipur. You get weekly demos and the source after payment. We do not host your customer data on a mystery SaaS we control.",
          "Jaipur jewellery and export teams usually start with a lead board plus GST invoice numbers that match Tally. Sitapura dealers want a portal that shows outstanding and dispatch, not a 40-screen ERP they will never open. We will not migrate data we have not seen, and we will not print a “SAP replacement” slogan.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/blog/mlm-crm-gst-ims-payouts-india-2026",
        title: "MLM CRM and GST IMS payouts",
        text: "When a commissions tree will not fit Salesforce.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
    contentUpdatedAt: "2026-10-17",
  },
  "mlm-crm-development": {
    extraSections: [
      {
        id: "india-city-pages",
        heading: "MLM software from Jaipur, India",
        paragraphs: [
          "Binary, unilevel and matrix plans from Jaipur, published from ₹3,50,000. Related: [DPDP guardian consent for direct-selling CRM](/blog/dpdp-guardian-consent-mlm-crm-india-2026). We do not give legal advice on the Direct Selling Rules.",
          "The software is genealogy, e-wallet, KYC, e-pin and payouts as scoped — not a licence to sell. Direct selling in India sits under the Consumer Protection (Direct Selling) Rules, 2021. We will not print a compensation plan you did not approve, and we will not promise a “SEBI-approved MLM”. Wallet payouts that sit on a bank rail belong next to [fintech app development](/services/fintech-app-development) when you already have the partner.",
          "Published plans: ₹3,50,000 / ₹6,50,000 / ₹12,00,000 on [pricing](/pricing). Distributor apps are iOS, Android and web when the scope says so. Delivery is from Jaipur with weekly demos. You own the code after completion and payment.",
          "A first release is usually one compensation plan, KYC, a wallet ledger, and a distributor login — not every binary/matrix variant on day one. We write the plan maths down before we code. Payout files go to the bank process you already run; we are not a payment aggregator. Hindi distributor UI is ordinary. Related reading stays on the ADSEI/direct-selling guide; this page is the software.",
          "Jaipur and NCR network-marketing firms usually arrive with a PowerPoint of the plan and a WhatsApp group of distributors. We still write the maths as tables: join fee, PV, carry-over, capping, and what happens on a refund. Binary spill, unilevel levels and matrix width are different products; mixing them on day one is how payouts go wrong. KYC is Aadhaar/PAN as you already collect — we store what you ask, we do not run a KYC bureau. E-pin generation and a wallet ledger sit in the first release when the scope says so. Payout files (NEFT/IMPS batches) go to the process your bank already runs. We will not hold distributor money. If consumer-protection counsel tells you the plan cannot operate in a state, that is a legal question, not a software toggle. Related CRM without a commissions tree stays on the [custom CRM](/services/crm-erp-development) page.",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
    contentUpdatedAt: "2026-10-17",
  },
  "ev-charging-app-development": {
    extraSections: [
      {
        id: "india-city-pages",
        heading: "EV charging CMS from Jaipur, India",
        paragraphs: [
          "OCPP and OCPI software for Indian CPOs and eMSPs, from ₹4,50,000. Related: [OCPI roaming explained](/blog/ocpi-roaming-explained-cpo-emsp) and [Jio-bp–Kia roaming — CPOs still need CSMS](/blog/jiobp-kia-roaming-csms-india-2026).",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/blog/ocpi-roaming-explained-cpo-emsp",
        title: "OCPI roaming for CPO and eMSP",
        text: "Locations, tokens, sessions, CDRs — not a hub we operate.",
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
    contentUpdatedAt: "2026-10-17",
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
          "Phased web apps from Jaipur, from ₹1,50,000. Related: [1 November inverted-duty ITC — stop running refunds on a spreadsheet](/blog/gst-1-nov-inverted-duty-modernize-india-2026). Greenfield products belong on [custom software](/services/software-development).",
          "The first slice is almost always the spreadsheet everyone is afraid to break: dispatch, dealer rates, or month-end GST. We keep the old file running until the new module takes that job. Bots that sit on the old process without replacing it are [RPA](/services/rpa). A boxed CRM you already pay for is [Salesforce](/services/salesforce) when it fits.",
          "Published work from ₹1,50,000. Desktop tools that only run on one Windows box, WhatsApp-as-workflow, and Tally macros that break every rate change are the usual brief. We do not invent a “digital transformation” percentage. Hindi staff UIs are ordinary. Delivery is remote from Jaipur with optional travel.",
          "Cutover is a date you pick after the new module has run in parallel. We do not switch off the spreadsheet on a Friday night. GSTIN, Tally company name and the NAP on the invoice stay yours. If the job is really a greenfield SaaS, use the [software development](/services/software-development) page instead of this one.",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
    contentUpdatedAt: "2026-10-17",
  },
  "on-demand": {
    extraSections: [
      {
        id: "india-city-pages",
        heading: "Hire developers in India, from Jaipur",
        paragraphs: [
          "Named React, Node and mobile developers from Jaipur. Project work from ₹50,000. Related: [TCS AI hiring vs named hours](/blog/tcs-ai-hiring-on-demand-developers-india-2026) and [GSTN sandbox developers](/blog/hire-developers-gstn-sandbox-india-2026).",
          "This page is staff-aug: a named person inside your sprint, NDA/IP in the contract, IST overlap that also covers morning UK hours. A written MVP with a first-release cut is still [custom software](/services/software-development) or [mobile app development](/services/mobile-app-development). Bangalore product teams who want a module, not a vendor in Koramangala, often start on the software city page and add hours here later.",
          "The published ₹50,000 is a project starting price, not a monthly rate we invented. Monthly role rates are written after stack and hours. We do not list a “$25/hour” banner. Roles: React, Next.js, Node, React Native, Flutter, DevOps. The URL stays /services/on-demand.",
          "You get a named lead, a shared board, and IST standups if you already run them. We will not park an anonymous bench on your GitHub. IP assignment is in the contract. If you need GSTN sandbox hours, start from the hire-developers GSTN guide then this page. If you need a finished module with a written first-release cut, that is still a software project, not a body shop.",
          "Availability is written in IST hours. A two-week spike and a three-month named seat are both in scope; an unnamed bench is not. Share the stack, the repo access model, and whether you need GST invoices from Jaipur. We reply with who is free and a written range — not a “$25/hour” banner.",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
    contentUpdatedAt: "2026-10-17",
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
          "Jaipur jewellers and exporters usually need a catalogue that matches metal and stone names on the website, not a Canva template with a Pink City watermark. Mumbai D2C drops need size-chart graphics that match the SKUs on [ecommerce website development](/solutions/ecommerce-website-development). NCR B2B firms need capability one-pagers a procurement team can open as a PDF. We design against the live URL. We do not invent a ROAS number or a “viral post” guarantee.",
          "Published packs start from ₹10,000, then ₹25,000 and ₹50,000 on [pricing](/pricing). Source files (AI, PSD or Figma) are in the scope when you ask. Hindi and English on the same layout are ordinary. We will not typeset a trademark you have not filed as if it were registered.",
          "A typical Jaipur briefing is a 10-post social set plus two ad sizes that match the live website palette. We will not design a second logo that fights the [branding](/services/branding) guidelines. Delivery is Figma or print-ready files as scoped, from the Patrakar Colony studio, GST invoice from Trifusion Infotech Private Limited.",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
    contentUpdatedAt: "2026-10-17",
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
    contentUpdatedAt: "2026-10-17",
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
    contentUpdatedAt: "2026-10-17",
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
          "Kotlin or React Native from Jaipur, from ₹2,50,000. Both stores: [mobile app development](/services/mobile-app-development). Related: [Motorola Signature 27 India](/blog/motorola-signature-27-india-whats-known).",
        ],
      },
    ],
    schemaAreaServed: INDIA_AREA_SERVED,
    contentUpdatedAt: "2026-10-17",
  },
};
