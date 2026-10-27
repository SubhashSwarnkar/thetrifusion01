import { NAP_LINE, SOURCES, TEAM } from "./_shared";

/**
 * /services/ai-development
 * TODO OWNER: one real AI feature shipped (demo video/screens).
 * TODO OWNER: pilot price you will publish (beyond the ₹2,00,000 Basic plan).
 */
export default {
  contentUpdatedAt: "2026-10-27",
  metaTitle: "AI Development Company in Jaipur | Chatbots, RAG & AI Agents",
  bannerTitle: "AI Development Company in Jaipur",
  metaDescription:
    "WhatsApp AI chatbots, RAG search, document AI and AI agents added to your product by a Jaipur team, with human review built in. Pilot first.",
  keywords:
    "AI development company in Jaipur, WhatsApp AI chatbot development India, AI agent development company India, RAG search Jaipur, DPDP Act AI",
  answerFirst: {
    id: "quick-answer",
    heading: "AI development company in Jaipur: the short answer",
    text:
      "TheTriFusion adds practical AI features to products Indian SMEs already run: WhatsApp chatbots, RAG search over your documents, invoice/PDF extraction, and agents with a human review step. We start with a pilot, not a lab. Published plans start from ₹2,00,000. Your production data is not used to train public models.",
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
        "WhatsApp support or booking bots, invoice and document extraction into an ERP, an internal search assistant over your PDFs, and a human-reviewed agent that drafts replies. Related reading: [WhatsApp AI chatbot for Indian businesses](/services/mobile-app-development), [custom GPT agents for SMEs](/services/ai-development), [AI app development cost in India](/services/mobile-app-development).",
      ],
    },
    {
      id: "ai-pilot",
      heading: "How an AI pilot works",
      paragraphs: [
        "Two to four weeks, one workflow, one success metric (for example: “drafts a first reply the agent can send after a human ticks yes”). If the metric fails, we stop or change the brief. We do not promise that a model will replace a team.",
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
          ")). We keep client data in the environments you name in the contract. We do not use your production data to train public models. This page is not legal advice.",
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
        `Named people on the [team page](/team): ${TEAM.backend}; ${TEAM.pm}. A named shipped AI demo is not in this repo yet.`,
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
      question: "Can you build a WhatsApp AI chatbot for my business?",
      answer:
        "Yes. We use the WhatsApp Business API through a provider you contract, plus a human review step. See /services.",
    },
    {
      question: "Is my data safe — do you comply with the DPDP Act?",
      answer:
        "We treat the Digital Personal Data Protection Act, 2023 as the statute that applies (https://www.indiacode.nic.in/handle/123456789/20029). Data stays in the environments named in the contract. We are not your Data Protection Officer.",
    },
    {
      question: "ChatGPT vs custom AI — what's the difference?",
      answer:
        "ChatGPT is a general assistant. Custom AI here means a feature wired to your data, tools and a human review step. See /services.",
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
  ],
  relatedLinks: [
    {
      href: "/services/software-development",
      title: "Custom software development",
      text: "The product the AI feature sits inside.",
    },
    {
      href: "/services/rpa",
      title: "RPA and process automation",
      text: "When the job is a deterministic bot, not a model.",
    },
    {
      href: "/services/mobile-app-development",
      title: "WhatsApp AI chatbot for Indian businesses",
      text: "Channel, review step, and what not to automate.",
    },
    {
      href: "/services/ai-development",
      title: "Custom GPT agents for SMEs",
      text: "Agents with tools and a human tick.",
    },
    {
      href: "/services/mobile-app-development",
      title: "AI app development cost in India",
      text: "What actually moves the quote.",
    },
  ],
};
