import { NAP_LINE, SOURCES, TEAM } from "./_shared";

/**
 * /services/mlm-crm-development
 * URL unchanged. Keywords retargeted to "MLM software".
 * TODO OWNER: live demo credentials/screens.
 * TODO OWNER: price list if it differs from /pricing ₹3,50,000 / ₹6,50,000 / ₹12,00,000.
 * TODO OWNER: any MLM client you can name.
 */
export default {
  contentUpdatedAt: "2026-10-25",
  metaTitle: "MLM Software Development Company in India | Binary, Unilevel & Matrix",
  bannerTitle: "MLM Software Development Company in Jaipur, India",
  metaDescription:
    "Custom MLM software for binary, unilevel, matrix and hybrid plans — genealogy, e-wallet, KYC, payouts and apps. Built in Jaipur. See plans & pricing.",
  keywords:
    "MLM software development company India, MLM software company Jaipur, binary unilevel MLM software price, MLM CRM Jaipur",
  answerFirst: {
    id: "quick-answer",
    heading: "MLM software development: the short answer",
    text:
      "TheTriFusion builds custom MLM software in Jaipur for binary, unilevel, matrix and hybrid compensation plans: genealogy, e-wallet, KYC, e-pin, payouts, and distributor apps. Published work starts from ₹3,50,000. Software is not a licence. Direct selling in India sits under the [Consumer Protection (Direct Selling) Rules, 2021](" +
      SOURCES.directSellingRules +
      ").",
    facts: [
      { label: "Starting price", value: "From ₹3,50,000 (published Basic plan)" },
      { label: "Plans supported", value: "Binary, unilevel, matrix, board, hybrid — as scoped" },
      { label: "Compliance", value: "Software support for Direct Selling Rules 2021 — not a licence" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "compensation-plans",
      heading: "Compensation plans supported",
      paragraphs: [
        "Unilevel is the plan we already document on this site. Binary, matrix, board and hybrid are scoped from your written plan — we do not ship a mystery engine. Related: [custom CRM/ERP](/services/crm-erp-development) when the job is sales CRM without a tree, and [fintech](/services/fintech-app-development) when the job is wallet payouts on a bank rail.",
      ],
      comparison: {
        heading: "Plan types (software, not legal advice)",
        rowHeader: "Plan",
        columns: ["What the software tracks", "Note"],
        rows: [
          { label: "Unilevel", cells: ["Levels of sponsors", "Already described on this service"] },
          { label: "Binary", cells: ["Two legs, carry-over as written", "Needs your plan rules in writing"] },
          { label: "Matrix / board / hybrid", cells: ["Width/depth or mixed rules", "Scoped; not a hidden extra logo"] },
        ],
      },
    },
    {
      id: "mlm-modules",
      heading: "Core modules",
      paragraphs: [
        "Genealogy tree, e-wallet, payout engine, KYC, e-pin, optional ecommerce, and Android/iOS apps for distributors. See [MLM unilevel compensation notes](/services/crm-erp-development).",
      ],
    },
    {
      id: "mlm-pricing",
      heading: "MLM software pricing",
      paragraphs: [
        "Published plans on [pricing](/pricing): ₹3,50,000 / ₹6,50,000 / ₹12,00,000. Competitor “from ₹19,900” product licences are a different shape of product. We build custom software against your plan.",
      ],
      comparison: {
        heading: "Published MLM plans",
        rowHeader: "Plan",
        columns: ["Starting price", "Typical use"],
        rows: [
          { label: "Basic", cells: ["₹3,50,000", "Unilevel CRM MVP, web admin + one mobile app"] },
          { label: "Standard", cells: ["₹6,50,000", "Broader modules"] },
          { label: "Premium", cells: ["₹12,00,000", "Larger programme"] },
        ],
      },
    },
    {
      id: "direct-selling-rules",
      heading: "Compliance note: Direct Selling Rules 2021",
      paragraphs: [
        "The [Consumer Protection (Direct Selling) Rules, 2021](" +
          SOURCES.directSellingRules +
          ") (Department of Consumer Affairs, [consumeraffairs.nic.in](" +
          SOURCES.consumerAffairs +
          ")) set obligations for direct selling entities in India. Software can support KYC, cooling-off records and payout logs. It is not a registration and not legal advice. Read the rules; ask counsel.",
      ],
    },
    {
      id: "mlm-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.backend}; ${TEAM.pm}; ${TEAM.mobile}. A public demo login is not in this repo.`,
      ],
    },
  ],
  faqs: [
    {
      question: "How much does MLM software cost in India?",
      answer:
        "TheTriFusion published plans start at ₹3,50,000, ₹6,50,000 and ₹12,00,000. The signed price follows the compensation plan and the modules in the first release.",
    },
    {
      question: "Which MLM plan is best — binary or unilevel?",
      answer:
        "That is a business choice, not a software slogan. We implement the plan you write down. Unilevel is the plan already documented on this site.",
    },
    {
      question: "Is MLM software legal in India?",
      answer:
        "Software is not a licence. Direct selling entities in India should read the Consumer Protection (Direct Selling) Rules, 2021 (https://consumeraffairs.nic.in/). Pyramid schemes are a separate legal question for counsel.",
    },
    {
      question: "Can I get a free demo?",
      answer:
        "Ask on the contact page. A public self-serve demo login is not published on this site.",
    },
    {
      question: "Do you provide an Android/iOS app for distributors?",
      answer:
        "Yes, when it is in the scope. The Basic note on this site is web admin plus one mobile app.",
    },
    {
      question: "Can you migrate from my current MLM software?",
      answer:
        "Often yes, if you can export members, wallets and genealogy. We map and check; we do not promise a silent cutover.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/crm-erp-development",
      title: "Custom CRM & ERP",
      text: "When you need CRM without a compensation tree.",
    },
    {
      href: "/services/fintech-app-development",
      title: "Fintech / wallet payouts",
      text: "When payouts sit on a bank or NPCI rail.",
    },
    {
      href: "/services/crm-erp-development",
      title: "Unilevel compensation plan notes",
      text: "How unilevel is modelled in software.",
    },
  ],
};
