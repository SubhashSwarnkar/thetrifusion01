import { LIVE, NAP_LINE, TEAM } from "./_shared";

/**
 * /services/ios-app-development
 * TODO OWNER: real App Store links of iOS apps shipped.
 * TODO OWNER: Apple-platform experience years of the iOS lead.
 */
export default {
  contentUpdatedAt: "2026-10-27",
  metaTitle: "iOS App Development Company in India | iPhone Apps from Jaipur",
  bannerTitle: "iOS App Development Company in India",
  metaDescription:
    "Native Swift/SwiftUI or React Native iPhone & iPad apps built in Jaipur, with TestFlight and App Store submission handled. From ₹2,50,000.",
  keywords:
    "iOS app development company in India, iPhone app development company Jaipur, iOS app development cost India, Swift SwiftUI Jaipur, App Store app developer",
  answerFirst: {
    id: "quick-answer",
    heading: "iOS app development in India: key takeaways",
    text:
      "TheTriFusion is an iOS app development company in India, based in Jaipur. We build iPhone and iPad apps in Swift/SwiftUI, or React Native when Android will follow, and handle TestFlight, App Store Connect listing and review responses. Focused iOS MVPs start from ₹2,50,000. Typical build time is 8–12 weeks plus Apple review. Accounts stay in your company's name.",
    facts: [
      { label: "Starting price", value: "From ₹2,50,000 (focused iOS MVP)" },
      { label: "Typical timeline", value: "8–12 weeks of build, plus App Store review" },
      { label: "Stack", value: "Swift, SwiftUI, React Native, Firebase, Node.js" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "ios-includes",
      heading: "What iOS app development includes",
      paragraphs: [
        "Discovery, iPhone (and iPad when scoped) UI, Swift or React Native build, API and web admin when needed, TestFlight, App Store listing, privacy labels, and the first review response. Cross-platform work that ships both stores together lives on [mobile app development](/services/mobile-app-development).",
      ],
    },
    {
      id: "swift-vs-react-native",
      heading: "Native Swift vs React Native",
      paragraphs: [
        "Swift when the first release is iPhone-only or needs Apple APIs that do not share cleanly. React Native when Android is already on the roadmap. We write the recommendation into the scope.",
      ],
      comparison: {
        heading: "Decision table",
        rowHeader: " ",
        columns: ["Native Swift / SwiftUI", "React Native"],
        rows: [
          { label: "Best for", cells: ["App Store-only or iPhone-first products", "iOS now, Android next, one codebase"] },
          { label: "UI", cells: ["SwiftUI or UIKit", "Shared components; native modules where needed"] },
          { label: "Published starting price", cells: ["From ₹2,50,000", "Often the cross-platform mobile page from ₹50,000"] },
        ],
      },
    },
    {
      id: "swiftui-vs-uikit",
      heading: "SwiftUI vs UIKit",
      paragraphs: [
        "SwiftUI for new screens unless a device API or a third-party SDK still needs UIKit. We do not rewrite a working UIKit app for fashion.",
      ],
    },
    {
      id: "app-store-compliance",
      heading: "App Store review and compliance",
      paragraphs: [
        "Privacy nutrition labels, App Tracking Transparency when you track, and a review-notes file are part of submission. Review time is Apple's, not ours — often a few days, sometimes longer. We do not invent an approval-hour SLA.",
      ],
    },
    {
      id: "ios-cost-india",
      heading: "iOS app development cost in India",
      paragraphs: [
        "Published plans on [pricing](/pricing): ₹2,50,000 / ₹5,00,000 / ₹9,00,000. What moves cost: iPad, Apple Watch, payments, offline, and how much backend is in the first release.",
      ],
      comparison: {
        heading: "Published iOS plans",
        rowHeader: "Plan",
        columns: ["Starting price", "Typical use"],
        rows: [
          { label: "Basic", cells: ["₹2,50,000", "Focused iPhone MVP"] },
          { label: "Standard", cells: ["₹5,00,000", "Broader iOS product with admin"] },
          { label: "Premium", cells: ["₹9,00,000", "Larger iOS programme"] },
        ],
      },
    },
    {
      id: "shipped-ios",
      heading: "Shipped iOS apps",
      paragraphs: [
        `${LIVE.plugone} includes an iOS driver experience. App Store URLs are not stored in this repo, so they are not invented here.`,
      ],
    },
    {
      id: "ios-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.mobile}; ${TEAM.pm}. Years of Apple-platform experience are not in this repo.`,
      ],
    },
  ],
  faqs: [
    {
      question: "How much does iOS app development cost in India?",
      answer:
        "TheTriFusion published iOS plans start at ₹2,50,000, ₹5,00,000 and ₹9,00,000. The signed price follows a written scope.",
    },
    {
      question: "Do I need a Mac or Apple Developer account?",
      answer:
        "You need an Apple Developer Program account in your company's name. We can build on our Macs; we do not use a personal Apple ID that walks out with a contractor.",
    },
    {
      question: "How long does App Store review take?",
      answer:
        "Often a few days after a complete submission. Apple sets the clock. We prepare privacy labels, screenshots and review notes so the first pass is complete.",
    },
    {
      question: "Swift or React Native for iPhone apps?",
      answer:
        "Swift when iOS is the product. React Native when Android will follow from the same codebase. We recommend one after seeing the brief.",
    },
    {
      question: "Can you build for iPad and Apple Watch too?",
      answer:
        "iPad is a common scoped add-on. Apple Watch is only in the first release if the job actually happens on the wrist.",
    },
    {
      question: "What happens when Apple releases a new iOS version?",
      answer:
        "OS compatibility work sits in the support window or a separate maintenance scope. We do not promise same-day compatibility with every beta.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/mobile-app-development",
      title: "Mobile app development",
      text: "One product on both stores.",
    },
    {
      href: "/services/ui-ux-design",
      title: "UI/UX design",
      text: "Figma flows before TestFlight.",
    },
    {
      href: "/services/android-app-development",
      title: "Android app development",
      text: "When Play Store is the other half of the release.",
    },
  ],
};
