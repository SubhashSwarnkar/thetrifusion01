/**
 * Generators for /llms.txt and /llms-full.txt.
 * Blog inventory always comes from content/blog via getPublishedMarkdownPosts()
 * (same source as sitemap-blog.xml). Page/service/solution URLs come from
 * buildSitemapParts() so retired / 410 paths cannot reappear.
 */
import {
  getPublishedMarkdownPosts,
  normalizeServiceKey,
} from "lib/blogMarkdown";
import { buildSitemapParts, childSitemapLocs } from "lib/sitemaps";
import { services } from "data/servicesData";
import { servicePageSeo } from "data/servicePageSeo";
import { servicePlanContent } from "data/servicePlan/index";
import { fintechProductPages } from "data/fintechProductPages";
import { seoLandingPages, getSeoLandingBySlug } from "data/seoLandingPages";
import { Portfolios, isIndexablePortfolio } from "json/landingPageData";
import { pages } from "lib/seoConfig";

const APEX = "https://thetrifusion.in";

function apex(path = "/") {
  if (!path || path === "/") return `${APEX}/`;
  const clean = String(path).startsWith("/") ? path : `/${path}`;
  return `${APEX}${clean}`;
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function newestBlogDate(posts) {
  if (!posts.length) return todayIso();
  return posts[0].updatedAt || posts[0].date || todayIso();
}

function blogLines(posts) {
  return posts.map(
    (post) =>
      `- ${apex(`/blog/${post.slug}`)} — ${post.title}: ${post.description}`
  );
}

function plainAnswer(text) {
  return String(text || "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function postMatchesServiceKey(post, serviceSlug) {
  const target = normalizeServiceKey(serviceSlug);
  if (!target || !post) return false;
  const keys = [
    post.targetService,
    ...(post.secondaryServiceKeys || []),
  ].filter(Boolean);
  if (keys.includes(target)) return true;
  if (target === "fintech-app-development") {
    return keys.some((key) =>
      String(key).startsWith("fintech-app-development/")
    );
  }
  return false;
}

function guidesForService(posts, serviceSlug, label = "Guides") {
  const matched = posts.filter((post) =>
    postMatchesServiceKey(post, serviceSlug)
  );
  if (!matched.length) return [];
  return [
    `- ${label}:`,
    ...matched.map(
      (post) => `  - ${apex(`/blog/${post.slug}`)} — ${post.title}`
    ),
  ];
}

function shortAnswerForSlug(slug) {
  const plan = servicePlanContent[slug] || servicePageSeo[slug];
  const text = plan?.answerFirst?.text;
  return text ? plainAnswer(text) : null;
}

function serviceTitle(slug) {
  const svc = services.find((s) => s.slug === slug);
  return svc?.title || slug;
}

/**
 * Curated citation summary. Facts match the live site; do not invent clients,
 * metrics, reviews, certifications, prices, or offers beyond published pages.
 */
export function buildLlmsTxt() {
  const posts = getPublishedMarkdownPosts();
  const lastUpdated = newestBlogDate(posts);
  const childSitemaps = childSitemapLocs()
    .map((url) => url.replace(`${APEX}/`, ""))
    .join(", ");

  const websiteGuides = guidesForService(posts, "website-development");
  const softwareGuides = guidesForService(posts, "software-development");
  const mobileGuides = guidesForService(posts, "mobile-app-development");
  const iosGuides = guidesForService(posts, "ios-app-development");
  const androidGuides = guidesForService(posts, "android-app-development");
  const devopsGuides = guidesForService(posts, "devops");
  const aiGuides = guidesForService(posts, "ai-development");
  const marketingGuides = guidesForService(posts, "digital-marketing");
  const modernizationGuides = guidesForService(
    posts,
    "business-modernization"
  );
  const crmGuides = guidesForService(posts, "crm-erp-development");
  const evGuides = guidesForService(posts, "ev-charging-app-development");
  const fintechGuides = guidesForService(posts, "fintech-app-development");
  const rpaGuides = guidesForService(posts, "rpa");
  const uiuxGuides = guidesForService(posts, "ui-ux-design");
  const bbpsGuides = guidesForService(
    posts,
    "fintech-app-development/bbps-software"
  );
  const aepsGuides = guidesForService(
    posts,
    "fintech-app-development/aeps-software"
  );
  const dmtGuides = guidesForService(
    posts,
    "fintech-app-development/dmt-software"
  );
  const rechargeGuides = guidesForService(
    posts,
    "fintech-app-development/recharge-software"
  );

  const short = {
    software: shortAnswerForSlug("software-development"),
    website: shortAnswerForSlug("website-development"),
    mobile: shortAnswerForSlug("mobile-app-development"),
    ios: shortAnswerForSlug("ios-app-development"),
    android: shortAnswerForSlug("android-app-development"),
    uiux: shortAnswerForSlug("ui-ux-design"),
    graphic: shortAnswerForSlug("graphic-design"),
    marketing: shortAnswerForSlug("digital-marketing"),
    branding: shortAnswerForSlug("branding"),
    rpa: shortAnswerForSlug("rpa"),
    modernization: shortAnswerForSlug("business-modernization"),
    salesforce: shortAnswerForSlug("salesforce"),
    ai: shortAnswerForSlug("ai-development"),
    devops: shortAnswerForSlug("devops"),
    onDemand: shortAnswerForSlug("on-demand"),
    mlm: shortAnswerForSlug("mlm-crm-development"),
    fintech: shortAnswerForSlug("fintech-app-development"),
    ev: shortAnswerForSlug("ev-charging-app-development"),
    crm: shortAnswerForSlug("crm-erp-development"),
    erp: shortAnswerForSlug("erp-software-development"),
  };

  const fintechChildren = Object.fromEntries(
    fintechProductPages.map((page) => [
      page.slug,
      plainAnswer(page.answerFirst?.text || page.answer),
    ])
  );

  const blogSection =
    posts.length === 0
      ? `- Hub: ${apex("/blog")}`
      : [
          `- Hub: ${apex("/blog")}`,
          `- Blog sitemap: ${apex("/sitemap-blog.xml")}`,
          ...blogLines(posts),
        ].join("\n");

  return `# TheTriFusion (Trifusion Infotech Pvt. Ltd.)

Last updated: ${lastUpdated}
Note: This file helps assistants cite accurate NAP and canonical service URLs. It is not a Google ranking factor and does not guarantee AI Overview / Copilot / ChatGPT Search citations.

Canonical brand for citations: TheTriFusion
Legal name: Trifusion Infotech Private Limited
Also known as: Trifusion Infotech, Trifusion Infotech Pvt. Ltd.
Founded: 2026; incorporated as a private limited company in 2026
Team: about ten developers and consultants (About page)
Founder: Amardeep, CEO
Company LinkedIn: https://linkedin.com/company/the-trifusion
Instagram: https://instagram.com/thetrifusion

## Contact / Office

Name: TheTriFusion
Legal name: Trifusion Infotech Private Limited
Address: 5th Floor, Amoro Building, Patrakar Colony, Jaipur, Rajasthan 302020, India
Phone: +91 63781 33780
Hours: Monday to Saturday, 10:00 AM to 7:00 PM IST (closed Sunday)
Email: contact@thetrifusion.in
Site: ${APEX}
Contact: ${apex("/contact")}
Service area: India and worldwide (remote delivery)

We build websites, ecommerce stores, Android/iOS mobile apps, custom software, UI/UX, white-label delivery, and digital marketing.

## Services

Canonical page for each service is the /services/* URL below. Ecommerce's canonical page is /solutions/ecommerce-website-development. Do not cite paid landing URLs as the service page.

### Ecommerce website development
URL: ${apex("/solutions/ecommerce-website-development")}
Title: Ecommerce Website Development Company in India | From ₹25,000
Best for: Shopify, WooCommerce, or custom stores with Razorpay/UPI and Shiprocket, built in Jaipur for Indian brands.
Not for: marketplace-only sellers who only need an Amazon/Flipkart account.
Short answer: TheTriFusion (Trifusion Infotech Pvt Ltd) in Jaipur builds Shopify, WooCommerce and custom ecommerce stores for Indian businesses, with Razorpay/UPI and GST invoices. Packaged stores start at ₹25,000; apps and logistics packages are published on the page.
What: Shopify, WooCommerce, and custom (Next.js / React / Node.js) online stores, B2B ordering portals, and multi-vendor marketplaces.
Platforms: Shopify, WooCommerce, Next.js, React, Node.js; payments via Razorpay, Cashfree, PayU, CCAvenue, Stripe, UPI; shipping via Shiprocket, Delhivery.
Who: D2C brands, wholesalers, and marketplace operators in India and remote clients elsewhere.
Price from: ₹25,000 Ecommerce Website; ₹35,000 Website + Android; ₹45,000 Website + Android + iOS; ₹99,000 High-End with Logistics + Android + iOS. Custom / marketplace builds are quoted after discovery.
Live proof: ${apex("/portfolio/dailyconcepts-ecommerce-pos")} ; https://dailyconceptsindia.com
Jaipur page: ${apex("/solutions/ecommerce-website-development-jaipur")}

### Custom software development
URL: ${apex("/services/software-development")}
Primary topic: custom software development company in India (studio in Jaipur, Rajasthan).
Best for: Indian SMEs that need portals, CRM/ERP modules, APIs, or a SaaS MVP they will own.
Not for: teams that only need a brochure website (see website development).
Short answer: ${short.software || "TheTriFusion builds custom software for Indian SMEs from Jaipur."}
What: Business portals, CRM/ERP modules, APIs, and admin tools scoped to a workflow.
Platforms: React, Node.js, Python, Java, PostgreSQL, MongoDB.
Who: Indian SMEs replacing spreadsheet operations (remote delivery; single HQ in Jaipur — no invented branch network).
Price from: ₹1,00,000 for a starter MVP shown on the page.
Live proof: ${apex("/portfolio/connect-dairy-supply-chain")} ; ${apex("/portfolio/plugone-ev-charging-platform")}
${softwareGuides.length ? softwareGuides.join("\n") + "\n" : ""}
### Website development
URL: ${apex("/services/website-development")}
Primary topic: website development company in India (studio in Jaipur, Rajasthan).
Best for: business websites, WordPress or Next.js sites, and lead-generation sites.
Not for: full ecommerce catalogues (see ecommerce website development).
Short answer: ${short.website || "TheTriFusion builds business websites from a Jaipur studio."}
What: Marketing sites, lead funnels, and related web work with titles, sitemap, Search Console setup, and hosting after launch.
Platforms: React, Next.js, Node.js, MongoDB, PostgreSQL, WordPress.
Who: Indian businesses that need a public site, not an internal operating system.
Price from: ₹15,000 (Basic, up to 5 pages). Published plans: ₹15,000 / ₹35,000 / ₹75,000. Ecommerce stores are on the ecommerce page from ₹25,000.
Timeline: a focused marketing website is often 3–8 weeks.
Live proof: ${apex("/portfolio/atharv-narayan-dairy-logistics-website")} ; ${apex("/portfolio/dailyconcepts-ecommerce-pos")}
${websiteGuides.length ? websiteGuides.join("\n") + "\n" : ""}
### Mobile app development
URL: ${apex("/services/mobile-app-development")}
Primary topic: mobile app development company in India — cross-platform both stores (studio in Jaipur, Rajasthan).
Best for: one product shipping to both App Store and Google Play.
Not for: App Store-only (iOS page) or Play Store-first (Android page) first releases.
Short answer: ${short.mobile || "TheTriFusion builds one product for both iOS and Android from Jaipur."}
What: One product on iOS and Android, with a shared data model and web admin.
Platforms: React Native, Flutter, Swift, Kotlin, Firebase.
Who: Teams across India shipping both stores in the same release. Typical MVP is 8–12 weeks after discovery.
Price from: ₹50,000.
Live proof: ${apex("/portfolio/plugone-ev-charging-platform")} ; ${apex("/portfolio/connect-dairy-supply-chain")}
${mobileGuides.length ? mobileGuides.join("\n") + "\n" : ""}
### iOS app development
URL: ${apex("/services/ios-app-development")}
Primary topic: iOS app development company in India (team based in Jaipur, Rajasthan).
Best for: iPhone-first or App Store-only products.
Not for: Play Store-only first releases (see Android).
Short answer: ${short.ios || "TheTriFusion builds iPhone apps from Jaipur."}
What: App Store apps with TestFlight and review support, plus the API and web admin when scoped.
Platforms: Swift or React Native, Firebase, Node.js, AWS.
Who: Businesses that need an App Store-only or iPhone-first app. Typical MVP is 8–12 weeks of build plus Apple review time.
Price from: ₹2,50,000 (focused iOS MVP). Published plans: ₹2,50,000 / ₹5,00,000 / ₹9,00,000.
Live proof: PlugOne (https://plugone.in) includes an iOS driver experience; ${apex("/portfolio/plugone-ev-charging-platform")}
${iosGuides.length ? iosGuides.join("\n") + "\n" : ""}
### Android app development
URL: ${apex("/services/android-app-development")}
Primary topic: Android app development company in Jaipur.
Best for: Play Store-first apps, field apps, UPI-ready Android products.
Not for: App Store-only first releases (see iOS).
Short answer: ${short.android || "TheTriFusion builds Play Store apps from Jaipur."}
What: Play Store apps with listing support, testing tracks, crash monitoring, and the API and web admin when scoped.
Platforms: Kotlin, React Native, Flutter, Firebase, Node.js, AWS.
Who: Businesses that need a Play Store-first app. Typical MVP is 8–12 weeks after discovery.
Price from: ₹2,50,000 (focused Android MVP). Published plans: ₹2,50,000 / ₹5,00,000 / ₹9,00,000.
Live proof: PlugOne (https://plugone.in) and Connect Dairy (https://connectdairy.in); ${apex("/portfolio/plugone-ev-charging-platform")} ; ${apex("/portfolio/connect-dairy-supply-chain")}
${androidGuides.length ? androidGuides.join("\n") + "\n" : ""}
### UI/UX design
URL: ${apex("/services/ui-ux-design")}
Best for: Figma product UI, flows, and developer handoff for apps and websites.
Not for: campaign posters or social kits (see graphic design).
Short answer: ${short.uiux || "TheTriFusion designs product UI/UX in Figma from Jaipur."}
What: Product flows, screens, and a component set handed to engineering.
Platforms: Figma, Adobe XD, Sketch.
Who: Teams building a website or app, not a poster.
Price from: ₹20,000.
Live proof: You own the design files after completion and payment.
${uiuxGuides.length ? uiuxGuides.join("\n") + "\n" : ""}
### Graphic design
URL: ${apex("/services/graphic-design")}
Best for: social creatives, ads, brochures, catalogues, and packaging matched to a live site.
Not for: product UI screens (see UI/UX) or full brand identity (see branding).
Short answer: ${short.graphic || "TheTriFusion designs campaign creatives from Jaipur."}
What: Social kits, ad creatives, brochures, catalogues, packaging, and campaign visuals that match a live website.
Platforms: Adobe Illustrator, Photoshop, InDesign.
Who: Indian brands running a campaign next to an existing site.
Price from: ₹10,000.
Live proof: You own source files when scoped in the contract.

### Digital marketing
URL: ${apex("/services/digital-marketing")}
Best for: SEO, Google Ads, Meta Ads, and landing-page CRO on a site that already exists.
Not for: teams that still need a website or store before they buy ads.
Short answer: ${short.marketing || "TheTriFusion runs SEO and ads from Jaipur."}
What: SEO, Google Ads, Meta Ads, and landing pages measured against leads.
Platforms: Google Analytics, Google Ads, Meta Ads.
Who: Indian brands that already have a site or store to send traffic to.
Price from: ₹15,000.
Live proof: Monthly written reports against the metrics in the scope — no invented ROAS.
${marketingGuides.length ? marketingGuides.join("\n") + "\n" : ""}
### Branding
URL: ${apex("/services/branding")}
Best for: logo, brand identity, and guidelines from a branding agency in Jaipur.
Not for: one-off social posts without an identity (see graphic design).
Short answer: ${short.branding || "TheTriFusion builds brand identity systems from Jaipur."}
What: Brand strategy, naming, logo, colour, typography, and guidelines, then a website that uses them.
Platforms: Adobe Creative Suite, Figma.
Who: Companies that need the mark and the site to match.
Price from: ₹30,000.
Live proof: You own the identity files after completion and payment.

### RPA
URL: ${apex("/services/rpa")}
Best for: invoice entry, Tally sync, report pulls, and CRM updates with a human exception path.
Not for: unstructured "AI that decides" without a written process.
Short answer: ${short.rpa || "TheTriFusion builds RPA bots for Indian SMEs from Jaipur."}
What: Bots for repetitive office work, with a human handoff where a bot should not decide.
Platforms: UiPath, Automation Anywhere, Python.
Who: Indian SMEs with a written process list.
Price from: ₹50,000.
Live proof: You own the automation code after completion and payment.
${rpaGuides.length ? rpaGuides.join("\n") + "\n" : ""}
### Business modernization
URL: ${apex("/services/business-modernization")}
Best for: legacy software modernization and replacing Excel/WhatsApp workflows with phased web apps.
Not for: a full ERP RFP on day one (see CRM/ERP).
Short answer: ${short.modernization || "TheTriFusion modernizes Excel and legacy workflows from Jaipur."}
What: Phased replacement of spreadsheet workflows with a web or mobile app.
Platforms: Web apps, CRM, and mobile, scoped per workflow.
Who: Indian SMEs that have outgrown Excel and are not buying a full ERP.
Price from: ₹1,50,000.
Live proof: You own the code after completion and payment.
${modernizationGuides.length ? modernizationGuides.join("\n") + "\n" : ""}
### Salesforce
URL: ${apex("/services/salesforce")}
Best for: Flows, Apex, and integrations on an org you already pay for.
Not for: teams that need a custom commissions CRM instead (see CRM/ERP).
Short answer: ${short.salesforce || "TheTriFusion customises Salesforce orgs from Jaipur."}
What: Objects, flows, and integrations in an existing Salesforce org.
Platforms: Sales Cloud, Service Cloud, Lightning, Apex.
Who: Indian sales teams that already pay for Salesforce.
Price from: ₹80,000.
Live proof: Work stays in the Salesforce org you already pay for.

### AI development
URL: ${apex("/services/ai-development")}
Best for: WhatsApp AI chatbots, RAG search, document extraction, and AI agents with a human review step.
Not for: research-lab model training.
Short answer: ${short.ai || "TheTriFusion adds practical AI features to products from Jaipur."}
What: Assistants, document operations, and search, with a human step in the workflow.
Platforms: Python, existing model APIs, AWS.
Who: Product teams adding a practical AI feature, not a research lab.
Price from: ₹2,00,000.
Live proof: You own the application code after completion and payment.
${aiGuides.length ? aiGuides.join("\n") + "\n" : ""}
### DevOps and cloud
URL: ${apex("/services/devops")}
Primary topic: DevOps services in Jaipur and India.
Best for: CI/CD, Kubernetes, Terraform, and a free infrastructure audit before a written plan.
Not for: buying cloud credits or a 24/7 NOC claim this page does not make.
Short answer: ${short.devops || "TheTriFusion provides DevOps and cloud services from Jaipur."}
What: Pipelines, infrastructure as code, Kubernetes where it earns its place, monitoring, and cloud migration on AWS, Azure, or GCP.
Platforms: Jenkins, GitLab CI, Docker, Kubernetes, Terraform, AWS, Azure, Ansible.
Who: Teams in India and elsewhere that need the operations layer under a product. The infrastructure audit is free. Published /pricing plans start at ₹1,00,000; retainers are scoped after the audit.
Live proof: Free infrastructure audit before a written plan.
${devopsGuides.length ? devopsGuides.join("\n") + "\n" : ""}
### On-demand / hire dedicated developers
URL: ${apex("/services/on-demand")}
Best for: hiring dedicated React, Node, or mobile developers from Jaipur with a named lead.
Not for: handing over an entire unscoped product (see software development).
Short answer: ${short.onDemand || "TheTriFusion staffs dedicated developers from Jaipur."}
What: Extra React, Node, or mobile hours with a named lead.
Platforms: React, Node.js, Python, Java, mobile.
Who: Indian product teams that need capacity without handing over the whole project.
Price from: ₹50,000 (published starting project price; monthly role rates are scoped).
Live proof: Named lead and weekly demos — not anonymous bench filling.

### MLM software
URL: ${apex("/services/mlm-crm-development")}
Best for: custom MLM software (binary, unilevel, matrix, hybrid) with genealogy, e-wallet, KYC, and payouts.
Not for: a generic sales CRM without a compensation plan (see CRM/ERP).
Short answer: ${short.mlm || "TheTriFusion builds custom MLM software from Jaipur."}
What: Compensation software with genealogy, KYC, e-wallet, and lead tools, plus iOS and Android field apps.
Platforms: Web admin plus iOS and Android field apps.
Who: Network-marketing operators with a written compensation plan.
Price from: ₹3,50,000.
Live proof: You own the code after completion and payment.
Compliance: Consumer Protection (Direct Selling) Rules, 2021 — https://consumeraffairs.nic.in/

### Fintech app development
URL: ${apex("/services/fintech-app-development")}
Best for: white-label BBPS, AEPS, DMT, recharge and UPI software. You bring the bank/API partner.
Not for: obtaining NPCI or RBI licences — we build software only.
Short answer: ${short.fintech || "TheTriFusion builds white-label fintech panels from Jaipur; you bring the bank or API partner."}
What: BBPS, AEPS, DMT, and XDMT software with retailer, distributor, and admin panels, plus UPI and KYC.
Platforms: iOS, Android, and web. The client brings bank or NPCI access.
Who: Retailers, distributors, and fintech operators in India.
Price from: ₹99,999. Published plans: ₹99,999 / ₹1,99,999 / ₹3,99,999.
Live proof: You own the code after completion and payment — you bring BBPOU/sponsor bank/API partner.
Sources: NPCI https://www.npci.org.in/ · RBI https://www.rbi.org.in/
${fintechGuides.length ? fintechGuides.join("\n") + "\n" : ""}
- BBPS software: ${apex("/services/fintech-app-development/bbps-software")}
  Short answer: ${fintechChildren["bbps-software"] || ""}
${bbpsGuides.length ? bbpsGuides.join("\n") + "\n" : ""}
- AEPS software: ${apex("/services/fintech-app-development/aeps-software")}
  Short answer: ${fintechChildren["aeps-software"] || ""}
${aepsGuides.length ? aepsGuides.join("\n") + "\n" : ""}
- DMT software: ${apex("/services/fintech-app-development/dmt-software")}
  Short answer: ${fintechChildren["dmt-software"] || ""}
${dmtGuides.length ? dmtGuides.join("\n") + "\n" : ""}
- Recharge software: ${apex("/services/fintech-app-development/recharge-software")}
  Short answer: ${fintechChildren["recharge-software"] || ""}
${rechargeGuides.length ? rechargeGuides.join("\n") + "\n" : ""}
### EV Charging Management Software (CMS & App)
URL: ${apex("/services/ev-charging-app-development")}
Summary: Jaipur software studio building white-label EV charging CMS/CSMS and driver apps for Indian CPOs, fleets and charger owners — not a CPO and not a charger maker. Client owns the code.
Best for: operators who want their own brand on OCPP chargers, UPI/GST billing, and optional OCPI roaming.
Not for: buying charger hardware or renting TheTriFusion as a public network.
Short answer: ${short.ev || "TheTriFusion builds white-label EV charging CMS and driver apps from Jaipur."}
Modules: CMS/CSMS · driver app (iOS/Android/web) · billing & settlement · OCPI roaming (UEI can be scoped) · load management · O&M/ticketing · fleet/depot · APIs.
Protocols: OCPP 1.6J/2.0.1 · OCPI 2.2.1 — built to the spec and tested against your chargers (no OCA certification claim).
Who: CPOs & startups, franchise/DOCO owners, fleets, OEMs, real estate/RWAs/hospitality; DISCOMs/PSUs can be scoped.
Price from: ₹4,50,000 / ₹9,00,000 / ₹18,00,000 ex-GST after discovery (starting ranges, not a fixed package).
Live proof: PlugOne (https://plugone.in) — OCPP + OCPI; ${apex("/portfolio/plugone-ev-charging-platform")}
Contact: ${apex("/contact")} · WhatsApp +91 63781 33780
Protocol docs: OCPP https://openchargealliance.org/protocols/open-charge-point-protocol/ · OCPI https://evroaming.org/
${evGuides.length ? evGuides.join("\n") + "\n" : ""}
### CRM development
URL: ${apex("/services/crm-erp-development")}
Primary topic: custom CRM development company in India (studio in Jaipur, Rajasthan).
Best for: custom CRM with leads, pipelines, quotations, WhatsApp notes, and code you own.
Not for: a Salesforce consulting-partner engagement (see Salesforce); full warehouse/GST ERP (see ERP software).
Short answer: ${short.crm || "TheTriFusion builds custom CRM software from Jaipur."}
What: Custom sales CRM for pipelines, follow-ups, and quotations.
Platforms: Web admin, iOS, and Android.
Who: Indian operators that need a sales system shaped to their process (remote delivery from Jaipur HQ — no invented national office network).
Price from: ₹3,00,000.
Live proof: ${apex("/portfolio/connect-dairy-supply-chain")} ; ${apex("/portfolio/dailyconcepts-ecommerce-pos")}
${crmGuides.length ? crmGuides.join("\n") + "\n" : ""}
### ERP software development
URL: ${apex("/services/erp-software-development")}
Best for: custom ERP with GST finance, inventory, procurement, manufacturing, HR/payroll, multi-branch, and reporting.
Not for: sales-pipeline-only CRM (see CRM development); boxed Tally/SAP/Odoo when those already fit.
Short answer: ${short.erp || "TheTriFusion builds phased ERP modules for Indian SMEs from Jaipur."}
What: Phased ERP modules for Indian manufacturers, traders, and multi-branch operators.
Platforms: Web admin, iOS, and Android companions when scoped.
Who: Jaipur and Rajasthan SMEs, and Indian operators remote from the Jaipur studio.
Price from: ₹6,00,000 (multi-module; published plans also list ₹3,00,000 and ₹11,00,000).
Live proof: You own the code after completion and payment; ops references include Connect Dairy and DailyConcepts.

- All services: ${apex("/services")}

## Ecommerce website development

Primary page: ${apex("/solutions/ecommerce-website-development")}
Title: Ecommerce Website Development Company in India | From ₹25,000
Summary: TheTriFusion (Trifusion Infotech Pvt. Ltd., Jaipur, India) is an ecommerce website development company in India building Shopify, WooCommerce and custom (Next.js / React / Node.js) online stores, B2B / wholesale ordering portals and multi-vendor marketplaces for clients across India and worldwide (remote).
Short answer: TheTriFusion builds Shopify, WooCommerce and custom ecommerce stores for Indian businesses from Jaipur, with Razorpay/UPI and GST invoices. Packaged stores start at ₹25,000.
- Packaged pricing (published on the canonical page): Ecommerce Website ₹25,000; Website + Android App ₹35,000; Website + Android + iOS App ₹45,000; High-End Ecommerce with Logistics + Android + iOS App ₹99,000; website live within 48 hours after a locked brief and assets.
- Custom / B2B / ERP-integrated builds: quoted after discovery; a typical custom ecommerce MVP takes 4–10 weeks.
- Integrations: Razorpay, Cashfree, PayU, CCAvenue, Stripe, UPI; Shiprocket, Delhivery; offline POS / inventory sync (live example: DailyConcepts India).
- Platform comparison (Shopify vs WooCommerce vs custom): ${apex("/solutions/ecommerce-website-development")}
- Jaipur page: ${apex("/solutions/ecommerce-website-development-jaipur")}
- Case study: ${apex("/portfolio/dailyconcepts-ecommerce-pos")}
- Contact: +91 63781 33780 · contact@thetrifusion.in

## DevOps & Cloud services

Page: ${apex("/services/devops")}
Jaipur-based delivery for India and worldwide. The initial infrastructure audit and cloud cost audit are free. The DevOps Starter Pack for startups is scoped separately and is not free.

- AI-powered DevOps / AIOps: ${apex("/services/devops")}#ai-devops-aiops
- Cloud cost optimization / FinOps: ${apex("/services/devops")}#cloud-cost-optimization
- Kubernetes management: ${apex("/services/devops")}#kubernetes-management
- CI/CD automation: ${apex("/services/devops")}#ci-cd-automation
- DevSecOps readiness (not certification): ${apex("/services/devops")}#devsecops
- Infrastructure as Code: ${apex("/services/devops")}#infrastructure-as-code
- Cloud migration (AWS, Azure, or GCP): ${apex("/services/devops")}#cloud-migration
- Managed DevOps: ${apex("/services/devops")}#managed-devops
- DevOps Starter Pack for startups: ${apex("/services/devops")}#devops-starter-pack
${devopsGuides.length ? devopsGuides.join("\n") + "\n" : ""}
## EV Charging Management Software (CMS & App)

Page: ${apex("/services/ev-charging-app-development")}
White-label EV charging management software for CPOs, fleets and charger owners, built in Jaipur for India and worldwide. Modules: CMS/CSMS, driver app, billing & settlement, OCPI roaming (UEI can be scoped), load management, O&M & complaints, fleet & depot, APIs. The pricing page lists a starting range; this page does not sell a fixed package. Live client: PlugOne (OCPP + OCPI; Ecoplug, Sonic, ChargeMOD, ChargeIndia). No separate IoT service page — charger connectivity is part of this engagement.

- Platform modules: ${apex("/services/ev-charging-app-development")}#modules
- CMS / CSMS: ${apex("/services/ev-charging-app-development")}#cms-csms
- Driver app: ${apex("/services/ev-charging-app-development")}#driver-app
- Billing & settlement: ${apex("/services/ev-charging-app-development")}#billing-settlement
- Roaming (OCPI): ${apex("/services/ev-charging-app-development")}#roaming
- Load management: ${apex("/services/ev-charging-app-development")}#load-management
- O&M & complaints: ${apex("/services/ev-charging-app-development")}#om-complaints
- Fleet & depot: ${apex("/services/ev-charging-app-development")}#fleet-depot
- APIs & integrations: ${apex("/services/ev-charging-app-development")}#apis-integrations
- Who it's for: ${apex("/services/ev-charging-app-development")}#who-its-for
- OCPP vs OCPI: ${apex("/services/ev-charging-app-development")}#ocpp-vs-ocpi
- Protocols: ${apex("/services/ev-charging-app-development")}#protocols
- White-label vs SaaS vs custom: ${apex("/services/ev-charging-app-development")}#white-label
- PlugOne proof: ${apex("/services/ev-charging-app-development")}#plugone-proof
- PlugOne case study: ${apex("/portfolio/plugone-ev-charging-platform")}
- India delivery: ${apex("/services/ev-charging-app-development")}#india-context

## Blog

Live English posts from content/blog (also listed in sitemap-blog.xml). Cite these; do not cite retired /blog/* URLs that return 410.

${blogSection}

## Key hubs

- Home: ${apex("/")}
- About: ${apex("/about")}
- Portfolio: ${apex("/portfolio")}
- Blog: ${apex("/blog")}
- Contact: ${apex("/contact")}
- Solutions: ${apex("/solutions")}
- Pricing: ${apex("/pricing")}
- FAQ: ${apex("/faq")}
- HTML sitemap: ${apex("/sitemap")}
- Editorial policy: ${apex("/editorial-policy")}

## Live case studies (verifiable)

- PlugOne (EV charging): https://plugone.in — ${apex("/portfolio/plugone-ev-charging-platform")}
- Connect Dairy: https://connectdairy.in — ${apex("/portfolio/connect-dairy-supply-chain")}
- DailyConcepts India: https://dailyconceptsindia.com — ${apex("/portfolio/dailyconcepts-ecommerce-pos")}
- Atharv Narayan Dairy Solutions: https://atharvnarayan.in — ${apex("/portfolio/atharv-narayan-dairy-logistics-website")}

## Full inventory for AI/search crawlers

${apex("/llms-full.txt")}

## Sitemap

${apex("/sitemap.xml")} (index: ${childSitemaps}). Blog hub and published posts are in sitemap-blog.xml and are live/citable.

## Other languages

Locale copies under /es, /pt, /ar, /id, and /hi are noindex. Cite the English / en-IN URLs above.
`;
}

function pageBlurb(path) {
  const meta = pages[path];
  if (!meta?.description) return null;
  return meta.description;
}

function serviceBlurb(slug) {
  const seo = servicePageSeo[slug];
  if (seo?.metaDescription) return seo.metaDescription;
  const svc = services.find((s) => s.slug === slug);
  return svc?.shortDescription || svc?.description || serviceTitle(slug);
}

function fintechBlurb(page) {
  return page.metaDescription || page.h1 || page.breadcrumbName;
}

function solutionBlurb(slug) {
  const page = getSeoLandingBySlug(slug) || seoLandingPages.find((p) => p.slug === slug);
  if (!page) return null;
  return page.h1 || page.title || slug;
}

function portfolioBlurb(project) {
  return (
    project.cardDescription ||
    project.seoDescription ||
    project.description ||
    project.title
  );
}

/**
 * Full apex inventory aligned with child sitemaps + live markdown blog posts.
 */
export function buildLlmsFullTxt() {
  const posts = getPublishedMarkdownPosts();
  const parts = buildSitemapParts();
  const lastUpdated = newestBlogDate(posts);

  const corePaths = [
    "/",
    "/about",
    "/services",
    "/solutions",
    "/portfolio",
    "/blog",
    "/faq",
    "/contact",
    "/pricing",
    "/editorial-policy",
    "/privacy",
    "/terms",
    "/sitemap",
  ];

  const coreLines = corePaths.map((path) => {
    const blurb = pageBlurb(path);
    return blurb ? `- ${apex(path)} — ${blurb}` : `- ${apex(path)}`;
  });

  const serviceLines = services.map((svc) => {
    const blurb = serviceBlurb(svc.slug);
    return `- ${apex(`/services/${svc.slug}`)} — ${blurb}`;
  });

  const fintechLines = fintechProductPages.map((page) => {
    const blurb = fintechBlurb(page);
    return `- ${apex(page.path)} — ${blurb}`;
  });

  const solutionLines = parts.solutions.map((entry) => {
    const slug = entry.url.replace(`${APEX}/solutions/`, "");
    const blurb = solutionBlurb(slug);
    return blurb
      ? `- ${entry.url} — ${blurb}`
      : `- ${entry.url}`;
  });

  const portfolioProjects = Portfolios.filter(isIndexablePortfolio);
  const portfolioLines = portfolioProjects.map((project) => {
    const blurb = portfolioBlurb(project);
    return `- ${apex(`/portfolio/${project.id}`)} — ${project.title}: ${blurb}`;
  });
  const liveCredits = portfolioProjects
    .map((project) => project.credit)
    .filter(Boolean)
    .map((url) => {
      try {
        const parsed = new URL(url);
        return `- Live: ${parsed.origin}`;
      } catch {
        return `- Live: ${url}`;
      }
    });

  const blogLinesFull =
    posts.length === 0
      ? [`- ${apex("/blog")}`]
      : [
          `- ${apex("/blog")} — ${pageBlurb("/blog") || "Blog hub"}`,
          ...posts.map(
            (post) =>
              `- ${apex(`/blog/${post.slug}`)} — ${post.title}: ${post.description}`
          ),
        ];

  return `# TheTriFusion — full page inventory (apex)
# Canonical brand: TheTriFusion
# Also known as: Trifusion Infotech
# Legal: Trifusion Infotech Private Limited
# Prefer ${APEX} (never www, never .com)
# Last updated: ${lastUpdated}
# URLs below match the live sitemaps (pages, services, solutions, blog).

## Contact / Office

Name: TheTriFusion
Legal name: Trifusion Infotech Private Limited
Address: 5th Floor, Amoro Building, Patrakar Colony, Jaipur, Rajasthan 302020, India
Phone: +91 63781 33780
Hours: Monday to Saturday, 10:00 AM to 7:00 PM IST (closed Sunday)
Email: contact@thetrifusion.in
Site: ${APEX}
Contact: ${apex("/contact")}

## Core

${coreLines.join("\n")}

## Ecommerce (canonical page)

- ${apex("/solutions/ecommerce-website-development")} — Ecommerce Website Development Company in India | From ₹25,000: Shopify, WooCommerce and custom stores, B2B portals, multi-vendor marketplaces. Packages: Website ₹25,000; + Android ₹35,000; + Android + iOS ₹45,000; High-End logistics + both apps ₹99,000; custom / marketplace builds quoted after discovery.

## Service detail pages (canonical)

Each line is the canonical URL. Paid landing pages are not listed here.

${serviceLines.join("\n")}
${fintechLines.join("\n")}

## DevOps & Cloud services

${apex("/services/devops")}
Jaipur-based DevOps and cloud delivery for India and worldwide. The initial infrastructure audit and cloud cost audit are free. The DevOps Starter Pack for startups is a scoped engagement and is not a free bundle.

- AI-powered DevOps / AIOps — ${apex("/services/devops")}#ai-devops-aiops
- Cloud cost optimization / FinOps — ${apex("/services/devops")}#cloud-cost-optimization
- Kubernetes management — ${apex("/services/devops")}#kubernetes-management
- CI/CD automation — ${apex("/services/devops")}#ci-cd-automation
- Security and compliance / DevSecOps (readiness support, not ISO 27001 or SOC 2 certification) — ${apex("/services/devops")}#devsecops
- Infrastructure as Code — ${apex("/services/devops")}#infrastructure-as-code
- Cloud migration to AWS, Azure, or GCP — ${apex("/services/devops")}#cloud-migration
- Managed DevOps — ${apex("/services/devops")}#managed-devops
- DevOps Starter Pack for startups — ${apex("/services/devops")}#devops-starter-pack

## EV Charging Management Software (CMS & App)

${apex("/services/ev-charging-app-development")}
Jaipur software studio building white-label EV charging CMS/CSMS and driver apps for Indian CPOs, fleets and charger owners — not a CPO and not a charger maker. Client owns the code. Modules: CMS/CSMS, driver app, billing & settlement, OCPI roaming (UEI can be scoped), load management, O&M & complaints, fleet & depot, APIs. Protocols: OCPP 1.6J/2.0.1 and OCPI 2.2.1 built to the spec and tested against your chargers (no OCA certification claim). Published starting ranges ₹4,50,000 / ₹9,00,000 / ₹18,00,000 ex-GST after discovery. PlugOne (https://plugone.in) is a live client product using both OCPP and OCPI; tested / integrated with Ecoplug, Sonic, ChargeMOD, and ChargeIndia (OCPI hub).

- Platform modules — ${apex("/services/ev-charging-app-development")}#modules
- CMS / CSMS — ${apex("/services/ev-charging-app-development")}#cms-csms
- Driver app — ${apex("/services/ev-charging-app-development")}#driver-app
- Billing & settlement — ${apex("/services/ev-charging-app-development")}#billing-settlement
- Roaming (OCPI) — ${apex("/services/ev-charging-app-development")}#roaming
- Load management — ${apex("/services/ev-charging-app-development")}#load-management
- O&M & complaints — ${apex("/services/ev-charging-app-development")}#om-complaints
- Fleet & depot — ${apex("/services/ev-charging-app-development")}#fleet-depot
- APIs & integrations — ${apex("/services/ev-charging-app-development")}#apis-integrations
- Who it's for — ${apex("/services/ev-charging-app-development")}#who-its-for
- OCPP vs OCPI — ${apex("/services/ev-charging-app-development")}#ocpp-vs-ocpi
- Protocols — ${apex("/services/ev-charging-app-development")}#protocols
- White-label vs SaaS vs custom — ${apex("/services/ev-charging-app-development")}#white-label
- PlugOne proof — ${apex("/services/ev-charging-app-development")}#plugone-proof
- PlugOne case study — ${apex("/portfolio/plugone-ev-charging-platform")}
- India delivery — ${apex("/services/ev-charging-app-development")}#india-context

## Solutions hubs

${solutionLines.join("\n")}

## Featured portfolio (live)

${portfolioLines.join("\n")}
${liveCredits.join("\n")}

## Blog — indexable posts

Every live English post from content/blog. Self-canonical, index,follow, sitemap-blog.xml, /blog listing.
Retired legacy /blog/* URLs return 410 and are not listed here.

${blogLinesFull.join("\n")}

## AI / crawler notes

- Short summary: ${apex("/llms.txt")}
- Sitemap index: ${apex("/sitemap.xml")}
${childSitemapLocs().map((url) => `- Child sitemap: ${url}`).join("\n")}
- HTML sitemap: ${apex("/sitemap")}
- Robots: ${apex("/robots.txt")}
`;
}

export function llmsTextResponse(body) {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
