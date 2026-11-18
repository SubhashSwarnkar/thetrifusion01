/**
 * Unique on-page SEO per /services/[slug].
 * Each page owns one primary keyword so they do not cannibalize each other.
 * metaDescription target: 150–160 characters.
 */
import { devopsPageContent } from "./devopsPageContent";
import { serviceRankingContent } from "./serviceRankingContent20260929";
import { evChargingPageContent } from "./evChargingPageContent";
import { servicePlanContent } from "./servicePlan/index";
import { serviceIndiaOnpage } from "./serviceIndiaOnpage";

export const servicePageSeo = {
  "software-development": {
    contentUpdatedAt: "2026-10-12",
    metaTitle: "Custom Software Development Company in Jaipur | TheTriFusion",
    metaDescription:
      "Custom CRM, APIs, and ops software for Indian SMEs — written scope, weekly demos, code you own. Request a scoped estimate from the Jaipur team.",
    keywords:
      "custom software development company Jaipur, software development company Rajasthan, custom software India, API development Jaipur, SME software Jaipur",
    bannerTitle: "Custom Software Development Company in Jaipur, India",
    bannerDescription:
      "Internal tools, APIs, and product backends from Jaipur — scoped to your workflow, not a boxed product with a logo swap.",
    shortDescription:
      "Custom software: CRM, APIs, portals and ops tools for Indian SMEs.",
    description:
      "TheTriFusion is a custom software development company in Jaipur, Rajasthan. We replace spreadsheet chaos with portals, APIs, and admin tools Indian SMEs can actually run — then add iOS or Android when field teams need a companion app. You get a written scope, weekly demos, and code you own.",
    locationLine:
      "Custom software from Jaipur, Rajasthan — remote delivery across India.",
    scopeKicker: "Build",
    scopeHeading: "Custom software we build",
    processHeading: "How a Jaipur software project runs",
    ctaHeading: "Ready to scope custom software?",
    ctaText:
      "Share users, must-have modules, and a deadline. We return a written range from Jaipur.",
    serviceType: "Custom Software Development",
    whatsappMessage:
      "Hi TheTriFusion, I need custom software for: ",
    imageAlt:
      "Custom software development team in Jaipur building web and API products for TheTriFusion clients",
    relatedBlogSlug: "tcs-manageengine-sovereign-cloud-software-india-2026",
    coverageSections: [],
    relatedLinks: [
      {
        href: "/services/ev-charging-app-development",
        title: "EV charging management software (CMS & app)",
        text: "Driver apps, OCPP backends, and OCPI roaming when the product is charging software.",
      },
    ],
  },
  "website-development": {
    metaTitle: "Website Development Company in Jaipur | React & Next.js",
    metaDescription:
      "TheTriFusion in Jaipur builds custom websites and web apps — React/Next.js, SEO basics, hosting after launch. SME sites from ₹15,000. Request a scoped quote.",
    keywords:
      "website development company Jaipur, web development Jaipur, React Next.js website Rajasthan, custom website India, business website Jaipur",
    bannerTitle: "Custom Website Development Company in Jaipur, India",
    bannerDescription:
      "Marketing sites, business portals, and ecommerce storefronts on React/Next.js — titles, sitemap, and support after go-live, not a ZIP dump.",
    shortDescription:
      "Business websites and web apps — React/Next.js, SEO basics, post-launch support.",
    description:
      "TheTriFusion is a website development company in Jaipur. We ship React and Next.js sites for Indian businesses: company pages, lead funnels, and ecommerce storefronts with payments and admin. Paid ads use /web-development; the organic capability write-up covers stack, process, and SEO handover.",
    locationLine:
      "Jaipur web team — React/Next.js sites for businesses across India.",
    scopeKicker: "Web",
    scopeHeading: "Websites and web apps we build",
    processHeading: "How a Jaipur website project runs",
    ctaHeading: "Need a website that can rank and convert?",
    ctaText:
      "Share pages, payments, and whether you need admin. We return a scoped range and a typical 6–8 week path from Jaipur.",
    serviceType: "Website Development",
    whatsappMessage:
      "Hi TheTriFusion, I need a business website. Pages:  Deadline: ",
    imageAlt:
      "Custom website development in Jaipur — business site screens by TheTriFusion",
    relatedBlogSlug: "google-official-site-indian-business-website-2026",
    coverageSections: [],
  },
  "mobile-app-development": {
    metaTitle: "Mobile App Development in India | iOS + Android from ₹50,000",
    metaDescription:
      "One React Native or Flutter app for iOS and Android, with backend and admin panel. From ₹50,000; focused MVP in 8–12 weeks. Jaipur team, all India.",
    keywords:
      "mobile app development company Jaipur, cross platform app development India, React Native Flutter Jaipur, iOS Android app company Rajasthan",
    bannerTitle: "Mobile App Development Company in India: iOS and Android",
    bannerDescription:
      "One product on iOS and Android from Jaipur — shared data model, store listings, and a web admin. Dedicated iOS and Android pages cover store-specific process.",
    shortDescription:
      "iOS and Android apps — React Native, Flutter, or native. Typical MVP 8–12 weeks.",
    description:
      "TheTriFusion is a mobile app development company in Jaipur covering the shared iOS + Android practice: React Native, Flutter, or native when a store needs depth. PlugOne and Connect Dairy are live. Use the iOS or Android service pages when you only need one store; choose cross-platform when both stores ship together.",
    locationLine:
      "Cross-platform apps from Jaipur — iOS, Android, and web admin together.",
    scopeKicker: "Apps",
    scopeHeading: "Apps we build for iOS and Android",
    processHeading: "How we ship iOS and Android together",
    ctaHeading: "Planning iOS and Android in one release?",
    ctaText:
      "Tell us both stores or one first. We write a shared backend plan and an 8–12 week MVP path from Jaipur.",
    serviceType: "Mobile App Development",
    whatsappMessage:
      "Hi TheTriFusion, I want to build a mobile app for: ",
    imageAlt:
      "iOS and Android mobile app development screens by TheTriFusion in Jaipur",
    relatedBlogSlug: "flutter-vs-react-native-2024",
    coverageSections: [],
    relatedLinks: [
      {
        href: "/services/ev-charging-app-development",
        title: "EV charging management software (CMS & app)",
        text: "White-label CMS and driver app for finding a charger, starting a session, and paying, with the OCPP backend behind it.",
      },
    ],
  },
  "ui-ux-design": {
    contentUpdatedAt: "2026-10-12",
    metaTitle: "UI/UX Design Agency in Jaipur | Product Flows & Systems",
    metaDescription:
      "Product UI/UX for Indian websites and apps: user flows, Figma systems, and a handoff engineering can ship. Book a scoped design review.",
    keywords:
      "UI UX design agency Jaipur, product design Jaipur, app UI design Rajasthan, website UX India, Figma design system Jaipur",
    bannerTitle: "UI/UX Design Agency in Jaipur, India",
    bannerDescription:
      "Flows, high-fidelity screens, and a component set developers can ship — not a mood board that dies in a ZIP file.",
    shortDescription:
      "Product UI/UX — flows, design systems, and handoff to build.",
    description:
      "TheTriFusion is a UI/UX design agency in Jaipur for product teams, not poster work. We map user flows, design web and app screens in Figma, and hand a component set to engineering — often the same team that will build. Graphic design is a separate page when you need campaign kits, not product UI.",
    locationLine:
      "Product UI/UX from Jaipur — Figma workshops on video, weekly reviews.",
    scopeKicker: "Design",
    scopeHeading: "Product UI/UX we deliver",
    processHeading: "How a Jaipur design engagement runs",
    ctaHeading: "Need UI that engineering can actually ship?",
    ctaText:
      "Send the product, the users, and any existing Figma. We return a scoped design review from Jaipur.",
    serviceType: "UI/UX Design",
    whatsappMessage:
      "Hi TriFusion, I want a UI/UX design quote from the Jaipur team.",
    imageAlt:
      "UI/UX design mockups for web and mobile products by TheTriFusion Jaipur",
    relatedBlogSlug: "hindi-indic-ui-ux-design-india-2026",
    faqs: [
      {
        question: "Do you only design, or also develop?",
        answer:
          "We design and can build. Many clients keep one team from wireframes to production so the UI does not die in a ZIP file.",
      },
      {
        question: "What do you deliver in a UI/UX project?",
        answer:
          "Flows, high-fidelity screens, and a component set developers can implement. Design systems when the product will keep growing.",
      },
      {
        question: "Is this the same as graphic design?",
        answer:
          "No. This page is product UI for websites and apps. Campaign posters, social kits, and ads live on graphic design.",
      },
      {
        question: "Can design start from Jaipur remotely?",
        answer:
          "Yes. Workshops on video, Figma shared, weekly reviews.",
      },
      {
        question: "Can you redesign an existing app or website?",
        answer:
          "Yes. We audit usability and conversion friction, then redesign the key flows for clarity and results.",
      },
    ],
    coverageSections: [
      {
        id: "ui-ux-design-agency",
        heading: "UI/UX design agency",
        paragraphs: [
          "TheTriFusion is a UI/UX design agency in Jaipur for founders and product teams. We research users, prototype flows, and deliver interfaces for web and mobile that engineering can build — design only, or design through to development with the same team.",
          "Growing products can take a design system: reusable components and guidelines, not a one-off screen set.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/services/ev-charging-app-development",
        title: "EV charging management software (CMS & app)",
        text: "Driver map, session, and operator dashboard flows for charging products.",
      },
    ],
  },
  "graphic-design": {
    contentUpdatedAt: "2026-10-12",
    metaTitle: "Graphic Design Services in Jaipur | Campaign Visuals",
    metaDescription:
      "Campaign kits, social sets, and ad visuals that match your live site — not one-off posters. Request a scoped graphic pack from Jaipur.",
    keywords:
      "graphic design services Jaipur, social media design Jaipur, campaign visuals Rajasthan, brand graphics India, ad creatives Jaipur",
    bannerTitle: "Graphic Design Services in Jaipur, India",
    bannerDescription:
      "Campaign kits and social sets that match the live site we also build — not random one-off posters with no brand system.",
    shortDescription:
      "Social kits, ads and campaign visuals matched to your live site.",
    description:
      "TheTriFusion offers graphic design services in Jaipur for campaigns that have to sit next to a real website or app. We produce social kits, ad creatives, and launch visuals using the same colours and type as your product. Branding (logo and identity) and UI/UX (product screens) are separate pages.",
    locationLine:
      "Campaign graphics from Jaipur — matched to your live site, not a template pack.",
    scopeKicker: "Visuals",
    scopeHeading: "Graphic work we take from Jaipur",
    processHeading: "How a campaign kit is produced",
    ctaHeading: "Need visuals that match your live brand?",
    ctaText:
      "Send references, sizes, and campaign dates. We return a scoped graphic pack from Jaipur.",
    serviceType: "Graphic Design",
    whatsappMessage:
      "Hi TriFusion, I want a graphic design pack quote from the Jaipur team.",
    imageAlt:
      "Graphic design samples for Indian brand campaigns by TheTriFusion Jaipur",
    relatedBlogSlug: "website-development-company-bhilwara",
    faqs: [
      {
        question: "What graphic work do you take?",
        answer:
          "Campaign kits, social sets, and visuals that match a site or app we also build — not random one-off posters with no brand system.",
      },
      {
        question: "Do you also do branding?",
        answer:
          "Yes. Branding is a separate service when you need identity, not only assets.",
      },
      {
        question: "Do you design app screens here?",
        answer:
          "Product screens belong on UI/UX design. This page is campaign and marketing visuals.",
      },
      {
        question: "How do we start a graphic pack?",
        answer:
          "Send references, sizes, and the campaign dates. We return a scoped pack.",
      },
    ],
  },
  "digital-marketing": {
    metaTitle: "Digital Marketing Agency in Jaipur | TheTriFusion",
    metaDescription:
      "Digital marketing agency in Jaipur for Google Ads, Meta Ads, technical SEO, and landing-page CRO. TheTriFusion plans campaigns for Indian brands.",
    keywords:
      "digital marketing agency Jaipur, performance marketing company India, Google Ads agency Jaipur, Meta ads agency India, SEO company Jaipur, PPC management India, B2B lead generation agency, ecommerce performance marketing, conversion rate optimization Jaipur, social media marketing Rajasthan",
    bannerTitle:
      "Digital Marketing & Performance Marketing Agency in Jaipur, India",
    bannerDescription:
      "Data-backed performance marketing, high-ROAS Google & Meta ads, and revenue-focused SEO directly integrated with high-converting custom landing pages.",
    shortDescription:
      "SEO, Google Ads, Meta Ads and landing-page CRO for measurable ROAS.",
    description:
      "TheTriFusion is a leading digital marketing and performance marketing agency in Jaipur. We bridge the gap between creative marketing and engineering: our team crafts laser-targeted Google Search/PMax campaigns, Meta (Facebook & Instagram) ads, technical SEO, and conversion-optimized landing pages that turn expensive traffic into paying customers. Every campaign is tracked against concrete business metrics: CAC, ROAS, and qualified lead volume.",
    locationLine:
      "Performance marketing & SEO engineered from Jaipur — scaling brands across India.",
    scopeKicker: "Performance Growth",
    scopeHeading: "Outcome-Driven Digital Marketing & Ad Channels We Run",
    processHeading: "Our 90-Day Performance Scaling & Optimization Framework",
    ctaHeading: "Ready to Scale Your Revenue with High ROAS Marketing?",
    ctaText:
      "Share your target CAC, monthly ad budget, and core growth objectives. Our Jaipur performance marketing team will deliver a comprehensive 90-day growth roadmap.",
    serviceType: "Digital Marketing & Performance Advertising Services",
    whatsappMessage:
      "Hi TriFusion, I want a digital marketing & performance marketing (SEO/Ads) growth plan from the Jaipur team.",
    imageAlt:
      "Digital marketing and performance advertising campaigns by TheTriFusion Jaipur",
    relatedBlogSlug: "dussehra-ai-max-festive-ads-india-2026",
    faqs: [
      {
        question: "What separates performance marketing from standard digital marketing?",
        answer:
          "Performance marketing is 100% accountable and metrics-driven. Instead of vague impressions, we optimize specifically for Cost Per Lead (CPL), Customer Acquisition Cost (CAC), and Return on Ad Spend (ROAS) across Google Ads and Meta Ads.",
      },
      {
        question: "Do you design and code custom high-converting landing pages?",
        answer:
          "Yes! Unlike traditional agencies that send paid ad traffic to generic homepages, our full-stack engineering team builds ultra-fast, customized React/Next.js landing pages with integrated analytics and heatmaps to maximize conversion rates.",
      },
      {
        question: "How quickly do Google Ads / Meta Ads yield returns compared to SEO?",
        answer:
          "Paid search and social ads generate targeted leads within 24–48 hours of campaign launch. SEO is a compounding engine that delivers sustainable organic domain authority and search dominance over 3 to 6 months.",
      },
      {
        question: "Do you manage both B2B lead generation and B2C / D2C ecommerce marketing?",
        answer:
          "Yes. We specialize in B2B account-targeted lead generation funnels (LinkedIn + Google Search) as well as high-volume D2C ecommerce catalog campaigns (Google Shopping + Meta Dynamic Product Ads).",
      },
      {
        question: "What monthly ad spend budgets do you manage?",
        answer:
          "We manage performance campaigns from testing budgets of ₹25,000 per month for local SMEs up to multi-lakh monthly ad spends for D2C and SaaS brands across India.",
      },
    ],
    coverageSections: [
      {
        id: "digital-marketing-agency-jaipur",
        heading: "Digital marketing agency in Jaipur",
        paragraphs: [
          "TheTriFusion is a digital marketing and performance marketing agency in Jaipur. Campaigns cover Google Search, Performance Max, and Meta ads, plus technical SEO: Core Web Vitals, structured data, content structure, and local Google Business Profile ranking.",
          "A typical engagement includes an SEO audit and on-page plan, ads account setup and tracking, landing-page recommendations, a basic content calendar, weekly or biweekly reporting, and conversion work on the pages the ads send people to.",
        ],
      },
    ],
  },
  branding: {
    contentUpdatedAt: "2026-10-12",
    metaTitle: "Brand Identity Design in Jaipur | Logo, Voice & Site",
    metaDescription:
      "Logo, voice, colour, and type — then a website that uses them. Brand identity for Indian companies, scoped together with the site.",
    keywords:
      "brand identity design Jaipur, branding agency Jaipur, logo design Rajasthan, brand voice India, startup branding Jaipur",
    bannerTitle: "Brand Identity Studio in Jaipur, India",
    bannerDescription:
      "Name, logo, colour, and type — then a website that uses them. Identity is not an orphan PNG sitting next to a mismatched template.",
    shortDescription:
      "Logo, colour, type and guidelines the website can use. From ₹30,000.",
    description:
      "TheTriFusion is a brand identity studio in Jaipur for companies that need a logo and a site that actually uses it. We define voice, mark, colour, and type, then hand rules to web and campaign work. Graphic design covers campaign kits; UI/UX covers product screens.",
    locationLine:
      "Brand identity from Jaipur — logo plus a site that can wear it.",
    scopeKicker: "Identity",
    scopeHeading: "Branding we deliver with the website",
    processHeading: "How a Jaipur branding project starts",
    ctaHeading: "Need identity that a website can actually use?",
    ctaText:
      "Tell us what must stay (name, colours) and what can change. We outline branding plus web from Jaipur.",
    serviceType: "Brand Identity Design",
    whatsappMessage:
      "Hi TriFusion, I want a branding and identity quote from the Jaipur team.",
    imageAlt:
      "Brand identity and logo system designed by TheTriFusion in Jaipur",
    relatedBlogSlug: "d2c-branding-trademark-india-festive-2026",
    faqs: [
      {
        question: "Is branding separate from the website?",
        answer:
          "It can be. Most SMEs want identity plus a site that uses it. We scope both so the logo is not an orphan PNG.",
      },
      {
        question: "What is in a branding package?",
        answer:
          "Name/voice notes, logo, colour/type, and usage rules. Print and motion add cost.",
      },
      {
        question: "Can you rebrand an existing company?",
        answer:
          "Yes, when you have a reason (new market, merger, tired identity). We start with what must stay.",
      },
      {
        question: "Do you also design social posts?",
        answer:
          "Campaign kits live on graphic design. Branding here is identity and rules those kits should follow.",
      },
    ],
  },
  rpa: {
    contentUpdatedAt: "2026-10-12",
    metaTitle: "RPA Automation Services in Jaipur | Process Bots",
    metaDescription:
      "Automate invoice copy, report pulls, and CRM updates with bots plus a human exception path. Send a process list for an RPA estimate.",
    keywords:
      "RPA automation services Jaipur, robotic process automation India, office automation Rajasthan, workflow bots Jaipur, SME RPA",
    bannerTitle: "RPA Automation Services in Jaipur, India",
    bannerDescription:
      "Bots for invoice copy, report pulls, and CRM updates — with a human still owning exceptions. Fuzzy judgement work is a poor fit.",
    shortDescription:
      "Invoice entry, Tally sync and CRM updates with a human exception path. From ₹50,000.",
    description:
      "TheTriFusion offers RPA automation services in Jaipur for Indian SMEs drowning in copy-paste. We record the current process, mark what a bot can own versus what needs a proper API, and leave people on exceptions and customers. Business modernization covers replacing spreadsheets with a full app; RPA is the bot layer on work you are not ready to rewrite.",
    locationLine:
      "Process automation from Jaipur — bots for rules-based office work.",
    scopeKicker: "Automate",
    scopeHeading: "RPA work we take on",
    processHeading: "How we pick what a bot should own",
    ctaHeading: "Have a process list ready to automate?",
    ctaText:
      "Record the current steps. We mark bot vs API vs leave-it-human, then quote from Jaipur.",
    serviceType: "Robotic Process Automation",
    whatsappMessage:
      "Hi TriFusion, I want an RPA automation quote from the Jaipur team.",
    imageAlt:
      "RPA automation workflow diagram delivered by TheTriFusion Jaipur",
    relatedBlogSlug: "uipath-ai-trust-layer-audit-off-rpa-india-2026",
    faqs: [
      {
        question: "What processes fit RPA?",
        answer:
          "Repeatable, rules-based work: invoice copy, report pulls, CRM updates. Fuzzy judgement work is a poor fit.",
      },
      {
        question: "Do you replace staff with bots?",
        answer:
          "We automate the copy-paste. People still own exceptions and customers.",
      },
      {
        question: "When should we build software instead of RPA?",
        answer:
          "When the workflow is the product. See business modernization or custom software. RPA is a layer on processes you are not rewriting yet.",
      },
      {
        question: "How do we start an RPA project?",
        answer:
          "Record the current process. We mark what a bot can own vs what needs a proper API.",
      },
    ],
  },
  "business-modernization": {
    contentUpdatedAt: "2026-11-18",
    metaTitle: "Legacy Software Modernization India | Excel to Web App",
    metaDescription:
      "Replace Excel, WhatsApp workflows and old desktop software with phased web apps, CRM and mobile, without stopping operations. Plans from ₹1,50,000.",
    keywords:
      "business modernization Jaipur, digitize SME operations India, replace Excel with software Rajasthan, digital transformation Jaipur SME",
    bannerTitle: "Business & Legacy Software Modernization in Jaipur, India",
    bannerDescription:
      "One painful workflow off Excel and WhatsApp first — then the next module. Not a 200-user ERP dumped on a 12-person team.",
    shortDescription:
      "Replace spreadsheets with web apps, CRM and mobile — phased roadmaps.",
    description:
      "TheTriFusion runs business modernization from Jaipur for Indian SMEs who have outgrown Excel but are not buying enterprise ERP. We phase: one painful workflow into a web or mobile system, then the next. Custom software is the build; modernization is the roadmap and sequencing. RPA is for bots on processes you will not rewrite yet.",
    locationLine:
      "Ops modernization from Jaipur — phased modules, not a big-bang ERP.",
    scopeKicker: "Modernize",
    scopeHeading: "What modernization means here",
    processHeading: "How we phase spreadsheet replacement",
    ctaHeading: "Outgrown Excel but not ready for ERP?",
    ctaText:
      "Name the worst workflow. We propose a first module and a phased roadmap from Jaipur.",
    serviceType: "Legacy Software & Business Modernization",
    breadcrumbName: "Legacy Software & Business Modernization",
    schemaServiceName: "Legacy Software & Business Modernization",
    whyHeading: "Why SMEs choose TheTriFusion to modernise",
    primaryCtaLabel: "Plan my move off Excel",
    primaryCtaHref: "/contact?service=business-modernization",
    whatsappMessage:
      "Hi TheTriFusion, we want to replace Excel/old software for: ",
    leadProjectType: "Business modernization",
    formHeading: "Which sheet or tool should go first?",
    midCtaText:
      "Tell us the one spreadsheet everyone is afraid to break. We will suggest the first phase.",
    imageAlt:
      "Business modernization — replacing spreadsheets with custom software by TheTriFusion",
    relatedBlogSlug: "gst-1-nov-inverted-duty-modernize-india-2026",
    // FAQs replaced by servicePlan (replaceFaqs).
    faqs: [],
  },
  salesforce: {
    contentUpdatedAt: "2026-11-18",
    metaTitle: "Salesforce Developers in Jaipur | Flows, Apex & Integrations",
    metaDescription:
      "Salesforce Flows, Apex/LWC, data migration and website or ERP integrations for orgs you already use. Independent Jaipur team. Work from ₹80,000.",
    keywords:
      "Salesforce developers Jaipur, Salesforce Flows Apex India, Salesforce developer Rajasthan, Salesforce integration Jaipur, Salesforce customization India",
    bannerTitle: "Salesforce Developers in Jaipur | Flows, Apex & Integrations",
    bannerDescription:
      "Objects, Flows, and website integrations on the org you already have — configuration first, custom code when standard is not enough.",
    shortDescription:
      "Salesforce Flows, Apex and integrations on an org you already pay for. From ₹80,000.",
    description:
      "TheTriFusion customizes Salesforce from Jaipur for Indian sales teams: objects, Flows, and lead-form integrations into the org you already pay for. Configuration first; custom Apex when Flows are not enough. When commissions, MLM trees, or ops modules will never fit Salesforce cleanly, we say so and point to custom CRM/ERP or MLM software.",
    locationLine:
      "Salesforce work from Jaipur — on your existing org, not a forced new CRM.",
    scopeKicker: "Salesforce",
    scopeHeading: "Salesforce services",
    processHeading: "How we start on an existing org",
    ctaHeading: "Have a Salesforce org that needs real flows?",
    ctaText:
      "Share the org type and the broken process. We return a configuration-vs-custom plan from Jaipur.",
    serviceType: "Salesforce Customisation & Development",
    whatsappMessage: "Hi TheTriFusion, we need Salesforce help with: ",
    imageAlt:
      "Salesforce customization and CRM flows implemented by TheTriFusion Jaipur",
    relatedBlogSlug: "salesforce-hunter-piper-agents-sme-india-2026",
  },
  "ai-development": {
    contentUpdatedAt: "2026-11-18",
    metaTitle: "AI Chatbot & AI Agent Development in India | WhatsApp, RAG",
    metaDescription:
      "WhatsApp AI chatbots, document search (RAG), invoice/PDF extraction and AI agents with human review. 2–4 week pilot first. Plans from ₹2,00,000.",
    keywords:
      "AI development company Jaipur, AI software India, ChatGPT integration Jaipur, document AI Rajasthan, practical AI for SMEs",
    bannerTitle: "AI Chatbot & AI Agent Development in India | WhatsApp, RAG",
    bannerDescription:
      "Assistants, retrieval, and document ops inside your web or mobile product — with a human review step. We do not train foundation models.",
    shortDescription:
      "WhatsApp bots, RAG search and AI agents with a human review step.",
    description:
      "TheTriFusion is an AI development company in Jaipur that applies existing models to your workflow: WhatsApp chatbots, RAG search, invoice/PDF extraction, and agents with a human review step. We ship AI as a feature of iOS, Android, or web — not a disconnected chatbot demo.",
    locationLine:
      "Practical AI from Jaipur — features inside products, not model-training labs.",
    scopeKicker: "AI",
    scopeHeading: "AI features we add to real products",
    processHeading: "How an AI pilot works (2–4 weeks)",
    ctaHeading: "Have a workflow AI could actually help?",
    ctaText:
      "Describe the data, the human fallback, and the product it must live in. We propose a scoped pilot from Jaipur.",
    serviceType: "AI Chatbot & AI Agent Development",
    whatsappMessage: "Hi TheTriFusion, I want an AI chatbot/agent for: ",
    imageAlt:
      "AI software development for Indian businesses by TheTriFusion in Jaipur",
    relatedBlogSlug: "meity-ai-consultation-custom-ai-india-2026",
  },
  devops: devopsPageContent,
  "on-demand": {
    contentUpdatedAt: "2026-10-12",
    metaTitle: "Hire Dedicated Developers in India | React, Node, Mobile",
    metaDescription:
      "Named React, Node, and mobile developers from Jaipur — hours against a written scope, not anonymous bench filling. Request an availability slot.",
    keywords:
      "hire developers Jaipur, on demand developers India, React Node developers Rajasthan, staff augmentation Jaipur, flexible development team",
    bannerTitle: "On-Demand Developers in Jaipur, India",
    bannerDescription:
      "Hours against a named scope — React, Node, mobile — with a lead and demos. Not anonymous bench filling or a one-day drive-by PR.",
    shortDescription:
      "Named React, Node and mobile developers — flexible hours with a lead.",
    description:
      "TheTriFusion provides on-demand developers from Jaipur for Indian product teams that need extra React, Node, or mobile hours without a full project handover. You get a named lead, demos, and a written minimum engagement. If you need a scoped product from discovery to launch, use custom software or website development instead.",
    locationLine:
      "Named developers from Jaipur — hours against a written scope.",
    scopeKicker: "Staff",
    scopeHeading: "On-demand skills we staff",
    processHeading: "How an on-demand slot is set up",
    ctaHeading: "Need extra React or mobile hours this month?",
    ctaText:
      "Tell us the stack and hours. We confirm a named lead and a minimum engagement from Jaipur.",
    serviceType: "On-Demand Software Development",
    whatsappMessage:
      "Hi TriFusion, I want on-demand developer availability from the Jaipur team.",
    imageAlt:
      "On-demand software developers in Jaipur from TheTriFusion",
    relatedBlogSlug: "tcs-ai-hiring-on-demand-developers-india-2026",
    faqs: [
      {
        question: "Is this staffing or a project?",
        answer:
          "Hours against a named scope. Not anonymous bench filling. You still get demos and a lead.",
      },
      {
        question: "Which skills can we hire on demand?",
        answer:
          "React, Next.js, Node, and mobile. We will say no if the stack is not ours.",
      },
      {
        question: "What is the minimum engagement?",
        answer:
          "Written in the quote. We avoid one-day drive-bys that leave you with half a PR.",
      },
      {
        question: "When should I buy a full project instead?",
        answer:
          "When you need discovery, UX, and launch owned by us. See software or website development. On-demand is extra hands on work you already own.",
      },
    ],
  },

  "mlm-crm-development": {
    contentUpdatedAt: "2026-11-18",
    metaTitle: "MLM Software Company in Jaipur | Binary, Unilevel, Matrix",
    metaDescription:
      "Custom MLM software for binary, unilevel, matrix and hybrid plans: genealogy, e-wallet, KYC, payouts and distributor apps. Plans from ₹3,50,000.",
    keywords:
      "MLM CRM development Jaipur, unilevel compensation software India, network marketing CRM Rajasthan, genealogy MLM software, MLM app development Jaipur",
    locationLine:
      "MLM software from Jaipur — compensation engines, not a generic CRM plugin.",
    scopeKicker: "MLM",
    scopeHeading: "MLM software modules",
    processHeading: "How an MLM software project runs",
    ctaHeading: "Have a written compensation plan ready?",
    ctaText:
      "Share the plan document and whether field apps are in phase one. We return a scoped estimate from Jaipur.",
    serviceType: "MLM Software Development",
    whatsappMessage:
      "Hi TheTriFusion, I need MLM software. Plan type (binary/unilevel/matrix): ",
  },
  "fintech-app-development": {
    contentUpdatedAt: "2026-11-18",
    metaTitle: "BBPS, AEPS & DMT Software Development India | From ₹99,999",
    metaDescription:
      "White-label BBPS, AEPS, DMT, recharge and UPI software: retailer app, distributor panel and admin. From ₹99,999. You bring the API partner, we build.",
    keywords:
      "BBPS software company India, AEPS software development Jaipur, DMT software India, XDMT software, fintech app development company Jaipur, retailer banking software, Aadhaar enabled payment system software, Bharat bill payment system software, domestic money transfer software, white label BBPS AEPS DMT, UPI KYC banking software Jaipur, CSP retailer app development",
    bannerTitle: "Fintech App Development: BBPS, AEPS & DMT Software",
    bannerDescription:
      "White-label BBPS, AEPS, DMT and XDMT software: retailer app, distributor panel, and admin — plus UPI and KYC. You bring bank/NPCI live access; we build the product.",
    shortDescription:
      "BBPS, AEPS, DMT and XDMT software — retailer, distributor and admin apps.",
    description:
      "TheTriFusion builds custom fintech software from Jaipur: BBPS bill-pay, AEPS Aadhaar banking, DMT, XDMT, UPI, KYC, and retailer–distributor panels. We build the product you operate — white-label or custom — on iOS, Android, and web.",
    locationLine:
      "BBPS, AEPS, DMT & XDMT software from Jaipur — sold as retailer, distributor, and admin products for Indian operators.",
    scopeKicker: "Modules",
    scopeHeading: "Fintech software we build",
    processHeading: "How we deliver retailer banking software",
    ctaHeading: "Need BBPS, AEPS, DMT or XDMT software?",
    ctaText:
      "Share whether you need white-label retailer apps or a custom stack, and which live APIs you already have (BBPS, AEPS, DMT, bank). The Jaipur team returns a scoped estimate.",
    serviceType: "Fintech App Development (BBPS, AEPS, DMT)",
    breadcrumbName: "Fintech App Development (BBPS, AEPS, DMT)",
    schemaServiceName: "Fintech App Development (BBPS, AEPS, DMT)",
    whyHeading: "Why operators choose TheTriFusion for fintech software",
    primaryCtaLabel: "Get a fintech software demo",
    primaryCtaHref: "/contact?service=fintech-app-development",
    whatsappMessage:
      "Hi TheTriFusion, I want BBPS/AEPS/DMT software. API partner: ",
    leadProjectType: "Fintech (BBPS/AEPS/DMT)",
    formHeading: "Get a BBPS/AEPS software demo",
    midCtaText:
      "Already have an API partner? Send their name on WhatsApp and get a go-live plan.",
    imageAlt:
      "BBPS AEPS DMT XDMT fintech software and banking apps built in Jaipur by TheTriFusion",
    // FAQs replaced by servicePlan (replaceFaqs).
    faqs: [],
  },
  "ev-charging-app-development": evChargingPageContent,
  "ios-app-development": {
    metaTitle: "iOS App Development Company in Jaipur | App Store Ready",
    metaDescription:
      "TheTriFusion in Jaipur ships iOS apps — Swift or React Native, App Store review, and TestFlight. Typical MVP 8–12 weeks. Get a scoped quote.",
    keywords:
      "iOS app development company Jaipur, ios app development company rajasthan, Swift app development India, App Store app Jaipur, hire iOS developers Rajasthan, TestFlight app development",
    locationLine:
      "App Store apps from Jaipur — certificates, TestFlight, and review notes.",
    scopeKicker: "iOS",
    scopeHeading: "iOS work we ship to the App Store",
    processHeading: "How we get an iPhone app through review",
    ctaHeading: "Need an App Store–ready iPhone app?",
    ctaText:
      "Say Swift or React Native, and whether Android follows. Paid ads use /ios-app-development; this page is the organic iOS capability write-up.",
    serviceType: "iOS App Development",
    whatsappMessage:
      "Hi TriFusion, I want an iOS / App Store app quote from the Jaipur team.",
  },
  "android-app-development": {
    metaTitle: "Android App Development Company in Jaipur | Kotlin Apps",
    metaDescription:
      "Kotlin or React Native Android apps with Play Console setup, signing and store listing. Focused MVP from ₹2,50,000 in 8–12 weeks. Jaipur team.",
    keywords:
      "Android app development company Jaipur, android app development company in jaipur, android app development services jaipur, android application development in jaipur, Kotlin app development India, Play Store app Jaipur, hire Android developers Rajasthan",
    bannerTitle: "Android App Development Company in Jaipur",
    locationLine:
      "Play Store apps from Jaipur — signing, listing, and crash monitoring.",
    scopeKicker: "Android",
    scopeHeading: "Android apps we build",
    processHeading: "How an Android project runs",
    ctaHeading: "Need a Play Store–ready Android app?",
    ctaText:
      "Say Kotlin or React Native, and whether iOS follows. We return a scoped estimate and an 8–12 week MVP path from Jaipur.",
    serviceType: "Android App Development",
    whatsappMessage:
      "Hi TheTriFusion, I need an Android app for: ",
    coverageSections: [],
  },
  "crm-erp-development": {
    contentUpdatedAt: "2026-11-18",
    metaTitle: "Custom CRM Software Development Company in Jaipur, India",
    metaDescription:
      "Custom CRM for Indian SMEs: leads, pipelines, quotations, WhatsApp notes and IndiaMART lead capture. You own the code. CRM module MVP from ₹3,00,000.",
    keywords:
      "custom CRM development Jaipur, sales pipeline software Rajasthan, CRM development India, WhatsApp CRM Jaipur, custom CRM vs Zoho",
    bannerTitle: "Custom CRM Software Development Company in Jaipur, India",
    locationLine:
      "Custom CRM from Jaipur — pipelines your sales team will actually use.",
    scopeKicker: "CRM",
    scopeHeading: "CRM modules we build",
    processHeading: "How a CRM project runs",
    ctaHeading: "Need CRM that is not a bolted-on SaaS?",
    ctaText:
      "If HubSpot fits, buy it. If commissions or stages do not, share the workflow. We return a module MVP range from Jaipur. Full ERP is covered on ERP software development.",
    serviceType: "Custom CRM Software Development",
    whatsappMessage:
      "Hi TheTriFusion, we need a custom CRM. Team size:  Current tool: ",
    coverageSections: [
      {
        id: "crm-operations",
        heading: "Custom CRM software development",
        paragraphs: [
          "Unify leads, pipelines, quotations, and follow-ups with CRM software built for how the sales team actually works. TheTriFusion does this from Jaipur for teams across India. A single CRM module MVP is often 6–12 weeks.",
          "For network-marketing companies, unilevel compensation is built into MLM software rather than bolted onto a generic sales tool. Warehouse, GST finance, manufacturing and multi-branch ERP modules live on ERP software development. DailyConcepts India and Connect Dairy remain live proof that admin workflows are the product.",
        ],
      },
    ],
  },
  "erp-software-development": {
    contentUpdatedAt: "2026-11-03",
    metaTitle: "ERP Software Development Company in Jaipur | TheTriFusion",
    metaDescription:
      "Custom ERP for Indian SMEs — GST finance, inventory, procurement, manufacturing, HR and multi-branch. Phased from Jaipur. From ₹6,00,000.",
    keywords:
      "ERP software development company Jaipur, custom ERP software India, GST inventory ERP Rajasthan, manufacturing ERP Jaipur, custom ERP vs Tally SAP Odoo",
    locationLine:
      "Custom ERP from Jaipur — stock, books and branches your team will run.",
    scopeKicker: "ERP",
    scopeHeading: "ERP modules we build from Jaipur",
    processHeading: "How we implement ERP in phases",
    ctaHeading: "Need ERP that is not another spreadsheet?",
    ctaText:
      "If Tally or Odoo already fits, buy that. If warehouses, BOMs or multi-branch rules do not, share the process. We return a phased ERP range from Jaipur.",
    serviceType: "ERP Software Development",
    whatsappMessage:
      "Hi TriFusion, I want a custom ERP software quote from the Jaipur team.",
    coverageSections: [
      {
        id: "erp-operations",
        heading: "ERP software development in Jaipur",
        paragraphs: [
          "Custom ERP software from TheTriFusion in Jaipur covers finance with GST, inventory and warehouse, procurement, manufacturing and production planning, sales and distribution, HR/payroll, multi-branch control, and reporting. Programmes are phased so the floor keeps running. Multi-module work typically starts from ₹6,00,000.",
          "Sales pipelines and lead CRM are a separate product on custom CRM development. We cross-link both pages so buyers land on the right brief. Live ops references include Connect Dairy and DailyConcepts India.",
        ],
      },
    ],
  },
};

// 29 Sep 2026 ranking upgrade: merge page-specific overrides on top.
for (const [slug, extra] of Object.entries(serviceRankingContent)) {
  servicePageSeo[slug] = { ...(servicePageSeo[slug] || {}), ...extra };
}

// 12 Oct 2026 competitive SEO plan: title/H1/meta/answerFirst from the plan;
// extraSections stay unioned by id. FAQs/relatedLinks replace when the plan
// sets replaceFaqs / replaceRelatedLinks (indexed-pages cleanup).
for (const [slug, extra] of Object.entries(servicePlanContent)) {
  const current = servicePageSeo[slug] || {};
  const extraSections = extra.extraSections
    ? [
        ...extra.extraSections,
        ...(current.extraSections || []).filter(
          (section) => !extra.extraSections.some((item) => item.id === section.id)
        ),
      ]
    : current.extraSections;
  const faqs =
    extra.replaceFaqs && Array.isArray(extra.faqs)
      ? extra.faqs
      : extra.faqs
        ? [
            ...extra.faqs,
            ...(current.faqs || []).filter(
              (faq) =>
                !extra.faqs.some(
                  (item) =>
                    item.question.toLowerCase() === faq.question.toLowerCase()
                )
            ),
          ]
        : current.faqs;
  const relatedLinks =
    extra.replaceRelatedLinks && Array.isArray(extra.relatedLinks)
      ? extra.relatedLinks
      : extra.relatedLinks
        ? [
            ...extra.relatedLinks,
            ...(current.relatedLinks || []).filter(
              (link) =>
                !extra.relatedLinks.some((item) => item.href === link.href)
            ),
          ]
        : current.relatedLinks;
  servicePageSeo[slug] = {
    ...current,
    ...extra,
    extraSections,
    faqs,
    relatedLinks,
  };
}

// 17 Oct 2026 India ranking: titles/H1, city clusters, areaServed India.
// When the service plan already set replaceRelatedLinks, keep that list as-is.
for (const [slug, extra] of Object.entries(serviceIndiaOnpage)) {
  const current = servicePageSeo[slug] || {};
  const extraSections = extra.extraSections
    ? [
        ...extra.extraSections,
        ...(current.extraSections || []).filter(
          (section) => !extra.extraSections.some((item) => item.id === section.id)
        ),
      ]
    : current.extraSections;
  const relatedLinks = current.replaceRelatedLinks
    ? current.relatedLinks
    : extra.relatedLinks
      ? [
          ...extra.relatedLinks,
          ...(current.relatedLinks || []).filter(
            (link) => !extra.relatedLinks.some((item) => item.href === link.href)
          ),
        ]
      : current.relatedLinks;
  servicePageSeo[slug] = {
    ...current,
    ...extra,
    extraSections,
    relatedLinks,
    ...(current.replaceRelatedLinks ? { replaceRelatedLinks: true } : {}),
    ...(current.replaceFaqs ? { replaceFaqs: true } : {}),
  };
}

/** Drop retired /blog links from live service chrome (blogs are 410 Gone). */
function isLiveRelatedLink(link) {
  if (!link || typeof link.href !== "string") return false;
  return !link.href.startsWith("/blog");
}

for (const slug of Object.keys(servicePageSeo)) {
  const current = servicePageSeo[slug];
  if (!Array.isArray(current.relatedLinks)) continue;
  servicePageSeo[slug] = {
    ...current,
    relatedLinks: current.relatedLinks.filter(isLiveRelatedLink),
  };
}
