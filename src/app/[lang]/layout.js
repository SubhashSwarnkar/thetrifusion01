import { notFound } from "next/navigation";
import { getLocale } from "data/i18n";
import { LOCALE_CODES } from "data/i18n/routes";

export function generateStaticParams() {
  return LOCALE_CODES.map((lang) => ({ lang }));
}

export const dynamicParams = false;

/**
 * The root layout is the only place the App Router allows <html> and <body>,
 * and that shell is shared by every route, so <html lang> stays en-IN.
 * This segment sets lang and dir on the content wrapper (the no-JS source of
 * truth, including dir="rtl" for Arabic). The inline script updates
 * document.documentElement so the html element matches after parse. It is not
 * a client component and adds no JS bundle.
 */
export default function LocaleLayout({ children, params }) {
  const locale = getLocale(params.lang);
  if (!locale) notFound();

  const htmlLang = locale.htmlLang;
  const dir = locale.dir;

  return (
    <div lang={htmlLang} dir={dir}>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(htmlLang)};document.documentElement.dir=${JSON.stringify(dir)};`,
        }}
      />
      {children}
    </div>
  );
}
