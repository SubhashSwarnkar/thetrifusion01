#!/usr/bin/env node
/**
 * Crawl-budget guards (legacy blogs unpublished + Jaipur-only city policy):
 * - Legacy blog modules stay unpublished; new Markdown blog hub is in sitemap-blog
 * - All /services/* + fintech products stay in sitemap-services
 * - Non-Jaipur city landings are redirected (in REDIRECTED_SOLUTION_SLUGS)
 * - Jaipur HQ solutions stay in sitemap-solutions
 * - Apex-only sitemap locs
 *
 * Usage: node --import ./scripts/register-extensionless.mjs scripts/test-adsense-recovery-noindex.mjs
 */
import {
  BLOGS_REMOVED_FROM_SITE,
  getPublishedBlogPosts,
  isIndexableBlogPost,
  blogPosts,
} from "../src/data/blogData.js";
import { allSitemapEntries, buildSitemapParts, childSitemapLocs } from "../src/lib/sitemaps.js";
import { isNoindexCitySolutionSlug } from "../src/data/cityLandingRobots.js";
import { CITY_SOLUTION_SERVICE_REDIRECTS } from "../src/lib/citySolutionRedirects.js";
import { REDIRECTED_SOLUTION_SLUGS } from "../src/lib/solutionRedirects.js";
import { services } from "../src/data/servicesData.js";
import { fintechProductPages } from "../src/data/fintechProductPages.js";
import { isLeadPopupEligiblePath } from "../src/lib/leadPopupGate.js";

const failures = [];

function fail(message) {
  failures.push(message);
}

if (!BLOGS_REMOVED_FROM_SITE) {
  fail("BLOGS_REMOVED_FROM_SITE must be true");
}

if (getPublishedBlogPosts().length !== 0) {
  fail(`published blogs should be empty, got ${getPublishedBlogPosts().length}`);
}

let indexed = 0;
for (const post of blogPosts) {
  if (isIndexableBlogPost(post)) {
    indexed += 1;
    fail(`blog still indexable: ${post.slug}`);
  }
}
if (indexed) fail(`${indexed} blogs still indexable`);

const parts = buildSitemapParts();
const sitemapUrls = allSitemapEntries().map((entry) => entry.url);

if (!parts.blog.some((entry) => entry.url.endsWith("/blog"))) {
  fail("sitemap blog part missing /blog hub");
}

const childLocs = childSitemapLocs();
if (childLocs.length !== 4) {
  fail(`expected 4 child sitemaps, got ${childLocs.length}: ${childLocs.join(", ")}`);
}
for (const id of ["pages", "services", "solutions", "blog"]) {
  if (!childLocs.some((loc) => loc.endsWith(`/sitemap-${id}.xml`))) {
    fail(`sitemap index missing sitemap-${id}.xml`);
  }
}

const blogInSitemap = sitemapUrls.filter((url) => /\/blog(\/|$)/.test(url));
if (!blogInSitemap.some((url) => url.endsWith("/blog"))) {
  fail("sitemap missing https://thetrifusion.in/blog");
}

const servicePaths = new Set(
  parts.services.map((entry) => entry.url.replace("https://thetrifusion.in", ""))
);
for (const service of services) {
  const pathName = `/services/${service.slug}`;
  if (!servicePaths.has(pathName)) fail(`service missing from sitemap: ${pathName}`);
  if (!service.contentUpdatedAt) fail(`service missing contentUpdatedAt: ${service.slug}`);
}
for (const page of fintechProductPages) {
  if (!servicePaths.has(page.path)) fail(`fintech product missing from sitemap: ${page.path}`);
  if (page.contentUpdatedAt !== "2026-11-25") {
    fail(`fintech product lastmod not 2026-11-25: ${page.slug}`);
  }
  const text = [
    page.answer,
    ...(page.sections || []).flatMap((section) => section.paragraphs || []),
    ...(page.faqs || []).flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words < 1200) fail(`fintech product too thin (${words} words): ${page.slug}`);
}

for (const url of sitemapUrls) {
  if (/www\.thetrifusion/i.test(url)) fail(`www URL in sitemap: ${url}`);
  if (!url.startsWith("https://thetrifusion.in")) {
    fail(`non-apex sitemap URL: ${url}`);
  }
}

for (const entry of parts.solutions) {
  const slug = entry.url.split("/solutions/")[1];
  if (slug && isNoindexCitySolutionSlug(slug)) {
    fail(`noindex city still in solutions sitemap: ${slug}`);
  }
  if (slug && REDIRECTED_SOLUTION_SLUGS.has(slug)) {
    fail(`redirected solution still in sitemap: ${slug}`);
  }
}

if (CITY_SOLUTION_SERVICE_REDIRECTS.length !== 28) {
  fail(
    `expected 28 non-Jaipur city redirects, got ${CITY_SOLUTION_SERVICE_REDIRECTS.length}`
  );
}
for (const item of CITY_SOLUTION_SERVICE_REDIRECTS) {
  if (!REDIRECTED_SOLUTION_SLUGS.has(item.slug)) {
    fail(`city redirect not in REDIRECTED_SOLUTION_SLUGS: ${item.slug}`);
  }
  if (parts.solutions.some((entry) => entry.url.endsWith(`/solutions/${item.slug}`))) {
    fail(`city page still in solutions sitemap: ${item.slug}`);
  }
}

const jaipurRequired = [
  "website-development-company-jaipur",
  "custom-software-development-jaipur",
  "mobile-app-development-company-jaipur",
  "ecommerce-website-development-jaipur",
  "digital-marketing-company-jaipur",
  "fintech-app-development-jaipur",
];
for (const slug of jaipurRequired) {
  if (!parts.solutions.some((entry) => entry.url.endsWith(`/solutions/${slug}`))) {
    fail(`Jaipur HQ missing from solutions sitemap: ${slug}`);
  }
}

const requiredServicePaths = [
  "/services/software-development",
  "/services/website-development",
  "/services/mobile-app-development",
  "/services/android-app-development",
  "/services/ios-app-development",
  "/services/ai-development",
  "/services/mlm-crm-development",
  "/services/digital-marketing",
  "/services/crm-erp-development",
  "/services/erp-software-development",
  "/services/fintech-app-development",
  "/services/fintech-app-development/bbps-software",
  "/services/fintech-app-development/aeps-software",
  "/services/fintech-app-development/dmt-software",
  "/services/fintech-app-development/recharge-software",
];
for (const pathName of requiredServicePaths) {
  if (!servicePaths.has(pathName)) fail(`priority service missing from sitemap: ${pathName}`);
}

if (
  !parts.solutions.some((entry) =>
    entry.url.endsWith("/solutions/ecommerce-website-development")
  )
) {
  fail("ecommerce-website-development missing from solutions sitemap");
}

// GSC duplicate-canonical money URLs must stay apex-only with fresh lastmods.
const gscMoneyUrls = [
  {
    part: "services",
    path: "/services/digital-marketing",
    lastmod: "2026-11-09",
  },
  {
    part: "solutions",
    path: "/solutions/ecommerce-website-development",
    lastmod: "2026-10-27",
  },
];
for (const item of gscMoneyUrls) {
  const entry = parts[item.part].find((row) => row.url.endsWith(item.path));
  if (!entry) {
    fail(`GSC money URL missing from sitemap-${item.part}: ${item.path}`);
    continue;
  }
  if (entry.url !== `https://thetrifusion.in${item.path}`) {
    fail(`GSC money URL not apex: ${entry.url}`);
  }
  const stamp = entry.lastModified?.toISOString?.().slice(0, 10);
  if (stamp !== item.lastmod) {
    fail(
      `GSC money URL lastmod ${stamp || "missing"} for ${item.path}, expected ${item.lastmod}`
    );
  }
}

if (!isLeadPopupEligiblePath("/contact")) fail("contact should allow lead popup");
if (isLeadPopupEligiblePath("/blog/any-slug")) {
  fail("blog paths must not show lead popup");
}

if (failures.length) {
  console.error("FAIL");
  for (const message of failures) console.error(` - ${message}`);
  process.exit(1);
}

console.log(
  `OK blogsRemoved=1 cityRedirects=${CITY_SOLUTION_SERVICE_REDIRECTS.length} services=${servicePaths.size} sitemapUrls=${sitemapUrls.length}`
);
