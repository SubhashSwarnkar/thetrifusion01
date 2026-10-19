#!/usr/bin/env node
/**
 * Post-build SEO smoke checks against a running Next server.
 * Usage: BASE_URL=http://127.0.0.1:3000 node scripts/seo-audit.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { XMLParser } from "./seo-audit-xml.mjs";

const INDEXNOW_KEY = fs
  .readdirSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../public"))
  .find((name) => /^[a-f0-9]{32}\.txt$/i.test(name))
  ?.replace(/\.txt$/i, "");

const BASE_URL = (process.env.BASE_URL || "http://127.0.0.1:3000").replace(
  /\/$/,
  ""
);
const MAX_PAGES = Number(process.env.SEO_AUDIT_MAX || 40);
const WWW_HOST = "thetrifusion.in";

const failures = [];
const warnings = [];

function fail(msg) {
  failures.push(msg);
  console.error(`FAIL: ${msg}`);
}

function warn(msg) {
  warnings.push(msg);
  console.warn(`WARN: ${msg}`);
}

function ok(msg) {
  console.log(`OK: ${msg}`);
}

async function fetchText(url) {
  const res = await fetch(url, {
    redirect: "manual",
    headers: { "user-agent": "TheTriFusion-SEO-Audit/1.0" },
  });
  const text = await res.text();
  return { res, text };
}

function countMatches(html, re) {
  return (html.match(re) || []).length;
}

function extractMeta(html, name) {
  const named = html.match(
    new RegExp(
      `<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']+)["']`,
      "i"
    )
  );
  if (named) return named[1];
  const reverse = html.match(
    new RegExp(
      `<meta[^>]+content=["']([^"']+)["'][^>]+(?:name|property)=["']${name}["']`,
      "i"
    )
  );
  return reverse ? reverse[1] : null;
}

function extractCanonical(html) {
  const m = html.match(
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i
  );
  if (m) return m[1];
  const m2 = html.match(
    /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i
  );
  return m2 ? m2[1] : null;
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return m ? m[1].trim() : null;
}

function extractJsonLd(html) {
  const blocks = [];
  const re =
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html))) {
    blocks.push(match[1]);
  }
  return blocks;
}

async function auditPage(url) {
  const { res, text } = await fetchText(url);
  if (res.status !== 200) {
    fail(`${url} returned ${res.status}`);
    return;
  }

  const title = extractTitle(text);
  const description = extractMeta(text, "description");
  const robots = extractMeta(text, "robots") || "";
  const canonical = extractCanonical(text);
  const h1Count = countMatches(text, /<h1[\s>]/gi);
  const ogImage = extractMeta(text, "og:image");

  if (!title) fail(`${url} missing <title>`);
  if (!description) fail(`${url} missing meta description`);
  if (!canonical) fail(`${url} missing canonical`);
  if (h1Count === 0) {
    warn(`${url} has no H1 (may be client-rendered)`);
  } else if (h1Count !== 1) {
    warn(`${url} expected 1 H1, found ${h1Count}`);
  }

  if (canonical) {
    try {
      const c = new URL(canonical);
      if (c.hostname !== WWW_HOST && !c.hostname.includes("localhost")) {
        fail(`${url} canonical host is ${c.hostname}, expected ${WWW_HOST}`);
      }
    } catch {
      fail(`${url} invalid canonical: ${canonical}`);
    }
  }

  const isTool =
    /\/(estimate|planner|timeline|pricing\/calculator)(\/|$)/.test(url);
  if (isTool) {
    if (!/noindex/i.test(robots)) {
      warn(`${url} tool route should include noindex`);
    }
  } else if (/noindex/i.test(robots)) {
    fail(`${url} unexpectedly noindex`);
  }

  const jsonLdBlocks = extractJsonLd(text);
  for (const block of jsonLdBlocks) {
    try {
      JSON.parse(block);
    } catch {
      fail(`${url} has invalid JSON-LD`);
    }
  }

  if (ogImage && ogImage.startsWith("http")) {
    try {
      const ogRes = await fetch(ogImage, { method: "HEAD", redirect: "follow" });
      if (!ogRes.ok) {
        warn(`${url} og:image not reachable (${ogRes.status}): ${ogImage}`);
      }
    } catch {
      warn(`${url} og:image fetch failed: ${ogImage}`);
    }
  }

  ok(url);
}

async function main() {
  console.log(`SEO audit against ${BASE_URL}`);

  const sitemapUrl = `${BASE_URL}/sitemap.xml`;
  const { res, text } = await fetchText(sitemapUrl);
  if (res.status !== 200) {
    fail(`sitemap.xml returned ${res.status}`);
    process.exit(1);
  }

  const parser = new XMLParser();
  let pageLocs = [];
  // Former blocklist / offtopic / geo-template URLs must be in the sitemap
  // again. Only 308 duplicates and archive 301s stay out.
  const RESTORED_BLOGS = [
    "/blog/ecommerce-website-for-nigerian-smes-2026",
    "/blog/ios-27-siri-ai-business-apps-uk-australia",
    "/blog/hire-dedicated-developers-cost-guide-uk-australia",
    "/blog/shopify-plus-vs-custom-ecommerce-uk-canada",
    "/blog/ev-charging-csms-uk-europe-cpo-guide",
    "/blog/pwn2own-ireland-2026-security-lessons-for-businesses",
    "/blog/opus-5-5-ai-model-whats-known",
    "/blog/gpt-6-astra-whats-known-vs-rumor",
    "/blog/reflection-beam-open-weight-ai-model-whats-known",
    "/blog/flutter-vs-react-native-2024",
    "/blog/f1-singapore-grand-prix-2026-race-day-guide",
    "/blog/india-vs-west-indies-2nd-t20i-ranchi-9-oct-2026",
    "/blog/thanksgiving-2026-date-us-ist-guide",
  ];
  const STAY_OUT_BLOGS = [
    "/blog/iphone-18-india-features-apps-businesses",
    "/blog/generative-ai-revolution",
  ];
  // Published post that PR #57's allowlist dropped from the sitemap.
  const MUST_INDEX_BLOG = "/blog/emsp-vs-cpo-software-stack-buyer-guide";

  if (/<sitemapindex/i.test(text)) {
    const childLocs = parser.extractLocs(text);
    if (!childLocs.length) {
      fail("sitemap.xml index had no child <loc> entries");
      process.exit(1);
    }
    ok(`sitemap.xml is a sitemap index (${childLocs.length} children)`);
    const childPaths = childLocs.map((child) => {
      try {
        return new URL(child, BASE_URL).pathname;
      } catch {
        return child;
      }
    });
    if (!childPaths.some((p) => p === "/sitemap-pages.xml")) {
      fail("sitemap index missing /sitemap-pages.xml");
    }
    if (!childPaths.some((p) => p === "/sitemap-services.xml")) {
      fail("sitemap index missing /sitemap-services.xml");
    }
    if (!childPaths.some((p) => p === "/sitemap-solutions.xml")) {
      fail("sitemap index missing /sitemap-solutions.xml");
    }
    if (!childPaths.some((p) => /^\/sitemap-blog(\-\d+)?\.xml$/.test(p))) {
      fail("sitemap index missing sitemap-blog.xml");
    }
    for (const child of childLocs) {
      let childUrl = child;
      let childPath = child;
      try {
        const parsed = new URL(child);
        childUrl = `${BASE_URL}${parsed.pathname}${parsed.search}`;
        childPath = parsed.pathname;
      } catch {
        // keep
      }
      const childRes = await fetchText(childUrl);
      if (childRes.res.status !== 200) {
        fail(`${childUrl} returned ${childRes.res.status}`);
        continue;
      }
      if (!/<urlset/i.test(childRes.text)) {
        fail(`${childUrl} is not a urlset`);
      }
      const locs = parser.extractLocs(childRes.text);
      if (locs.length > 1000) {
        fail(`${childPath} has ${locs.length} URLs; split at 1000`);
      }
      if (/^\/sitemap-blog(\-\d+)?\.xml$/.test(childPath)) {
        const urlBlocks = childRes.text.match(/<url>[\s\S]*?<\/url>/gi) || [];
        const missingLastmod = urlBlocks.find((block) => !/<lastmod>/i.test(block));
        if (missingLastmod) {
          fail(`${childPath} blog entry is missing <lastmod>`);
        }
      }
      pageLocs.push(...locs);
    }
  } else {
    pageLocs = parser.extractLocs(text);
  }

  const unique = [...new Set(pageLocs)];
  if (!unique.length) {
    fail("No URLs found in sitemap");
    process.exit(1);
  }
  if (unique.length < 40) {
    fail(`sitemap has ${unique.length} URLs; expected at least 40`);
  } else if (unique.length > 50000) {
    fail(`sitemap has ${unique.length} URLs; over the 50,000 cap`);
  } else {
    ok(`Found ${unique.length} sitemap page URLs`);
  }

  const blogPaths = unique
    .map((u) => {
      try {
        return new URL(u, BASE_URL).pathname;
      } catch {
        return "";
      }
    })
    .filter((p) => p.startsWith("/blog/"));
  if (blogPaths.length < 400) {
    fail(
      `sitemap-blog has ${blogPaths.length} URLs; restored posts should be indexed by default`
    );
  } else {
    ok(`Found ${blogPaths.length} indexable blog URLs`);
  }

  const localeHit = unique.find((u) =>
    /\/(es|pt|ar|id|hi)(\/|$)/.test(new URL(u, BASE_URL).pathname)
  );
  if (localeHit) fail(`locale URL still in sitemap: ${localeHit}`);

  const paidEcommerce = unique.find((u) =>
    /\/ecommerce-development(\/|$)/.test(new URL(u, BASE_URL).pathname)
  );
  if (paidEcommerce) fail(`paid ecommerce URL still in sitemap: ${paidEcommerce}`);

  if (!unique.some((u) => new URL(u, BASE_URL).pathname === MUST_INDEX_BLOG)) {
    fail(`sitemap missing previously indexable post ${MUST_INDEX_BLOG}`);
  }

  for (const path of RESTORED_BLOGS) {
    if (!unique.some((u) => new URL(u, BASE_URL).pathname === path)) {
      fail(`restored blog missing from sitemap: ${path}`);
    }
  }
  for (const path of STAY_OUT_BLOGS) {
    if (unique.some((u) => new URL(u, BASE_URL).pathname === path)) {
      fail(`redirected or archived blog still in sitemap: ${path}`);
    }
  }

  const required = [
    "/solutions/ecommerce-website-development",
    "/services/fintech-app-development/bbps-software",
    "/services/fintech-app-development/aeps-software",
    "/services/fintech-app-development/dmt-software",
    "/services/fintech-app-development/recharge-software",
    "/sitemap",
    "/blog/dpdp-consent-manager-software-india-2026",
    "/blog/gst-einvoice-custom-software-india-2026",
    "/blog/google-ai-overviews-indian-business-websites-2026",
    "/blog/dpdp-privacy-notice-indian-website-2026",
    "/blog/whatsapp-business-ai-vs-custom-chatbot-india",
    "/blog/hindi-indic-ui-ux-design-india-2026",
    "/blog/d2c-branding-trademark-india-festive-2026",
    "/blog/hire-dedicated-developers-india-cost-2026",
    "/blog/google-ai-overviews-seo-india-2026",
    "/blog/festive-ecommerce-website-india-ondc-2026",
    "/blog/uipath-agentic-rpa-india-sme-2026",
    "/blog/salesforce-india-innovation-series-delhi-2026",
    "/blog/gstn-rcm-self-invoice-modernize-india-2026",
    "/blog/direct-selling-crm-india-adsei-2026",
    "/blog/odisha-pm-edrive-cpo-csms-india-2026",
    "/blog/upi-mdr-recharge-software-india-2026",
    "/blog/hire-developers-gstn-sandbox-india-2026",
    "/blog/ecommerce-amendment-rules-india-2027",
    "/blog/google-ads-automated-promotions-india-2026",
    "/blog/gstn-rcm-einvoice-software-india-2026",
    "/blog/automation-anywhere-bengaluru-rpa-india-2026",
    "/blog/salesforce-india-md-agentforce-sme-2026",
    "/blog/gst-council-57-ims-modernize-india-2026",
    "/blog/google-official-site-indian-business-website-2026",
    "/blog/mlm-crm-gst-ims-payouts-india-2026",
    "/blog/pm-edrive-8147-chargers-csms-india-2026",
    "/blog/d2c-own-store-festive-shipments-india-2026",
    "/blog/google-ai-overviews-ads-festive-india-2026",
    "/blog/bbps-neft-corporate-recharge-panel-india-2026",
    "/blog/meity-ai-consultation-custom-ai-india-2026",
    "/blog/uipath-ai-trust-layer-audit-off-rpa-india-2026",
    "/blog/salesforce-hunter-piper-agents-sme-india-2026",
    "/blog/gst-1-nov-inverted-duty-modernize-india-2026",
    "/blog/tcs-ai-hiring-on-demand-developers-india-2026",
    "/blog/dpdp-guardian-consent-mlm-crm-india-2026",
    "/blog/jiobp-kia-roaming-csms-india-2026",
    "/blog/dussehra-delivery-own-store-ecommerce-india-2026",
    "/blog/dussehra-ai-max-festive-ads-india-2026",
    "/blog/cert-in-payment-api-recharge-panel-india-2026",
    "/blog/tcs-manageengine-sovereign-cloud-software-india-2026",
    "/blog/chatgpt-1980s-ai-photo-prompt-guide",
    "/blog/neet-pg-result-2026-how-to-check",
    "/blog/motorola-signature-27-india-whats-known",
    "/blog/portugal-vs-wales-nations-league-why-trending",
    "/blog/sbi-po-mains-result-2026-how-to-check",
    "/blog/afghanistan-vs-japan-asian-games-cricket-explained",
    "/blog/23-september-2026-why-trending-india",
    "/blog/nse-listing-date-how-ipo-listing-works-india",
    "/blog/ocpi-roaming-explained-cpo-emsp",
    "/blog/website-development-cost-india-2026",
    "/blog/mobile-app-development-cost-india-2026",
    "/blog/ecommerce-website-packages-cost-india-2026",
    "/blog/software-development-cost-india-2026",
    "/blog/bbps-aeps-recharge-software-cost-india-2026",
    "/blog/how-to-choose-website-software-company-jaipur-india-2026",
    "/solutions/website-development-company-jaipur",
    "/solutions/custom-software-development-jaipur",
    "/solutions/mobile-app-development-company-jaipur",
    "/solutions/ecommerce-website-development-jaipur",
    "/solutions/digital-marketing-company-jaipur",
    "/solutions/fintech-app-development-jaipur",
    "/services/website-development",
    "/services/software-development",
    "/services/digital-marketing",
  ];
  for (const path of required) {
    if (!unique.some((u) => new URL(u, BASE_URL).pathname === path)) {
      fail(`sitemap missing ${path}`);
    }
  }

  const urls = unique.slice(0, MAX_PAGES);

  // Rewrite production hosts to local base for CI
  const localUrls = urls.map((u) => {
    try {
      const parsed = new URL(u);
      return `${BASE_URL}${parsed.pathname}${parsed.search}`;
    } catch {
      return u;
    }
  });

  for (const url of localUrls) {
    await auditPage(url);
  }

  const extraRequiredPaths = required.filter(
    (path) => !localUrls.includes(`${BASE_URL}${path}`)
  );
  for (const path of extraRequiredPaths) {
    await auditPage(`${BASE_URL}${path}`);
  }

  // Spot-check tool noindex pages even if omitted from sitemap
  for (const path of ["/estimate", "/planner", "/timeline", "/pricing/calculator"]) {
    await auditPage(`${BASE_URL}${path}`);
  }

  if (!INDEXNOW_KEY) {
    fail("IndexNow key file missing from public/ (32-hex .txt)");
  } else {
    const keyUrl = `${BASE_URL}/${INDEXNOW_KEY}.txt`;
    const keyRes = await fetchText(keyUrl);
    if (keyRes.res.status !== 200) {
      fail(`IndexNow key ${keyUrl} returned ${keyRes.res.status}`);
    } else if (keyRes.text.trim() !== INDEXNOW_KEY) {
      fail("IndexNow key file body does not match the filename");
    } else {
      ok(`IndexNow key file live at /${INDEXNOW_KEY}.txt`);
    }
  }

  // GSC picked www as canonical for these money URLs — fail if we emit www.
  for (const path of [
    "/solutions/ecommerce-website-development",
    "/services/digital-marketing",
  ]) {
    const url = `${BASE_URL}${path}`;
    const { text } = await fetchText(url);
    const canonical = extractCanonical(text);
    if (!canonical) {
      fail(`${path} missing canonical`);
    } else if (!canonical.startsWith("https://thetrifusion.in/")) {
      fail(`${path} canonical is ${canonical}, expected https://thetrifusion.in/...`);
    } else if (canonical.includes("www.thetrifusion")) {
      fail(`${path} canonical still uses www: ${canonical}`);
    } else {
      ok(`${path} canonical is apex ${canonical}`);
    }
  }

  console.log(
    `\nDone. ${failures.length} failure(s), ${warnings.length} warning(s).`
  );
  if (failures.length) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
