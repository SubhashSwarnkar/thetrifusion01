export const ECOMMERCE_PATH = "/ecommerce-development";

export const ecommercePage = {
  path: ECOMMERCE_PATH,
  slug: "ecommerce-development",
  serviceName: "Ecommerce Development",
  navTitle: "Ecommerce Development",
  shortDescription:
    "Web + Android + iOS ecommerce from ₹25,000. Grocery, fashion, and every store type — single vendor or multi-vendor. No extra development fees.",
  kicker: "Ecommerce development · Jaipur",
  h1: "Ecommerce website + Android + iOS app — grocery, fashion, and every store type",
  outcome:
    "₹25,000 single vendor · ₹35,000 multi-vendor · Web, Android, and iOS included. Nothing extra from us for the three platforms.",
  intro:
    "TheTriFusion in Jaipur builds complete ecommerce products for Indian sellers: a customer website, an Android app, and an iOS app — plus admin, catalog, checkout, and Razorpay/UPI. Pick grocery, clothing, electronics, or any store type below. One seller or a marketplace. The package price is the development fee.",
  metaTitle:
    "Ecommerce Development Company India | Web + Android + iOS from ₹25,000 | TheTriFusion",
  metaDescription:
    "Ecommerce development in Jaipur: grocery, fashion, and every store type. Single vendor ₹25,000 or multi-vendor ₹35,000. Web + Android + iOS included — no extra development fees.",
  keywords:
    "ecommerce development company India, ecommerce app development Jaipur, grocery ecommerce app, clothing ecommerce website, single vendor ecommerce, multi vendor marketplace app, ecommerce website android ios, online store development India, D2C ecommerce package, fashion ecommerce app India",
  whatsappMessage:
    "Hi TriFusion, I want the ecommerce package (web + Android + iOS). Please share next steps.",
  projectType: "Ecommerce",
  leadSource: "ecommerce-development",
  heroImage: "/images/ecommerce/hero-storefront.png",
  heroImageAlt:
    "Ecommerce website and mobile shopping apps for grocery and fashion stores by TheTriFusion",
  trust: [
    "Office in Jaipur, Rajasthan",
    "Web + Android + iOS in both packages",
    "Razorpay / UPI checkout",
    "Play Store + App Store listing support",
  ],
  stack: [
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "MongoDB",
    "Razorpay",
    "Firebase",
    "AWS",
  ],
  proofIds: ["dailyconcepts-ecommerce-pos", "shopnova-ecommerce-platform"],
  relatedBlogSlug: "ecommerce-website-development-cost-india",
  relatedSolutionHref: "/solutions/ecommerce-website-development",
  relatedSolutionLabel: "Ecommerce website-only solution page",
};

export const ecommercePackages = [
  {
    id: "single-vendor",
    name: "Single vendor",
    price: 25000,
    priceLabel: "₹25,000",
    badge: "One brand, one catalog",
    popular: false,
    image: "/images/ecommerce/package-single-vendor.png",
    imageAlt:
      "Single vendor ecommerce storefront on web and mobile — one shop, one catalog",
    summary:
      "Your own D2C or retail store. Customers shop on web, Android, and iOS. You run one catalog from one admin.",
    includes: [
      "Customer website (responsive)",
      "Android app",
      "iOS app",
      "Admin panel",
      "Product catalog, categories, variants",
      "Cart, checkout, Razorpay / UPI",
      "Order management",
      "Customer accounts",
      "Banners and coupon codes",
      "Basic on-page SEO",
      "Play Store + App Store listing assets",
      "Launch support",
    ],
    whatsappMessage:
      "Hi TriFusion, I want the Single Vendor ecommerce package at ₹25,000 (web + Android + iOS).",
  },
  {
    id: "multi-vendor",
    name: "Multi-vendor",
    price: 35000,
    priceLabel: "₹35,000",
    badge: "Marketplace",
    popular: true,
    image: "/images/ecommerce/package-multi-vendor.png",
    imageAlt:
      "Multi-vendor marketplace with seller dashboards on web and mobile apps",
    summary:
      "A marketplace where many sellers list products. Same customer apps on web, Android, and iOS — plus vendor signup, KYC, commissions, and payouts.",
    includes: [
      "Everything in Single vendor",
      "Vendor registration and KYC",
      "Vendor dashboard (orders, catalog, payouts)",
      "Commission engine",
      "Split catalog by seller",
      "Admin commission and settlement reports",
      "Web + Android + iOS for shoppers",
    ],
    whatsappMessage:
      "Hi TriFusion, I want the Multi-Vendor ecommerce package at ₹35,000 (web + Android + iOS marketplace).",
  },
];

export const ecommerceStoreTypes = [
  {
    id: "grocery",
    name: "Grocery & supermarket",
    description:
      "Daily essentials, slots, and repeat orders — kirana and supermarket catalogs that shoppers reopen every week.",
    image: "/images/ecommerce/grocery.png",
    imageAlt: "Grocery ecommerce app with produce, dairy, and supermarket aisles",
  },
  {
    id: "clothing",
    name: "Clothing & fashion",
    description:
      "Size and colour variants, lookbooks, and wishlist — D2C fashion and boutique catalogs built for conversion.",
    image: "/images/ecommerce/clothing.png",
    imageAlt: "Fashion clothing ecommerce store with apparel on web and mobile",
  },
  {
    id: "electronics",
    name: "Electronics",
    description:
      "SKUs, specs, and warranty notes — mobiles, appliances, and accessories with filter-heavy catalogs.",
    image: "/images/ecommerce/electronics.png",
    imageAlt: "Electronics ecommerce catalog with phones and gadgets",
  },
  {
    id: "food",
    name: "Food & restaurant",
    description:
      "Menus, cloud kitchens, and combo offers — order flow that works on web and in the apps.",
    image: "/images/ecommerce/food.png",
    imageAlt: "Food and restaurant ecommerce ordering on a phone",
  },
  {
    id: "pharmacy",
    name: "Pharmacy & wellness",
    description:
      "Prescription upload, refill reminders, and category trees for medicines and health products.",
    image: "/images/ecommerce/pharmacy.png",
    imageAlt: "Pharmacy ecommerce app with medicines and wellness products",
  },
  {
    id: "furniture",
    name: "Furniture & home",
    description:
      "Large-catalog rooms, filters, and delivery windows for furniture, decor, and home brands.",
    image: "/images/ecommerce/furniture.png",
    imageAlt: "Furniture and home ecommerce product grid",
  },
  {
    id: "jewelry",
    name: "Jewelry",
    description:
      "High-trust product galleries, weight and purity fields, and secure checkout for jewellery sellers.",
    image: "/images/ecommerce/jewelry.png",
    imageAlt: "Jewelry ecommerce storefront with gold and gemstone pieces",
  },
  {
    id: "beauty",
    name: "Beauty & cosmetics",
    description:
      "Shade variants, kits, and repeat-purchase flows for cosmetics and personal-care brands.",
    image: "/images/ecommerce/beauty.png",
    imageAlt: "Beauty and cosmetics ecommerce products on a storefront",
  },
  {
    id: "sports",
    name: "Sports & fitness",
    description:
      "Gear, apparel, and accessory catalogs with size charts and seasonal collections.",
    image: "/images/ecommerce/sports.png",
    imageAlt: "Sports and fitness ecommerce catalog",
  },
  {
    id: "books",
    name: "Books & stationery",
    description:
      "ISBN-style catalogs, categories, and school or bookstore collections that search well.",
    image: "/images/ecommerce/books.png",
    imageAlt: "Books and stationery ecommerce store",
  },
  {
    id: "auto",
    name: "Auto parts",
    description:
      "Fitment-friendly catalogs for spare parts, accessories, and garage-to-door selling.",
    image: "/images/ecommerce/auto.png",
    imageAlt: "Automotive parts ecommerce catalog",
  },
  {
    id: "handmade",
    name: "Handmade & local brands",
    description:
      "Craft, ethnic wear, and regional makers — single shop or a multi-vendor artisan marketplace.",
    image: "/images/ecommerce/handmade.png",
    imageAlt: "Handmade and local brand ecommerce marketplace",
  },
];

export const vendorComparison = [
  {
    feature: "Who sells",
    single: "You — one brand, one catalog",
    multi: "Many sellers under your marketplace",
  },
  {
    feature: "Customer apps",
    single: "Web + Android + iOS",
    multi: "Web + Android + iOS",
  },
  {
    feature: "Admin",
    single: "Your store admin",
    multi: "Super-admin plus vendor dashboards",
  },
  {
    feature: "Vendor KYC & signup",
    single: "Not needed",
    multi: "Included",
  },
  {
    feature: "Commissions & payouts",
    single: "You keep 100% of sales (minus gateway fees)",
    multi: "Commission engine and settlement reports",
  },
  {
    feature: "Best for",
    single: "D2C, kirana, boutique, clinic store",
    multi: "City marketplace, multi-brand mall, artisan hub",
  },
  {
    feature: "Package",
    single: "₹25,000",
    multi: "₹35,000",
  },
];

export const includedItems = [
  "UI/UX for storefront and admin",
  "Customer website",
  "Android app",
  "iOS app",
  "Product catalog, cart, and checkout",
  "Razorpay / UPI payment integration",
  "Order management",
  "Store listing assets and launch support",
];

export const notIncludedItems = [
  "Domain name (you register, or we buy in your name)",
  "Hosting if you use your own cloud account",
  "Google Play one-time developer fee (~$25)",
  "Apple Developer Program (~$99 / year)",
  "Razorpay KYC — account stays in your business name",
  "GST on our invoice, as required by Indian law",
];

export const ecommerceFaqs = [
  {
    question: "What is included in ₹25,000 and ₹35,000?",
    answer:
      "Both packages include the customer website, Android app, and iOS app, plus admin, catalog, cart, checkout, Razorpay/UPI, and launch support. ₹25,000 is single vendor (one seller). ₹35,000 is multi-vendor (marketplace with vendor dashboards and commissions). There is no extra development fee from us for adding Android or iOS — all three platforms are in the package.",
  },
  {
    question: "Do I pay extra for the Android or iOS app?",
    answer:
      "No. Web, Android, and iOS are included in both packages. You do not pay TheTriFusion an add-on for a second or third platform. Google Play and Apple Developer account fees are paid to Google and Apple, not to us.",
  },
  {
    question: "Can you build grocery, clothing, and other store types?",
    answer:
      "Yes. The same packages cover grocery, clothing/fashion, electronics, food, pharmacy, furniture, jewelry, beauty, sports, books, auto parts, and handmade/local brands. Category trees and product fields are set to the store type you pick.",
  },
  {
    question: "Single vendor or multi-vendor — which should I choose?",
    answer:
      "Choose single vendor if you are the only seller (your brand, your stock). Choose multi-vendor if other shops will list on your platform and you take a commission. Both include web + Android + iOS.",
  },
  {
    question: "How long until launch?",
    answer:
      "A focused single-vendor store is typically 4–8 weeks after scope is locked. Multi-vendor marketplaces are often 6–10 weeks. We write the timeline before build starts.",
  },
  {
    question: "Do you list the apps on Play Store and App Store?",
    answer:
      "Yes. Listing assets, screenshots, and the first submission checklist are part of launch. You provide the developer accounts (Google Play and Apple) in your company name.",
  },
  {
    question: "Is anything extra after I pay the package?",
    answer:
      "No extra development fee from TheTriFusion for what is listed in the package. Domain, hosting (if on your account), Play/App Store developer fees, payment-gateway KYC, and GST on our invoice are third-party or statutory — not upsells for Android, iOS, or web.",
  },
];

export const ecommerceMenuItem = {
  href: ECOMMERCE_PATH,
  slug: "ecommerce-development",
  title: "Ecommerce Development",
  shortDescription:
    "Web + Android + iOS from ₹25,000. Grocery, fashion, multi-vendor.",
};
