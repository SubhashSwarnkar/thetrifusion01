import { NAP_LINE, SOURCES, TEAM } from "./_shared";

/**
 * /services/ev-charging-app-development
 * Indexed-pages pass 2026-11-18 (§3.12).
 * TODO OWNER: PlugOne metrics (chargers connected, sessions, uptime).
 * TODO OWNER: pricing model (per-charger/month SaaS vs one-time white-label) beyond ₹4,50,000 starting range.
 * Owner-confirmed 2026-11-13: PlugOne uses OCPP (direct) + OCPI (roaming); integrated Ecoplug, Sonic, ChargeMOD, ChargeIndia OCPI hub.
 */
export default {
  contentUpdatedAt: "2026-11-25",
  replaceFaqs: true,
  replaceRelatedLinks: true,
  metaTitle: "EV Charging App & CSMS Software Development | OCPP",
  bannerTitle:
    "EV Charging Management Software & White-Label Charging App for CPOs in India",
  metaDescription:
    "EV charging app and CSMS software development for Indian CPOs: OCPP 1.6J/2.0.1/2.1, OCPI roaming, UPI billing, GST invoices. Live client: PlugOne.",
  keywords:
    "EV charging management software India, EV charging CMS, OCPP CSMS, charge point management system, white label EV charging app, OCPI roaming India, EV charging app development company",
  whyHeading: "Why charge point operators choose TheTriFusion",
  breadcrumbName: "EV Charging Management Software",
  schemaServiceName: "EV Charging Management Software",
  serviceType: "EV Charging Management Software",
  primaryCtaLabel: "Get a CMS demo / quote",
  primaryCtaHref: "/contact?service=ev-charging-app-development",
  whatsappMessage:
    "Hi TheTriFusion, I want EV charging software. Chargers/sites: ",
  leadProjectType: "EV charging software",
  formHeading: "Get an EV charging CMS demo",
  midCtaText:
    "Share your charger make, OCPP version and number of sites for a written scope.",
  answerFirst: {
    id: "quick-answer",
    heading: "What is EV charging management software? Key facts",
    text:
      "EV charging management software (CMS or CSMS) connects your chargers, drivers and payments. TheTriFusion builds white-label CMS platforms and driver apps for charge point operators and fleets in India, using OCPP 1.6J/2.0.1 and OCPI 2.2.1, with UPI billing and GST invoices. Plans start at ₹4,50,000 ex-GST. Live client: [PlugOne](/portfolio/plugone-ev-charging-platform).",
    facts: [
      { label: "Studio", value: "Jaipur, serving all India" },
      { label: "Protocols", value: "OCPP 1.6J/2.0.1 + OCPI 2.2.1" },
      { label: "Delivery", value: "White-label · you own the code" },
      { label: "Live example", value: "PlugOne — plugone.in" },
      { label: "Starting price", value: "From ₹4,50,000 ex-GST" },
      { label: "Office", value: NAP_LINE },
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
        "The [pricing page](/pricing) lists a starting range of ₹4,50,000 ex-GST for an MVP (Basic), with Standard ₹9,00,000 and Premium ₹18,00,000. Every quote is a written scope. See the white-label vs SaaS vs custom comparison for an honest fit check.",
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
        "[PlugOne](/portfolio/plugone-ev-charging-platform) (plugone.in) is a live EV charging client product we built: driver app and CMS with both OCPP (direct charger connection) and OCPI (roaming and aggregation). Tested / integrated with Ecoplug, Sonic, ChargeMOD, and ChargeIndia (OCPI hub).",
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
      question: "Do you handle load management for societies and fleet depots?",
      answer:
        "Yes. Site power caps and dynamic load sharing across connectors use OCPP charging profiles on chargers that accept them. Fleet and depot priority rules can be scoped.",
    },
    {
      question: "How much does EV charging software cost in India?",
      answer:
        "TheTriFusion publishes a starting range of ₹4,50,000 ex-GST after discovery, with higher published plans at ₹9,00,000 and ₹18,00,000. Every quote is a written scope.",
    },
    {
      question: "How long does an EV charging app development project take?",
      answer:
        "As an EV charging app development company, we set the MVP timeline after discovery. A focused first release is often on the order of 10–14 weeks once charger access and payment credentials are ready. Hardware, SIM, and site work run on the CPO’s clock.",
    },
    {
      question: "What is the difference between OCPP and OCPI?",
      answer:
        "OCPP is the protocol between a charger and your CMS: start, stop, metering and status. OCPI is the protocol between two charging networks, so your drivers can use partner chargers and partner apps can use yours. A CPO needs OCPP from day one and OCPI when roaming starts.",
    },
    {
      question: "Can I use chargers from different manufacturers?",
      answer:
        "Yes, if the chargers support OCPP 1.6J or 2.0.1. Share the make, model and firmware details, and we confirm compatibility and test the connection during discovery.",
    },
    {
      question: "Is PlugOne built on this platform?",
      answer:
        "PlugOne (plugone.in) is a live TheTriFusion client: a CMS with driver apps that uses OCPP for chargers and OCPI roaming through the ChargeIndia hub. Read the PlugOne case study for what was built.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/mobile-app-development",
      title: "driver app development",
      text: "iOS and Android delivery when the driver app sits in a broader mobile brief.",
    },
    {
      href: "/services/devops",
      title: "cloud hosting and monitoring for the CMS",
      text: "Pipelines, hosting, and monitoring for the charging backend.",
    },
    {
      href: "/services/fintech-app-development",
      title: "UPI wallet and payment flows",
      text: "When wallet or settlement panels sit beside the CMS.",
    },
    {
      href: "/services/software-development",
      title: "custom software",
      text: "When charging is one module inside a larger product platform.",
    },
    {
      href: "/portfolio/plugone-ev-charging-platform",
      title: "PlugOne EV charging case study",
      text: "Live client EV charging product — OCPP + OCPI.",
    },
  ],
};
