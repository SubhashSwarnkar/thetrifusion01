// Portfolio Img Imports
import Recruiting from "../assets/images/Portfolio/Recruiting.png";
import Stream from "../assets/images/Portfolio/Stream.png";
import Freelance from "../assets/images/Portfolio/Freelance.png";
import Aura from "../assets/images/Portfolio/Aura.png";
import Surtido from "../assets/images/Portfolio/Surtido.png";
import ManagementApp from "../assets/images/Portfolio/ManagementApp.png";
import PlugOneImg from "../assets/images/Portfolio/PlugOne.jpg";
import ConnectDairyImg from "../assets/images/Portfolio/ConnectDairy.jpg";
import AtharvNarayanImg from "../assets/images/Portfolio/AtharvNarayan.jpg";
import ShopNovaImg from "../assets/images/Portfolio/ShopNova.jpg";
import PaySwiftImg from "../assets/images/Portfolio/PaySwift.jpg";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// TeamMembers - Shared imports for testimonials and team
import CEO from "../assets/images/TeamMembers/CEO.png";
import HRD from "../assets/images/TeamMembers/HRD.jpg";
import ProjectManager from "../assets/images/TeamMembers/Project-manager.png";
import Frontend1 from "../assets/images/TeamMembers/Frontend1.png";
import Frontend2 from "../assets/images/TeamMembers/Frontend2.png";
import Backend1 from "../assets/images/TeamMembers/Backend1.png";
import Backend2 from "../assets/images/TeamMembers/Backend2.png";
import Mobile1 from "../assets/images/TeamMembers/Mobile1.jpg";
import Mobile2 from "../assets/images/TeamMembers/Mobile2.png";
import UIUX1 from "../assets/images/TeamMembers/UIUX1.png";

export const Services = [
  { title: "Software Development", slug: "software-development" },
  { title: "Website Development", slug: "website-development" },
  { title: "Mobile App Development", slug: "mobile-app-development" },
  { title: "UI/UX Design", slug: "ui-ux-design" },
  { title: "Cloud & AWS", slug: "devops" },
  { title: "Digital Marketing", slug: "digital-marketing" },
];

export const Portfolios = [
  {
    id: "plugone-ev-charging-platform",
    title: "PlugOne",
    imageUrl: PlugOneImg,
    type: "Mobile Apps",
    featured: true,
    cardDescription:
      "EV charging app — OCPI/OCPP roaming, live charger map, iOS + Android + web",
    relatedServiceSlug: "ev-charging-app-development",
    description:
      "PlugOne is India's unified EV charging platform. It connects EV owners to nearby charging stations in real time, with an interactive map, charging-status tracking, a smart mobility dashboard, and session management across charging networks.",
    responsibility: [
      "Mobile App Development",
      "UI/UX Design",
      "Backend Integration",
      "Maps & Real-time Tracking",
    ],
    credit: "https://plugone.in/",
  },
  {
    id: "connect-dairy-supply-chain",
    title: "Connect Dairy",
    imageUrl: ConnectDairyImg,
    type: "Mobile Apps",
    featured: true,
    cardDescription:
      "Agri logistics web & mobile — milk/feed fleets, live tracking, role dashboards",
    relatedServiceSlug: "crm-erp-development",
    description:
      "Connect Dairy (AtharvNarayan) is a live agri-logistics platform for dairy and feed operations: milk-truck management, feed-truck distribution, feed business workflows, live fleet tracking, role-based dashboards, and P&L variance analytics.",
    responsibility: [
      "Web & Mobile Development",
      "UI/UX Design",
      "Dashboard & Analytics",
      "Supply Chain Integration",
    ],
    credit: "https://www.connectdairy.in/",
  },
  {
    id: "atharv-narayan-wellness-website",
    title: "Atharv Narayan",
    imageUrl: AtharvNarayanImg,
    type: "Website",
    featured: true,
    cardDescription:
      "Dairy services website — Jaipur/Bhilwara leads, inquiry and WhatsApp flows",
    description:
      "Atharv Narayan is a live dairy solutions website for Bhilwara and Jaipur: milk transportation, trained dairy manpower, cattle-feed supply, and tender support — with service pages, inquiry flows, and WhatsApp-ready contact.",
    responsibility: [
      "Web Development",
      "UI/UX Design",
      "Lead & Inquiry Flows",
      "Content Management",
    ],
    credit: "https://www.atharvnarayan.in/",
  },
  {
    id: "dailyconcepts-ecommerce-pos",
    title: "DailyConcepts",
    imageUrl: Recruiting,
    type: "Mobile Apps",
    cardDescription:
      "Ecommerce + POS admin — checkout, inventory, online and offline Indian retail",
    relatedServiceSlug: "website-development",
    description:
      "Daily Concepts India is an e-commerce platform offering a seamless shopping experience with an integrated Point of Sales (POS) system in the Admin Panel. It features UI/UX-focused design, efficient order management, and a smooth checkout process, making it ideal for both online and offline sales.",
    responsibility: [
      "Development",
      "UI/UX Design",
      "Admin Pannel",
      "Point of Sales App ",
    ],
    credit: "https://dailyconceptsindia.com",
  },
  {
    id: "meditative-yoga-platform",
    title: "Meditative",
    imageUrl: Stream,
    type: "Website",
    cardDescription: "Yoga/wellness marketing site — class pages, mobile-first layout",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://yoga-80f.pages.dev/",
  },
  {
    id: "pet-sitting-services-website",
    title: "Pet Sitting",
    imageUrl: Freelance,
    type: "Website",
    cardDescription: "Pet care services website — bookings, service pages, mobile layout",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://petcare-c3n.pages.dev/services",
  },
  {
    id: "podcast-landing-page",
    title: "Podcast.",
    imageUrl: Aura,
    type: "Website",
    cardDescription: "Podcast landing page — episode list, brand site, responsive web",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://podcast-ctw.pages.dev/",
  },
  {
    id: "resto-restaurant-website",
    title: "Resto",
    imageUrl: Surtido,
    type: "Website",
    cardDescription: "Restaurant website — menu, reservation CTA, mobile-first design",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://resto-4tn.pages.dev/",
  },
  {
    id: "alime-photography-website",
    title: "Alime",
    imageUrl: Freelance,
    type: "Website",
    cardDescription: "Photography portfolio site — gallery, booking inquiry, visual CMS",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://alimephotographer.pages.dev/",
  },
  {
    id: "applab-mobile-app",
    title: "AppLab",
    imageUrl: ManagementApp,
    type: "Mobile Apps",
    cardDescription: "App marketing site + product UI — iOS/Android showcase pages",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://app-lab.pages.dev/",
  },
  {
    id: "dentista-dental-clinic",
    title: "Dentista",
    imageUrl: Surtido,
    type: "Website",
    cardDescription: "Dental clinic website — services, appointment lead form, local SEO",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dentista-dental-clinic.vercel.app/",
  },
  {
    id: "travelix-travel-booking-website",
    title: "Travelix",
    imageUrl: Recruiting,
    type: "Website",
    cardDescription: "Travel booking website — packages, inquiry flow, destination pages",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://travelix-neon.vercel.app/",
  },
  {
    id: "dentacare-dental-clinic",
    title: "DentaCare",
    imageUrl: Freelance,
    type: "Website",
    cardDescription: "Dental clinic web app — treatments, contact, mobile-friendly site",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dente-ua67.vercel.app/",
  },
  {
    id: "macro-photography-website",
    title: "Macro",
    imageUrl: ManagementApp,
    type: "Website",
    cardDescription: "Photography studio site — portfolio grid, visual storytelling pages",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://photography-dwap.vercel.app/",
  },
  {
    id: "shopnova-ecommerce-platform",
    title: "ShopNova",
    imageUrl: ShopNovaImg,
    type: "Website",
    cardDescription:
      "Ecommerce web app — filters, wishlist, multi-step checkout (demo storefront)",
    description:
      "ShopNova is a premium full-featured e-commerce website with a luxury fashion focus. It includes a product grid with smart filters, hero banners, wishlist, multi-step checkout, cart management, and a fully responsive mobile experience. Built for high-conversion retail businesses.",
    responsibility: [
      "Web Development",
      "UI/UX Design",
      "E-commerce Integration",
      "Payment Gateway",
    ],
    credit: "#",
  },
  {
    id: "payswift-fintech-payment-gateway",
    title: "PaySwift",
    imageUrl: PaySwiftImg,
    type: "Website",
    cardDescription:
      "Fintech payment UI — analytics, webhooks, checkout widget (demo, not a live bank)",
    relatedServiceSlug: "fintech-app-development",
    description:
      "PaySwift is a robust fintech payment gateway platform offering real-time transaction analytics, multi-currency support, API integration panel, settlement reports, webhook management, and a secure embeddable checkout widget. Designed for high-volume payment processing businesses.",
    responsibility: [
      "Web Development",
      "UI/UX Design",
      "Fintech API Integration",
      "Payment Gateway",
      "Security & Compliance",
    ],
    credit: "#",
  },
  {
    id: "fittrack-ios-android-fitness-app",
    title: "FitTrack",
    imageUrl: Stream,
    type: "Mobile Apps",
    cardDescription:
      "iOS + Android fitness app — steps, heart rate, workout library (demo)",
    description:
      "FitTrack is a cross-platform iOS & Android fitness tracking app featuring calorie burn ring charts, step counter, heart rate monitoring, weekly progress analytics, workout category library, and streak tracker. It connects to wearables and syncs health data in real time.",
    responsibility: [
      "iOS & Android Development",
      "UI/UX Design",
      "Wearable Integration",
      "Health Data Analytics",
    ],
    credit: "#",
  },
  {
    id: "dataforge-dsa-visualizer",
    title: "DataForge",
    imageUrl: Aura,
    type: "Website",
    cardDescription:
      "EdTech web app — DSA visualizer, code editor, complexity notes (demo)",
    description:
      "DataForge is an interactive DSA (Data Structures & Algorithms) learning and visualization platform. It provides animated algorithm visualizations for sorting, graph traversal, trees, and dynamic programming. Includes coding challenges, complexity analysis, and a built-in code editor.",
    responsibility: [
      "Web Development",
      "UI/UX Design",
      "Algorithm Visualization",
      "Interactive Code Editor",
    ],
    credit: "#",
  },
  {
    id: "realnest-real-estate-app",
    title: "RealNest",
    imageUrl: Recruiting,
    type: "Mobile Apps",
    cardDescription:
      "Real estate iOS + Android app — map search, EMI, agent chat (demo)",
    description:
      "RealNest is a smart real estate property listing mobile app for iOS & Android. It features map-based property search, advanced filters (price, BHK, locality), virtual tour integration, EMI calculator, agent connect chat, and saved property wishlist — built to simplify home buying and renting.",
    responsibility: [
      "iOS & Android Development",
      "UI/UX Design",
      "Maps & Location Services",
      "Virtual Tour Integration",
    ],
    credit: "#",
  },
  {
    id: "eduspark-edtech-learning-platform",
    title: "EduSpark",
    imageUrl: Surtido,
    type: "Website",
    cardDescription:
      "EdTech LMS website — live classes, quizzes, certificates (demo)",
    description:
      "EduSpark is a modern EdTech learning management platform offering live classes, recorded video courses, quizzes, progress tracking, certification, and mentor-student interaction. Designed with engaging UI for students across K-12, competitive exams, and professional upskilling.",
    responsibility: [
      "Web Development",
      "UI/UX Design",
      "LMS Integration",
      "Video Streaming",
      "Gamification",
    ],
    credit: "#",
  },
  {
    id: "cryptovault-crypto-tracker-app",
    title: "CryptoVault",
    imageUrl: ManagementApp,
    type: "Mobile Apps",
    cardDescription:
      "Crypto tracker iOS + Android — prices, P&L, alerts (demo, not a live exchange)",
    description:
      "CryptoVault is a sleek iOS & Android crypto portfolio tracker and wallet app. It displays live coin prices, portfolio P&L charts, market cap rankings, news feed, price alerts, and multi-wallet management — all in a dark-themed, data-rich UI optimized for crypto enthusiasts and traders.",
    responsibility: [
      "iOS & Android Development",
      "UI/UX Design",
      "Crypto API Integration",
      "Real-time Data Streaming",
    ],
    credit: "#",
  },
  {
    id: "medconnect-telemedicine-app",
    title: "MedConnect",
    imageUrl: Freelance,
    type: "Mobile Apps",
    cardDescription:
      "Telemedicine iOS + Android — video consult, e-prescription (demo)",
    description:
      "MedConnect is a comprehensive telemedicine and healthcare mobile app for iOS & Android. It features online doctor consultations via video call, appointment booking, e-prescription, medical records management, lab report uploads, and a health vitals tracker — making quality healthcare accessible from anywhere.",
    responsibility: [
      "iOS & Android Development",
      "UI/UX Design",
      "Video Call Integration",
      "Healthcare API & HIPAA Compliance",
    ],
    credit: "#",
  },
  {
    id: "clouddesk-saas-project-management",
    title: "CloudDesk",
    imageUrl: Stream,
    type: "Website",
    cardDescription:
      "SaaS project web app — Kanban, sprints, time tracking (demo)",
    description:
      "CloudDesk is a powerful SaaS project management and team collaboration platform. It offers Kanban boards, sprint planning, time tracking, Gantt charts, file sharing, in-app chat, role-based permissions, and integrations with GitHub and Slack — built for modern agile development teams.",
    responsibility: [
      "Web Development",
      "UI/UX Design",
      "SaaS Architecture",
      "Third-party Integrations",
    ],
    credit: "#",
  },
  {
    id: "foodrush-food-delivery-app",
    title: "FoodRush",
    imageUrl: Aura,
    type: "Mobile Apps",
    cardDescription:
      "Food delivery iOS + Android — live map tracking, payments (demo)",
    description:
      "FoodRush is a feature-rich food delivery app for iOS & Android connecting users with local restaurants. It includes real-time order tracking on map, restaurant discovery with filters, smart recommendations, live order status, multi-address management, and an integrated loyalty rewards program.",
    responsibility: [
      "iOS & Android Development",
      "UI/UX Design",
      "Real-time GPS Tracking",
      "Payment Gateway Integration",
    ],
    credit: "#",
  },
];

export const Advantages = [
  [
    {
      title: "Communicative",
      description:
        "We communicate our project ideas and progress to make it clear.",
      imageUrl: Communicative,
    },
    {
      title: "Management",
      description:
        "We manage our project properly to make our project done well.",
      imageUrl: Management,
    },
  ],
  [
    {
      title: "Collaborative​",
      description:
        "Our team are very collaborative to make our project done well.",
      imageUrl: Collaborative,
    },
    {
      title: "Favorite",
      description: "We've did so many project and all of our client love it.",
      imageUrl: Favorite,
    },
  ],
];
export const Testimonials = [
  {
    id: 1,
    name: "PlugOne",
    company: "Live EV charging platform",
    testimoni:
      "India's unified EV charging platform — maps, session tracking, and a mobility dashboard. This is a public live URL.",
    imageUrl: PlugOneImg,
    url: "https://plugone.in/",
    linkLabel: "Verify live site → plugone.in",
  },
  {
    id: 2,
    name: "Connect Dairy",
    company: "Live dairy & feed logistics",
    testimoni:
      "Live agri-logistics product for milk trucks, feed distribution, and operations dashboards. This is a public live URL.",
    imageUrl: ConnectDairyImg,
    url: "https://www.connectdairy.in/",
    linkLabel: "Verify live site → connectdairy.in",
  },
  {
    id: 3,
    name: "DailyConcepts",
    company: "Live ecommerce store",
    testimoni:
      "Live store with catalog, checkout, and admin POS-style order handling. This is a public URL — open it to verify the work.",
    imageUrl: Recruiting,
    url: "https://dailyconceptsindia.com",
    linkLabel: "Verify live site → dailyconceptsindia.com",
  },
  {
    id: 4,
    name: "Atharv Narayan",
    company: "Live dairy solutions website",
    testimoni:
      "Live dairy logistics and manpower site for Bhilwara and Jaipur — transportation, feed, tenders, and inquiry flows. This is a public live URL.",
    imageUrl: AtharvNarayanImg,
    url: "https://www.atharvnarayan.in/",
    linkLabel: "Verify live site → atharvnarayan.in",
  },
  {
    id: 5,
    name: "Meditative",
    company: "Live yoga website demo",
    testimoni:
      "Public yoga-platform demo we designed and developed. Open the live URL to verify the build — this is not a star rating.",
    imageUrl: Stream,
    url: "https://yoga-80f.pages.dev/",
    linkLabel: "Verify live site → yoga-80f.pages.dev",
  },
];

export const TeamMembers = [
  {
    name: "Amardeep",
    position: "CEO",
    imageUrl: CEO,
  },
  {
    name: "Hari",
    position: "HRD",
    imageUrl: HRD,
  },

  {
    name: "Manvender",
    position: "Project Manager",
    imageUrl: ProjectManager,
  },
  {
    name: "Rahul",
    position: "Front-end Developer",
    imageUrl: Frontend1,
  },
  {
    name: "Subhash",
    position: "Front-end Developer",
    imageUrl: Frontend2,
  },
  {
    name: "Anjali",
    position: "Back-end Developer",
    imageUrl: Backend1,
  },
  {
    name: "Ajay",
    position: "Back-end Developer",
    imageUrl: Backend2,
  },
  {
    name: "Ashutosh",
    position: "Mobile Developer",
    imageUrl: Mobile1,
  },
  {
    name: "Karan",
    position: "Mobile Developer",
    imageUrl: Mobile2,
  },

  {
    name: "Aradhana",
    position: "UI/UX Designer",
    imageUrl: UIUX1,
  },
];
