import { NAP_LINE, SOURCES, TEAM } from "./_shared";

/**
 * /services/devops
 * TODO OWNER: real AWS/Azure/CKA certifications held by named engineers.
 * TODO OWNER: one quantified cost-optimisation or migration result (before/after).
 * TODO OWNER: retainer price band you are willing to publish (beyond /pricing project plans).
 * TODO OWNER: whether 24/7 managed support is actually offered.
 */
export default {
  contentUpdatedAt: "2026-10-27",
  metaTitle: "DevOps & Cloud Services in Jaipur, India | Free Audit | TheTriFusion",
  bannerTitle: "DevOps & Cloud Services in Jaipur, India",
  metaDescription:
    "CI/CD, Kubernetes, Terraform, AWS/Azure/GCP migration and cloud cost optimisation from Jaipur. Free infrastructure audit, then a fixed written plan.",
  keywords:
    "DevOps services in Jaipur, DevOps consulting company India, AWS cost optimization services India, Kubernetes Terraform Jaipur, managed DevOps India",
  answerFirst: {
    id: "quick-answer",
    heading: "DevOps services in Jaipur and India: the short answer",
    text:
      "TheTriFusion provides DevOps and cloud services from Jaipur: CI/CD, infrastructure as code, Kubernetes, DevSecOps readiness, FinOps, cloud migration and managed DevOps on AWS, Azure and Google Cloud. Every engagement starts with a free infrastructure audit, then a written plan. Published /pricing plans start at ₹1,00,000; the fee after the audit follows that scope.",
    facts: [
      { label: "First step", value: "Free infrastructure audit" },
      { label: "Clouds", value: "AWS, Azure, Google Cloud" },
      { label: "Published plans", value: "From ₹1,00,000 on /pricing" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  schemaAdditionalOffers: [
    {
      name: "Free infrastructure audit",
      description:
        "Written findings on CI/CD, cloud spend and a proposed 30/60/90-day plan. No package fee for the audit.",
      price: 0,
      url: "/services/devops#quick-answer",
    },
  ],
  extraSections: [
    {
      id: "devops-services",
      heading: "DevOps services we run",
      paragraphs: [
        "CI/CD (GitHub Actions, GitLab CI, Jenkins, Argo CD), infrastructure as code (Terraform, Ansible), Kubernetes where it earns its keep, DevSecOps readiness (secrets, SAST, dependency pinning — not an ISO certificate), FinOps / cloud cost reviews, AWS/Azure/GCP migration, and managed DevOps after go-live. See the in-page sections for each.",
      ],
    },
    {
      id: "devops-pricing-india",
      heading: "DevOps pricing in India",
      paragraphs: [
        "The audit is free. Project plans already published on [pricing](/pricing) start at ₹1,00,000 (Basic), ₹2,50,000 (Standard) and ₹5,00,000 (Premium). Monthly retainer bands are not published on this page; they follow the audit.",
      ],
      comparison: {
        heading: "Published DevOps plans",
        rowHeader: "Plan",
        columns: ["Starting price", "What /pricing lists"],
        rows: [
          { label: "Audit", cells: ["₹0", "Infrastructure and cloud-cost review, then a written plan"] },
          { label: "Basic", cells: ["₹1,00,000", "Starter DevOps engagement on the pricing page"] },
          { label: "Standard", cells: ["₹2,50,000", "Broader pipeline, IaC and monitoring scope"] },
          { label: "Premium", cells: ["₹5,00,000", "Migration-scale or managed programme"] },
        ],
      },
    },
    {
      id: "in-house-vs-managed",
      heading: "In-house DevOps hire vs managed DevOps",
      paragraphs: [
        "A full-time DevOps hire in India is a salary, tools and on-call load. Managed DevOps is a scoped engagement with a named Jaipur lead. We do not publish competitor salaries. Compare the audit + published plan against your own hiring budget.",
      ],
      comparison: {
        heading: "How to choose",
        rowHeader: " ",
        columns: ["In-house hire", "Managed DevOps with TheTriFusion"],
        rows: [
          {
            label: "When it fits",
            cells: [
              "You already have a platform team and need a dedicated owner",
              "You need pipelines, IaC or a migration without a full-time hire yet",
            ],
          },
          {
            label: "Cost shape",
            cells: [
              "Salary + tools + on-call; not quoted here",
              "Free audit, then a written plan from the published ₹1,00,000 starting range",
            ],
          },
          {
            label: "Coverage",
            cells: [
              "One person, one timezone, leave gaps",
              "Named lead in IST; extra hands via [hire dedicated developers](/services/on-demand)",
            ],
          },
        ],
      },
    },
    {
      id: "cloud-cost-savings",
      heading: "Cloud cost savings",
      paragraphs: [
        "The free audit lists idle resources, missing autoscaling, orphaned volumes and obvious region mistakes. We do not publish a before/after rupee figure until a client allows a named result. Indian regulated workloads can be placed in India regions you name; localisation and incident reporting sit under [RBI](" +
          SOURCES.rbi +
          ") (for regulated entities) and [CERT-In](" +
          SOURCES.certIn +
          "). We are not a compliance auditor.",
      ],
    },
    {
      id: "process-30-60-90",
      heading: "Process and a 30/60/90-day plan",
      paragraphs: [
        "Days 1–30: audit, access, a first pipeline or cost cut that does not touch production blindly. Days 31–60: IaC for the environments you actually run, monitoring, secrets. Days 61–90: migration slice or managed handover. The written plan after the audit is the contract, not this paragraph.",
      ],
    },
    {
      id: "devops-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.ceo}; ${TEAM.pm}; ${TEAM.backend}. Cloud certifications (AWS, Azure, CKA) are not listed in this repo, so they are not claimed here.`,
      ],
    },
  ],
  faqs: [
    {
      question: "How much do DevOps services cost in India?",
      answer:
        "The infrastructure audit is free. Published TheTriFusion plans start at ₹1,00,000, ₹2,50,000 and ₹5,00,000 on /pricing. Retainers are scoped after the audit.",
    },
    {
      question: "What is included in a free DevOps audit?",
      answer:
        "A written look at your current CI/CD, cloud bill shape, secrets handling and a proposed 30/60/90-day plan. It is not a penetration test and not a certificate.",
    },
    {
      question: "Can you reduce our AWS bill?",
      answer:
        "We look for idle resources, missing schedules, oversized instances and leftover volumes. Any saving is written into the plan after the audit. We do not invent a percentage on this page.",
    },
    {
      question: "Do you provide 24/7 managed DevOps support?",
      answer:
        "Managed DevOps is available after a written scope. 24/7 on-call is not a published offer on this page; ask for it in the audit if you need it.",
    },
    {
      question: "How long does a cloud migration to AWS take?",
      answer:
        "A single app with a written runbook can move in weeks. A multi-account estate is phased. The audit names the first slice.",
    },
    {
      question: "Do you work with Indian data-localisation requirements (RBI/CERT-In)?",
      answer:
        "We can place workloads in India regions you name. RBI rules apply to regulated entities; CERT-In publishes incident-reporting directions. Read those sources; we are not your compliance auditor. RBI: https://www.rbi.org.in/ · CERT-In: https://www.cert-in.org.in/",
    },
    {
      question: "Which CI/CD tools do you use?",
      answer:
        "GitHub Actions, GitLab CI, Jenkins and Argo CD, with Terraform or Ansible for infrastructure. We match the tool to the repo you already have.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/software-development",
      title: "Custom software development",
      text: "The product layer these pipelines deploy.",
    },
    {
      href: "/services/on-demand",
      title: "Hire dedicated developers",
      text: "Named React, Node or DevOps capacity when you need extra hands.",
    },
    {
      href: "/services",
      title: "CI/CD checklist for SME SaaS",
      text: "What to put in the first pipeline before you scale the cloud bill.",
    },
    {
      href: "/services/fintech-app-development",
      title: "Webhook reliability playbook",
      text: "Idempotency and retries next to the deploy pipeline.",
    },
  ],
};
