import {
  isTranslatedEnglishPath,
  LOCALE_LABELS,
  LOCALE_ORDER,
  localizedPath,
} from "data/i18n/routes";

/**
 * Plain links only. Rendered from a Server Component so it adds no client bundle.
 * `label` is the current locale's word for "Language".
 */
export default function LanguageSwitcher({ path, current = "en", label = "Language" }) {
  if (!isTranslatedEnglishPath(path)) return null;

  return (
    <nav aria-label={label} className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-1 px-5 py-2 text-sm">
        <span className="font-semibold text-slate-600">{label}</span>
        {LOCALE_ORDER.map((code) => {
          const active = code === current;
          return (
            <a
              key={code}
              href={localizedPath(code, path)}
              hrefLang={code}
              lang={code}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "font-bold text-theme-purple"
                  : "text-slate-700 underline-offset-2 hover:underline"
              }
            >
              {LOCALE_LABELS[code]}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
