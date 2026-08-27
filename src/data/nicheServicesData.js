import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import SoftwareFeatures from "../assets/images/Services/SoftwareFeatures.png";

const platforms = ["iOS", "Android", "Web"];

const defaultProcess = [
  {
    step: 1,
    title: "Discovery & scope",
    description:
      "We lock users, must-have flows, integrations, and a written definition of done before build starts.",
  },
  {
    step: 2,
    title: "UX and architecture",
    description:
      "Flows, roles, and data model first — so iOS, Android, and web share one product, not three guesses.",
  },
  {
    step: 3,
    title: "Build in visible slices",
    description:
      "Weekly demos from Jaipur. You review working software, not slide decks.",
  },
  {
    step: 4,
    title: "QA, launch, support",
    description:
      "Store listings or hosting, analytics, and a support window after go-live.",
  },
];

export const nicheServices = [
  {
    id: "mlm-crm-development",
    title: "MLM CRM Development",
    slug: "mlm-crm-development",
    description:
      "TheTriFusion designs MLM CRM software around your compensation plan — unilevel, genealogy, KYC, wallets, and lead management — delivered as iOS, Android, and web from Jaipur.",
    shortDescription:
      "TheTriFusion in Jaipur, Rajasthan builds MLM CRM software — unilevel plans, genealogy, KYC, and leads on iOS, Android, and web. Get a scoped estimate.",
    imageUrl: Web,
    featuresImage: SoftwareFeatures,
    icon: "🌳",
    bannerTitle: "MLM CRM Software Development Company in Jaipur, India",
    bannerDescription:
      "Compensation engines, downline views, and recruiter apps — not a generic CRM with a binary-tree plugin bolted on.",
    imageAlt:
      "MLM CRM software dashboard mockup for unilevel compensation and lead management by TheTriFusion",
    platforms,
    relatedBlogSlug: "mlm-crm-unilevel-compensation-plan",
    startingFrom: 350000,
    startingFromNote: "Unilevel CRM MVP with web admin + one mobile app",
    caseStudy: {
      title: "Confidential MLM CRM — unilevel compensation",
      summary:
        "We delivered a network-marketing CRM with a unilevel payout engine, genealogy, KYC, and lead management. The client site is not public; the compensation rules are treated as finance software, not marketing copy.",
      href: "/blog/mlm-crm-unilevel-compensation-plan",
      hrefLabel: "Read the unilevel plan notes",
    },
    services: [
      {
        title: "Unilevel & genealogy engine",
        description:
          "Level-based commissions, rank rules, holdbacks, and an audit log finance can export at month-end.",
      },
      {
        title: "Distributor CRM & KYC",
        description:
          "Onboarding, document checks, downline views, and role-based admin for head office vs field leaders.",
      },
      {
        title: "Lead & recruit management",
        description:
          "Capture, assign, and follow up new prospects next to the genealogy — not in a separate spreadsheet.",
      },
      {
        title: "iOS + Android field apps",
        description:
          "Recruiter apps that share the same wallet and tree as the web console.",
      },
    ],
    process: defaultProcess,
    technologies: [
      {
        title: "Web admin",
        description: "React / Next.js consoles for finance, KYC, and support teams.",
      },
      {
        title: "Mobile",
        description: "React Native or Flutter for iOS and Android field use.",
      },
      {
        title: "Ledger",
        description: "PostgreSQL (or equivalent) for commissions you can reconcile.",
      },
    ],
    features: [
      "Unilevel compensation",
      "Genealogy tree",
      "KYC workflows",
      "Lead management",
      "iOS + Android + Web",
      "Payout exports",
      "Role-based admin",
      "Jaipur delivery team",
    ],
    faqs: [
      {
        question: "Do you only build unilevel plans?",
        answer:
          "Unilevel is a common request. We also scope binary, matrix, and hybrid plans after we see the written compensation document — we do not guess payout math.",
      },
      {
        question: "Will you publish our live MLM site?",
        answer:
          "Only with written permission. Many network-marketing clients keep URLs private. We still document stack, modules, and process on this page.",
      },
      {
        question: "Do you ship iOS, Android, and web together?",
        answer:
          "Yes. Field teams usually need mobile; finance needs a browser console. We plan one data model for all three.",
      },
      {
        question: "What does an MLM CRM typically cost?",
        answer:
          "Focused unilevel MVPs often start around ₹3.5L depending on KYC vendors, wallet complexity, and whether both mobile platforms ship in phase one. We write a scope — we do not sell a fake SKU.",
      },
      {
        question: "Where are you based?",
        answer:
          "Jaipur, Rajasthan. We deliver remotely across India with weekly demos.",
      },
    ],
    pricing: { basic: 350000, standard: 650000, premium: 1200000 },
    technologiesList: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "React Native",
      "Flutter",
    ],
  },
  {
    id: "fintech-app-development",
    title: "Fintech App Development",
    slug: "fintech-app-development",
    description:
      "TheTriFusion builds fintech web and mobile apps in Jaipur with KYC-ready flows, audit logs, encryption, and payment-gateway integrations for Indian SMEs and product teams.",
    shortDescription:
      "TheTriFusion in Jaipur, Rajasthan builds fintech apps — KYC, audit logs, encryption, plus iOS, Android, and web. Request a compliance-aware scoped quote.",
    imageUrl: Mobile,
    featuresImage: SoftwareFeatures,
    icon: "💳",
    bannerTitle: "Fintech App Development Company in Jaipur, India",
    bannerDescription:
      "Compliance and security first: KYC, ledgers, and admin audit trails — then the customer UI.",
    imageAlt:
      "Fintech app development — secure dashboard and mobile checkout UI by TheTriFusion Jaipur",
    platforms,
    relatedBlogSlug: "fintech-app-development-india",
    startingFrom: 400000,
    startingFromNote: "Fintech MVP with KYC + one payment integration",
    caseStudy: {
      title: "How we scope fintech (no fake live client)",
      summary:
        "We do not present demo payment UIs as live banks. Delivery is scoped around licence partners, KYC vendors, and an auditable ledger. Read the India compliance and cost notes.",
      href: "/blog/fintech-app-development-india",
      hrefLabel: "Read the fintech India guide",
    },
    services: [
      {
        title: "KYC and onboarding",
        description:
          "Flows that a compliance officer can explain — not a screenshot of a selfie camera.",
      },
      {
        title: "Ledgers and webhooks",
        description:
          "Idempotent payments, settlement reports, and signed webhooks.",
      },
      {
        title: "Admin audit logs",
        description:
          "Who changed a limit, who exported PII, and when.",
      },
      {
        title: "iOS + Android + Web",
        description:
          "Customer apps plus an operations console from one backend.",
      },
    ],
    process: defaultProcess,
    technologies: [
      {
        title: "App & web",
        description: "React Native / Flutter plus a React admin.",
      },
      {
        title: "APIs",
        description: "Node.js services with explicit auth and rate limits.",
      },
      {
        title: "Security defaults",
        description: "TLS, secrets outside git, least-privilege roles.",
      },
    ],
    features: [
      "KYC-ready flows",
      "Audit logs",
      "Encryption in transit",
      "Payment gateways",
      "iOS + Android + Web",
      "Role-based access",
      "Webhook signatures",
      "Jaipur team",
    ],
    faqs: [
      {
        question: "Are you a bank or NBFC?",
        answer:
          "No. We build software that licensed partners can operate. We do not claim an RBI licence.",
      },
      {
        question: "What security is in scope?",
        answer:
          "Encryption in transit, role-based access, audit logs, and secrets management. Deeper audits (VAPT, ISO) are scoped separately when you need them.",
      },
      {
        question: "Typical cost range?",
        answer:
          "SME fintech MVPs with real KYC and one gateway often start around ₹4L. Complexity of ledger and dual-platform apps moves the number. See Pricing for starting ranges — not SKUs.",
      },
      {
        question: "Do you ship iOS, Android, and web?",
        answer:
          "Yes. Most fintech products need a customer app and an ops console.",
      },
    ],
    pricing: { basic: 400000, standard: 800000, premium: 1500000 },
    technologiesList: [
      "React Native",
      "Flutter",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "React",
    ],
  },
  {
    id: "ev-charging-app-development",
    title: "EV Charging App Development",
    slug: "ev-charging-app-development",
    description:
      "TheTriFusion builds EV charging apps with OCPI roaming and OCPP charger control — maps, sessions, and operator consoles. Proof: PlugOne, live at plugone.in.",
    shortDescription:
      "TheTriFusion in Jaipur, Rajasthan builds EV charging apps with OCPI/OCPP — maps, sessions, iOS, Android, and web. See PlugOne live, then request a quote.",
    imageUrl: Mobile,
    featuresImage: SoftwareFeatures,
    icon: "⚡",
    bannerTitle: "EV Charging App Development Company in Jaipur, India",
    bannerDescription:
      "OCPI for roaming, OCPP for chargers, and a driver app that shows live status — the PlugOne stack.",
    imageAlt: "PlugOne EV charging platform screenshot — live map and session UI by TheTriFusion",
    platforms,
    relatedBlogSlug: "ev-charging-app-ocpi-ocpp-guide",
    startingFrom: 450000,
    startingFromNote: "eMSP-style MVP with map + sessions + one protocol path",
    caseStudy: {
      title: "PlugOne — live EV charging platform",
      summary:
        "PlugOne is India’s unified EV charging platform: nearby stations, live status, session management, and a mobility dashboard. Live site: plugone.in.",
      href: "/portfolio/plugone-ev-charging-platform",
      hrefLabel: "Open the PlugOne case study",
      liveUrl: "https://plugone.in/",
      liveLabel: "Verify live — plugone.in",
    },
    services: [
      {
        title: "OCPI roaming",
        description:
          "Locations, tariffs, and sessions between eMSPs and CPOs so the map is not a single-network toy.",
      },
      {
        title: "OCPP charger control",
        description:
          "Heartbeats, remote start/stop, and meter values from the charge point.",
      },
      {
        title: "Driver apps",
        description:
          "iOS and Android with maps, status, and session history.",
      },
      {
        title: "Operator web console",
        description:
          "Stations, faults, and settlements for the team that actually runs the network.",
      },
    ],
    process: defaultProcess,
    technologies: [
      {
        title: "Protocols",
        description: "OCPI for roaming payloads; OCPP for charger telemetry.",
      },
      {
        title: "Maps & realtime",
        description: "Live status on a map, not a static pin dump.",
      },
      {
        title: "Mobile + web",
        description: "Driver apps and a browser ops console sharing one session model.",
      },
    ],
    features: [
      "OCPI integration",
      "OCPP integration",
      "Live charger map",
      "Session management",
      "iOS + Android + Web",
      "Operator console",
      "PlugOne live proof",
      "Jaipur delivery",
    ],
    faqs: [
      {
        question: "Do you really work with OCPI and OCPP?",
        answer:
          "Yes. PlugOne required both: OCPP to talk to chargers and OCPI to roam locations and sessions. See the live site and the technical blog post.",
      },
      {
        question: "Can I see proof?",
        answer:
          "Open plugone.in and the PlugOne portfolio page. That is a live product, not a concept video.",
      },
      {
        question: "iOS, Android, and web?",
        answer:
          "Yes. Drivers need apps; operators need a console. We plan one backend.",
      },
      {
        question: "Starting range?",
        answer:
          "An eMSP-style MVP with map and sessions often starts around ₹4.5L depending on how many networks and charger vendors you must speak on day one.",
      },
    ],
    pricing: { basic: 450000, standard: 900000, premium: 1800000 },
    technologiesList: [
      "React Native",
      "Node.js",
      "OCPI",
      "OCPP",
      "Maps APIs",
      "AWS",
    ],
  },
  {
    id: "ios-app-development",
    title: "iOS App Development",
    slug: "ios-app-development",
    description:
      "TheTriFusion builds App Store–ready iOS apps in Jaipur — Swift or React Native, TestFlight, review notes, and a backend you own. Paid landing stays at /ios-app-development.",
    shortDescription:
      "TheTriFusion in Jaipur, Rajasthan ships iOS apps — Swift or React Native, App Store review, and TestFlight. Typical MVP 8–12 weeks. Get a scoped quote.",
    imageUrl: Mobile,
    featuresImage: SoftwareFeatures,
    icon: "",
    bannerTitle: "iOS App Development Company in Jaipur, India",
    bannerDescription:
      "App Store quality from Jaipur: certificates, TestFlight, and a review-ready listing — not only screens in Figma.",
    imageAlt:
      "iOS app development — iPhone UI screens designed and built by TheTriFusion Jaipur",
    platforms: ["iOS", "Android (when scoped)", "Web admin"],
    relatedBlogSlug: "flutter-vs-react-native-2024",
    startingFrom: 250000,
    startingFromNote: "Focused iOS MVP after discovery",
    caseStudy: {
      title: "PlugOne on iOS",
      summary:
        "PlugOne’s driver experience includes iOS. Live: plugone.in. We also keep a conversion page at /ios-app-development for paid traffic — this page is the organic capability write-up.",
      href: "/portfolio/plugone-ev-charging-platform",
      hrefLabel: "PlugOne case study",
      liveUrl: "https://plugone.in/",
      liveLabel: "plugone.in",
    },
    services: [
      {
        title: "Swift or React Native",
        description:
          "Native depth when you need it; shared codebase when Android ships with iOS.",
      },
      {
        title: "App Store submission",
        description:
          "Certificates, privacy nutrition labels, screenshots, and review response.",
      },
      {
        title: "Backend & web admin",
        description:
          "The iPhone app is rarely the whole product. We ship the API and ops console too.",
      },
    ],
    process: defaultProcess,
    technologies: [
      { title: "Swift", description: "When iOS-only depth matters." },
      {
        title: "React Native",
        description: "When Android should ship from the same team.",
      },
      { title: "TestFlight", description: "Internal and external testing before review." },
    ],
    features: [
      "App Store ready",
      "Swift or React Native",
      "TestFlight",
      "Backend included",
      "iOS + Android + Web options",
      "Post-launch updates",
      "Jaipur team",
      "Live PlugOne proof",
    ],
    faqs: [
      {
        question: "Is this the same as /ios-app-development?",
        answer:
          "That URL is the paid conversion landing. This /services page is the organic capability page — more process, stack, and FAQs. They link to each other; we do not 301 one onto the other.",
      },
      {
        question: "How long to App Store?",
        answer:
          "A focused MVP is often 8–12 weeks of build plus Apple review time.",
      },
      {
        question: "Do you also build Android?",
        answer:
          "Yes. See Android app development when both stores are in scope.",
      },
    ],
    pricing: { basic: 250000, standard: 500000, premium: 900000 },
    technologiesList: ["Swift", "React Native", "Firebase", "Node.js", "AWS"],
  },
  {
    id: "android-app-development",
    title: "Android App Development",
    slug: "android-app-development",
    description:
      "TheTriFusion builds Play Store–ready Android apps in Jaipur — Kotlin or React Native, listing assets, and a backend you own. Paid landing stays at /android-app-development.",
    shortDescription:
      "TheTriFusion in Jaipur, Rajasthan ships Android apps — Kotlin or React Native and Play Store listing. Typical MVP 8–12 weeks. Request a scoped quote now.",
    imageUrl: Mobile,
    featuresImage: SoftwareFeatures,
    icon: "🤖",
    bannerTitle: "Android App Development Company in Jaipur, India",
    bannerDescription:
      "Play Store path from Jaipur: signing, listing, and crash monitoring after the first install — not a prototype APK.",
    imageAlt:
      "Android app development — Play Store ready mobile UI by TheTriFusion Jaipur",
    platforms: ["Android", "iOS (when scoped)", "Web admin"],
    relatedBlogSlug: "flutter-vs-react-native-2024",
    startingFrom: 250000,
    startingFromNote: "Focused Android MVP after discovery",
    caseStudy: {
      title: "PlugOne and Connect Dairy on Android",
      summary:
        "Live apps in the field: PlugOne (plugone.in) and Connect Dairy (connectdairy.in). This page is the organic Android capability write-up; paid ads use /android-app-development.",
      href: "/portfolio/plugone-ev-charging-platform",
      hrefLabel: "PlugOne case study",
      liveUrl: "https://plugone.in/",
      liveLabel: "plugone.in",
    },
    services: [
      {
        title: "Kotlin or React Native",
        description:
          "Kotlin when Android-only depth matters; React Native when iOS ships with it.",
      },
      {
        title: "Play Store listing",
        description:
          "Store listing, screenshots, and the first-release checklist.",
      },
      {
        title: "Backend & web",
        description:
          "APIs and an ops console so the Android app is not a dead-end client.",
      },
    ],
    process: defaultProcess,
    technologies: [
      { title: "Kotlin", description: "Native Android when you need platform depth." },
      {
        title: "React Native / Flutter",
        description: "Shared delivery when iOS is in the same release.",
      },
      { title: "Play Console", description: "Signing, tracks, and staged rollouts." },
    ],
    features: [
      "Play Store ready",
      "Kotlin or React Native",
      "Live app proof",
      "Backend included",
      "iOS + Android + Web options",
      "Post-launch updates",
      "Jaipur team",
      "Field-app experience",
    ],
    faqs: [
      {
        question: "Difference vs /android-app-development?",
        answer:
          "The root ads URL is for paid traffic and a short form. This service page is the organic, longer capability page. Both stay indexed with different intents.",
      },
      {
        question: "MVP timeline?",
        answer:
          "Often 8–12 weeks after discovery for a focused Android MVP.",
      },
      {
        question: "Do you handle Play Store?",
        answer:
          "Yes. Listing, screenshots, and the first production track.",
      },
    ],
    pricing: { basic: 250000, standard: 500000, premium: 900000 },
    technologiesList: ["Kotlin", "React Native", "Firebase", "Node.js", "AWS"],
  },
  {
    id: "crm-erp-development",
    title: "CRM & ERP Development",
    slug: "crm-erp-development",
    description:
      "TheTriFusion builds custom CRM and ERP modules in Jaipur — pipelines, inventory, billing, and role-based admin — with iOS, Android, and web where field teams need them.",
    shortDescription:
      "TheTriFusion in Jaipur, Rajasthan builds custom CRM/ERP — pipelines, inventory, billing, iOS, Android, and web. See live client ops. Get a scoped quote.",
    imageUrl: Web,
    featuresImage: SoftwareFeatures,
    icon: "📊",
    bannerTitle: "CRM & ERP Software Development Company in Jaipur, India",
    bannerDescription:
      "Replace spreadsheet chaos with modules your team will actually use — sales, ops, and a mobile companion when needed.",
    imageAlt:
      "Custom CRM and ERP admin dashboard built by TheTriFusion in Jaipur",
    platforms,
    relatedBlogSlug: "mlm-crm-unilevel-compensation-plan",
    startingFrom: 300000,
    startingFromNote: "Single CRM module MVP",
    caseStudy: {
      title: "DailyConcepts POS admin + Connect Dairy ops",
      summary:
        "DailyConcepts (dailyconceptsindia.com) needed ecommerce plus a POS-style admin. Connect Dairy (connectdairy.in) is live agri-logistics: fleets, roles, and P&L. Different industries, same lesson: admin workflows are the product.",
      href: "/portfolio/dailyconcepts-ecommerce-pos",
      hrefLabel: "DailyConcepts case study",
      liveUrl: "https://www.connectdairy.in/",
      liveLabel: "Also live — connectdairy.in",
    },
    services: [
      {
        title: "Sales CRM",
        description:
          "Pipelines, follow-ups, quotations, and reporting matched to your stages.",
      },
      {
        title: "Ops / ERP-lite",
        description:
          "Inventory, billing, and dashboards instead of five spreadsheets.",
      },
      {
        title: "Mobile + web",
        description:
          "Field apps on iOS/Android with a browser console for managers.",
      },
      {
        title: "MLM and niche CRMs",
        description:
          "When the “CRM” is actually a compensation engine, see MLM CRM development.",
      },
    ],
    process: defaultProcess,
    technologies: [
      { title: "Web", description: "React admin for dense operational screens." },
      { title: "Mobile", description: "React Native when sales or drivers are in the field." },
      { title: "Integrations", description: "Payments, WhatsApp, and accounting exports as needed." },
    ],
    features: [
      "Custom pipelines",
      "Inventory & billing",
      "Role-based admin",
      "iOS + Android + Web",
      "Live client examples",
      "MLM option",
      "Jaipur delivery",
      "Post-launch support",
    ],
    faqs: [
      {
        question: "SaaS CRM or custom?",
        answer:
          "If HubSpot/Zoho fit, buy them. We build when workflows, commissions, or ops modules do not. The keyword landing at /solutions/crm-erp-software-development covers buyer intent; this page covers how we build.",
      },
      {
        question: "Can you show live work?",
        answer:
          "DailyConcepts India (ecommerce + POS admin) and Connect Dairy (ops/logistics). MLM CRM work stays confidential unless the client agrees.",
      },
      {
        question: "Starting range?",
        answer:
          "A single CRM module MVP often starts around ₹3L. Multi-module ERP is phased.",
      },
    ],
    pricing: { basic: 300000, standard: 600000, premium: 1100000 },
    technologiesList: [
      "React",
      "Node.js",
      "PostgreSQL",
      "React Native",
      "REST APIs",
    ],
  },
];
