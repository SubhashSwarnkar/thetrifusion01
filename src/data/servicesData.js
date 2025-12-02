// Services Data
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";

export const services = [
  {
    id: "web-development",
    title: "Web Development",
    slug: "web-development",
    description: "We create stunning, responsive, and high-performance websites that drive business growth. From simple landing pages to complex web applications, we deliver solutions that work.",
    shortDescription: "Custom websites and web applications built with modern technologies.",
    imageUrl: Web,
    icon: "🌐",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Cross-browser Compatible",
      "CMS Integration",
      "E-commerce Solutions",
      "API Integration",
      "Maintenance & Support"
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description: "We understand your business goals and requirements"
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description: "Create wireframes and design mockups for approval"
      },
      {
        step: 3,
        title: "Development",
        description: "Build your website using latest technologies"
      },
      {
        step: 4,
        title: "Testing & Launch",
        description: "Thorough testing and deployment to production"
      }
    ],
    pricing: {
      basic: 15000,
      standard: 35000,
      premium: 75000
    },
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "WordPress"]
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    slug: "mobile-development",
    description: "Native and cross-platform mobile applications that provide exceptional user experiences. We build iOS and Android apps that engage users and drive business results.",
    shortDescription: "iOS and Android mobile applications for your business.",
    imageUrl: Mobile,
    icon: "📱",
    features: [
      "iOS & Android Apps",
      "Cross-platform Development",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "Secure Authentication",
      "Real-time Updates",
      "App Maintenance"
    ],
    process: [
      {
        step: 1,
        title: "Requirements Analysis",
        description: "Define app features and target audience"
      },
      {
        step: 2,
        title: "UI/UX Design",
        description: "Design intuitive and engaging user interfaces"
      },
      {
        step: 3,
        title: "Development",
        description: "Build native or cross-platform mobile apps"
      },
      {
        step: 4,
        title: "Testing & Deployment",
        description: "Test on devices and publish to app stores"
      }
    ],
    pricing: {
      basic: 50000,
      standard: 100000,
      premium: 200000
    },
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "User-centered design solutions that create delightful experiences. We combine creativity with usability to design interfaces that users love and businesses benefit from.",
    shortDescription: "Beautiful and intuitive user interface designs.",
    imageUrl: UIUX,
    icon: "🎨",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Design Systems",
      "Usability Testing",
      "Responsive Design",
      "Design Handoff"
    ],
    process: [
      {
        step: 1,
        title: "Research & Analysis",
        description: "Understand users, competitors, and business goals"
      },
      {
        step: 2,
        title: "Wireframing",
        description: "Create low-fidelity layouts and structure"
      },
      {
        step: 3,
        title: "Visual Design",
        description: "Design high-fidelity mockups with branding"
      },
      {
        step: 4,
        title: "Prototyping & Testing",
        description: "Interactive prototypes and user testing"
      }
    ],
    pricing: {
      basic: 20000,
      standard: 40000,
      premium: 80000
    },
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    slug: "graphic-design",
    description: "Creative visual solutions that communicate your brand message effectively. From logos to marketing materials, we create designs that make your brand stand out.",
    shortDescription: "Creative visual designs for your brand and marketing.",
    imageUrl: UIUX,
    icon: "🖼️",
    features: [
      "Logo Design",
      "Brand Identity",
      "Print Design",
      "Social Media Graphics",
      "Marketing Materials",
      "Packaging Design",
      "Illustrations",
      "Brand Guidelines"
    ],
    process: [
      {
        step: 1,
        title: "Brief & Research",
        description: "Understand brand values and target audience"
      },
      {
        step: 2,
        title: "Concept Development",
        description: "Create multiple design concepts"
      },
      {
        step: 3,
        title: "Refinement",
        description: "Refine selected concept based on feedback"
      },
      {
        step: 4,
        title: "Final Delivery",
        description: "Deliver final designs in all required formats"
      }
    ],
    pricing: {
      basic: 10000,
      standard: 25000,
      premium: 50000
    },
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Canva Pro"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Data-driven digital marketing strategies that grow your online presence and drive conversions. We help you reach the right audience at the right time.",
    shortDescription: "Strategic digital marketing to grow your business online.",
    imageUrl: Web,
    icon: "📈",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Google Ads",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
      "Conversion Optimization",
      "Marketing Automation"
    ],
    process: [
      {
        step: 1,
        title: "Strategy Development",
        description: "Define goals, audience, and marketing channels"
      },
      {
        step: 2,
        title: "Content Creation",
        description: "Create engaging content for all platforms"
      },
      {
        step: 3,
        title: "Campaign Execution",
        description: "Launch and manage marketing campaigns"
      },
      {
        step: 4,
        title: "Analysis & Optimization",
        description: "Monitor performance and optimize strategies"
      }
    ],
    pricing: {
      basic: 15000,
      standard: 30000,
      premium: 60000
    },
    technologies: ["Google Analytics", "Facebook Ads", "HubSpot", "Mailchimp"]
  },
  {
    id: "branding",
    title: "Branding",
    slug: "branding",
    description: "Complete brand identity solutions that tell your story and connect with your audience. We create memorable brands that resonate with customers.",
    shortDescription: "Complete brand identity and positioning strategies.",
    imageUrl: Mobile,
    icon: "🏷️",
    features: [
      "Brand Strategy",
      "Logo Design",
      "Brand Guidelines",
      "Brand Voice & Messaging",
      "Visual Identity",
      "Brand Assets",
      "Brand Positioning",
      "Rebranding Services"
    ],
    process: [
      {
        step: 1,
        title: "Brand Discovery",
        description: "Research market, competitors, and brand values"
      },
      {
        step: 2,
        title: "Brand Strategy",
        description: "Define brand positioning and messaging"
      },
      {
        step: 3,
        title: "Visual Identity",
        description: "Create logo, colors, typography, and assets"
      },
      {
        step: 4,
        title: "Brand Guidelines",
        description: "Document brand standards and usage"
      }
    ],
    pricing: {
      basic: 30000,
      standard: 60000,
      premium: 120000
    },
    technologies: ["Adobe Creative Suite", "Figma", "Brand Guidelines"]
  },
  {
    id: "rpa",
    title: "RPA",
    slug: "rpa",
    description: "Robotic Process Automation solutions that automate repetitive tasks and streamline business processes. Save time and reduce errors with intelligent automation.",
    shortDescription: "Automate repetitive tasks and streamline workflows.",
    imageUrl: UIUX,
    icon: "🤖",
    features: [
      "Process Automation",
      "Workflow Optimization",
      "Data Extraction",
      "API Integration",
      "Error Reduction",
      "Cost Savings",
      "Scalable Solutions",
      "Maintenance & Support"
    ],
    process: [
      {
        step: 1,
        title: "Process Analysis",
        description: "Identify automation opportunities"
      },
      {
        step: 2,
        title: "Solution Design",
        description: "Design automation workflows"
      },
      {
        step: 3,
        title: "Development",
        description: "Build and configure RPA bots"
      },
      {
        step: 4,
        title: "Testing & Deployment",
        description: "Test automation and deploy to production"
      }
    ],
    pricing: {
      basic: 50000,
      standard: 100000,
      premium: 200000
    },
    technologies: ["UiPath", "Automation Anywhere", "Blue Prism", "Python"]
  }
];

export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};

