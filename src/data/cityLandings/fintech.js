import {
  NAP,
  UPDATED,
  PRICES,
  officeFaq,
  gstFaq,
  siblingCitySlugs,
} from "./_shared";

const PARENT = "/services/fintech-app-development";
const PRICE = PRICES.fintech;

export const fintechCityLandings = [
  {
    slug: "fintech-app-development-jaipur",
    serviceAreaCity: "Jaipur",
    serviceAreaRegion: "Rajasthan",
    title: "Fintech App Development in Jaipur | BBPS, AEPS & DMT from ₹99,999",
    h1: "Fintech App Development in Jaipur — BBPS, AEPS, DMT from Patrakar Colony",
    navLabel: "Jaipur fintech (HQ)",
    metaDescription:
      "BBPS, AEPS, DMT and recharge software from Jaipur. Retailer app, distributor panel and admin from ₹99,999. You bring the bank or API partner. Patrakar Colony studio.",
    primaryKeyword: "fintech app development company in Jaipur",
    secondaryKeywords: [
      "BBPS software Jaipur",
      "AEPS software Rajasthan",
      "DMT software Jaipur",
      "recharge panel Jaipur",
      "white label fintech Jaipur",
    ],
    outcomeLine:
      "A Rajasthan retailer network gets BBPS, AEPS, DMT or recharge panels built in Jaipur — you bring the bank or aggregator; we build the software. We do not issue NPCI licences.",
    intro: `TheTriFusion builds white-label BBPS, AEPS, DMT, recharge and UPI software from ${NAP}: retailer app, distributor panel and admin. Published plans start from ${PRICE.basic}. You bring the bank, BBPOU or API partner. We do not issue RBI or NPCI licences. Parent page: fintech app development.`,
    sections: [
      {
        title: "What Rajasthan operators actually need",
        body: `CSC-style retailers in Jaipur and nearby towns need a Hindi-capable retailer app, a distributor overlay, and an admin that can explain a failed AEPS. We will not print an operator count we do not have. Live product URLs for BBPS, AEPS, DMT and recharge sit under the parent fintech hub.`,
      },
      {
        title: "You bring the rail",
        body: `NPCI and the bank set who may offer Bharat BillPay or AePS. We build the panels. Read npci.org.in and rbi.org.in. We are not a licence bureau.`,
      },
      {
        title: "Published INR plans",
        body: `From ${PRICE.basic}, then ₹1,99,999 and ₹3,99,999 on pricing. Aggregator fees are on your partner bills.`,
      },
      {
        title: "Kickoff at the studio",
        body: `Jaipur operators can visit. Demos are weekly. UPI MDR dates are NPCI’s to notify — see the recharge MDR guide on this site.`,
      },
      {
        title: "Parent page",
        body: `Modules, products and India FAQs: fintech app development company in India.`,
      },
    ],
    faqs: [
      officeFaq("Jaipur"),
      {
        question: "Do you provide the BBPS or AEPS API?",
        answer:
          "By default you bring the bank, BBPOU or aggregator. We build the software.",
      },
      {
        question: "How much does fintech software cost in Jaipur?",
        answer: `Published plans start at ${PRICE.basic}.`,
      },
      {
        question: "Will you get us an NPCI membership?",
        answer: "No. We are not a licence bureau.",
      },
      gstFaq("Jaipur"),
    ],
    deliverables: [
      "Retailer app, distributor panel, admin as scoped",
      "Hindi UI option",
      "Integration against the partner you contract",
      "Weekly demos at the Jaipur studio or video",
      "GST invoice from this company",
    ],
    audiences: [
      "Rajasthan retailer networks",
      "Distributors needing a panel",
      "Operators who already have an API partner",
      "Jaipur fintech founders who need software, not a licence",
    ],
    timelineRange:
      "Software can be weeks after a locked brief. NPCI or bank onboarding is on their clock.",
    whatsappMessage:
      "Hi TriFusion, I want BBPS/AEPS/DMT software scoped at your Jaipur studio.",
    relatedServiceSlugs: [
      "fintech-app-development",
      "software-development",
      "mobile-app-development",
      "mlm-crm-development",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "fintech",
      "fintech-app-development-jaipur"
    ),
    relatedLinks: [
      { href: PARENT, label: "Fintech app development company in India (parent page)" },
      {
        href: "/services/fintech-app-development/bbps-software",
        label: "BBPS software",
      },
    ],
    cta: "Get a scoped Jaipur fintech estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "fintech-app-development-delhi",
    serviceAreaCity: "Delhi",
    serviceAreaRegion: "Delhi",
    title: "Fintech App Development in Delhi NCR | From Jaipur, ₹99,999",
    h1: "Fintech Software for Delhi NCR — From Our Jaipur Office",
    navLabel: "Delhi NCR fintech (from Jaipur)",
    metaDescription:
      "BBPS, AEPS, DMT and recharge software for Delhi NCR operators from TheTriFusion in Jaipur. From ₹99,999. You bring the API partner. No Delhi office.",
    primaryKeyword: "fintech app development company in Delhi",
    secondaryKeywords: [
      "BBPS software Delhi NCR",
      "AEPS panel Gurgaon",
      "DMT software Noida",
      "recharge software Delhi",
      "white label fintech NCR",
    ],
    outcomeLine:
      "An NCR distributor network gets retailer/admin panels from Jaipur — compliance copy stays honest, no invented Nehru Place NPCI desk.",
    intro: `Delhi NCR fintech briefs are denser distributor trees, GST-heavy admin, and operators who already talk to a bank or aggregator in NCR. TheTriFusion has no Delhi office and is not a payment aggregator. Delivery from ${NAP}. From ${PRICE.basic}.`,
    sections: [
      {
        title: "NCR distributor trees",
        body: `Delhi NCR networks are often denser: retailer, super-distributor, admin, and a GST-heavy invoice trail. More layers need clearer roles. We will not invent a commission table; you supply the plan. If a Gurgaon or Noida bank or aggregator already gave you sandbox docs, we integrate against those — we do not broker the relationship or print a Nehru Place NPCI desk. E-invoice fields on the admin must match what you file; we do not file returns. PPI, NBFC and PA licences are out of scope. Published plans start at ${PRICE.basic}. Partner fees stay on their bills. Live BBPS, AEPS, DMT and recharge product URLs sit on the parent fintech hub.`,
      },
      {
        title: "E-invoice and GST on the admin",
        body: `If the admin prints GST invoices, the fields must match what you file. We do not file returns.`,
      },
      {
        title: "INR plans",
        body: `From ${PRICE.basic}. Partner fees extra.`,
      },
      {
        title: "No Delhi licence shop",
        body: `We will not print a Connaught Place NPCI office. RBI and NPCI stay the source.`,
      },
      {
        title: "Parent page",
        body: `fintech app development.`,
      },
    ],
    faqs: [
      officeFaq("Delhi"),
      {
        question: "Can you integrate a Gurgaon bank’s API?",
        answer:
          "If they give you docs and a sandbox, yes. We do not broker the bank relationship.",
      },
      {
        question: "Do you handle PPI or NBFC licensing?",
        answer: "No.",
      },
      {
        question: "How much does fintech software cost in Delhi NCR?",
        answer: `Published plans start at ${PRICE.basic}.`,
      },
      gstFaq("Delhi"),
    ],
    deliverables: [
      "Retailer / distributor / admin as scoped",
      "Sandbox integration against your partner",
      "IST weekly demos",
      "GST-aware invoice fields when in scope",
      "GST invoice from Jaipur for the project",
    ],
    audiences: [
      "NCR distributor networks",
      "Operators with an existing aggregator",
      "Gurgaon product teams wrapping a rail",
      "Teams who need software, not a licence",
    ],
    timelineRange:
      "Software weeks after a locked brief. Bank onboarding on their clock.",
    whatsappMessage:
      "Hi TriFusion, I want Delhi NCR BBPS/AEPS/DMT software from Jaipur.",
    relatedServiceSlugs: [
      "fintech-app-development",
      "software-development",
      "crm-erp-development",
      "mobile-app-development",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "fintech",
      "fintech-app-development-delhi"
    ),
    relatedLinks: [
      { href: PARENT, label: "Fintech app development company in India (parent page)" },
    ],
    cta: "Get a scoped Delhi NCR fintech estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "fintech-app-development-mumbai",
    serviceAreaCity: "Mumbai",
    serviceAreaRegion: "Maharashtra",
    title: "Fintech App Development in Mumbai | From Jaipur, ₹99,999",
    h1: "Fintech Software for Mumbai — From Our Jaipur Office",
    navLabel: "Mumbai fintech (from Jaipur)",
    metaDescription:
      "BBPS, AEPS, DMT and UPI software for Mumbai operators from TheTriFusion in Jaipur. From ₹99,999. You bring the partner. No Mumbai office.",
    primaryKeyword: "fintech app development company in Mumbai",
    secondaryKeywords: [
      "BBPS software Mumbai",
      "UPI recharge panel Maharashtra",
      "DMT software Mumbai from Jaipur",
      "AEPS software Mumbai",
      "white label fintech BKC",
    ],
    outcomeLine:
      "A Mumbai operator gets retailer panels from Jaipur — UPI-heavy checkout, no pretended BKC banking licence.",
    intro: `Mumbai fintech briefs are UPI-heavy recharge and bill-pay panels, denser retailer networks, and ops teams who already have an aggregator. TheTriFusion is not a bank or PA. No Mumbai office. Delivery from ${NAP}. From ${PRICE.basic}.`,
    sections: [
      {
        title: "UPI MDR is not ours to set",
        body: `NPCI notifies MDR. A Mumbai recharge or bill-pay panel must be able to show a fee line when they do; see the UPI MDR recharge guide on this site. We do not set the rate and we do not hold settlement in BKC. DMT and AePS still need the relationships RBI/NPCI require — we build the UI and ledger, we do not onboard you. Listing-date and IPO explainers on this site are educational; this page is retailer software, not a trading app or investment advice. Published plans start at ${PRICE.basic}. You bring the aggregator. TheTriFusion is not a payment aggregator and has no Mumbai banking licence.`,
      },
      {
        title: "DMT, AEPS and what we will not claim",
        body: `Domestic money transfer and AePS need the relationships RBI/NPCI require. We build the UI and ledger. We do not onboard you.`,
      },
      {
        title: "INR plans",
        body: `From ${PRICE.basic}.`,
      },
      {
        title: "Parent page",
        body: `fintech app development.`,
      },
      {
        title: "NSE / IPO traffic is not this product",
        body: `Listing-date explainers on this site are educational. This page is retailer software, not a trading app or investment advice.`,
      },
    ],
    faqs: [
      officeFaq("Mumbai"),
      {
        question: "Can you build a trading or IPO app?",
        answer:
          "That is a different, licensed product. This page is BBPS/AEPS/DMT/recharge panels.",
      },
      {
        question: "Do you hold settlement in Mumbai?",
        answer: "No. Settlement stays with your bank or aggregator.",
      },
      {
        question: "How much does fintech software cost in Mumbai?",
        answer: `Published plans start at ${PRICE.basic}.`,
      },
      gstFaq("Mumbai"),
    ],
    deliverables: [
      "Retailer app and admin as scoped",
      "UPI/fee line when the partner supports it",
      "IST demos",
      "No licence brokerage",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Mumbai retailer networks",
      "Operators with an aggregator",
      "Ops teams who need a panel, not a PA licence",
      "Founders who already have a bank conversation",
    ],
    timelineRange:
      "Software weeks after a locked brief. Partner onboarding on their clock.",
    whatsappMessage:
      "Hi TriFusion, I want Mumbai BBPS/AEPS/DMT software from Jaipur.",
    relatedServiceSlugs: [
      "fintech-app-development",
      "software-development",
      "mobile-app-development",
      "mlm-crm-development",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "fintech",
      "fintech-app-development-mumbai"
    ),
    relatedLinks: [
      { href: PARENT, label: "Fintech app development company in India (parent page)" },
    ],
    cta: "Get a scoped Mumbai fintech estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "fintech-app-development-bangalore",
    serviceAreaCity: "Bengaluru",
    serviceAreaRegion: "Karnataka",
    title: "Fintech App Development in Bangalore | From Jaipur, ₹99,999",
    h1: "Fintech Software for Bangalore — From Our Jaipur Office",
    navLabel: "Bangalore fintech (from Jaipur)",
    metaDescription:
      "API-first BBPS, AEPS and DMT software for Bangalore operators from TheTriFusion in Jaipur. From ₹99,999. You bring the partner. No Bengaluru office.",
    primaryKeyword: "fintech app development company in Bangalore",
    secondaryKeywords: [
      "fintech API Bangalore from Jaipur",
      "BBPS software Whitefield",
      "white label recharge Karnataka",
      "AEPS software Bengaluru",
      "DMT panel Koramangala",
    ],
    outcomeLine:
      "A Bangalore operator gets API-first retailer panels from Jaipur — IST overlap, INR, no fake Manyata RBI desk.",
    intro: `Bangalore fintech briefs are API-first admin, sandbox-friendly retailer apps, and product teams who already have a partner. TheTriFusion has no Bangalore office and is not a PA. Delivery from ${NAP}. From ${PRICE.basic}.`,
    sections: [
      {
        title: "API-first admin",
        body: `Bangalore operators often already have a ledger or wallet API. We wrap Hindi/English retailer UI around it after we read the spec. If you need the ledger too, that is a fuller custom-software brief. We will not print “RBI approved” on a CRUD admin, and we will not invent a Manyata NPCI desk. Sandbox access is a blocker, not a slogan. UPI PSP membership is not this page; we integrate the path your acquirer gives us. Hours inside your sprint belong on hire dedicated developers. A fixed BBPS/AEPS/DMT module is this page. Published plans start at ${PRICE.basic}. IST overlap from Jaipur; you own the source after payment.`,
      },
      {
        title: "Sandbox before production",
        body: `We integrate against the docs you have. Missing sandbox access is a blocker, not a slogan.`,
      },
      {
        title: "INR plans",
        body: `From ${PRICE.basic}.`,
      },
      {
        title: "Parent page",
        body: `fintech app development.`,
      },
      {
        title: "On-demand developers vs this page",
        body: `Hours inside your sprint are hire dedicated developers. A fixed fintech module is this page.`,
      },
    ],
    faqs: [
      officeFaq("Bangalore"),
      {
        question: "Can you consume our existing wallet API?",
        answer:
          "Yes, after we read the spec. We do not invent a wallet licence.",
      },
      {
        question: "Do you build UPI PSP software?",
        answer:
          "We integrate the UPI path your acquirer gives us. We are not an NPCI member on this page.",
      },
      {
        question: "How much does fintech software cost in Bangalore?",
        answer: `Published plans start at ${PRICE.basic}.`,
      },
      gstFaq("Bangalore"),
    ],
    deliverables: [
      "Retailer / admin against your API",
      "Sandbox first",
      "IST demos",
      "Source you own after payment",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Bangalore fintech product teams",
      "Operators with a partner sandbox",
      "Teams wrapping BBPS/AEPS/DMT",
      "Karnataka SMEs who want INR pricing",
    ],
    timelineRange:
      "Software weeks after sandbox access. Partner onboarding on their clock.",
    whatsappMessage:
      "Hi TriFusion, I want Bangalore fintech panels from your Jaipur team.",
    relatedServiceSlugs: [
      "fintech-app-development",
      "software-development",
      "on-demand",
      "mobile-app-development",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "fintech",
      "fintech-app-development-bangalore"
    ),
    relatedLinks: [
      { href: PARENT, label: "Fintech app development company in India (parent page)" },
    ],
    cta: "Get a scoped Bangalore fintech estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "fintech-app-development-jodhpur",
    serviceAreaCity: "Jodhpur",
    serviceAreaRegion: "Rajasthan",
    title: "Fintech App Development in Jodhpur | From Jaipur, ₹99,999",
    h1: "Fintech Software for Jodhpur — From Our Jaipur Office",
    navLabel: "Jodhpur fintech (from Jaipur)",
    metaDescription:
      "BBPS, AEPS and recharge software for Jodhpur retailer networks from TheTriFusion in Jaipur. From ₹99,999. Hindi UI. No Jodhpur office.",
    primaryKeyword: "fintech app development company in Jodhpur",
    secondaryKeywords: [
      "AEPS CSC Jodhpur",
      "recharge panel Jodhpur",
      "BBPS software Rajasthan from Jaipur",
      "DMT software Jodhpur",
      "Hindi retailer app Jodhpur",
    ],
    outcomeLine:
      "A Jodhpur CSC-style retailer network gets a Hindi retailer app from Jaipur — you bring the aggregator, we build the panel, no fake Sojati Gate office.",
    intro: `Jodhpur fintech briefs are smaller retailer networks, Hindi-first apps, and recharge/bill-pay for towns around the city. TheTriFusion has no Jodhpur office. Delivery from ${NAP}, travel when scoped. From ${PRICE.basic}.`,
    sections: [
      {
        title: "Hindi-first retailer UI",
        body: `Night-shift retailers around Jodhpur and nearby towns should not need English error strings. Labels are yours to approve. The first release is usually one of BBPS, AEPS or recharge — not every module dumped into a CSC-style super-app. We do not provide recharge inventory; you contract the aggregator. A workshop visit from Jaipur is in the scope when you ask; otherwise weekly video demos. Published plans start at ${PRICE.basic}. TheTriFusion has no Sojati Gate office and is not a licence bureau. Distributor overlay and admin sit on the same product when you already have the partner sandbox. Hindi-only retailer UI is ordinary when copy is in the scope.`,
      },
      {
        title: "CSC-style, not a Mumbai super-app",
        body: `We scope BBPS, AEPS or recharge as you actually sell. We will not dump every module into a first release.`,
      },
      {
        title: "INR plans",
        body: `From ${PRICE.basic}.`,
      },
      {
        title: "Parent page",
        body: `fintech app development.`,
      },
      {
        title: "Jaipur–Jodhpur delivery",
        body: `Video by default. A workshop visit when the scope includes it.`,
      },
    ],
    faqs: [
      officeFaq("Jodhpur"),
      {
        question: "Can the retailer app be Hindi-only?",
        answer: "Yes, when copy is in the scope.",
      },
      {
        question: "Do you provide the recharge inventory?",
        answer: "No. You contract the aggregator.",
      },
      {
        question: "How much does fintech software cost in Jodhpur?",
        answer: `Published plans start at ${PRICE.basic}.`,
      },
      gstFaq("Jodhpur"),
    ],
    deliverables: [
      "Hindi-capable retailer app",
      "Distributor / admin as scoped",
      "Aggregator integration you contract",
      "Optional on-site demo",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Jodhpur retailer networks",
      "CSC-style operators",
      "Distributors covering western Rajasthan",
      "Operators who already have an API partner",
    ],
    timelineRange:
      "Software weeks after a locked brief. Partner onboarding on their clock.",
    whatsappMessage:
      "Hi TriFusion, I want Jodhpur BBPS/AEPS/recharge software from Jaipur.",
    relatedServiceSlugs: [
      "fintech-app-development",
      "mobile-app-development",
      "software-development",
      "website-development",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "fintech",
      "fintech-app-development-jodhpur"
    ),
    relatedLinks: [
      { href: PARENT, label: "Fintech app development company in India (parent page)" },
    ],
    cta: "Get a scoped Jodhpur fintech estimate",
    updatedAt: UPDATED,
  },
];
