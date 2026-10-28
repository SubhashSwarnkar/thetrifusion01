import { NAP_LINE, TEAM } from "./_shared";

/**
 * /services/ui-ux-design
 * TODO OWNER: Figma / Dribbble / Behance case studies with before/after screens.
 * TODO OWNER: designer bios beyond the team-page name and role.
 */
export default {
  contentUpdatedAt: "2026-10-28",
  metaTitle: "UI/UX Design Agency in Jaipur | Figma Product Design",
  bannerTitle: "UI/UX Design Agency in Jaipur",
  metaDescription:
    "UX research, wireframes, Figma UI and design systems for Indian apps and websites — with developer-ready handoff. Fixed-price design projects.",
  keywords:
    "UI UX design agency in Jaipur, UI UX design company India, app UI design cost India, Figma design Jaipur, product design agency Jaipur",
  answerFirst: {
    id: "quick-answer",
    heading: "UI/UX design agency in Jaipur: the short answer",
    text:
      "TheTriFusion is a UI/UX design agency in Jaipur for product teams, not poster work. We research users, map flows, design web and app screens in Figma, and hand a component set to engineering — often the same team that will build. Fixed-price design projects start from ₹20,000.",
    facts: [
      { label: "Starting price", value: "From ₹20,000 (published Basic plan)" },
      { label: "Deliverable", value: "Figma UI, flows, and developer-ready handoff" },
      { label: "Also builds", value: "Same Jaipur team can ship the website or app" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "six-signs-ux",
      heading: "Six signs you need UX work",
      paragraphs: [
        "Support keeps answering the same “where is X?” question. Checkout or onboarding drops off a cliff. Every new screen looks like a different product. Developers invent UI in the sprint because Figma is a ZIP of artboards. You are adding an AI feature and the empty state is a spinner. You are about to rebuild the [website](/services/website-development) or [mobile app](/services/mobile-app-development) and want the flows decided first.",
      ],
    },
    {
      id: "ux-deliverables",
      heading: "Deliverables",
      paragraphs: [
        "Research notes, user flows, wireframes, high-fidelity Figma UI, a clickable prototype, a design system when the product will keep growing, and a developer handoff (components, spacing, states). Campaign visuals are [graphic design](/services/graphic-design). Logo and guidelines are [branding](/services/branding).",
      ],
      included: [
        "UX research and flows",
        "Wireframes",
        "High-fidelity Figma UI",
        "Prototype",
        "Design system (when scoped)",
        "Developer-ready handoff",
      ],
    },
    {
      id: "ux-packages",
      heading: "Fixed-price UI/UX packages",
      paragraphs: [
        "Published plans on [pricing](/pricing). Screen counts are starting points; a written scope lists the actual flows.",
      ],
      comparison: {
        heading: "Published design plans",
        rowHeader: "Plan",
        columns: ["Starting price", "What the plan lists"],
        rows: [
          { label: "Basic", cells: ["₹20,000", "Up to 5 screens, wireframes, basic prototype, 1 revision round"] },
          { label: "Standard", cells: ["₹40,000", "Up to 15 screens, broader prototype"] },
          { label: "Premium", cells: ["₹80,000", "Larger UI set / design system territory"] },
        ],
      },
    },
    {
      id: "ux-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named person on the [team page](/team): ${TEAM.design}. ${TEAM.frontend} implement when the same engagement includes build.`,
      ],
    },
  ],
  faqs: [
    {
      question: "How much does UI/UX design cost in India?",
      answer:
        "TheTriFusion published design plans start at ₹20,000, ₹40,000 and ₹80,000. The signed price follows the number of flows, not a per-pixel guess.",
    },
    {
      question: "What is the difference between UI and UX?",
      answer:
        "UX is the path (who is this for, what is the job, what happens if it fails). UI is the screens. We do both so developers are not inventing the path in the sprint.",
    },
    {
      question: "Do you design in Figma and hand off to developers?",
      answer:
        "Yes. Figma is the working file. Handoff includes components, states and spacing. The same Jaipur team can also build.",
    },
    {
      question: "How long does an app UI design take?",
      answer:
        "A focused flow set is often a few weeks. A design system for a growing product is phased.",
    },
    {
      question: "Do you do user research and usability testing?",
      answer:
        "Yes, when the scope says so. We do not invent a research panel we do not have.",
    },
    {
      question: "Can you redesign our existing app?",
      answer:
        "Yes. We audit the key flows, then redesign those first rather than boiling the ocean.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/website-development",
      title: "Website development",
      text: "When the UI has to become a live site.",
    },
    {
      href: "/services/mobile-app-development",
      title: "Mobile app development",
      text: "When the UI has to become iOS and Android.",
    },
    {
      href: "/services/branding",
      title: "Branding agency",
      text: "Logo, type and guidelines the UI should use.",
    },
    {
      href: "/services/ai-development",
      title: "UI/UX for AI products",
      text: "Empty states, review steps, and trust.",
    },
  ],
};
