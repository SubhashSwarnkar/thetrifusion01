/**
 * Original EV charging page copy for /services/ev-charging-app-development.
 * Optional fields are read by ServiceDetailPage and the service route schema.
 */
import { siteConfig } from "../config/site";

export const evChargingPageContent = {
  title: "EV Charging App Development",
  metaTitle: "EV Charging CMS for CPO & eMSP | OCPP OCPI | TheTriFusion",
  metaDescription:
    "EV charging CMS for CPOs and eMSPs in Jaipur, India. We build OCPP 1.6J/2.0.1 and OCPI 2.2.1 into one platform. Request your scoped estimate.",
  keywords:
    "CMS for CPO, CMS for eMSP, EV charging management system, CPO software, eMSP software, eMSP platform, charge point operator software, e-mobility service provider platform, OCPP CMS, white-label EV CMS, EV charging app development Jaipur",
  bannerTitle:
    "EV Charging Management System (CMS) for CPO & eMSP | OCPP & OCPI Software",
  bannerDescription:
    "TheTriFusion in Jaipur builds an EV charging management system for charge point operators and e-mobility service providers: OCPP to your chargers, OCPI when you roam, and one CMS when you do both.",
  shortDescription:
    "EV charging CMS for CPOs and eMSPs in Jaipur: OCPP 1.6J/2.0.1, OCPI 2.2.1 roaming, driver app, billing, and white-label.",
  description:
    "The core product is an EV charging management system (CMS) for a charge point operator, an e-mobility service provider, or both. The team is in Jaipur and delivers remotely across India and worldwide. A driver map with no charger connection goes stale the moment a connector changes state. The CPO side of the CMS connects OCPP-compliant hardware. The eMSP side adds OCPI when your drivers use another network, or another network's drivers use yours. The mobile client is covered on [mobile app development](/services/mobile-app-development). The screens are covered on [UI/UX design](/services/ui-ux-design). Hosting and pipelines sit with [DevOps and cloud](/services/devops). If the product is a broader platform with charging as one module, start from [custom software development](/services/software-development). There is no separate IoT service page: charger connectivity is part of this engagement.",
  locationLine:
    "Jaipur-based EV charging software — delivered remotely across India and worldwide.",
  scopeKicker: "On this page",
  scopeHeading: "What This EV Charging CMS Includes",
  processHeading: "How a Charging Management System Project Runs",
  processLayout: "howto",
  ctaHeading: "Request a CMS estimate for your CPO or eMSP",
  ctaText:
    "Tell us whether you need a CPO CMS, an eMSP platform, or both, and which charger models you already have. We reply with a written scope. This page does not sell a fixed package.",
  primaryCtaLabel: "Request a scoped estimate",
  primaryCtaHref: "/contact",
  secondaryCtaLabel: "Browse the build sections",
  secondaryCtaHref: "#services-toc",
  serviceType: "EV Charging Management System (CMS) for CPO & eMSP",
  breadcrumbName: "EV Charging CMS",
  whatsappMessage:
    "Hi TriFusion, I want an EV charging app quote from the Jaipur team (OCPP, OCPI, driver app, or CPMS).",
  imageAlt:
    "EV charging management system CMS for CPO and eMSP: OCPP charge point software and OCPI roaming by TheTriFusion in Jaipur",
  contentUpdatedAt: "2026-09-25",
  sitemapPriority: 0.85,
  hideClientStrip: true,
  hidePricingEstimates: true,
  hideStandardDeliverables: true,
  faqsExpanded: true,
  omitSchemaPrice: true,
  tocAriaLabel: "EV charging services on this page",
  schemaAreaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Worldwide" },
  ],
  schemaProvider: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: "TheTriFusion",
    legalName: "Trifusion Infotech Private Limited",
    url: siteConfig.url,
  },
  relatedBlogSlug: "ev-charging-app-ocpi-ocpp-guide",
  caseStudy: {
    title: "PlugOne — a live EV charging product",
    summary:
      "PlugOne is an EV charging product built by TheTriFusion. The public site is plugone.in. This page does not attach usage, revenue, or market-share figures to it.",
    href: "/portfolio/plugone-ev-charging-platform",
    hrefLabel: "Open the PlugOne case study",
    liveUrl: "https://plugone.in/",
    liveLabel: "Open plugone.in",
  },
  quickNav: [
    { href: "#cms-for-cpo-emsp", label: "CMS for CPO & eMSP" },
    { href: "#services-toc", label: "What we build" },
    { href: "#ocpp-vs-ocpi", label: "OCPP vs OCPI" },
    { href: "#process", label: "Process" },
    { href: "#tech-stack", label: "Tech stack" },
    { href: "#who-its-for", label: "Who it's for" },
    { href: "#cost-and-timeline", label: "Cost and timeline" },
    { href: "#faq", label: "FAQs" },
  ],
  platforms: ["iOS", "Android", "Web", "OCPP"],
  features: [
    "Driver mobile app",
    "CPMS / CSMS",
    "OCPP 1.6J and 2.0.1",
    "OCPI 2.2.1 roaming",
    "UPI and card payments",
  ],
  technologies: [],
  industries: [],
  techStackHeading: "Tech Stack for the EV Charging CMS",
  technologiesList: [
    "OCPP 1.6J",
    "OCPP 2.0.1",
    "OCPI 2.2.1",
    "WebSockets",
    "React Native",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "MQTT",
    "ISO 15118 readiness",
    "UPI",
    "QR",
    "RFID",
  ],
  detailSections: [
    {
      id: "cms-for-cpo-emsp",
      lead: true,
      tocLabel: "CMS for CPO and eMSP",
      heading: "CMS for CPO and eMSP: One Platform, Two Roles",
      schemaDescription:
        "An EV charging management system that can run a CPO CMS, an eMSP platform, or both roles without treating them as the same record.",
      paragraphs: [
        "A charging management system (CMS) is the product a network actually operates. On the charge point operator side it is the CPMS, and OCPP 2.0.1 calls that server a CSMS. On the e-mobility service provider side it is the platform the driver belongs to. TheTriFusion builds those as two roles in one EV charging CMS, not as two unrelated products that happen to share a logo.",
        "You can launch one role. A CPO that does not roam yet still needs OCPP. An eMSP that owns no chargers needs OCPI and a driver app, not a yard of hardware. A company that is both keeps stations and driver tokens in the same CMS so the second role is a phase, not a rewrite. Roaming between you and a partner is OCPI 2.2.1. That is not the same thing as operating a public roaming hub for every network in the country.",
      ],
      roles: [
        {
          id: "cpo-cms",
          catalogTitle: "CPO CMS",
          heading: "CPO CMS (Charge Point Operator)",
          schemaDescription:
            "Charge point operator software: OCPP onboarding, remote start and stop, tariffs, load management, alerts, settlement, and GST invoice fields.",
          paragraphs: [
            "CPO software is the charging management system for stations you operate. Chargers onboard over OCPP 1.6J or 2.0.1. Operators remote-start and remote-stop when that firmware allows it, store meter values, and see an alert when the heartbeat stops. Tariffs sit on the site. Smart charging sends a charging profile only if the charger accepts one. Firmware commands and diagnostics are limited to the messages that model answered in the protocol test. A partner eMSP, if you roam, is a business you publish locations to. It is not a second copy of your charger.",
          ],
          points: [
            "Charger onboarding over OCPP",
            "Remote start and stop",
            "Firmware and diagnostics for the messages that charger implements",
            "Tariffs per site",
            "Load management and smart charging inside the site limit",
            "Uptime and alerts from heartbeats and status",
            "Sites you operate and partners you roam with",
            "Settlement records and GST invoice fields (you still file the return)",
          ],
        },
        {
          id: "emsp-cms",
          catalogTitle: "eMSP Platform",
          heading: "eMSP CMS (e-Mobility Service Provider)",
          schemaDescription:
            "e-mobility service provider platform: driver accounts, app and RFID tokens, OCPI roaming, session authorisation, pricing, UPI, CDRs, and support.",
          paragraphs: [
            "An eMSP platform is who the driver has an account with. The token in the app or on an RFID card is what a partner CPO authorizes. OCPI 2.2.1 carries that partner's locations, tariffs, tokens, session updates, and charge detail records (CDRs). The price the driver accepts is the price on the receipt. UPI and cards go through a gateway you contract. An in-app balance can pay for charging on your platform; if that balance can be withdrawn, your counsel confirms the position before we shape it. Support staff can see the session and the CDR. They reach a partner charger only through OCPI commands that partner implements.",
          ],
          points: [
            "Driver accounts",
            "App tokens and RFID tokens",
            "OCPI 2.2.1 roaming to partner CPOs",
            "Session authorisation with the token the partner accepts",
            "Driver pricing and billing",
            "UPI, cards, and an in-app charging balance",
            "CDRs for settlement with the partner CPO",
            "A support view of the session, not a hidden hardware button",
          ],
        },
      ],
      comparison: {
        heading: "CPO vs eMSP vs a combined setup",
        intro:
          "The same CMS can hold one role or both. The third column is a combined setup with roaming. It is not a claim that we operate a national OCPI hub.",
        rowHeader: "Question",
        columns: ["CPO CMS", "eMSP platform", "Combined CMS"],
        rows: [
          {
            label: "Who it is for",
            cells: [
              "You operate chargers",
              "You serve drivers, on your brand",
              "You do both, or you roam with partners",
            ],
          },
          {
            label: "Charger link",
            cells: [
              "OCPP 1.6J and 2.0.1 to hardware you run",
              "None of your own. The partner CPO runs OCPP",
              "OCPP on your sites",
            ],
          },
          {
            label: "Roaming",
            cells: [
              "Optional. Publish locations when an eMSP should see them",
              "OCPI 2.2.1 toward the CPOs you sign",
              "Both directions, module by module. Not an automatic public hub",
            ],
          },
          {
            label: "What you bill",
            cells: [
              "Site tariffs, host settlement, GST invoice fields",
              "The driver price, UPI or cards, CDRs you receive",
              "Your tariffs plus CDRs in and out",
            ],
          },
          {
            label: "Sensible first release",
            cells: [
              "Onboarding, remote start and stop, one tariff",
              "Accounts, tokens, and one partner's locations",
              "One role first, unless discovery includes both",
            ],
          },
        ],
      },
    },
    {
      id: "cpms",
      tocLabel: "Charging management system / CPMS",
      heading: "Charging Management System, CPMS, and CSMS",
      schemaDescription:
        "Charge point management system software that tracks connectors, sessions, faults, and tariffs for stations you operate.",
      paragraphs: [
        "EV charging station software is the system of record for sites you operate. A charge point management system, usually shortened to CPMS, is that product: which stations exist, which connector is free, which session is running, and which fault needs a person. OCPP 2.0.1 calls the server a Charging Station Management System (CSMS). OCPP 1.6 calls it the Central System. The job is the same. Drivers never log into the CPMS. Operators do.",
        "A useful CPMS stores the station once and shows it everywhere else: the driver map, the tariff, the invoice, and the roaming record if you publish the site. We model site, charger, connector, and session as separate records so a dual-gun charger does not collapse into a single pin. Meter values stay attached to the session that produced them. Without that split, billing and uptime reports argue with each other.",
      ],
      included: [
        "Site, charger, and connector records",
        "Live status from charger heartbeats and status messages",
        "Session history with energy and timestamps",
        "Fault list an operator can assign",
        "A role split between field staff and head office",
      ],
      tools: ["OCPP", "PostgreSQL", "WebSockets", "React"],
    },
    {
      id: "ocpp-backend",
      tocLabel: "OCPP CMS",
      heading: "OCPP CMS Backend for 1.6J and 2.0.1",
      schemaDescription:
        "OCPP CMS backend for JSON 1.6J and 2.0.1, covering authorize, remote start and stop, meter values, and charger configuration.",
      paragraphs: [
        "The OCPP CMS backend is the server chargers dial. OCPP 1.6J is JSON over a WebSocket. The messages operators rely on are BootNotification, Heartbeat, StatusNotification, Authorize, StartTransaction, StopTransaction, MeterValues, RemoteStartTransaction, and RemoteStopTransaction. Configuration, firmware triggers, and charging profiles are in the same specification, and a given charger implements a subset. We record which subset each model actually answers.",
        "OCPP 2.0.1 is not a rename of 1.6. It uses a device model, TransactionEvent instead of the old start and stop pair, and stronger security options, including certificate-based connections. It is also the practical path when you later want ISO 15118 messages to pass through the charger. Many chargers already installed in India still speak 1.6J only. A backend that must run a mixed fleet implements both and keeps the session model identical so billing does not care which protocol started the energy flow.",
      ],
      included: [
        "WebSocket endpoint for OCPP 1.6J",
        "OCPP 2.0.1 endpoint when your chargers speak it",
        "Authorize, remote start, remote stop, and meter values",
        "A written list of messages each charger model passed",
        "Connection logs so a failed boot is visible",
      ],
      tools: ["OCPP 1.6J", "OCPP 2.0.1", "WebSockets", "TLS"],
    },
    {
      id: "ocpi-roaming",
      tocLabel: "OCPI 2.2.1 roaming",
      heading: "OCPI 2.2.1 Roaming",
      schemaDescription:
        "OCPI 2.2.1 between a CPO and an eMSP so locations, tokens, sessions, tariffs, and charge detail records can be exchanged.",
      paragraphs: [
        "OCPI roaming is how two companies share charging without merging their apps. OCPI 2.2.1, maintained by the EVRoaming Foundation, is an interface between businesses, not between a charger and a server. The modules we implement when they are in scope are credentials, locations, tariffs, tokens, commands, sessions, and charge detail records (CDRs). Charging profiles exist in the specification for smart-charging limits across a roaming session. We turn a module on only when the partner actually supports it.",
        "A practical rollout is one partner, not a theoretical hub of every network. You exchange credentials, the charge point operator publishes locations and tariffs, the eMSP shows those pins in its driver app, a token authorizes the driver, and a CDR is the record both sides use to settle. Partial implementations are common. We keep modules separate so a partner that cannot send commands yet can still publish locations. Our [OCPP and OCPI guide](/blog/ev-charging-app-ocpi-ocpp-guide) walks through the same split in more detail.",
      ],
      included: [
        "Credentials handshake with one partner first",
        "Locations and tariffs published or consumed",
        "Tokens for app and RFID authorization",
        "Sessions and CDRs for settlement",
        "A note on which modules the partner does not implement",
      ],
      tools: ["OCPI 2.2.1", "REST", "JSON", "Tokens"],
    },
    {
      id: "ocpp-vs-ocpi",
      tocLabel: "OCPP vs OCPI",
      heading: "OCPP vs OCPI, in Plain Language",
      schemaDescription:
        "OCPP connects a charger to your backend. OCPI connects your business to another charging network for roaming and settlement.",
      paragraphs: [
        "OCPP and OCPI solve different links, which is why both names show up in EV charging app development briefs. OCPP (Open Charge Point Protocol) is the charger talking to your backend: I am online, the connector is preparing, start this transaction, here are the meter values, stop. If that link is down, the hardware may still deliver energy under its local rules, but your app cannot see it and should not pretend the pin is live.",
        "OCPI (Open Charge Point Interface) is your company talking to another company. It answers: here are my public locations, here is the price, this token belongs to your driver, this session happened, this CDR is what we will settle. OCPI does not replace OCPP. A charge point operator still needs OCPP, or a vendor cloud that speaks OCPP, to control its own chargers. An eMSP that owns no chargers may only need OCPI, plus a driver app. Putting both protocols in one sentence on a sales slide does not make them one integration.",
      ],
      included: [
        "A diagram in the scope that names each protocol once",
        "OCPP only, when you operate hardware and do not roam yet",
        "OCPI only, when you are an eMSP on someone else's chargers",
        "Both, when you operate hardware and roam",
        "No claim that one protocol covers the other",
      ],
      tools: ["OCPP", "OCPI", "CSMS", "CDR"],
    },
    {
      id: "emsp-cpo",
      tocLabel: "CPO and eMSP records",
      heading: "CPO and eMSP Records in the CMS",
      schemaDescription:
        "Software for an e-mobility service provider, a charge point operator, or both roles in one account model.",
      paragraphs: [
        "The CPO CMS and the eMSP platform above share one charging management system, and the records stay separate. A station, a driver token, and a session are not the same table. The CPO side holds the OCPP connection, site tariffs, and the fault ticket. The eMSP side holds the driver account, the payment method, and the invoice the driver receives. Many networks start as one role.",
        "We keep the roles in the data model even when the first release has a single brand. A driver, a token, a session, and a station should not be the same table. If you later roam, the eMSP side already knows how to hold a token that is not tied to a charger you own, and the CPO side already knows how to accept a token that did not originate in your app. That is a structure choice on day one, not a rewrite on day two hundred.",
      ],
      included: [
        "CPO console for stations you operate",
        "eMSP app for drivers you bill",
        "Separate token, session, and station records",
        "A way to be both roles without two products",
        "A phase plan if you will add the second role later",
      ],
      tools: ["CPO", "eMSP", "OCPI", "OCPP"],
    },
    {
      id: "driver-app",
      tocLabel: "Driver mobile app",
      heading: "Driver Mobile App for iOS and Android",
      schemaDescription:
        "iOS and Android driver app to find a charger, book when the hardware allows, start with RFID or QR, and pay with UPI, cards, or an in-app balance.",
      paragraphs: [
        "The driver mobile app is the map, the session, and the receipt. On iOS and Android we show chargers the backend actually knows about, with filters a driver uses in India: connector, power band, and whether the connector is available. A pin without a fresh status is labeled from the last heartbeat, not drawn as free. Navigation hands off to the maps app the phone already has. We do not invent a traffic layer.",
        "Start can be an in-app remote start, a QR code that identifies the connector, or an RFID card the charger authorizes through OCPP. Reservation is included only when that charger implements it. Many 1.6J units do not. Payments are UPI, cards, or an in-app balance through a gateway you contract. We integrate the gateway. We are not the payment company, and we do not hold a prepaid-instrument licence for you. If a stored balance can be withdrawn or spent outside charging, your counsel confirms the RBI position before we shape that wallet. Screen flows are designed with the same care as our [UI/UX](/services/ui-ux-design) work, and the store builds follow [mobile app development](/services/mobile-app-development).",
      ],
      included: [
        "Map with connector, power, and live status",
        "QR start and RFID token support",
        "Remote start and stop when OCPP allows it",
        "UPI, cards, and an in-app charging balance",
        "Session screen with energy and a receipt",
      ],
      tools: ["iOS", "Android", "React Native", "QR", "UPI"],
    },
    {
      id: "operator-dashboard",
      tocLabel: "CMS operator dashboard",
      heading: "CMS Operator Dashboard",
      schemaDescription:
        "Web dashboard for operators to watch charger health, sessions, tariffs, users, and settlements.",
      paragraphs: [
        "The admin and operator dashboard is a web app, not a stretched phone screen. Dispatch sees which connectors are faulted. Finance sees which sessions have a CDR and which payments are still open. A site host, such as a mall or hotel, can be limited to its own locations. Head office sees the network. Those are roles, not three products.",
        "We put actions the protocol supports on the charger page: remote start, remote stop, reset when the charger implements it, and a configuration change that is logged. An action the firmware does not support is hidden, not shown as a button that fails in front of a customer. Exports cover sessions and invoices for the accountant. The dashboard does not replace your books.",
      ],
      included: [
        "Network, site, and charger views",
        "Roles for operations, finance, and a site host",
        "Remote commands limited to what the charger implements",
        "Session and invoice export",
        "An audit trail on tariff and access changes",
      ],
      tools: ["React", "Role-based access", "CSV export"],
    },
    {
      id: "smart-charging",
      tocLabel: "Load management and smart charging",
      heading: "Load Management and Smart Charging",
      schemaDescription:
        "Site load limits and OCPP charging profiles so active sessions stay within the power the site can supply.",
      paragraphs: [
        "Load management and smart charging keep a site inside the power the electrical design allows. The input is a limit your electrician or facility team states for a panel, a feeder, or a site. The backend watches active sessions and sends an OCPP charging profile, on 1.6J via SetChargingProfile where the charger supports it, so the sum of connector limits stays under that cap. If a charger ignores profiles, we say so in the hardware test. We do not pretend a software slider can exceed the breaker.",
        "Smart charging here is not a promise of grid-market trading. Utility demand-response APIs are a separate integration, in scope only when you have that contract and a document we can read. For a building, the useful version is quieter: pause or slow the sessions that can wait, and leave a session alone when the driver or the fleet rule says it cannot wait. The rule is written down. It is not a hidden score.",
      ],
      included: [
        "A site or panel limit set by your electrical design",
        "Charging profiles on chargers that accept them",
        "A test note when a model ignores profiles",
        "Priority rules for sessions that cannot be delayed",
        "No claim of utility-market trading unless that API is in scope",
      ],
      tools: ["OCPP ChargingProfile", "SetChargingProfile", "Site limits"],
    },
    {
      id: "hardware-integration",
      tocLabel: "OCPP hardware integration",
      heading: "OCPP-Compliant Hardware Integration",
      schemaDescription:
        "Integration with chargers that speak OCPP 1.6J or 2.0.1, confirmed on the firmware you will install, not on a brand logo.",
      paragraphs: [
        "OCPP-compliant hardware integration means the charger speaks OCPP 1.6J or 2.0.1 closely enough to boot, authorize, meter, and stop. Brand names are not a compatibility list. Two units from the same manufacturer can ship different firmware. We ask for the model, the OCPP version, and a way to reach one physical charger or a vendor simulator that matches that firmware. The test is a script: boot, heartbeat, authorize, start, meter values, stop, and the remote commands you need on day one.",
        "Connectors are a separate question from the protocol. Newer car chargers in India commonly use Type 2 for AC and CCS2 for DC. Older public sites may still use Bharat AC-001 or Bharat DC-001. AC-001 is a public AC specification with three 230 V outputs, about 3.3 kW each, and IEC 60309 connectors. DC-001 is the low-voltage DC specification for packs around 48 V, 60 V, and 72 V, on the order of 15 kW, with OCPP toward the management system on chargers built to that spec. We show the connector the hardware reports. We do not draw a CCS2 pin on a Bharat AC outlet. Charger connectivity is the IoT part of this work. It lives on this page, not on a separate IoT product.",
      ],
      included: [
        "A protocol test on the firmware you will deploy",
        "Pass and fail notes per message",
        "Connector type stored as data, not guessed from the brand",
        "Support for a mixed 1.6J and 2.0.1 fleet when you have both",
        "A refusal when a closed vendor cloud will not give us OCPP access",
      ],
      tools: ["OCPP 1.6J", "OCPP 2.0.1", "CCS2", "Type 2", "Bharat AC-001"],
    },
    {
      id: "billing-tariffs",
      tocLabel: "Billing and tariffs",
      heading: "Billing, Tariffs, and GST Invoices",
      schemaDescription:
        "Tariffs by energy, time, session, and idle fees, with GST invoice fields your operator is responsible for filing.",
      paragraphs: [
        "Billing starts from a tariff a person can explain. Elements we model are energy (per kWh), time (per minute while charging), a fixed fee per session, and an idle fee after charging finishes while the vehicle still occupies the connector. A site can have more than one tariff by time of day. The price the driver saw at start is the price the receipt uses, unless you have written a different rule. OCPI's tariff module is how that price is published to a roaming partner. It is not a second, secret price.",
        "GST invoicing means the document can carry your GSTIN, place of supply, SAC, taxable value, and the tax breakup your accountant specifies. We do not choose your tax rate, and we do not file returns. The operator remains responsible for registration and filing. Settlements to a site host, such as a hotel or a mall, are a split you define in the contract. The software records the split. It does not replace the contract. The published starting range for an MVP is on the [pricing page](/pricing). It is not a tariff for electricity.",
      ],
      included: [
        "Energy, time, session, and idle components",
        "Time-of-day tariffs per site",
        "A receipt that matches the price shown at start",
        "GST invoice fields your finance team specifies",
        "Host settlement records when a site share is in the contract",
      ],
      tools: ["Tariffs", "CDR", "GST invoice fields", "UPI"],
    },
    {
      id: "fleet-charging",
      tocLabel: "Fleet charging",
      heading: "Fleet Charging",
      schemaDescription:
        "Depot charging for known vehicles, with RFID or vehicle identity, departure priority, and a private or semi-private site.",
      paragraphs: [
        "Fleet charging is a depot problem more often than a public-map problem. The vehicles are known, the site is private or shared with a landlord, and the question is which vehicle must leave at which time. We attach an RFID or a vehicle record to the session so energy is reported per vehicle, not only per connector. A dispatcher can mark a departure priority. Load management then prefers the bus or van that has to move, and slows the one that can wait, within the panel limit.",
        "A fleet can still use the same CPMS as a public site. Public pins are simply not published for the depot, or they are published only for the bays you mark public. Drivers of pool cars can use the same app with a group that does not see public prices. We do not assume a fleet wants OCPI on day one. Roaming can wait until a vehicle charges away from the depot.",
      ],
      included: [
        "Vehicle or RFID identity on each depot session",
        "Departure priority inside the site load limit",
        "Depots hidden from the public map",
        "Energy per vehicle for the fleet manager",
        "Public bays only where you mark them public",
      ],
      tools: ["RFID", "OCPP", "Depot rules", "Load limits"],
    },
    {
      id: "white-label",
      tocLabel: "White-label EV CMS",
      heading: "White-Label EV Charging CMS",
      schemaDescription:
        "A white-label EV charging CMS: your brand on the driver app and operator console, your stores, and your domain.",
      paragraphs: [
        "A white-label EV charging CMS is your name on the store listing, your colors, your support address, and your domain on the dashboard. The protocol behavior does not change because the logo did. We still need to know whose chargers, whose payment gateway, and whose GSTIN appear on the invoice. White-label is a brand and release choice. It is not a shortcut around OCPP testing.",
        "Agencies that want us to build under their client relationship can also use the [white-label development](/white-label-development) engagement. On this page the product is the charging stack. You receive the repositories for the app and the backend that the scope names. We do not keep a hidden production lock. App Store and Play policies still apply to the legal entity that publishes the app.",
      ],
      included: [
        "Your brand on the driver app and dashboard",
        "Store listings in your developer accounts",
        "Your domain and your payment gateway",
        "Source repositories named in the scope",
        "The same hardware test as a single-brand build",
      ],
      tools: ["iOS", "Android", "White-label", "Your GSTIN"],
    },
    {
      id: "plug-and-charge",
      tocLabel: "ISO 15118 / Plug & Charge",
      heading: "ISO 15118 and Plug & Charge Readiness",
      schemaDescription:
        "Backend readiness for ISO 15118 Plug & Charge on OCPP 2.0.1. Not a claim that a live Plug & Charge network is already running.",
      paragraphs: [
        "ISO 15118 is the standard for communication between the vehicle and the charger. Plug & Charge is the use case where the car presents a contract certificate and the session can start without an app tap or an RFID card, when the car, the charger, and a certificate ecosystem all support it. OCPP 2.0.1 is the backend path that carries those exchanges more completely than 1.6J. Readiness means we leave a place in the data model for contracts and certificate status, and we do not paint the product into a corner that only understands an app token.",
        "Readiness is not a live Plug & Charge network. We do not operate a vehicle-to-grid public-key infrastructure, and we do not claim your current cars will plug in and start with no other step. That depends on the vehicle, the charger firmware, and a contract certificate you are entitled to issue or buy. When those three exist, the OCPP 2.0.1 work in the scope is what we connect. Until they exist, drivers start with the app, QR, or RFID.",
      ],
      included: [
        "Authorization model that can hold more than an app token",
        "OCPP 2.0.1 as the path when Plug & Charge is in scope",
        "A written gap list if today's chargers are 1.6J only",
        "No claim of a running Plug & Charge deployment",
        "App, QR, and RFID start remain available",
      ],
      tools: ["ISO 15118", "OCPP 2.0.1", "Contract certificates"],
    },
    {
      id: "analytics",
      tocLabel: "Analytics",
      heading: "Charging Analytics",
      schemaDescription:
        "Operational analytics for sessions, energy, uptime, failed starts, and revenue by site, based on data your chargers send.",
      paragraphs: [
        "Analytics on an EV network are operational, not a vanity dashboard. The figures that change a decision are sessions started, sessions that delivered energy, kWh by site and connector, time a connector was faulted, and revenue by tariff. Uptime is derived from heartbeats and status notifications. If a charger stops sending heartbeats, the chart should show a gap, not a flat healthy line.",
        "We do not publish benchmark percentages for your network before it exists, and we do not invent an industry average on this page. Filters cover site, connector, and day. Exports exist so finance can reconcile payments outside the tool. A map of India with guessed demand is not an analytics feature. If you later want a model on top of real session history, that is a separate [custom software](/services/software-development) conversation with the data you actually have.",
      ],
      included: [
        "Sessions, energy, and revenue by site",
        "Failed starts and fault duration",
        "Heartbeat gaps shown as gaps",
        "Export for reconciliation",
        "No invented benchmark figures",
      ],
      tools: ["PostgreSQL", "Session records", "CSV"],
    },
    {
      id: "india-context",
      tocLabel: "India: Bharat, UPI, GST",
      heading: "EV Charging Software for India",
      schemaDescription:
        "India-specific product choices: Bharat AC-001 and DC-001 alongside CCS2 and Type 2, UPI payments, and GST invoice fields.",
      paragraphs: [
        "India context shows up in the connector list, the payment method, and the invoice, not in a stock photo of a city. Public and fleet sites here are a mix. Cars increasingly charge on Type 2 and CCS2. Two-wheelers and three-wheelers still meet Bharat AC-001 and Bharat DC-001 equipment. The app has to filter on the connector the vehicle can use. A car driver should not be sent to a low-voltage DC bay. A two-wheeler rider should not be sent only to a CCS2 gun.",
        "Payments in India mean UPI is a first-class option next to cards, through a gateway you contract. Invoices need GST fields, as described in the billing section. We do not quote a government station count, a subsidy, or a tax rate on this page. Those change, and they are not our product. The team that builds the software is in Jaipur. Delivery is remote for the rest of India and for teams outside India. Your charger still has to be reachable by the backend, wherever the site is.",
      ],
      included: [
        "Connector filters that include Bharat and CCS2 / Type 2",
        "UPI and cards through your gateway",
        "GST invoice fields, without us filing returns",
        "No invented subsidy or station-count claims",
        "Remote delivery from Jaipur across India and worldwide",
      ],
      tools: ["UPI", "Bharat AC-001", "Bharat DC-001", "CCS2", "Type 2"],
    },
    {
      id: "who-its-for",
      tocLabel: "Who it's for",
      heading: "Who This Charging Management System Is For",
      schemaDescription:
        "CPOs, eMSPs, fleets, malls and real estate, hotels, and startups that need charging software rather than a brochure site.",
      paragraphs: [
        "Charge point operators come when a vendor cloud is too closed, or when several charger brands must sit in one CPMS. eMSPs come when they want a driver app and OCPI onto networks they do not own. Fleets come for a depot view, vehicle identity, and departure priority. The software is the same family of components. The first release is not.",
        "Real estate and malls usually host chargers rather than become a national eMSP. They need a site-level dashboard, a way for visitors to pay, and a settlement note for the operator or the brand on the charger. Hotels are similar, with the extra question of whether a stay should charge a room folio or a direct UPI payment. Startups come for a white-label product they can put in market under their own name. We will say if the brief is only a marketing site. That work belongs on website development, not here.",
      ],
      included: [
        "CPOs replacing or avoiding a closed vendor cloud",
        "eMSPs that roam onto other networks",
        "Fleets with depot charging",
        "Malls, real estate, and hotels hosting chargers",
        "Startups shipping a white-label charging product",
      ],
      tools: ["CPO", "eMSP", "Fleet", "Hospitality", "White-label"],
    },
    {
      id: "cost-and-timeline",
      tocLabel: "Cost and timeline",
      heading: "What Changes Cost and Timeline",
      schemaDescription:
        "Cost and timeline factors for an EV charging build. The pricing page lists a starting range; this page does not sell a fixed package.",
      paragraphs: [
        "Cost follows scope. A driver app on one existing network is smaller than a CPMS plus OCPP for several charger models plus OCPI with more than one partner. Other factors are iOS and Android together, an operator dashboard, UPI and cards, GST invoice depth, fleet rules, load management, white-label store releases, and whether ISO 15118 readiness is in the first phase or later. Hardware you cannot reach, or a vendor cloud that will not expose OCPP, adds time we cannot compress with more screens.",
        "The [pricing page](/pricing) publishes a starting range of ₹4,50,000, ex-GST, after discovery. The label on that page is an eMSP or CPO MVP with live maps, charging sessions, and OCPP/OCPI. That figure is a starting range, not a package you can order unchanged. Our [technical guide](/blog/ev-charging-app-ocpi-ocpp-guide) describes a first CSMS and driver app, a handful of charger models, and one payment method as often 10 to 14 weeks once access and hardware are ready. An eMSP app without owned chargers can be shorter. A multi-model rollout plus roaming is longer. We do not lock a week count in the first email.",
      ],
      included: [
        "Protocol scope: 1.6J, 2.0.1, OCPI, or a combination",
        "How many charger models must pass a protocol test",
        "Driver app, dashboard, payments, and GST invoices",
        "Fleet rules and site load management",
        "A written scope before build, not a fixed SKU",
      ],
      tools: ["Written scope", "Pricing page", "Discovery"],
    },
  ],
  starterPack: {
    id: "ev-first-release",
    heading: "What a First EV Charging Release Usually Includes",
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
    note: "OCPI partners, extra charger models, fleet priority, and Plug & Charge readiness are later phases unless discovery puts them in the first scope. Ask for that scope on the contact form.",
    ctaLabel: "Request a scoped estimate",
    ctaHref: "/contact",
  },
  process: [
    {
      title: "Discovery",
      description:
        "We write down the role you play: CPO, eMSP, fleet, site host, or a mix. We list charger models, OCPP versions, whether a vendor cloud already sits in the middle, and whether payments and GST invoices are in the first release. You get a scope, not a slogan.",
    },
    {
      title: "Protocol proof",
      description:
        "One charger, or a simulator that matches its firmware, completes boot, authorize, start, meter values, and stop. Remote commands you need on day one are in the same test. Models that fail stay out of the promise.",
    },
    {
      title: "Product design",
      description:
        "Driver flows and the operator dashboard are drawn before the build spreads. Connector filters, error states, and the price shown before start are part of the design, not a polish pass. UI/UX and engineering sit on the same team.",
    },
    {
      title: "Build",
      description:
        "The backend, the apps, tariffs, and the dashboard are built against the protocol proof. Sessions store energy and money as separate facts. Staging is available while the work is in progress.",
    },
    {
      title: "Hardware and roaming rollout",
      description:
        "Further charger models repeat the protocol test. OCPI, if it is in scope, starts with one partner and the modules that partner implements. We do not open every module on the first day.",
    },
    {
      title: "Launch and handover",
      description:
        "Store listings, a monitored backend, and notes for adding a site. Accounts and repositories stay in your name. Ongoing hosting can move to DevOps and cloud, or your team can run what we handed over.",
    },
  ],
  whyPoints: [
    {
      title: "Based in Jaipur",
      description:
        "The people who design the app and the OCPP backend are in Jaipur, Rajasthan. You get a named conversation. Delivery is remote across India and worldwide.",
    },
    {
      title: "Full stack, one team",
      description:
        "Driver app, operator dashboard, and charging backend are built together. Protocol work is not handed to a separate unnamed group.",
    },
    {
      title: "A live product you can open",
      description:
        "PlugOne is a charging product we shipped. You can open plugone.in and the case study. We do not attach invented usage figures to it.",
    },
    {
      title: "Scope before build",
      description:
        "You get a written scope after discovery. The pricing page shows a starting range. This page does not pretend that range is a fixed package.",
    },
  ],
  relatedLinks: [
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
      title: "UI/UX design",
      text: "Driver and operator flows designed before the build, in the same team.",
    },
    {
      href: "/services/devops",
      title: "DevOps and cloud",
      text: "Pipelines, hosting, and monitoring for the charging backend after it exists.",
    },
    {
      href: "/blog/ev-charging-app-ocpi-ocpp-guide",
      title: "OCPP and OCPI guide",
      text: "How the two protocols differ, and how roaming settlement actually moves.",
    },
    {
      href: "/portfolio/plugone-ev-charging-platform",
      title: "PlugOne case study",
      text: "The live EV charging product. Open plugone.in as well if you want the running site.",
    },
    {
      href: "/white-label-development",
      title: "White-label development",
      text: "For agencies that need the build delivered under their client relationship.",
    },
  ],
  faqs: [
    {
      question: "What is a CMS for CPO?",
      answer:
        "A CMS for a CPO (charge point operator) is the software that runs the chargers you operate. Teams also call it a CPMS, and OCPP 2.0.1 calls the server a CSMS. It onboards chargers over OCPP, shows connector status, sends remote start and stop, stores meter values, holds tariffs, and raises an alert when heartbeats stop. It does not, by itself, let your drivers use another company's chargers. That link is OCPI, on the eMSP side.",
    },
    {
      question: "What is an eMSP platform and how is it different from a CPO CMS?",
      answer:
        "An eMSP platform is the product the driver belongs to: the account, the app or RFID token, the price, the payment, and the invoice. A CPO CMS is the product the charger belongs to. The eMSP reaches partner chargers through OCPI 2.2.1 (locations, tokens, sessions, and charge detail records). The CPO reaches its own hardware through OCPP 1.6J or 2.0.1. They can live in one charging management system. They are not the same screen.",
    },
    {
      question: "Can one CMS serve both CPO and eMSP roles?",
      answer:
        "Yes. Stations and driver tokens stay separate records, so one EV charging CMS can operate your chargers and also let your drivers roam onto partner CPOs. You do not have to launch both roles on day one. Roaming still needs a partner that implements the OCPI modules you use. A combined CMS is not automatically a public roaming hub.",
    },
    {
      question: "Do you offer a white-label EV charging CMS?",
      answer:
        "Yes. White-label means your brand, your store accounts, your domain, and your payment gateway on the CMS. OCPP and OCPI testing does not change because the logo did. You receive the repositories named in the scope. This page does not sell a fixed package. The pricing page lists a starting range for an MVP.",
    },
    {
      question: "How much does it cost to develop an EV charging app in India?",
      answer:
        "The pricing page publishes a starting range of ₹4,50,000, ex-GST, after discovery. It labels that range as an eMSP or CPO MVP with live maps, charging sessions, and OCPP/OCPI. That is a starting range, not a fixed package. Cost moves with a driver app versus a full charge point management system, OCPP 1.6J and 2.0.1, OCPI roaming, how many charger models must be tested, UPI and card payments, GST invoices, fleet rules, and whether you ship iOS and Android together. We send a written scope before build.",
    },
    {
      question: "What is OCPP?",
      answer:
        "OCPP is the Open Charge Point Protocol. It is how an EV charger talks to a central backend. Version 1.6J is JSON over a WebSocket and covers boot, heartbeat, authorize, start, meter values, and stop. Version 2.0.1 uses a device model and TransactionEvent, and it is the better path when you later need ISO 15118 messages. OCPP does not, by itself, let two companies roam onto each other's networks.",
    },
    {
      question: "What is the difference between OCPP and OCPI?",
      answer:
        "OCPP connects a charger to your backend so you can see status and start or stop a session. OCPI connects your business to another charging business so you can exchange locations, tariffs, tokens, sessions, and charge detail records. A charge point operator usually needs OCPP for its own hardware. An eMSP that owns no chargers may only need OCPI. They are not substitutes.",
    },
    {
      question: "Can you integrate with any charger brand?",
      answer:
        "We integrate chargers that speak OCPP 1.6J or 2.0.1 closely enough to boot, authorize, meter, and stop. Brand logos are not a compatibility list, because firmware differs inside a brand. Discovery includes a protocol test on the model you will install. If a vendor cloud will not expose OCPP, we say so and we do not pretend the app can control that hardware.",
    },
    {
      question: "Do you build white-label EV charging apps?",
      answer:
        "Yes. A white-label build uses your brand, your store accounts, your domain, and your payment gateway. The OCPP or OCPI test is the same as a single-brand build. You get the repositories named in the scope. Publishing still follows App Store and Play rules for the legal entity on the listing.",
    },
    {
      question: "What is a CPMS or charge point management system?",
      answer:
        "A CPMS is the operator software for stations: sites, chargers, connectors, sessions, faults, and tariffs. OCPP 2.0.1 calls the server side a CSMS, and OCPP 1.6 calls it a Central System. Drivers use the mobile app. Operators use the CPMS. We build both when the scope includes both.",
    },
    {
      question: "Do you build both eMSP and CPO software?",
      answer:
        "Yes, including a company that is both. The CPO side is the CPMS and the OCPP connection. The eMSP side is the driver account, the token, the app, and the invoice. The data model keeps those roles separate so roaming does not require a rewrite.",
    },
    {
      question: "How long does EV charging app development take?",
      answer:
        "Our technical guide describes a first CSMS and driver app, a handful of charger models, and one payment method as often 10 to 14 weeks once hardware access is ready. An eMSP app that does not own chargers can be shorter. Several charger models plus OCPI with more than one partner takes longer. We do not promise a week count before discovery.",
    },
    {
      question: "What is OCPI roaming?",
      answer:
        "OCPI roaming lets a driver of one network use a charger of another, with a record both companies can settle. OCPI 2.2.1 modules cover credentials, locations, tariffs, tokens, commands, sessions, and charge detail records. We start with one partner and the modules that partner implements, rather than assuming every network speaks the full specification.",
    },
    {
      question: "Can the driver app use UPI, cards, RFID, and QR?",
      answer:
        "Yes, when they are in scope. UPI and cards go through a payment gateway you contract. We are the software vendor, not the payment institution. RFID is an OCPP id tag the charger authorizes. A QR code identifies the connector so the app can request a remote start. An in-app balance used only for charging can be built; if that balance can be withdrawn, your counsel confirms the regulatory position first.",
    },
    {
      question: "Do you support ISO 15118 Plug & Charge?",
      answer:
        "We can prepare the backend for ISO 15118 Plug & Charge on OCPP 2.0.1, including a place for contract authorization. We do not claim a live Plug & Charge network, and we do not run a vehicle certificate authority. Until the car, the charger, and a contract certificate all exist, drivers start with the app, QR, or RFID.",
    },
    {
      question: "Do you only work in Jaipur?",
      answer:
        "The team is based in Jaipur, Rajasthan. Projects are delivered remotely across India and worldwide. Charger sites can be anywhere the hardware can reach the backend. Your location can change the cloud region we recommend. It does not change who builds the software.",
    },
  ],
};
