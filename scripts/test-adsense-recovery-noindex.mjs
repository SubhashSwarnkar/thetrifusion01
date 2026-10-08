#!/usr/bin/env node
/**
 * AdSense recovery: event posts and template duplicates are noindex,
 * out of the published hub, and absent from the sitemap.
 *
 * Usage: node --import ./scripts/register-extensionless.mjs scripts/test-adsense-recovery-noindex.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  ADSENSE_RECOVERY_KEPT_SLUGS,
  ADSENSE_RECOVERY_NOINDEX_SLUGS,
  keptSlugsForFamily,
} from "../src/data/adsenseRecoveryNoindexSlugs.js";
import {
  ARCHIVE_NOINDEX_SLUGS,
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
import { TRANSLATED_BLOG_SLUGS } from "../src/data/i18n/catalog.js";
import sitemap from "../src/app/sitemap.js";

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

function readFamilies(relativePath) {
  const lines = fs.readFileSync(path.join(root, relativePath), "utf8").split(/\n/);
  const header = lines.shift().split("\t");
  const rows = [];
  for (const line of lines) {
    if (!line.trim()) continue;
    const cells = line.split("\t");
    const row = {};
    header.forEach((key, index) => {
      row[key] = cells[index];
    });
    rows.push(row);
  }
  return rows;
}

const b1 = readLines("scripts/fixtures/B1-event-slugs-142.txt");
const families = readFamilies("scripts/fixtures/B3-template-families.tsv");
const publishedSlugs = new Set(getPublishedBlogPosts().map((post) => post.slug));
registerEventNoindexSlugs(eventNoindexSlugList());

const sitemapUrls = sitemap().map((entry) => entry.url);
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
}

const nextConfig = fs.readFileSync(path.join(root, "next.config.mjs"), "utf8");
const localePage = fs.readFileSync(
  path.join(root, "src/app/[lang]/blog/[slug]/page.js"),
  "utf8"
);
if (!localePage.includes("noIndex: isSoftNoindexBlogPost(source)")) {
  fail("locale blog routes must set noIndex from isSoftNoindexBlogPost");
}

const eventPosts = blogPosts.filter((post) => post.event);
const eventSlugs = new Set(eventPosts.map((post) => post.slug));

if (b1.length !== 142) fail(`B1 fixture has ${b1.length} slugs, expected 142`);

for (const slug of b1) {
  const post = getBlogBySlug(slug);
  if (!post) {
    fail(`B1 slug missing from blog posts: ${slug}`);
    continue;
  }
  if (!post.event) fail(`B1 slug is not an event post: ${slug}`);
  if (!isSoftNoindexBlogPost(post)) fail(`B1 slug is indexable: ${slug}`);
  if (publishedSlugs.has(slug)) fail(`B1 slug is still published: ${slug}`);
  if (sitemapBlogSlugs.has(slug)) fail(`B1 slug is still in the sitemap: ${slug}`);
  if (nextConfig.includes(`/blog/${slug}`)) {
    fail(`B1 slug was redirected in next.config: ${slug}`);
  }
}

for (const id of [432, 433]) {
  const post = blogPosts.find((item) => item.id === id);
  if (!post) fail(`post id ${id} is missing`);
  else if (!isSoftNoindexBlogPost(post)) fail(`post ${id} ${post.slug} is indexable`);
}

for (const post of eventPosts) {
  if (!isSoftNoindexBlogPost(post)) fail(`event post stayed indexable: ${post.slug}`);
  if (publishedSlugs.has(post.slug)) fail(`event post still published: ${post.slug}`);
  if (sitemapBlogSlugs.has(post.slug)) fail(`event post still in sitemap: ${post.slug}`);
  if (!b1.includes(post.slug)) fail(`event post missing from B1 fixture: ${post.slug}`);
}

const byFamily = new Map();
for (const row of families) {
  if (!byFamily.has(row.family)) byFamily.set(row.family, []);
  byFamily.get(row.family).push(row);
}

if (byFamily.size !== 8) fail(`expected 8 template families, found ${byFamily.size}`);
if (families.length !== 67) fail(`expected 67 template rows, found ${families.length}`);

const computedKept = new Set();
const computedNoindex = new Set();
const familyReport = [];

for (const [family, rows] of byFamily) {
  const kept = keptSlugsForFamily(family, rows);
  const keptSet = new Set(kept);
  for (const slug of kept) computedKept.add(slug);
  const noindex = rows.map((row) => row.slug).filter((slug) => !keptSet.has(slug));
  for (const slug of noindex) computedNoindex.add(slug);
  familyReport.push({ family, kept, noindex });

  if (family === "ev-charging-csms-X-cpo-guide" && kept.length !== 2) {
    fail(`${family} should keep 2 posts`);
  }
  if (family !== "ev-charging-csms-X-cpo-guide" && kept.length !== 1) {
    fail(`${family} should keep 1 post`);
  }
}

if (computedKept.size !== ADSENSE_RECOVERY_KEPT_SLUGS.size) {
  fail(
    `kept set size ${ADSENSE_RECOVERY_KEPT_SLUGS.size} != rule ${computedKept.size}`
  );
}
for (const slug of computedKept) {
  if (!ADSENSE_RECOVERY_KEPT_SLUGS.has(slug)) {
    fail(`rule keeps ${slug} but the exported set does not`);
  }
}
for (const slug of ADSENSE_RECOVERY_KEPT_SLUGS) {
  if (!computedKept.has(slug)) fail(`exported keeper is not chosen by the rule: ${slug}`);
  const post = getBlogBySlug(slug);
  if (!post) fail(`kept slug missing: ${slug}`);
  else if (!isIndexableBlogPost(post)) fail(`kept slug is not indexable: ${slug}`);
  else if (!publishedSlugs.has(slug)) fail(`kept slug missing from published posts: ${slug}`);
  else if (!sitemapBlogSlugs.has(slug)) fail(`kept slug missing from sitemap: ${slug}`);
  if (ADSENSE_RECOVERY_NOINDEX_SLUGS.has(slug)) fail(`kept slug is also noindexed: ${slug}`);
}

if (computedNoindex.size !== ADSENSE_RECOVERY_NOINDEX_SLUGS.size) {
  fail(
    `noindex set size ${ADSENSE_RECOVERY_NOINDEX_SLUGS.size} != rule ${computedNoindex.size}`
  );
}
for (const slug of ADSENSE_RECOVERY_NOINDEX_SLUGS) {
  if (!computedNoindex.has(slug)) {
    fail(`noindex slug is outside the template families: ${slug}`);
  }
  const post = getBlogBySlug(slug);
  if (!post) {
    fail(`noindex slug missing from posts: ${slug}`);
    continue;
  }
  if (!isSoftNoindexBlogPost(post)) fail(`template duplicate stayed indexable: ${slug}`);
  if (publishedSlugs.has(slug)) fail(`template duplicate still published: ${slug}`);
  if (sitemapBlogSlugs.has(slug)) fail(`template duplicate still in sitemap: ${slug}`);
  if (nextConfig.includes(`/blog/${slug}`)) {
    fail(`template duplicate was redirected: ${slug}`);
  }
  if (eventSlugs.has(slug)) fail(`template duplicate is also an event: ${slug}`);
  if (OFFTOPIC_NOINDEX_SLUGS.has(slug)) fail(`template duplicate is already off-topic: ${slug}`);
  if (ARCHIVE_NOINDEX_SLUGS.has(slug)) fail(`template duplicate is archived: ${slug}`);
}
for (const slug of computedNoindex) {
  if (!ADSENSE_RECOVERY_NOINDEX_SLUGS.has(slug)) {
    fail(`rule noindexes ${slug} but the exported set does not`);
  }
}

const familySlugSet = new Set(families.map((row) => row.slug));
for (const post of blogPosts) {
  if (familySlugSet.has(post.slug)) continue;
  if (eventSlugs.has(post.slug)) continue;
  if (OFFTOPIC_NOINDEX_SLUGS.has(post.slug)) continue;
  if (ARCHIVE_NOINDEX_SLUGS.has(post.slug)) continue;
  if (isSoftNoindexBlogPost(post)) {
    fail(`post outside B1/B3 was noindexed: ${post.slug}`);
  }
}

for (const slug of TRANSLATED_BLOG_SLUGS) {
  if (eventSlugs.has(slug) || ADSENSE_RECOVERY_NOINDEX_SLUGS.has(slug)) {
    fail(`translated slug was pulled into recovery noindex: ${slug}`);
  }
}

const samples = [
  ["/blog/liverpool-vs-man-city-11-oct-2026-preview", true],
  ["/es/blog/liverpool-vs-man-city-11-oct-2026-preview", true],
  ["/hi/blog/rugby-league-world-cup-2026-final-brisbane-15-nov", true],
  ["/blog/ev-charging-csms-ireland-cpo-guide", true],
  ["/pt/blog/chatgpt-ai-tools-for-us-startups-2026", true],
  ["/blog/ev-charging-csms-india-cpo-guide", false],
  ["/blog/ev-charging-csms-uk-europe-cpo-guide", false],
  ["/blog/upi-charges-in-india-2026-complete-guide", false],
  ["/es/blog/ev-charging-app-ocpi-ocpp-guide", false],
  ["/services/ev-charging-app-development", false],
  ["/es/services/ev-charging-app-development", false],
  ["/", false],
];
for (const [pathname, excluded] of samples) {
  if (isAdSenseExcludedPath(pathname) !== excluded) {
    fail(
      `isAdSenseExcludedPath(${pathname}) expected ${excluded}, got ${!excluded}`
    );
  }
}

const popupSamples = [
  ["/", true],
  ["/services/ev-charging-app-development", true],
  ["/es/services/ev-charging-app-development", true],
  ["/contact", true],
  ["/blog", false],
  ["/blog/", false],
  ["/blog/ev-charging-csms-india-cpo-guide", false],
  ["/es/blog", false],
  ["/es/blog/ev-charging-app-ocpi-ocpp-guide", false],
  ["/hi/blog/liverpool-vs-man-city-11-oct-2026-preview", false],
];
for (const [pathname, eligible] of popupSamples) {
  if (isLeadPopupEligiblePath(pathname) !== eligible) {
    fail(`isLeadPopupEligiblePath(${pathname}) expected ${eligible}`);
  }
}

if (!sitemapUrls.includes("https://thetrifusion.in/services/ev-charging-app-development")) {
  fail("EV service page dropped out of the sitemap");
}

const beforeIndexable = blogPosts.filter(
  (post) =>
    !ARCHIVE_NOINDEX_SLUGS.has(post.slug) && !OFFTOPIC_NOINDEX_SLUGS.has(post.slug)
).length;
const afterIndexable = getPublishedBlogPosts().length;
const removed = beforeIndexable - afterIndexable;
const afterSitemap = sitemapUrls.length;
const beforeSitemap = afterSitemap + removed;

console.log(
  JSON.stringify(
    {
      beforeIndexableBlogs: beforeIndexable,
      afterIndexableBlogs: afterIndexable,
      beforeSitemapUrls: beforeSitemap,
      afterSitemapUrls: afterSitemap,
      eventPosts: eventPosts.length,
      templateNoindex: ADSENSE_RECOVERY_NOINDEX_SLUGS.size,
      templateKept: ADSENSE_RECOVERY_KEPT_SLUGS.size,
    },
    null,
    2
  )
);

for (const group of familyReport) {
  console.log(`\n${group.family}`);
  console.log(`  kept: ${group.kept.join(", ")}`);
  console.log(`  noindexed (${group.noindex.length}): ${group.noindex.join(", ")}`);
}

if (failures.length) {
  console.error(`\n${failures.length} failure(s):`);
  for (const message of failures) console.error(`FAIL: ${message}`);
  process.exit(1);
}

console.log("\nAdSense recovery noindex checks passed");
