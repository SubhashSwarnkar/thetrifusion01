import {
  NAP,
  UPDATED,
  PRICES,
  officeFaq,
  gstFaq,
  siblingCitySlugs,
} from "./_shared";

const PARENT = "/services/mobile-app-development";
const PRICE = PRICES.mobile;

export const mobileCityLandings = [
  {
    slug: "mobile-app-development-company-jaipur",
    serviceAreaCity: "Jaipur",
    serviceAreaRegion: "Rajasthan",
    title: "Mobile App Development Company in Jaipur | iOS & Android from ₹50,000",
    h1: "Mobile App Development in Jaipur — iOS and Android from Patrakar Colony",
    navLabel: "Jaipur mobile apps (HQ)",
    metaDescription:
      "Mobile app development company in Jaipur for iOS and Android. React Native or Flutter, backend and admin, from ₹50,000. Studio at Patrakar Colony.",
    primaryKeyword: "mobile app development company in Jaipur",
    secondaryKeywords: [
      "iOS Android app Jaipur",
      "React Native company Jaipur",
      "jewellery dealer app Jaipur",
      "hotel guest app Jaipur",
      "Flutter app development Rajasthan",
    ],
    outcomeLine:
      "A Jaipur jeweller, hotel or field team gets one React Native or Flutter app on both stores, with the admin the shop actually uses — scoped at Patrakar Colony from ₹50,000.",
    intro: `TheTriFusion is a mobile app development company in Jaipur. We ship one product for iOS and Android, usually on React Native or Flutter, plus the backend and web admin. The studio is ${NAP}. Published mobile work starts from ${PRICE.basic}. Store-only native MVPs are listed from ₹2,50,000 each on pricing. This page is the Jaipur service area. The parent capability write-up is mobile app development.`,
    sections: [
      {
        title: "Apps Jaipur businesses actually ask for",
        body: `Jewellery wholesalers want a dealer app that shows weight and rate only after login — not a public catalogue that undercuts the counter. Hotels want a guest or staff app only when the website already takes the enquiry; we will say when a site is enough. Field sales for Sitapura units want attendance, order capture and photos on a phone that works in Hindi. We will not pitch a Super-app clone of a national consumer brand as a ₹50,000 job.`,
      },
      {
        title: "One codebase vs two native apps",
        body: `React Native or Flutter when both stores matter and the UI can share. Swift or Kotlin when you need one store first or a platform API. iOS-only and Android-only processes live on those service pages. You own the Apple and Play consoles.`,
      },
      {
        title: "Published INR prices",
        body: `Mobile app development from ${PRICE.basic}. Focused native iOS or Android MVPs from ₹2,50,000 each. What moves the number: roles, payments, offline use, maps, and whether both stores launch together.`,
      },
      {
        title: "Kickoff in Jaipur",
        body: `You can visit the studio. TestFlight and Play internal testing are part of the path. We do not publish download counts we do not have.`,
      },
      {
        title: "Parent page",
        body: `Flutter vs React Native, ecommerce app cost, and India FAQs: mobile app development company in India.`,
      },
    ],
    faqs: [
      officeFaq("Jaipur"),
      {
        question: "How much does an app cost in Jaipur?",
        answer: `Published mobile work starts at ${PRICE.basic}. Native store MVPs from ₹2,50,000 each. Scope sets the number.`,
      },
      {
        question: "Do you publish to Play Store and App Store?",
        answer:
          "Yes. You own the consoles. We help with listing, signing and TestFlight.",
      },
      {
        question: "Can the app be Hindi?",
        answer:
          "Yes. Hindi, English, or both, when copy is in the scope.",
      },
      gstFaq("Jaipur"),
    ],
    deliverables: [
      "iOS and/or Android build as scoped",
      "Admin or API behind the app",
      "TestFlight / Play internal test",
      "Hindi UI option",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Jaipur jewellers and exporters",
      "Hotels and field teams",
      "Sitapura manufacturers",
      "SMEs who need both stores",
    ],
    timelineRange:
      "A focused cross-platform MVP is often 8–12 weeks after discovery.",
    whatsappMessage:
      "Hi TriFusion, I want a Jaipur iOS/Android app scoped at your studio.",
    relatedServiceSlugs: [
      "mobile-app-development",
      "ios-app-development",
      "android-app-development",
      "ui-ux-design",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "mobile",
      "mobile-app-development-company-jaipur"
    ),
    relatedLinks: [
      { href: PARENT, label: "Mobile app development company in India (parent page)" },
    ],
    cta: "Get a scoped Jaipur app estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "mobile-app-development-company-delhi",
    serviceAreaCity: "Delhi",
    serviceAreaRegion: "Delhi",
    title: "Mobile App Development Company in Delhi NCR | From Jaipur, ₹50,000",
    h1: "Mobile Apps for Delhi NCR — From Our Jaipur Office",
    navLabel: "Delhi NCR apps (from Jaipur)",
    metaDescription:
      "iOS and Android apps for Delhi, Gurgaon and Noida field teams from TheTriFusion in Jaipur. From ₹50,000. No Delhi office.",
    primaryKeyword: "mobile app development company in Delhi",
    secondaryKeywords: [
      "app development Delhi NCR from Jaipur",
      "field sales app Gurgaon",
      "logistics app Noida",
      "React Native Delhi",
      "Play Store app NCR",
    ],
    outcomeLine:
      "An NCR field or logistics team gets an iOS/Android app from Jaipur — IST demos, Hindi UI, no invented Connaught Place lab.",
    intro: `Delhi NCR app briefs we take are field-sales capture, last-mile or warehouse scans, and companion apps for vendor portals. TheTriFusion has no Delhi office. Delivery is from ${NAP}. Published mobile work from ${PRICE.basic}.`,
    sections: [
      {
        title: "Field apps that survive an NCR workday",
        body: `Gurgaon and Noida sales teams need offline-tolerant order capture, GSTIN on the invoice, and a photo of the delivery. Okhla and Bhiwadi warehouse walks are the same product: a scan that still works when the shed Wi-Fi drops, then a sync when the phone is back on 4G. We test on mid-range Android first; iPhone follows when the roster actually carries one. A typical first slice is login, today’s beat, capture, and a manager queue — not a pan-India consumer super-app. Maps, COD and WhatsApp-as-workflow are extras we write into the scope only when you already run them. The system of record stays the vendor portal or CRM you already have; the app should not invent a second ledger.`,
      },
      {
        title: "Companion to a Delhi vendor portal",
        body: `If the system of record is a web portal (see the Delhi software city page), the app should share the same API. Two databases is how NCR ops lose a PO.`,
      },
      {
        title: "Stores and consoles",
        body: `You own Play Console and App Store Connect. We help with listing. We do not invent a download target.`,
      },
      {
        title: "INR prices",
        body: `From ${PRICE.basic}. Native store MVPs from ₹2,50,000 each. Maps, offline and payments move the quote.`,
      },
      {
        title: "Parent page",
        body: `Cross-platform vs native: mobile app development.`,
      },
    ],
    faqs: [
      officeFaq("Delhi"),
      {
        question: "Can the app work in Hindi for field staff?",
        answer: "Yes, when copy is scoped. Forms can be Hindi-first.",
      },
      {
        question: "Do you have Android testers in NCR?",
        answer:
          "QA is in Jaipur on devices we keep. You also test on the phones your NCR team actually carries.",
      },
      {
        question: "How much does an NCR business app cost?",
        answer: `Published mobile work from ${PRICE.basic}. Field-offline and maps are scoped extras.`,
      },
      gstFaq("Delhi"),
    ],
    deliverables: [
      "Field or companion app as scoped",
      "Shared API with the web admin",
      "Hindi UI option",
      "Play / TestFlight help",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "NCR field sales",
      "Warehouse and logistics teams",
      "Vendor-portal companions",
      "Gurgaon product teams who want a first mobile slice",
    ],
    timelineRange:
      "A focused NCR MVP is often 8–12 weeks after discovery.",
    whatsappMessage:
      "Hi TriFusion, I need a Delhi NCR iOS/Android app from your Jaipur team.",
    relatedServiceSlugs: [
      "mobile-app-development",
      "android-app-development",
      "ios-app-development",
      "software-development",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "mobile",
      "mobile-app-development-company-delhi"
    ),
    relatedLinks: [
      { href: PARENT, label: "Mobile app development company in India (parent page)" },
    ],
    cta: "Get a scoped Delhi NCR app estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "mobile-app-development-company-mumbai",
    serviceAreaCity: "Mumbai",
    serviceAreaRegion: "Maharashtra",
    title: "Mobile App Development Company in Mumbai | From Jaipur, ₹50,000",
    h1: "Mobile Apps for Mumbai — From Our Jaipur Office",
    navLabel: "Mumbai apps (from Jaipur)",
    metaDescription:
      "iOS and Android apps for Mumbai D2C and ops teams from TheTriFusion in Jaipur. From ₹50,000. No Mumbai office.",
    primaryKeyword: "mobile app development company in Mumbai",
    secondaryKeywords: [
      "D2C app development Mumbai",
      "React Native Mumbai from Jaipur",
      "ecommerce app Maharashtra",
      "iOS Android app Andheri",
      "Flutter app Mumbai",
    ],
    outcomeLine:
      "A Mumbai D2C or ops team gets a store app or staff app from Jaipur — UPI/Razorpay when in scope, no fake Bandra studio.",
    intro: `Mumbai app briefs we take are D2C store apps, staff apps for trading floors, and companion apps for production houses. TheTriFusion has no Mumbai office. Delivery from ${NAP}. Published mobile work from ${PRICE.basic}. A full ecommerce app cost write-up is on the blog; storefront packages live on ecommerce.`,
    sections: [
      {
        title: "D2C apps that match the Mumbai store",
        body: `If Shopify or a custom store already sells from Andheri, Bandra or a 3PL in Bhiwandi, the app should use the same catalogue, GST invoices and return windows. We will not build a second inventory that fights the website on festive drops. UPI and Razorpay are ordinary scope items; we do not hold settlement. Staff apps for trading floors and production houses are a different product: attendance, a job card, or a dealer rate — not a clone of a consumer food-delivery app. Local-train 4G is the network we design for; autoplay lookbooks belong on the website. A first Mumbai MVP is usually one of those two jobs, not both.`,
      },
      {
        title: "Staff apps, not consumer clones",
        body: `A night-shift production tracker or a dealer rate app is a different product from a Swiggy clone. We scope the first honestly.`,
      },
      {
        title: "4G in a local train",
        body: `We keep images and video light. Autoplay showreels belong on the website, not the first screen of a staff app.`,
      },
      {
        title: "INR prices",
        body: `From ${PRICE.basic}. Native MVPs from ₹2,50,000 per store.`,
      },
      {
        title: "Parent page",
        body: `iOS vs Android vs cross-platform: mobile app development.`,
      },
    ],
    faqs: [
      officeFaq("Mumbai"),
      {
        question: "Can you wrap our Shopify store in an app?",
        answer:
          "Sometimes. Often a custom app on the same API is cleaner. We say which after seeing the store.",
      },
      {
        question: "Do you build UPI inside the app?",
        answer:
          "We integrate the gateway you contract. We are not a payment aggregator.",
      },
      {
        question: "How much does a Mumbai business app cost?",
        answer: `Published mobile work from ${PRICE.basic}. Catalogue size and payments change the quote.`,
      },
      gstFaq("Mumbai"),
    ],
    deliverables: [
      "Store or staff app as scoped",
      "Same catalogue as the website when you have one",
      "UPI/Razorpay integration when in scope",
      "Store listing help",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Mumbai D2C brands",
      "Trading-house staff",
      "Production ops",
      "Services firms with field teams",
    ],
    timelineRange:
      "A focused Mumbai MVP is often 8–12 weeks after discovery.",
    whatsappMessage:
      "Hi TriFusion, I want a Mumbai iOS/Android app from your Jaipur team.",
    relatedServiceSlugs: [
      "mobile-app-development",
      "ios-app-development",
      "android-app-development",
      "ui-ux-design",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "mobile",
      "mobile-app-development-company-mumbai"
    ),
    relatedLinks: [
      { href: PARENT, label: "Mobile app development company in India (parent page)" },
    ],
    cta: "Get a scoped Mumbai app estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "mobile-app-development-company-bangalore",
    serviceAreaCity: "Bengaluru",
    serviceAreaRegion: "Karnataka",
    title: "Mobile App Development Company in Bangalore | From Jaipur, ₹50,000",
    h1: "Mobile Apps for Bangalore — From Our Jaipur Office",
    navLabel: "Bangalore apps (from Jaipur)",
    metaDescription:
      "iOS and Android apps for Bangalore product teams from TheTriFusion in Jaipur. React Native or Flutter from ₹50,000. No Bengaluru office.",
    primaryKeyword: "mobile app development company in Bangalore",
    secondaryKeywords: [
      "React Native Bangalore from Jaipur",
      "Flutter app Whitefield",
      "SaaS mobile client Koramangala",
      "iOS Android MVP Karnataka",
      "product app development Bengaluru",
    ],
    outcomeLine:
      "A Bangalore product team gets a mobile client on the same API as the web app — IST overlap, INR, no fake Koramangala lab.",
    intro: `Bangalore app briefs we take are SaaS mobile clients, internal ops apps, and a first consumer slice when the web product already exists. TheTriFusion has no Bangalore office. Delivery from ${NAP}. Published mobile work from ${PRICE.basic}. If you need a named developer inside your sprint, use hire dedicated developers.`,
    sections: [
      {
        title: "A client, not a second product",
        body: `The app should hit the same API as the Next.js or GraphQL app already running in Whitefield or Koramangala. A second backend is how Bangalore teams ship two sources of truth and then argue about which dashboard is right. We will say no to a greenfield consumer super-app priced like a brochure site. Typical first slices: a signed-in client for an existing SaaS, an internal ops app for a Karnataka SME, or a first store listing when the web product already has auth. TestFlight and Play internal testing land in IST. You own the consoles. React Native or Flutter when both stores matter; native when you need one platform API. Hours inside your sprint still belong on hire dedicated developers, not this page.`,
      },
      {
        title: "React Native, Flutter, or native",
        body: `Shared codebase when both stores matter. Native when you need one store or a platform API. We write the choice in the scope.`,
      },
      {
        title: "TestFlight in IST",
        body: `Builds land on TestFlight and Play internal testing. You own the consoles. We do not keep your Apple ID.`,
      },
      {
        title: "INR prices",
        body: `From ${PRICE.basic}. Native MVPs from ₹2,50,000 per store.`,
      },
      {
        title: "Parent page",
        body: `Cost drivers and store process: mobile app development.`,
      },
    ],
    faqs: [
      officeFaq("Bangalore"),
      {
        question: "Can you consume our existing GraphQL/REST API?",
        answer:
          "Yes. We read the spec before we promise screens.",
      },
      {
        question: "Do you join our existing mobile chapter?",
        answer:
          "For a fixed app slice, weekly demos. For staff-aug, use on-demand developers.",
      },
      {
        question: "How much does a Bangalore product app cost?",
        answer: `Published mobile work from ${PRICE.basic}. Auth, offline and store IAP are scoped extras.`,
      },
      gstFaq("Bangalore"),
    ],
    deliverables: [
      "Mobile client on your API",
      "TestFlight / Play internal track",
      "IST demos",
      "Consoles in your name",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Bangalore SaaS products",
      "Internal ops apps",
      "Founders shipping a first store build",
      "Karnataka SMEs who want INR pricing",
    ],
    timelineRange:
      "A focused Bangalore MVP is often 8–12 weeks after discovery.",
    whatsappMessage:
      "Hi TriFusion, I have a Bangalore product app brief for your Jaipur team.",
    relatedServiceSlugs: [
      "mobile-app-development",
      "software-development",
      "ios-app-development",
      "android-app-development",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "mobile",
      "mobile-app-development-company-bangalore"
    ),
    relatedLinks: [
      { href: PARENT, label: "Mobile app development company in India (parent page)" },
    ],
    cta: "Get a scoped Bangalore app estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "mobile-app-development-company-jodhpur",
    serviceAreaCity: "Jodhpur",
    serviceAreaRegion: "Rajasthan",
    title: "Mobile App Development Company in Jodhpur | From Jaipur, ₹50,000",
    h1: "Mobile Apps for Jodhpur — From Our Jaipur Office",
    navLabel: "Jodhpur apps (from Jaipur)",
    metaDescription:
      "iOS and Android apps for Jodhpur exporters, hotels and field teams from TheTriFusion in Jaipur. From ₹50,000. No Jodhpur office.",
    primaryKeyword: "mobile app development company in Jodhpur",
    secondaryKeywords: [
      "dealer app Jodhpur handicrafts",
      "hotel staff app Jodhpur",
      "field app solar Jodhpur",
      "Android app Rajasthan from Jaipur",
      "React Native Jodhpur",
    ],
    outcomeLine:
      "A Jodhpur exporter or hotel gets a dealer or staff app from Jaipur — Hindi UI, Android-first when the yard carries Samsung, travel when the workshop needs a demo on site.",
    intro: `Jodhpur app briefs are dealer apps for furniture and handicraft exporters, staff apps for heritage hotels, and field apps for solar sites. TheTriFusion has no Jodhpur office. Delivery from ${NAP}, with travel when scoped. Published mobile work from ${PRICE.basic}.`,
    sections: [
      {
        title: "Android-first for the yard",
        body: `Many Jodhpur field phones are Android — handicraft yards, solar sites outside the city, and hotel night staff. We ship Play first when that is the roster, then iOS if the owner wants the same product on iPhone. Hindi labels are ordinary. Dealer apps keep wholesale rates behind a login; the public furniture catalogue stays on the website. A hotel staff room-status app is a different first release from a guest booking app; we pick one. Photos from the workshop should compress for 4G on the Barmer road, not stream 4K. Travel from Jaipur for an on-site demo is in the scope when you ask. We will not print a Sojati Gate office for TheTriFusion.`,
      },
      {
        title: "Dealer rates that stay private",
        body: `The public catalogue is the website. The app is the login. We will not put wholesale rates on an unauthenticated screen.`,
      },
      {
        title: "Hotel staff vs guest apps",
        body: `A staff room-status app is a different product from a guest booking app. We pick one first release.`,
      },
      {
        title: "INR prices",
        body: `From ${PRICE.basic}. Native MVPs from ₹2,50,000 per store.`,
      },
      {
        title: "Parent page",
        body: `India-wide app process: mobile app development.`,
      },
    ],
    faqs: [
      officeFaq("Jodhpur"),
      {
        question: "Can you demo the app at our Jodhpur workshop?",
        answer:
          "Yes when travel is in the scope. Otherwise TestFlight/Play internal and a video call.",
      },
      {
        question: "Will dealers on 4G be able to open catalogues?",
        answer:
          "We keep images compressed and allow a low-bandwidth list first. We do not stream 4K product video in the dealer app.",
      },
      {
        question: "How much does a Jodhpur business app cost?",
        answer: `Published mobile work from ${PRICE.basic}. Dealer logins and offline photos are scoped extras.`,
      },
      gstFaq("Jodhpur"),
    ],
    deliverables: [
      "Android-first or both stores as scoped",
      "Dealer or staff login",
      "Hindi UI option",
      "Optional on-site demo",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Handicraft exporters",
      "Heritage hotels",
      "Solar field teams",
      "Jodhpur SMEs with Android-first staff",
    ],
    timelineRange:
      "A focused Jodhpur MVP is often 8–12 weeks after discovery.",
    whatsappMessage:
      "Hi TriFusion, I want a Jodhpur dealer or staff app from your Jaipur team.",
    relatedServiceSlugs: [
      "mobile-app-development",
      "android-app-development",
      "website-development",
      "software-development",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "mobile",
      "mobile-app-development-company-jodhpur"
    ),
    relatedLinks: [
      { href: PARENT, label: "Mobile app development company in India (parent page)" },
    ],
    cta: "Get a scoped Jodhpur app estimate",
    updatedAt: UPDATED,
  },
];
