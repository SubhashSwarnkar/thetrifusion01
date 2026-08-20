#!/usr/bin/env node
/**
 * Post-build SEO smoke checks against a running Next server.
 * Usage: BASE_URL=http://127.0.0.1:3000 node scripts/seo-audit.mjs
 */
import { XMLParser } from "./seo-audit-xml.mjs";

const BASE_URL = (process.env.BASE_URL || "http://127.0.0.1:3000").replace(
  /\/$/,
  ""
);
const MAX_PAGES = Number(process.env.SEO_AUDIT_MAX || 40);
const WWW_HOST = "www.thetrifusion.in";

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
  const urls = parser.extractLocs(text).slice(0, MAX_PAGES);

  if (!urls.length) {
    fail("No URLs found in sitemap");
    process.exit(1);
  }

  ok(`Found ${urls.length} sitemap URLs (capped at ${MAX_PAGES})`);

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

  // Spot-check tool noindex pages even if omitted from sitemap
  for (const path of ["/estimate", "/planner", "/timeline", "/pricing/calculator"]) {
    await auditPage(`${BASE_URL}${path}`);
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
