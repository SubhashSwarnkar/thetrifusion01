#!/usr/bin/env node
/**
 * Extract Event / SportsEvent JSON-LD for every scheduled event post and
 * assert the fields Google Search Console flagged, plus status and location.
 *
 * `offers` may be absent. If it is present it must include url, price,
 * priceCurrency, availability and validFrom. A URL-only Offer fails.
 *
 * Usage: node scripts/validate-event-schema.mjs
 */
import { blogPosts } from "../src/data/blogData.js";
import { confirmedEventOffer, eventSchema, isTrendsExplainer } from "../src/lib/schema.js";

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

const OFFER_FIELDS = ["url", "price", "priceCurrency", "availability", "validFrom"];
const AVAILABILITY_RE =
  /^https:\/\/schema\.org\/(?:BackOrder|Discontinued|InStock|InStoreOnly|LimitedAvailability|OnlineOnly|OutOfStock|PreOrder|PreSale|SoldOut)$/;

function offerList(node) {
  if (node.offers == null) return [];
  return Array.isArray(node.offers) ? node.offers : [node.offers];
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
  const offers = offerList(node);
  const expected = confirmedEventOffer(post.event);
  if (!expected && offers.length > 0) {
    fail(slug, "offers emitted without confirmed ticket price, currency, availability, validFrom and url");
  }
  if (expected && offers.length === 0) {
    fail(slug, "confirmed ticket fields did not emit offers");
  }
  for (const offer of offers) {
    if (!offer || typeof offer !== "object") {
      fail(slug, "offers entry is empty");
      continue;
    }
    for (const field of OFFER_FIELDS) {
      if (offer[field] == null || offer[field] === "") {
        fail(slug, `offers missing ${field}`);
      }
    }
    if (offer.url && !/^https?:\/\//i.test(String(offer.url))) {
      fail(slug, "offers.url is not absolute");
    }
    if (offer.price != null && !/^\d+(\.\d+)?$/.test(String(offer.price))) {
      fail(slug, `offers.price is not a plain number (${offer.price})`);
    }
    if (offer.availability && !AVAILABILITY_RE.test(String(offer.availability))) {
      fail(slug, `offers.availability is not a schema.org ItemAvailability URL (${offer.availability})`);
    }
    if (offer.validFrom && !/^\d{4}-\d{2}-\d{2}/.test(String(offer.validFrom))) {
      fail(slug, `offers.validFrom is not an ISO date (${offer.validFrom})`);
    }
  }
  if (expected && offers.length === 1) {
    for (const field of OFFER_FIELDS) {
      if (String(offers[0][field]) !== String(expected[field])) {
        fail(slug, `offers.${field} does not match confirmed ticket data`);
      }
    }
  }
  if (!node.eventStatus) fail(slug, "missing eventStatus");
  if (!node.eventAttendanceMode) fail(slug, "missing eventAttendanceMode");

  const performers = Array.isArray(node.performer)
    ? node.performer
    : node.performer
      ? [node.performer]
      : [];
  for (const performer of performers) {
    if (!performer || !performer.name || typeof performer.name !== "string") {
      fail(slug, "performer is missing a name");
    }
  }
  if (node.homeTeam && node.awayTeam) {
    const names = performers.map((performer) => performer && performer.name);
    if (!names.includes(node.homeTeam.name) || !names.includes(node.awayTeam.name)) {
      fail(slug, "SportsEvent performer is missing homeTeam or awayTeam");
    }
    if (performers.some((performer) => !performer || performer["@type"] !== "SportsTeam")) {
      fail(slug, "team performer is not a SportsTeam");
    }
  }
  const contest = contestSides(node.name);
  if (node["@type"] === "SportsEvent" && contest) {
    if (performers.length !== 2) {
      fail(slug, `contest performer should be both teams, got ${performers.length}`);
    } else if (performers.some((performer) => performer["@type"] !== "SportsTeam")) {
      fail(slug, "contest performer is not a SportsTeam");
    }
  }
  if (
    performers.length === 1 &&
    performers[0]["@type"] === "Organization" &&
    node.organizer
  ) {
    if (
      performers[0].name !== node.organizer.name ||
      performers[0].url !== node.organizer.url
    ) {
      fail(slug, "organizer performer does not match organizer name and url");
    }
  }
}

function contestSides(name) {
  const value = String(name || "");
  if (/\slive\s+/i.test(value)) return null;
  const versus = value.split(/\s+vs\.?\s+/i);
  if (versus.length === 2) return versus;
  const at = value.split(/\s+at\s+/i);
  if (at.length === 2) return at;
  return null;
}

function hasPerformer(node) {
  if (!node.performer) return false;
  const list = Array.isArray(node.performer) ? node.performer : [node.performer];
  return list.some((performer) => performer && performer.name);
}

function assertOfferFixtures() {
  const base = {
    slug: "offer-fixture",
    excerpt: "Fixture",
    event: {
      type: "Event",
      name: "Fixture event",
      startDate: "2026-10-01T10:00:00+05:30",
      location: { name: "Town hall", addressCountry: "IN" },
    },
  };
  const urlOnly = eventSchema({
    ...base,
    event: { ...base.event, ticketUrl: "https://example.com/tickets" },
  });
  if (urlOnly && urlOnly.offers) {
    fail("offer-fixture", "URL-only ticket data emitted offers");
  }
  const organizerOnly = eventSchema({
    ...base,
    event: { ...base.event, organizer: "Premier League" },
  });
  if (organizerOnly && organizerOnly.offers) {
    fail("offer-fixture", "organizer site was emitted as offers");
  }
  const free = eventSchema({
    ...base,
    event: {
      ...base.event,
      ticketPrice: 0,
      ticketCurrency: "INR",
      ticketAvailability: "InStock",
      ticketsOnSaleDate: "2026-09-01T10:00:00+05:30",
      ticketUrl: "https://example.com/free-entry",
    },
  });
  const freeOffer = free && free.offers;
  if (
    !freeOffer ||
    freeOffer["@type"] !== "Offer" ||
    freeOffer.price !== "0" ||
    freeOffer.priceCurrency !== "INR" ||
    freeOffer.availability !== "https://schema.org/InStock" ||
    freeOffer.validFrom !== "2026-09-01T10:00:00+05:30" ||
    freeOffer.url !== "https://example.com/free-entry"
  ) {
    fail("offer-fixture", `free event did not emit a full Offer (${JSON.stringify(freeOffer)})`);
  }
  const ranged = eventSchema({
    ...base,
    event: {
      ...base.event,
      lowPrice: "10",
      highPrice: "40",
      ticketCurrency: "USD",
      ticketAvailability: "https://schema.org/PreOrder",
      ticketsOnSaleDate: "2026-06-01",
      ticketUrl: "https://example.com/range",
    },
  });
  const rangeOffer = ranged && ranged.offers;
  if (
    !rangeOffer ||
    rangeOffer.price !== "10" ||
    rangeOffer.lowPrice !== "10" ||
    rangeOffer.highPrice !== "40" ||
    rangeOffer.priceCurrency !== "USD" ||
    rangeOffer.availability !== "https://schema.org/PreOrder" ||
    rangeOffer.validFrom !== "2026-06-01"
  ) {
    fail("offer-fixture", `price range did not emit a full Offer (${JSON.stringify(rangeOffer)})`);
  }
}

assertOfferFixtures();

const scheduled = [];
const explainers = [];
const nodesWithoutPerformer = [];
let eventNodes = 0;
let nodesWithPerformer = 0;
let nodesWithFullOffer = 0;
let nodesWithoutOffers = 0;

for (const post of blogPosts) {
  const jsonLd = eventSchema(post);
  const nodes = eventNodesFrom(jsonLd);
  if (isScheduledEvent(post)) {
    scheduled.push(post);
    if (nodes.length === 0) {
      fail(post.slug, "scheduled event post emitted no Event node");
      continue;
    }
    for (const node of nodes) {
      eventNodes += 1;
      assertEventNode(post, node);
      if (offerList(node).length > 0) nodesWithFullOffer += 1;
      else nodesWithoutOffers += 1;
      if (hasPerformer(node)) nodesWithPerformer += 1;
      else nodesWithoutPerformer.push(`${post.slug} — ${node.name}`);
    }
  } else if (isTrendsExplainer(post)) {
    explainers.push(post);
    if (nodes.length > 0) {
      fail(post.slug, "trends explainer emitted Event schema");
    }
  } else if (nodes.length > 0) {
    fail(post.slug, "non-event post emitted Event schema");
  }
}

console.log(`posts checked: ${scheduled.length}`);
console.log(`event nodes: ${eventNodes}`);
console.log(`event nodes with a full Offer: ${nodesWithFullOffer}`);
console.log(`event nodes with no offers: ${nodesWithoutOffers}`);
console.log(`event nodes with performer: ${nodesWithPerformer}`);
console.log(`event nodes without performer: ${nodesWithoutPerformer.length}`);
if (nodesWithoutPerformer.length) {
  console.log("without performer:");
  for (const line of nodesWithoutPerformer) console.log(`- ${line}`);
}
console.log(`explainer posts checked: ${explainers.length}`);
console.log(`failures: ${failures.length}`);

if (failures.length) {
  for (const message of failures) console.error(`FAIL ${message}`);
  process.exit(1);
}

console.log("OK");
