import { LIVE, NAP_LINE, SOURCES, TEAM } from "./_shared";

/**
 * /services/ev-charging-app-development
 * TODO OWNER: PlugOne metrics (chargers connected, sessions, uptime).
 * TODO OWNER: pricing model (per-charger/month SaaS vs one-time white-label) beyond ₹4,50,000 starting range.
 * Owner-confirmed 2026-11-13: PlugOne uses OCPP (direct) + OCPI (roaming); integrated Ecoplug, Sonic, ChargeMOD, ChargeIndia OCPI hub.
 */
export default {
  contentUpdatedAt: "2026-11-13",
  metaTitle:
    "EV Charging Management Software India | OCPP CMS & App | TheTriFusion",
  bannerTitle:
    "EV Charging Management Software & White-Label Charging App for CPOs in India",
  metaDescription:
    "White-label EV charging management software and driver app for Indian CPOs and fleets: OCPP 1.6J/2.0.1, OCPI roaming, UPI billing, GST invoices. Jaipur team.",
  keywords:
    "EV charging management software India, EV charging CMS, OCPP CSMS, charge point management system, white label EV charging app, OCPI roaming India, EV charging app development company",
  answerFirst: {
    id: "quick-answer",
    heading: "What is EV charging management software? Key facts",
    text:
      "EV charging management software (CMS / CSMS / CPMS) is the operator platform that talks to chargers, authorises drivers, bills sessions and helps settle partners. TheTriFusion builds white-label CMS and driver apps for charge point operators, fleets and charger owners in India. We are a software studio in Jaipur — not a CPO and not a charger maker. Chargers connect over [OCPP 1.6J or 2.0.1](" +
      SOURCES.ocpp +
      "); roaming uses [OCPI 2.2.1](" +
      SOURCES.ocpi +
      "). Payments run through your gateway (UPI, cards, wallet) with GST invoice fields. You own the code after completion and payment. Published starting range: ₹4,50,000 ex-GST after discovery (Standard ₹9,00,000, Premium ₹18,00,000). Live client example: " +
      LIVE.plugone +
      ".",
    facts: [
      { label: "Studio", value: "Jaipur, serving all India" },
      { label: "Protocols", value: "OCPP 1.6J/2.0.1 + OCPI 2.2.1" },
      { label: "Delivery", value: "White-label · you own the code" },
      { label: "Live example", value: "PlugOne — plugone.in" },
    ],
  },
  softwareApplication: {
    name: "TheTriFusion EV Charging Management Software",
    description:
      "White-label EV charging management software for CPOs and fleets in India: OCPP 1.6J/2.0.1 CMS, driver app, billing and settlement, OCPI roaming, load management, O&M, and APIs. Client owns the code.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    price: 450000,
  },
  extraSections: [
    {
      id: "ev-pricing-model",
      heading: "Pricing model",
      paragraphs: [
        "The [pricing page](/pricing) lists a starting range of ₹4,50,000 ex-GST for an MVP (Basic), with Standard ₹9,00,000 and Premium ₹18,00,000. This page does not sell a per-charger monthly SaaS menu. See the white-label vs SaaS vs custom comparison on this page for an honest fit check.",
      ],
    },
    {
      id: "ocpp-source",
      heading: "OCPP, OCPI and India billing",
      paragraphs: [
        "[OCPP](" +
          SOURCES.ocpp +
          ") is the Open Charge Alliance protocol between charger and CMS. [OCPI](" +
          SOURCES.ocpi +
          ") is the roaming protocol between networks. UPI is [NPCI](" +
          SOURCES.npci +
          "). GST invoices are Indian tax documents, not a protocol. We build to the published specs and test against the charger models in your scope — we do not claim Open Charge Alliance certification.",
      ],
    },
    {
      id: "plugone-case",
      heading: "PlugOne — client case study",
      paragraphs: [
        `${LIVE.plugone} is a live EV charging client product we built: driver app and CMS with both OCPP (direct charger connection) and OCPI (roaming and aggregation). Tested / integrated with Ecoplug, Sonic, ChargeMOD, and ChargeIndia (OCPI hub). Case study: [PlugOne portfolio](/portfolio/plugone-ev-charging-platform).`,
      ],
    },
    {
      id: "ev-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.mobile}; ${TEAM.backend}; ${TEAM.pm}. Office: ${NAP_LINE}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "What is EV charging management software (CMS/CSMS/CPMS)?",
      answer:
        "Software that talks to chargers (OCPP), authorises drivers, records sessions, bills energy, and helps settle partners. Operators call it a CMS, CPMS, or CSMS. TheTriFusion builds white-label CMS and a driver app; we do not operate a public charging network.",
    },
    {
      question: "What is the difference between a CMS and an EV charging app?",
      answer:
        "The CMS (or CSMS) is the operator backend: charger status, remote commands, tariffs, faults, and settlement. The EV charging app is what drivers use to find, start, and pay. Most CPO briefs need both under one brand.",
    },
    {
      question: "Can I launch a white-label EV charging app under my own brand?",
      answer:
        "Yes. White-label means your brand, your store accounts, your domain, and your payment gateway. You receive the repositories named in the scope after completion and payment.",
    },
    {
      question: "Which chargers work with your CMS?",
      answer:
        "Chargers that speak OCPP 1.6J or 2.0.1. We build to the specification and test against the models in your scope. We do not claim OCA certification. On PlugOne, integrations include Ecoplug, Sonic, ChargeMOD, and ChargeIndia (OCPI hub).",
    },
    {
      question: "Do I need OCPI roaming on day one?",
      answer:
        "No. Launch on your own chargers with OCPP first. Add OCPI 2.2.1 when a partner exists. UEI-style roaming can be scoped later. We do not operate a public national roaming hub.",
    },
    {
      question: "Do you support UPI, RFID cards, QR start and wallets?",
      answer:
        "Yes, when they are in scope. UPI and cards go through a payment gateway you contract (for example Razorpay). RFID and QR start are wired through the CMS. We are the software vendor, not a payment institution.",
    },
    {
      question: "Can site hosts or franchise owners see their own revenue?",
      answer:
        "Yes. Role-based portals can show sessions and earnings per site, with T+1-style settlement reports for franchise partners when that reporting is in the scope. Settlement timing still depends on your gateway and contracts.",
    },
    {
      question: "Do you handle load management for societies and fleet depots?",
      answer:
        "Yes. Site power caps and dynamic load sharing across connectors use OCPP charging profiles on chargers that accept them. Fleet and depot priority rules can be scoped.",
    },
    {
      question: "How much does EV charging software cost in India?",
      answer:
        "TheTriFusion publishes a starting range of ₹4,50,000 ex-GST after discovery, with higher published plans at ₹9,00,000 and ₹18,00,000. It is not a per-charger monthly menu.",
    },
    {
      question: "How long does an EV charging app development project take?",
      answer:
        "As an EV charging app development company, we set the MVP timeline after discovery. A focused first release is often on the order of 10–14 weeks once charger access and payment credentials are ready. Hardware, SIM, and site work run on the CPO’s clock.",
    },
  ],
  relatedLinks: [
    {
      href: "/portfolio/plugone-ev-charging-platform",
      title: "PlugOne case study",
      text: "Live client EV charging product — OCPP + OCPI.",
    },
    {
      href: "/white-label-development",
      title: "White-label software development",
      text: "Agency or brand engagements when the product is white-label under your client.",
    },
    {
      href: "/services/mobile-app-development",
      title: "Mobile app development",
      text: "iOS and Android delivery when the driver app sits in a broader mobile brief.",
    },
    {
      href: "/services/software-development",
      title: "Custom software development",
      text: "When charging is one module inside a larger product platform.",
    },
    {
      href: "/services/devops",
      title: "DevOps & cloud hosting for the CMS",
      text: "Pipelines, hosting, and monitoring for the charging backend.",
    },
    {
      href: "/pricing",
      title: "Published pricing",
      text: "Starting ranges for EV charging CMS engagements.",
    },
    {
      href: "/services/fintech-app-development",
      title: "Fintech & payments software",
      text: "When wallet or settlement panels sit beside the CMS.",
    },
    {
      href: "/services/crm-erp-development",
      title: "CRM/ERP for charging businesses",
      text: "Franchise and partner ops beside the charging stack.",
    },
  ],
};
