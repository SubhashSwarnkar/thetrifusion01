import es from "./es";
import pt from "./pt";
import ar from "./ar";
import id from "./id";
import hi from "./hi";
import { LOCALE_CODES, TRANSLATED_BLOG_SLUGS } from "./routes";

const LOCALES = { es, pt, ar, id, hi };

const SERVICE_IDS = [
  "cms-for-cpo-emsp",
  "cpo-cms",
  "emsp-cms",
  "cpms",
  "ocpp-backend",
  "ocpi-roaming",
  "ocpp-vs-ocpi",
  "emsp-cpo",
  "driver-app",
  "operator-dashboard",
  "smart-charging",
  "hardware-integration",
  "billing-tariffs",
  "fleet-charging",
  "white-label",
  "plug-and-charge",
  "analytics",
  "india-context",
  "who-its-for",
  "cost-and-timeline",
  "ev-first-release",
  "process",
  "tech-stack",
  "faq",
];

function assertLocale(locale) {
  if (locale.code === "ar" && locale.dir !== "rtl") {
    throw new Error("Arabic pages must set dir=rtl");
  }
  if (locale.code !== "ar" && locale.dir !== "ltr") {
    throw new Error(`${locale.code} must set dir=ltr`);
  }
  if (!locale.service?.content || !locale.service.title || !locale.service.description) {
    throw new Error(`${locale.code} service translation is incomplete`);
  }
  if (!/faq/i.test(locale.service.content)) {
    throw new Error(`${locale.code} service is missing an FAQ heading`);
  }
  for (const id of SERVICE_IDS) {
    if (!locale.service.content.includes(`id="${id}"`)) {
      throw new Error(`${locale.code} service is missing #${id}`);
    }
  }
  for (const slug of TRANSLATED_BLOG_SLUGS) {
    const post = locale.posts?.[slug];
    if (!post?.title || !post?.description || !post?.content) {
      throw new Error(`${locale.code} is missing the translation for ${slug}`);
    }
    if (!/faq/i.test(post.content)) {
      throw new Error(`${locale.code} ${slug} is missing an FAQ heading`);
    }
  }
}

for (const code of LOCALE_CODES) {
  const locale = LOCALES[code];
  if (!locale || locale.code !== code) {
    throw new Error(`Locale module ${code} is missing or mismatched`);
  }
  assertLocale(locale);
}

export function getLocale(code) {
  return LOCALES[code] || null;
}

export { LOCALES };
