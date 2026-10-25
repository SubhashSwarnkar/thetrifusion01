import { LIVE, NAP_LINE, SOURCES, TEAM } from "./_shared";

/**
 * /services/android-app-development
 * TODO OWNER: Play Store links + ratings for live apps.
 * TODO OWNER: device/vernacular proof (screenshots of Hindi UI, low-end device QA list).
 */
export default {
  contentUpdatedAt: "2026-10-25",
  metaTitle: "Android App Development Company in Jaipur | Play Store Apps",
  bannerTitle: "Android App Development Company in Jaipur",
  metaDescription:
    "Kotlin or React Native Android apps built in Jaipur, with Play Console setup, signing and Play Store listing. From ₹2,50,000; MVP in 8–12 weeks.",
  keywords:
    "android app development company in Jaipur, android app development cost India, Kotlin app developer India, Play Store app development Jaipur",
  answerFirst: {
    id: "quick-answer",
    heading: "Android app development company in Jaipur: the short answer",
    text:
      "TheTriFusion builds Play Store apps in Jaipur in Kotlin, or React Native / Flutter when iOS should follow. We handle signing, the store listing and the first production release. The Play Console account stays in your company's name. Focused Android MVPs start from ₹2,50,000 and typically take 8–12 weeks after discovery.",
    facts: [
      { label: "Starting price", value: "From ₹2,50,000 (focused Android MVP)" },
      { label: "Typical timeline", value: "8–12 weeks after discovery" },
      { label: "Stack", value: "Kotlin, React Native, Flutter, Firebase, Node.js" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
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
        "Kotlin when Android is the product. React Native or Flutter when iOS will follow. See [Flutter vs React Native](/blog/flutter-vs-react-native-2024) and the [Play Store launch checklist](/blog/google-play-store-app-launch-checklist-india-sme).",
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
        "Signing keys, a Play Console account in your company name, testing tracks, store listing, and a privacy policy. The working list is on the [Google Play launch checklist for Indian SMEs](/blog/google-play-store-app-launch-checklist-india-sme).",
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
        `${LIVE.plugone} and ${LIVE.dairy} are live. Play Store URLs and ratings are not in this repo.`,
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
  faqs: [
    {
      question: "How much does an Android app cost in India?",
      answer:
        "TheTriFusion published Android plans start at ₹2,50,000, ₹5,00,000 and ₹9,00,000. A small cross-platform slice can start from ₹50,000 on the mobile app page.",
    },
    {
      question: "How long does Play Store approval take?",
      answer:
        "Google review is often faster than the App Store, but it is still Google's clock. We submit a complete listing and a testing track first.",
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
        "You do. The Play Console stays in your company's name. We use access you grant.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/mobile-app-development",
      title: "Mobile app development",
      text: "When both stores ship together.",
    },
    {
      href: "/services/ios-app-development",
      title: "iOS app development",
      text: "When the other store is the App Store.",
    },
    {
      href: "/blog/google-play-store-app-launch-checklist-india-sme",
      title: "Play Store launch checklist",
      text: "Accounts, signing, listing and review.",
    },
  ],
};
