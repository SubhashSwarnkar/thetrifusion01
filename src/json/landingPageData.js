// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";

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
  {
    title: "Website Development",
    imageUrl: Web,
    animation: "left",
  },
  {
    title: "Mobile App Development",
    imageUrl: Mobile,
    animation: "up",
  },
  {
    title: "UI/UX Design",
    imageUrl: UIUX,
    animation: "right",
  },
  {
    title: "RPA",
    imageUrl: UIUX,
    animation: "left",
  },
  {
    title: "Digital Marketing",
    imageUrl: Web,
    animation: "up",
  },
  {
    title: "Branding",
    imageUrl: Mobile,
    animation: "right",
  },
];

export const Portfolios = [
  {
    id: "plugone-ev-charging-platform",
    title: "PlugOne",
    imageUrl: PlugOneImg,
    type: "Mobile Apps",
    featured: true,
    description:
      "PlugOne is a smart EV charging aggregator platform that connects EV owners to nearby charging stations in real-time. It features an interactive map, charging status tracking, smart mobility dashboard, and seamless session management across multiple charging networks.",
    responsibility: [
      "Mobile App Development",
      "UI/UX Design",
      "Backend Integration",
      "Maps & Real-time Tracking",
    ],
    credit: "#",
  },
  {
    id: "connect-dairy-supply-chain",
    title: "Connect Dairy",
    imageUrl: ConnectDairyImg,
    type: "Mobile Apps",
    featured: true,
    description:
      "Connect Dairy is a modern dairy supply chain management platform that digitizes milk procurement, farmer onboarding, and route optimization. It offers real-time collection tracking, farmer activity dashboards, and live procurement analytics for dairy businesses.",
    responsibility: [
      "Web & Mobile Development",
      "UI/UX Design",
      "Dashboard & Analytics",
      "Supply Chain Integration",
    ],
    credit: "#",
  },
  {
    id: "atharv-narayan-wellness-website",
    title: "Atharv Narayan",
    imageUrl: AtharvNarayanImg,
    type: "Website",
    featured: true,
    description:
      "Atharv Narayan is a premium spiritual and ayurvedic wellness website featuring traditional Ayurvedic rituals, guided meditation paths, herbal shop, and curated spiritual journeys. Designed with Sanskrit-inspired aesthetics, golden accents, and a deeply immersive UI.",
    responsibility: [
      "Web Development",
      "UI/UX Design",
      "E-commerce Integration",
      "Content Management",
    ],
    credit: "#",
  },
  {
    id: "dailyconcepts-ecommerce-pos",
    title: "DailyConcepts",
    imageUrl: Recruiting,
    type: "Mobile Apps",
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
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://yoga-80f.pages.dev/",
  },
  {
    id: "pet-sitting-services-website",
    title: "Pet Sitting",
    imageUrl: Freelance,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://petcare-c3n.pages.dev/services",
  },
  {
    id: "podcast-landing-page",
    title: "Podcast.",
    imageUrl: Aura,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://podcast-ctw.pages.dev/",
  },
  {
    id: "resto-restaurant-website",
    title: "Resto",
    imageUrl: Surtido,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://resto-4tn.pages.dev/",
  },
  {
    id: "alime-photography-website",
    title: "Alime",
    imageUrl: Freelance,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://alimephotographer.pages.dev/",
  },
  {
    id: "applab-mobile-app",
    title: "AppLab",
    imageUrl: ManagementApp,
    type: "Mobile Apps",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://app-lab.pages.dev/",
  },
  {
    id: "dentista-dental-clinic",
    title: "Dentista",
    imageUrl: Surtido,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dentista-dental-clinic.vercel.app/",
  },
  {
    id: "travelix-travel-booking-website",
    title: "Travelix",
    imageUrl: Recruiting,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://travelix-neon.vercel.app/",
  },
  {
    id: "dentacare-dental-clinic",
    title: "DentaCare",
    imageUrl: Freelance,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dente-ua67.vercel.app/",
  },
  {
    id: "macro-photography-website",
    title: "Macro",
    imageUrl: ManagementApp,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://photography-dwap.vercel.app/",
  },
  {
    id: "shopnova-ecommerce-platform",
    title: "ShopNova",
    imageUrl: ShopNovaImg,
    type: "Website",
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
    name: "Priya Sharma",
    company: "Founder, TechStart India, Mumbai",
    testimoni:
      "TheTriFusion transformed our business with their exceptional web development services. Our website traffic increased by 300% within 3 months. Highly professional team and outstanding results!",
    imageUrl: UIUX1,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    company: "CEO, Digital Solutions Pvt Ltd, Delhi",
    testimoni:
      "Working with TheTriFusion has been a game-changer for our company. They delivered our mobile app on time and within budget. Their attention to detail and technical expertise is remarkable.",
    imageUrl: CEO,
  },
  {
    id: 3,
    name: "Anjali Patel",
    company: "Director, E-commerce Hub, Bangalore",
    testimoni: 
      "TheTriFusion created a stunning e-commerce platform for us. The user experience is flawless, and sales have doubled since launch. Best investment we've made for our business!",
    imageUrl: HRD,
  },
  {
    id: 4,
    name: "Vikram Singh",
    company: "Owner, Fitness Zone, Pune",
    testimoni:
      "Our gym website designed by TheTriFusion is absolutely amazing! It's modern, responsive, and has helped us attract 200+ new members. Excellent service and support throughout the project.",
    imageUrl: Frontend1,
  },
  {
    id: 5,
    name: "Meera Reddy",
    company: "Principal, EduTech Academy, Hyderabad",
    testimoni:
      "TheTriFusion developed our educational platform with such precision and care. The learning management system they built has revolutionized how we deliver courses. Truly exceptional work!",
    imageUrl: Backend1,
  },
  {
    id: 6,
    name: "Amit Verma",
    company: "Managing Director, Restaurant Chain, Jaipur",
    testimoni:
      "TheTriFusion's digital marketing services have transformed our restaurant business. Online orders increased by 400%, and our brand visibility has never been better. Highly recommended!",
    imageUrl: ProjectManager,
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
