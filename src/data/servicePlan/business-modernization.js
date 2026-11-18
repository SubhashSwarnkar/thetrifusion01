import { NAP_LINE, TEAM } from "./_shared";

/**
 * /services/business-modernization
 * Indexed-pages pass 2026-11-18 (§3.10).
 */
export default {
  contentUpdatedAt: "2026-11-18",
  replaceFaqs: true,
  replaceRelatedLinks: true,
  metaTitle: "Legacy Software Modernization India | Excel to Web App",
  bannerTitle: "Business & Legacy Software Modernization in Jaipur, India",
  metaDescription:
    "Replace Excel, WhatsApp workflows and old desktop software with phased web apps, CRM and mobile, without stopping operations. Plans from ₹1,50,000.",
  keywords:
    "legacy application modernization services India, replace Excel with software for business, digital transformation company Jaipur, Excel to software Jaipur",
  // Suppress generic Cloud Computing / Microservices / Industries boilerplate.
  technologies: [],
  industries: [],
  methodologies: [],
  whyHeading: "Why SMEs choose TheTriFusion to modernise",
  breadcrumbName: "Legacy Software & Business Modernization",
  schemaServiceName: "Legacy Software & Business Modernization",
  serviceType: "Legacy Software & Business Modernization",
  primaryCtaLabel: "Plan my move off Excel",
  primaryCtaHref: "/contact?service=business-modernization",
  whatsappMessage:
    "Hi TheTriFusion, we want to replace Excel/old software for: ",
  leadProjectType: "Business modernization",
  formHeading: "Which sheet or tool should go first?",
  midCtaText:
    "Tell us the one spreadsheet everyone is afraid to break. We will suggest the first phase.",
  answerFirst: {
    id: "quick-answer",
    heading: "How do you replace Excel and old software without stopping work?",
    text:
      "TheTriFusion helps Indian SMEs replace Excel sheets, WhatsApp-group workflows and old desktop software with web apps, CRM modules and mobile apps, one workflow at a time. Operations keep running during the switch, with no big-bang cutover. Published plans start at ₹1,50,000, and a first module usually goes live in 6–12 weeks.",
    facts: [
      { label: "Starting price", value: "From ₹1,50,000 (published Basic plan)" },
      { label: "Method", value: "Phased; operations stay up" },
      { label: "Typical first slice", value: "The spreadsheet everyone is afraid to break" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "six-signs-legacy",
      heading: "Six signs you have outgrown Excel or the legacy tool",
      paragraphs: [
        "Two people cannot edit the file at once. WhatsApp is the workflow. Month-end is a copy-paste ritual. The desktop app only runs on one Windows 7 box. Nobody knows which sheet is true. A new GST or Tally rule means rewriting macros. Those are reasons to modernise.",
      ],
    },
    {
      id: "what-we-move-you-to",
      heading: "What we move you to",
      paragraphs: [
        "We replace the sheet or desktop tool with the smallest modern surface that still fits how your team works — not a 200-user ERP dumped on a 12-person company.",
      ],
      included: [
        "Web apps (React / Next.js)",
        "CRM and approval workflows",
        "Mobile apps for field teams (React Native / Flutter)",
        "Reports and dashboards",
        "Integrations with Tally, WhatsApp and your bank exports",
        "Data migration from Excel, Access, FoxPro or VB apps",
      ],
    },
    {
      id: "connect-dairy-proof",
      heading: "Example: from spreadsheets to one operations console",
      paragraphs: [
        "Connect Dairy's dairy and cattle-feed logistics team managed milk trucks, feed trucks, approvals and P&L variance across spreadsheets and chat threads. TheTriFusion built one web and mobile platform for fleet tracking, role-based dashboards and variance analytics. [Read the Connect Dairy case study](/portfolio/connect-dairy-supply-chain).",
      ],
    },
    {
      id: "what-you-get",
      heading: "What you get",
      paragraphs: [
        "A practical handover, not a slide deck of buzzwords.",
      ],
      included: [
        "A map of your current sheets, tools and who uses them",
        "A phased roadmap: which workflow moves first and what stays in Excel for now",
        "Data migration with a test import you check",
        "Training for your team and a short user guide",
        "Source code and data on your own account",
      ],
    },
    {
      id: "six-rs",
      heading: "The 6 Rs, in plain language",
      paragraphs: [
        "Rehost (lift the old app). Replatform (same logic, better host). Refactor (clean the code). Rearchitect (new modules). Rebuild (new product). Replace (buy SaaS). We pick one per system after discovery — not all six as a poster.",
      ],
    },
    {
      id: "phased-roadmap",
      heading: "Phased roadmap",
      paragraphs: [
        "Inventory the real process → pick the first slice that can go live without stopping the rest → migrate data with a check, not a hope → run old and new in parallel until the new one is boring → cut over. Related: [CRM](/services/crm-erp-development) and [ERP software](/services/erp-software-development).",
      ],
    },
    {
      id: "modernization-cost",
      heading: "Modernization cost and timeline",
      paragraphs: [
        "Published plans on [pricing](/pricing): ₹1,50,000 / ₹3,50,000 / ₹7,00,000. The signed number follows the 6R choice and the data mess.",
      ],
      comparison: {
        heading: "Published modernization plans",
        rowHeader: "Plan",
        columns: ["Starting price", "Typical use"],
        rows: [
          { label: "Basic", cells: ["₹1,50,000", "First spreadsheet or desktop slice"] },
          { label: "Standard", cells: ["₹3,50,000", "Several modules, parallel run"] },
          { label: "Premium", cells: ["₹7,00,000", "Broader programme"] },
        ],
      },
    },
    {
      id: "modernization-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.pm}; ${TEAM.backend}; ${TEAM.frontend}.`,
      ],
    },
    {
      id: "india-city-pages",
      heading: "Spreadsheet-to-software for Indian SMEs",
      paragraphs: [
        "Phased web apps from Jaipur, from ₹1,50,000. Greenfield products belong on [custom software](/services/software-development).",
        "The first slice is almost always the spreadsheet everyone is afraid to break: dispatch, dealer rates, or month-end GST. We keep the old file running until the new module takes that job. Bots that sit on the old process without replacing it are [RPA](/services/rpa). A boxed CRM you already pay for is [Salesforce](/services/salesforce) when it fits.",
      ],
    },
  ],
  faqs: [
    {
      question: "How do I replace Excel with custom software?",
      answer:
        "Write down the real columns and the people who touch them. We ship the first slice as a web app, migrate that data, and keep Excel for the rest until the new slice is boring. Then the next sheet.",
    },
    {
      question: "What does legacy modernization cost in India?",
      answer:
        "TheTriFusion published plans start at ₹1,50,000, ₹3,50,000 and ₹7,00,000. Data cleanup is often the quiet cost.",
    },
    {
      question: "Can you migrate our old VB/FoxPro/Access software?",
      answer:
        "Often yes, as a rebuild or a wrap, after we see the data files. We do not promise a bit-for-bit clone of a 1998 form.",
    },
    {
      question: "Will our data be migrated safely?",
      answer:
        "We migrate with a mapped check, not a hope. You keep a copy of the old files. Parallel run until the numbers match.",
    },
    {
      question: "Can we modernize in phases without downtime?",
      answer:
        "Yes. We move one workflow at a time so operations keep running. Big-bang cutovers are how weekends get ruined.",
    },
    {
      question: "How do I know my business has outgrown Excel?",
      answer:
        "Common signs are several versions of the same sheet, staff waiting for one person to update it, formulas breaking, no record of who changed what, and managers asking on WhatsApp for numbers that should be on a dashboard.",
    },
    {
      question: "Can our team keep using Excel during the change?",
      answer:
        "Yes. We move one workflow at a time. The rest stays in Excel until its turn, and we can export data back to Excel so reports your team relies on keep working.",
    },
    {
      question: "Can you connect the new system to Tally?",
      answer:
        "Usually yes, through Tally's export/import or an integration, depending on your Tally version and set-up. We confirm the method during the scoping review.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/software-development",
      title: "custom software",
      text: "Greenfield products when there is no legacy to carry.",
    },
    {
      href: "/services/crm-erp-development",
      title: "custom CRM",
      text: "When the spreadsheet is actually a sales pipeline.",
    },
    {
      href: "/services/ai-development",
      title: "add AI document extraction after the move",
      text: "AI features after the sheets are replaced.",
    },
    {
      href: "/services/rpa",
      title: "RPA bots on top of the old process",
      text: "When a bot on the old process is the honest first step.",
    },
    {
      href: "/services/salesforce",
      title: "Salesforce customisation",
      text: "When a boxed CRM you already pay for still fits.",
    },
    {
      href: "/portfolio/connect-dairy-supply-chain",
      title: "Connect Dairy case study",
      text: "From spreadsheets and chat threads to one ops console.",
    },
    {
      href: "/solutions/custom-software-development-jaipur",
      title: "custom software in Jaipur",
      text: "Local studio flavour for greenfield builds.",
    },
  ],
};
