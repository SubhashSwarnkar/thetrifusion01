/**
 * Crawl paths onto service URLs Google still has as "Discovered / unknown".
 * Anchors use the service keyword. Blog helpers keep 2–4 /services links
 * per article (Built-by CTA plus at most one extra).
 */

export const SERVICE_KEYWORD_BY_SLUG = {
  "website-development": "website development company in Jaipur",
  "software-development": "custom software development company in India",
  "mobile-app-development": "mobile app development company in India",
  "graphic-design": "graphic design company in Jaipur",
  rpa: "RPA services company in India",
  "ai-development": "AI development company in India",
  "on-demand": "hire dedicated developers in India",
  "mlm-crm-development": "MLM software development company in India",
  "ev-charging-app-development": "EV charging app development in India",
  "ios-app-development": "iOS app development company in India",
  "android-app-development": "Android app development company in Jaipur",
  "ui-ux-design": "UI/UX design company in Jaipur",
  branding: "branding agency in Jaipur",
  devops: "DevOps services in Jaipur",
  salesforce: "Salesforce implementation company in India",
  "business-modernization": "business modernization in India",
  "digital-marketing": "digital marketing company in India",
  "crm-erp-development": "custom CRM and ERP development in Jaipur",
  "fintech-app-development": "fintech app development company in India",
};

export const UNINDEXED_SERVICE_LINKS = [
  {
    href: "/services/website-development",
    anchor: "website development company in Jaipur",
  },
  {
    href: "/services/software-development",
    anchor: "custom software development company in India",
  },
  {
    href: "/services/graphic-design",
    anchor: "graphic design company in Jaipur",
  },
  {
    href: "/services/rpa",
    anchor: "RPA services company in India",
  },
  {
    href: "/services/ai-development",
    anchor: "AI development company in India",
  },
  {
    href: "/services/on-demand",
    anchor: "hire dedicated developers in India",
  },
  {
    href: "/services/mlm-crm-development",
    anchor: "MLM software development company in India",
  },
  {
    href: "/services/ev-charging-app-development",
    anchor: "EV charging app development in India",
  },
  {
    href: "/services/ios-app-development",
    anchor: "iOS app development company in India",
  },
  {
    href: "/services/android-app-development",
    anchor: "Android app development company in Jaipur",
  },
  {
    href: "/services/ui-ux-design",
    anchor: "UI/UX design company in Jaipur",
  },
  {
    href: "/services/branding",
    anchor: "branding agency in Jaipur",
  },
  {
    href: "/services/devops",
    anchor: "DevOps services in Jaipur",
  },
  {
    href: "/services/salesforce",
    anchor: "Salesforce implementation company in India",
  },
  {
    href: "/services/business-modernization",
    anchor: "business modernization in India",
  },
  {
    href: "/services/digital-marketing",
    anchor: "digital marketing company in India",
  },
  {
    href: "/services/fintech-app-development/bbps-software",
    anchor: "BBPS software development",
  },
  {
    href: "/services/fintech-app-development/aeps-software",
    anchor: "AEPS software development",
  },
  {
    href: "/services/fintech-app-development/dmt-software",
    anchor: "DMT software development",
  },
  {
    href: "/services/fintech-app-development/recharge-software",
    anchor: "recharge software development",
  },
];

/** Each service page should point at nearby service URLs (not city landings). */
export const SERVICE_SIBLINGS = {
  "software-development": [
    "website-development",
    "crm-erp-development",
    "on-demand",
    "ai-development",
  ],
  "website-development": [
    "ui-ux-design",
    "digital-marketing",
    "graphic-design",
    "software-development",
  ],
  // Indexed hub (GSC): push crawl equity to Discovered /services URLs.
  "mobile-app-development": [
    "ios-app-development",
    "android-app-development",
    "ai-development",
    "software-development",
    "ui-ux-design",
    "website-development",
    "fintech-app-development",
    "ev-charging-app-development",
    "on-demand",
  ],
  "ios-app-development": [
    "android-app-development",
    "mobile-app-development",
    "ui-ux-design",
    "on-demand",
  ],
  "android-app-development": [
    "ios-app-development",
    "mobile-app-development",
    "ui-ux-design",
    "on-demand",
  ],
  "ui-ux-design": [
    "website-development",
    "graphic-design",
    "branding",
    "mobile-app-development",
  ],
  "graphic-design": [
    "branding",
    "ui-ux-design",
    "digital-marketing",
    "website-development",
  ],
  branding: ["graphic-design", "website-development", "ui-ux-design", "digital-marketing"],
  "digital-marketing": [
    "website-development",
    "graphic-design",
    "branding",
    "ui-ux-design",
  ],
  rpa: [
    "business-modernization",
    "ai-development",
    "software-development",
    "on-demand",
  ],
  "business-modernization": [
    "software-development",
    "rpa",
    "crm-erp-development",
    "on-demand",
  ],
  salesforce: [
    "crm-erp-development",
    "software-development",
    "on-demand",
    "ai-development",
  ],
  "ai-development": [
    "software-development",
    "rpa",
    "mobile-app-development",
    "website-development",
  ],
  devops: [
    "software-development",
    "on-demand",
    "website-development",
    "ai-development",
  ],
  "on-demand": [
    "software-development",
    "mobile-app-development",
    "devops",
    "rpa",
  ],
  "mlm-crm-development": [
    "crm-erp-development",
    "software-development",
    "fintech-app-development",
    "website-development",
  ],
  // Indexed hub (GSC): mesh into software, apps, MLM, CRM; products are
  // linked separately via fintech relatedLinks (bbps/aeps/dmt/recharge).
  "fintech-app-development": [
    "software-development",
    "mobile-app-development",
    "android-app-development",
    "ios-app-development",
    "mlm-crm-development",
    "crm-erp-development",
    "website-development",
    "ai-development",
  ],
  "ev-charging-app-development": [
    "software-development",
    "mobile-app-development",
    "android-app-development",
    "ios-app-development",
  ],
  // Indexed hub (GSC): push equity to Discovered ops / AI / fintech URLs.
  "crm-erp-development": [
    "software-development",
    "mlm-crm-development",
    "salesforce",
    "business-modernization",
    "rpa",
    "ai-development",
    "fintech-app-development",
    "on-demand",
    "devops",
  ],
};

/**
 * Extra referring links rendered on the three GSC-indexed service pages so
 * Discovered URLs stop looking like orphans. Paths only (apex-relative).
 */
export const INDEXED_HUB_REFERRING_LINKS = {
  "mobile-app-development": [
    {
      href: "/services/android-app-development",
      title: "Android app development",
      text: "Play Store-first Android builds from Jaipur.",
    },
    {
      href: "/services/ios-app-development",
      title: "iOS app development",
      text: "App Store and TestFlight delivery.",
    },
    {
      href: "/services/ai-development",
      title: "AI development",
      text: "Assistants and document ops inside the app.",
    },
    {
      href: "/services/software-development",
      title: "Custom software development",
      text: "APIs and admin that sit behind the mobile app.",
    },
    {
      href: "/services/ui-ux-design",
      title: "UI/UX design",
      text: "Figma flows before the build.",
    },
    {
      href: "/services/ev-charging-app-development",
      title: "EV charging app development",
      text: "Driver apps on OCPP/OCPI stacks.",
    },
  ],
  "crm-erp-development": [
    {
      href: "/services/software-development",
      title: "Custom software development",
      text: "When CRM is one module of a larger product.",
    },
    {
      href: "/services/mlm-crm-development",
      title: "MLM CRM development",
      text: "Unilevel trees and payout ledgers.",
    },
    {
      href: "/services/salesforce",
      title: "Salesforce implementation",
      text: "Flows on an org you already pay for.",
    },
    {
      href: "/services/rpa",
      title: "RPA services",
      text: "Invoice and Tally bots beside the CRM.",
    },
    {
      href: "/services/business-modernization",
      title: "Business modernization",
      text: "Spreadsheet cutovers into CRM/ERP.",
    },
    {
      href: "/services/ai-development",
      title: "AI development",
      text: "Retrieval and assistants on CRM data.",
    },
    {
      href: "/services/fintech-app-development",
      title: "Fintech app development",
      text: "When wallets and settlement sit next to CRM.",
    },
  ],
  "fintech-app-development": [
    {
      href: "/services/fintech-app-development/bbps-software",
      title: "BBPS software",
      text: "Bharat BillPay retailer and distributor panels.",
    },
    {
      href: "/services/fintech-app-development/aeps-software",
      title: "AEPS software",
      text: "Aadhaar-enabled payments on certified devices.",
    },
    {
      href: "/services/fintech-app-development/dmt-software",
      title: "DMT software",
      text: "Domestic money transfer for retailer networks.",
    },
    {
      href: "/services/fintech-app-development/recharge-software",
      title: "Recharge software",
      text: "Mobile and DTH top-ups on your partner API.",
    },
    {
      href: "/services/software-development",
      title: "Custom software development",
      text: "When fintech sits inside a broader product.",
    },
    {
      href: "/services/mlm-crm-development",
      title: "MLM CRM development",
      text: "When wallet payouts sit next to a compensation tree.",
    },
    {
      href: "/services/android-app-development",
      title: "Android app development",
      text: "Retailer apps that ship on Play Store.",
    },
    {
      href: "/services/mobile-app-development",
      title: "Mobile app development",
      text: "iOS + Android when both stores matter.",
    },
  ],
};

function hashSlug(slug) {
  const value = String(slug || "");
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function rotatedUnindexedLinks(slug, count = 1) {
  const list = UNINDEXED_SERVICE_LINKS;
  if (!list.length) return [];
  const start = hashSlug(slug) % list.length;
  const out = [];
  for (let i = 0; i < count; i += 1) {
    out.push(list[(start + i) % list.length]);
  }
  return out;
}

export function serviceHrefsInHtml(html) {
  const found = new Set();
  const source = typeof html === "string" ? html : "";
  const re = /href="(\/services\/[^"#?]+)/g;
  let match;
  while ((match = re.exec(source))) {
    found.add(match[1].replace(/\/$/, ""));
  }
  return found;
}

const MAX_SERVICE_LINKS_PER_POST = 4;

export function withIndexServiceLinks(slug, html) {
  const source = String(html || "");
  if (source.includes("Related delivery from the same Jaipur studio")) {
    return source;
  }
  const existing = serviceHrefsInHtml(source);
  const room = MAX_SERVICE_LINKS_PER_POST - existing.size;
  if (room <= 0) return source;
  const extra = rotatedUnindexedLinks(slug, room + 2).filter(
    (item) => !existing.has(item.href)
  );
  if (!extra.length) return source;
  const pick = extra.slice(0, Math.min(room, 2));
  const parts = pick.map(
    (item) => `<a href="${item.href}">${item.anchor}</a>`
  );
  const sentence =
    pick.length === 1
      ? `<p>Related delivery from the same Jaipur studio: ${parts[0]}.</p>`
      : `<p>Related delivery from the same Jaipur studio: ${parts[0]} and ${parts[1]}.</p>`;
  return `${source.trimEnd()}\n${sentence}\n`;
}
