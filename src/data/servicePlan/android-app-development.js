import { LIVE, NAP_LINE, SOURCES, TEAM } from "./_shared";

/**
 * /services/android-app-development
 * Primary intent: Play Store-first / Android-first apps (India), studio in Jaipur.
 * Cross-platform both-stores → mobile-app-development.
 * TODO OWNER: Play Store links + ratings for live apps.
 * TODO OWNER: device/vernacular proof (screenshots of Hindi UI, low-end device QA list).
 */
export default {
  contentUpdatedAt: "2026-11-18",
  metaTitle: "Android App Development Company in Jaipur | Kotlin Apps",
  bannerTitle: "Android App Development Company in Jaipur",
  metaDescription:
    "Kotlin or React Native Android apps with Play Console setup, signing and store listing. Focused MVP from ₹2,50,000 in 8–12 weeks. Jaipur team.",
  keywords:
    "android app development company in India, android app development company Jaipur, android app development cost India, Kotlin app developer India, Play Store app development",
  schemaServiceName: "Android App Development",
  breadcrumbName: "Android App Development",
  serviceType: "Android App Development",
  whyHeading: "Why businesses choose TheTriFusion for Android apps",
  primaryCtaLabel: "Get an Android app estimate",
  primaryCtaHref: "/contact?service=android-app-development",
  whatsappMessage: "Hi TheTriFusion, I need an Android app for: ",
  leadProjectType: "Android app",
  formHeading: "Get an Android app estimate",
  midCtaText:
    "Tell us your users and must-have screens. We reply with a written Play Store plan.",
  subjectOfCaseStudies: [
    "/portfolio/plugone-ev-charging-platform",
    "/portfolio/connect-dairy-supply-chain",
  ],
  caseStudy: {
    heading: "Client apps: PlugOne and Connect Dairy",
    title: "PlugOne and Connect Dairy on Android",
    summary:
      "Live apps in the field: PlugOne (plugone.in), an EV charging platform, and Connect Dairy (connectdairy.in), a fleet, role, and operations app.",
    href: "/portfolio/plugone-ev-charging-platform",
    hrefLabel: "PlugOne case study",
    liveUrl: "https://plugone.in/",
    liveLabel: "plugone.in",
  },
  scopeHeading: "Android apps we build",
  processHeading: "How an Android project runs",
  ctaText:
    "Say Kotlin or React Native, and whether iOS follows. We return a scoped estimate and an 8–12 week MVP path from Jaipur.",
  coverageSections: [],
  industries: [],
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
  answerFirst: {
    id: "quick-answer",
    heading: "How much does an Android app cost in India?",
    text:
      "TheTriFusion builds Android apps in Kotlin, or in React Native or Flutter when an iOS version should follow. We handle app signing, the Play Store listing and the first production release, and the Play Console account stays in your company's name. Focused Android MVPs start at ₹2,50,000 and usually take 8–12 weeks after discovery.",
    facts: [
      { label: "Starting price", value: "From ₹2,50,000 (focused Android MVP)" },
      { label: "Typical timeline", value: "8–12 weeks after discovery" },
      { label: "Stack", value: "Kotlin, React Native, Flutter, Firebase, Node.js" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "android-whats-included",
      heading: "What an Android app project includes",
      paragraphs: [
        "Most Android briefs are working tools as much as consumer apps: field-staff apps, ordering and delivery apps, booking apps, and customer portals. They usually need an API, a database, and a web admin as well as the app, so TheTriFusion builds those together.",
        "Common Android features include OTP sign-in, payments through a licensed gateway, push notifications, maps and location, camera and document capture, and screens that cope with patchy networks. Kotlin is used for Android-only depth; React Native or Flutter when an iOS version should ship from the same codebase. For both stores in one release, see [mobile app development](/services/mobile-app-development); for an iPhone-first product, see [iOS app development](/services/ios-app-development).",
      ],
    },
    {
      id: "android-who-for",
      heading: "Who needs an Android-first app",
      paragraphs: [
        "Businesses whose users are mostly on Android: field sales and service teams, delivery and logistics staff, retailers and distributors, students, and customers in Tier-2 and Tier-3 cities. Android-first lets you launch to most Indian users with one build, then add iOS later from a shared React Native or Flutter codebase.",
      ],
    },
    {
      id: "android-india-types",
      heading: "Android app types for Indian businesses",
      paragraphs: [
        "Play Store-first products, field apps, vernacular (Hindi and other languages when copy is scoped), and payment flows that use UPI through gateways such as Razorpay. UPI is an [NPCI](" +
          SOURCES.npci +
          ") product; we integrate a gateway, we do not issue a UPI licence. Low-end device testing is part of QA when the brief says so.",
      ],
    },
    {
      id: "kotlin-vs-rn-vs-flutter",
      heading: "Kotlin vs React Native vs Flutter",
      paragraphs: [
        "Kotlin when Android is the product. React Native or Flutter when iOS will follow. Cross-platform process for both stores lives on [mobile app development](/services/mobile-app-development#flutter-vs-rn-vs-native).",
      ],
      comparison: {
        heading: "How we choose",
        rowHeader: " ",
        columns: ["Kotlin", "React Native", "Flutter"],
        rows: [
          { label: "Best for", cells: ["Play Store-first, Android APIs", "Shared JS/TS team, iOS next", "Custom UI from one codebase"] },
          { label: "Published starting price", cells: ["From ₹2,50,000", "Often the cross-platform page from ₹50,000", "Often the cross-platform page from ₹50,000"] },
        ],
      },
    },
    {
      id: "play-store-checklist",
      heading: "Play Store launch checklist",
      paragraphs: [
        "Signing keys, a Play Console account in your company name, testing tracks, store listing, privacy policy, data-safety and content-rating forms, and the first production release. Keep Console ownership with your company — not a personal contractor account that walks away.",
      ],
      included: [
        "App signing and release key management on your account",
        "Store listing, screenshots and promotional text",
        "Internal and closed testing tracks before production",
        "Privacy policy URL and data-safety answers prepared with you",
        "First production release from your Play Console",
      ],
    },
    {
      id: "android-cost",
      heading: "Android app development cost",
      paragraphs: [
        "Published plans on [pricing](/pricing): ₹2,50,000 / ₹5,00,000 / ₹9,00,000. What moves cost: offline, vernacular, payments, admin, and whether iOS is in the same release.",
      ],
      comparison: {
        heading: "Published Android plans",
        rowHeader: "Plan",
        columns: ["Starting price", "Typical use"],
        rows: [
          { label: "Basic", cells: ["₹2,50,000", "Focused Play Store MVP"] },
          { label: "Standard", cells: ["₹5,00,000", "Broader Android product with admin"] },
          { label: "Premium", cells: ["₹9,00,000", "Larger Android programme"] },
        ],
      },
    },
    {
      id: "live-android",
      heading: "Live Android apps",
      paragraphs: [
        `${LIVE.plugone} and ${LIVE.dairy} are live.`,
        "Case studies: [PlugOne](/portfolio/plugone-ev-charging-platform) and [Connect Dairy](/portfolio/connect-dairy-supply-chain).",
      ],
    },
    {
      id: "android-guides",
      heading: "Related Android reading",
      paragraphs: [
        "For both-store releases, see [mobile app development](/services/mobile-app-development). For a white-label EV charging product with Android clients, see [PlugOne](/portfolio/plugone-ev-charging-platform) and [EV charging app development](/services/ev-charging-app-development).",
      ],
    },
    {
      id: "android-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.mobile}; ${TEAM.pm}.`,
      ],
    },
  ],
  replaceFaqs: true,
  faqs: [
    {
      question: "How much does an Android app cost in India?",
      answer:
        "TheTriFusion published Android plans start at ₹2,50,000, ₹5,00,000 and ₹9,00,000. A small cross-platform slice can start from ₹50,000 on the mobile app page.",
    },
    {
      question: "Kotlin or React Native: which should I choose for Android?",
      answer:
        "Choose Kotlin when the app is Android-only or needs deep device features such as Bluetooth, background location or offline sync. Choose React Native or Flutter when an iOS version will follow, because one codebase then serves both stores.",
    },
    {
      question: "How long does Play Store approval take?",
      answer:
        "Google review is often faster than the App Store, but it is still Google's clock. We submit a complete listing and a testing track first.",
    },
    {
      question: "What do I need to publish an app on the Play Store?",
      answer:
        "A Google Play Console developer account in your company's name, a privacy policy URL, app icon and screenshots, and the data-safety and content-rating forms. We prepare the listing and forms with you and submit the release from your account.",
    },
    {
      question: "Can the app work offline / on low-end phones?",
      answer:
        "Yes, when the scope says so. Offline sync and low-RAM layouts are explicit features, not a free default.",
    },
    {
      question: "Can you add UPI/Razorpay payments?",
      answer:
        "Yes. We integrate a payment gateway. UPI itself is run by NPCI (https://www.npci.org.in/); we do not issue merchant licences.",
    },
    {
      question: "Do you support Hindi and regional languages?",
      answer:
        "Yes, when copy and fonts are in the scope. The office works in English and Hindi.",
    },
    {
      question: "Who manages the Play Console account?",
      answer:
        "You do. The Play Console stays in your company's name. We use access you grant, prepare the listing and testing tracks, and submit the first production release from your account.",
    },
    {
      question: "Android-only or both stores?",
      answer:
        "Choose Android-first for Play Store-only releases. Choose [mobile app development](/services/mobile-app-development) when one shared codebase should ship to both stores in the same programme.",
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
      question: "Can you add an iOS version later?",
      answer:
        "Yes. If iOS is likely, we can start on React Native or Flutter so the second store shares the codebase. See iOS app development or mobile app development for those paths.",
    },
  ],
  replaceRelatedLinks: true,
  relatedLinks: [
    {
      href: "/services/mobile-app-development",
      title: "iOS and Android in one release",
      text: "One React Native or Flutter app for both stores.",
    },
    {
      href: "/services/ev-charging-app-development",
      title: "white-label EV charging app (PlugOne)",
      text: "OCPP CMS and driver apps for charger networks.",
    },
    {
      href: "/services/fintech-app-development",
      title: "AEPS/BBPS retailer apps",
      text: "Fintech retailer and distributor panels with Play Store clients.",
    },
    {
      href: "/portfolio/plugone-ev-charging-platform",
      title: "PlugOne case study",
      text: "Live EV charging product — iOS, Android and web.",
    },
    {
      href: "/portfolio/connect-dairy-supply-chain",
      title: "Connect Dairy app",
      text: "Live agri-logistics web and mobile ops.",
    },
    {
      href: "/solutions/mobile-app-development-company-jaipur",
      title: "mobile app development in Jaipur",
      text: "Local industry copy for the Patrakar Colony studio.",
    },
  ],
};
