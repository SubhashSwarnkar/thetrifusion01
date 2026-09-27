import { notFound } from "next/navigation";
import { SiteBody, SiteHead } from "components/SiteDocument";
import { getLocale } from "data/i18n";
import { LOCALE_CODES } from "data/i18n/routes";
import { rootMetadata } from "lib/rootMetadata";
import "../globals.css";

export const metadata = rootMetadata;

export function generateStaticParams() {
  return LOCALE_CODES.map((lang) => ({ lang }));
}

export const dynamicParams = false;

/**
 * Root layout for /es, /pt, /ar, /id, and /hi.
 * The English site uses src/app/(en)/layout.js so each tree can set <html lang>.
 */
export default function LocaleLayout({ children, params }) {
  const locale = getLocale(params.lang);
  if (!locale) notFound();

  return (
    <html lang={locale.htmlLang} dir={locale.dir}>
      <head>
        <SiteHead />
      </head>
      <body className="antialiased">
        <SiteBody>{children}</SiteBody>
      </body>
    </html>
  );
}
