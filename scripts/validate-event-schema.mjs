#!/usr/bin/env node
/**
 * Extract Event / SportsEvent JSON-LD for every scheduled event post and
 * assert the fields Google Search Console flagged, plus status and location.
 *
 * Usage: node scripts/validate-event-schema.mjs
 */
import { blogPosts } from "../src/data/blogData.js";
import { eventSchema, isTrendsExplainer } from "../src/lib/schema.js";

const failures = [];

function fail(slug, message) {
  failures.push(`${slug}: ${message}`);
}

function eventNodesFrom(data) {
  const found = [];
  const walk = (node) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    const rawType = node["@type"];
    const types = Array.isArray(rawType) ? rawType : rawType ? [rawType] : [];
    if (types.includes("Event") || types.includes("SportsEvent")) found.push(node);
    for (const value of Object.values(node)) {
      if (value && typeof value === "object") walk(value);
    }
  };
  walk(data);
  return found;
}

function instantMs(iso) {
  const value = String(iso || "");
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return Date.parse(`${value}T00:00:00Z`);
  if (/[+-]\d{2}:\d{2}$/.test(value) || value.endsWith("Z")) return Date.parse(value);
  if (value.includes("T")) return Date.parse(`${value}Z`);
  return Number.NaN;
}

function isScheduledEvent(post) {
  const ev = post && post.event;
  return Boolean(
    ev && typeof ev === "object" && ev.name && ev.startDate && ev.location
  );
}

function postHasPrice(post) {
  const ev = post.event || {};
  if (ev.price != null && ev.priceCurrency) return true;
  if (ev.offers && ev.offers.price != null && ev.offers.priceCurrency) return true;
  return false;
}

function assertEventNode(post, node) {
  const slug = post.slug;
  if (!node.name || typeof node.name !== "string") fail(slug, "missing name");
  if (!node.startDate) fail(slug, "missing startDate");
  if (!node.endDate) fail(slug, "missing endDate");
  else {
    const start = instantMs(node.startDate);
    const end = instantMs(node.endDate);
    if (Number.isNaN(start) || Number.isNaN(end) || end < start) {
      fail(slug, `endDate ${node.endDate} is before startDate ${node.startDate}`);
    }
  }
  if (!node.description || typeof node.description !== "string" || !node.description.trim()) {
    fail(slug, "missing description");
  } else if (/<[^>]+>/.test(node.description)) {
    fail(slug, "description is not plain text");
  }
  const images = Array.isArray(node.image) ? node.image : node.image ? [node.image] : [];
  if (
    images.length === 0 ||
    images.some(
      (url) => typeof url !== "string" || !url.startsWith("https://thetrifusion.in/")
    )
  ) {
    fail(slug, `image must be an absolute https://thetrifusion.in URL (${JSON.stringify(node.image)})`);
  }
  if (!node.location || typeof node.location !== "object" || !node.location.name) {
    fail(slug, "missing location name");
  } else if (
    node.location["@type"] !== "Place" &&
    node.location["@type"] !== "VirtualLocation"
  ) {
    fail(slug, `unexpected location type ${node.location["@type"]}`);
  } else if (
    String(node.eventAttendanceMode || "").includes("OfflineEventAttendanceMode") &&
    node.location["@type"] === "Place" &&
    post.event.location &&
    typeof post.event.location === "object" &&
    post.event.location.addressCountry &&
    (!node.location.address || !node.location.address.addressCountry)
  ) {
    fail(slug, "offline Place is missing addressCountry from the post");
  }
  if (node.organizer) {
    if (!node.organizer.name || !node.organizer.url) {
      fail(slug, "organizer is missing name or url");
    } else if (!/^https?:\/\//i.test(node.organizer.url)) {
      fail(slug, `organizer url is not absolute (${node.organizer.url})`);
    }
  }
  const offers = Array.isArray(node.offers) ? node.offers : node.offers ? [node.offers] : [];
  if (offers.length === 0 || offers.some((offer) => !offer || !offer.url)) {
    fail(slug, "missing offers.url");
  } else if (offers.some((offer) => !/^https?:\/\//i.test(offer.url))) {
    fail(slug, "offers.url is not absolute");
  }
  if (!postHasPrice(post)) {
    for (const offer of offers) {
      if (!offer) continue;
      if (offer.price != null) fail(slug, "offers.price was invented");
      if (offer.availability) fail(slug, "offers.availability was invented");
      if (offer.validFrom) fail(slug, "offers.validFrom was invented");
    }
  }
  if (!node.eventStatus) fail(slug, "missing eventStatus");
  if (!node.eventAttendanceMode) fail(slug, "missing eventAttendanceMode");
}

const scheduled = [];
const explainers = [];

for (const post of blogPosts) {
  const jsonLd = eventSchema(post);
  const nodes = eventNodesFrom(jsonLd);
  if (isScheduledEvent(post)) {
    scheduled.push(post);
    if (nodes.length === 0) {
      fail(post.slug, "scheduled event post emitted no Event node");
      continue;
    }
    for (const node of nodes) assertEventNode(post, node);
  } else if (isTrendsExplainer(post)) {
    explainers.push(post);
    if (nodes.length > 0) {
      fail(post.slug, "trends explainer emitted Event schema");
    }
  } else if (nodes.length > 0) {
    fail(post.slug, "non-event post emitted Event schema");
  }
}

const eventNodes = scheduled.reduce((count, post) => {
  return count + eventNodesFrom(eventSchema(post)).length;
}, 0);

console.log(`posts checked: ${scheduled.length}`);
console.log(`event nodes: ${eventNodes}`);
console.log(`explainer posts checked: ${explainers.length}`);
console.log(`failures: ${failures.length}`);

if (failures.length) {
  for (const message of failures) console.error(`FAIL ${message}`);
  process.exit(1);
}

console.log("OK");
