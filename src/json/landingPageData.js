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
