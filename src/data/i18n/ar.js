import { localeShell } from "./ui";
import { arPosts } from "./ar/posts";
import { arService } from "./ar/service";

const ui = {
  language: "اللغة",
  home: "الرئيسية",
  blog: "المدونة",
  services: "الخدمات",
  contact: "اتصل بنا",
  privacy: "الخصوصية",
  editorialPolicy: "السياسة التحريرية",
  about: "من نحن",
  terms: "الشروط",
  siteNav: "تنقل الموقع",
  breadcrumbsLabel: "مسار التنقل",
  published: "تاريخ النشر",
  updated: "آخر تحديث",
  readTime: "قراءة في {n} دقائق",
  author: "فريق TheTriFusion",
  ctaKicker: "الخطوة التالية",
  ctaTitle: "هل تريد ذلك لشركتك؟",
  ctaBody:
    "تعمل Trifusion Infotech Private Limited من Jaipur وتسلّم عن بُعد داخل الهند وخارجها. تصدر الفاتورة وفق GST. اشرح نطاق العمل ونردّ عليك كتابةً.",
  ctaContact: "اتصل بنا",
  ctaDiscuss: "ناقش المشروع",
  categories: {
    webdev: "تطوير الويب",
    mobile: "الجوال",
    casestudy: "دراسة حالة",
    ai: "الذكاء الاصطناعي",
  },
};

export default localeShell({
  code: "ar",
  htmlLang: "ar",
  dir: "rtl",
  ogLocale: "ar",
  dateLocale: "ar",
  ui,
  posts: arPosts,
  service: arService,
});
