/* eslint-disable import/extensions */

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

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// Testimonials
import Sasha from "../assets/images/Testimonials/Sasha.jpg";
import Reiner from "../assets/images/Testimonials/Reiner.jpg";
import Kruger from "../assets/images/Testimonials/Kruger.jpg";

// TeamMembers
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
    title: "Web Development",
    imageUrl: Web,
    animation: "left",
  },
  {
    title: "Mobile Development",
    imageUrl: Mobile,
    animation: "up",
  },
  {
    title: "UI/UX Design",
    imageUrl: UIUX,
    animation: "right",
  },
  {
    title: "Robotic Process Automation",
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
    id: "asd1293uasdads1",
    title: "DailyConceptsIndia",
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
    id: "asd1293uhjkhkjh2",
    title: "Meditative",
    imageUrl: Stream,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://yoga-80f.pages.dev/",
  },
  {
    id: "asd1293uvbvcbbd3",
    title: "Pet Sitting",
    imageUrl: Freelance,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://petcare-c3n.pages.dev/services",
  },
  {
    id: "asd1293ufgdfgs4",
    title: "Podcast.",
    imageUrl: Aura,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://podcast-ctw.pages.dev/",
  },
  {
    id: "asd1293ulskmnb5",
    title: "Resto",
    imageUrl: Surtido,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://resto-4tn.pages.dev/",
  },
  {
    id: "asd1293ulkmnbj6",
    title: "Alime",
    imageUrl: Freelance,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://alimephotographer.pages.dev/",
  },
  {
    id: "asd1293ulkmnbj6",
    title: "AppLab",
    imageUrl: ManagementApp,
    type: "Mobile Apps",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://app-lab.pages.dev/",
  },
  {
    id: "asd1293ulkmnbj6",
    title: "Dentista",
    imageUrl: Surtido,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dentista-dental-clinic.vercel.app/",
  },
  {
    id: "asd1293ulkmnbj6",
    title: "Travelix",
    imageUrl: Recruiting,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://travelix-neon.vercel.app/",
  },
  {
    id: "asd1293ulkmnbj6",
    title: "DentaCare",
    imageUrl: Freelance,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dente-ua67.vercel.app/",
  },
  {
    id: "asd1293ulkmnbj6",
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
    name: "Sasha Rose",
    company: "Owner, Surveyor Corps",
    testimoni:
      "Thanks for Racxstudio, you guys are the best! Keep up the great work!",
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: "Kruger Khan",
    company: "Director, Shultan Oil",
    testimoni:
      "I just wanted to let you know that it’s been great working with Racxstudio.",
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: "Reiner John",
    company: "CEO, Marley CO",
    testimoni: "Racxstudio is so great. Thank you so much for a job well done.",
    imageUrl: Reiner,
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
