import GoogleAnalytics from "components/GoogleAnalytics";
import JsonLd from "components/JsonLd";
import Providers from "components/Providers";
import { CONSENT_DEFAULT_INLINE } from "lib/gtagConsent";
import { siteGraphSchema } from "lib/schema";
import { ADSENSE_CLIENT_ID, GTM_ID } from "lib/trackingConfig";

/** Shared <head> extras for every root layout. html/body stay in the layout file. */
export function SiteHead() {
  return (
    <>
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
    </>
  );
}

export function SiteBody({ children }) {
  return (
    <>
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
    </>
  );
}
