import { NAP_LINE, SOURCES, TEAM } from "./_shared";

/**
 * /services/fintech-app-development
 * TODO OWNER: live demo (retailer app + admin).
 * TODO OWNER: which API aggregators you have integrated with (names).
 * TODO OWNER: client count / operators live.
 */
export default {
  contentUpdatedAt: "2026-10-28",
  metaTitle: "BBPS, AEPS & DMT Software Provider India | White-Label Fintech Apps",
  bannerTitle: "BBPS, AEPS, DMT & XDMT Software Development in India",
  metaDescription:
    "White-label BBPS, AEPS, DMT, recharge and UPI software: retailer app, distributor panel and admin. From ₹99,999. You bring bank/API partner, we build.",
  keywords:
    "BBPS AEPS DMT software provider India, white label fintech software India, recharge software company Jaipur, XDMT software India",
  answerFirst: {
    id: "quick-answer",
    heading: "BBPS, AEPS and DMT software: the short answer",
    text:
      "TheTriFusion builds white-label BBPS, AEPS, DMT, XDMT, recharge and UPI software from Jaipur: retailer app, distributor panel and admin. You bring the bank, BBPOU or API partner; we build the software. Published plans start from ₹99,999. We do not issue NPCI or RBI licences. See [NPCI](" +
      SOURCES.npci +
      ") and [RBI](" +
      SOURCES.rbi +
      ").",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic plan)" },
      { label: "You bring", value: "Bank / BBPOU / API partner" },
      { label: "We build", value: "Retailer app, distributor panel, admin" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "fintech-modules",
      heading: "Modules: BBPS, AEPS, DMT/XDMT, recharge, PAN, UPI, CMS",
      paragraphs: [
        "[BBPS](" +
          SOURCES.npciBbps +
          ") (Bharat BillPay) and [AePS](" +
          SOURCES.npciAeps +
          ") are NPCI products. DMT/XDMT and recharge sits on the partner you contract. UPI is also NPCI. We implement the panels; we do not onboard you to NPCI. Dedicated pages: [BBPS software](/services/fintech-app-development/bbps-software), [AEPS software](/services/fintech-app-development/aeps-software), [DMT software](/services/fintech-app-development/dmt-software), [recharge software](/services/fintech-app-development/recharge-software).",
      ],
      comparison: {
        heading: "What each module is",
        rowHeader: "Module",
        columns: ["What it does", "Who must already exist"],
        rows: [
          { label: "BBPS", cells: ["Bill payments through Bharat BillPay", "BBPOU / NPCI access"] },
          { label: "AEPS", cells: ["Aadhaar-enabled payments at a retailer", "Sponsor bank / NPCI AEPS"] },
          { label: "DMT / XDMT", cells: ["Domestic money transfer for the retailer network", "Bank or aggregator contract"] },
          { label: "Recharge / UPI / PAN", cells: ["As scoped on the same retailer stack", "The relevant API partner"] },
        ],
      },
    },
    {
      id: "white-label-vs-api",
      heading: "White-label vs own-portal vs API-only",
      paragraphs: [
        "White-label: your brand on the retailer app and admin we build. Own-portal: the same software on infrastructure you name. API-only: you already have UI. We recommend one after seeing who holds the NPCI relationship.",
      ],
      comparison: {
        heading: "Engagement shape",
        rowHeader: " ",
        columns: ["White-label software", "Your portal on your servers", "API-only"],
        rows: [
          { label: "Best for", cells: ["Operators who need app + admin + brand", "Teams with their own DevOps", "You already have a UI"] },
          { label: "You still need", cells: ["Bank / BBPOU / aggregator", "Same, plus hosting", "Same"] },
        ],
      },
    },
    {
      id: "fintech-hierarchy",
      heading: "Retailer → distributor → master distributor → admin",
      paragraphs: [
        "The software models that hierarchy: retailer app, distributor panel, master distributor, admin. Roles, wallets and reports are scoped. We do not invent a “micro ATM in 4 steps” claim.",
      ],
    },
    {
      id: "fintech-pricing",
      heading: "Pricing",
      paragraphs: [
        "Published plans on [pricing](/pricing) and this service: ₹99,999 / ₹1,99,999 / ₹3,99,999.",
      ],
      comparison: {
        heading: "Published fintech plans",
        rowHeader: "Plan",
        columns: ["Starting price", "Typical use"],
        rows: [
          { label: "Basic", cells: ["₹99,999", "Retailer app + admin starting slice"] },
          { label: "Standard", cells: ["₹1,99,999", "Distributor layer and more modules"] },
          { label: "Premium", cells: ["₹3,99,999", "Broader white-label stack"] },
        ],
      },
    },
    {
      id: "go-live-npci",
      heading: "Go-live steps and what the operator must arrange",
      paragraphs: [
        "You arrange BBPOU / sponsor bank / aggregator access, KYC policy, and device vendors (for AEPS biometrics). We build against those contracts. Current product pages: [NPCI](" +
          SOURCES.npci +
          "), [RBI](" +
          SOURCES.rbi +
          "). Encryption, audit logs and VAPT are scoped; we do not print a fake audit certificate.",
      ],
    },
    {
      id: "fintech-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.backend}; ${TEAM.mobile}; ${TEAM.pm}. Aggregator names are not in this repo.`,
      ],
    },
  ],
  faqs: [
    {
      question: "What is BBPS, AEPS and DMT software?",
      answer:
        "Software for retailers and distributors to offer bill pay (BBPS), Aadhaar-enabled payments (AePS) and domestic money transfer (DMT). BBPS and AePS are NPCI products (https://www.npci.org.in/). The operator needs the right partner; we build the panels.",
    },
    {
      question: "How much does white-label AEPS/BBPS software cost?",
      answer:
        "TheTriFusion published plans start at ₹99,999, ₹1,99,999 and ₹3,99,999. Bank or aggregator fees are separate.",
    },
    {
      question: "Do you provide the API or only software?",
      answer:
        "Only software, unless a specific integration is named in the contract. You bring the bank, BBPOU or aggregator API.",
    },
    {
      question: "How do I start a fintech/recharge business in India?",
      answer:
        "That is a licensing and partnership question, not a website slogan. Read RBI (https://www.rbi.org.in/) and NPCI (https://www.npci.org.in/), then talk to a bank or aggregator. We build after those contracts exist.",
    },
    {
      question: "Which AEPS biometric devices are supported?",
      answer:
        "Devices your AEPS partner already certifies. We integrate what that partner lists; we do not invent a device roster.",
    },
    {
      question: "How long to go live?",
      answer:
        "Software can be weeks after a locked brief. NPCI or bank onboarding is on their clock, not ours.",
    },
    {
      question: "Is a licence required to run DMT/AEPS?",
      answer:
        "Operators need the relationships RBI and NPCI require. We are not a licence bureau. Read the circulars on rbi.org.in and npci.org.in.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/fintech-app-development/bbps-software",
      title: "BBPS software",
      text: "Bharat BillPay retailer and distributor panels.",
    },
    {
      href: "/services/fintech-app-development/aeps-software",
      title: "AEPS software",
      text: "Aadhaar-enabled payments on certified devices.",
    },
    {
      href: "/services/fintech-app-development/dmt-software",
      title: "DMT software",
      text: "Domestic money transfer for the retailer network.",
    },
    {
      href: "/services/fintech-app-development/recharge-software",
      title: "Recharge software",
      text: "Mobile and DTH top-ups on the partner you contract.",
    },
    {
      href: "/services/software-development",
      title: "Custom software development",
      text: "When the fintech piece sits inside a broader product.",
    },
    {
      href: "/services/mlm-crm-development",
      title: "MLM software",
      text: "When wallet payouts sit next to a compensation tree.",
    },
  ],
};
