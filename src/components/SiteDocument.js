import AdSenseScript from "components/AdSenseScript";
import GoogleAnalytics from "components/GoogleAnalytics";
import JsonLd from "components/JsonLd";
import Providers from "components/Providers";
import { eventNoindexSlugList } from "data/blogData";
import { CONSENT_DEFAULT_INLINE } from "lib/gtagConsent";
import { registerEventNoindexSlugs } from "lib/adsensePaths";
import { siteGraphSchema } from "lib/schema";
import { GTM_ID } from "lib/trackingConfig";

/** Shared <head> extras for every root layout. html/body stay in the layout file. */
export function SiteHead() {
  registerEventNoindexSlugs(eventNoindexSlugList());
  return (
    <>
      <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://connect.facebook.net" />
      {/* Consent Mode v2 defaults must run before the AdSense script. */}
      <script
        id="gtag-consent-default"
        dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_INLINE }}
      />
      <AdSenseScript eventNoindexSlugs={eventNoindexSlugList()} />
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
