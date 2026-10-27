import { LIVE, NAP_LINE, TEAM } from "./_shared";

/**
 * /services/software-development
 * TODO OWNER: project counts / years / team size beyond "about ten".
 * TODO OWNER: client testimonials with name + company (Google/Clutch-verifiable).
 * TODO OWNER: outcome metrics for Connect Dairy, Atharv Narayan, PlugOne.
 * TODO OWNER: named lead-engineer bios + personal LinkedIn URLs.
 */
export default {
  contentUpdatedAt: "2026-10-27",
  metaTitle: "Custom Software Development Company in Jaipur | TheTriFusion",
  bannerTitle: "Custom Software Development Company in Jaipur",
  metaDescription:
    "Custom software, CRM, portals and APIs for Indian SMEs from a Jaipur team. Written scope, weekly demos, you own the code. MVPs from ₹1,00,000.",
  keywords:
    "software development company in Jaipur, custom software development company India, custom software development cost India, custom software Jaipur, API development Jaipur",
  answerFirst: {
    id: "quick-answer",
    heading: "Custom software development in Jaipur: the short answer",
    text:
      "TheTriFusion (Trifusion Infotech Private Limited) is a custom software development company in Jaipur. We build portals, CRM/ERP modules, APIs, internal tools and SaaS MVPs for Indian SMEs. You get a written scope, weekly demos, and the code you own. Published starter MVPs start from ₹1,00,000; a focused module is often 6–12 weeks after discovery.",
    facts: [
      { label: "Starting price", value: "From ₹1,00,000 (published Basic plan)" },
      { label: "Typical timeline", value: "6–12 weeks for a focused MVP module" },
      { label: "You own", value: "Source code, after completion and payment" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "what-we-build",
      heading: "What we build",
      paragraphs: [
        "Custom software here means the operating system of the business — roles, data and workflows — not a marketing website. Typical Jaipur briefs are business portals, CRM and ERP modules, booking and inventory tools, dashboards, APIs, and a first SaaS slice. When field teams need a companion app, the same team can add [iOS](/services/ios-app-development) or [Android](/services/android-app-development).",
        "If the public site is the product, start with [website development](/services/website-development). If the job is replacing spreadsheets or an old desktop tool without stopping operations, see [business modernization](/services/business-modernization).",
      ],
      included: [
        "Portals and admin tools with roles",
        "CRM / ERP modules scoped to your process",
        "APIs and integrations (Tally, Zoho, payment gateways, existing ERPs)",
        "Internal tools that replace spreadsheet chaos",
        "SaaS MVPs with a written first-release cut",
      ],
    },
    {
      id: "custom-vs-saas-vs-nocode",
      heading: "Custom software vs SaaS vs no-code",
      paragraphs: [
        "Buy SaaS when a standard tool already fits. Use no-code for a lightweight internal form. Commission custom software when commissions, inventory rules, or approvals will not fit a boxed product without fighting it every week.",
      ],
      comparison: {
        heading: "Which path fits",
        rowHeader: " ",
        columns: ["SaaS (Zoho, HubSpot…)", "No-code / spreadsheets", "Custom software"],
        rows: [
          {
            label: "Best for",
            cells: [
              "Standard CRM, email, or accounting that already matches how you sell",
              "A small team tracking a simple list",
              "Workflows, commissions, inventory or APIs that off-the-shelf tools cannot hold",
            ],
          },
          {
            label: "Cost shape",
            cells: [
              "Monthly seats; cheap to start, expensive if you outgrow the plan",
              "Low software cost; high hidden labour",
              "Project fee from ₹1,00,000 on our [pricing page](/pricing); you own the code",
            ],
          },
          {
            label: "Lock-in",
            cells: [
              "Vendor holds the product; export quality varies",
              "The spreadsheet is the lock-in",
              "Contract transfers the agreed source to you",
            ],
          },
        ],
      },
    },
    {
      id: "software-cost-india",
      heading: "Custom software development cost in India",
      paragraphs: [
        "These are the starting prices already published on [pricing](/pricing). They are starting points. The signed number follows a short discovery call and a written scope. What moves cost: number of user roles, integrations, mobile apps, and how much of the old process must go live in the first release.",
      ],
      comparison: {
        heading: "Published software plans",
        rowHeader: "Scope",
        columns: ["Starting price", "What the plan lists"],
        rows: [
          {
            label: "MVP / Basic",
            cells: [
              "₹1,00,000",
              "Up to 3 modules, standard UI, basic documentation, 1 month support",
            ],
          },
          {
            label: "Mid / Standard",
            cells: [
              "₹2,50,000",
              "Up to 7 modules, API integration, database setup, 3 months support",
            ],
          },
          {
            label: "Complex / Premium",
            cells: [
              "₹5,00,000",
              "Unlimited modules, cloud deployment, security audit, 6 months support",
            ],
          },
        ],
      },
    },
    {
      id: "process-timeline",
      heading: "Process and timeline",
      paragraphs: [
        "Discovery → written scope → sprints with Friday demos → UAT on staging → handover of the repo, docs and environments. A focused MVP module is often 6–12 weeks. Broader platforms are phased so the first slice can run while the next modules are still being built. [DevOps](/services/devops) covers pipelines and cloud once the product needs them.",
      ],
    },
    {
      id: "shipped-projects",
      heading: "Shipped projects",
      paragraphs: [
        `${LIVE.dairy} is live fleet, role and P&L operations. ${LIVE.atharv} is a live dairy-services website for Jaipur and Bhilwara. ${LIVE.plugone} is a live EV charging product (driver app + CMS). We name only projects that are already public on this site. Outcome metrics stay unpublished until the owner supplies them.`,
        "See the [Connect Dairy case](/portfolio/connect-dairy-supply-chain) and the [PlugOne case](/portfolio/plugone-ev-charging-platform).",
      ],
    },
    {
      id: "who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Delivery is in-house in Jaipur. Named people on the [team page](/team): ${TEAM.ceo}; ${TEAM.pm}; ${TEAM.backend}; ${TEAM.frontend}. Bios, years of experience and personal LinkedIn URLs are not in this repo, so they are not invented here.`,
      ],
    },
  ],
  faqs: [
    {
      question: "How much does custom software development cost in India?",
      answer:
        "TheTriFusion's published plans start at ₹1,00,000 (Basic, up to 3 modules), ₹2,50,000 (Standard) and ₹5,00,000 (Premium). The signed price follows a written scope after discovery. See /pricing.",
    },
    {
      question: "How long does it take to build custom software?",
      answer:
        "A focused MVP module is often 6–12 weeks after discovery. Broader platforms are phased. You get a written timeline with the scope.",
    },
    {
      question: "Who owns the source code?",
      answer:
        "You do. Project agreements transfer the agreed deliverables and source ownership to you on completion and payment. Hosting and cloud accounts should be in your company's name.",
    },
    {
      question: "Do you sign an NDA and IP-assignment agreement?",
      answer:
        "Yes. We sign an NDA before detailed discovery when you ask, and IP assignment is part of the project contract.",
    },
    {
      question: "Do you provide support and maintenance after launch?",
      answer:
        "Yes. Each published plan includes a support window (1, 3 or 6 months). After that we can stay on for maintenance, monitoring and new modules.",
    },
    {
      question: "Fixed price or time-and-materials — which is better?",
      answer:
        "Fixed price when the first release is written down. Time-and-materials (see [hire dedicated developers](/services/on-demand)) when the backlog will keep moving. We recommend one after seeing the brief.",
    },
    {
      question: "Can you integrate with Tally, Zoho or our existing ERP?",
      answer:
        "Yes. APIs, webhooks and file drops are common. We read the other system's docs before we promise a sync. See the [ERP/CRM integration playbook](/services/crm-erp-development).",
    },
    {
      question: "Do I need to visit your Jaipur office?",
      answer:
        "No. Delivery is remote with weekly demos. The office is at 5th Floor, Amoro Building, Patrakar Colony, Jaipur, Rajasthan 302020. You can visit by appointment, Monday to Saturday, 10 AM–7 PM IST.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/crm-erp-development",
      title: "Custom CRM & ERP development",
      text: "Pipelines, inventory, GST billing and Tally/WhatsApp integrations.",
    },
    {
      href: "/services/business-modernization",
      title: "Legacy software modernization",
      text: "Replace Excel and old desktop tools in phases, without stopping operations.",
    },
    {
      href: "/services/devops",
      title: "DevOps and cloud",
      text: "CI/CD, Terraform and a free infrastructure audit under the product.",
    },
    {
      href: "/portfolio/connect-dairy-supply-chain",
      title: "Connect Dairy",
      text: "Live operations platform — fleet, roles and P&L.",
    },
    {
      href: "/services/fintech-app-development",
      title: "Webhook reliability playbook",
      text: "Idempotency and retries for SaaS APIs.",
    },
    {
      href: "/services/crm-erp-development",
      title: "ERP and CRM API integration",
      text: "How mid-market teams connect the systems they already run.",
    },
  ],
};
