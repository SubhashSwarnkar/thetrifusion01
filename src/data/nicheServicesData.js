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
      "TheTriFusion sells custom fintech software from Jaipur: BBPS bill-pay, AEPS Aadhaar banking, DMT, XDMT, UPI, KYC, and retailer–distributor panels. We build the product you operate — white-label or custom — on iOS, Android, and web.",
    shortDescription:
      "TheTriFusion in Jaipur builds and sells BBPS, AEPS, DMT and XDMT software — plus UPI, KYC, and banking apps for retailers, distributors, and fintech operators across India.",
    bannerTitle:
      "Fintech App Development Company in Jaipur | BBPS, AEPS, DMT & XDMT Software",
    bannerDescription:
      "We sell retailer banking software you can run: BBPS, AEPS, DMT, XDMT, UPI, and KYC — with retailer, distributor, and admin panels on Android, iOS, and web. You bring NPCI/bank live credentials; we build the software.",
    imageAlt:
      "BBPS AEPS DMT XDMT fintech software and banking apps built in Jaipur by TheTriFusion",
    imageUrl: Mobile,
    featuresImage: SoftwareFeatures,
    icon: "💳",
    platforms,
    relatedBlogSlug: "fintech-app-development-india",
    startingFrom: 99999,
    startingFromNote: "BBPS / AEPS / DMT software — retailer app + admin from ₹99,999",
    caseStudy: {
      title: "How we scope fintech (no fake live bank)",
      summary:
        "We sell software — not a banking licence. Delivery is scoped around your BBPOU/bank/AEPS partner, KYC vendor, and settlement rules. Read the India compliance and cost notes.",
      href: "/blog/fintech-app-development-india",
      hrefLabel: "Read the fintech India guide",
    },
    services: [
      {
        title: "BBPS bill payment software",
        description:
          "Bharat Bill Payment System modules for electricity, water, gas, FASTag, insurance, and more. Retailer app + admin with biller fetch, payment, receipt, and commission — sold as white-label or custom software.",
      },
      {
        title: "AEPS Aadhaar banking software",
        description:
          "Aadhaar Enabled Payment System for cash deposit, cash withdrawal, balance enquiry, and mini statement. Biometric device flow, two-factor checks, and settlement reports for CSPs and retailers.",
      },
      {
        title: "DMT money transfer software",
        description:
          "Domestic Money Transfer for agent-assisted remittance: sender/beneficiary KYC, IMPS/NEFT, charges, limits, and failed-txn handling. Built for high-volume retailer networks.",
      },
      {
        title: "XDMT express transfer software",
        description:
          "Express DMT (XDMT) for faster payout rails with pipeline status, retry, and ledger posting. Same retailer–distributor tree as DMT so you sell one platform, not four disconnected apps.",
      },
      {
        title: "Retailer, distributor & admin panels",
        description:
          "The product you actually sell: retailer Android/iOS app, distributor wallet and downline, super-admin commissions, KYC holds, and day-end settlement. White-label branding included.",
      },
      {
        title: "UPI, KYC & banking add-ons",
        description:
          "UPI collect/pay, Video-KYC / Aadhaar–PAN, wallets, recharge, and double-entry ledgers — layered on the same BBPS/AEPS/DMT stack when your licence partner allows it.",
      },
    ],
    industriesKicker: "Software we sell",
    industriesHeading: "BBPS, AEPS, DMT & XDMT products for Indian operators",
    industries: [
      {
        title: "BBPS software",
        description:
          "White-label Bharat Bill Payment software for retailers and distributors. Billers, receipts, refunds, and commission slabs — you operate it with your BBPS/BBPOU partnership.",
      },
      {
        title: "AEPS software",
        description:
          "Aadhaar banking software for CSPs and kirana agents: deposit, withdrawal, balance, mini statement, and biometric devices. Sold as an app + admin, not as a bank account.",
      },
      {
        title: "DMT software",
        description:
          "Domestic Money Transfer software for agent remittance networks. Sender/beneficiary flows, IMPS, charges, and distributor hierarchy ready to white-label.",
      },
      {
        title: "XDMT software",
        description:
          "Express DMT software for faster transfer products on the same retailer tree. Status webhooks, retries, and ledger so XDMT and DMT share one settlement view.",
      },
      {
        title: "Retailer banking apps",
        description:
          "Android-first retailer apps (iOS/web admin as needed) that bundle BBPS + AEPS + DMT + XDMT under one login — the package most Indian distributors actually buy.",
      },
      {
        title: "NBFCs & fintech operators",
        description:
          "Custom UPI, lending, KYC, and wallet software for licensed operators who already have bank/NPCI arrangements and need a product team in Jaipur.",
      },
    ],
    process: defaultProcess,
    technologies: [
      {
        title: "Mobile & Web Frontend",
        description: "React Native, Flutter, Swift, Kotlin, and React.js enterprise admin dashboards.",
      },
      {
        title: "Retailer APIs & partner rails",
        description:
          "BBPS, AEPS, DMT, and XDMT integrations against your bank, BBPOU, or NPCI sandbox — plus UPI and KYC vendors when those modules are in scope.",
      },
      {
        title: "Bank-Grade Security Architecture",
        description: "End-to-end TLS encryption, data-at-rest encryption (AES-256), HSM integration, PCI-DSS compliance, and OWASP Top 10 hardening.",
      },
    ],
    features: [
      "BBPS bill payment software",
      "AEPS Aadhaar banking",
      "DMT & XDMT money transfer",
      "Retailer + distributor panels",
      "UPI, KYC & wallets",
      "Commission & settlement ledger",
      "White-label Android / iOS / web",
      "Bank-grade encryption & audit logs",
    ],
    faqs: [
      {
        question: "Do you sell BBPS, AEPS, DMT and XDMT software?",
        answer:
          "Yes. TheTriFusion builds and sells BBPS, AEPS, DMT, and XDMT software as a retailer–distributor–admin product (white-label or custom). You operate it with your own bank, BBPOU, or AEPS partner credentials — we are the software vendor, not the payment network.",
      },
      {
        question: "Are you an NBFC, bank, or BBPS operator?",
        answer:
          "No. We are a Jaipur software company. We do not issue banking licences, NPCI membership, or BBPS/AEPS live access. Those stay with you or your sponsor bank. We build the apps, APIs, ledgers, and panels.",
      },
      {
        question: "What is included in the retailer banking software?",
        answer:
          "Typically a retailer Android app (iOS/web on request), distributor panel, super-admin, commission slabs, KYC holds, receipts, and day-end settlement. Modules can be BBPS, AEPS, DMT, XDMT, UPI, recharge, or a bundle.",
      },
      {
        question: "What security & compliance standards do you implement?",
        answer:
          "AES-256 at rest, TLS 1.3 in transit, audit logs, webhook signatures, rate limits, and role-based access. We support third-party VAPT. Live BBPS/AEPS still requires your partner’s certification process.",
      },
      {
        question: "Which gateways and KYC providers do you integrate?",
        answer:
          "Bank/NPCI/BBPS/AEPS APIs from your live partner, plus Razorpay, Cashfree, PayU, UPI, and KYC vendors such as Karza, HyperVerge, Signzy, Digilocker, and Aadhaar/PAN where the use-case needs them.",
      },
      {
        question: "What is the typical timeline and cost for this software?",
        answer:
          "A retailer BBPS/AEPS/DMT software package with admin and Android starts at ₹99,999. Timeline is typically 8–12 weeks after your API sandbox access is available. Multi-module white-label platforms can be phased.",
      },
    ],
    pricing: { basic: 99999, standard: 199999, premium: 399999 },
    technologiesList: [
      "BBPS",
      "AEPS",
      "DMT",
      "XDMT",
      "UPI",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
  },
  {
    id: "ev-charging-app-development",
    title: "EV Charging App Development",
    slug: "ev-charging-app-development",
    description:
      "TheTriFusion is a premier EV charging app development company in Jaipur & India. We build complete eMSP (e-Mobility Service Provider) driver apps, CPO (Charge Point Operator) station management software, OCPP 1.6J/2.0.1 charger connectivity, and OCPI 2.2.1 roaming networks. We engineered PlugOne (live at plugone.in) — India's unified EV charging platform.",
    shortDescription:
      "TheTriFusion in Jaipur, Rajasthan builds turnkey EV charging software — OCPI roaming, OCPP 1.6J/2.0.1 charger control, live map navigation, wallet billing, iOS & Android driver apps. See PlugOne live.",
    imageUrl: Mobile,
    featuresImage: SoftwareFeatures,
    icon: "⚡",
    bannerTitle:
      "EV Charging App Development Company in Jaipur India | OCPI, OCPP & eMSP Software",
    bannerDescription:
      "OCPI 2.2.1 for seamless network roaming, OCPP 1.6J/2.0.1 for live charger telemetry, interactive map routing, and turnkey eMSP / CPO mobile and web applications — backed by real live proof on PlugOne.",
    imageAlt:
      "EV charging app development company in Jaipur India — PlugOne live map, OCPP station management, and mobile app by TheTriFusion",
    platforms,
    relatedBlogSlug: "ev-charging-app-ocpi-ocpp-guide",
    startingFrom: 450000,
    startingFromNote: "eMSP / CPO MVP with live maps + charging sessions + OCPP/OCPI",
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
        title: "OCPI Roaming & Interoperability",
        description:
          "OCPI 2.1.1 / 2.2.1 integration allowing eMSPs and CPOs to exchange station locations, live connector availability, tariff structures, and charging session roaming across multiple networks.",
      },
      {
        title: "OCPP 1.6J / 2.0.1 Charger Management (CSMS)",
        description:
          "Central System Management Software (CSMS) supporting WebSockets, charger heartbeats, remote start/stop, smart charging profiles, firmware updates, and real-time meter telemetry.",
      },
      {
        title: "EV Driver Mobile Apps (iOS & Android)",
        description:
          "Turn-by-turn navigation to nearby chargers, filter by connector type (CCS2, Type 2, GB/T, Bharat AC/DC), real-time slot booking, live charging session tracking (kW/h, SOC%, cost), and in-app wallet payments.",
      },
      {
        title: "CPO Admin & Fleet Management Web Console",
        description:
          "Web dashboard for station owners to monitor charger health, revenue analytics, dynamic peak/off-peak pricing tariffs, fault alarms, automated billing, and EV fleet charging schedules.",
      },
      {
        title: "EV Wallet, RFID & Payment Integration",
        description:
          "Integrated digital wallets, UPI auto-pay, RFID card provisioning, GST-compliant invoicing, and automated merchant revenue settlements.",
      },
      {
        title: "Smart Charging & Grid Load Management",
        description:
          "Dynamic load balancing algorithms to distribute power capacity across multiple charging guns and prevent grid overloads.",
      },
    ],
    process: defaultProcess,
    technologies: [
      {
        title: "EV Protocols & Telemetry",
        description: "OCPI 2.2.1, OCPP 1.6-J / 2.0.1, WebSockets, MQTT, and IoT gateway connectivity.",
      },
      {
        title: "Real-Time Maps & Geolocation",
        description: "Google Maps API, Mapbox, Geofencing, clustering, and live station status polling.",
      },
      {
        title: "Cloud & Scalable Backend",
        description: "Node.js, PostgreSQL/TimescaleDB for high-frequency meter values, Redis pub/sub, AWS IoT Core, and React / React Native.",
      },
    ],
    features: [
      "OCPI 2.2.1 roaming network",
      "OCPP 1.6J / 2.0.1 charger control",
      "Live interactive charger map",
      "Real-time session & kWh tracking",
      "EV wallet & UPI payments",
      "CPO & eMSP admin console",
      "PlugOne live proof (plugone.in)",
      "iOS + Android + Web",
    ],
    faqs: [
      {
        question: "Do you build both eMSP (driver app) and CPO (charger management) software?",
        answer:
          "Yes. We build complete e-Mobility ecosystems: eMSP mobile applications for EV drivers (discovery, reservation, charging, payment) and CPO Central Systems (CSMS) with OCPP to control hardware and monitor live chargers.",
      },
      {
        question: "What is the difference between OCPI and OCPP in EV charging software?",
        answer:
          "OCPP (Open Charge Point Protocol) connects EV chargers (hardware) to the central management backend for start/stop commands and power readings. OCPI (Open Charge Point Interface) connects different charging networks together for seamless roaming and cross-operator billing.",
      },
      {
        question: "Can we see live proof of an EV charging app built by TheTriFusion?",
        answer:
          "Yes! We built PlugOne, which is live at plugone.in. You can explore the live station map, session flows, and mobility features to verify our direct domain expertise.",
      },
      {
        question: "Which charger connector types and brands are supported?",
        answer:
          "Our CSMS supports any OCPP 1.6J or 2.0.1 compliant charger across all connector standards including CCS2, CHAdeMO, Type 2 AC, GB/T, and Bharat DC-001/AC-001 from manufacturers like Delta, ABB, Schneider, Exicom, and Statiq.",
      },
    ],
    pricing: { basic: 450000, standard: 900000, premium: 1800000 },
    technologiesList: [
      "React Native",
      "Node.js",
      "OCPI 2.2",
      "OCPP 1.6J/2.0.1",
      "PostgreSQL",
      "TimescaleDB",
      "WebSockets",
      "AWS IoT",
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
