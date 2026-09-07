export const ECOMMERCE_PATH = "/ecommerce-development";

export const launchGuarantee = {
  id: "guarantee",
  headline: "Website live in 48 hours — or 50% refund",
  subheadline:
    "Single vendor and multi-vendor ecommerce websites go live within 48 hours after we receive your locked brief and required assets. If we miss that clock, you get 50% of the package amount refunded.",
  badge: "Ads guarantee",
  clockLabel: "48 hours",
  refundLabel: "50% refund",
  appliesTo: "Website go-live (single vendor & multi-vendor)",
  points: [
    {
      title: "Clock starts when inputs are ready",
      body: "48 hours begin after you share logo, store name, product list (or sample SKUs), colours/brand notes, and payment gateway details — and we confirm the brief in writing.",
    },
    {
      title: "What “live” means",
      body: "Your ecommerce website is online on a public URL with catalog, cart, checkout, and admin access working. Single vendor and multi-vendor both covered.",
    },
    {
      title: "If we miss 48 hours",
      body: "You receive a 50% refund of the package development fee you paid us. Written claim within 7 days of the missed deadline.",
    },
    {
      title: "What the clock does not wait on",
      body: "Client delays, missing assets, Razorpay KYC pending on your side, domain DNS not pointed, or third-party outages pause the clock until you unblock us.",
    },
  ],
  exclusions: [
    "Android / iOS app store approval times (Google and Apple review are outside our control)",
    "Custom work beyond the locked package scope",
    "Delays caused by missing content, payments, or account access from your side",
  ],
};

export const ecommercePage = {
  path: ECOMMERCE_PATH,
  slug: "ecommerce-development",
  serviceName: "Ecommerce Development",
  navTitle: "Ecommerce Development",
  shortDescription:
    "Single & multi-vendor ecommerce live in 48 hours or 50% refund. Web + Android + iOS from ₹25,000 / ₹35,000.",
  kicker: "Ecommerce · Jaipur · Ads offer",
  h1: "Single vendor & multi-vendor ecommerce website live in 48 hours — or 50% refund",
  outcome:
    "₹25,000 single vendor · ₹35,000 multi-vendor · Website live in 48 hours after locked brief, or we refund 50%. Web + Android + iOS apps included in both packages.",
  intro:
    "TheTriFusion in Jaipur builds complete ecommerce products for Indian sellers: grocery, fashion, electronics, and every store type. You get a customer website that we guarantee live in 48 hours once your brief and assets are ready — plus Android and iOS apps, admin, catalog, checkout, and Razorpay/UPI. Play Store and Apple Developer accounts stay in your name.",
  metaTitle:
    "Ecommerce Live in 48 Hours or 50% Refund | Single & Multi-Vendor from ₹25,000 | TheTriFusion",
  metaDescription:
    "Single vendor ₹25,000 & multi-vendor ₹35,000 ecommerce. Website live in 48 hours after locked brief — or 50% refund. Web + Android + iOS. Grocery, fashion & more. Jaipur.",
  keywords:
    "ecommerce website live in 48 hours, ecommerce 50% refund guarantee, single vendor ecommerce website India, multi vendor marketplace website 48 hours, ecommerce development company India, grocery ecommerce website, clothing ecommerce app, ecommerce web android ios package, online store live fast India, D2C ecommerce Jaipur, white label ecommerce website",
  whatsappMessage:
    "Hi TriFusion, I want the ecommerce package — website live in 48 hours or 50% refund (web + Android + iOS).",
  projectType: "Ecommerce",
  leadSource: "ecommerce-development",
  heroImage: "/images/ecommerce/hero-storefront.png",
  heroImageAlt:
    "Ecommerce website live in 48 hours with Android and iOS shopping apps by TheTriFusion",
  trust: [
    "Website live in 48 hours or 50% refund",
    "Single vendor ₹25,000 · Multi-vendor ₹35,000",
    "Web + Android + iOS in both packages",
    "Razorpay / UPI checkout",
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
    badge: "Live in 48 hrs · or 50% refund",
    popular: false,
    image: "/images/ecommerce/package-single-vendor.png",
    imageAlt:
      "Single vendor ecommerce storefront live fast on web and mobile — one shop, one catalog",
    summary:
      "Your own D2C or retail store. Website live in 48 hours after locked brief — or 50% refund. Customers also get Android and iOS apps.",
    includes: [
      "Website live in 48 hours (or 50% refund)",
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
      "Listing assets — we submit using your store accounts",
    ],
    whatsappMessage:
      "Hi TriFusion, I want Single Vendor ecommerce at ₹25,000 — website live in 48 hours or 50% refund (web + Android + iOS).",
  },
  {
    id: "multi-vendor",
    name: "Multi-vendor",
    price: 35000,
    priceLabel: "₹35,000",
    badge: "Live in 48 hrs · or 50% refund",
    popular: true,
    image: "/images/ecommerce/package-multi-vendor.png",
    imageAlt:
      "Multi-vendor marketplace website live in 48 hours with seller dashboards",
    summary:
      "Marketplace for many sellers. Website live in 48 hours after locked brief — or 50% refund. Same web + Android + iOS for shoppers, plus vendor tools.",
    includes: [
      "Website live in 48 hours (or 50% refund)",
      "Everything in Single vendor",
      "Vendor registration and KYC",
      "Vendor dashboard (orders, catalog, payouts)",
      "Commission engine",
      "Split catalog by seller",
      "Admin commission and settlement reports",
      "Web + Android + iOS for shoppers",
    ],
    whatsappMessage:
      "Hi TriFusion, I want Multi-Vendor ecommerce at ₹35,000 — website live in 48 hours or 50% refund (web + Android + iOS marketplace).",
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
    feature: "48-hour live guarantee",
    single: "Website live in 48 hrs or 50% refund",
    multi: "Website live in 48 hrs or 50% refund",
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
    feature: "Play Store / App Store accounts",
    single: "You create — not in the package",
    multi: "You create — not in the package",
  },
  {
    feature: "Package",
    single: "₹25,000",
    multi: "₹35,000",
  },
];

export const includedItems = [
  "Website live in 48 hours after locked brief — or 50% refund",
  "UI/UX for storefront and admin",
  "Customer website",
  "Android app (we build it)",
  "iOS app (we build it)",
  "Product catalog, cart, and checkout",
  "Razorpay / UPI payment integration",
  "Order management",
  "Listing assets and submission help — on your Play Store and App Store accounts",
];

export const clientMustProvide = [
  {
    title: "Google Play (Android) developer account",
    body: "You must create this in your company name and pay Google’s one-time fee (~$25). We cannot publish the Android app from our account. We guide you and then upload using access you give us.",
  },
  {
    title: "Apple Developer (iOS) account",
    body: "You must enrol in the Apple Developer Program in your company name (~$99 / year, paid to Apple). We cannot publish the iOS app from our account. We guide you and then submit using access you give us.",
  },
];

export const notIncludedItems = [
  "Google Play Developer account — you create and pay Google (~$25, one time)",
  "Apple Developer account — you create and pay Apple (~$99 / year)",
  "Domain name (you register, or we buy in your name)",
  "Hosting if you use your own cloud account",
  "Razorpay KYC — account stays in your business name",
  "GST on our invoice, as required by Indian law",
  "Google / Apple store review time (not part of the 48-hour website guarantee)",
];

export const ecommerceFaqs = [
  {
    question: "Is the website really live in 48 hours?",
    answer:
      "Yes — for both single vendor and multi-vendor packages. The 48-hour clock starts after you provide the locked brief and required assets (logo, store name, product list or sample SKUs, brand notes, payment details) and we confirm in writing. “Live” means your ecommerce website is on a public URL with catalog, cart, checkout, and admin working.",
  },
  {
    question: "What if you miss the 48-hour deadline?",
    answer:
      "You get a 50% refund of the package development fee paid to TheTriFusion. Claim in writing within 7 days of the missed deadline. Delays caused by missing assets, unpaid invoices, domain/DNS not ready, Razorpay KYC on your side, or third-party outages pause the clock.",
  },
  {
    question: "Does the 48-hour guarantee include Android and iOS apps?",
    answer:
      "The 48-hour guarantee is for the ecommerce website go-live. We still build Android and iOS apps in both packages, but Play Store and App Store review times are controlled by Google and Apple and are not part of the 48-hour clock.",
  },
  {
    question: "What is included in ₹25,000 and ₹35,000?",
    answer:
      "Both packages include the customer website (with 48-hour live guarantee), Android app, and iOS app, plus admin, catalog, cart, checkout, Razorpay/UPI, and launch support. ₹25,000 is single vendor. ₹35,000 is multi-vendor. Play Store and App Store developer accounts are not included — you create those yourself.",
  },
  {
    question: "Do I pay extra for the Android or iOS app?",
    answer:
      "No extra development fee to TheTriFusion for the three platforms. You do pay Google and Apple separately for developer accounts: Google Play (~$25 one time) and Apple Developer (~$99 / year). Those accounts must be in your name.",
  },
  {
    question: "Can you build grocery, clothing, and other store types?",
    answer:
      "Yes. The same packages cover grocery, clothing/fashion, electronics, food, pharmacy, furniture, jewelry, beauty, sports, books, auto parts, and handmade/local brands. Category trees and product fields are set to the store type you pick.",
  },
  {
    question: "Single vendor or multi-vendor — which should I choose?",
    answer:
      "Choose single vendor if you are the only seller. Choose multi-vendor if other shops will list on your platform and you take a commission. Both include the 48-hour website guarantee and web + Android + iOS.",
  },
  {
    question: "Who creates the Play Store and App Store accounts?",
    answer:
      "You do. Google Play and Apple Developer accounts must be opened by the customer in their company name. We help you set them up, then publish using the access you grant.",
  },
  {
    question: "Is anything extra after I pay the package?",
    answer:
      "No extra development fee from TheTriFusion for what is listed in the package. You still pay Google, Apple, domain, hosting if on your cloud, Razorpay KYC, and GST on our invoice.",
  },
];

export const ecommerceMenuItem = {
  href: ECOMMERCE_PATH,
  slug: "ecommerce-development",
  title: "Ecommerce Development",
  shortDescription:
    "Live in 48 hrs or 50% refund. Web + Android + iOS from ₹25,000.",
};
