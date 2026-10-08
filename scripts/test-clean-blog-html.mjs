#!/usr/bin/env node
/**
 * Render-time blog HTML cleanup checks.
 * Usage: node --import ./scripts/register-extensionless.mjs scripts/test-clean-blog-html.mjs
 */
import { blogPosts, isIndexableBlogPost } from "../src/data/blogData.js";
import { cleanBlogHtml } from "../src/lib/cleanBlogHtml.js";

const BANNED = [
  "content arrays",
  "production build",
  "Verification note",
  "FAQPage schema",
  "This page does not",
];

const META_HEADING_RE =
  /Additional notes for planners and publishers|Why early, accurate pages win the search peak|Editorial standards we use on TheTriFusion event desks|For publishers building their own event SEO engines/i;

const BALANCED_TAGS = ["p", "h2", "h3", "ul", "ol", "li", "a", "strong"];

const failures = [];

function fail(message) {
  failures.push(message);
}

function words(html) {
  const text = String(html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
  return text ? text.split(" ").length : 0;
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2) return sorted[mid];
  return Math.round((sorted[mid - 1] + sorted[mid]) / 2);
}

function tagCounts(html, tag) {
  const open = (html.match(new RegExp(`<${tag}\\b`, "gi")) || []).length;
  const close = (html.match(new RegExp(`</${tag}\\s*>`, "gi")) || []).length;
  return { open, close };
}

const indexable = blogPosts.filter(isIndexableBlogPost);

const beforeWords = [];
const afterWords = [];
let changed = 0;
const bannedBefore = Object.fromEntries(BANNED.map((item) => [item, 0]));
const bannedAfter = Object.fromEntries(BANNED.map((item) => [item, 0]));

for (const post of indexable) {
  const source = post.content || "";
  const cleaned = cleanBlogHtml(source);
  const before = words(source);
  const after = words(cleaned);
  beforeWords.push(before);
  afterWords.push(after);
  if (cleaned !== source) changed += 1;

  for (const phrase of BANNED) {
    if (source.includes(phrase)) bannedBefore[phrase] += 1;
    if (cleaned.includes(phrase)) {
      bannedAfter[phrase] += 1;
      fail(`${post.slug}: still contains ${JSON.stringify(phrase)}`);
    }
  }

  for (const tag of BALANCED_TAGS) {
    const counts = tagCounts(cleaned, tag);
    if (counts.open !== counts.close) {
      fail(
        `${post.slug}: unbalanced <${tag}> (${counts.open} open, ${counts.close} close)`
      );
    }
  }

  if (before > 0 && (before - after) / before > 0.6) {
    // Event templates are mostly repeated pipeline sections. Removing those
    // sections is the point of the cleaner, so the 60% cap applies to every
    // other post. Template posts must still keep a real article.
    if (!META_HEADING_RE.test(source)) {
      fail(
        `${post.slug}: lost ${Math.round((1 - after / before) * 100)}% of words (${before} → ${after})`
      );
    } else if (after < 200) {
      fail(`${post.slug}: pipeline strip left only ${after} words`);
    }
  }
}

const stats = {
  indexablePosts: indexable.length,
  postsChanged: changed,
  medianWordsBefore: median(beforeWords),
  medianWordsAfter: median(afterWords),
  minWordsBefore: Math.min(...beforeWords),
  minWordsAfter: Math.min(...afterWords),
  bannedBefore,
  bannedAfter,
};

console.log(JSON.stringify(stats, null, 2));

if (failures.length) {
  console.error(`\n${failures.length} failure(s):`);
  for (const message of failures.slice(0, 40)) console.error(`FAIL: ${message}`);
  if (failures.length > 40) console.error(`... and ${failures.length - 40} more`);
  process.exit(1);
}

console.log("cleanBlogHtml checks passed");
