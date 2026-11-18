import { NAP_LINE, SOURCES, TEAM } from "./_shared";

/**
 * /services/ai-development
 * Indexed-pages pass 2026-11-18 (§3.5).
 * TODO OWNER: one real AI feature shipped (demo video/screens).
 * TODO OWNER: pilot price you will publish (beyond the ₹2,00,000 Basic plan).
 */
export default {
  contentUpdatedAt: "2026-11-18",
  replaceFaqs: true,
  replaceRelatedLinks: true,
  metaTitle: "AI Chatbot & AI Agent Development in India | WhatsApp, RAG",
  bannerTitle: "AI Chatbot & AI Agent Development in India | WhatsApp, RAG",
  metaDescription:
    "WhatsApp AI chatbots, document search (RAG), invoice/PDF extraction and AI agents with human review. 2–4 week pilot first. Plans from ₹2,00,000.",
  keywords:
    "AI development company in India, WhatsApp AI chatbot development India, AI agent development company India, RAG search Jaipur, DPDP Act AI",
  description:
    "TheTriFusion is an AI development company in Jaipur that applies existing models to your workflow: WhatsApp chatbots, RAG search, invoice/PDF extraction, and agents with a human review step. We ship AI as a feature of iOS, Android, or web — not a disconnected chatbot demo.",
  shortDescription:
    "WhatsApp bots, RAG search and AI agents with a human review step. Pilots from ₹2,00,000.",
  bannerDescription:
    "Assistants, retrieval, and document ops inside your web or mobile product — with a human review step. We do not train foundation models.",
  locationLine:
    "Practical AI from Jaipur — features inside products, not model-training labs.",
  scopeKicker: "AI",
  scopeHeading: "AI features we add to real products",
  processHeading: "How an AI pilot works (2–4 weeks)",
  processLayout: "howto",
  whyHeading: "Why teams choose TheTriFusion for AI features",
  breadcrumbName: "AI Chatbot & AI Agent Development",
  schemaServiceName: "AI Chatbot & AI Agent Development",
  serviceType: "AI Chatbot & AI Agent Development",
  primaryCtaLabel: "Book an AI pilot call",
  primaryCtaHref: "/contact?service=ai-development",
  whatsappMessage: "Hi TheTriFusion, I want an AI chatbot/agent for: ",
  leadProjectType: "AI chatbot / AI feature",
  formHeading: "Tell us the workflow AI should help with",
  midCtaText:
    "Have one workflow AI could speed up? Describe it on WhatsApp and we will suggest a pilot.",
  industries: [],
  services: [],
  technologies: [],
  methodologies: [],
  costFactors: [],
  process: [
    {
      step: 1,
      title: "Pick one workflow and a success metric",
      description:
        "Agree the job (for example: draft a first reply) and the written metric that decides scale, change or stop.",
    },
    {
      step: 2,
      title: "Connect sample data with access you approve",
      description:
        "Use sample or limited production data only with the access you grant — not a blanket dump of your estate.",
    },
    {
      step: 3,
      title: "Build the chatbot/agent with a human-review step",
      description:
        "Wire the feature to your tools and content, with a human tick before anything outward is sent.",
    },
    {
      step: 4,
      title: "Measure against the metric with your team",
      description:
        "Run the pilot for 2–4 weeks and score it against the success metric you signed.",
    },
    {
      step: 5,
      title: "Decide: scale, change or stop",
      description:
        "If the metric fails, we stop or change the brief. We do not promise that a model will replace a team.",
    },
  ],
  features: [
    "WhatsApp AI chatbots",
    "RAG document search",
    "Invoice/PDF extraction",
    "Human review step",
    "2–4 week pilots",
    "Vendor-neutral models",
    "Published plans from ₹2,00,000",
    "Jaipur delivery",
  ],
  answerFirst: {
    id: "quick-answer",
    heading: "What does an AI chatbot cost in India, and how do you start?",
    text:
      "TheTriFusion adds practical AI to the products Indian businesses already run: WhatsApp AI chatbots, RAG search over your documents, invoice and PDF extraction, and AI agents with a human review step. Every project starts with a 2–4 week pilot with a written success metric. Plans start at ₹2,00,000, and your data is not used to train public models.",
    facts: [
      { label: "Starting price", value: "From ₹2,00,000 (published Basic plan)" },
      { label: "Usual first step", value: "A 2–4 week pilot with a written success metric" },
      { label: "Privacy", value: "DPDP Act 2023 handling in the contract" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "ai-use-cases",
      heading: "AI use cases for Indian SMEs",
      paragraphs: [
        "WhatsApp support or booking bots, invoice and document extraction into an ERP, an internal search assistant over your PDFs, and a human-reviewed agent that drafts replies. Channel and mobile delivery often sit next to [mobile app development](/services/mobile-app-development). Deterministic office bots without a model belong on [RPA](/services/rpa). CRM lead capture with AI sits on [custom CRM](/services/crm-erp-development). If spreadsheets still run the process, [replace spreadsheets before adding AI](/services/business-modernization).",
      ],
    },
    {
      id: "custom-gpt-agents",
      heading: "Custom GPT-style agents for SMEs",
      paragraphs: [
        "Agents here mean a feature wired to your tools and data with a human tick before anything outward is sent — not a promise that ChatGPT replaces your team. We scope tools, logs, and the review step in writing. Published pilots start from ₹2,00,000 on [pricing](/pricing). For orgs already on Salesforce, see [AI inside Salesforce workflows](/services/salesforce).",
      ],
    },
    {
      id: "ai-pilot-deliverables",
      heading: "What you get from a pilot",
      paragraphs: [
        "A pilot is a working slice with a written result — not a slide deck of model names.",
      ],
      included: [
        "A working AI feature on WhatsApp, web or inside your app",
        "The prompts, retrieval set-up and evaluation sheet",
        "A written result against the agreed success metric",
        "Cost estimate for running it at your volume (model/API usage billed on your vendor account)",
        "Recommendation to scale, adjust or stop",
      ],
    },
    {
      id: "ai-cost-india",
      heading: "AI development cost in India",
      paragraphs: [
        "Published plans on [pricing](/pricing) start at ₹2,00,000 (Basic), ₹5,00,000 (Standard) and ₹10,00,000 (Premium). API/token usage is usually billed by the model vendor on your account. A pilot is the first slice of that range, not a separate invented fee.",
      ],
      comparison: {
        heading: "Pilot vs production (published starting points)",
        rowHeader: "Stage",
        columns: ["What it is", "How we price it"],
        rows: [
          { label: "Pilot", cells: ["One workflow, 2–4 weeks, a written success metric", "First slice of the published ₹2,00,000+ range"] },
          { label: "Production", cells: ["Auth, logs, human review, handover", "Standard / Premium plans or a written follow-on scope"] },
        ],
      },
    },
    {
      id: "dpdp-handling",
      heading: "Data privacy and the DPDP Act 2023",
      paragraphs: [
        "The [Digital Personal Data Protection Act, 2023](" +
          SOURCES.dpdAct +
          ") is India’s personal-data law ([MeitY](" +
          SOURCES.meity +
          ")). We keep client data in the environments you name in the contract. We do not use your production data to train public models. For legal advice on DPDP obligations, speak with your counsel.",
      ],
    },
    {
      id: "models-we-use",
      heading: "Models we use",
      paragraphs: [
        "Vendor-neutral: OpenAI, Anthropic Claude, Google Gemini, or an open-weight model when the brief needs it. We pick for the job, the language, and where the data is allowed to sit — not for a brand war.",
      ],
      comparison: {
        heading: "Vendor-neutral view",
        rowHeader: " ",
        columns: ["Hosted APIs (OpenAI, Claude, Gemini)", "Open-weight / self-hosted"],
        rows: [
          { label: "Best for", cells: ["Fast pilots, strong language quality", "Data that must stay on your VPC"] },
          { label: "Cost shape", cells: ["Token bill on your vendor account", "GPU/hosting you already pay for"] },
        ],
      },
    },
    {
      id: "ai-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.backend}; ${TEAM.pm}.`,
      ],
    },
    {
      id: "india-city-pages",
      heading: "India delivery from Jaipur, Rajasthan",
      paragraphs: [
        "AI features ship from the same Patrakar Colony studio as [website development](/services/website-development) and [custom software](/services/software-development). Published pilots from ₹2,00,000. We do not invent branch offices outside Jaipur.",
      ],
    },
  ],
  faqs: [
    {
      question: "How much does it cost to build an AI chatbot in India?",
      answer:
        "TheTriFusion AI plans start from ₹2,00,000. A WhatsApp or web chatbot pilot is the first slice of that range. Model API usage is usually billed by the vendor on your account.",
    },
    {
      question: "How does a WhatsApp AI chatbot work for a business?",
      answer:
        "Customers message your WhatsApp Business number. The chatbot answers from your approved content, such as products, prices, FAQs or order status, captures leads into your CRM, and hands the chat to a staff member when it is unsure or the customer asks for a human.",
    },
    {
      question: "Can you build a WhatsApp AI chatbot for my business?",
      answer:
        "Yes. We use the WhatsApp Business API through a provider you contract, plus a human review step. Related: [custom software](/services/software-development) when the bot sits inside a larger product.",
    },
    {
      question: "What is a RAG chatbot?",
      answer:
        "RAG (retrieval-augmented generation) means the AI first searches your own documents, such as manuals, policies or catalogues, and then writes an answer based only on what it found, with a link to the source. It reduces made-up answers compared with a plain ChatGPT-style bot.",
    },
    {
      question: "Which AI models do you use?",
      answer:
        "We are vendor-neutral: OpenAI, Anthropic Claude, Google Gemini, or an open-weight model hosted on your servers when data must stay inside your network. We choose based on language quality, cost and where your data is allowed to sit.",
    },
    {
      question: "Is my data safe — do you comply with the DPDP Act?",
      answer:
        "We treat the Digital Personal Data Protection Act, 2023 as the statute that applies (https://www.indiacode.nic.in/handle/123456789/20029). Data stays in the environments named in the contract. We are not your Data Protection Officer. For legal advice on DPDP obligations, speak with your counsel.",
    },
    {
      question: "ChatGPT vs custom AI — what's the difference?",
      answer:
        "ChatGPT is a general assistant. Custom AI here means a feature wired to your data, tools and a human review step inside your product.",
    },
    {
      question: "How long does an AI pilot take?",
      answer:
        "Usually 2–4 weeks for one workflow and one success metric.",
    },
    {
      question: "Can AI read invoices and PDFs into our ERP?",
      answer:
        "Yes, as a scoped extraction job with a human exception path. Related ops work is on [RPA](/services/rpa) and [custom software](/services/software-development).",
    },
    {
      question: "Do you train foundation models?",
      answer:
        "No. We apply existing models to your workflow: retrieval, assistants, and ops tools with a review step.",
    },
    {
      question: "Can AI sit inside a mobile or web app?",
      answer:
        "Yes. We ship it as a feature of iOS, Android, or web — not a disconnected chatbot demo. See [mobile app development](/services/mobile-app-development).",
    },
  ],
  relatedLinks: [
    {
      href: "/services/software-development",
      title: "Custom software",
      text: "The product the AI feature sits inside.",
    },
    {
      href: "/services/crm-erp-development",
      title: "CRM with AI lead capture",
      text: "Pipelines and WhatsApp notes next to the deal.",
    },
    {
      href: "/services/business-modernization",
      title: "Replace spreadsheets before adding AI",
      text: "When Excel still runs the process.",
    },
    {
      href: "/services/salesforce",
      title: "AI inside Salesforce workflows",
      text: "Flows and Apex on an org you already pay for.",
    },
    {
      href: "/services/mobile-app-development",
      title: "AI features inside a mobile app",
      text: "When the AI feature ships inside an iOS/Android product.",
    },
    {
      href: "/pricing",
      title: "Published AI plans",
      text: "Pilots from ₹2,00,000 — token spend usually on your vendor account.",
    },
  ],
};
