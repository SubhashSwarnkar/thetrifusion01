#!/usr/bin/env node
/**
 * Index restore: event, offtopic, and geo-template posts are index,follow,
 * in the published hub, and in sitemap-blog.xml. Only archive 301s and
 * true 308 duplicates stay out. Future daily posts default to indexable.
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
import { allSitemapEntries } from "../src/lib/sitemaps.js";
import { withTrafficServiceCta } from "../src/data/trafficServiceLinks.js";

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

if (OFFTOPIC_NOINDEX_SLUGS.size !== 0) {
  fail(`OFFTOPIC_NOINDEX_SLUGS must be empty, got ${OFFTOPIC_NOINDEX_SLUGS.size}`);
}
if (ADSENSE_RECOVERY_NOINDEX_SLUGS.size !== 0) {
  fail(
    `ADSENSE_RECOVERY_NOINDEX_SLUGS must be empty, got ${ADSENSE_RECOVERY_NOINDEX_SLUGS.size}`
  );
}
if (eventNoindexSlugList().length !== 0) {
  fail("eventNoindexSlugList must be empty so event posts load ads");
}

const localePage = fs.readFileSync(
  path.join(root, "src/app/[lang]/blog/[slug]/page.js"),
  "utf8"
);
if (!localePage.includes("noIndex: isSoftNoindexBlogPost(source)")) {
  fail("locale blog routes must set noIndex from isSoftNoindexBlogPost");
}

const eventPosts = blogPosts.filter((post) => post.event);
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
  if (isSoftNoindexBlogPost(post)) fail(`B1 slug is still noindex: ${slug}`);
  if (!isIndexableBlogPost(post)) fail(`B1 slug is not indexable: ${slug}`);
  if (!publishedSlugs.has(slug)) fail(`B1 slug missing from published hub: ${slug}`);
  if (!sitemapBlogSlugs.has(slug)) fail(`B1 slug missing from sitemap: ${slug}`);
}

for (const id of [432, 433]) {
  const post = blogPosts.find((item) => item.id === id);
  if (!post) fail(`post id ${id} is missing`);
  else if (isSoftNoindexBlogPost(post)) fail(`post ${id} ${post.slug} is still noindex`);
  else if (!isIndexableBlogPost(post)) fail(`post ${id} ${post.slug} is not indexable`);
}

for (const post of eventPosts) {
  if (isSoftNoindexBlogPost(post)) fail(`event post still noindex: ${post.slug}`);
  if (!isIndexableBlogPost(post)) fail(`event post not indexable: ${post.slug}`);
  if (!publishedSlugs.has(post.slug)) fail(`event post not published: ${post.slug}`);
  if (!sitemapBlogSlugs.has(post.slug)) fail(`event post missing from sitemap: ${post.slug}`);
}

const gscWinners = [
  "f1-singapore-grand-prix-2026-race-day-guide",
  "india-vs-west-indies-2nd-t20i-ranchi-9-oct-2026",
  "india-vs-uruguay-6-oct-2026-kolkata",
  "prix-arc-de-triomphe-4-oct-2026-longchamp",
  "thanksgiving-2026-date-us-ist-guide",
  "nfl-colts-vs-commanders-london-4-oct-2026",
  "the-social-reckoning-release-9-oct-2026",
  "england-vs-czechia-nations-league-6-oct-2026",
  "czech-senate-election-9-10-october-2026",
  "india-women-vs-zimbabwe-1st-t20i-raipur-16-oct-2026",
  "india-bypolls-6-october-2026-eci-schedule",
  "nfl-steelers-vs-saints-paris-25-oct-2026",
  "india-vs-west-indies-3rd-t20i-indore-11-oct-2026",
  "f1-bahrain-malaysia-sepang-4-oct-2026",
  "ranji-trophy-2026-27-elite-phase-starts-11-oct",
  "g20-foreign-ministers-atlanta-30-october-2026",
  "india-vs-west-indies-4th-t20i-hyderabad-14-oct-2026",
];
for (const slug of gscWinners) {
  const post = getBlogBySlug(slug);
  if (!post) fail(`GSC winner missing: ${slug}`);
  else if (!isIndexableBlogPost(post)) fail(`GSC winner not indexable: ${slug}`);
  else if (!sitemapBlogSlugs.has(slug)) fail(`GSC winner missing from sitemap: ${slug}`);
}

for (const [slug, target] of Object.entries(BLOG_CANONICAL_REDIRECTS)) {
  if (isIndexableBlogPost(getBlogBySlug(slug))) {
    fail(`308 duplicate is indexable: ${slug}`);
  }
  if (sitemapBlogSlugs.has(slug)) fail(`308 duplicate still in sitemap: ${slug}`);
  if (!sitemapBlogSlugs.has(target)) {
    fail(`308 canonical target missing from sitemap: ${target}`);
  }
}

let restored = 0;
for (const post of uniquePosts) {
  const isArchive = ARCHIVE_NOINDEX_SLUGS.has(post.slug);
  const isRedirect = Boolean(BLOG_CANONICAL_REDIRECTS[post.slug]);
  if (isArchive || isRedirect) {
    if (isIndexableBlogPost(post)) fail(`excluded slug became indexable: ${post.slug}`);
    if (isSoftNoindexBlogPost(post)) fail(`301/308 slug is soft-noindex: ${post.slug}`);
    continue;
  }
  if (isSoftNoindexBlogPost(post)) fail(`live post is soft-noindex: ${post.slug}`);
  if (!isIndexableBlogPost(post)) fail(`live post is not indexable: ${post.slug}`);
  if (!publishedSlugs.has(post.slug)) fail(`live post not in hub: ${post.slug}`);
  if (!sitemapBlogSlugs.has(post.slug)) fail(`live post missing from sitemap: ${post.slug}`);
  const html = withTrafficServiceCta(post.slug, post.content || "");
  if (!html.includes("Built by TheTriFusion")) {
    fail(`live post missing Built-by CTA: ${post.slug}`);
  }
  restored += 1;
}

const fakeEventPost = {
  slug: "future-daily-topic-any-event-2026",
  event: { name: "Future daily", startDate: "2026-12-01" },
  content: "<p>A later daily post of any topic.</p>",
};
if (isSoftNoindexBlogPost(fakeEventPost)) {
  fail("future event posts must default to index,follow");
}
if (!isIndexableBlogPost(fakeEventPost)) {
  fail("future event posts must be indexable by default");
}

const samples = [
  ["/blog/liverpool-vs-man-city-11-oct-2026-preview", false],
  ["/es/blog/liverpool-vs-man-city-11-oct-2026-preview", false],
  ["/hi/blog/rugby-league-world-cup-2026-final-brisbane-15-nov", false],
  ["/blog/ev-charging-csms-ireland-cpo-guide", false],
  ["/pt/blog/chatgpt-ai-tools-for-us-startups-2026", false],
  ["/blog/ev-charging-csms-india-cpo-guide", false],
  ["/blog/ev-charging-csms-uk-europe-cpo-guide", false],
  ["/blog/upi-charges-in-india-2026-complete-guide", false],
  ["/es/blog/ev-charging-app-ocpi-ocpp-guide", false],
  ["/services/ev-charging-app-development", false],
  ["/es/services/ev-charging-app-development", false],
  ["/", false],
  ["/contact", true],
  ["/portfolio", true],
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

console.log(
  JSON.stringify(
    {
      uniquePosts: uniquePosts.length,
      indexableBlogs: publishedSlugs.size,
      sitemapBlogUrls: sitemapBlogSlugs.size,
      sitemapUrls: sitemapUrls.length,
      eventPosts: eventPosts.length,
      archiveExcluded: ARCHIVE_NOINDEX_SLUGS.size,
      redirectExcluded: Object.keys(BLOG_CANONICAL_REDIRECTS).length,
      restoredLivePosts: restored,
    },
    null,
    2
  )
);

if (failures.length) {
  console.error(`\n${failures.length} failure(s):`);
  for (const message of failures) console.error(`FAIL: ${message}`);
  process.exit(1);
}

console.log("\nIndex restore checks passed");
