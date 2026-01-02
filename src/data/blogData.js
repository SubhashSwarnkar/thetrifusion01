import React from 'react';

export const blogCategories = [
  { id: "all", name: "All Topics", icon: "🌐" },
  { id: "ai", name: "Artificial Intelligence", icon: "🤖" },
  { id: "webdev", name: "Web Development", icon: "💻" },
  { id: "cybersecurity", name: "Cybersecurity", icon: "🔒" },
  { id: "mobile", name: "Mobile Apps", icon: "📱" },
  { id: "blockchain", name: "Blockchain & Web3", icon: "🔗" },
  { id: "cloud", name: "Cloud Computing", icon: "☁️" },
];

export const blogPosts = [
  {
    id: 1,
    slug: "generative-ai-revolution",
    title: "The Generative AI Revolution: Reshaping Creativity",
    excerpt: "Explore how tools like ChatGPT and Midjourney are transforming industries from art to coding, and what the future holds for generative models.",
    content: `
      <h2>The Dawn of Generative AI</h2>
      <p>Generative Artificial Intelligence (AI) has emerged as one of the most transformative technologies of the decade. Unlike traditional AI, which typically analyzes data to make predictions, generative AI creates new content—ranging from realistic images and complex code to human-like text and musical compositions.</p>
      
      <h3>Transforming Creative Industries</h3>
      <p>In the realm of digital art, tools like Midjourney and DALL-E have democratized creation, allowing users to generate stunning visuals from simple text prompts. This shift raises profound questions about copyright, originality, and the role of human artists in a machine-augmented world.</p>
      
      <h3>Coding and Development</h3>
      <p>For developers, AI assistants like GitHub Copilot are accelerating workflows by suggesting code snippets and debugging in real-time. This symbiosis between human logic and machine speed is defining the next era of software engineering.</p>
      
      <h3>The Future Landscape</h3>
      <p>As these models become more sophisticated, we can expect them to become integral to every digital tool we use, blurring the line between tool and collaborator.</p>
      <br/>
      <p>This is just the beginning. The integration of generative AI into daily workflows is becoming seamless, driving efficiency and sparking innovation across sectors previously untouched by advanced automation.</p>
    `,
    category: "ai",
    image: "/assets/images/blog/ai-revolution.jpg",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    date: "2024-05-15",
    readTime: "8 min read",
    author: "Alex Rivera",
    featured: true,
  },
  {
    id: 2,
    slug: "web3-decentralized-future",
    title: "Web3 and the Promise of a Decentralized Internet",
    excerpt: "Understanding the shift from Web2 to Web3: How blockchain, smart contracts, and DAOs are building a user-owned internet ecosystem.",
    content: `
      <h2>Beyond the Hype</h2>
      <p>Web3 represents a paradigm shift from the centralized platforms of Web2 (like Facebook and Google) to a decentralized internet built on blockchain technology. Ideally, it gives users control over their data, identity, and digital assets.</p>
      <h3>Smart Contracts</h3>
      <p>At the heart of Web3 are smart contracts—self-executing contracts with the terms of the agreement directly written into code. They enable trustless transactions and automated workflows without intermediaries.</p>
      <h3>DAOs: A New Governance Model</h3>
      <p>Decentralized Autonomous Organizations (DAOs) are internet-native organizations owned and managed by their members. They offer a transparent and democratic way to collaborate and manage resources globally.</p>
    `,
    category: "blockchain",
    image: "/assets/images/blog/web3.jpg",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    date: "2024-05-12",
    readTime: "6 min read",
    author: "Sarah Chen",
    featured: false,
  },
  {
    id: 3,
    slug: "quantum-computing-leap",
    title: "Quantum Computing: The Next Great Leap",
    excerpt: "Quantum computers solve problems that are impossible for classical machines. Here is why investigating them now matters.",
    content: `
      <h2>Computing at the Atomic Scale</h2>
      <p>Quantum computing harnesses the laws of quantum mechanics to process information in ways that classical computers cannot. While classical bits are either 0 or 1, qubits can exist in a superposition of both states simultaneously.</p>
      <h3>Breaking Encryption</h3>
      <p>One of the most discussed applications is cryptography. Quantum computers could potentially break current encryption standards, necessitating the development of post-quantum cryptography.</p>
    `,
    category: "all", // General tech
    image: "/assets/images/blog/quantum.jpg",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    date: "2024-05-10",
    readTime: "7 min read",
    author: "Dr. Arinze Okafor",
    featured: true,
  },
  {
    id: 4,
    slug: "cybersecurity-zero-trust",
    title: "Zero Trust Architecture: The New Standard",
    excerpt: "Why 'never trust, always verify' is becoming the mantra for modern cybersecurity in an era of sophisticated remote attacks.",
    content: `
      <h2>The Death of the Perimeter</h2>
      <p>Traditional security models relied on a castle-and-moat approach. Zero Trust assumes that threats exist both inside and outside the network. No user or device is trusted by default.</p>
      <h3>Continuous Verification</h3>
      <p>Zero Trust requires continuous authentication and authorization of every access request, regardless of where it originates. This minimizes the blast radius of any potential breach.</p>
    `,
    category: "cybersecurity",
    image: "/assets/images/blog/security.jpg",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    date: "2024-05-08",
    readTime: "5 min read",
    author: "James Wilson",
    featured: false,
  },
  {
    id: 5,
    slug: "rise-of-edge-computing",
    title: "Edge Computing: Processing at the Source",
    excerpt: "Moving computation closer to data sources to reduce latency and bandwidth use in IoT and real-time applications.",
    content: `
      <h2>Speed and Efficiency</h2>
      <p>Edge computing brings enterprise applications closer to data sources such as IoT devices or local edge servers. This proximity creates strong business benefits: faster insights, improved response times, and better bandwidth availability.</p>
    `,
    category: "cloud",
    image: "/assets/images/blog/edge.jpg",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800",
    date: "2024-05-05",
    readTime: "6 min read",
    author: "Linda Martinez",
    featured: false,
  },
  {
    id: 6,
    slug: "green-tech-sustainable-coding",
    title: "Green Tech: Sustainable Software Engineering",
    excerpt: "How code efficiency contributes to carbon footprint reduction and the rise of eco-friendly cloud infrastructure.",
    content: `
      <h2>The Carbon Cost of Code</h2>
      <p>Every line of code consumes energy when executed. Sustainable software engineering focuses on building applications that are energy-efficient, using optimized algorithms and green hosting providers.</p>
    `,
    category: "webdev",
    image: "/assets/images/blog/green-tech.jpg",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    date: "2024-05-03",
    readTime: "4 min read",
    author: "Emma Green",
    featured: false,
  },
  {
    id: 7,
    slug: "5g-6g-connectivity",
    title: "Beyond 5G: Preparing for the 6G Era",
    excerpt: "What to expect from the next generation of mobile connectivity: holographic calls, tactile internet, and ultra-low latency.",
    content: `
      <h2>Faster than Fast</h2>
      <p>While 5G is still rolling out globally, research into 6G is already underway. It promises speeds 100 times faster than 5G, enabling immersive technologies that blur the physical and digital worlds.</p>
    `,
    category: "mobile",
    image: "/assets/images/blog/5g.jpg",
    imageUrl: "https://images.unsplash.com/photo-1614064641938-3bcee52636c4?auto=format&fit=crop&q=80&w=800",
    date: "2024-05-01",
    readTime: "5 min read",
    author: "Raj Patel",
    featured: true,
  },
  {
    id: 8,
    slug: "metaverse-business-impact",
    title: "Is the Metaverse Still Relevant for Business?",
    excerpt: "Evaluating the practical applications of VR/AR in enterprise training, virtual showrooms, and remote collaboration.",
    content: `
      <h2>Virtual Reality Checks</h2>
      <p>The hype cycle has cooled, but the practical utility of the metaverse is becoming clearer. Industries are finding real value in digital twins, immersive training simulations, and virtual collaboration spaces.</p>
    `,
    category: "ai",
    image: "/assets/images/blog/metaverse.jpg",
    imageUrl: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80&w=800",
    date: "2024-04-28",
    readTime: "7 min read",
    author: "Kevin O'Connor",
    featured: false,
  },
  {
    id: 9,
    slug: "react-server-components",
    title: "Mastering React Server Components",
    excerpt: "A deep dive into the architecture shift in React 18+ and how RSCs optimize performance by reducing bundle size.",
    content: `
      <h2>Frontend Evolution</h2>
      <p>React Server Components allow developers to render components exclusively on the server, reducing the amount of JavaScript sent to the client. This leads to faster initial page loads and improved user experience.</p>
    `,
    category: "webdev",
    image: "/assets/images/blog/react.jpg",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    date: "2024-04-25",
    readTime: "10 min read",
    author: "Tech Tutor",
    featured: false,
  },
  {
    id: 10,
    slug: "rust-programming-rise",
    title: "Why Rust is Conquering the Infrastructure World",
    excerpt: "Memory safety without garbage collection: Why companies like Microsoft and Google are rewriting core systems in Rust.",
    content: `
      <h2>Safety First</h2>
      <p>Rust prevents entire classes of memory-related bugs that have plagued C and C++ for decades. Its ownership model ensures memory safety at compile time, making it ideal for critical infrastructure.</p>
    `,
    category: "webdev",
    image: "/assets/images/blog/rust.jpg",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
    date: "2024-04-22",
    readTime: "8 min read",
    author: "Code Master",
    featured: false,
  },
  {
    id: 11,
    slug: "future-of-devops",
    title: "The Future of DevOps: Platform Engineering",
    excerpt: "Shift from 'you build it, you run it' to internal developer platforms (IDPs) that reduce cognitive load for streamlined delivery.",
    content: `
      <h2>Standardizing Success</h2>
      <p>Platform engineering creates a standardized set of tools and workflows (golden paths) that enable developers to self-serve infrastructure requirements without needing deep operations expertise.</p>
    `,
    category: "cloud",
    image: "/assets/images/blog/devops.jpg",
    imageUrl: "https://images.unsplash.com/photo-1667372393119-c81c0cda1a29?auto=format&fit=crop&q=80&w=800",
    date: "2024-04-20",
    readTime: "6 min read",
    author: "DevOps Daily",
    featured: false,
  },
  {
    id: 12,
    slug: "fintech-embedded-finance",
    title: "Embedded Finance: Banking Everywhere",
    excerpt: "How non-financial companies are integrating banking services directly into their user interfaces, facilitating seamless payments.",
    content: `
      <h2>Invisible Banking</h2>
      <p>Embedded finance allows any company to act like a fintech company. From ride-sharing apps offering wallets to e-commerce sites offering loans, financial services are becoming a native part of the customer journey.</p>
    `,
    category: "blockchain",
    image: "/assets/images/blog/fintech.jpg",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    date: "2024-04-18",
    readTime: "5 min read",
    author: "Finance Focus",
    featured: false,
  },
  {
    id: 13,
    slug: "ethical-ai-challenges",
    title: "Navigating the Challenges of Ethical AI",
    excerpt: "Addressing bias, transparency, and accountability in machine learning models as they make high-stakes decisions.",
    content: `
      <h2>The Black Box Problem</h2>
      <p>As AI systems become more complex, explaining their decisions becomes harder. Ethical AI demands transparency and fairness, ensuring that algorithms do not perpetuate historical biases.</p>
    `,
    category: "ai",
    image: "/assets/images/blog/ethical-ai.jpg",
    imageUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
    date: "2024-04-15",
    readTime: "9 min read",
    author: "Ethics Watch",
    featured: false,
  },
  {
    id: 14,
    slug: "flutter-vs-react-native-2024",
    title: "Flutter vs React Native in 2024",
    excerpt: "A comprehensive comparison of the two leading cross-platform frameworks. Which one should you choose for your next app?",
    content: `
      <h2>The Cross-Platform War</h2>
      <p>Flutter continues to gain traction with its high-performance rendering engine, Skia. React Native counters with a massive ecosystem and closer alignment with web development paradigms. The choice often depends on team expertise and project requirements.</p>
    `,
    category: "mobile",
    image: "/assets/images/blog/mobile-dev.jpg",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    date: "2024-04-12",
    readTime: "7 min read",
    author: "App Architect",
    featured: false,
  },
  {
    id: 15,
    slug: "cloud-native-security",
    title: "Securing Cloud-Native Applications",
    excerpt: "Best practices for securing containers, Kubernetes clusters, and serverless functions in a modern CI/CD pipeline.",
    content: `
      <h2>Shift Left Security</h2>
      <p>Security must be integrated early in the development lifecycle. This involves scanning container images for vulnerabilities, managing secrets effectively, and enforcing least-privilege policies in orchestration environments.</p>
    `,
    category: "cybersecurity",
    image: "/assets/images/blog/cloud-sec.jpg",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    date: "2024-04-10",
    readTime: "6 min read",
    author: "SecOps Pro",
    featured: false,
  },
  {
    id: 16,
    slug: "low-code-no-code",
    title: "The Low-Code/No-Code Explosion",
    excerpt: "Empowering citizen developers to build business apps rapidly. Is this the end of traditional custom software development?",
    content: `
      <h2>Democratizing Development</h2>
      <p>Low-code platforms allow business users to solve their own problems without waiting for IT. While they won't replace professional developers for complex systems, they are handling a growing share of internal business applications.</p>
    `,
    category: "webdev",
    image: "/assets/images/blog/nocode.jpg",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    date: "2024-04-08",
    readTime: "5 min read",
    author: "Rapid Dev",
    featured: false,
  },
  {
    id: 17,
    slug: "biotech-crispr-software",
    title: "Software's Role in the CRISPR Revolution",
    excerpt: "How data science and machine learning are guiding gene editing tech to cure diseases and improve agriculture.",
    content: `
      <h2>Coding Life</h2>
      <p>Bioinformatics is the bridge between biology and computer science. Advanced algorithms predict the off-target effects of gene editing, ensuring safety and efficacy in new therapies.</p>
    `,
    category: "ai",
    image: "/assets/images/blog/biotech.jpg",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    date: "2024-04-05",
    readTime: "8 min read",
    author: "Bio Bytes",
    featured: false,
  },
  {
    id: 18,
    slug: "autonomous-vehicles-status",
    title: "The Road to Full Autonomy",
    excerpt: "An update on self-driving car technology: Lidar advances, regulatory hurdles, and realistic timelines for Level 5 autonomy.",
    content: `
      <h2>Driving Forward</h2>
      <p>While fully autonomous vehicles are taking longer to arrive than predicted, significant progress is being made in assisted driving (ADAS) and robo-taxi services in controlled environments.</p>
    `,
    category: "ai",
    image: "/assets/images/blog/car.jpg",
    imageUrl: "https://images.unsplash.com/photo-1494905998402-395d579af979?auto=format&fit=crop&q=80&w=800",
    date: "2024-04-02",
    readTime: "6 min read",
    author: "Auto Tech",
    featured: false,
  },
  {
    id: 19,
    slug: "smart-cities-iot",
    title: "Smart Cities: Connected Urban Living",
    excerpt: "Using IoT sensors to manage traffic, energy consumption, and waste management for more sustainable urban environments.",
    content: `
      <h2>The Connected Metropolis</h2>
      <p>Smart cities leverage data to improve the quality of life for citizens. From intelligent traffic lights that reduce congestion to smart grids that optimize energy use, IoT is the nervous system of modern infrastructure.</p>
    `,
    category: "mobile",
    image: "/assets/images/blog/smart-city.jpg",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
    date: "2024-03-30",
    readTime: "7 min read",
    author: "Urban Planner",
    featured: false,
  },
  {
    id: 20,
    slug: "space-tech-commercial",
    title: "The Commercial Space Age",
    excerpt: "With SpaceX and others leading the charge, how reduced launch costs are enabling a new economy in low Earth orbit.",
    content: `
      <h2>Orbit for Everyone</h2>
      <p>Reusable rockets have slashed the cost of putting payloads into space. This has unleashed a wave of innovation, from global satellite internet constellations to plans for private space stations and manufacturing.</p>
    `,
    category: "all",
    image: "/assets/images/blog/space.jpg",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
    date: "2024-03-28",
    readTime: "9 min read",
    author: "Astro Future",
    featured: true,
  }
];

export const getBlogsByCategory = (category) => {
  if (category === "all") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
};

export const searchBlogs = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery)
  );
};

export const getBlogBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};
