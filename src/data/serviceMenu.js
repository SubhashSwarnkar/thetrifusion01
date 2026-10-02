/**
 * Services mega-menu groups. The homepage hero reads this same list so a new
 * menu item shows up in Core services without a second hand-maintained copy.
 */
export const SERVICE_MENU_GROUPS = [
  {
    heading: "Build",
    accentIndex: 0,
    slugs: [
      "software-development",
      "devops",
      "website-development",
      "mobile-app-development",
      "ios-app-development",
      "android-app-development",
      "ai-development",
    ],
  },
  {
    heading: "Design",
    accentIndex: 2,
    slugs: ["ui-ux-design", "graphic-design", "branding"],
  },
  {
    heading: "Grow",
    accentIndex: 1,
    slugs: [
      "digital-marketing",
      "rpa",
      "salesforce",
      "business-modernization",
      "on-demand",
    ],
  },
  {
    heading: "Specialties",
    accentIndex: 3,
    slugs: [
      "mlm-crm-development",
      "fintech-app-development",
      "ev-charging-app-development",
      "crm-erp-development",
    ],
    extras: [
      {
        href: "/solutions/ecommerce-website-development",
        slug: "ecommerce-website-development",
        icon: "ecommerce-development",
        title: "Ecommerce Website Development",
        shortDescription:
          "Shopify, WooCommerce & custom stores, B2B and marketplaces.",
      },
      {
        href: "/ecommerce-development",
        slug: "ecommerce-development",
        title: "Ecommerce Packages",
        shortDescription:
          "Live in 48 hrs or 50% refund. From ₹25,000 — web + apps.",
      },
    ],
  },
];
