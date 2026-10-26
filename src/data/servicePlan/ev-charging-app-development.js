import { LIVE, NAP_LINE, SOURCES, TEAM } from "./_shared";

/**
 * /services/ev-charging-app-development
 * TODO OWNER: PlugOne metrics (chargers connected, sessions, uptime).
 * TODO OWNER: list of charger OEMs integrated.
 * TODO OWNER: pricing model (per-charger/month SaaS vs one-time white-label) beyond ₹4,50,000 starting range.
 */
export default {
  contentUpdatedAt: "2026-10-12",
  metaTitle: "EV Charging Management Software (CMS) India | OCPP & OCPI | TheTriFusion",
  bannerTitle: "EV Charging Management System (CMS) for CPOs & eMSPs",
  metaDescription:
    "White-label EV charging CMS and driver app for Indian CPOs: OCPP 1.6J/2.0.1, OCPI 2.2.1 roaming, UPI billing, GST invoices, load management.",
  keywords:
    "EV charging management software India, OCPP CMS software CPMS India, EV charging app development company, OCPI roaming India",
  answerFirst: {
    id: "quick-answer",
    heading: "EV charging CMS: key facts",
    text:
      "TheTriFusion builds a white-label EV charging CMS and driver app in Jaipur for CPOs and eMSPs. Charger talk is [OCPP 1.6J and 2.0.1](" +
      SOURCES.ocpp +
      ") (Open Charge Alliance). Roaming is OCPI 2.2.1. Billing can take UPI and GST invoice fields. Published starting range is ₹4,50,000 ex-GST after discovery — not a per-charger SaaS menu. Live product: " +
      LIVE.plugone +
      ".",
    facts: [
      { label: "OCPP", value: "1.6J and 2.0.1" },
      { label: "OCPI", value: "2.2.1 roaming" },
      { label: "Starting range", value: "₹4,50,000 ex-GST after discovery" },
      { label: "Live", value: "PlugOne — plugone.in" },
    ],
  },
  softwareApplication: {
    name: "TheTriFusion EV Charging CMS",
    description:
      "White-label EV charging management system for CPOs and eMSPs: OCPP 1.6J/2.0.1, OCPI 2.2.1, driver app, operator dashboard, UPI and GST invoice fields.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    price: 450000,
  },
  extraSections: [
    {
      id: "ev-pricing-model",
      heading: "Pricing model",
      paragraphs: [
        "The [pricing page](/pricing) lists a starting range of ₹4,50,000 ex-GST for an MVP (Basic), with Standard ₹9,00,000 and Premium ₹18,00,000. This page does not sell a per-charger monthly SaaS menu. White-label vs build-vs-buy notes: [build vs buy a CSMS](/services) and [CMS cost guide](/services/software-development).",
      ],
      comparison: {
        heading: "Build vs buy vs white-label",
        rowHeader: " ",
        columns: ["Buy a product CMS", "White-label (this page)", "Build from zero"],
        rows: [
          { label: "Best for", cells: ["You want a vendor logo and a per-charger fee", "Your brand, our CMS, your chargers", "A lab with a protocol team"] },
          { label: "What we publish", cells: ["Not our product", "From ₹4,50,000 ex-GST after discovery", "Same team, larger scope"] },
        ],
      },
    },
    {
      id: "ocpp-source",
      heading: "OCPP, OCPI and India billing",
      paragraphs: [
        "[OCPP](" +
          SOURCES.ocpp +
          ") is the Open Charge Alliance protocol between charger and CMS. [OCPI](" +
          SOURCES.ocpi +
          ") is the roaming protocol between eMSPs and CPOs. UPI is [NPCI](" +
          SOURCES.npci +
          "). GST invoices are Indian tax documents, not a protocol. Charger OEM names we have tested are not listed in this repo, so they are not invented here.",
      ],
    },
    {
      id: "plugone-case",
      heading: "PlugOne",
      paragraphs: [
        `${LIVE.plugone} is a live EV charging product (driver app + CMS). Charger counts, session counts and uptime are not in this repo. Case: [PlugOne portfolio](/portfolio/plugone-ev-charging-platform). Protocol explainer: [OCPP/OCPI guide](/services/mobile-app-development).`,
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
      question: "What is an EV charging management system (CMS/CPMS)?",
      answer:
        "Software that talks to chargers (OCPP), authorises drivers, records sessions, and settles. A CPO runs chargers; an eMSP runs drivers and roaming (OCPI). This CMS can do one role or both.",
    },
    {
      question: "How much does EV charging software cost in India?",
      answer:
        "TheTriFusion publishes a starting range of ₹4,50,000 ex-GST after discovery, with higher published plans at ₹9,00,000 and ₹18,00,000. It is not a per-charger monthly menu.",
    },
    {
      question: "Which chargers are OCPP-compatible with your CMS?",
      answer:
        "Chargers that speak OCPP 1.6J or 2.0.1. A named OEM roster is not in this repo. Protocol docs: https://openchargealliance.org/protocols/ocpp/",
    },
    {
      question: "Do you support UPI and wallet payments?",
      answer:
        "UPI is in the India billing scope. Wallet behaviour is scoped. UPI is an NPCI product (https://www.npci.org.in/).",
    },
    {
      question: "What is OCPI roaming and do I need it?",
      answer:
        "OCPI lets an eMSP’s drivers use another CPO’s chargers. You need it when you roam. Spec home: https://evroaming.org/",
    },
    {
      question: "Can I white-label the driver app?",
      answer:
        "Yes. White-label CMS and driver app are part of this engagement.",
    },
    {
      question: "How long to launch a charging network platform?",
      answer:
        "An MVP is scoped after discovery. Hardware, SIM and site work sit on the CPO’s clock, not only the software clock.",
    },
  ],
  relatedLinks: [
    {
      href: "/portfolio/plugone-ev-charging-platform",
      title: "PlugOne case",
      text: "Live EV charging product.",
    },
    {
      href: "/services/mobile-app-development",
      title: "OCPP and OCPI guide",
      text: "How the two protocols split.",
    },
    {
      href: "/services",
      title: "Build vs buy a CSMS",
      text: "Product vs white-label vs custom.",
    },
  ],
};
