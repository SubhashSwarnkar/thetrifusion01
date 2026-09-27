import { localeShell } from "./ui.js";
import { ptPosts } from "./pt/posts.js";
import { ptService } from "./pt/service.js";

const ui = {
  language: "Idioma",
  home: "Início",
  blog: "Blog",
  services: "Serviços",
  contact: "Contato",
  privacy: "Privacidade",
  siteNav: "Navegação do site",
  breadcrumbsLabel: "Trilha",
  published: "Publicado",
  updated: "Atualizado",
  readTime: "{n} min de leitura",
  author: "Equipe TheTriFusion",
  ctaKicker: "Próximo passo",
  ctaTitle: "Quer isso para a sua empresa?",
  ctaBody:
    "A Trifusion Infotech Private Limited trabalha em Jaipur e entrega à distância na Índia e em outros países. A cobrança sai com fatura de GST. Conte o escopo e respondemos por escrito.",
  ctaContact: "Entrar em contato",
  ctaDiscuss: "Falar do projeto",
  categories: {
    webdev: "Desenvolvimento web",
    mobile: "Aplicativos",
    casestudy: "Estudo de caso",
    ai: "Inteligência artificial",
  },
};

export default localeShell({
  code: "pt",
  htmlLang: "pt",
  dir: "ltr",
  ogLocale: "pt_BR",
  dateLocale: "pt-BR",
  ui,
  posts: ptPosts,
  service: ptService,
});
