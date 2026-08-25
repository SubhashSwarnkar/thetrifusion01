import Providers from "components/Providers";
import JsonLd from "components/JsonLd";
import GoogleAnalytics from "components/GoogleAnalytics";
import { siteGraphSchema, videoObjectSchema } from "lib/schema";
import { SITE_NAME, SITE_URL, pageMetadata, pages } from "lib/seoConfig";
import { siteConfig } from "config/site";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const home = pageMetadata("/");
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: pages["/"].title,
    template: `%s | ${SITE_NAME}`,
  },
  description: home.description,
  keywords: home.keywords,
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
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className={poppins.className + " antialiased"}>
        <GoogleAnalytics />
        <JsonLd data={siteGraphSchema()} />
        <JsonLd data={videoObjectSchema()} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
