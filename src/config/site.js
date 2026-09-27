/**
 * Single source of truth for NAP, domain, and brand defaults.
 * Public NAP may be overridden via NEXT_PUBLIC_* env vars.
 */
const env = (key, fallback) => {
  if (typeof process === "undefined" || !process.env) return fallback;
  return process.env[key] || fallback;
};

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
  url: env("NEXT_PUBLIC_SITE_URL", "https://thetrifusion.in").replace(
    /\/$/,
    ""
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
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
