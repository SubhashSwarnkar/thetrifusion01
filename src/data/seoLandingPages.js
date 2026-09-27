import { siteConfig } from "config/site";
import { enrichLandingPage } from "./seoLandingEnrichment";
import { cityServiceAreaPages } from "./cityServiceAreaPages";
import { REDIRECTED_SOLUTION_SLUGS } from "lib/solutionRedirects";

export const seoLandingPages = [
  {
    slug: "best-software-company-india",
    title:
      "How to Choose a Software Company in India | TheTriFusion",
    h1: "How to Choose a Software Company in India",
    navLabel: "Software company in India",
    metaDescription:
      "A buyer guide to software companies in India: portfolio, process, ownership, and support. See how TheTriFusion in Jaipur scopes work for startups and SMEs.",
    primaryKeyword: "best software company in India",
    secondaryKeywords: [
      "software agency India",
      "top software development company India",
      "IT company India",
      "software house India",
      "hire software company India",
    ],
    intro:
      "Looking for the best software company in India? TheTriFusion delivers end-to-end digital products — custom software, web platforms, mobile apps, ecommerce stores, and growth-focused digital marketing — with transparent pricing and a delivery-first team based in Jaipur, Rajasthan.",
    sections: [
      {
        title: "Why businesses choose TheTriFusion",
        body: "We combine product thinking, modern engineering, and clear communication. From discovery to launch and ongoing support, our software agency model is built for Indian and global clients who want reliable delivery without agency fluff.",
      },
      {
        title: "Full-stack digital capabilities",
        body: "As a software development company in India, we cover custom software, website development, mobile apps, UI/UX design, CRM/ERP builds, MSP-style managed support, and digital marketing — so you do not need five vendors for one roadmap.",
      },
      {
        title: "Built for startups and growing brands",
        body: "Whether you need an MVP, an online store, or enterprise workflows, we scope features around business outcomes: faster sales, better operations, and measurable online growth.",
      },
    ],
    faqs: [
      {
        question: "Is TheTriFusion among the best software companies in India for startups?",
        answer:
          "Yes. We specialize in budget-friendly, high-quality builds for startups and SMEs — websites, apps, ecommerce, and custom software — with clear milestones and dedicated project managers.",
      },
      {
        question: "Where is your software agency located?",
        answer:
          `Our office is at ${siteConfig.addressLine}. Phone ${siteConfig.phone}. Hours: ${siteConfig.hoursLabel}. We work with clients across India and internationally through remote collaboration.`,
      },
      {
        question: "What makes you different from other IT companies in India?",
        answer:
          "Transparent pricing tools, AI project estimates, hands-on design-to-code delivery, and a single team for product, engineering, and digital marketing.",
      },
    ],
    relatedServiceSlugs: [
      "software-development",
      "website-development",
      "mobile-app-development",
      "digital-marketing",
    ],
    cta: "Talk to India’s delivery-focused software team",
  },
  {
    slug: "ecommerce-website-development",
    title:
      "Ecommerce Website Development in India | TheTriFusion",
    h1: "Ecommerce Website Development Company in India — Shopify, WooCommerce & Custom Stores",
    navLabel: "Ecommerce website development",
    metaDescription:
      "Shopify, WooCommerce & custom ecommerce website development from Jaipur, India — D2C stores, B2B portals & multi-vendor marketplaces. Packages from ₹25,000.",
    primaryKeyword: "ecommerce website development company",
    secondaryKeywords: [
      "ecommerce website development company in India",
      "ecommerce website development company in Jaipur",
      "ecommerce website development cost in India",
      "Shopify development company India",
      "WooCommerce development company",
      "custom ecommerce website development",
      "B2B ecommerce website development",
      "multi vendor marketplace development",
      "online store development",
      "ecommerce development services",
    ],
    intro:
      "Ecommerce website development is the work of planning, designing, building and launching an online store: product catalog, cart, checkout, payments, shipping and an admin panel to run orders. TheTriFusion (Trifusion Infotech Pvt. Ltd.) is a software development company in Jaipur, India that builds Shopify, WooCommerce and custom ecommerce websites, B2B ordering portals and multi-vendor marketplaces for businesses in India and abroad.",
    keyFacts: [
      { label: "Company", value: `TheTriFusion — Trifusion Infotech Pvt. Ltd., ${siteConfig.addressLine}` },
      { label: "Platforms", value: "Shopify, WooCommerce, and custom builds (Next.js, React, Node.js)" },
      { label: "Store types", value: "Single-vendor D2C stores, B2B / wholesale portals, multi-vendor marketplaces" },
      { label: "Packages", value: "Single vendor ₹25,000 · Multi-vendor ₹35,000 (web + Android + iOS)" },
      { label: "Custom builds", value: "Quoted after discovery; a typical ecommerce MVP takes 4–10 weeks" },
      { label: "Clients", value: "Businesses across India and international clients, working remotely" },
      { label: "Contact", value: `${siteConfig.phone} · ${siteConfig.email}` },
    ],
    sections: [
      {
        title: "What does an ecommerce website development company do?",
        body: "An ecommerce website development company turns your products and business rules into a working online store. At TheTriFusion that means choosing the right platform, designing the storefront, building catalog, cart and checkout, connecting payment gateways and courier partners, setting up the admin for orders and inventory, and launching with technical SEO in place.",
        bullets: [
          "Storefront design for mobile and desktop shoppers",
          "Product catalog with categories, variants (size, colour) and search",
          "Cart, checkout, coupons and customer accounts",
          "Payment gateway and shipping integrations",
          "Admin panel for orders, inventory, customers and reports",
          "Technical SEO: clean URLs, sitemaps and structured data",
        ],
      },
      {
        title: "How much does ecommerce website development cost in India?",
        body: "On this site, our packaged single-vendor ecommerce build starts at ₹25,000 and a multi-vendor marketplace package starts at ₹35,000, both including web plus Android and iOS apps. Custom work — B2B pricing tiers, multi-warehouse inventory or ERP integration — is quoted per module after discovery. Catalog size, integrations and design depth drive the final number.",
        table: {
          caption: "Ecommerce pricing published by TheTriFusion",
          columns: ["Option", "Price", "What it covers"],
          rows: [
            ["Single-vendor package", "₹25,000", "Your own D2C or retail store: website plus Android and iOS apps, catalog, cart, checkout, admin. Website live in 48 hours after a locked brief, or 50% refund."],
            ["Multi-vendor package", "₹35,000", "Marketplace for many sellers with vendor dashboards, plus the same web, Android and iOS apps for shoppers. Same 48-hour website guarantee."],
            ["Custom / B2B / ERP build", "Quoted after discovery", "Bespoke checkout, tiered B2B pricing, multi-warehouse stock, POS or ERP sync — scoped per module."],
          ],
        },
        links: [
          { href: "/ecommerce-development", label: "See full package details and the 48-hour guarantee terms" },
          { href: "/blog/ecommerce-website-development-cost-india", label: "Read: ecommerce website development cost in India" },
        ],
      },
      {
        title: "Shopify vs WooCommerce vs custom ecommerce: which should you choose?",
        body: "Choose Shopify when you want a hosted store live fast with a standard catalog and checkout. Choose WooCommerce when you already use WordPress or want content-heavy pages and full hosting control. Choose a custom build when you need B2B pricing, a marketplace, POS or ERP sync, or a checkout the platforms cannot handle.",
        table: {
          caption: "Shopify vs WooCommerce vs custom ecommerce development",
          columns: ["", "Shopify", "WooCommerce", "Custom (Next.js / Node.js)"],
          rows: [
            ["What it is", "Hosted ecommerce platform (SaaS)", "Free ecommerce plugin for WordPress, self-hosted", "Store built from code for your business rules"],
            ["Best for", "Standard D2C catalogs that need to launch quickly", "Content-led stores and WordPress sites", "B2B portals, marketplaces, POS/ERP sync, unique checkout"],
            ["Running costs", "Monthly platform plan plus paid apps", "Hosting, premium plugins and updates", "Hosting and maintenance; no platform subscription"],
            ["Flexibility", "Limited to themes, apps and plan features", "High, through plugins and custom code", "Highest — you control data, logic and UX"],
            ["What we do", "Theme setup and customisation, apps, payments, launch", "Theme and plugin development, performance, integrations", "Full design and build, integrations, admin, apps"],
          ],
        },
        links: [
          { href: "/blog/custom-website-vs-shopify-vs-woocommerce", label: "Read: custom website vs Shopify vs WooCommerce" },
        ],
      },
      {
        title: "Do you build B2B ecommerce and multi-vendor marketplace websites?",
        body: "Yes. For B2B and wholesale buyers we build ordering portals with customer-specific or tiered pricing, bulk and minimum-order rules and GST-ready invoices. For marketplaces we build multi-vendor platforms with separate vendor dashboards, commission splits, vendor payouts and admin moderation, so you can run many sellers from one store.",
        bullets: [
          "B2B: tiered / customer-group pricing, bulk ordering, credit and quote workflows",
          "Marketplace: vendor onboarding, vendor dashboards, commissions and payout reports",
          "Admin moderation for products, orders and vendors",
          "Web plus Android and iOS apps for shoppers",
        ],
      },
      {
        title: "Which ecommerce features and integrations do you build?",
        body: "We build the features that decide whether a store actually sells and is easy to run: fast catalog browsing, search and filters, a short checkout with local and international payments, courier integration with tracking, stock control, and an admin that your team can use daily without calling a developer.",
        bullets: [
          "Payments: Razorpay, Cashfree, PayU, CCAvenue, Stripe, UPI",
          "Shipping: Shiprocket, Delhivery and other courier APIs with tracking",
          "Inventory and offline POS sync (see our DailyConcepts India project)",
          "Coupons, wishlists, reviews and abandoned-cart recovery",
          "WhatsApp and email order updates",
          "GA4 analytics, product structured data and XML sitemaps",
        ],
      },
      {
        title: "How long does it take to build an ecommerce website?",
        body: "Our single-vendor and multi-vendor packages put the website live within 48 hours after you share a locked brief and the required assets. A custom ecommerce MVP typically takes 4–10 weeks when requirements and product content are ready. Marketplaces and heavy integrations take longer and are delivered in phases.",
      },
      {
        title: "Do you build ecommerce websites for clients outside India?",
        body: "Yes. TheTriFusion is based in Jaipur and works remotely with businesses across India and in other countries. We build English storefronts, connect international gateways such as Stripe, and run projects over email, video calls and WhatsApp with written scope and milestone demos, so location does not slow the build down.",
      },
    ],
    deliverables: [
      "Platform recommendation (Shopify, WooCommerce or custom)",
      "Mobile-first storefront design",
      "Catalog, variants, search and filters",
      "Cart, checkout, payments and coupons",
      "Shipping and courier integration",
      "Admin panel for orders, stock and customers",
      "Technical SEO, sitemap and structured data",
      "Launch support and handover",
    ],
    processSteps: [
      { title: "Discovery", description: "We understand your products, customers, pricing rules and the channels you sell on today." },
      { title: "Platform and scope", description: "We recommend Shopify, WooCommerce or custom and write down scope, timeline and cost." },
      { title: "Design", description: "Storefront, product page and checkout designs, mobile first." },
      { title: "Build and integrations", description: "Catalog, checkout, payments, shipping, admin and any POS/ERP connections." },
      { title: "QA and content", description: "Test orders, payment and shipping flows; product data upload and SEO checks." },
      { title: "Launch and support", description: "Go live, monitor orders, then iterate with optional ongoing support." },
    ],
    costFactors: [
      "Number of products, variants and categories",
      "Platform: Shopify, WooCommerce or custom",
      "Payment, shipping, POS or ERP integrations",
      "B2B pricing rules or multi-vendor features",
      "Custom design depth",
      "Store migration and SEO redirects",
      "Android and iOS apps",
    ],
    costNote:
      "Package prices are published on our ecommerce packages page; custom builds are quoted after discovery.",
    headings: {
      deliverables: "What you get with an ecommerce build",
      audiences: "Who we build ecommerce websites for",
      process: "Our ecommerce development process",
      timeline: "Ecommerce website timeline",
      cost: "What affects ecommerce website cost",
      faqs: "Ecommerce website development FAQs",
      relatedLinks: "Ecommerce packages and guides",
    },
    showCompanyBlock: true,
    schema: {
      serviceType: "Ecommerce website development",
      areaServed: [
        { "@type": "City", name: "Jaipur" },
        { "@type": "Country", name: "India" },
        { "@type": "Place", name: "Worldwide" },
      ],
      offers: [
        { title: "Shopify store development", description: "Shopify theme setup and customisation, apps, payments and launch." },
        { title: "WooCommerce development", description: "WooCommerce theme and plugin development, performance and integrations." },
        { title: "Custom ecommerce development", description: "Custom Next.js / Node.js ecommerce websites with admin and integrations." },
        { title: "B2B ecommerce portal development", description: "Wholesale ordering portals with tiered pricing and bulk orders." },
        { title: "Multi-vendor marketplace development", description: "Marketplaces with vendor dashboards, commissions and payouts." },
      ],
      pricedOffers: [
        { name: "Single-vendor ecommerce package (web + Android + iOS)", description: "Website live in 48 hours after locked brief, or 50% refund.", price: 25000, url: "/ecommerce-development#single-vendor" },
        { name: "Multi-vendor marketplace package (web + Android + iOS)", description: "Website live in 48 hours after locked brief, or 50% refund.", price: 35000, url: "/ecommerce-development#multi-vendor" },
      ],
    },
    faqs: [
      {
        question: "What is the best platform for an ecommerce website?",
        answer:
          "There is no single best platform. Shopify suits standard catalogs that need to launch quickly on a hosted plan. WooCommerce suits WordPress users and content-led stores. A custom build suits B2B pricing, marketplaces, POS or ERP sync. We recommend one after understanding your products, budget and growth plans.",
      },
      {
        question: "How much does an ecommerce website cost in India?",
        answer:
          "Our packaged single-vendor ecommerce build starts at ₹25,000 and the multi-vendor marketplace package at ₹35,000, both with web, Android and iOS apps. Custom builds with B2B pricing, multi-warehouse stock or ERP integration are quoted per module after discovery, because scope varies widely between businesses.",
      },
      {
        question: "How long does it take to develop an ecommerce website?",
        answer:
          "Package websites go live within 48 hours after we receive a locked brief and the required assets (logo, product list, brand notes, payment details). A custom ecommerce MVP typically takes 4–10 weeks. Marketplaces and complex integrations are phased into a first launch and follow-up releases.",
      },
      {
        question: "Do you build on Shopify and WooCommerce, or only custom?",
        answer:
          "Both. We set up and customise Shopify stores and build WooCommerce themes and plugins for quick catalog launches. For D2C brands that need bespoke checkout, custom ledgers or POS sync, we build headless or custom stores with Next.js, React and Node.js.",
      },
      {
        question: "Can you build a multi-vendor marketplace like Amazon or Flipkart?",
        answer:
          "We build multi-vendor marketplace platforms with independent vendor portals, commission splits, vendor payout reports, product moderation and an admin console. Our multi-vendor package starts at ₹35,000; larger marketplace features are scoped and delivered in phases after the first launch.",
      },
      {
        question: "Do you build B2B or wholesale ecommerce portals?",
        answer:
          "Yes. B2B portals can include customer-group or tiered pricing, bulk and minimum-order quantities, quote requests, GST-ready invoices and ERP or inventory sync. Because these rules differ for every distributor or manufacturer, B2B builds are quoted after a discovery call.",
      },
      {
        question: "Can you integrate our online store with offline POS systems and ERPs?",
        answer:
          "Yes. We have built synchronised ecommerce and POS systems, as in our live client project DailyConcepts India (dailyconceptsindia.com). Stock, barcodes, orders and customer profiles can sync between offline stores and the online storefront so inventory stays accurate.",
      },
      {
        question: "Which payment gateways and shipping partners do you integrate?",
        answer:
          "Common integrations include Razorpay, Cashfree, PayU, CCAvenue, Stripe and UPI for payments, and Shiprocket, Delhivery and other courier APIs for shipping with live tracking. The right mix depends on your market, order volume and where your customers are.",
      },
      {
        question: "Do you work with ecommerce clients outside India?",
        answer:
          "Yes. We are based in Jaipur, India and work remotely with clients in India and other countries. Projects run on written scope, milestone demos, email, video calls and WhatsApp. International payments can be handled through gateways such as Stripe.",
      },
      {
        question: "How do you help an ecommerce store rank on Google?",
        answer:
          "We build technical SEO into the store: server-rendered pages, canonical tags, clean category and product URLs, Product structured data, XML sitemaps, mobile-friendly layouts and fast loading. Ongoing SEO content and ads are available through our digital marketing team.",
      },
      {
        question: "Where is TheTriFusion located and how can I contact you?",
        answer:
          `TheTriFusion is the brand of Trifusion Infotech Pvt. Ltd. Office: ${siteConfig.addressLine}. Hours: ${siteConfig.hoursLabel}. Call or WhatsApp ${siteConfig.phone} or email ${siteConfig.email} to discuss your ecommerce website.`,
      },
    ],
    relatedServiceSlugs: [
      "website-development",
      "mobile-app-development",
      "digital-marketing",
      "ui-ux-design",
    ],
    relatedLinks: [
      {
        href: "/ecommerce-development",
        label:
          "Ecommerce packages: single vendor ₹25,000 · multi-vendor ₹35,000 — website live in 48 hours or 50% refund",
      },
      {
        href: "/blog/ecommerce-website-development-cost-india",
        label: "Ecommerce website development cost in India",
      },
      {
        href: "/blog/ecommerce-app-development-cost-india",
        label: "Ecommerce app development cost in India (web + Android + iOS)",
      },
      {
        href: "/blog/how-to-build-ecommerce-website-india-2026",
        label: "How to build an ecommerce website in India (2026 guide)",
      },
      {
        href: "/blog/ecommerce-website-development-mumbai-vs-jaipur",
        label: "Ecommerce website development: Mumbai vs Jaipur agencies",
      },
      {
        href: "/portfolio/dailyconcepts-ecommerce-pos",
        label: "Case study: DailyConcepts India ecommerce + POS",
      },
    ],
    cta: "Planning an ecommerce website? Get a clear scope and quote",
  },
  {
    slug: "online-store-development",
    title:
      "Online Store Development in India | TheTriFusion",
    h1: "Online Store & Digital Storefront Development Company",
    metaDescription:
      "Online store development in India for D2C catalogs, multi-vendor shops, and inventory. TheTriFusion builds the storefront from Jaipur.",
    primaryKeyword: "online store development",
    secondaryKeywords: [
      "create online store India",
      "online shop development company",
      "build an online store Jaipur",
      "custom digital storefront development",
      "online retail website developers",
      "D2C web store creation",
      "ecommerce catalog development",
    ],
    intro:
      "Turn product catalogs into revenue engines. TheTriFusion builds feature-rich online stores designed for high conversion, lightning-fast mobile shopping, and effortless daily order management.",
    sections: [
      {
        title: "From Product Concept to High-Converting Storefront",
        body: "We map catalog architecture, customer checkout funnels, and automated logistics. We deliver responsive, beautifully branded online shops equipped with live inventory controls, customer wishlists, and multi-currency support.",
      },
      {
        title: "Growth & Retention Features Built-In",
        body: "Boost Average Order Value (AOV) and customer lifetime value with automated WhatsApp order updates, abandoned cart retargeting, smart upsell recommendations, customer review loops, and loyalty reward points.",
      },
      {
        title: "Omnichannel Scale with Digital Marketing",
        body: "Pair your online store with high-ROAS Performance Marketing (Google Shopping Ads, Meta Catalog Ads, TikTok/Instagram Shop) and targeted e-commerce SEO to scale traffic and orders profitably.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to launch an online store?",
        answer:
          "Standard online store MVPs launch within 3 to 6 weeks. Custom multi-vendor marketplaces or stores requiring complex ERP/POS integration typically take 8 to 12 weeks with phased milestones.",
      },
      {
        question: "Will the store be optimized for mobile phone shoppers?",
        answer:
          "Yes! Over 80% of Indian online shoppers purchase via smartphone. We design mobile-first interfaces with thumb-friendly navigation, sticky 'Buy Now' buttons, and instant UPI checkout.",
      },
      {
        question: "Can you build a multi-vendor marketplace like Amazon or Flipkart?",
        answer:
          "Yes. We build complete multi-vendor architectures with independent vendor portals, automated commission splits, vendor payout ledgers, rating systems, and admin moderation consoles.",
      },
    ],
    relatedServiceSlugs: [
      "website-development",
      "mobile-app-development",
      "digital-marketing",
      "branding",
    ],
    cta: "Launch your custom online store today",
  },
  {
    slug: "digital-marketing-agency",
    title:
      "Digital Marketing Agency in India | TheTriFusion",
    h1: "Digital Marketing & Performance Marketing Agency in India",
    navLabel: "Digital marketing & performance ads",
    metaDescription:
      "Digital marketing agency in Jaipur and India for Google Ads, Meta Ads, technical SEO, and lead funnels. TheTriFusion scopes the plan before spend.",
    primaryKeyword: "digital marketing agency",
    secondaryKeywords: [
      "digital marketing company India",
      "performance marketing agency Jaipur",
      "performance marketing agency India",
      "Google Ads management company Jaipur",
      "Facebook Instagram ads agency India",
      "SEO services company Jaipur",
      "PPC management services India",
      "lead generation agency for SMEs",
      "ecommerce performance marketing India",
      "conversion rate optimization agency",
    ],
    intro:
      "Stop burning marketing budgets on vanity metrics. TheTriFusion is a data-driven digital marketing and performance marketing agency in Jaipur delivering measurable revenue growth, high-converting lead funnels, and optimized Customer Acquisition Cost (CAC) for startups, D2C brands, and B2B enterprises.",
    sections: [
      {
        title: "Performance Marketing: High ROAS Paid Ads (Google & Meta)",
        body: "Laser-targeted Google Search, Performance Max, Display, and Shopping campaigns combined with high-converting Meta (Facebook & Instagram) ads. We build bespoke landing pages with tracking pixels, server-side CAPI events, and automated A/B tests to maximize return on ad spend (ROAS).",
      },
      {
        title: "Technical & Commercial Search Engine Optimization (SEO)",
        body: "Dominate search rankings for high-intent commercial keywords. Our technical SEO covers Core Web Vitals, Schema.org rich snippets, structured content siloing, local Google Business Profile (GBP) ranking, and authoritative link architecture.",
      },
      {
        title: "Conversion Rate Optimization (CRO) & Retention Funnels",
        body: "Traffic is only half the battle. We optimize checkout flows, lead capture funnels, WhatsApp automated re-engagement, and email marketing workflows to turn ad clicks into high-paying long-term customers.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between general digital marketing and performance marketing?",
        answer:
          "General digital marketing often focuses on broad awareness, social presence, and organic brand building. Performance marketing is strictly outcome-driven: every rupee spent is tracked against specific measurable KPIs like Cost Per Lead (CPL), Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and sales conversions.",
      },
      {
        question: "How quickly can we see results from PPC ads vs SEO campaigns?",
        answer:
          "Paid search and social campaigns (Google Ads, Meta Ads) start driving qualified traffic and leads within 24 to 48 hours of launch. Organic SEO is a compounding growth channel that typically builds significant keyword dominance within 3 to 6 months.",
      },
      {
        question: "Do you build custom landing pages for ad campaigns?",
        answer:
          "Yes! Because we are a full-stack software development company, our digital marketing team builds ultra-fast, customized landing pages optimized for maximum conversion rather than sending expensive paid traffic to slow, generic templates.",
      },
      {
        question: "What monthly ad spend budgets do you manage?",
        answer:
          "We manage performance campaigns ranging from testing budgets of ₹25,000/month for local SMEs up to multi-lakh monthly ad spends for high-growth D2C and SaaS brands across India.",
      },
    ],
    relatedServiceSlugs: [
      "digital-marketing",
      "branding",
      "website-development",
      "graphic-design",
    ],
    cta: "Scale your revenue with TheTriFusion performance marketing",
  },
  {
    slug: "custom-software-development-company",
    title: "Custom Software Development Company India | TheTriFusion",
    h1: "Custom Software Development Company",
    metaDescription:
      "Hire TheTriFusion for custom software development in India. We build CRM, ERP modules, portals, APIs, and business apps tailored to your workflows.",
    primaryKeyword: "custom software development company",
    secondaryKeywords: [
      "custom software development India",
      "bespoke software development",
      "enterprise software development",
      "business software company",
      "hire software developers India",
    ],
    intro:
      "Off-the-shelf tools falling short? TheTriFusion is a custom software development company that designs and engineers software around your exact processes — from internal tools to customer-facing platforms.",
    sections: [
      {
        title: "Software shaped to your operations",
        body: "We analyze workflows, roles, and integrations, then deliver modular software with clean architecture, secure APIs, and admin controls.",
      },
      {
        title: "From MVP to enterprise scale",
        body: "Start with a focused MVP, validate with users, then scale features, performance, and integrations as your business grows.",
      },
      {
        title: "Modern stack, maintainable delivery",
        body: "Web, mobile, cloud, AI-assisted features, and DevOps practices keep your custom software reliable after launch.",
      },
    ],
    faqs: [
      {
        question: "What types of custom software do you build?",
        answer:
          "Business portals, CRM/ERP modules, booking systems, inventory tools, dashboards, SaaS products, and industry-specific applications.",
      },
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes. Maintenance, feature upgrades, monitoring, and managed support packages are available.",
      },
      {
        question: "Can you work with our existing systems?",
        answer:
          "Yes. We integrate with CRMs, ERPs, payment providers, and third-party APIs as required.",
      },
    ],
    relatedServiceSlugs: [
      "software-development",
      "ai-development",
      "mlm-crm-development",
      "fintech-app-development",
    ],
    cta: "Start your custom software project",
  },
  {
    slug: "msp-managed-it-services",
    title: "MSP Managed IT Services in India | TheTriFusion",
    h1: "MSP & Managed IT Services",
    metaDescription:
      "Managed IT services from TheTriFusion: website and app maintenance, monitoring, security updates, and backups for growing businesses.",
    primaryKeyword: "MSP managed IT services",
    secondaryKeywords: [
      "managed service provider India",
      "managed IT support",
      "website maintenance company",
      "IT support outsourcing India",
      "application managed services",
    ],
    intro:
      "Keep your digital products stable after launch. TheTriFusion offers MSP-style managed IT services — monitoring, updates, backups, security patches, and responsive support — so your team can focus on the business.",
    sections: [
      {
        title: "Proactive maintenance, not just break-fix",
        body: "We monitor uptime, apply dependency updates, patch vulnerabilities, and resolve issues before they become downtime for your customers.",
      },
      {
        title: "Application and infrastructure support",
        body: "From websites and ecommerce stores to custom apps and cloud deployments, our managed services cover the stack you actually run.",
      },
      {
        title: "Clear SLAs and communication",
        body: "Defined response windows, status updates, and monthly summaries keep stakeholders informed without technical jargon overload.",
      },
    ],
    faqs: [
      {
        question: "What does MSP mean for a software company like TheTriFusion?",
        answer:
          "We act as your managed service partner for applications and IT operations — maintenance, support, monitoring, and continuous improvement after go-live.",
      },
      {
        question: "Can you maintain software built by another vendor?",
        answer:
          "Often yes, after a short audit of codebase, hosting, and documentation. We then propose a managed support plan.",
      },
      {
        question: "Is managed support available for ecommerce and mobile apps?",
        answer:
          "Yes. Online stores, websites, APIs, and mobile apps can all be covered under managed service packages.",
      },
    ],
    relatedServiceSlugs: [
      "devops",
      "software-development",
      "website-development",
      "on-demand",
    ],
    cta: "Get managed IT support",
  },
  {
    slug: "mobile-app-development-company",
    title: "Mobile App Development Company India | iOS & Android Apps",
    h1: "Mobile App Development Company",
    navLabel: "Mobile app development",
    metaDescription:
      "TheTriFusion is a mobile app development company in India building iOS, Android, and cross-platform apps for startups, ecommerce, and enterprise workflows.",
    primaryKeyword: "mobile app development company",
    secondaryKeywords: [
      "mobile app development India",
      "Android app development company",
      "iOS app developers India",
      "Flutter app development",
      "React Native company India",
    ],
    intro:
      "Turn your product idea into a polished mobile experience. As a mobile app development company, TheTriFusion designs and ships Android, iOS, and cross-platform apps with scalable backends.",
    sections: [
      {
        title: "Consumer and business apps",
        body: "Ecommerce apps, booking apps, delivery flows, internal workforce tools, and customer portals — engineered for performance and usability.",
      },
      {
        title: "Cross-platform speed without compromise",
        body: "Flutter and React Native options help you launch on Android and iOS efficiently while keeping native-quality UX where it matters.",
      },
      {
        title: "App store readiness and iteration",
        body: "We support listing assets, release pipelines, analytics, and post-launch feature cycles so your app keeps improving.",
      },
    ],
    faqs: [
      {
        question: "Do you build both Android and iOS apps?",
        answer:
          "Yes. We deliver native or cross-platform apps depending on budget, timeline, and feature needs.",
      },
      {
        question: "Can you build an ecommerce mobile app?",
        answer:
          "Yes. Product browsing, cart, payments, orders, and notifications are common ecommerce app deliverables.",
      },
      {
        question: "Will I own the source code?",
        answer:
          "Yes. Project agreements transfer agreed deliverables and source ownership to you upon completion and payment.",
      },
    ],
    relatedServiceSlugs: [
      "mobile-app-development",
      "ios-app-development",
      "android-app-development",
      "ev-charging-app-development",
    ],
    cta: "Build your mobile app",
  },
  {
    slug: "web-development-company-india",
    title: "Web Development Company in India | TheTriFusion",
    h1: "Web Development Company in India",
    metaDescription:
      "Hire TheTriFusion — a web development company in India for corporate sites, web apps, landing pages, CMS, and high-performance marketing websites.",
    primaryKeyword: "web development company in India",
    secondaryKeywords: [
      "website development company India",
      "custom web development",
      "web application development India",
      "responsive website company",
      "Next.js web development India",
    ],
    intro:
      "Your website is often the first sales rep prospects meet. TheTriFusion is a Jaipur-based web development company serving clients across India — fast, accessible, SEO-ready websites and web applications, delivered remotely from Rajasthan.",
    sections: [
      {
        title: "Marketing websites that convert",
        body: "Clear messaging, strong CTAs, and performance-focused builds help turn visitors into leads for software, services, and ecommerce brands.",
      },
      {
        title: "Web apps for real workflows",
        body: "Dashboards, portals, booking systems, and SaaS frontends with secure authentication and API integrations.",
      },
      {
        title: "SEO-friendly architecture from day one",
        body: "Clean URLs, metadata, structured data, and Core Web Vitals-conscious implementation so your pages are crawlable and competitive.",
      },
    ],
    faqs: [
      {
        question: "Do you build SEO-optimized websites?",
        answer:
          "Yes. Technical SEO foundations, metadata, sitemaps, and content structure are part of our web development process.",
      },
      {
        question: "Can you redesign an old website?",
        answer:
          "Yes. We modernize design, performance, and conversion paths while protecting important URLs with redirects.",
      },
      {
        question: "Which technologies do you use?",
        answer:
          "We commonly use modern stacks such as React/Next.js and related backend services, chosen to match your product requirements.",
      },
    ],
    relatedServiceSlugs: [
      "website-development",
      "ui-ux-design",
      "digital-marketing",
      "software-development",
    ],
    cta: "Hire our web development team",
  },
  {
    slug: "ui-ux-design-agency",
    title: "UI UX Design Agency India | Product Design That Converts",
    h1: "UI/UX Design Agency",
    metaDescription:
      "UI/UX design agency in India for product interfaces, websites, and design systems. TheTriFusion designs flows that engineering can build.",
    primaryKeyword: "UI UX design agency",
    secondaryKeywords: [
      "UI UX design company India",
      "product design agency",
      "website UI design",
      "mobile app UX design",
      "design system agency",
    ],
    intro:
      "Great products feel effortless. Our UI/UX design agency partners with founders and product teams to research users, prototype flows, and deliver polished interfaces for web and mobile.",
    sections: [
      {
        title: "Research-led product design",
        body: "User journeys, wireframes, and interactive prototypes reduce build risk before engineering starts.",
      },
      {
        title: "Visual systems that scale",
        body: "Consistent components, typography, and brand-aligned UI kits keep your product coherent as features grow.",
      },
      {
        title: "Design handoff that developers love",
        body: "Clear specs and collaboration with our engineering team mean designs ship accurately — not approximately.",
      },
    ],
    faqs: [
      {
        question: "Do you design only, or also develop?",
        answer:
          "Both. You can engage us for UI/UX design alone or as a full design-to-development partner.",
      },
      {
        question: "Can you redesign an existing app or website?",
        answer:
          "Yes. We audit usability and conversion friction, then redesign key flows for clarity and results.",
      },
      {
        question: "Do you create design systems?",
        answer:
          "Yes. For growing products we deliver reusable component libraries and guidelines.",
      },
    ],
    relatedServiceSlugs: [
      "ui-ux-design",
      "graphic-design",
      "branding",
      "website-development",
    ],
    cta: "Improve your product experience",
  },
  {
    slug: "crm-erp-software-development",
    title: "CRM & ERP Development Company | TheTriFusion",
    h1: "CRM & ERP Software Development for Indian Operations Teams",
    metaDescription:
      "Custom CRM and ERP software development by TheTriFusion. Automate sales, inventory, finance workflows, and operations with tailored enterprise software.",
    primaryKeyword: "CRM ERP software development",
    secondaryKeywords: [
      "custom CRM development",
      "ERP software development India",
      "enterprise software company",
      "business management software",
      "salesforce customization",
    ],
    intro:
      "Unify sales, inventory, finance, and operations with CRM and ERP software built for how your company actually works. TheTriFusion develops and customizes business systems that replace spreadsheet chaos — from Jaipur, for teams across India.",
    sections: [
      {
        title: "CRM that matches your sales process",
        body: "Lead pipelines, follow-ups, quotations, customer history, and reporting — customized for your team’s stages and KPIs. For network-marketing companies we also build unilevel compensation into the CRM rather than bolting it onto a generic sales tool.",
      },
      {
        title: "ERP modules for operations control",
        body: "Inventory, procurement, billing, HR-lite workflows, and dashboards that give leadership real-time visibility. Connect Dairy (connectdairy.in) is a live ops example: fleets, roles, and P&L — not a stock ERP screenshot.",
      },
      {
        title: "Ecommerce + POS admin, when retail is the workflow",
        body: "DailyConcepts India (dailyconceptsindia.com) needed storefront plus a POS-style admin. That is still CRM/ops software — just sitting next to checkout. We map admin workflows as carefully as customer flows.",
      },
      {
        title: "Integrations and Salesforce options",
        body: "Connect payment gateways, ecommerce stores, accounting tools, or extend Salesforce when a platform-first approach fits better. If Salesforce cannot hold your commissions tree, we say so and point you to custom CRM.",
      },
    ],
    faqs: [
      {
        question: "Do you have live CRM/ops examples?",
        answer:
          "Yes. DailyConcepts India (ecommerce + POS admin) at dailyconceptsindia.com and Connect Dairy at connectdairy.in. MLM CRM delivery stays confidential unless the client agrees to a public credit.",
      },
      {
        question: "Should I buy SaaS CRM/ERP or build custom?",
        answer:
          "If your workflows are unique or tools feel limiting, custom or heavily customized systems often pay off. We help you decide during discovery.",
      },
      {
        question: "Can you integrate CRM with my website or ecommerce store?",
        answer:
          "Yes. Lead forms, orders, and customer data can sync into your CRM for a single customer view.",
      },
      {
        question: "Do you offer Salesforce-related services?",
        answer:
          "Yes. Salesforce customization and related enterprise workflows are part of our service lineup.",
      },
    ],
    relatedServiceSlugs: [
      "crm-erp-development",
      "mlm-crm-development",
      "software-development",
      "salesforce",
    ],
    cta: "Modernize your CRM or ERP",
  },
  {
    slug: "website-development-company-bhilwara",
    title:
      "Website Development in Bhilwara | TheTriFusion",
    h1: "Website Development for Bhilwara — From Our Jaipur Office",
    navLabel: "Bhilwara websites (from Jaipur office)",
    metaDescription:
      "Website development for Bhilwara businesses from TheTriFusion in Jaipur. Remote delivery for textile, retail, and local firms. No Bhilwara office.",
    primaryKeyword: "website development company in Bhilwara",
    outcomeLine:
      "Website development for Bhilwara is the design and build of a business site — catalogue, lead form, or store — for mills, traders, and local firms that sell suiting, yarn, or retail goods. TheTriFusion does this from its Jaipur office by video and WhatsApp, with no Bhilwara storefront.",
    secondaryKeywords: [
      "web development Bhilwara from Jaipur",
      "website designer for Bhilwara businesses",
      "ecommerce website Bhilwara",
      "software company serving Bhilwara",
      "IT services Bhilwara Rajasthan",
    ],
    intro:
      "TheTriFusion (Trifusion Infotech Private Limited) is based in Jaipur and serves Bhilwara businesses remotely — websites, ecommerce stores, and mobile apps for textile, retail, education, and growing brands. We are a service-area partner, not a Bhilwara storefront.",
    sections: [
      {
        title: "Jaipur office, Bhilwara clients",
        body: `Our office is at ${siteConfig.addressLine}. Phone ${siteConfig.phone}. Hours: ${siteConfig.hoursLabel}. Bhilwara projects run on video calls, WhatsApp, and weekly demos. Hindi/English communication, GST invoicing, and UPI/Razorpay checkouts are standard. We can travel for kickoff when the project needs it.`,
      },
      {
        title: "What we build for Bhilwara businesses",
        body: "Company websites, catalogue and wholesale portals, ecommerce for retail brands, school/college sites, booking systems, and custom software. We also handle on-page SEO, Google Business guidance, and lead forms that notify you on WhatsApp.",
      },
      {
        title: "How a project typically runs",
        body: "Discovery (video or in person) → written scope and estimate → design approval → development with weekly demos → QA → launch on your domain. Most marketing websites ship in 3–8 weeks depending on pages and integrations.",
      },
    ],
    faqs: [
      {
        question: "Do you have an office in Bhilwara?",
        answer:
          `No. Our office is at ${siteConfig.addressLine}. Phone ${siteConfig.phone}. Hours: ${siteConfig.hoursLabel}. We serve Bhilwara as a service area — remote delivery with optional travel for discovery or launch.`,
      },
      {
        question: "Can Bhilwara clients still work with you?",
        answer:
          "Yes. Most of our Rajasthan work is remote: shared boards, weekly demos, and WhatsApp. That is how we work with Bhilwara, Kota, Udaipur, and Jodhpur teams.",
      },
      {
        question: "Do you do local SEO for Bhilwara searches?",
        answer:
          "Yes. We can set up on-page SEO, sitemap, and Google Business guidance for a Bhilwara business. Rankings still depend on reviews, content, and competition.",
      },
    ],
    relatedServiceSlugs: [
      "website-development",
      "software-development",
      "digital-marketing",
      "ui-ux-design",
    ],
    cta: "Get a free scoped estimate for a Bhilwara project",
  },
  ...cityServiceAreaPages,
  {
    slug: "software-company-rajasthan",
    title: "Software Company in Rajasthan | TheTriFusion",
    h1: "Software Company in Rajasthan",
    navLabel: "Software company in Rajasthan",
    metaDescription:
      "Software company in Rajasthan for websites, custom software, and mobile apps. TheTriFusion is based in Jaipur and serves clients across India.",
    primaryKeyword: "software company in Rajasthan",
    outcomeLine:
      "A software company in Rajasthan builds websites, custom software, and mobile apps for SMEs and startups that need a Jaipur team in the same time zone. TheTriFusion is that company: Trifusion Infotech Private Limited, based in Jaipur, working with clients in Udaipur, Kota, Jodhpur, and across India by remote demos.",
    secondaryKeywords: [
      "IT company Rajasthan",
      "web development company Rajasthan",
      "software development Jaipur Udaipur Bhilwara",
      "app development Rajasthan",
      "digital agency Rajasthan",
    ],
    intro:
      "TheTriFusion is a software company in Rajasthan helping SMEs and startups ship websites, apps, and internal tools without metro-city agency overhead. We work from Jaipur with clients across Udaipur, Kota, Jodhpur, and remote teams nationwide.",
    sections: [
      {
        title: "Rajasthan-first, India-ready delivery",
        body: "Founders here often need practical scope, clear Hindi/English communication, and costs that match SME budgets. We write milestones, share demos, and keep source code ownership with you.",
      },
      {
        title: "Services across the state",
        body: "Custom software, company websites, ecommerce, Android/iOS apps, UI/UX, CRM/ERP-style tools, and digital marketing. If you already have a site, we can rebuild, speed it up, or add SEO and lead capture.",
      },
      {
        title: "When to choose a Rajasthan software partner",
        body: "Choose a local partner when you want overlapping time zones, easier payments in INR, and the option to visit. Choose us when you also want modern Next.js/React stacks and documented handoff — not just a static brochure site.",
      },
    ],
    faqs: [
      {
        question: "Where in Rajasthan is TheTriFusion located?",
        answer:
          `Our office is at ${siteConfig.addressLine}. Phone ${siteConfig.phone}. Hours: ${siteConfig.hoursLabel}. We serve Udaipur, Kota, Jodhpur, and clients across India through remote collaboration.`,
      },
      {
        question: "Can you work with a Jaipur or Udaipur client remotely?",
        answer:
          "Yes. Most projects run on video calls, shared task boards, and weekly demos. We can travel for kickoff or launch when the project needs it.",
      },
      {
        question: "What stack do you use?",
        answer:
          "Typical public sites use Next.js and React. Apps, ecommerce, and custom software are scoped to the product — we recommend the stack during discovery, not before we understand the problem.",
      },
    ],
    relatedServiceSlugs: [
      "software-development",
      "website-development",
      "mobile-app-development",
      "digital-marketing",
    ],
    cta: "Start a Rajasthan software project",
  },
  {
    slug: "web-development-company-jaipur",
    title: "Web Development Company for Jaipur Businesses | TheTriFusion",
    h1: "Web Development for Jaipur Businesses",
    navLabel: "Web development — Jaipur office",
    metaDescription:
      "Web development for Jaipur businesses covers websites, ecommerce stores, and apps. TheTriFusion delivers from its Jaipur office with a written scope.",
    primaryKeyword: "web development company Jaipur",
    outcomeLine:
      "Web development for Jaipur businesses is the design and build of a marketing site, ecommerce store, or web app that the company can update after launch. It is for local service firms, retailers, and teams that want a Jaipur software partner, TheTriFusion, with written scope and weekly demos.",
    secondaryKeywords: [
      "website development Jaipur",
      "software company Jaipur Rajasthan",
      "ecommerce website Jaipur",
      "app development Jaipur",
      "hire web developers Jaipur",
    ],
    intro:
      "Jaipur companies looking for a web development partner often need faster communication than an anonymous freelancer and clearer pricing than a large metro agency. TheTriFusion delivers websites, ecommerce, and apps from Rajasthan with structured discovery and weekly demos.",
    sections: [
      {
        title: "A Rajasthan team that can work with Jaipur clients",
        body: "We are based in Jaipur — close enough for kickoff visits, far enough that overhead stays practical. Projects run on video, WhatsApp, and shared boards so Jaipur stakeholders stay in the loop without waiting on email chains.",
      },
      {
        title: "What Jaipur businesses typically ask us to build",
        body: "Service-business websites (tourism, education, healthcare, real estate), D2C ecommerce, booking/lead funnels, and internal tools. We pair design with SEO basics: titles, sitemap, mobile speed, and Google Business alignment.",
      },
      {
        title: "Process before you sign",
        body: "Share your goal and references. We return a scope outline, timeline range, and estimate. You approve design before heavy development. Launch includes domain, analytics, and a short handover so your team can update content.",
      },
    ],
    faqs: [
      {
        question: "Are you physically in Jaipur?",
        answer:
          `Our office is at ${siteConfig.addressLine}. Phone ${siteConfig.phone}. Hours: ${siteConfig.hoursLabel}. We regularly work with Jaipur clients remotely or in person, and can meet for discovery or launch when needed.`,
      },
      {
        question: "How fast can a Jaipur business website launch?",
        answer:
          "A focused marketing website is often 3–8 weeks. Ecommerce or custom features take longer. Use our estimate tool or book a call for a range based on pages and integrations.",
      },
      {
        question: "Do you handle hosting and Google ranking?",
        answer:
          "We can deploy, connect the domain, set up Analytics/Search Console, and implement on-page SEO. Rankings still depend on content, reviews, and competition — we will be honest about that in discovery.",
      },
    ],
    relatedServiceSlugs: [
      "website-development",
      "digital-marketing",
      "mobile-app-development",
      "ui-ux-design",
    ],
    cta: "Plan a Jaipur web project",
  },
  {
    slug: "software-development-company-jaipur",
    title:
      "Software Development Company in Jaipur | TheTriFusion",
    h1: "Software Development Company in Jaipur",
    navLabel: "Software company Jaipur",
    metaDescription:
      "Software development company in Jaipur for custom software, websites, and Android/iOS apps. TheTriFusion writes the scope before it builds.",
    primaryKeyword: "software development company in Jaipur",
    outcomeLine:
      "A software development company in Jaipur designs and builds custom software, websites, and Android or iOS apps for SMEs that have outgrown spreadsheets. TheTriFusion, Trifusion Infotech Private Limited, does this work from Jaipur for teams across Rajasthan and India, with a written estimate before build.",
    secondaryKeywords: [
      "software company Jaipur",
      "IT company Jaipur",
      "custom software development Jaipur",
      "software development company Rajasthan",
      "hire software developers Jaipur",
      "Jaipur software agency",
    ],
    intro:
      "TheTriFusion (Trifusion Infotech Private Limited) is a Jaipur-based software development company helping SMEs across Rajasthan and India. We build custom websites, mobile apps, ecommerce (including fixed 48-hour live packages), UI/UX, and AI features — with WhatsApp-first updates and written estimates.",
    sections: [
      {
        title: "What we build from Jaipur",
        body: "Custom software and business websites, Android and iOS apps, ecommerce storefronts, WhatsApp/AI assistants, and specialized products when scoped (fintech, EV charging, CRM). You get milestones, demos, and a support path after launch — not a one-off zip file.",
      },
      {
        title: "Ecommerce and lead engines",
        body: "Need a store fast? Our ecommerce packages start at ₹25,000 (single vendor) / ₹35,000 (multi-vendor) with website live in 48 hours after a locked brief — or 50% refund. For custom software roadmaps, we scope features around leads, ops, and measurable outcomes.",
      },
      {
        title: "Why Jaipur SMEs hire us",
        body: "Local timezone, Hindi + English communication, GST invoicing, and remote delivery for Bhilwara, Udaipur, Kota, and Ajmer. Open our portfolio URLs before you pay an advance.",
      },
    ],
    faqs: [
      {
        question: "Is TheTriFusion a software development company in Jaipur?",
        answer:
          `Yes. Our office is at ${siteConfig.addressLine}. Phone ${siteConfig.phone}. Hours: ${siteConfig.hoursLabel}. We serve clients across India through video calls and WhatsApp.`,
      },
      {
        question: "What should I prepare for a quote?",
        answer:
          "Goal, users, must-have integrations (UPI, WhatsApp, CRM), budget band, and deadline. Send that via Discuss Project or WhatsApp for a free scoped estimate — usually within 24 hours.",
      },
      {
        question: "Do you only build ecommerce?",
        answer:
          "No. Ecommerce is one offer line. We also build custom software, AI features, and mobile apps.",
      },
      {
        question: "Can I see live work?",
        answer:
          "Yes — browse the Portfolio section for live stores and products you can open in the browser.",
      },
    ],
    relatedServiceSlugs: [
      "software-development",
      "website-development",
      "mobile-app-development",
      "ai-development",
      "digital-marketing",
    ],
    cta: "Get a scoped estimate from our Jaipur software team",
  },
  {
    slug: "android-app-development-company-jaipur",
    title:
      "Android App Development in Jaipur | TheTriFusion",
    h1: "Android App Development Company in Jaipur",
    navLabel: "Android app company Jaipur",
    metaDescription:
      "Android app development company in Jaipur. TheTriFusion builds Kotlin and React Native apps, with Play Store listing and Hindi plus English support.",
    primaryKeyword: "android app development company in jaipur",
    outcomeLine:
      "An Android app development company in Jaipur builds Play Store apps for businesses that need a phone product, not only a website. TheTriFusion writes Kotlin or React Native apps for SMEs in Jaipur and across India, including listing support, after a scoped estimate.",
    secondaryKeywords: [
      "android app development company jaipur",
      "android app development services jaipur",
      "android application development in jaipur",
      "hire Android developers Jaipur",
      "Play Store app development Rajasthan",
    ],
    intro:
      "TheTriFusion is an Android app development company in Jaipur helping SMEs ship Play Store–ready products. We scope Kotlin or React Native, build MVPs in typical 8–12 week ranges, and stay on for listing support — not a throwaway APK.",
    sections: [
      {
        title: "What you get from our Jaipur Android team",
        body: "Discovery, UI for mobile, native or cross-platform build, API integration, Play Console signing, and a crash-free release checklist. Ecommerce and fintech apps are common; we also ship EV and field-ops apps.",
      },
      {
        title: "Android + iOS without two agencies",
        body: "Need both stores? Start on Android, then share logic via React Native/Flutter, or pair with our iOS page. See Mobile App Development for the combined path.",
      },
      {
        title: "How to brief us in 10 minutes",
        body: "Users, must-have screens, offline needs, payments (UPI), and whether iOS follows. WhatsApp or Discuss Project — free scoped estimate, usually within 24 hours.",
      },
    ],
    faqs: [
      {
        question: "Do you build native Kotlin Android apps?",
        answer:
          "Yes — Kotlin native or React Native/Flutter when iOS parity matters. We recommend per product.",
      },
      {
        question: "Is TheTriFusion based in Jaipur?",
        answer:
          "Yes. Trifusion Infotech Private Limited, Jaipur. We serve clients across Rajasthan and India remotely.",
      },
      {
        question: "Can you publish to Play Store?",
        answer:
          "Yes — we support listing, signing, and store assets. You own the Play Console account.",
      },
    ],
    relatedServiceSlugs: [
      "android-app-development",
      "mobile-app-development",
      "ios-app-development",
      "ui-ux-design",
    ],
    cta: "Get a scoped Android app estimate from Jaipur",
  },
];

export const getSeoLandingBySlug = (slug) => {
  const page = seoLandingPages.find((item) => item.slug === slug);
  return enrichLandingPage(page);
};

export const getAllSeoLandingSlugs = () =>
  seoLandingPages.map((page) => page.slug);

export const getSolutionsForService = (serviceSlug) =>
  seoLandingPages
    .filter(
      (page) =>
        page.relatedServiceSlugs.includes(serviceSlug) &&
        !REDIRECTED_SOLUTION_SLUGS.has(page.slug)
    )
    .map(enrichLandingPage);

export const featuredSolutionSlugs = [
  "software-company-rajasthan",
  "ecommerce-website-development",
  "software-development-company-jaipur",
  "website-development-company-bhilwara",
  "website-development-company-udaipur",
  "website-development-company-kota",
  "website-development-company-ajmer",
];

export const getFeaturedSolutions = () =>
  featuredSolutionSlugs
    .map((slug) => getSeoLandingBySlug(slug))
    .filter(Boolean);
