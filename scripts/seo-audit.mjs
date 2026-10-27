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
    if (childPaths.length !== 3) {
      fail(`sitemap index should have 3 children, got ${childPaths.length}`);
    }
    if (!childPaths.some((p) => p === "/sitemap-pages.xml")) {
      fail("sitemap index missing /sitemap-pages.xml");
    }
    if (!childPaths.some((p) => p === "/sitemap-services.xml")) {
      fail("sitemap index missing /sitemap-services.xml");
    }
    if (!childPaths.some((p) => p === "/sitemap-solutions.xml")) {
      fail("sitemap index missing /sitemap-solutions.xml");
    }
    if (childPaths.some((p) => /^\/sitemap-blog(\-\d+)?\.xml$/.test(p))) {
      fail("sitemap index still lists sitemap-blog (blogs removed)");
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
  if (unique.length < 30) {
    fail(`sitemap has ${unique.length} URLs; expected at least 30`);
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
    .filter((p) => p === "/blog" || p.startsWith("/blog/"));
  if (blogPaths.length) {
    fail(`sitemap still contains blog URLs (${blogPaths.length})`);
  } else {
    ok("No blog URLs in sitemap");
  }

  const localeHit = unique.find((u) =>
    /\/(es|pt|ar|id|hi)(\/|$)/.test(new URL(u, BASE_URL).pathname)
  );
  if (localeHit) fail(`locale URL still in sitemap: ${localeHit}`);

  const paidEcommerce = unique.find((u) =>
    /\/ecommerce-development(\/|$)/.test(new URL(u, BASE_URL).pathname)
  );
  if (paidEcommerce) fail(`paid ecommerce URL still in sitemap: ${paidEcommerce}`);

  const REDIRECTED_STATIC = [
    "/web-development",
    "/android-app-development",
    "/ios-app-development",
    "/ecommerce-development",
  ];
  for (const path of REDIRECTED_STATIC) {
    if (unique.some((u) => new URL(u, BASE_URL).pathname === path)) {
      fail(`redirected static path still in sitemap: ${path}`);
    }
  }

  const required = [
    "/solutions/ecommerce-website-development",
    "/services/fintech-app-development/bbps-software",
    "/services/fintech-app-development/aeps-software",
    "/services/fintech-app-development/dmt-software",
    "/services/fintech-app-development/recharge-software",
    "/sitemap",
    "/solutions/website-development-company-jaipur",
    "/solutions/custom-software-development-jaipur",
    "/solutions/mobile-app-development-company-jaipur",
    "/solutions/ecommerce-website-development-jaipur",
    "/solutions/digital-marketing-company-jaipur",
    "/solutions/fintech-app-development-jaipur",
    "/services/website-development",
    "/services/software-development",
    "/services/digital-marketing",
    "/services/mobile-app-development",
    "/services/fintech-app-development",
    "/contact",
    "/about",
    "/pricing",
  ];
  for (const path of required) {
    if (!unique.some((u) => new URL(u, BASE_URL).pathname === path)) {
      fail(`sitemap missing ${path}`);
    }
  }

  const removedCities = [
    "/solutions/website-development-company-delhi",
    "/solutions/website-development-company-mumbai",
    "/solutions/software-development-company-delhi",
    "/solutions/mobile-app-development-company-bangalore",
    "/solutions/ecommerce-website-development-mumbai",
    "/solutions/digital-marketing-company-jodhpur",
    "/solutions/fintech-app-development-delhi",
    "/solutions/website-development-company-bhilwara",
  ];
  for (const path of removedCities) {
    if (unique.some((u) => new URL(u, BASE_URL).pathname === path)) {
      fail(`removed city page still in sitemap: ${path}`);
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

  const homeHtml = (await fetchText(`${BASE_URL}/`)).text;
  if (!/"@type":\s*"Person"/i.test(homeHtml) || !/Amardeep/.test(homeHtml)) {
    fail("homepage JSON-LD missing Person schema for Amardeep");
  } else {
    ok("homepage JSON-LD includes Person Amardeep");
  }
  if (!/wa\.me\/916378133780/.test(homeHtml)) {
    fail("homepage JSON-LD missing WhatsApp contactPoint");
  } else {
    ok("homepage JSON-LD includes WhatsApp contactPoint");
  }
  if (
    !/linkedin\.com\/company\/the-trifusion/.test(homeHtml) ||
    !/instagram\.com\/thetrifusion/.test(homeHtml)
  ) {
    fail("homepage JSON-LD missing Organization sameAs social profiles");
  } else {
    ok("homepage JSON-LD includes LinkedIn and Instagram sameAs");
  }

  // Blogs removed: hub + sample posts must be 410 Gone (not soft-404 via 301).
  for (const path of [
    "/blog",
    "/blog-1",
    "/blog/website-development-cost-india-2026",
    "/blog/generative-ai-revolution",
    "/blog/f1-singapore-grand-prix-2026-race-day-guide",
  ]) {
    const { res } = await fetchText(`${BASE_URL}${path}`);
    if (res.status !== 410) {
      fail(`${path} should be 410 Gone, got ${res.status}`);
    } else {
      ok(`${path} → 410`);
    }
  }

  const blogSitemap = await fetchText(`${BASE_URL}/sitemap-blog.xml`);
  if (blogSitemap.res.status !== 410) {
    fail(`sitemap-blog.xml should be 410, got ${blogSitemap.res.status}`);
  } else {
    ok("sitemap-blog.xml → 410");
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
    "/services/website-development",
    "/solutions/website-development-company-jaipur",
  ]) {
    const url = `${BASE_URL}${path}`;
    const { text: pageText } = await fetchText(url);
    const canonical = extractCanonical(pageText);
    const ogUrl = extractMeta(pageText, "og:url");
    if (!canonical) {
      fail(`${path} missing canonical`);
    } else if (!canonical.startsWith("https://thetrifusion.in")) {
      fail(`${path} canonical is ${canonical}, expected https://thetrifusion.in/...`);
    } else if (canonical.includes("www.thetrifusion")) {
      fail(`${path} canonical still uses www: ${canonical}`);
    } else {
      ok(`${path} canonical is apex ${canonical}`);
    }
    if (ogUrl && (ogUrl.includes("www.thetrifusion") || !ogUrl.startsWith("https://thetrifusion.in"))) {
      fail(`${path} og:url is ${ogUrl}, expected apex`);
    } else if (ogUrl) {
      ok(`${path} og:url is apex`);
    }
    if (/https:\/\/www\.thetrifusion\.in/i.test(pageText)) {
      fail(`${path} HTML still contains hard-coded https://www.thetrifusion.in`);
    } else {
      ok(`${path} HTML has no hard-coded www host`);
    }
  }

  // Legacy ads landings must 301/308 to /services (not 200 + noindex).
  const legacyRedirects = [
    ["/web-development", "/services/website-development"],
    ["/android-app-development", "/services/android-app-development"],
    ["/ios-app-development", "/services/ios-app-development"],
    ["/ai-development", "/services/ai-development"],
    ["/graphic-design", "/services/graphic-design"],
    ["/solutions/website-development-company-delhi", "/services/website-development"],
    ["/solutions/website-development-company-mumbai", "/services/website-development"],
    ["/solutions/software-development-company-delhi", "/services/software-development"],
    ["/solutions/mobile-app-development-company-bangalore", "/services/mobile-app-development"],
    [
      "/solutions/ecommerce-website-development-mumbai",
      "/solutions/ecommerce-website-development",
    ],
    ["/solutions/digital-marketing-company-jodhpur", "/services/digital-marketing"],
    ["/solutions/fintech-app-development-delhi", "/services/fintech-app-development"],
    ["/solutions/website-development-company-bhilwara", "/services/website-development"],
  ];
  for (const [from, to] of legacyRedirects) {
    const { res } = await fetchText(`${BASE_URL}${from}`);
    const location = res.headers.get("location") || "";
    const okStatus = res.status === 301 || res.status === 308;
    const destPath = (() => {
      try {
        return new URL(location, BASE_URL).pathname;
      } catch {
        return location;
      }
    })();
    if (!okStatus) {
      fail(`${from} should permanently redirect, got ${res.status}`);
    } else if (destPath !== to) {
      fail(`${from} redirects to ${destPath || location}, expected ${to}`);
    } else {
      ok(`${from} → ${to} (${res.status})`);
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
