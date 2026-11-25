#!/usr/bin/env node
/**
 * Guard: no Review / AggregateRating JSON-LD until real third-party reviews exist.
 * Historical bug: aggregateRating on Service → GSC "Invalid object type for field
 * <parent_node>" (Service is not a Google review-snippet parent).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  creativeWorkSchema,
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "../src/lib/schema.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const FORBIDDEN_KEYS = new Set([
  "aggregateRating",
  "review",
  "reviews",
  "reviewRating",
  "ratingValue",
  "reviewCount",
  "ratingCount",
  "bestRating",
  "worstRating",
]);

const FORBIDDEN_TYPES = new Set(["Review", "AggregateRating", "Rating"]);

function walk(node, hits, trail = "$") {
  if (Array.isArray(node)) {
    node.forEach((item, i) => walk(item, hits, `${trail}[${i}]`));
    return;
  }
  if (!node || typeof node !== "object") return;
  const types = node["@type"];
  const typeList = Array.isArray(types) ? types : types ? [types] : [];
  for (const t of typeList) {
    if (FORBIDDEN_TYPES.has(t)) hits.push(`${trail} @type=${t}`);
  }
  for (const [key, value] of Object.entries(node)) {
    if (FORBIDDEN_KEYS.has(key)) {
      hits.push(`${trail}.${key} on @type=${JSON.stringify(types || null)}`);
    }
    if (key !== "@type") walk(value, hits, `${trail}.${key}`);
  }
}

const samples = [
  ["organizationSchema", organizationSchema()],
  ["localBusinessSchema", localBusinessSchema()],
  ["websiteSchema", websiteSchema()],
  [
    "serviceSchema",
    serviceSchema({
      name: "Custom Software Development",
      description: "Test service schema",
      path: "/services/software-development",
      serviceType: "Custom Software Development",
      price: 100000,
      offers: [{ title: "MVP", description: "Scoped MVP" }],
    }),
  ],
  [
    "softwareApplicationSchema",
    softwareApplicationSchema({
      name: "EV CMS",
      description: "Charging management",
      path: "/services/ev-charging-app-development",
      price: 250000,
    }),
  ],
  [
    "creativeWorkSchema",
    creativeWorkSchema({
      id: "plugone-ev-charging-platform",
      title: "PlugOne",
      type: "Platform",
      description: "EV charging platform",
    }),
  ],
];

let failed = false;
for (const [name, data] of samples) {
  const hits = [];
  walk(data, hits);
  if (hits.length) {
    failed = true;
    console.error(`FAIL: ${name} emits review/rating markup:\n  ${hits.join("\n  ")}`);
  } else {
    console.log(`OK: ${name} has no Review/AggregateRating fields`);
  }
}

// Source guard: no live aggregateRating / ratingValue property assignments in schema emitters.
const schemaSrc = fs.readFileSync(path.join(ROOT, "src/lib/schema.js"), "utf8");
const liveAssignment = /^\s*(?:aggregateRating|ratingValue|reviewCount)\s*:/m;
if (liveAssignment.test(schemaSrc)) {
  failed = true;
  console.error(
    "FAIL: src/lib/schema.js still assigns aggregateRating/ratingValue/reviewCount"
  );
} else {
  console.log("OK: src/lib/schema.js has no live rating property assignments");
}

if (failed) process.exit(1);
console.log("OK: review-snippet schema guard passed");
