#!/usr/bin/env node
/**
 * Submit sitemap URLs (or a given list) to IndexNow for thetrifusion.in.
 *
 *   node --import ./scripts/register-extensionless.mjs scripts/indexnow.mjs
 *   node --import ./scripts/register-extensionless.mjs scripts/indexnow.mjs --all
 *   node --import ./scripts/register-extensionless.mjs scripts/indexnow.mjs --changed
 *   node --import ./scripts/register-extensionless.mjs scripts/indexnow.mjs --urls https://thetrifusion.in/services/rpa
 *   node --import ./scripts/register-extensionless.mjs scripts/indexnow.mjs --dry-run
 *
 * Max 10,000 URLs per request (IndexNow cap).
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  INDEXNOW_HOST,
  INDEXNOW_KEY,
  INDEXNOW_KEY_LOCATION,
  INDEXNOW_KEY_PATH,
} from "../src/data/indexnowKey.js";
import { allSitemapEntries } from "../src/lib/sitemaps.js";

const MAX_URLS = 10000;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function parseArgs(argv) {
  const args = { all: false, changed: false, dryRun: false, urls: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--all") args.all = true;
    else if (token === "--changed") args.changed = true;
    else if (token === "--dry-run") args.dryRun = true;
    else if (token === "--urls") {
      while (argv[i + 1] && !argv[i + 1].startsWith("--")) {
        i += 1;
        args.urls.push(argv[i]);
      }
    } else if (/^https?:\/\//i.test(token)) {
      args.urls.push(token);
    }
  }
  return args;
}

function sitemapUrls() {
  return allSitemapEntries()
    .map((entry) => entry.url)
    .filter((url) => typeof url === "string" && url.startsWith("https://"));
}

function changedFiles() {
  const before = process.env.GITHUB_EVENT_BEFORE || "";
  const sha = process.env.GITHUB_SHA || "";
  if (!before || !sha || /^0+$/.test(before)) return null;
  try {
    const output = execFileSync(
      "git",
      ["diff", "--name-only", "--diff-filter=ACMR", before, sha],
      { cwd: root, encoding: "utf8" }
    );
    return output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    return null;
  }
}

function urlsForChangedFile(file, all) {
  const blogs = all.filter((url) => /\/blog\//.test(url));
  const services = all.filter((url) => /\/services(\/|$)/.test(url));
  const solutions = all.filter((url) => /\/solutions\//.test(url));
  const home = all.filter((url) => url === `https://${INDEXNOW_HOST}`);

  if (
    /blogData|blogPosts|dailyOrganic|upcomingEvents|organicBatch|offtopicNoindex|adsenseRecovery|indiaIndexable|trafficService/i.test(
      file
    )
  ) {
    return blogs;
  }
  if (
    /servicesData|nicheServices|fintechProduct|servicePlan|servicePageSeo|serviceHub|serviceNav|serviceIndia|serviceRanking|evChargingPage/i.test(
      file
    ) ||
    file.startsWith("src/app/(en)/services/") ||
    file.startsWith("src/views/Service")
  ) {
    return services;
  }
  if (
    /seoLanding|cityLandings|solutionRedirects/i.test(file) ||
    file.startsWith("src/app/(en)/solutions/")
  ) {
    return solutions;
  }
  if (
    file === "src/app/(en)/page.js" ||
    file.includes("LandingPage") ||
    file.includes("HomeRest") ||
    file.includes("HomeTrending")
  ) {
    return [...home, ...services.slice(0, 8)];
  }
  const blogSlug = file.match(/src\/app\/\(en\)\/blog\/\[slug\]/);
  if (blogSlug) return blogs;
  if (file.startsWith("public/") && file.endsWith(`${INDEXNOW_KEY}.txt`)) {
    return all;
  }
  return [];
}

function selectUrls(args) {
  const all = sitemapUrls();
  if (all.length > MAX_URLS) {
    console.warn(`sitemap has ${all.length} URLs; truncating to ${MAX_URLS}`);
  }
  if (args.urls.length) {
    return [...new Set(args.urls)].slice(0, MAX_URLS);
  }
  if (args.all || !args.changed) {
    return all.slice(0, MAX_URLS);
  }
  const files = changedFiles();
  if (!files || !files.length) {
    console.log("No changed-file list; submitting full sitemap.");
    return all.slice(0, MAX_URLS);
  }
  const picked = new Set();
  for (const file of files) {
    for (const url of urlsForChangedFile(file, all)) picked.add(url);
  }
  if (!picked.size) {
    console.log(
      `Changed files (${files.length}) did not map to URLs; submitting full sitemap.`
    );
    return all.slice(0, MAX_URLS);
  }
  console.log(
    `Mapped ${files.length} changed files → ${picked.size} IndexNow URLs.`
  );
  return [...picked].slice(0, MAX_URLS);
}

function assertKeyFile() {
  const disk = path.join(root, "public", `${INDEXNOW_KEY}.txt`);
  if (!fs.existsSync(disk)) {
    throw new Error(`Missing public${INDEXNOW_KEY_PATH}`);
  }
  const body = fs.readFileSync(disk, "utf8").trim();
  if (body !== INDEXNOW_KEY) {
    throw new Error(
      `public${INDEXNOW_KEY_PATH} body does not match INDEXNOW_KEY`
    );
  }
}

async function postIndexNow(urlList) {
  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList,
  };
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  return { status: res.status, text };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  assertKeyFile();
  const args = parseArgs(process.argv.slice(2));
  const urlList = selectUrls(args);
  if (!urlList.length) {
    console.log("No URLs to submit.");
    return;
  }
  console.log(
    JSON.stringify(
      {
        host: INDEXNOW_HOST,
        keyLocation: INDEXNOW_KEY_LOCATION,
        count: urlList.length,
        sample: urlList.slice(0, 8),
        dryRun: args.dryRun,
      },
      null,
      2
    )
  );
  if (args.dryRun) return;

  let last = { status: 0, text: "" };
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    last = await postIndexNow(urlList);
    if (last.status === 200 || last.status === 202) {
      console.log(`IndexNow accepted (${last.status}) ${urlList.length} URLs`);
      return;
    }
    console.warn(
      `IndexNow attempt ${attempt} → HTTP ${last.status} ${last.text.slice(0, 200)}`
    );
    if (attempt < 4) await sleep(1000 * 2 ** (attempt - 1));
  }
  // Do not fail the GitHub Action: the key file 404s until the matching
  // Vercel deploy is live, and IndexNow 4xx should not block main.
  console.warn(
    `IndexNow finished without 200/202 (last ${last.status}). URLs were not confirmed submitted.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
