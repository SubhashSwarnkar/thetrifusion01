import { localeShell } from "./ui";
import { idPosts } from "./id/posts";
import { idService } from "./id/service";

const ui = {
  language: "Bahasa",
  home: "Beranda",
  blog: "Blog",
  services: "Layanan",
  contact: "Kontak",
  privacy: "Privasi",
  siteNav: "Navigasi situs",
  breadcrumbsLabel: "Jejak",
  published: "Terbit",
  updated: "Diperbarui",
  readTime: "Baca {n} menit",
  author: "Tim TheTriFusion",
  ctaKicker: "Langkah berikutnya",
  ctaTitle: "Ingin ini untuk perusahaan Anda?",
  ctaBody:
    "Trifusion Infotech Private Limited bekerja dari Jaipur dan mengirimkan pekerjaan dari jarak jauh di India serta di negara lain. Penagihan disertai faktur GST. Sampaikan cakupannya, dan kami membalas secara tertulis.",
  ctaContact: "Hubungi kami",
  ctaDiscuss: "Bahas proyek",
  categories: {
    webdev: "Pengembangan web",
    mobile: "Aplikasi",
    casestudy: "Studi kasus",
    ai: "Kecerdasan buatan",
  },
};

export default localeShell({
  code: "id",
  htmlLang: "id",
  dir: "ltr",
  ogLocale: "id_ID",
  dateLocale: "id-ID",
  ui,
  posts: idPosts,
  service: idService,
});
