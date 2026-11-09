import { siteConfig } from "config/site";
import { SITE_NAME, SITE_URL, pageMetadata, pages } from "lib/seoConfig";
import { ADSENSE_CLIENT_ID } from "lib/trackingConfig";

const home = pageMetadata("/");
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const rootMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: pages["/"].title,
    template: `%s | ${SITE_NAME}`,
  },
  description: home.description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: siteConfig.legalName,
  category: "technology",
  alternates: {
    languages: {
      "en-IN": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    ...home.openGraph,
    localeAlternate: ["hi_IN"],
  },
  twitter: home.twitter,
  robots: home.robots,
  icons: {
    // Crawlable apex paths (Google ignores data: URI icons). Prefer public/
    // URLs over app/icon.png file conventions so links stay stable (/icon.png).
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
  other: {
    "theme-color": "#0f172a",
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur",
    "google-adsense-account": ADSENSE_CLIENT_ID,
  },
};
