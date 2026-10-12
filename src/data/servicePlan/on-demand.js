import { NAP_LINE, TEAM } from "./_shared";

/**
 * /services/on-demand
 * URL unchanged. Keywords retargeted to "hire dedicated developers".
 * TODO OWNER: monthly rates by role (the published ₹50,000 is a project starting price).
 * TODO OWNER: developer profiles (anonymised OK).
 */
export default {
  contentUpdatedAt: "2026-10-12",
  metaTitle: "Hire Dedicated Developers in India | React, Node & Mobile from Jaipur",
  bannerTitle: "Hire Dedicated Developers in India",
  metaDescription:
    "Hire React, Next.js, Node and mobile developers from Jaipur — part-time or full-time, named lead, IST/UK overlap. Project work from ₹50,000; monthly rates scoped.",
  keywords:
    "hire dedicated developers India, hire React developers India, staff augmentation company Jaipur, hire Node developers India, dedicated development team Jaipur",
  answerFirst: {
    id: "quick-answer",
    heading: "Hire dedicated developers in India: the short answer",
    text:
      "TheTriFusion lets you hire dedicated React, Next.js, Node and mobile developers from Jaipur — part-time or full-time, with a named lead, NDA/IP in the contract, and IST overlap that also covers morning UK hours. The published starting price on this site is ₹50,000 for a scoped engagement. Monthly role rates are written after we know the stack and the hours. This URL stays /services/on-demand.",
    facts: [
      { label: "Starting price", value: "From ₹50,000 (published Basic plan)" },
      { label: "Roles", value: "React, Next.js, Node, React Native, Flutter, DevOps" },
      { label: "Time zone", value: "IST, with morning UK overlap" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
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
        "Published project plans on [pricing](/pricing): ₹50,000 / ₹1,50,000 / ₹3,00,000. Those are engagement starting points, not a public monthly rate card. Competitors publish monthly bands; we will not invent ours. Ask for a written monthly or part-time rate for the role you need. Cost notes: [hire dedicated developers cost guide](/blog/hire-dedicated-developers-cost-guide-uk-australia).",
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
      href: "/blog/hire-dedicated-developers-cost-guide-uk-australia",
      title: "Hire dedicated developers cost guide",
      text: "How UK and Australian teams should read an India rate.",
    },
  ],
};
