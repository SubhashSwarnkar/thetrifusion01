import { NAP_LINE, TEAM } from "./_shared";

/**
 * /services/on-demand
 * URL unchanged. Keywords retargeted to "hire dedicated developers".
 * TODO OWNER: monthly rates by role (the published ₹50,000 is a project starting price).
 * TODO OWNER: developer profiles (anonymised OK).
 */
export default {
  contentUpdatedAt: "2026-11-09",
  metaTitle: "Hire Dedicated Developers in India | React, Node & Mobile from Jaipur",
  bannerTitle: "Hire Dedicated Developers in India",
  metaDescription:
    "Hire React, Next.js, Node and mobile developers from Jaipur — part-time or full-time, named lead, IST/UK overlap. Project work from ₹50,000; monthly rates scoped.",
  keywords:
    "hire dedicated developers India, hire React developers India, staff augmentation company Jaipur, hire Node developers India, dedicated development team Jaipur, hire developers Jaipur",
  industries: [],
  answerFirst: {
    id: "quick-answer",
    heading: "Hire dedicated developers in India: the short answer",
    text:
      "TheTriFusion lets you hire dedicated React, Next.js, Node and mobile developers from Jaipur, Rajasthan — part-time or full-time, with a named lead, NDA/IP in the contract, and IST overlap that also covers morning UK hours. The published starting price on this site is ₹50,000 for a scoped engagement. Monthly role rates are written after we know the stack and the hours. This URL stays /services/on-demand.",
    facts: [
      { label: "Starting price", value: "From ₹50,000 (published Basic plan)" },
      { label: "Roles", value: "React, Next.js, Node, React Native, Flutter, DevOps" },
      { label: "Time zone", value: "IST, with morning UK overlap" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "seat-vs-project",
      heading: "Dedicated seat vs scoped project",
      paragraphs: [
        "Hire on this page when you need a named person inside your standup, backlog, or PR review loop. Choose [custom software](/services/software-development) or [mobile app development](/services/mobile-app-development) when you want a written first-release cut, Friday demos, and a fixed-scope MVP instead of a standing seat. [DevOps](/services/devops) remains a separate capability when the ask is pipelines and cloud, not a full-time engineer on your board.",
      ],
    },
    {
      id: "roles-you-can-hire",
      heading: "Roles you can hire",
      paragraphs: [
        "React and Next.js front-end, Node.js back-end, React Native or Flutter, and DevOps capacity. Product-shaped work with a written MVP still belongs on [software development](/services/software-development) or [mobile app development](/services/mobile-app-development).",
      ],
    },
    {
      id: "hire-rates",
      heading: "How we price dedicated developers",
      paragraphs: [
        "Published project plans on [pricing](/pricing): ₹50,000 / ₹1,50,000 / ₹3,00,000. Those are engagement starting points, not a public monthly rate card. We will not invent a public monthly band. Ask for a written monthly or part-time rate for the role and hours you need.",
      ],
      comparison: {
        heading: "Engagement models",
        rowHeader: "Model",
        columns: ["When it fits", "How it is billed"],
        rows: [
          { label: "Hourly / part-time", cells: ["A backlog that moves a few days a week", "Written hours, named person"] },
          { label: "Full-time dedicated", cells: ["You need one person in your standup", "Monthly, after a trial"] },
          { label: "Scoped project", cells: ["A first release with a definition of done", "The published ₹50,000+ plans"] },
        ],
      },
    },
    {
      id: "how-hiring-works",
      heading: "How hiring works",
      paragraphs: [
        "Brief → we propose a named person → you interview → a short trial in the contract → onboarding to your repo → replacement clause if the fit is wrong. IP and NDA sit in the same paper. Code is yours.",
      ],
    },
    {
      id: "on-demand-who-leads",
      heading: "Who you meet",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.pm}; ${TEAM.frontend}; ${TEAM.backend}; ${TEAM.mobile}. Individual CVs are not published here.`,
      ],
    },
  ],
  faqs: [
    {
      question: "How much does it cost to hire a dedicated developer in India?",
      answer:
        "TheTriFusion published engagement plans start at ₹50,000, ₹1,50,000 and ₹3,00,000. Monthly role rates are quoted in writing for the stack and hours you need. We do not invent a public rate card.",
    },
    {
      question: "Can I interview the developer first?",
      answer:
        "Yes. You meet the named person before the trial starts.",
    },
    {
      question: "Is there a trial period?",
      answer:
        "Yes. The contract names a short trial so a bad fit does not become a quarter.",
    },
    {
      question: "What if the developer isn't a fit — do you replace them?",
      answer:
        "Yes. Replacement is in the contract. We do not leave you with a silent Slack handle.",
    },
    {
      question: "Who owns the code and IP?",
      answer:
        "You do, on completion and payment, same as our project work.",
    },
    {
      question: "What time-zone overlap do you offer?",
      answer:
        "The office is IST (Mon–Sat 10:00–19:00). That overlaps UK mornings. US overlap is scoped if you need evening IST.",
    },
    {
      question: "Can I hire developers from your Jaipur studio for remote work?",
      answer:
        "Yes. The studio is in Patrakar Colony, Jaipur; day-to-day work is remote on your tools with video standups. Visiting the office is optional by appointment.",
    },
    {
      question: "Is this the same as hiring for a fixed software project?",
      answer:
        "No. This page is a named seat (staff-aug). A fixed MVP with a written definition of done belongs on software development or mobile app development.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/software-development",
      title: "Custom software development",
      text: "When you want a scoped product, not a seat.",
    },
    {
      href: "/services/mobile-app-development",
      title: "Mobile app development",
      text: "When the seat is a mobile build with a definition of done.",
    },
    {
      href: "/services/android-app-development",
      title: "Android app development",
      text: "Play Store-first product work instead of a standing Android seat.",
    },
    {
      href: "/pricing",
      title: "Published pricing",
      text: "Engagement starting plans from ₹50,000 — monthly rates quoted in writing.",
    },
  ],
};
