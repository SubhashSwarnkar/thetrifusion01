import Providers from "components/Providers";
import JsonLd from "components/JsonLd";
import GoogleAnalytics from "components/GoogleAnalytics";
import { siteGraphSchema, videoObjectSchema } from "lib/schema";
import { SITE_NAME, SITE_URL, pageMetadata, pages } from "lib/seoConfig";
import { siteConfig } from "config/site";
import { CONSENT_DEFAULT_INLINE } from "lib/gtagConsent";
import { GTM_ID, META_PIXEL_ID } from "lib/trackingConfig";
import { Poppins } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {CONSENT_DEFAULT_INLINE}
        </Script>
        {GTM_ID ? (
          <Script id="gtm-loader" strategy="beforeInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        ) : null}
      </head>
      <body className={poppins.className + " antialiased"}>
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
        {META_PIXEL_ID ? (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        ) : null}
        <GoogleAnalytics />
        <JsonLd data={siteGraphSchema()} />
        <JsonLd data={videoObjectSchema()} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
