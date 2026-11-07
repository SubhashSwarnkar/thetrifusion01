#!/usr/bin/env node
/**
 * Fast unit checks for apex host + trailing-slash canonicalization.
 * Run: node --import ./scripts/register-extensionless.mjs scripts/test-canonical-apex.mjs
 */
import { absoluteSiteUrl, siteConfig } from "../src/config/site.js";
import { canonicalSitePathname } from "../src/lib/canonicalPath.js";

const APEX = "https://thetrifusion.in";
let failures = 0;

function check(label, got, want) {
  if (got !== want) {
    console.error(`FAIL: ${label}\n  got:  ${got}\n  want: ${want}`);
    failures += 1;
  } else {
    console.log(`OK: ${label}`);
  }
}

check("siteConfig.url is apex", siteConfig.url, APEX);

const pathCases = [
  ["/", "/"],
  ["/services/website-development", "/services/website-development"],
  ["/services/website-development/", "/services/website-development"],
  ["/services/website-development///", "/services/website-development"],
  ["/services/digital-marketing/", "/services/digital-marketing"],
  ["/services/mobile-app", "/services/mobile-app-development"],
  ["/services/mobile-app/", "/services/mobile-app-development"],
  ["/services/web-development/", "/services/website-development"],
  ["/web-development/", "/services/website-development"],
];

for (const [from, to] of pathCases) {
  check(`canonicalSitePathname(${from})`, canonicalSitePathname(from), to);
}

const urlCases = [
  ["/", APEX],
  ["/services/website-development", `${APEX}/services/website-development`],
  ["/services/website-development/", `${APEX}/services/website-development`],
  [
    "https://www.thetrifusion.in/services/digital-marketing/",
    `${APEX}/services/digital-marketing`,
  ],
  [
    "https://thetrifusion.com/services/website-development",
    `${APEX}/services/website-development`,
  ],
  [
    "https://www.thetrifusion.com/services/digital-marketing/",
    `${APEX}/services/digital-marketing`,
  ],
  [
    "https://thetrifusion.in/services/website-development/",
    `${APEX}/services/website-development`,
  ],
  ["/services/digital-marketing/?utm=1", `${APEX}/services/digital-marketing?utm=1`],
];

for (const [from, to] of urlCases) {
  check(`absoluteSiteUrl(${from})`, absoluteSiteUrl(from), to);
}

if (failures) {
  console.error(`\n${failures} failure(s)`);
  process.exit(1);
}
console.log("\nAll canonical apex unit checks passed.");
