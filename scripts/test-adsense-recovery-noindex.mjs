#!/usr/bin/env node
/**
 * Service-pages-first indexing guards:
 * - Off-topic trend/event posts: soft-noindex + omitted from sitemap-blog.
 * - Business posts stay index,follow and in the sitemap.
 * - Archive 301s and 308 duplicates stay out.
 *
 * Usage: node --import ./scripts/register-extensionless.mjs scripts/test-adsense-recovery-noindex.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  ADSENSE_RECOVERY_NOINDEX_SLUGS,
} from "../src/data/adsenseRecoveryNoindexSlugs.js";
import {
  ARCHIVE_NOINDEX_SLUGS,
  BLOG_CANONICAL_REDIRECTS,
  OFFTOPIC_NOINDEX_SLUGS,
  blogPosts,
  eventNoindexSlugList,
  getBlogBySlug,
  getPublishedBlogPosts,
  isIndexableBlogPost,
  isSoftNoindexBlogPost,
} from "../src/data/blogData.js";
import {
  isAdSenseExcludedPath,
  registerEventNoindexSlugs,
} from "../src/lib/adsensePaths.js";
import { isLeadPopupEligiblePath } from "../src/lib/leadPopupGate.js";
import { allSitemapEntries, buildSitemapParts } from "../src/lib/sitemaps.js";
import { isNoindexCitySolutionSlug } from "../src/data/cityLandingRobots.js";
import { withTrafficServiceCta } from "../src/data/trafficServiceLinks.js";
import { services } from "../src/data/servicesData.js";
import { fintechProductPages } from "../src/data/fintechProductPages.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

function fail(message) {
  failures.push(message);
}

function readLines(relativePath) {
  return fs
    .readFileSync(path.join(root, relativePath), "utf8")
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

const b1 = readLines("scripts/fixtures/B1-event-slugs-142.txt");
const publishedSlugs = new Set(getPublishedBlogPosts().map((post) => post.slug));
registerEventNoindexSlugs(eventNoindexSlugList());

const sitemapUrls = allSitemapEntries().map((entry) => entry.url);
const sitemapBlogSlugs = new Set();
for (const url of sitemapUrls) {
  const match = url.match(/\/blog\/([a-z0-9-]+)\/?$/);
  if (match) sitemapBlogSlugs.add(match[1]);
}

const expectedArchive = [
  "generative-ai-revolution",
  "web3-decentralized-future",
  "quantum-computing-leap",
  "cybersecurity-zero-trust",
  "rise-of-edge-computing",
  "green-tech-sustainable-coding",
  "5g-6g-connectivity",
  "metaverse-business-impact",
  "rust-programming-rise",
  "future-of-devops",
  "fintech-embedded-finance",
  "ethical-ai-challenges",
  "cloud-native-security",
  "low-code-no-code",
  "biotech-crispr-software",
  "autonomous-vehicles-status",
  "smart-cities-iot",
  "space-tech-commercial",
];

if (ARCHIVE_NOINDEX_SLUGS.size !== expectedArchive.length) {
  fail(`ARCHIVE_NOINDEX_SLUGS size ${ARCHIVE_NOINDEX_SLUGS.size}`);
}
for (const slug of expectedArchive) {
  if (!ARCHIVE_NOINDEX_SLUGS.has(slug)) fail(`archive set missing ${slug}`);
  if (sitemapBlogSlugs.has(slug)) fail(`archive slug still in sitemap: ${slug}`);
  if (publishedSlugs.has(slug)) fail(`archive slug still published: ${slug}`);
}

if (OFFTOPIC_NOINDEX_SLUGS.size < 200) {
  fail(
    `OFFTOPIC_NOINDEX_SLUGS too small (${OFFTOPIC_NOINDEX_SLUGS.size}); expected ~260+`
  );
}
if (ADSENSE_RECOVERY_NOINDEX_SLUGS.size !== 0) {
  fail(
    `ADSENSE_RECOVERY_NOINDEX_SLUGS must be empty, got ${ADSENSE_RECOVERY_NOINDEX_SLUGS.size}`
  );
}

const localePage = fs.readFileSync(
  path.join(root, "src/app/[lang]/blog/[slug]/page.js"),
  "utf8"
);
if (!localePage.includes("noIndex: isSoftNoindexBlogPost(source)")) {
  fail("locale blog routes must set noIndex from isSoftNoindexBlogPost");
}

const seen = new Set();
const uniquePosts = [];
for (const post of blogPosts) {
  if (seen.has(post.slug)) continue;
  seen.add(post.slug);
  uniquePosts.push(post);
}

if (b1.length !== 142) fail(`B1 fixture has ${b1.length} slugs, expected 142`);

for (const slug of b1) {
  const post = getBlogBySlug(slug);
  if (!post) {
    fail(`B1 slug missing from blog posts: ${slug}`);
    continue;
  }
  if (!post.event) fail(`B1 slug is not an event post: ${slug}`);
  // Off-topic event posts must be soft-noindex; business event posts stay indexed.
  if (OFFTOPIC_NOINDEX_SLUGS.has(slug)) {
    if (!isSoftNoindexBlogPost(post)) fail(`B1 offtopic not soft-noindex: ${slug}`);
    if (isIndexableBlogPost(post)) fail(`B1 offtopic still indexable: ${slug}`);
    if (sitemapBlogSlugs.has(slug)) fail(`B1 offtopic still in sitemap: ${slug}`);
    if (publishedSlugs.has(slug)) fail(`B1 offtopic still published: ${slug}`);
  } else {
    if (isSoftNoindexBlogPost(post)) fail(`B1 business slug is noindex: ${slug}`);
    if (!isIndexableBlogPost(post)) fail(`B1 business slug not indexable: ${slug}`);
    if (!publishedSlugs.has(slug)) fail(`B1 business slug missing from hub: ${slug}`);
    if (!sitemapBlogSlugs.has(slug)) fail(`B1 business slug missing from sitemap: ${slug}`);
  }
}

for (const slug of OFFTOPIC_NOINDEX_SLUGS) {
  const post = getBlogBySlug(slug);
  if (!post) {
    fail(`offtopic slug missing from blog posts: ${slug}`);
    continue;
  }
  if (!isSoftNoindexBlogPost(post)) fail(`offtopic not soft-noindex: ${slug}`);
  if (isIndexableBlogPost(post)) fail(`offtopic still indexable: ${slug}`);
  if (sitemapBlogSlugs.has(slug)) fail(`offtopic still in sitemap: ${slug}`);
  if (publishedSlugs.has(slug)) fail(`offtopic still in published hub: ${slug}`);
}

const mustStayIndexed = [
  "ev-charging-csms-india-cpo-guide",
  "upi-charges-in-india-2026-complete-guide",
  "ecommerce-website-development-cost-india",
  "software-development-cost-india-2026",
  "android-app-development-company-jaipur",
  "mlm-crm-unilevel-compensation-plan",
  "bbps-aeps-recharge-software-cost-india-2026",
];
for (const slug of mustStayIndexed) {
  const post = getBlogBySlug(slug);
  if (!post) {
    fail(`business keeper missing: ${slug}`);
    continue;
  }
  if (OFFTOPIC_NOINDEX_SLUGS.has(slug)) fail(`business keeper marked offtopic: ${slug}`);
  if (!isIndexableBlogPost(post)) fail(`business keeper not indexable: ${slug}`);
  if (!sitemapBlogSlugs.has(slug)) fail(`business keeper missing from sitemap: ${slug}`);
}

for (const [slug, target] of Object.entries(BLOG_CANONICAL_REDIRECTS)) {
  if (isIndexableBlogPost(getBlogBySlug(slug))) {
    fail(`308 duplicate is indexable: ${slug}`);
  }
  if (sitemapBlogSlugs.has(slug)) fail(`308 duplicate still in sitemap: ${slug}`);
  if (!sitemapBlogSlugs.has(target) && !OFFTOPIC_NOINDEX_SLUGS.has(target)) {
    fail(`308 canonical target missing from sitemap: ${target}`);
  }
}

let indexedLive = 0;
for (const post of uniquePosts) {
  const isArchive = ARCHIVE_NOINDEX_SLUGS.has(post.slug);
  const isRedirect = Boolean(BLOG_CANONICAL_REDIRECTS[post.slug]);
  if (isArchive || isRedirect) {
    if (isIndexableBlogPost(post)) fail(`excluded slug became indexable: ${post.slug}`);
    if (isSoftNoindexBlogPost(post)) fail(`301/308 slug is soft-noindex: ${post.slug}`);
    continue;
  }
  if (OFFTOPIC_NOINDEX_SLUGS.has(post.slug)) {
    if (!isSoftNoindexBlogPost(post)) fail(`offtopic live post not soft-noindex: ${post.slug}`);
    continue;
  }
  if (isSoftNoindexBlogPost(post)) fail(`business post is soft-noindex: ${post.slug}`);
  if (!isIndexableBlogPost(post)) fail(`business post is not indexable: ${post.slug}`);
  if (!publishedSlugs.has(post.slug)) fail(`business post not in hub: ${post.slug}`);
  if (!sitemapBlogSlugs.has(post.slug)) fail(`business post missing from sitemap: ${post.slug}`);
  const html = withTrafficServiceCta(post.slug, post.content || "");
  if (!html.includes("Built by TheTriFusion")) {
    fail(`business post missing Built-by CTA: ${post.slug}`);
  }
  indexedLive += 1;
}

// --- Service-pages-first checks ---
const parts = buildSitemapParts();
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
  if (page.contentUpdatedAt !== "2026-10-25") {
    fail(`fintech product lastmod not 2026-10-25: ${page.slug}`);
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
  "/services/fintech-app-development",
  "/services/fintech-app-development/bbps-software",
  "/services/fintech-app-development/aeps-software",
  "/services/fintech-app-development/dmt-software",
  "/services/fintech-app-development/recharge-software",
];
for (const pathName of requiredServicePaths) {
  if (!servicePaths.has(pathName)) fail(`priority service missing from sitemap: ${pathName}`);
}

const ecommerceInSolutions = parts.solutions.some((entry) =>
  entry.url.endsWith("/solutions/ecommerce-website-development")
);
if (!ecommerceInSolutions) {
  fail("ecommerce-website-development missing from solutions sitemap");
}

const samples = [
  ["/blog/liverpool-vs-man-city-11-oct-2026-preview", true],
  ["/es/blog/liverpool-vs-man-city-11-oct-2026-preview", true],
  ["/blog/ev-charging-csms-ireland-cpo-guide", false],
  ["/blog/ev-charging-csms-india-cpo-guide", false],
  ["/services/ev-charging-app-development", false],
  ["/", false],
  ["/contact", true],
];
for (const [samplePath, expectExcluded] of samples) {
  const excluded = isAdSenseExcludedPath(samplePath);
  if (Boolean(excluded) !== expectExcluded) {
    fail(
      `AdSense exclusion for ${samplePath}: got ${excluded}, expected ${expectExcluded}`
    );
  }
}

if (!isLeadPopupEligiblePath("/contact")) fail("contact should allow lead popup");
if (isLeadPopupEligiblePath("/blog/ev-charging-csms-india-cpo-guide")) {
  fail("blog paths must not show lead popup");
}

if (failures.length) {
  console.error("FAIL");
  for (const message of failures) console.error(` - ${message}`);
  process.exit(1);
}

console.log(
  `OK offtopic=${OFFTOPIC_NOINDEX_SLUGS.size} indexedBlogs=${indexedLive} services=${servicePaths.size}`
);
