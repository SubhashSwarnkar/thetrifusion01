import BlogAuthorBox from "components/BlogAuthorBox";
import LanguageSwitcher from "components/LanguageSwitcher";
import { siteConfig } from "config/site";
import { localizeHrefs } from "data/i18n/routes";

function formatDate(iso, dateLocale) {
  if (!iso) return "";
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(dateLocale || "en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export default function TranslatedDocument({
  locale,
  englishPath,
  title,
  excerpt,
  date,
  updatedAt,
  readTime,
  categoryName,
  html,
  breadcrumbs = [],
}) {
  const body = localizeHrefs(html, locale.code);
  const minutes = String(readTime || "").match(/\d+/)?.[0];
  const readLabel = minutes
    ? locale.ui.readTime.replace("{n}", minutes)
    : "";

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <a href="/" className="text-lg font-bold text-theme-blue">
            {siteConfig.name}
          </a>
          <nav aria-label={locale.ui.siteNav} className="flex flex-wrap gap-4 text-sm font-medium">
            <a href="/" className="hover:text-theme-purple">
              {locale.ui.home}
            </a>
            <a href="/services" className="hover:text-theme-purple">
              {locale.ui.services}
            </a>
            <a href="/blog" className="hover:text-theme-purple">
              {locale.ui.blog}
            </a>
            <a href="/contact" className="hover:text-theme-purple">
              {locale.ui.contact}
            </a>
          </nav>
        </div>
      </header>
      <LanguageSwitcher
        path={englishPath}
        current={locale.code}
        label={locale.ui.language}
      />
      <main className="mx-auto max-w-3xl px-5 py-10">
        <nav aria-label={locale.ui.breadcrumbsLabel} className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumbs.map((item, index) => (
              <li key={`${item.path}-${index}`} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-theme-purple">{item.name}</span>
                ) : (
                  <a href={item.path} className="hover:underline">
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <article>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-theme-blue sm:text-4xl">
            {title}
          </h1>
          {excerpt ? <p className="mb-4 text-lg text-gray-600">{excerpt}</p> : null}
          <p className="mb-8 text-sm text-gray-500">
            {locale.ui.author}
            {date ? ` · ${locale.ui.published} ${formatDate(date, locale.dateLocale)}` : ""}
            {updatedAt && updatedAt !== date
              ? ` · ${locale.ui.updated} ${formatDate(updatedAt, locale.dateLocale)}`
              : ""}
            {readLabel ? ` · ${readLabel}` : ""}
            {categoryName ? ` · ${categoryName}` : ""}
          </p>
          <div
            className="blog-html text-lg leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </article>
        <BlogAuthorBox reviewDate={updatedAt || date} />
        <aside className="mt-12 rounded-2xl border border-theme-purple/20 bg-gradient-to-br from-light-theme-purple/40 to-white p-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-theme-purple">
            {locale.ui.ctaKicker}
          </p>
          <h2 className="mb-2 text-2xl font-bold text-theme-blue">{locale.ui.ctaTitle}</h2>
          <p className="mb-5 text-gray-600">{locale.ui.ctaBody}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-theme-purple px-6 py-3 font-bold text-white"
            >
              {locale.ui.ctaContact}
            </a>
            <a
              href="/discuss-project"
              className="inline-flex items-center justify-center rounded-full border border-theme-purple px-6 py-3 font-bold text-theme-purple"
            >
              {locale.ui.ctaDiscuss}
            </a>
          </div>
        </aside>
      </main>
      <footer className="border-t border-gray-100 py-8 text-sm text-gray-500">
        <div className="mx-auto max-w-6xl px-5">
          <address className="not-italic">
            <span className="block font-semibold text-theme-blue">
              {siteConfig.name}
            </span>
            <span className="block">{siteConfig.legalName}</span>
            <span className="block">{siteConfig.addressLine}</span>
            <a className="block text-theme-purple hover:underline" href={siteConfig.telHref}>
              {siteConfig.phone}
            </a>
            <span className="block">{siteConfig.hoursLabel}</span>
          </address>
          <p className="mt-2">
            <a href="/about" className="hover:underline">
              {locale.ui.about || "About"}
            </a>
            {" · "}
            <a href="/privacy" className="hover:underline">
              {locale.ui.privacy}
            </a>
            {" · "}
            <a href="/editorial-policy" className="hover:underline">
              {locale.ui.editorialPolicy || "Editorial policy"}
            </a>
            {" · "}
            <a href="/terms" className="hover:underline">
              {locale.ui.terms || "Terms"}
            </a>
            {" · "}
            <a href="/contact" className="hover:underline">
              {locale.ui.contact}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
