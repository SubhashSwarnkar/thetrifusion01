import { NAP_LINE, SOURCES } from "./servicePlan/_shared";

export const FINTECH_HUB_PATH = "/services/fintech-app-development";

/**
 * Dedicated BBPS / AEPS / DMT / recharge pages. Prices are the published
 * fintech Basic plan (₹99,999) — not invented module SKUs. No fabricated
 * transaction volumes, client counts, or licence claims.
 */
export const fintechProductPages = [
  {
    slug: "bbps-software",
    path: `${FINTECH_HUB_PATH}/bbps-software`,
    breadcrumbName: "BBPS software",
    metaTitle: "BBPS Software Provider India | White-Label Bharat BillPay",
    h1: "BBPS software for retailers and distributors in India",
    metaDescription:
      "White-label BBPS (Bharat BillPay) software from Jaipur: retailer app, distributor panel and admin. From ₹99,999. You bring BBPOU/NPCI access; we build the panels.",
    keywords:
      "BBPS software provider India, Bharat BillPay software, white label BBPS, bill payment software Jaipur",
    serviceType: "BBPS software development",
    answer:
      "BBPS (Bharat BillPay) is an NPCI product. TheTriFusion builds white-label BBPS software from Jaipur — retailer app, distributor panel and admin — so operators can offer bill payments on a stack they brand. You arrange BBPOU / NPCI access; we do not issue those permissions. Published fintech plans start at ₹99,999. See NPCI Bharat BillPay.",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic fintech plan)" },
      { label: "You bring", value: "BBPOU / NPCI Bharat BillPay access" },
      { label: "We build", value: "Retailer app, distributor panel, admin" },
      { label: "Office", value: NAP_LINE },
    ],
    sections: [
      {
        heading: "What BBPS software actually does",
        paragraphs: [
          "Bharat BillPay is the NPCI bill-payment system. Software on top of it lets a retailer collect electricity, water, mobile, and other biller payments through a panel you brand. The biller list, settlement, and complaint handling follow the BBPOU you contract — not a page on this site.",
          `Product overview: [NPCI Bharat BillPay](${SOURCES.npciBbps}).`,
        ],
      },
      {
        heading: "What you must already have",
        paragraphs: [
          "A BBPOU (Bharat Bill Payment Operating Unit) or an aggregator that already sits on BBPS. We integrate the APIs that partner documents. We do not onboard you to NPCI.",
        ],
      },
      {
        heading: "Pricing",
        paragraphs: [
          "Published plans on [fintech app development](/services/fintech-app-development) and [pricing](/pricing): ₹99,999 / ₹1,99,999 / ₹3,99,999. BBPOU or aggregator fees are separate. There is no separate invented BBPS-only SKU on this site.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is BBPS software?",
        answer:
          "Software for retailers and distributors to offer Bharat BillPay (BBPS) bill payments. BBPS is an NPCI product (https://www.npci.org.in/what-we-do/bharat-billpay/product-overview). The operator needs BBPOU access; we build the panels.",
      },
      {
        question: "How much does white-label BBPS software cost?",
        answer:
          "TheTriFusion published fintech plans start at ₹99,999, ₹1,99,999 and ₹3,99,999. Bank or BBPOU fees are separate.",
      },
      {
        question: "Do you provide BBPS / NPCI access?",
        answer:
          "No. Only software. You bring the BBPOU or aggregator API. Read NPCI (https://www.npci.org.in/).",
      },
      {
        question: "Can BBPS sit on the same retailer app as AEPS or DMT?",
        answer:
          "Yes, when those modules are in the same locked brief. See AEPS software, DMT software, and recharge software on this site.",
      },
    ],
    related: [
      { href: "/services/fintech-app-development/aeps-software", title: "AEPS software", text: "Aadhaar-enabled payments on the same retailer stack." },
      { href: "/services/fintech-app-development/dmt-software", title: "DMT software", text: "Domestic money transfer for the retailer network." },
      { href: "/services/fintech-app-development/recharge-software", title: "Recharge software", text: "Mobile and DTH recharge on the partner you contract." },
      { href: FINTECH_HUB_PATH, title: "Fintech app development", text: "The hub for BBPS, AEPS, DMT, recharge and UPI." },
    ],
  },
  {
    slug: "aeps-software",
    path: `${FINTECH_HUB_PATH}/aeps-software`,
    breadcrumbName: "AEPS software",
    metaTitle: "AEPS Software India | White-Label AePS Retailer App",
    h1: "AEPS software for Aadhaar-enabled payments in India",
    metaDescription:
      "White-label AEPS (AePS) software from Jaipur: retailer app, biometric flow and admin. From ₹99,999. You bring sponsor-bank / NPCI AePS access; we build the software.",
    keywords:
      "AEPS software India, AePS software provider, Aadhaar enabled payment software, white label AEPS Jaipur",
    serviceType: "AEPS software development",
    answer:
      "AePS (Aadhaar Enabled Payment System) is an NPCI product. TheTriFusion builds white-label AEPS software from Jaipur: retailer app, biometric capture against devices your sponsor bank already certifies, distributor panel and admin. You arrange sponsor-bank / NPCI AePS access. We do not certify devices or issue bank permissions. Published fintech plans start at ₹99,999.",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic fintech plan)" },
      { label: "You bring", value: "Sponsor bank / NPCI AePS access + certified devices" },
      { label: "We build", value: "Retailer app, distributor panel, admin" },
      { label: "Office", value: NAP_LINE },
    ],
    sections: [
      {
        heading: "What AEPS software actually does",
        paragraphs: [
          "AePS lets a retailer offer Aadhaar-authenticated cash-in, cash-out and related services when the sponsor bank and NPCI access exist. The software is the retailer flow, role hierarchy, wallets and reports. Authentication rules follow the bank and NPCI — not a slogan on this page.",
          `Product overview: [NPCI AePS](${SOURCES.npciAeps}).`,
        ],
      },
      {
        heading: "Devices and fraud controls",
        paragraphs: [
          "We integrate biometric devices your AEPS partner already lists. We do not invent a device roster. Encryption, audit logs and a VAPT scope can be written into the contract; we do not print a fake audit certificate. For current biometric and fraud circulars, read NPCI and RBI primary pages.",
        ],
      },
      {
        heading: "Pricing",
        paragraphs: [
          "Published plans: ₹99,999 / ₹1,99,999 / ₹3,99,999 on [fintech app development](/services/fintech-app-development) and [pricing](/pricing). Bank, device vendor and aggregator fees are separate.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is AEPS software?",
        answer:
          "Software for retailers to offer Aadhaar-enabled payments (AePS). AePS is an NPCI product (https://www.npci.org.in/what-we-do/aeps/product-overview). The operator needs a sponsor bank; we build the panels.",
      },
      {
        question: "Which AEPS biometric devices are supported?",
        answer:
          "Devices your AEPS partner already certifies. We integrate what that partner lists; we do not invent a device roster.",
      },
      {
        question: "How much does white-label AEPS software cost?",
        answer:
          "TheTriFusion published fintech plans start at ₹99,999, ₹1,99,999 and ₹3,99,999. Bank or aggregator fees are separate.",
      },
      {
        question: "Do you provide the AEPS API or a licence?",
        answer:
          "Only software. You bring the sponsor bank or aggregator. We are not a licence bureau. Read RBI (https://www.rbi.org.in/) and NPCI (https://www.npci.org.in/).",
      },
    ],
    related: [
      { href: "/services/fintech-app-development/bbps-software", title: "BBPS software", text: "Bharat BillPay on the same retailer hierarchy." },
      { href: "/services/fintech-app-development/dmt-software", title: "DMT software", text: "Domestic money transfer for the retailer network." },
      { href: "/services/fintech-app-development/recharge-software", title: "Recharge software", text: "Mobile and DTH recharge modules." },
      { href: FINTECH_HUB_PATH, title: "Fintech app development", text: "The hub for BBPS, AEPS, DMT, recharge and UPI." },
    ],
  },
  {
    slug: "dmt-software",
    path: `${FINTECH_HUB_PATH}/dmt-software`,
    breadcrumbName: "DMT software",
    metaTitle: "DMT Software India | White-Label Domestic Money Transfer",
    h1: "DMT and XDMT software for retailer networks in India",
    metaDescription:
      "White-label DMT / XDMT software from Jaipur: retailer app, distributor panel and admin. From ₹99,999. You bring the bank or aggregator contract; we build the software.",
    keywords:
      "DMT software India, XDMT software, domestic money transfer software, white label DMT Jaipur",
    serviceType: "DMT software development",
    answer:
      "DMT (domestic money transfer) and XDMT sit on the bank or aggregator you contract — they are not an NPCI product in the same way BBPS and AePS are. TheTriFusion builds white-label DMT software from Jaipur: retailer send-money flow, distributor panel and admin. You bring the partner. Published fintech plans start at ₹99,999. We do not issue RBI licences.",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic fintech plan)" },
      { label: "You bring", value: "Bank or aggregator DMT contract" },
      { label: "We build", value: "Retailer app, distributor panel, admin" },
      { label: "Office", value: NAP_LINE },
    ],
    sections: [
      {
        heading: "What DMT software actually does",
        paragraphs: [
          "The retailer collects a send-money request, the partner rail moves the funds, and the admin shows wallets, limits and reports. Limits, KYC and settlement are the partner’s rules. We implement the panels against those APIs.",
          `For payment-system circulars, start at [RBI](${SOURCES.rbi}) and [NPCI](${SOURCES.npci}).`,
        ],
      },
      {
        heading: "DMT vs BBPS vs AEPS",
        paragraphs: [
          "BBPS is bill pay (NPCI Bharat BillPay). AEPS is Aadhaar-enabled payments (NPCI AePS). DMT is domestic money transfer on a bank/aggregator contract. They often share one retailer app; each still needs its own partner access.",
        ],
      },
      {
        heading: "Pricing",
        paragraphs: [
          "Published plans: ₹99,999 / ₹1,99,999 / ₹3,99,999 on [fintech app development](/services/fintech-app-development) and [pricing](/pricing). Partner fees are separate. No invented per-transaction rate is published here.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is DMT software?",
        answer:
          "Software for a retailer network to offer domestic money transfer. The rail is the bank or aggregator you contract. We build the retailer, distributor and admin panels.",
      },
      {
        question: "Is a licence required to run DMT?",
        answer:
          "Operators need the relationships RBI requires. We are not a licence bureau. Read circulars on https://www.rbi.org.in/.",
      },
      {
        question: "How much does DMT software cost?",
        answer:
          "TheTriFusion published fintech plans start at ₹99,999, ₹1,99,999 and ₹3,99,999. Bank or aggregator fees are separate.",
      },
      {
        question: "Can DMT and XDMT share one admin?",
        answer:
          "Yes when the partner APIs and the locked brief say so. We do not invent a product name as a separate SKU.",
      },
    ],
    related: [
      { href: "/services/fintech-app-development/bbps-software", title: "BBPS software", text: "Bill payments through Bharat BillPay." },
      { href: "/services/fintech-app-development/aeps-software", title: "AEPS software", text: "Aadhaar-enabled payments at the retailer." },
      { href: "/services/fintech-app-development/recharge-software", title: "Recharge software", text: "Mobile and DTH recharge on the same stack." },
      { href: FINTECH_HUB_PATH, title: "Fintech app development", text: "The hub for BBPS, AEPS, DMT, recharge and UPI." },
    ],
  },
  {
    slug: "recharge-software",
    path: `${FINTECH_HUB_PATH}/recharge-software`,
    breadcrumbName: "Recharge software",
    metaTitle: "Recharge Software India | White-Label Mobile & DTH Recharge",
    h1: "Recharge software for mobile, DTH and utility top-ups in India",
    metaDescription:
      "White-label recharge software from Jaipur: retailer app, distributor panel and admin. From ₹99,999. You bring the recharge API partner; we build the software.",
    keywords:
      "recharge software India, mobile recharge software, DTH recharge software, white label recharge Jaipur",
    serviceType: "Recharge software development",
    answer:
      "Recharge software lets a retailer offer mobile, DTH and similar top-ups through a branded app and admin. The live operators and denominations come from the API partner you contract. TheTriFusion builds the panels from Jaipur. Published fintech plans start at ₹99,999. We do not resell operator inventory.",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic fintech plan)" },
      { label: "You bring", value: "Recharge / bill-pay API partner" },
      { label: "We build", value: "Retailer app, distributor panel, admin" },
      { label: "Office", value: NAP_LINE },
    ],
    sections: [
      {
        heading: "What recharge software actually does",
        paragraphs: [
          "The retailer picks an operator and amount, the partner API posts the top-up, and the admin shows commission, failures and retries. Operator lists change on the partner side; we do not hard-code a public operator roster that will go stale.",
        ],
      },
      {
        heading: "Recharge next to BBPS",
        paragraphs: [
          `Some bills belong on [BBPS / Bharat BillPay](${SOURCES.npciBbps}). Prepaid mobile and DTH often sit on a recharge aggregator. The locked brief says which rail each product uses. We do not merge them into one invented product name.`,
        ],
      },
      {
        heading: "Pricing",
        paragraphs: [
          "Published plans: ₹99,999 / ₹1,99,999 / ₹3,99,999 on [fintech app development](/services/fintech-app-development) and [pricing](/pricing). Aggregator and operator fees are separate.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is recharge software?",
        answer:
          "Software for retailers to sell mobile, DTH and similar top-ups through a partner API. We build the retailer, distributor and admin panels. We do not hold operator inventory.",
      },
      {
        question: "How much does recharge software cost?",
        answer:
          "TheTriFusion published fintech plans start at ₹99,999, ₹1,99,999 and ₹3,99,999. Partner fees are separate.",
      },
      {
        question: "Do you provide the recharge API?",
        answer:
          "Only when a specific integration is named in the contract. By default you bring the aggregator API.",
      },
      {
        question: "Can recharge share the BBPS / AEPS / DMT retailer app?",
        answer:
          "Yes when those modules are in the same brief. See the BBPS, AEPS and DMT software pages.",
      },
    ],
    related: [
      { href: "/services/fintech-app-development/bbps-software", title: "BBPS software", text: "Bharat BillPay for postpaid and utility bills." },
      { href: "/services/fintech-app-development/aeps-software", title: "AEPS software", text: "Aadhaar-enabled payments at the retailer." },
      { href: "/services/fintech-app-development/dmt-software", title: "DMT software", text: "Domestic money transfer for the same network." },
      { href: FINTECH_HUB_PATH, title: "Fintech app development", text: "The hub for BBPS, AEPS, DMT, recharge and UPI." },
    ],
  },
];

export const FINTECH_PRODUCT_SLUGS = fintechProductPages.map((page) => page.slug);

export function getFintechProductBySlug(slug) {
  return fintechProductPages.find((page) => page.slug === slug) || null;
}
