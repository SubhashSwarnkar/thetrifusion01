/**
 * 29 Sep 2026: ranking and AI-search upgrade for five service pages.
 * Merged on top of servicePageSeo (see the bottom of servicePageSeo.js).
 * Facts only from the site and the listing brief: Jaipur NAP, published
 * starting prices from /pricing, published timelines. No stats, ratings,
 * reviews or client names beyond those already on the site.
 */

const NAP_LINE =
  "5th Floor, Amoro Building, Patrakar Colony, Jaipur, Rajasthan 302020 · +91 63781 33780 · Mon–Sat 10 AM–7 PM IST";

const APP_PAGE_CHOOSER = {
  heading: "Cross-platform, iOS only, or Android only?",
  intro:
    "TheTriFusion keeps three separate app pages so each one answers a different brief. Pick the one that matches the stores you need in the first release.",
  rowHeader: " ",
  columns: ["Mobile app development", "iOS app development", "Android app development"],
  rows: [
    {
      label: "Best for",
      cells: [
        "One product on both App Store and Google Play in the same release",
        "An iPhone-first product, or an App Store-only release",
        "A Play Store-first product, field apps, or Android-heavy users",
      ],
    },
    {
      label: "Usual stack",
      cells: [
        "React Native or Flutter, one shared codebase",
        "Swift, or React Native when Android follows",
        "Kotlin, or React Native / Flutter when iOS follows",
      ],
    },
    {
      label: "Published starting price",
      cells: ["From ₹50,000", "From ₹2,50,000 (focused iOS MVP)", "From ₹2,50,000 (focused Android MVP)"],
    },
    {
      label: "Typical MVP timeline",
      cells: [
        "8–12 weeks after discovery",
        "8–12 weeks of build, plus Apple review time",
        "8–12 weeks after discovery",
      ],
    },
    {
      label: "Page",
      cells: [
        "[Mobile app development](/services/mobile-app-development)",
        "[iOS app development](/services/ios-app-development)",
        "[Android app development](/services/android-app-development)",
      ],
    },
  ],
};

export const serviceRankingContent = {
  /* ------------------------------------------------------------------ */
  "website-development": {
    contentUpdatedAt: "2026-09-29",
    metaTitle: "Website Development Company in Jaipur | From ₹15,000",
    metaDescription:
      "Website development company in Jaipur building React, Next.js and WordPress business sites, portals and stores. SME sites from ₹15,000, live in 3–8 weeks.",
    keywords:
      "website development company in Jaipur, website development Jaipur, web development company Jaipur, business website Jaipur, website design and development Jaipur, React Next.js website India, website development cost Jaipur",
    description:
      "TheTriFusion is a website development company in Jaipur. We ship React, Next.js and WordPress sites for businesses in Jaipur and across India: company websites, lead-generation sites, portals, and ecommerce storefronts with payments and an admin. Each build includes titles, a sitemap, Search Console setup, and support after launch.",
    answerFirst: {
      id: "quick-answer",
      heading: "Website development company in Jaipur: the short answer",
      text:
        "TheTriFusion (Trifusion Infotech Private Limited) is a website development company in Jaipur, Rajasthan. We design and build business websites, lead-generation sites, portals and ecommerce storefronts on React, Next.js and WordPress for clients in Jaipur, across India and worldwide. Business websites start from ₹15,000, and a focused marketing site typically launches in 3–8 weeks.",
      facts: [
        { label: "Starting price", value: "From ₹15,000 (Basic, up to 5 pages)" },
        { label: "Typical timeline", value: "3–8 weeks for a focused marketing site" },
        { label: "Stack", value: "React, Next.js, Node.js, WordPress, MongoDB / PostgreSQL" },
        { label: "Office", value: NAP_LINE },
      ],
    },
    timelineLabel: "3 – 8 Weeks",
    timelineNote:
      "A focused marketing website is often 3–8 weeks. Ecommerce, portals, and custom features take longer and are scoped in writing after discovery.",
    startingFromNote:
      "Basic plan: up to 5 pages, responsive design, contact form, basic SEO, and 1 month of support.",
    process: [
      {
        step: 1,
        title: "Discovery and sitemap",
        description:
          "We agree the pages, the enquiry or payment flows, the content you already have, and a written definition of done. Existing URLs that rank are listed so they can be kept or redirected.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Page layouts and the mobile view come first, in your brand colours and type. You approve the key templates before development starts.",
      },
      {
        step: 3,
        title: "Build with weekly demos",
        description:
          "React and Next.js for custom sites, or WordPress when your team wants to edit pages itself. You review a working staging link each week, not screenshots.",
      },
      {
        step: 4,
        title: "SEO basics and launch",
        description:
          "Titles, meta descriptions, a sitemap, clean URLs, structured data, and Google Search Console are set up before go-live, with redirects for any old URLs.",
      },
      {
        step: 5,
        title: "Support after go-live",
        description:
          "Every plan includes a support window (1, 3, or 6 months by plan), and we can stay on for hosting, updates, and new pages.",
      },
    ],
    extraSections: [
      {
        id: "website-pricing-timeline",
        heading: "Website development cost and timeline in Jaipur",
        paragraphs: [
          "These are the starting prices published on the [pricing page](/pricing). They are starting points, and the final number follows a short discovery call and a written scope.",
          "Timelines follow scope: a focused marketing website is often 3–8 weeks. A store with a catalogue, payments, and shipping, or a portal with logins, takes longer and is phased.",
        ],
        comparison: {
          heading: "Published website plans",
          rowHeader: "Plan",
          columns: ["Starting price", "What the plan lists"],
          rows: [
            {
              label: "Basic",
              cells: ["₹15,000 / project", "Up to 5 pages, responsive design, contact form, basic SEO, 1 month support"],
            },
            {
              label: "Standard",
              cells: ["₹35,000 / project", "Up to 10 pages, CMS integration, payment gateway, advanced SEO, analytics setup, 3 months support"],
            },
            {
              label: "Premium",
              cells: ["₹75,000 / project", "Unlimited pages, custom features, admin panel, API integration, ecommerce functionality, 6 months support"],
            },
            {
              label: "Ecommerce store",
              cells: ["From ₹25,000 single-vendor, ₹35,000 multi-vendor", "See ecommerce website development for store packages"],
            },
          ],
        },
      },
      {
        id: "website-which-page",
        heading: "Website, ecommerce store, or custom web app?",
        paragraphs: [
          "Use this page for a company website, a lead-generation site, a landing-page set for campaigns, or a content site you want to rank. If the main job is selling products online, the store packages are on [ecommerce website development](/solutions/ecommerce-website-development). If the site is really an internal system with roles, approvals, and reports, start with [custom software development](/services/software-development).",
          "Design-only briefs go to [UI/UX design](/services/ui-ux-design), traffic after launch to [digital marketing](/services/digital-marketing), and hosting pipelines for larger sites to [DevOps and cloud services](/services/devops). Businesses outside Jaipur can also read the city pages for [Kota](/solutions/website-development-company-kota), [Udaipur](/solutions/website-development-company-udaipur), and [Ajmer](/solutions/website-development-company-ajmer).",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does website development cost in Jaipur?",
        answer:
          "TheTriFusion's published plans start at ₹15,000 for a Basic site of up to 5 pages, ₹35,000 for Standard (up to 10 pages with CMS and payment gateway), and ₹75,000 for Premium. Ecommerce stores start from ₹25,000. The final price follows a written scope.",
      },
      {
        question: "How long does it take to build a business website?",
        answer:
          "A focused marketing website is often 3–8 weeks from approved scope to launch. Ecommerce, portals, or custom features take longer. We share a written timeline after discovery.",
      },
      {
        question: "Which technologies do you use for websites?",
        answer:
          "React and Next.js on the front end, Node.js on the back end, with MongoDB or PostgreSQL. WordPress is used when your team wants to edit pages without a developer. We match the stack to how you will run the site.",
      },
      {
        question: "Do you also handle SEO, hosting, and Search Console?",
        answer:
          "Yes. We implement titles, meta descriptions, a sitemap, structured data, and Google Search Console at launch, and can stay on for hosting and updates. It is not a file dump at handover.",
      },
      {
        question: "Can you redesign an old website without losing rankings?",
        answer:
          "Yes. We modernise design, speed, and conversion paths while keeping important URLs, or redirecting them one-to-one, so existing search visibility is protected.",
      },
      {
        question: "Do you build ecommerce websites as well?",
        answer:
          "Yes. Store builds on Shopify, WooCommerce, or custom Next.js are covered on the ecommerce website development page, with packages from ₹25,000 single-vendor and ₹35,000 multi-vendor.",
      },
      {
        question: "Where is your Jaipur office?",
        answer:
          "TheTriFusion is at 5th Floor, Amoro Building, Patrakar Colony, Jaipur, Rajasthan 302020. Phone +91 63781 33780, Monday to Saturday, 10 AM to 7 PM IST. We work with Jaipur clients in person or remotely, and with clients across India and worldwide.",
      },
      {
        question: "Will I own the website and its source code?",
        answer:
          "Yes. Project agreements transfer the agreed deliverables and source ownership to you on completion and payment. Domains and hosting accounts should be in your company's name.",
      },
    ],
    relatedLinks: [
      {
        href: "/solutions/ecommerce-website-development",
        title: "Ecommerce website development",
        text: "Shopify, WooCommerce, or custom stores with payments and shipping, from ₹25,000.",
      },
      {
        href: "/blog/custom-website-vs-shopify-vs-woocommerce",
        title: "Custom website vs Shopify vs WooCommerce",
        text: "How to choose a platform before you ask for a website quote.",
      },
      {
        href: "/blog/ecommerce-website-development-cost-india",
        title: "Ecommerce website development cost in India",
        text: "What changes the price of a store build, in rupees.",
      },
      {
        href: "/blog/nextjs-app-router-saas-mvp-guide-2026",
        title: "Next.js App Router for a SaaS MVP",
        text: "When a website grows into a web app, and what the Next.js build looks like.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "mobile-app-development": {
    contentUpdatedAt: "2026-09-29",
    metaTitle: "Mobile App Development Company in Jaipur | Cross-Platform",
    metaDescription:
      "Mobile app development company in Jaipur: one React Native or Flutter app for iOS and Android, with backend and admin. From ₹50,000; MVP in 8–12 weeks.",
    keywords:
      "mobile app development company in Jaipur, app development company Jaipur, cross platform app development company India, React Native app development Jaipur, Flutter app development Jaipur, mobile app development cost Jaipur",
    bannerDescription:
      "One product on iOS and Android from Jaipur: a shared React Native or Flutter codebase, the backend and web admin behind it, and both store listings. Need only one store? See the dedicated iOS and Android pages.",
    answerFirst: {
      id: "quick-answer",
      heading: "Mobile app development company in Jaipur: the short answer",
      text:
        "TheTriFusion is a mobile app development company in Jaipur that builds one product for both iOS and Android, usually on React Native or Flutter, with the backend and web admin behind it. Mobile projects start from ₹50,000, and a focused cross-platform MVP typically takes 8–12 weeks after discovery. For a single store, see [iOS app development](/services/ios-app-development) or [Android app development](/services/android-app-development).",
      facts: [
        { label: "Starting price", value: "From ₹50,000" },
        { label: "Typical MVP timeline", value: "8–12 weeks after discovery" },
        { label: "Stack", value: "React Native, Flutter, Swift, Kotlin, Firebase, Node.js" },
        { label: "Office", value: NAP_LINE },
      ],
    },
    timelineLabel: "8 – 12 Weeks",
    timelineNote:
      "A focused React Native or Flutter MVP is often 8–12 weeks after discovery. Store review time is added on top, and larger products are phased.",
    process: [
      {
        step: 1,
        title: "Discovery and store plan",
        description:
          "We fix the users, the one job the first release must do, which stores ship first, and what the admin needs. You get a written scope and definition of done.",
      },
      {
        step: 2,
        title: "UX and shared data model",
        description:
          "Screens for both platforms and one data model for iOS, Android, and the web admin, so the three do not drift apart.",
      },
      {
        step: 3,
        title: "Build one codebase, demo weekly",
        description:
          "React Native or Flutter for the shared app, native modules only where a device feature needs them. You test working builds in the weekly demos.",
      },
      {
        step: 4,
        title: "QA and submission to both stores",
        description:
          "Testing on real iPhones and Android phones, then App Store and Google Play listings. Developer accounts stay in your company's name.",
      },
      {
        step: 5,
        title: "Launch and updates",
        description:
          "Crash reporting and analytics after launch, a support window, and the next feature cycle when you are ready.",
      },
    ],
    extraSections: [
      {
        id: "mobile-which-page",
        heading: "Mobile app development in Jaipur: which page fits your app?",
        paragraphs: [
          "This page covers cross-platform work: one product that ships to both stores together. When only one store matters in the first release, the dedicated pages describe the store-specific process, stack, and pricing.",
        ],
        comparison: APP_PAGE_CHOOSER,
      },
      {
        id: "mobile-cost-timeline",
        heading: "Mobile app development cost and timeline",
        paragraphs: [
          "The published starter price for mobile app development is ₹50,000. It is a starting point for a small scope, not a quote for a bilingual, two-store product with payments. Focused native MVPs on the [pricing page](/pricing) start at ₹2,50,000 each for iOS and for Android.",
          "What moves the number: how many user roles the app has, payments, offline use, the admin, integrations such as maps or a payment gateway, and whether both stores launch together. A focused MVP is often 8–12 weeks after discovery. For a worked example of these cost drivers, read the [mobile app cost guide for UAE and Gulf startups](/blog/mobile-app-development-cost-guide-uae-gulf) and the [ecommerce app development cost guide](/blog/ecommerce-app-development-cost-india).",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does mobile app development cost in Jaipur?",
        answer:
          "TheTriFusion's mobile app development starts from ₹50,000 for a small scope. Focused native MVPs start from ₹2,50,000 each for iOS and Android. The final price follows a written scope after discovery.",
      },
      {
        question: "How long does a cross-platform MVP take?",
        answer:
          "A focused React Native or Flutter MVP is often 8–12 weeks after discovery, plus store review time.",
      },
      {
        question: "Should we build cross-platform or native?",
        answer:
          "Cross-platform when both stores ship together. Swift or Kotlin when one store needs platform APIs that cannot be shared cleanly. We recommend one after seeing the product.",
      },
      {
        question: "React Native or Flutter?",
        answer:
          "Both can ship one app to iOS and Android. We pick the one your team can maintain and hire for, and the one with solid plugins for your payment and device features.",
      },
      {
        question: "Do I need this page, or the iOS or Android page?",
        answer:
          "Use this page when both stores ship in the same release. Use iOS app development for an App Store-only or iPhone-first product, and Android app development for a Play Store-first product.",
      },
      {
        question: "Can you show live apps?",
        answer:
          "PlugOne (plugone.in) and Connect Dairy (connectdairy.in) are live. EV charging work is documented on the EV charging service page.",
      },
      {
        question: "Can you build an ecommerce mobile app?",
        answer:
          "Yes. Product browsing, cart, payments, orders, and notifications are common ecommerce app deliverables, for a consumer shop or a business workflow.",
      },
      {
        question: "Will I own the source code and store accounts?",
        answer:
          "Yes. Project agreements transfer the agreed deliverables and source ownership to you on completion and payment, and the App Store and Google Play accounts stay in your company's name.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/ios-app-development",
        title: "iOS app development",
        text: "App Store-only or iPhone-first apps in Swift or React Native, with TestFlight and review support.",
      },
      {
        href: "/services/android-app-development",
        title: "Android app development company in Jaipur",
        text: "Play Store apps in Kotlin or React Native, with signing, listing, and staged rollouts.",
      },
      {
        href: "/blog/flutter-vs-react-native-2024",
        title: "Flutter vs React Native",
        text: "The trade-offs of one codebase versus native escape hatches.",
      },
      {
        href: "/services/ev-charging-app-development",
        title: "EV charging app development",
        text: "The driver app for finding a charger, starting a session, and paying, with the OCPP backend behind it.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "ios-app-development": {
    contentUpdatedAt: "2026-09-29",
    metaTitle: "iOS App Development Company in India | Jaipur Team",
    metaDescription:
      "iOS app development company in India, based in Jaipur. Swift or React Native iPhone apps with TestFlight and App Store submission. From ₹2,50,000.",
    keywords:
      "iOS app development company India, iOS app development company in Jaipur, ios app development company rajasthan, iPhone app development company India, Swift app development India, App Store app development, hire iOS developers India",
    bannerTitle: "iOS App Development Company in India, Based in Jaipur",
    breadcrumbName: "iOS App Development",
    description:
      "TheTriFusion builds App Store-ready iPhone apps from Jaipur for businesses across India and abroad: Swift when the app needs native depth, React Native when Android will follow. We handle TestFlight, App Store Connect listing assets, privacy details, and review responses, and ship the backend and web admin the app depends on.",
    ctaText:
      "Tell us whether it is Swift or React Native, and whether Android follows. We return a scoped estimate and an 8–12 week MVP path from Jaipur.",
    answerFirst: {
      id: "quick-answer",
      heading: "iOS app development company in India: the short answer",
      text:
        "TheTriFusion is an iOS app development company in India, based in Jaipur, Rajasthan. We build iPhone apps in Swift, or React Native when Android will follow, and handle TestFlight, the App Store Connect listing and review responses. A focused iOS MVP starts from ₹2,50,000 and typically takes 8–12 weeks of build, plus Apple's review time.",
      facts: [
        { label: "Starting price", value: "From ₹2,50,000 (focused iOS MVP)" },
        { label: "Typical MVP timeline", value: "8–12 weeks of build, plus Apple review" },
        { label: "Stack", value: "Swift, React Native, Firebase, Node.js, AWS" },
        { label: "Office", value: NAP_LINE },
      ],
    },
    timelineLabel: "8 – 12 Weeks",
    timelineNote:
      "A focused iOS MVP is often 8–12 weeks of build after discovery, plus Apple's review time. We do not promise a review date; Apple sets it.",
    caseStudy: {
      title: "PlugOne on iOS",
      summary:
        "PlugOne's EV charging driver experience includes iOS: finding a charger, starting a session, and paying. The app is live at plugone.in.",
      href: "/portfolio/plugone-ev-charging-platform",
      hrefLabel: "PlugOne case study",
      liveUrl: "https://plugone.in/",
      liveLabel: "plugone.in",
    },
    process: [
      {
        step: 1,
        title: "Discovery and scope",
        description:
          "Users, the must-have flows, the backend the app needs, and whether Android follows. The Swift or React Native decision is made here, in writing.",
      },
      {
        step: 2,
        title: "iPhone UX",
        description:
          "Screens designed for iOS conventions and the devices your users carry, so the app feels native and passes review on its merits.",
      },
      {
        step: 3,
        title: "Build and TestFlight",
        description:
          "Working builds in the weekly demos, distributed through TestFlight so your team can test on real iPhones before submission.",
      },
      {
        step: 4,
        title: "App Store submission",
        description:
          "Certificates, App Store Connect listing, screenshots, privacy details, and replies to review feedback. The Apple Developer account stays in your company's name.",
      },
      {
        step: 5,
        title: "Launch and store iteration",
        description:
          "A support window after launch (1, 3, or 6 months by plan), updates for new iOS versions, and the next release when you are ready.",
      },
    ],
    extraSections: [
      {
        id: "ios-whats-included",
        heading: "What an iOS app project includes",
        paragraphs: [
          "An iPhone app is rarely the whole product. Most iOS briefs also need an API, a database, and a web admin where your team manages users, orders, or content. TheTriFusion scopes and builds those together so the app is not a dead-end client.",
          "Typical iOS work covers sign-in, profiles, payments through a licensed gateway, push notifications, maps and location, and offline-friendly screens. Swift is used when the app needs native iOS depth. React Native is used when an Android version should ship from the same team and codebase; see [Android app development](/services/android-app-development) or the cross-platform [mobile app development](/services/mobile-app-development) page for that path.",
        ],
        comparison: {
          heading: "Published iOS plans",
          intro:
            "Starting prices from the [pricing page](/pricing), in INR, after discovery.",
          rowHeader: "Plan",
          columns: ["Starting price", "What the plan lists"],
          rows: [
            { label: "Basic", cells: ["₹2,50,000 / project", "Focused iOS MVP, TestFlight, App Store listing support, 1 month support"] },
            { label: "Standard", cells: ["₹5,00,000 / project", "API + web admin, review-ready assets, 3 months support"] },
            { label: "Premium", cells: ["₹9,00,000 / project", "iOS + Android shared, 6 months support, store iteration"] },
          ],
        },
      },
      {
        id: "ios-which-page",
        heading: "iOS only, or iOS and Android together?",
        paragraphs: [
          "Choose this page when the first release is App Store-only or iPhone-first, for example a premium consumer app or a product whose early users are mostly on iPhone. If both stores must launch together, [mobile app development](/services/mobile-app-development) covers the shared React Native or Flutter build. If Android comes first, see the [Android app development company in Jaipur](/services/android-app-development) page.",
          "For Apple platform changes that affect business apps, read the guides on [iPhone 18 and iOS apps for businesses](/blog/iphone-18-india-price-launch-ios-apps-business) and [iOS 27 Siri AI for business apps](/blog/ios-27-siri-ai-business-apps-uk-australia).",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does iOS app development cost in India?",
        answer:
          "TheTriFusion's published iOS plans start at ₹2,50,000 for a focused iOS MVP, ₹5,00,000 with an API and web admin, and ₹9,00,000 for iOS and Android shared. Prices are in INR after discovery, and the final quote follows a written scope.",
      },
      {
        question: "How long does it take to get an iPhone app on the App Store?",
        answer:
          "A focused iOS MVP is often 8–12 weeks of build after discovery, plus Apple's review time. We do not guarantee a review date because Apple sets it.",
      },
      {
        question: "Swift or React Native for our iOS app?",
        answer:
          "Swift when the app needs native iOS depth or is iOS-only for the foreseeable future. React Native when an Android version should ship from the same codebase. We recommend one after seeing the product.",
      },
      {
        question: "Do you handle App Store submission and TestFlight?",
        answer:
          "Yes. We set up TestFlight testing, prepare the App Store Connect listing, screenshots and privacy details, and respond to review feedback. The Apple Developer account stays in your company's name.",
      },
      {
        question: "Do you build the backend and admin too?",
        answer:
          "Yes. Most iOS apps need an API and a web admin. We scope and build them with the app; the Standard plan lists API + web admin.",
      },
      {
        question: "Can you also build the Android version?",
        answer:
          "Yes. See Android app development for a Play Store-first app, or mobile app development when both stores ship together on React Native or Flutter.",
      },
      {
        question: "Have you shipped iOS apps that are live?",
        answer:
          "Yes. PlugOne's EV charging driver experience includes iOS and is live at plugone.in. The PlugOne case study is in our portfolio.",
      },
      {
        question: "Are you based in India? Can you work with clients outside Jaipur?",
        answer:
          "Yes. TheTriFusion (Trifusion Infotech Private Limited) is at 5th Floor, Amoro Building, Patrakar Colony, Jaipur, Rajasthan 302020. We work with clients across India and worldwide, remotely, with weekly demos.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/mobile-app-development",
        title: "Mobile app development (iOS + Android)",
        text: "One React Native or Flutter app for both stores, from ₹50,000.",
      },
      {
        href: "/services/android-app-development",
        title: "Android app development company in Jaipur",
        text: "Kotlin or React Native apps for Google Play, with signing and staged rollouts.",
      },
      {
        href: "/blog/iphone-18-apple-intelligence-business-apps-india",
        title: "iPhone 18 and Apple Intelligence for business apps",
        text: "What Apple's newer features change for business apps in India.",
      },
      {
        href: "/blog/flutter-vs-react-native-2024",
        title: "Flutter vs React Native",
        text: "When a shared codebase is the better route for an iPhone app.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  "android-app-development": {
    contentUpdatedAt: "2026-09-29",
    metaTitle: "Android App Development Company in Jaipur | TheTriFusion",
    metaDescription:
      "Android app development company in Jaipur: Kotlin or React Native apps with Play Console signing and Play Store listing. From ₹2,50,000; MVP in 8–12 weeks.",
    keywords:
      "Android app development company in Jaipur, android app development company jaipur, android application development in jaipur, android app development services jaipur, Kotlin app development India, Play Store app development Jaipur, hire Android developers Jaipur",
    breadcrumbName: "Android App Development",
    description:
      "TheTriFusion builds Play Store-ready Android apps in Jaipur for businesses in Rajasthan and across India: Kotlin when the app needs native Android depth, React Native or Flutter when iOS will follow. We handle Play Console signing, the store listing, testing tracks, and the backend and web admin the app depends on.",
    ctaText:
      "Tell us whether it is Kotlin or React Native, and whether iOS follows. We return a scoped estimate and an 8–12 week MVP path from Jaipur.",
    answerFirst: {
      id: "quick-answer",
      heading: "Android app development company in Jaipur: the short answer",
      text:
        "TheTriFusion is an Android app development company in Jaipur, Rajasthan. We build Play Store apps in Kotlin, or React Native or Flutter when iOS should follow, and handle signing, the store listing and the first production release. A focused Android MVP starts from ₹2,50,000 and typically takes 8–12 weeks after discovery. The Play Console account stays in your name.",
      facts: [
        { label: "Starting price", value: "From ₹2,50,000 (focused Android MVP)" },
        { label: "Typical MVP timeline", value: "8–12 weeks after discovery" },
        { label: "Stack", value: "Kotlin, React Native, Flutter, Firebase, Node.js, AWS" },
        { label: "Office", value: NAP_LINE },
      ],
    },
    timelineLabel: "8 – 12 Weeks",
    timelineNote:
      "A focused Android MVP is often 8–12 weeks after discovery. Google Play review time is added on top, and larger products are phased.",
    caseStudy: {
      title: "PlugOne and Connect Dairy on Android",
      summary:
        "Live apps in the field: PlugOne (plugone.in), an EV charging platform, and Connect Dairy (connectdairy.in), a fleet, role, and operations app.",
      href: "/portfolio/plugone-ev-charging-platform",
      hrefLabel: "PlugOne case study",
      liveUrl: "https://plugone.in/",
      liveLabel: "plugone.in",
    },
    process: [
      {
        step: 1,
        title: "Discovery and scope",
        description:
          "Users, devices, must-have flows, and whether iOS follows. The Kotlin or React Native decision is made here, in writing.",
      },
      {
        step: 2,
        title: "Android UX",
        description:
          "Screens designed for Android conventions and the mid-range phones many users carry, including slow networks and small screens.",
      },
      {
        step: 3,
        title: "Build with weekly demos",
        description:
          "Working builds every week, installed on real Android devices. The backend and web admin are built alongside the app.",
      },
      {
        step: 4,
        title: "Play Console and testing tracks",
        description:
          "App signing, the store listing and screenshots, internal and closed testing tracks, then the first production release, staged where the plan includes it.",
      },
      {
        step: 5,
        title: "Crash monitoring and updates",
        description:
          "Crash monitoring after the first install, a support window (1, 3, or 6 months by plan), and updates for new Android versions.",
      },
    ],
    extraSections: [
      {
        id: "android-whats-included",
        heading: "What an Android app project includes",
        paragraphs: [
          "Most Android briefs from Jaipur and Rajasthan businesses are working tools as much as consumer apps: field-staff apps, ordering and delivery apps, booking apps, and customer portals. They usually need an API, a database, and a web admin as well as the app, so TheTriFusion builds those together.",
          "Common Android features include OTP sign-in, payments through a licensed gateway, push notifications, maps and location, camera and document capture, and screens that cope with patchy networks. Kotlin is used for Android-only depth; React Native or Flutter when an iOS version should ship from the same codebase. For both stores in one release, see [mobile app development](/services/mobile-app-development); for an iPhone-first product, see [iOS app development](/services/ios-app-development).",
        ],
        comparison: {
          heading: "Published Android plans",
          intro:
            "Starting prices from the [pricing page](/pricing), in INR, after discovery.",
          rowHeader: "Plan",
          columns: ["Starting price", "What the plan lists"],
          rows: [
            { label: "Basic", cells: ["₹2,50,000 / project", "Focused Android MVP, Play Store listing, 1 month support"] },
            { label: "Standard", cells: ["₹5,00,000 / project", "API + web admin, crash monitoring setup, 3 months support"] },
            { label: "Premium", cells: ["₹9,00,000 / project", "Android + iOS shared, staged rollouts, 6 months support"] },
          ],
        },
      },
      {
        id: "android-guides",
        heading: "Android guides from the Jaipur team",
        paragraphs: [
          "Before you hire, read [what to check before hiring an Android app company in Jaipur](/blog/android-app-development-company-jaipur) and the [Google Play launch checklist for Indian SMEs](/blog/google-play-store-app-launch-checklist-india-sme). For Android platform changes that affect business apps, see the [Samsung One UI 9 guide](/blog/samsung-one-ui-9-india-android-apps-business).",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does Android app development cost in Jaipur?",
        answer:
          "TheTriFusion's published Android plans start at ₹2,50,000 for a focused Android MVP, ₹5,00,000 with an API, web admin and crash monitoring, and ₹9,00,000 for Android and iOS shared. Prices are in INR after discovery; the final quote follows a written scope.",
      },
      {
        question: "How long does an Android MVP take?",
        answer:
          "Often 8–12 weeks after discovery for a focused Android MVP, plus Google Play review time.",
      },
      {
        question: "Kotlin or React Native for our Android app?",
        answer:
          "Kotlin when the app is Android-only and needs native depth. React Native or Flutter when iOS should follow from the same codebase. We recommend one after seeing the product, not before.",
      },
      {
        question: "Do you handle the Play Store listing and release?",
        answer:
          "Yes. App signing, the store listing and screenshots, testing tracks, and the first production release. You own the Play Console account.",
      },
      {
        question: "Do you build the backend and admin panel too?",
        answer:
          "Yes. Most Android apps need an API and a web admin. We scope and build them with the app; the Standard plan lists API + web admin.",
      },
      {
        question: "Can you show Android apps that are live?",
        answer:
          "PlugOne (plugone.in) and Connect Dairy (connectdairy.in) are live apps built by TheTriFusion.",
      },
      {
        question: "Is TheTriFusion based in Jaipur?",
        answer:
          "Yes. Trifusion Infotech Private Limited is at 5th Floor, Amoro Building, Patrakar Colony, Jaipur, Rajasthan 302020, open Monday to Saturday, 10 AM to 7 PM IST. We serve clients across Rajasthan, India, and worldwide, and can meet in Jaipur for a kickoff.",
      },
      {
        question: "Can you add an iOS version later?",
        answer:
          "Yes. If iOS is likely, we can start on React Native or Flutter so the second store shares the codebase. See iOS app development or mobile app development for those paths.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/mobile-app-development",
        title: "Mobile app development (iOS + Android)",
        text: "One React Native or Flutter app for both stores, from ₹50,000.",
      },
      {
        href: "/services/ios-app-development",
        title: "iOS app development company in India",
        text: "Swift or React Native iPhone apps with TestFlight and App Store submission.",
      },
      {
        href: "/blog/google-play-store-app-launch-checklist-india-sme",
        title: "Google Play launch checklist for Indian SMEs",
        text: "Accounts, signing, listing, and review before the first release.",
      },
      {
        href: "/blog/android-app-development-company-jaipur",
        title: "Hiring an Android app company in Jaipur",
        text: "What to check before you hire: stack, Play Store ownership, and red flags.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  devops: {
    contentUpdatedAt: "2026-09-29",
    answerFirst: {
      id: "quick-answer",
      heading: "DevOps services in Jaipur and India: the short answer",
      text:
        "TheTriFusion provides DevOps services in Jaipur and across India: CI/CD pipelines, infrastructure as code, Kubernetes management, DevSecOps readiness, cloud cost optimization, cloud migration and managed DevOps on AWS, Azure and Google Cloud. Every engagement starts with a free infrastructure audit. The fee follows the audit, so this page does not list a package price.",
      facts: [
        { label: "First step", value: "Free infrastructure audit" },
        { label: "Clouds", value: "AWS, Azure, Google Cloud" },
        { label: "Tools", value: "Docker, Kubernetes, Terraform, Ansible, GitHub Actions, GitLab CI, Jenkins, Argo CD" },
        { label: "Office", value: NAP_LINE },
      ],
    },
  },
};
