import Providers from "components/Providers";
import JsonLd from "components/JsonLd";
import GoogleAnalytics from "components/GoogleAnalytics";
import { siteGraphSchema } from "lib/schema";
import { SITE_NAME, SITE_URL, pageMetadata, pages } from "lib/seoConfig";
import { siteConfig } from "config/site";
import { CONSENT_DEFAULT_INLINE } from "lib/gtagConsent";
import { GTM_ID, ADSENSE_CLIENT_ID } from "lib/trackingConfig";
import "./globals.css";

const home = pageMetadata("/");
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        {/*
          AdSense ownership snippet stays in the HTML for review.
          type=text/plain keeps the URL visible without downloading during LCP.
          The boot below inserts a real script for every visitor at 4s.
        */}
        {ADSENSE_CLIENT_ID ? (
          <script
            id="adsense-loader"
            type="text/plain"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            data-ad-client={ADSENSE_CLIENT_ID}
          />
        ) : null}
        {ADSENSE_CLIENT_ID ? (
          <script
            id="adsense-boot"
            dangerouslySetInnerHTML={{
              __html: `(function(){var src=${JSON.stringify(
                `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`
              )};function load(){if(document.querySelector('script[data-ad-live="1"]'))return;var s=document.createElement("script");s.src=src;s.async=true;s.crossOrigin="anonymous";s.setAttribute("data-ad-client",${JSON.stringify(
                ADSENSE_CLIENT_ID
              )});s.setAttribute("data-ad-live","1");document.head.appendChild(s);}setTimeout(load,4000);})();`,
            }}
          />
        ) : null}
        <script
          id="gtag-consent-default"
          dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_INLINE }}
        />
      </head>
      <body className="antialiased">
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
        <GoogleAnalytics />
        <JsonLd data={siteGraphSchema()} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
