import { NAP_LINE, SOURCES, TEAM } from "./_shared";

/**
 * /services/fintech-app-development
 * Indexed-pages pass 2026-11-18 (§3.9).
 * TODO OWNER: live demo (retailer app + admin).
 * TODO OWNER: client count / operators live.
 */
export default {
  contentUpdatedAt: "2026-11-25",
  replaceFaqs: true,
  replaceRelatedLinks: true,
  metaTitle: "Fintech App Development India | Jaipur BBPS, AEPS & DMT",
  bannerTitle: "Fintech App Development: BBPS, AEPS & DMT Software",
  metaDescription:
    "BBPS, AEPS, DMT and recharge software development in Jaipur: retailer app, distributor panel and admin. From ₹99,999 — you bring the licensed API partner.",
  keywords:
    "BBPS AEPS DMT software provider India, white label fintech software India, recharge software company Jaipur, XDMT software India, fintech app development India",
  industries: [],
  services: [],
  technologies: [
    {
      title: "Mobile & Web Frontend",
      description:
        "React Native, Flutter, Swift, Kotlin, and React.js enterprise admin dashboards.",
    },
    {
      title: "Retailer APIs & partner rails",
      description:
        "BBPS, AEPS, DMT, and XDMT integrations against your bank, BBPOU, or NPCI sandbox — plus UPI and KYC vendors when those modules are in scope.",
    },
    {
      title: "Bank-Grade Security Architecture",
      description:
        "End-to-end TLS encryption, data-at-rest encryption (AES-256), HSM integration when your partner requires it, built following PCI-DSS-aligned practices (certification is the operator's responsibility), and OWASP Top 10 hardening.",
    },
  ],
  scopeHeading: "Fintech software we build",
  scopeKicker: "Modules",
  whyHeading: "Why operators choose TheTriFusion for fintech software",
  breadcrumbName: "Fintech App Development (BBPS, AEPS, DMT)",
  schemaServiceName: "Fintech App Development (BBPS, AEPS, DMT)",
  serviceType: "Fintech App Development (BBPS, AEPS, DMT)",
  primaryCtaLabel: "Get a fintech software demo",
  primaryCtaHref: "/contact?service=fintech-app-development",
  whatsappMessage:
    "Hi TheTriFusion, I want BBPS/AEPS/DMT software. API partner: ",
  leadProjectType: "Fintech (BBPS/AEPS/DMT)",
  formHeading: "Get a BBPS/AEPS software demo",
  midCtaText:
    "Already have an API partner? Send their name on WhatsApp and get a go-live plan.",
  caseStudy: {
    title: "How we scope a fintech build",
    summary:
      "We build the software, not the banking licence. Delivery is scoped around your BBPOU, bank or AEPS partner, KYC vendor and settlement rules.",
    href: "/services/fintech-app-development",
    hrefLabel: "See BBPS, AEPS and DMT modules",
  },
  answerFirst: {
    id: "quick-answer",
    heading: "What is BBPS, AEPS and DMT software, and what does it cost?",
    text:
      "TheTriFusion builds white-label BBPS, AEPS, DMT, recharge and UPI software for fintech operators in India: a retailer app, distributor panel and admin. You bring the bank, BBPOU or API partner, and we build and integrate the software. Plans start at ₹99,999, and go-live typically takes 8–12 weeks after your API sandbox access is ready.",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic plan)" },
      { label: "You bring", value: "Bank / BBPOU / API partner" },
      { label: "We build", value: "Retailer app, distributor panel, admin" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "who-fintech-page-is-for",
      heading: "Who fintech software is for",
      paragraphs: [
        "Choose this hub when you need a white-label retailer stack (app + distributor + admin) and already have — or are arranging — a bank, BBPOU or aggregator contract. Pick a child URL when the brief is only one rail: [BBPS](/services/fintech-app-development/bbps-software), [AEPS](/services/fintech-app-development/aeps-software), [DMT](/services/fintech-app-development/dmt-software), or [recharge](/services/fintech-app-development/recharge-software).",
        "We are not a licence bureau, not a competitor-brand comparison, and we do not claim NPCI membership for you. If the product is a sales CRM or compensation tree, start on [custom CRM](/services/crm-erp-development) or [MLM software](/services/mlm-crm-development) instead. Based in Jaipur? See [fintech app development in Jaipur](/solutions/fintech-app-development-jaipur).",
      ],
    },
    {
      id: "fintech-modules",
      heading: "What each BBPS, AEPS and DMT module does",
      paragraphs: [
        "[BBPS](" +
          SOURCES.npciBbps +
          ") (Bharat BillPay) and [AePS](" +
          SOURCES.npciAeps +
          ") are NPCI products. DMT/XDMT and recharge sits on the partner you contract. UPI is also NPCI. We implement the panels; we do not onboard you to NPCI. Need only one rail? See [BBPS software](/services/fintech-app-development/bbps-software), [AEPS software](/services/fintech-app-development/aeps-software), [DMT software](/services/fintech-app-development/dmt-software), [recharge software](/services/fintech-app-development/recharge-software).",
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
        "The software models that hierarchy: retailer app, distributor panel, master distributor, admin. Roles, wallets and reports are scoped.",
      ],
    },
    {
      id: "fintech-pricing",
      heading: "Fintech software cost and timeline",
      paragraphs: [
        "Published plans on [pricing](/pricing): ₹99,999 / ₹1,99,999 / ₹3,99,999. Bank or aggregator fees are separate.",
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
      heading: "What you need before go-live",
      paragraphs: [
        "You arrange the API partner contract, sandbox and production keys, KYC vendor and settlement bank account; we handle the software, integrations, testing and app store release. Current product pages: [NPCI](" +
          SOURCES.npci +
          "), [RBI](" +
          SOURCES.rbi +
          "). Encryption, audit logs and VAPT are scoped when written into the contract.",
      ],
      included: [
        "API partner contract, sandbox and production keys (operator)",
        "KYC vendor and settlement bank account (operator)",
        "Software, integrations, testing and app store release (TheTriFusion)",
      ],
    },
    {
      id: "typical-project-scope",
      heading: "Typical project scope (example engagement)",
      paragraphs: [
        "Example engagement only — not a client case study and not a named operator. A common white-label fintech brief we scope looks like this.",
        "Scope: retailer and distributor panels for AEPS, BBPS, DMT and recharge, plus admin, integrated with the operator's own licensed bank/BBPOU/API partners. You bring the partner contracts and keys; we build the software. Published plans start at ₹99,999 (Basic), ₹1,99,999 (Standard) and ₹3,99,999 (Premium). Bank or aggregator fees are separate.",
      ],
      included: [
        "Phase 1 — Discovery (about 1 week): module list, partner API docs, roles (retailer → distributor → admin), wallet and commission rules",
        "Phase 2 — Build (about 4–8 weeks): retailer app, distributor panel, admin, ledger/wallet screens, partner sandbox integrations",
        "Phase 3 — UAT & go-live (about 2–3 weeks): production keys, device checks for AEPS where in scope, Play Store release from your account",
        "Typical timeline range: 8–12 weeks after API sandbox access is ready",
        "Deliverables: white-label retailer app, distributor panel, admin, integration against your named partners, source handover as per the written scope",
      ],
    },
    {
      id: "fintech-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.backend}; ${TEAM.mobile}; ${TEAM.pm}. We integrate with the bank, BBPOU or API partner named in your contract.`,
      ],
    },
    {
      id: "india-city-pages",
      heading: "Delivery from Jaipur across India",
      paragraphs: [
        "White-label BBPS, AEPS, DMT, recharge and UPI software from ₹99,999: retailer app, distributor panel and admin. You bring the bank or API partner; we do not issue NPCI/RBI licences. Child modules: [BBPS](/services/fintech-app-development/bbps-software), [AEPS](/services/fintech-app-development/aeps-software), [DMT](/services/fintech-app-development/dmt-software), [recharge](/services/fintech-app-development/recharge-software). Local studio flavour: [fintech app development in Jaipur](/solutions/fintech-app-development-jaipur).",
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
        "TheTriFusion published plans start at ₹99,999, ₹1,99,999 and ₹3,99,999. Bank or aggregator fees are separate. Go-live typically takes 8–12 weeks after your API sandbox access is ready.",
    },
    {
      question: "Do you provide the API or only software?",
      answer:
        "Only software, unless a specific integration is named in the contract. You bring the bank, BBPOU or aggregator API.",
    },
    {
      question: "How do I start a fintech/recharge business in India?",
      answer:
        "That is a licensing and partnership question. Read RBI (https://www.rbi.org.in/) and NPCI (https://www.npci.org.in/), then talk to a bank or aggregator. We build after those contracts exist.",
    },
    {
      question: "Which AEPS biometric devices are supported?",
      answer:
        "Devices your AEPS partner already certifies. We integrate what that partner lists.",
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
    {
      question: "Do you publish named bank or aggregator partners?",
      answer:
        "We integrate with the bank, BBPOU or API partner named in your contract, using that partner's documentation.",
    },
    {
      question: "What is the difference between AEPS and DMT?",
      answer:
        "AEPS lets customers withdraw cash or check balance at a retailer using their Aadhaar number and fingerprint. DMT (domestic money transfer) lets a retailer send money to any bank account for a walk-in customer. Many operators offer both in one retailer app.",
    },
    {
      question: "Can I launch under my own brand?",
      answer:
        "Yes. The retailer app, distributor panel and admin are white-labelled with your brand name, logo and domain, and the Android app is published from your company's own Play Console account.",
    },
    {
      question: "Can distributors and master distributors set their own commissions?",
      answer:
        "Yes, as scoped. The admin defines commission slabs per service, and the retailer → distributor → master distributor hierarchy shows each level its own earnings, wallet and reports.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/mlm-crm-development",
      title: "MLM software with e-wallet and payouts",
      text: "When wallet payouts sit next to a compensation tree.",
    },
    {
      href: "/services/android-app-development",
      title: "Android retailer apps",
      text: "Play Store retailer clients beside the fintech panels.",
    },
    {
      href: "/services/ios-app-development",
      title: "iOS companion apps",
      text: "When distributors need an App Store client beside the counter app.",
    },
    {
      href: "/services/devops",
      title: "secure cloud hosting and monitoring",
      text: "CI/CD, hosting and monitoring for fintech backends.",
    },
    {
      href: "/services/fintech-app-development/bbps-software",
      title: "BBPS software",
      text: "Bharat BillPay retailer and distributor panels.",
    },
    {
      href: "/services/fintech-app-development/aeps-software",
      title: "AEPS software",
      text: "Aadhaar-enabled cash services — you bring sponsor-bank access.",
    },
    {
      href: "/services/fintech-app-development/dmt-software",
      title: "DMT software",
      text: "Domestic money transfer panels — you bring the bank or aggregator.",
    },
    {
      href: "/services/fintech-app-development/recharge-software",
      title: "recharge software",
      text: "Mobile and DTH top-up panels — you bring the aggregator API.",
    },
    {
      href: "/solutions/fintech-app-development-jaipur",
      title: "fintech app development in Jaipur",
      text: "Local studio flavour — same product family.",
    },
  ],
};
