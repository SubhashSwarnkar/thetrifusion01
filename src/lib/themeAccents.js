export const THEME_ACCENTS = [
  {
    iconWrap: "bg-light-theme-purple text-theme-purple",
    card: "bg-gradient-to-br from-light-theme-purple to-white border-theme-purple/25",
    bar: "bg-theme-purple",
    text: "text-theme-purple",
    chip: "bg-light-theme-purple text-theme-purple border-theme-purple/25",
    check: "bg-theme-purple text-white",
  },
  {
    iconWrap: "bg-cyan-50 text-theme-cyan",
    card: "bg-gradient-to-br from-cyan-50 to-white border-theme-cyan/30",
    bar: "bg-theme-cyan",
    text: "text-theme-cyan",
    chip: "bg-cyan-50 text-theme-cyan border-theme-cyan/30",
    check: "bg-theme-cyan text-white",
  },
  {
    iconWrap: "bg-pink-50 text-theme-pink",
    card: "bg-gradient-to-br from-pink-50 to-white border-theme-pink/25",
    bar: "bg-theme-pink",
    text: "text-theme-pink",
    chip: "bg-pink-50 text-theme-pink border-theme-pink/25",
    check: "bg-theme-pink text-white",
  },
  {
    iconWrap: "bg-indigo-50 text-theme-blue",
    card: "bg-gradient-to-br from-indigo-50 to-white border-theme-blue/20",
    bar: "bg-theme-blue",
    text: "text-theme-blue",
    chip: "bg-indigo-50 text-theme-blue border-theme-blue/20",
    check: "bg-theme-blue text-white",
  },
];

const SLUG_ACCENT_INDEX = {
  "software-development": 0,
  "website-development": 1,
  "mobile-app-development": 2,
  "ai-development": 0,
  "devops": 3,
  "ui-ux-design": 2,
  "graphic-design": 2,
  "branding": 0,
  "digital-marketing": 1,
  "rpa": 3,
  "salesforce": 1,
  "business-modernization": 3,
  "on-demand": 0,
  "mlm-crm-development": 0,
  "fintech-app-development": 1,
  "ev-charging-app-development": 2,
  "ios-app-development": 2,
  "android-app-development": 1,
  "crm-erp-development": 3,
  "ecommerce-development": 0,
};

export function accentAt(index) {
  return THEME_ACCENTS[index % THEME_ACCENTS.length];
}

export function accentForSlug(slug) {
  const index = SLUG_ACCENT_INDEX[slug];
  return accentAt(typeof index === "number" ? index : 0);
}
