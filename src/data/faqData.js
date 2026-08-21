// FAQ Data
export const faqCategories = [
  {
    id: "general",
    name: "General Questions",
    icon: "❓"
  },
  {
    id: "pricing",
    name: "Pricing & Packages",
    icon: "💰"
  },
  {
    id: "services",
    name: "Services",
    icon: "🛠️"
  },
  {
    id: "technical",
    name: "Technical",
    icon: "💻"
  },
  {
    id: "payment",
    name: "Payment & Refunds",
    icon: "💳"
  },
  {
    id: "support",
    name: "Support & Maintenance",
    icon: "🎧"
  }
];

export const faqs = [
  // General Questions
  {
    id: 1,
    category: "general",
    question: "What is TheTriFusion?",
    answer: "TheTriFusion is the brand of Trifusion Infotech Private Limited, a registered software company based in Bhilwara, Rajasthan, India. We specialize in web development, mobile app development, UI/UX design, digital marketing, and other IT services."
  },
  {
    id: 2,
    category: "general",
    question: "Where is TheTriFusion located?",
    answer: "We are located in Bhilwara, Rajasthan, India. However, we work with clients globally and provide remote services worldwide."
  },
  {
    id: 3,
    category: "general",
    question: "How long has TheTriFusion been in business?",
    answer: "TheTriFusion has been serving clients with quality software solutions. We have a proven track record of successful projects and satisfied clients across various industries."
  },
  {
    id: 4,
    category: "general",
    question: "Do you work with international clients?",
    answer: "Yes, absolutely! We work with clients from all over the world. Our team is experienced in remote collaboration and can work across different time zones to meet your project requirements."
  },
  
  // Pricing & Packages
  {
    id: 5,
    category: "pricing",
    question: "What are your pricing packages?",
    answer: "We offer three main packages: Basic (₹15,000), Standard (₹30,000), and Premium (₹50,000). However, pricing varies based on project requirements. Use our Price Calculator tool to get an instant estimate, or contact us for a detailed quote tailored to your needs."
  },
  {
    id: 6,
    category: "pricing",
    question: "Do you offer custom pricing?",
    answer: "Yes, we provide custom pricing based on your specific project requirements. Every project is unique, and we create tailored solutions that fit your budget and needs. Contact us for a personalized quote."
  },
  {
    id: 7,
    category: "pricing",
    question: "Are there any hidden costs?",
    answer: "No, we believe in transparency. All costs are discussed upfront, and you'll receive a detailed breakdown before starting any project. We ensure there are no surprises or hidden fees."
  },
  {
    id: 8,
    category: "pricing",
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans for larger projects. Typically, we work with a milestone-based payment structure: 30% upfront, 40% at milestone completion, and 30% upon project delivery."
  },
  
  // Services
  {
    id: 9,
    category: "services",
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of services including Web Development, Mobile App Development (iOS & Android), UI/UX Design, Graphic Design, Digital Marketing, Branding, and RPA (Robotic Process Automation). Each service is tailored to meet your business needs."
  },
  {
    id: 10,
    category: "services",
    question: "Do you provide website maintenance?",
    answer: "Yes, we offer ongoing maintenance and support packages. This includes regular updates, security patches, bug fixes, content updates, and technical support. Contact us to discuss maintenance plans."
  },
  {
    id: 11,
    category: "services",
    question: "Can you redesign an existing website?",
    answer: "Absolutely! We specialize in website redesigns and can transform your existing website into a modern, responsive, and user-friendly platform. We'll analyze your current site and provide recommendations for improvement."
  },
  {
    id: 12,
    category: "services",
    question: "Do you provide SEO services?",
    answer: "Yes, we offer comprehensive SEO services as part of our Digital Marketing package. This includes keyword research, on-page optimization, technical SEO, content optimization, and link building strategies."
  },
  
  // Technical
  {
    id: 13,
    category: "technical",
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies including React, Node.js, Python, PHP, React Native, Flutter, and various databases. We choose the best technology stack based on your project requirements."
  },
  {
    id: 14,
    category: "technical",
    question: "Do you provide source code?",
    answer: "Yes, upon project completion and full payment, you receive all source code, documentation, and assets. You own the code and can use it as needed for your business."
  },
  {
    id: 15,
    category: "technical",
    question: "Will my website be mobile-responsive?",
    answer: "Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices. Mobile responsiveness is included in all our packages."
  },
  {
    id: 16,
    category: "technical",
    question: "Do you provide hosting services?",
    answer: "We can help you set up hosting and recommend reliable hosting providers. We also offer hosting management services as part of our maintenance packages."
  },
  
  // Payment & Refunds
  {
    id: 17,
    category: "payment",
    question: "What payment methods do you accept?",
    answer: "We accept payments via Razorpay (credit/debit cards, UPI, net banking, wallets), bank transfers, and other secure payment methods. All transactions are secure and encrypted."
  },
  {
    id: 18,
    category: "payment",
    question: "What is your refund policy?",
    answer: "Refunds are handled on a case-by-case basis. If you're not satisfied with our work, we'll work with you to resolve any issues."
  },
  {
    id: 19,
    category: "payment",
    question: "When do I need to make payment?",
    answer: "For custom projects, we typically require 30% upfront payment to begin work, 40% at milestone completion, and 30% upon final delivery."
  },
  
  // Support & Maintenance
  {
    id: 20,
    category: "support",
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including technical assistance, bug fixes, updates, and consultation. Support duration varies by package: Basic (1 month), Standard (3 months), Premium (6 months). Extended support plans are also available."
  },
  {
    id: 21,
    category: "support",
    question: "How quickly do you respond to support requests?",
    answer: "We aim to respond to all support requests within 24 hours during business days. For Premium package clients, we provide priority support with faster response times."
  },
  {
    id: 22,
    category: "support",
    question: "Do you provide training?",
    answer: "Yes, we provide training sessions to help you understand and manage your website or application. Training can be provided via video calls, screen sharing, or documentation, depending on your preference."
  }
];

// Helper function to get FAQs by category
export const getFaqsByCategory = (categoryId) => {
  if (categoryId === "all") return faqs;
  return faqs.filter(faq => faq.category === categoryId);
};

// Helper function to search FAQs
export const searchFaqs = (query) => {
  const lowerQuery = query.toLowerCase();
  return faqs.filter(faq => 
    faq.question.toLowerCase().includes(lowerQuery) ||
    faq.answer.toLowerCase().includes(lowerQuery)
  );
};

