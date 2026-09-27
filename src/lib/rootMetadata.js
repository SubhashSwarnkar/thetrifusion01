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
    // Inline mark so the tab icon is not a render-competing request for the 17KB logo.
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%236610f2'/%3E%3Ctext x='16' y='22' text-anchor='middle' font-size='18' font-family='Arial' fill='white'%3ET%3C/text%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
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
    "geo.position": "26.9196;75.7878",
    ICBM: "26.9196, 75.7878",
    "google-adsense-account": ADSENSE_CLIENT_ID,
  },
};
