#!/usr/bin/env node
/**
 * Offline checks for /llms.txt and /llms-full.txt generators.
 * Ensures blog inventory comes from content/blog and no retired blog slugs leak in.
 */
import { buildLlmsTxt, buildLlmsFullTxt } from "../src/lib/llmsTxt.js";
import { getPublishedMarkdownPosts } from "../src/lib/blogMarkdown.js";
import { allSitemapEntries } from "../src/lib/sitemaps.js";
import { isRetiredBlogSlug } from "../src/data/retiredBlogSlugs.js";

const APEX = "https://thetrifusion.in";
const failures = [];

function fail(msg) {
  failures.push(msg);
  console.error(`FAIL: ${msg}`);
}

function ok(msg) {
  console.log(`OK: ${msg}`);
}

function extractApexUrls(text) {
  const raw = text.match(/https:\/\/thetrifusion\.in[^\s\)>\]]+/g) || [];
  return [
    ...new Set(
      raw.map((url) => {
        const noHash = url.split("#")[0].replace(/[.,;:]+$/, "");
        if (noHash === APEX || noHash === `${APEX}/`) return APEX;
        return noHash.replace(/\/$/, "");
      })
    ),
  ];
}

const short = buildLlmsTxt();
const full = buildLlmsFullTxt();
const posts = getPublishedMarkdownPosts();
const sitemap = new Set(
  allSitemapEntries().map((entry) => {
    const url = entry.url.replace(/\/$/, "");
    return url === "" ? APEX : url;
  })
);

const allowedExtra = new Set([
  `${APEX}/llms.txt`,
  `${APEX}/llms-full.txt`,
  `${APEX}/sitemap.xml`,
  `${APEX}/sitemap-pages.xml`,
  `${APEX}/sitemap-services.xml`,
  `${APEX}/sitemap-solutions.xml`,
  `${APEX}/sitemap-blog.xml`,
  `${APEX}/robots.txt`,
]);

if (!posts.length) fail("expected published markdown blog posts");
else ok(`${posts.length} published markdown posts`);

for (const post of posts) {
  const needle = `${APEX}/blog/${post.slug}`;
  if (!short.includes(needle)) fail(`llms.txt missing ${needle}`);
  if (!full.includes(needle)) fail(`llms-full.txt missing ${needle}`);
  if (!short.includes(post.title)) fail(`llms.txt missing title for ${post.slug}`);
  if (!full.includes(post.title)) fail(`llms-full.txt missing title for ${post.slug}`);
  if (!short.includes(post.description))
    fail(`llms.txt missing description for ${post.slug}`);
}
ok("all live blog posts present with titles");

if (!short.includes(`${APEX}/blog`)) fail("llms.txt missing /blog hub");
if (!full.includes(`${APEX}/blog`)) fail("llms-full.txt missing /blog hub");
if (!short.includes("sitemap-blog.xml")) fail("llms.txt missing sitemap-blog.xml");
if (!full.includes("sitemap-blog.xml")) fail("llms-full.txt missing sitemap-blog.xml");
if (/Blog URLs return 410 Gone/i.test(short))
  fail("llms.txt still claims blog URLs return 410");
if (/\/team\b/.test(short) || /\/team\b/.test(full))
  fail("llms files should not cite noindex /team");

const blogUrlRe = /https:\/\/thetrifusion\.in\/blog\/[a-z0-9-]+/gi;
for (const text of [short, full]) {
  for (const match of text.match(blogUrlRe) || []) {
    const slug = match.split("/blog/")[1];
    if (isRetiredBlogSlug(slug)) fail(`retired blog slug listed: ${slug}`);
    if (!posts.some((post) => post.slug === slug))
      fail(`unknown blog slug listed: ${slug}`);
  }
}
ok("no retired or unknown blog slugs");

for (const [name, text] of [
  ["llms.txt", short],
  ["llms-full.txt", full],
]) {
  const urls = extractApexUrls(text);
  const missing = urls.filter((url) => !sitemap.has(url) && !allowedExtra.has(url));
  if (missing.length) fail(`${name} has non-sitemap apex URLs: ${missing.join(", ")}`);
  else ok(`${name}: ${urls.length} apex URLs all in sitemap or allowlist`);
}

if (!short.includes("Amardeep")) fail("llms.txt missing founder Amardeep");
if (!short.includes("5th Floor, Amoro Building, Patrakar Colony"))
  fail("llms.txt missing office address");
if (!short.includes("+91 63781 33780")) fail("llms.txt missing phone");
if (!short.includes("contact@thetrifusion.in")) fail("llms.txt missing email");
ok("company NAP facts present");

if (failures.length) {
  console.error(`\n${failures.length} failure(s)`);
  process.exit(1);
}
console.log("\nllms.txt generator checks passed");
