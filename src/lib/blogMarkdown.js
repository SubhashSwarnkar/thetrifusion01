import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { getServiceBySlug } from "data/servicesData";
import { isRetiredBlogSlug } from "data/retiredBlogSlugs";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

marked.setOptions({
  gfm: true,
  breaks: false,
});

function wrapTables(html) {
  return String(html || "").replace(
    /<table[\s\S]*?<\/table>/gi,
    (table) => `<div class="table-scroll">${table}</div>`
  );
}

function ensureContentDir() {
  if (!fs.existsSync(CONTENT_DIR)) return false;
  return true;
}

function parseSources(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item) => {
      if (!item) return null;
      if (typeof item === "string") return { title: item, url: "" };
      return {
        title: String(item.title || item.name || "").trim(),
        url: String(item.url || "").trim(),
      };
    })
    .filter((item) => item && item.title);
}

function parseFaqs(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item) => {
      if (!item) return null;
      const question = String(item.question || item.q || "").trim();
      const answer = String(item.answer || item.a || "").trim();
      if (!question || !answer) return null;
      return { question, answer };
    })
    .filter(Boolean);
}

/**
 * Decode HTML entities in heading / TOC text so React text nodes show real
 * quotes and apostrophes instead of literal &quot; / &#39; / &amp;.
 */
function decodeHtmlEntities(value) {
  let text = String(value || "");
  // Numeric and hex character references first
  text = text.replace(/&#x([0-9a-f]+);/gi, (_, hex) => {
    const code = Number.parseInt(hex, 16);
    return Number.isFinite(code) ? String.fromCodePoint(code) : "";
  });
  text = text.replace(/&#(\d+);/g, (_, dec) => {
    const code = Number.parseInt(dec, 10);
    return Number.isFinite(code) ? String.fromCodePoint(code) : "";
  });
  // Named entities (including smart quotes / apostrophes)
  const named = {
    amp: "&",
    quot: '"',
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: " ",
    ldquo: "\u201C",
    rdquo: "\u201D",
    lsquo: "\u2018",
    rsquo: "\u2019",
    mdash: "\u2014",
    ndash: "\u2013",
    hellip: "\u2026",
  };
  text = text.replace(
    /&([a-z]+);/gi,
    (match, name) => named[name.toLowerCase()] ?? match
  );
  // marked may leave &amp;quot; after a prior escape — decode amp once more
  if (text.includes("&amp;")) {
    text = text.replace(/&amp;/gi, "&");
    text = text.replace(
      /&([a-z]+);/gi,
      (match, name) => named[name.toLowerCase()] ?? match
    );
  }
  return text;
}

function stripTags(html) {
  return String(html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugifyHeading(text) {
  return decodeHtmlEntities(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function injectHeadingIds(html) {
  const toc = [];
  const withIds = String(html || "").replace(
    /<h([23])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi,
    (full, level, attrs = "", inner) => {
      const text = decodeHtmlEntities(stripTags(inner));
      if (!text) return full;
      const existing = /\sid=["']([^"']+)["']/i.exec(attrs || "");
      const id = existing ? existing[1] : slugifyHeading(text);
      toc.push({ id, text, level: Number(level) });
      if (existing) return full;
      return `<h${level}${attrs || ""} id="${id}">${inner}</h${level}>`;
    }
  );
  return { html: withIds, toc };
}

function estimateReadTime(html) {
  const words = String(html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function normalizePost(filePath, raw) {
  const { data, content } = matter(raw);
  const fileSlug = path.basename(filePath, path.extname(filePath));
  const slug = String(data.slug || fileSlug)
    .trim()
    .replace(/^\/+|\/+$/g, "");
  if (!slug || isRetiredBlogSlug(slug)) return null;

  const title = String(data.title || "").trim();
  const description = String(data.description || data.excerpt || "").trim();
  if (!title || !description) return null;

  const dateValue = data.date ? new Date(data.date) : null;
  if (!dateValue || Number.isNaN(dateValue.getTime())) return null;

  const htmlBody = wrapTables(marked.parse(content || ""));
  const { html, toc } = injectHeadingIds(htmlBody);
  const targetService = String(data.targetService || "").trim() || null;
  const service = targetService ? getServiceBySlug(targetService) : null;
  const faqs = parseFaqs(data.faqs);
  const sources = parseSources(data.sources);
  const author = String(data.author || "TheTriFusion Team").trim();
  const updatedAt = data.updatedAt
    ? new Date(data.updatedAt)
    : dateValue;

  return {
    slug,
    title,
    description,
    excerpt: description,
    date: dateValue.toISOString().slice(0, 10),
    updatedAt: Number.isNaN(updatedAt.getTime())
      ? dateValue.toISOString().slice(0, 10)
      : updatedAt.toISOString().slice(0, 10),
    author,
    targetService,
    serviceTitle: service
      ? service.bannerTitle || service.title
      : null,
    serviceHref: service ? `/services/${service.slug}` : null,
    sources,
    faqs,
    content: html,
    toc,
    readTime: estimateReadTime(html),
    imageUrl: data.imageUrl
      ? String(data.imageUrl)
      : "/images/Web.png",
    filePath,
  };
}

function readAllMarkdownFiles() {
  if (!ensureContentDir()) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((name) => /\.(md|mdx)$/i.test(name))
    .map((name) => path.join(CONTENT_DIR, name));
}

let cache = null;

function loadPosts() {
  if (cache) return cache;
  const posts = readAllMarkdownFiles()
    .map((filePath) => {
      try {
        return normalizePost(filePath, fs.readFileSync(filePath, "utf8"));
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  cache = posts;
  return posts;
}

/** Clear module cache (tests / HMR). */
export function clearBlogMarkdownCache() {
  cache = null;
}

export function getPublishedMarkdownPosts() {
  return loadPosts();
}

export function getMarkdownPostBySlug(slug) {
  if (!slug || isRetiredBlogSlug(slug)) return null;
  return loadPosts().find((post) => post.slug === slug) || null;
}

export function getRelatedMarkdownPosts(slug, limit = 3) {
  const current = getMarkdownPostBySlug(slug);
  const posts = getPublishedMarkdownPosts().filter((post) => post.slug !== slug);
  if (!current) return posts.slice(0, limit);
  const sameService = posts.filter(
    (post) =>
      current.targetService && post.targetService === current.targetService
  );
  const rest = posts.filter(
    (post) => !sameService.some((item) => item.slug === post.slug)
  );
  return [...sameService, ...rest].slice(0, limit);
}

export function getMarkdownGuidesForService(serviceSlug, limit = 6) {
  if (!serviceSlug) return [];
  return getPublishedMarkdownPosts()
    .filter((post) => post.targetService === serviceSlug)
    .slice(0, limit)
    .map((post) => ({
      slug: post.slug,
      href: `/blog/${post.slug}`,
      title: post.title,
      excerpt: post.excerpt,
    }));
}

export function getLatestMarkdownPosts(limit = 3) {
  return getPublishedMarkdownPosts().slice(0, limit);
}

export const BLOG_CONTENT_DIR = "content/blog";
