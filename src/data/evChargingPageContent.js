/**
 * Original EV charging page copy for /services/ev-charging-app-development.
 * Optional fields are read by ServiceDetailPage and the service route schema.
 */
import { siteConfig } from "../config/site";

export const evChargingPageContent = {
  title: "EV Charging Management Software (CMS & App)",
  metaTitle:
    "EV Charging Management Software India | OCPP CMS & App | TheTriFusion",
  metaDescription:
    "White-label EV charging management software and driver app for Indian CPOs and fleets: OCPP 1.6J/2.0.1, OCPI roaming, UPI billing, GST invoices. Jaipur team.",
  keywords:
    "EV charging management software India, EV charging CMS, OCPP CSMS, charge point management system, white label EV charging app, OCPI roaming India, EV charging app development company",
  bannerTitle:
    "EV Charging Management Software & White-Label Charging App for CPOs in India",
  bannerDescription:
    "One platform for your chargers, your drivers and your money: an OCPP charging management system, a branded iOS/Android app, and billing built for UPI and GST. Built in Jaipur for operators across India.",
  shortDescription:
    "White-label EV charging management software (CMS & app) for Indian CPOs: OCPP 1.6J/2.0.1, OCPI roaming, UPI billing, GST invoices. Client owns the code.",
  description:
    "TheTriFusion is a Jaipur software studio that builds EV charging management software — not a charge point operator and not a charger manufacturer. The product is a white-label CMS (also called CSMS or CPMS) plus a driver app under your brand. Chargers connect over OCPP; roaming uses OCPI when you need it. You own the repositories named in the scope. Related work: [mobile app development](/services/mobile-app-development) for store delivery patterns, [UI/UX design](/services/ui-ux-design) for driver and operator flows, [DevOps and cloud](/services/devops) for hosting, and [custom software development](/services/software-development) when charging is one module in a wider platform.",
  locationLine:
    "Jaipur team, delivering across India and worldwide.",
  scopeKicker: "On this page",
  scopeHeading: "EV charging software modules we build",
  processHeading: "How an EV charging CMS project runs",
  processLayout: "howto",
  ctaHeading: "Tell us your chargers, sites and brand",
  ctaText:
    "Share charger make/model and OCPP version, number of sites, whether you need roaming, and your payment gateway. We reply with a written scope. This page does not sell a fixed package.",
  primaryCtaLabel: "Get a scoped estimate",
  primaryCtaHref: "/contact",
  secondaryCtaLabel: "See PlugOne case study",
  secondaryCtaHref: "/portfolio/plugone-ev-charging-platform",
  serviceType:
    "EV charging management software (CMS/CSMS) and driver app development",
  breadcrumbName: "EV Charging Software",
  whatsappMessage:
    "Hi TriFusion, I need EV charging management software / a white-label charging app (OCPP, OCPI, UPI). Please share a scoped estimate.",
  imageAlt:
    "EV charging management software CMS and white-label charging app by TheTriFusion in Jaipur for CPOs in India",
  contentUpdatedAt: "2026-11-13",
  sitemapPriority: 0.85,
  hideClientStrip: true,
  hidePricingEstimates: true,
  hideStandardDeliverables: true,
  faqsExpanded: true,
  tocAriaLabel: "EV charging software modules on this page",
  schemaAreaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Worldwide" },
  ],
  schemaProvider: { "@id": `${siteConfig.url}/#organization` },
  relatedBlogSlug: "jiobp-kia-roaming-csms-india-2026",
  softwareGuides: [],
  caseStudy: {
    title: "PlugOne — live client EV charging product",
    summary:
      "PlugOne (plugone.in) is a live EV charging client product we built: charger map, live charging status, session management across networks, and in-app payment on iOS, Android and web. It uses both OCPP (direct charger connection) and OCPI (roaming and aggregation). Tested / integrated with Ecoplug, Sonic, ChargeMOD, and ChargeIndia (OCPI hub). Open it yourself; we do not publish usage numbers we cannot verify.",
    href: "/portfolio/plugone-ev-charging-platform",
    hrefLabel: "Open the PlugOne case study",
    liveUrl: "https://plugone.in/",
    liveLabel: "Open plugone.in",
  },
  quickNav: [
    { href: "#modules", label: "Modules" },
    { href: "#who-its-for", label: "Who it's for" },
    { href: "#ocpp-vs-ocpi", label: "OCPP vs OCPI" },
    { href: "#protocols", label: "Protocols" },
    { href: "#white-label", label: "White-label vs SaaS" },
    { href: "#plugone-proof", label: "PlugOne" },
    { href: "#process", label: "Process" },
    { href: "#faq", label: "FAQs" },
  ],
  platforms: [
    "OCPP 1.6J",
    "OCPP 2.0.1",
    "OCPI 2.2.1",
    "UPI",
    "RFID",
    "White-label",
  ],
  features: [
    "CMS / CSMS",
    "Driver app (iOS, Android, web)",
    "OCPP 1.6J and 2.0.1",
    "OCPI 2.2.1 roaming",
    "UPI and wallet payments",
  ],
  technologies: [],
  industries: [],
  techStackHeading: "Tech stack for the EV charging CMS",
  technologiesList: [
    "OCPP 1.6J",
    "OCPP 2.0.1",
    "OCPI 2.2.1",
    "WebSockets",
    "React Native",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "UPI",
    "QR",
    "RFID",
  ],
  detailSections: [
    {
      id: "modules",
      lead: true,
      tocLabel: "Platform modules",
      heading: "Eight modules of EV charging management software",
      schemaDescription:
        "White-label EV charging CMS modules: CSMS, driver app, billing, roaming, load management, O&M, fleet, and APIs.",
      paragraphs: [
        "Indian CPOs, franchise owners and fleets buy software by job — not by agency buzzwords. Below is the module set we scope as EV charging management software (CMS & app). Pick the first release; add modules when the network needs them.",
      ],
      roles: [
        {
          id: "cms-csms",
          catalogTitle: "CMS / CSMS",
          heading: "Charging Management System (CMS / CSMS)",
          schemaDescription:
            "Live charger monitoring, remote start/stop, firmware and configuration for OCPP charge points.",
          paragraphs: [
            "The operator system of record for sites, chargers and connectors — what many briefs call a CSMS or CPMS.",
          ],
          points: [
            "Live charger and connector monitoring from heartbeats and status",
            "Remote start, stop, reset and configuration keys when firmware allows",
            "Firmware update triggers and multi-site charger inventory",
          ],
        },
        {
          id: "driver-app",
          catalogTitle: "Driver app",
          heading: "Driver app (Android, iOS and web)",
          schemaDescription:
            "White-label driver app to find, start and pay for charging with UPI, wallet and RFID.",
          paragraphs: [
            "Your brand in the stores and on the web: find a connector, start a session, pay, and keep a receipt.",
          ],
          points: [
            "Map with live availability, filters and favourites",
            "QR start, RFID linking and live session view",
            "UPI / Razorpay-style wallet payments through your gateway",
          ],
        },
        {
          id: "billing-settlement",
          catalogTitle: "Billing & settlement",
          heading: "Billing, tariffs and settlement",
          schemaDescription:
            "Tariff engine, GST invoices, coupons, corporate wallets and franchise settlement reports.",
          paragraphs: [
            "Energy, time, session and idle components with GST invoice fields your finance team specifies.",
          ],
          points: [
            "Tariff engine: per-kWh, per-minute, idle fee, time-of-day",
            "GST invoice fields, coupons, subscriptions and corporate wallets",
            "T+1-style settlement reports for franchise and site-host partners",
          ],
        },
        {
          id: "roaming",
          catalogTitle: "Roaming",
          heading: "Roaming (OCPI; UEI can be scoped)",
          schemaDescription:
            "OCPI 2.2.1 roaming for locations, tokens, sessions and CDRs; UEI can be scoped.",
          paragraphs: [
            "Publish your chargers to partner apps, or let your drivers use partner chargers — partner by partner, not a fake national hub claim.",
          ],
          points: [
            "OCPI 2.2.1: locations, tariffs, tokens, sessions, CDRs, commands",
            "One partner first, then hubs when the business needs them",
            "UEI / Beckn-style roaming readiness discussed in scope, not claimed as live",
          ],
        },
        {
          id: "load-management",
          catalogTitle: "Load management",
          heading: "Load and energy management",
          schemaDescription:
            "Dynamic site power caps and OCPP smart-charging profiles.",
          paragraphs: [
            "Keep a site inside the power your electrician designed — software cannot invent amps the breaker does not have.",
          ],
          points: [
            "Site or panel power caps set from your electrical design",
            "Dynamic load sharing across active connectors",
            "OCPP charging profiles and scheduled / off-peak fleet charging",
          ],
        },
        {
          id: "om-complaints",
          catalogTitle: "O&M & complaints",
          heading: "Operations, maintenance and complaints",
          schemaDescription:
            "Fault ticketing, technician app and commissioning app for charging networks.",
          paragraphs: [
            "Field work needs tickets and roles — not only a map of green pins.",
          ],
          points: [
            "Fault alerts from charger status and error codes",
            "Complaint ticketing with technician assignment",
            "Commissioning app flows for installer onboarding",
          ],
        },
        {
          id: "fleet-depot",
          catalogTitle: "Fleet & depot",
          heading: "Fleet and depot charging",
          schemaDescription:
            "Depot charging with vehicle identity, departure priority and energy per vehicle.",
          paragraphs: [
            "Depots are a scheduling problem more often than a public-map problem.",
          ],
          points: [
            "Vehicle or RFID identity on each depot session",
            "Departure priority inside the site load limit",
            "Energy cost per vehicle for fleet managers",
          ],
        },
        {
          id: "apis-integrations",
          catalogTitle: "APIs & integrations",
          heading: "APIs and integrations",
          schemaDescription:
            "Discovery-style APIs for OEM apps, webhooks, ERP and accounting export.",
          paragraphs: [
            "Your CMS should talk to the systems you already run — not become a dead end.",
          ],
          points: [
            "Discovery-style APIs for OEM and fleet companion apps",
            "Webhooks for session and fault events",
            "ERP / accounting export and CRM hooks when scoped",
          ],
        },
      ],
    },
    {
      id: "who-its-for",
      tocLabel: "Who it's for",
      heading: "Who this EV charging software is for",
      schemaDescription:
        "CPOs, franchise owners, fleets, OEMs, real estate and DISCOMs that need white-label charging software.",
      paragraphs: [
        "We sell software to operators who want their own brand and their own platform. We do not compete for drivers on a public network of our own.",
      ],
      roles: [
        {
          id: "for-cpos",
          heading: "CPOs and charging startups",
          paragraphs: [
            "Launch under your own brand without renting someone else’s network app. OCPP CMS first; OCPI when partners arrive.",
          ],
        },
        {
          id: "for-franchise",
          heading: "Franchise and charger owners (DOCO)",
          paragraphs: [
            "Hotels, malls, highway sites and fuel retail that need sessions and earnings per site, plus payout reports for hosts.",
          ],
        },
        {
          id: "for-fleets",
          heading: "Fleets and e-logistics",
          paragraphs: [
            "Depot charging, vehicle priority, energy cost per vehicle, and driver RFID for 2W, 3W and 4W fleets.",
          ],
        },
        {
          id: "for-oems",
          heading: "2W / 3W / 4W OEMs and charger makers",
          paragraphs: [
            "Companion apps, commissioning flows, firmware hooks, and discovery-style APIs inside the vehicle or dealer app.",
          ],
        },
        {
          id: "for-real-estate",
          heading: "Real estate, RWAs and hospitality",
          paragraphs: [
            "Resident or guest access, per-bay billing, and load caps on shared transformers — without becoming a national eMSP overnight.",
          ],
        },
        {
          id: "for-discoms",
          heading: "DISCOMs, PSUs and government programmes",
          paragraphs: [
            "Multi-operator dashboards, open protocols and reporting can be scoped. This page does not claim past DISCOM or PSU awards.",
          ],
        },
      ],
    },
    {
      id: "ocpp-vs-ocpi",
      tocLabel: "How the pieces connect",
      heading: "How the pieces connect: OCPP vs OCPI",
      schemaDescription:
        "OCPP connects chargers to the CMS. OCPI connects networks for roaming.",
      paragraphs: [
        "Plain path: Charger ⇄ OCPP ⇄ CMS ⇄ App and payment gateway. Separately: CMS ⇄ OCPI ⇄ partner networks. OCPP is hardware talking to your backend. OCPI is your company talking to another company. They are not substitutes. PlugOne, our live client product, uses both: OCPP for direct charger connection and OCPI for roaming and aggregation.",
      ],
      comparison: {
        heading: "OCPP vs OCPI at a glance",
        rowHeader: "Question",
        columns: ["OCPP", "OCPI", "Both"],
        rows: [
          {
            label: "What it links",
            cells: [
              "Charger ↔ your CMS",
              "Your network ↔ a partner network",
              "Your sites plus roaming partners",
            ],
          },
          {
            label: "When you need it",
            cells: [
              "You operate hardware",
              "Drivers or chargers cross brands",
              "You own chargers and roam",
            ],
          },
          {
            label: "First release tip",
            cells: [
              "Often day one for a CPO",
              "Add when a partner exists",
              "Scope both only if discovery needs both",
            ],
          },
        ],
      },
    },
    {
      id: "protocols",
      tocLabel: "Protocols & standards",
      heading: "Protocols and standards we build to",
      schemaDescription:
        "OCPP 1.6J, OCPP 2.0.1 and OCPI 2.2.1 built to the specification and tested against your chargers.",
      paragraphs: [
        "We build to the published specifications and test against the charger models in your scope. That is not an Open Charge Alliance certification claim. Tested / integrated with (on PlugOne): Ecoplug, Sonic, ChargeMOD, and ChargeIndia (OCPI hub).",
      ],
      comparison: {
        heading: "Standards table",
        rowHeader: "Standard",
        columns: ["What we build", "Honest note"],
        rows: [
          {
            label: "OCPP 1.6J",
            cells: [
              "Core session flow, remote commands, firmware and smart-charging profiles as scoped",
              "Built to the spec and tested against your chargers — not an OCA certification",
            ],
          },
          {
            label: "OCPP 2.0.1",
            cells: [
              "Device model, security profiles, TransactionEvent path",
              "Same honesty rule as 1.6J",
            ],
          },
          {
            label: "OCPI 2.2.1",
            cells: [
              "Credentials, locations, tariffs, tokens, sessions, CDRs, commands",
              "Partner-by-partner; hubs when the business needs them",
            ],
          },
          {
            label: "ISO 15118 / Plug & Charge",
            cells: [
              "Backend readiness on the OCPP 2.0.1 path when scoped",
              "No live Plug & Charge network claim",
            ],
          },
          {
            label: "UPI / cards",
            cells: [
              "Through a payment gateway you contract",
              "We are the software vendor, not a payment institution",
            ],
          },
        ],
      },
      included: [
        "Protocol proof script on the firmware you will deploy",
        "Pass and fail notes per message your first release needs",
        "Mixed 1.6J and 2.0.1 fleets when you have both",
      ],
      tools: ["OCPP 1.6J", "OCPP 2.0.1", "OCPI 2.2.1", "UPI", "RFID"],
    },
    {
      id: "white-label",
      tocLabel: "White-label vs SaaS vs custom",
      heading: "White-label vs SaaS rent vs custom build",
      schemaDescription:
        "Honest comparison of renting a network CMS, white-label from TheTriFusion, and building from zero.",
      paragraphs: [
        "Pick the commercial model that matches how you want to own brand and roadmap. We are honest when a rented network CMS is enough — and when it is not.",
      ],
      comparison: {
        heading: "Build vs buy vs white-label",
        rowHeader: " ",
        columns: [
          "Rent a network’s CMS",
          "White-label (this page)",
          "Custom build on top",
        ],
        rows: [
          {
            label: "Brand",
            cells: [
              "Often the vendor’s app or a limited skin",
              "Your brand on app, CMS and domain",
              "Your brand, your product roadmap",
            ],
          },
          {
            label: "Code ownership",
            cells: [
              "You rent access",
              "You own the repositories named in the scope",
              "You own the stack; larger scope",
            ],
          },
          {
            label: "Fees",
            cells: [
              "Usually per-charger or per-session to the vendor",
              "Project range from ₹4,50,000 ex-GST after discovery — not a per-charger SaaS menu on this page",
              "Same team, larger written scope",
            ],
          },
          {
            label: "Time to first charger",
            cells: [
              "Fast if you accept their stack",
              "After discovery, protocol proof, then build",
              "Longer; protocol team required",
            ],
          },
          {
            label: "Roadmap control",
            cells: [
              "Vendor backlog",
              "Your backlog, our delivery",
              "Fully yours",
            ],
          },
        ],
      },
    },
    {
      id: "plugone-proof",
      tocLabel: "PlugOne proof",
      heading: "Proof: PlugOne (client case study)",
      schemaDescription:
        "PlugOne is a live EV charging client product built by TheTriFusion with OCPP and OCPI.",
      paragraphs: [
        "PlugOne (plugone.in) is a live EV charging client product we built: charger map, live charging status, session management across networks, and in-app payment on iOS, Android and web. It uses both OCPP for direct charger connection and OCPI for roaming and aggregation. Tested / integrated with Ecoplug, Sonic, ChargeMOD, and ChargeIndia (OCPI hub). Open the running site yourself; we do not publish usage, revenue or rating figures we cannot verify.",
        "Read the write-up: [PlugOne portfolio case study](/portfolio/plugone-ev-charging-platform). Live product: [plugone.in](https://plugone.in/).",
      ],
    },
    {
      id: "india-context",
      tocLabel: "India delivery",
      heading: "EV charging software from Jaipur for operators across India",
      schemaDescription:
        "Jaipur software studio delivering EV charging CMS and apps across India with UPI and GST invoice fields.",
      paragraphs: [
        "India shows up in payments (UPI), invoices (GST fields), connector mix (CCS2, Type 2, and Bharat AC/DC where the hardware is OCPP-capable), and site reality (intermittent 4G — charger queues must tolerate offline moments). Hindi/English app UI can be scoped. The studio is in Jaipur, Rajasthan; delivery is remote for operators across India and worldwide.",
        "Published starting range for an MVP is ₹4,50,000 ex-GST after discovery — see [pricing](/pricing). That figure is a starting range, not a fixed package.",
      ],
      included: [
        "UPI and cards through your gateway",
        "GST invoice fields without us filing returns",
        "Remote delivery from Jaipur across India",
      ],
      tools: ["UPI", "GST invoice fields", "OCPP", "OCPI"],
    },
    {
      id: "cost-and-timeline",
      tocLabel: "Cost and timeline",
      heading: "What changes cost and timeline",
      schemaDescription:
        "Cost factors for EV charging management software. Pricing page lists published starting ranges.",
      paragraphs: [
        "Cost follows scope: driver app only versus full CMS, how many charger models must pass a protocol test, OCPI partners, load management, franchise portals, fleet rules, and store releases for iOS and Android together. Hardware you cannot reach adds time no slide deck can compress.",
        "The [pricing page](/pricing) publishes ₹4,50,000 / ₹9,00,000 / ₹18,00,000 ex-GST. A focused first CMS and driver app is often on the order of 10–14 weeks once access and hardware are ready. We do not lock a week count in the first email.",
      ],
    },
  ],
  starterPack: {
    id: "ev-first-release",
    heading: "What a first EV charging release usually includes",
    intro:
      "The first release is the smallest system a real driver and a real operator can use. It is quoted. It is not a free bundle and it is not the full roaming catalogue.",
    items: [
      {
        title: "One charger connection that is real",
        text: "OCPP 1.6J or 2.0.1 against the firmware you will install, not a slide of logos.",
      },
      {
        title: "A driver path",
        text: "Map, status, start, stop, and a receipt on iOS, Android, or the platform you choose first.",
      },
      {
        title: "An operator path",
        text: "Charger status, the session list, and a fault a person can see.",
      },
      {
        title: "One way to pay",
        text: "UPI or cards through your gateway, or a single method you already run.",
      },
      {
        title: "One tariff",
        text: "A price the driver can read before the session starts.",
      },
      {
        title: "Handover notes",
        text: "How to add a charger, who holds the accounts, and how to read a failed boot.",
      },
    ],
    note: "OCPI partners, extra charger models, fleet priority, franchise portals and Plug & Charge readiness are later phases unless discovery puts them in the first scope.",
    ctaLabel: "Get a scoped estimate",
    ctaHref: "/contact",
  },
  process: [
    {
      title: "Discovery",
      description:
        "We write down the role you play: CPO, franchise/DOCO, fleet, OEM, site host, or a mix. We list charger models, OCPP versions, whether a vendor cloud sits in the middle, and whether payments and GST invoices are in the first release. You get a scope, not a slogan.",
    },
    {
      title: "Protocol proof",
      description:
        "One charger, or a simulator that matches its firmware, completes boot, authorise, start, meter values, and stop. Remote commands you need on day one are in the same test. Models that fail stay out of the promise.",
    },
    {
      title: "Product design",
      description:
        "Driver flows and the operator dashboard are drawn before the build spreads. Connector filters, error states, and the price shown before start are part of the design.",
    },
    {
      title: "Build",
      description:
        "The backend, the apps, tariffs, and the dashboard are built against the protocol proof. Sessions store energy and money as separate facts. Staging is available while the work is in progress.",
    },
    {
      title: "Hardware and roaming rollout",
      description:
        "Further charger models repeat the protocol test. OCPI, if it is in scope, starts with one partner and the modules that partner implements.",
    },
    {
      title: "Launch and handover",
      description:
        "Store listings, a monitored backend, and notes for adding a site. Accounts and repositories stay in your name. Ongoing hosting can move to DevOps and cloud, or your team can run what we handed over.",
    },
  ],
  whyPoints: [
    {
      title: "Software studio, not a CPO",
      description:
        "We do not compete for your drivers or lock you to our hardware. You get white-label software under your brand.",
    },
    {
      title: "You own the code",
      description:
        "Repositories named in the scope transfer to you after completion and payment. We are not a SaaS landlord.",
    },
    {
      title: "Live client proof",
      description:
        "PlugOne is a client product we shipped — OCPP plus OCPI, live at plugone.in. We do not invent usage metrics.",
    },
    {
      title: "Scope before build",
      description:
        "You get a written scope after discovery. The pricing page shows published starting ranges, not a fake fixed SKU.",
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
      text: "When the engagement is white-label under an agency or brand relationship.",
    },
    {
      href: "/services/mobile-app-development",
      title: "Mobile app development",
      text: "iOS and Android delivery when the driver app is part of a larger mobile product.",
    },
    {
      href: "/services/software-development",
      title: "Custom software development",
      text: "Backends and admin tools when charging is one module inside a wider product.",
    },
    {
      href: "/services/ui-ux-design",
      title: "UI/UX for driver and operator apps",
      text: "Driver and operator flows designed before the build.",
    },
    {
      href: "/services/devops",
      title: "DevOps & cloud hosting for the CMS",
      text: "Pipelines, hosting, and monitoring for the charging backend.",
    },
    {
      href: "/services/crm-erp-development",
      title: "CRM/ERP for charging businesses",
      text: "Franchise leads, partner tracking and ops CRM beside the CMS.",
    },
    {
      href: "/pricing",
      title: "Published pricing",
      text: "Starting ranges for EV charging CMS engagements.",
    },
  ],
  faqs: [],
};
