import { localeShell } from "./ui";
import { hiPosts } from "./hi/posts";
import { hiService } from "./hi/service";

const ui = {
  language: "भाषा",
  home: "होम",
  blog: "ब्लॉग",
  services: "सेवाएँ",
  contact: "संपर्क",
  privacy: "गोपनीयता",
  siteNav: "साइट नेविगेशन",
  breadcrumbsLabel: "नेविगेशन पथ",
  published: "प्रकाशित",
  updated: "अद्यतन",
  readTime: "{n} मिनट का पठन",
  author: "TheTriFusion टीम",
  ctaKicker: "अगला कदम",
  ctaTitle: "क्या आप यह अपनी कंपनी के लिए चाहते हैं?",
  ctaBody:
    "Trifusion Infotech Private Limited Jaipur से काम करती है और भारत तथा अन्य देशों में दूर से सुपुर्दगी करती है। बिल GST चालान के साथ बनता है। दायरा बताइए, हम लिखित में उत्तर देंगे।",
  ctaContact: "संपर्क करें",
  ctaDiscuss: "परियोजना पर बात करें",
  categories: {
    webdev: "वेब विकास",
    mobile: "मोबाइल",
    casestudy: "केस स्टडी",
    ai: "आर्टिफिशियल इंटेलिजेंस",
  },
};

export default localeShell({
  code: "hi",
  htmlLang: "hi",
  dir: "ltr",
  ogLocale: "hi_IN",
  dateLocale: "hi-IN",
  ui,
  posts: hiPosts,
  service: hiService,
});
