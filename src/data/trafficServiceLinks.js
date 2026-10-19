/**
 * In-body "Built by TheTriFusion" service CTAs. Custom copy for the
 * highest-click India URLs (GSC last 28 days) plus recent India-buyer
 * guides. Every other post gets a default block for the closest service
 * (website, software, EV, fintech, mobile, AI, ecommerce, and so on).
 * Injected at the end of article HTML if the stored copy lacks the heading.
 */
import {
  rotatedUnindexedLinks,
  UNINDEXED_SERVICE_LINKS,
} from "./serviceIndexLinks";
export const TRAFFIC_SERVICE_CTA_SLUGS = [
  "chatgpt-1980s-ai-photo-prompt-guide",
  "neet-pg-result-2026-how-to-check",
  "motorola-signature-27-india-whats-known",
  "portugal-vs-wales-nations-league-why-trending",
  "sbi-po-mains-result-2026-how-to-check",
  "afghanistan-vs-japan-asian-games-cricket-explained",
  "23-september-2026-why-trending-india",
  "nse-listing-date-how-ipo-listing-works-india",
  "ocpi-roaming-explained-cpo-emsp",
  "google-ai-overviews-indian-business-websites-2026",
  "gst-einvoice-custom-software-india-2026",
  "festive-ecommerce-website-india-ondc-2026",
  "google-ads-automated-promotions-india-2026",
  "hindi-indic-ui-ux-design-india-2026",
  "d2c-branding-trademark-india-festive-2026",
];

const BLOCKS = {
  "chatgpt-1980s-ai-photo-prompt-guide": `
<h2>Built by TheTriFusion</h2>
<p>A viral prompt is a test. A branded AI photo booth, WhatsApp bot, or in-app filter is a product: rate limits, Hindi/English UI, and a lead path. TheTriFusion is an <a href="/services/ai-development">AI development company in India</a> based in Jaipur. Related work: <a href="/services/mobile-app-development">mobile app development company in India</a> and <a href="/services/website-development">website development company in Jaipur</a>. Published AI pilots start from ₹2,00,000 on <a href="/pricing">pricing</a>.</p>
`,
  "neet-pg-result-2026-how-to-check": `
<h2>Built by TheTriFusion</h2>
<p>Exam boards and institutes need result pages that stay accurate when a login button moves — HTTPS, a real domain, and copy that does not invent a cutoff. That is the same work as a <a href="/services/website-development">website development company in Jaipur</a> and a <a href="/services/software-development">custom software development company in India</a> for applicant logins. If you need the page to be found, see <a href="/services/digital-marketing">digital marketing company in India</a>. TheTriFusion does not conduct NEET PG.</p>
`,
  "motorola-signature-27-india-whats-known": `
<h2>Built by TheTriFusion</h2>
<p>Flagship Android launches are when Indian product teams ship camera, performance and EMI flows — not a spec sheet. TheTriFusion is a <a href="/services/mobile-app-development">mobile app development company in Jaipur</a>. Store-specific work sits on <a href="/services/android-app-development">Android app development company in Jaipur</a> and <a href="/services/ios-app-development">iOS app development company in India</a>. Published mobile work starts from ₹50,000.</p>
`,
  "portugal-vs-wales-nations-league-why-trending": `
<h2>Built by TheTriFusion</h2>
<p>Sports spikes punish slow sites and thin score hubs. If you run a media or club site in India, that is <a href="/services/website-development">website development company in India</a> work, plus <a href="/services/digital-marketing">digital marketing agency in Jaipur</a> when the URL is crawlable. Match-day apps are <a href="/services/mobile-app-development">mobile app development company in India</a>. TheTriFusion does not sell tickets or live scores.</p>
`,
  "sbi-po-mains-result-2026-how-to-check": `
<h2>Built by TheTriFusion</h2>
<p>Bank career portals need a page that refuses to invent a result link. Institutes and edtech products that must hold traffic on declaration day use a <a href="/services/website-development">website development company in Jaipur</a> and, for applicant logins, a <a href="/services/software-development">custom software development company in India</a>. Discovery work is <a href="/services/digital-marketing">digital marketing company in India</a>. TheTriFusion is not SBI.</p>
`,
  "afghanistan-vs-japan-asian-games-cricket-explained": `
<h2>Built by TheTriFusion</h2>
<p>India searches a fixture that does not involve India; publishers still need a fast, dated explainer. That is <a href="/services/website-development">website development company in India</a> and <a href="/services/digital-marketing">digital marketing agency in Jaipur</a> once the URL can snippet. Live apps are <a href="/services/mobile-app-development">mobile app development company in India</a>. We do not run a scoreboard.</p>
`,
  "23-september-2026-why-trending-india": `
<h2>Built by TheTriFusion</h2>
<p>Date queries are hubs: news, markets, exams, sport. A company that wants one official URL for “what we do in India” still needs a <a href="/services/website-development">website development company in Jaipur</a>, and <a href="/services/digital-marketing">digital marketing company in India</a> after the site is eligible. Internal tools for the day’s ops are <a href="/services/software-development">custom software development company in India</a>.</p>
`,
  "nse-listing-date-how-ipo-listing-works-india": `
<h2>Built by TheTriFusion</h2>
<p>This page is educational, not investment advice. If you operate a retailer network, BBPS, AEPS, DMT or recharge panels — not a trading app — TheTriFusion is a <a href="/services/fintech-app-development">fintech app development company in India</a> in Jaipur (from ₹99,999). Broader ops software is <a href="/services/software-development">custom software development company in India</a>. A public explainer or company site is <a href="/services/website-development">website development company in India</a>. We do not tip stocks or hold settlement.</p>
`,
  "ocpi-roaming-explained-cpo-emsp": `
<h2>Built by TheTriFusion</h2>
<p>OCPI is how a CPO and an eMSP exchange locations, tokens and CDRs. TheTriFusion builds that software as <a href="/services/ev-charging-app-development">EV charging app development in India</a> from Jaipur (OCPP 1.6J/2.0.1, OCPI 2.2.1, published CMS from ₹4,50,000). Related: <a href="/services/software-development">custom software development company in India</a> and <a href="/services/mobile-app-development">mobile app development company in India</a> for the driver app. We do not operate a public roaming hub.</p>
`,
  "google-ai-overviews-indian-business-websites-2026": `
<h2>Built by TheTriFusion</h2>
<p>Google asked for an official, snippet-eligible site — not a new AI file. That is a <a href="/services/website-development">website development company in Jaipur</a> job (from ₹15,000). Traffic after the URL is crawlable is <a href="/services/digital-marketing">digital marketing company in India</a>. Hidden offers are a <a href="/services/ui-ux-design">UI/UX design company in Jaipur</a> problem.</p>
`,
  "gst-einvoice-custom-software-india-2026": `
<h2>Built by TheTriFusion</h2>
<p>IRP helpers and GST-aware admin are <a href="/services/software-development">custom software development company in India</a> work from Jaipur (MVPs from ₹1,00,000). Module CRM is <a href="/services/crm-erp-development">custom CRM and ERP development in Jaipur</a>. Spreadsheet cutovers are <a href="/services/business-modernization">business modernization in India</a>. We do not replace GSTN.</p>
`,
  "festive-ecommerce-website-india-ondc-2026": `
<h2>Built by TheTriFusion</h2>
<p>A festive catalogue that can check out is <a href="/solutions/ecommerce-website-development">ecommerce website development company in India</a> (stores from ₹25,000) and a <a href="/services/website-development">website development company in Jaipur</a> when the job is still a company site. Ads after the store is eligible: <a href="/services/digital-marketing">digital marketing agency in Jaipur</a>.</p>
`,
  "google-ads-automated-promotions-india-2026": `
<h2>Built by TheTriFusion</h2>
<p>Promotions that land on a live store are <a href="/services/digital-marketing">digital marketing company in India</a> (plans from ₹15,000; ad spend separate). The URL they hit is <a href="/services/website-development">website development company in Jaipur</a> or <a href="/solutions/ecommerce-website-development">ecommerce website development company in Jaipur</a>. We do not guarantee ROAS.</p>
`,
  "hindi-indic-ui-ux-design-india-2026": `
<h2>Built by TheTriFusion</h2>
<p>Hindi and Indic UI is <a href="/services/ui-ux-design">UI/UX design company in Jaipur</a> work (from ₹20,000), then a <a href="/services/website-development">website development company in India</a> or <a href="/services/mobile-app-development">mobile app development company in India</a> build. We do not ship a widget that pretends to be a Hindi page.</p>
`,
  "d2c-branding-trademark-india-festive-2026": `
<h2>Built by TheTriFusion</h2>
<p>A D2C label still needs a logo the website can use: <a href="/services/branding">branding agency in Jaipur</a> (from ₹30,000), then <a href="/services/website-development">website development company in Jaipur</a> and <a href="/solutions/ecommerce-website-development">ecommerce website development company in India</a>. We are not a trademark attorney.</p>
`,
};

const DEFAULT_BLOCKS = {
  ev: `
<h2>Built by TheTriFusion</h2>
<p>Charging software is a product, not a brochure: OCPP, OCPI, tariffs, and a driver app that can start a session. TheTriFusion is an <a href="/services/ev-charging-app-development">EV charging app development company in India</a> in Jaipur (published CMS from ₹4,50,000). Related: <a href="/services/software-development">custom software development company in India</a> and <a href="/services/mobile-app-development">mobile app development company in India</a>. We do not operate a public network.</p>
`,
  fintech: `
<h2>Built by TheTriFusion</h2>
<p>Retailer panels, UPI checkout, BBPS, AEPS and DMT are software with a live settlement path — not a blog explainer. TheTriFusion is a <a href="/services/fintech-app-development">fintech app development company in India</a> in Jaipur (from ₹99,999). Broader ops software is <a href="/services/software-development">custom software development company in India</a>. A public explainer site is <a href="/services/website-development">website development company in India</a>. We do not hold settlement or tip stocks.</p>
`,
  ecommerce: `
<h2>Built by TheTriFusion</h2>
<p>A catalogue that can check out is <a href="/solutions/ecommerce-website-development">ecommerce website development company in India</a> work (stores from ₹25,000) and a <a href="/services/website-development">website development company in Jaipur</a> when the job is still a company site. Ads after the store is eligible: <a href="/services/digital-marketing">digital marketing agency in Jaipur</a>.</p>
`,
  mobile: `
<h2>Built by TheTriFusion</h2>
<p>Store listings, signing, and a backend the app can call are <a href="/services/mobile-app-development">mobile app development company in India</a> work from Jaipur (from ₹50,000). Play Store-first is <a href="/services/android-app-development">Android app development company in Jaipur</a>; App Store-first is <a href="/services/ios-app-development">iOS app development company in India</a>.</p>
`,
  ai: `
<h2>Built by TheTriFusion</h2>
<p>A prompt is a test. A product with rate limits, a Hindi/English UI, and a lead path is <a href="/services/ai-development">AI development company in India</a> work from Jaipur (from ₹2,00,000). Related: <a href="/services/software-development">custom software development company in India</a> and <a href="/services/website-development">website development company in Jaipur</a>.</p>
`,
  crm: `
<h2>Built by TheTriFusion</h2>
<p>Pipeline, inventory, and payouts that staff can finish in a browser are <a href="/services/crm-erp-development">custom CRM and ERP development in Jaipur</a> (from ₹3,00,000) or <a href="/services/software-development">custom software development company in India</a>. Direct-selling trees sit on <a href="/services/mlm-crm-development">MLM CRM development</a>.</p>
`,
  uiux: `
<h2>Built by TheTriFusion</h2>
<p>Hindi, Indic, and task-first screens are <a href="/services/ui-ux-design">UI/UX design company in Jaipur</a> work (from ₹20,000), then a <a href="/services/website-development">website development company in India</a> or <a href="/services/mobile-app-development">mobile app development company in India</a> build.</p>
`,
  branding: `
<h2>Built by TheTriFusion</h2>
<p>A label still needs a mark the website can use: <a href="/services/branding">branding agency in Jaipur</a> (from ₹30,000), then <a href="/services/website-development">website development company in Jaipur</a>. We are not a trademark attorney.</p>
`,
  software: `
<h2>Built by TheTriFusion</h2>
<p>GST-aware admin, applicant logins, and internal tools are <a href="/services/software-development">custom software development company in India</a> work from Jaipur (MVPs from ₹1,00,000). A public page that must stay accurate is <a href="/services/website-development">website development company in Jaipur</a>. Discovery after the URL is crawlable is <a href="/services/digital-marketing">digital marketing company in India</a>.</p>
`,
  marketing: `
<h2>Built by TheTriFusion</h2>
<p>Traffic after a URL is snippet-eligible is <a href="/services/digital-marketing">digital marketing company in India</a> (plans from ₹15,000; ad spend separate). The page those ads hit is <a href="/services/website-development">website development company in Jaipur</a> work. We do not guarantee rankings or ROAS.</p>
`,
};

function websiteDefaultBlock(slug) {
  const skip = new Set([
    "/services/website-development",
    "/services/digital-marketing",
    "/services/mobile-app-development",
  ]);
  const extra =
    rotatedUnindexedLinks(slug, 8).find((item) => !skip.has(item.href)) ||
    UNINDEXED_SERVICE_LINKS[0];
  return `
<h2>Built by TheTriFusion</h2>
<p>Date, fixture, exam, and news spikes punish a slow or thin official page. Publishers and institutes in India still need a <a href="/services/website-development">website development company in Jaipur</a> (from ₹15,000) and, once the URL can snippet, a <a href="/services/digital-marketing">digital marketing company in India</a>. Related work from the same studio: <a href="${extra.href}">${extra.anchor}</a>. TheTriFusion does not run the event, the board, or a scoreboard.</p>
`;
}

function defaultCtaCluster(slug) {
  const hay = String(slug || "").toLowerCase();
  if (/\bev\b|charging|ocpp|ocpi|electric-vehicle|csms|emsp|cpo/.test(hay)) {
    return "ev";
  }
  if (
    /fintech|upi|bbps|aeps|dmt|ipo|nse-listing|nse-stock|payment-gateway|recharge/.test(
      hay
    )
  ) {
    return "fintech";
  }
  if (
    /ecommerce|e-commerce|shopify|woocommerce|ondc|\bd2c\b|marketplace|online-store/.test(
      hay
    )
  ) {
    return "ecommerce";
  }
  if (
    /ios-|android-|mobile-app|iphone|flutter|react-native|play-store|app-store/.test(
      hay
    )
  ) {
    return "mobile";
  }
  if (
    /ai-|chatgpt|claude|gemini|gpt-|openai|llm|anthropic|perplexity|agentforce/.test(
      hay
    )
  ) {
    return "ai";
  }
  if (/crm|erp|mlm|salesforce|direct-selling/.test(hay)) return "crm";
  if (/ui-ux|ux-design|hindi-indic/.test(hay)) return "uiux";
  if (/branding|trademark|logo/.test(hay)) return "branding";
  if (
    /seo|google-ads|digital-marketing|ai-overviews|search-console/.test(hay)
  ) {
    return "marketing";
  }
  if (
    /software|gst|einvoice|dpdp|consent-manager|webhook|saas|nextjs|devops/.test(
      hay
    )
  ) {
    return "software";
  }
  return "website";
}

export function trafficServiceCtaHtml(slug) {
  if (BLOCKS[slug]) return BLOCKS[slug];
  const cluster = defaultCtaCluster(slug);
  if (cluster === "website") return websiteDefaultBlock(slug);
  return DEFAULT_BLOCKS[cluster] || websiteDefaultBlock(slug);
}

export function withTrafficServiceCta(slug, html) {
  const block = trafficServiceCtaHtml(slug);
  if (!block) return html || "";
  const source = String(html || "");
  if (source.includes("Built by TheTriFusion")) return source;
  return `${source.trimEnd()}\n${block}`;
}
