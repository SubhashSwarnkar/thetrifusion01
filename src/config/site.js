/**
 * Single source of truth for NAP, domain, and brand defaults.
 * Public NAP may be overridden via NEXT_PUBLIC_* env vars.
 * The public site origin is always the apex https://thetrifusion.in.
 */
const APEX_ORIGIN = "https://thetrifusion.in";

const env = (key, fallback) => {
  if (typeof process === "undefined" || !process.env) return fallback;
  return process.env[key] || fallback;
};

/**
 * metadataBase, canonical, hreflang, sitemap, robots, og:url, and JSON-LD
 * all read siteConfig.url. www and retired .com hosts are rewritten to the
 * apex so a mis-set NEXT_PUBLIC_SITE_URL cannot emit them.
 */
function canonicalSiteOrigin(raw) {
  const value = String(raw || "").trim();
  if (!value) return APEX_ORIGIN;
  try {
    const parsed = new URL(value);
    const host = parsed.hostname.replace(/\.$/, "").toLowerCase();
    if (
      host === "thetrifusion.in" ||
      host === "www.thetrifusion.in" ||
      host === "thetrifusion.com" ||
      host === "www.thetrifusion.com"
    ) {
      return APEX_ORIGIN;
    }
    const port = parsed.port ? `:${parsed.port}` : "";
    return `${parsed.protocol}//${parsed.hostname}${port}`;
  } catch {
    return APEX_ORIGIN;
  }
}

export const siteConfig = {
  name: env("NEXT_PUBLIC_SITE_NAME", "TheTriFusion"),
  legalName: env(
    "NEXT_PUBLIC_LEGAL_NAME",
    "Trifusion Infotech Private Limited"
  ),
  legalNameShort: env(
    "NEXT_PUBLIC_LEGAL_NAME_SHORT",
    "Trifusion Infotech Pvt. Ltd."
  ),
  tagline: "IT Solutions, Websites & Mobile Apps",
  url: canonicalSiteOrigin(
    env("NEXT_PUBLIC_SITE_URL", APEX_ORIGIN)
  ),
  email: env("NEXT_PUBLIC_COMPANY_EMAIL", "contact@thetrifusion.in"),
  phone: env("NEXT_PUBLIC_COMPANY_PHONE", "+91 63781 33780"),
  /** Schema telephone. Hyphenated display, distinct from the spaced public phone. */
  phoneSchema: "+91-63781-33780",
  phoneE164: env("NEXT_PUBLIC_COMPANY_PHONE_E164", "+916378133780"),
  whatsappNumber: env("NEXT_PUBLIC_WHATSAPP_NUMBER", "+916378133780"),
  linkedin: env(
    "NEXT_PUBLIC_LINKEDIN_URL",
    "https://linkedin.com/company/the-trifusion"
  ),
  instagram: env(
    "NEXT_PUBLIC_INSTAGRAM_URL",
    "https://instagram.com/thetrifusion"
  ),
  city: env("NEXT_PUBLIC_COMPANY_CITY", "Jaipur"),
  region: env("NEXT_PUBLIC_COMPANY_REGION", "Rajasthan"),
  country: env("NEXT_PUBLIC_COMPANY_COUNTRY", "IN"),
  countryName: "India",
  streetAddress: env(
    "NEXT_PUBLIC_COMPANY_STREET",
    "5th Floor, Amoro Building, Patrakar Colony"
  ),
  postalCode: env("NEXT_PUBLIC_COMPANY_POSTAL_CODE", "302020"),
  locale: "en_IN",
  openingHours: env("NEXT_PUBLIC_OPENING_HOURS", "Mo-Sa 10:00-19:00"),
  hoursLabel:
    "Monday to Saturday, 10:00 AM to 7:00 PM IST (closed Sunday)",
  calendlyUrl: env("NEXT_PUBLIC_CALENDLY_URL", ""),
  /** One-line NAP used everywhere the office is shown. */
  get addressLine() {
    return `${this.streetAddress}, ${this.city}, ${this.region} ${this.postalCode}, ${this.countryName}`;
  },
  get telHref() {
    return `tel:${this.phoneE164}`;
  },
  get mapsUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${this.legalName}, ${this.addressLine}`
    )}`;
  },
  defaultOgImagePath: "/images/Web.png",
  logoPath: "/logo.svg",
  get defaultOgImage() {
    return `${this.url}${this.defaultOgImagePath}`;
  },
  get logoUrl() {
    return `${this.url}${this.logoPath}`;
  },
};

export function absoluteSiteUrl(path = "/") {
  // Keep homepage canonical without trailing slash to match Next.js default
  // (trailingSlash: false) and avoid sitemap/canonical mismatch on "/".
  if (!path || path === "/") return siteConfig.url;
  const value = String(path).trim();
  if (/^https?:\/\//i.test(value)) {
    try {
      const parsed = new URL(value);
      const origin = canonicalSiteOrigin(
        `${parsed.protocol}//${parsed.host}`
      );
      if (origin !== APEX_ORIGIN) return value;
      const suffix = `${parsed.pathname}${parsed.search}${parsed.hash}`;
      if (!suffix || suffix === "/") return APEX_ORIGIN;
      return `${APEX_ORIGIN}${suffix}`;
    } catch {
      return siteConfig.url;
    }
  }
  return `${siteConfig.url}${value.startsWith("/") ? value : `/${value}`}`;
}
