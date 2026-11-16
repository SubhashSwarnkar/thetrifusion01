#!/usr/bin/env node
/**
 * Fast unit checks for apex host + trailing-slash canonicalization.
 * Run: node --import ./scripts/register-extensionless.mjs scripts/test-canonical-apex.mjs
 */
import { absoluteSiteUrl, siteConfig } from "../src/config/site.js";
import {
  canonicalSitePathname,
  documentCanonicalPathname,
} from "../src/lib/canonicalPath.js";

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
  // Bare locale roots / hubs → English money URLs (one hop).
  ["/es", "/"],
  ["/pt/", "/"],
  ["/hi/services", "/services"],
  ["/ar/services/", "/services"],
  ["/id/services", "/services"],
  // /project → /portfolio in one hop; unknown slugs collapse to hub.
  ["/project", "/portfolio"],
  ["/project/plugone-ev-charging-platform", "/portfolio/plugone-ev-charging-platform"],
  ["/project/asd1293uasdads1", "/portfolio"],
  ["/project/asd1293uasdads1/", "/portfolio"],
  ["/portfolio/asd1293uasdads1", "/portfolio"],
  // Locale EV pages stay on their path for redirects (200, noindex).
  [
    "/es/services/ev-charging-app-development",
    "/es/services/ev-charging-app-development",
  ],
  [
    "/hi/services/ev-charging-app-development/",
    "/hi/services/ev-charging-app-development",
  ],
];

for (const [from, to] of pathCases) {
  check(`canonicalSitePathname(${from})`, canonicalSitePathname(from), to);
}

const documentCases = [
  [
    "/es/services/ev-charging-app-development",
    "/services/ev-charging-app-development",
  ],
  [
    "/pt/services/ev-charging-app-development/",
    "/services/ev-charging-app-development",
  ],
  [
    "/ar/services/ev-charging-app-development",
    "/services/ev-charging-app-development",
  ],
  [
    "/id/services/ev-charging-app-development",
    "/services/ev-charging-app-development",
  ],
  [
    "/hi/services/ev-charging-app-development",
    "/services/ev-charging-app-development",
  ],
  ["/services/ev-charging-app-development", "/services/ev-charging-app-development"],
  ["/project/asd1293uasdads1", "/portfolio"],
  ["/es", "/"],
];

for (const [from, to] of documentCases) {
  check(
    `documentCanonicalPathname(${from})`,
    documentCanonicalPathname(from),
    to
  );
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
