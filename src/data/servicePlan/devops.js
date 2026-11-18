import { NAP_LINE, SOURCES, TEAM } from "./_shared";

/**
 * /services/devops
 * Indexed-pages pass 2026-11-18 (§3.11).
 * TODO OWNER: one quantified cost-optimisation or migration result (before/after).
 * TODO OWNER: retainer price band beyond /pricing project plans.
 * TODO OWNER: whether 24/7 managed support is actually offered [CONFIRM].
 */
export default {
  contentUpdatedAt: "2026-11-18",
  replaceFaqs: true,
  replaceRelatedLinks: true,
  metaTitle: "DevOps Services Company in Jaipur & India | Free Audit",
  bannerTitle: "DevOps & Cloud Services in Jaipur and India",
  metaDescription:
    "CI/CD, Kubernetes, Terraform, AWS/Azure/GCP migration and cloud cost reviews for Indian teams. Starts with a free infrastructure audit and a written plan.",
  keywords:
    "DevOps services India, DevOps consulting company India, AWS cost optimization services India, Kubernetes Terraform Jaipur, managed DevOps India",
  whyHeading: "Why teams choose TheTriFusion for DevOps",
  breadcrumbName: "DevOps & Cloud Services",
  schemaServiceName: "DevOps & Cloud Services",
  serviceType: "DevOps & Cloud Services",
  primaryCtaLabel: "Request the free audit",
  primaryCtaHref: "/contact?service=devops",
  whatsappMessage:
    "Hi TheTriFusion, I want a free DevOps/cloud audit. Cloud: ",
  leadProjectType: "DevOps / Cloud",
  formHeading: "Request a free infrastructure audit",
  midCtaText:
    "Paying too much for cloud, or deploying by hand? Ask for the free audit on WhatsApp.",
  // Drop the three location H2s; keep one location line in the fact box.
  scopeHeading: "DevOps services we provide",
  scopeKicker: "Services",
  processHeading: "How a DevOps engagement runs (30/60/90 days)",
  ctaHeading: "Request a free infrastructure audit",
  ctaText:
    "Tell us how you build and host today. We reply with free infrastructure audit notes and a practical next step. Implementation is quoted after the free audit. Published plans start at ₹1,00,000.",
  answerFirst: {
    id: "quick-answer",
    heading: "What do DevOps services cost in India?",
    text:
      "TheTriFusion provides DevOps and cloud services for Indian product teams: CI/CD pipelines, infrastructure as code, Kubernetes, cloud migration to AWS, Azure or Google Cloud, and cloud cost reviews. Every engagement starts with a free infrastructure audit and a written plan. Published plans start at ₹1,00,000, and cloud bills stay on your own account.",
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
      heading: "DevOps services we provide",
      paragraphs: [
        "One engagement can cover the services below. We pick the slice the audit says you need first — not all eight on day one.",
      ],
      included: [
        "CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins, Argo CD)",
        "Infrastructure as code (Terraform, Ansible)",
        "Kubernetes on EKS, AKS or GKE when a cluster earns its keep",
        "DevSecOps readiness (secrets, scanning, access reviews — not a certificate)",
        "FinOps / cloud cost reviews (bill stays on your account)",
        "AWS, Azure or Google Cloud migration with a rehearsal",
        "Managed DevOps after go-live, on an agreed cadence",
        "AIOps-style alerts tied to a service and a recent deploy",
      ],
    },
    {
      id: "free-audit-covers",
      heading: "What the free infrastructure audit covers",
      paragraphs: [
        "The audit is free and does not oblige you to continue. You get a written list of fixes in priority order, with a fee for the ones you want us to do.",
      ],
      included: [
        "How code gets from Git to production today",
        "Cloud accounts, environments and monthly spend",
        "Idle, oversized or forgotten resources",
        "Backups, monitoring, alerts and secrets handling",
        "A written list of fixes in priority order, with a fee for the ones you want us to do",
      ],
    },
    {
      id: "devops-pricing-india",
      heading: "DevOps pricing in India",
      paragraphs: [
        "The infrastructure audit is free. Implementation plans start at ₹1,00,000 (Basic), ₹2,50,000 (Standard) and ₹5,00,000 (Premium), and the audit decides which fits. Cloud provider bills stay on your own account.",
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
        "A full-time DevOps hire in India is a salary, tools and on-call load. Managed DevOps is a scoped engagement with a named Jaipur lead. Compare the audit + published plan against your own hiring budget.",
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
        "The free audit lists idle resources, missing autoscaling, orphaned volumes and obvious region mistakes. Any saving is estimated in the written audit plan. Indian regulated workloads can be placed in India regions you name; localisation and incident reporting sit under [RBI](" +
          SOURCES.rbi +
          ") (for regulated entities) and [CERT-In](" +
          SOURCES.certIn +
          "). We are not a compliance auditor.",
      ],
    },
    {
      id: "process-30-60-90",
      heading: "How a DevOps engagement runs (30/60/90 days)",
      paragraphs: [
        "Days 1–30: audit, access, a first pipeline or cost cut that does not touch production blindly. Days 31–60: IaC for the environments you actually run, monitoring, secrets. Days 61–90: migration slice or managed handover. The written plan after the audit is the contract.",
      ],
    },
    {
      id: "typical-project-scope",
      heading: "Typical project scope (example engagement)",
      paragraphs: [
        "Example engagement only — not a named client case study and not a promise of results. A common DevOps brief we scope looks like this.",
        "Scope: migrate an existing app to AWS, add a CI/CD pipeline, set up monitoring and alerts, and run a cloud cost optimisation review. Cloud provider bills stay on your account. Implementation is quoted after the free audit; published plans start at ₹1,00,000 (Basic), ₹2,50,000 (Standard) and ₹5,00,000 (Premium).",
      ],
      included: [
        "Phase 1 — Discovery & free audit (about 1 week): map Git → production, accounts, spend, backups and secrets; written priority list",
        "Phase 2 — Foundations (about 2–4 weeks): CI/CD to staging, infrastructure as code for the environments you run, basic monitoring",
        "Phase 3 — Migration & hardening (about 2–6 weeks): AWS cutover with a rehearsal, production monitoring, cost review of idle or oversized resources",
        "Phase 4 — Handover: runbooks, access returned to your roles, optional managed DevOps cadence",
        "Typical timeline range: 6–12 weeks after the audit for a single-app migration; larger estates are phased",
        "Deliverables: written audit plan, pipeline config, IaC for agreed environments, monitoring dashboards/alerts, migration notes, handover docs",
      ],
    },
    {
      id: "client-work-shanav",
      heading: "Client work: Shanav Technologies",
      paragraphs: [
        "[Shanav Technologies](https://shanav.com) — AWS consulting company. TheTriFusion built their website and AWS cloud deployment setup.",
      ],
    },
    {
      id: "devops-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.ceo}; ${TEAM.pm}; ${TEAM.backend}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "How much do DevOps services cost in India?",
      answer:
        "The infrastructure audit is free. Implementation is quoted after the free audit. Published plans start at ₹1,00,000, ₹2,50,000 and ₹5,00,000 on /pricing. Retainers are scoped after the audit. Cloud bills stay on your account.",
    },
    {
      question: "What is included in a free DevOps audit?",
      answer:
        "A written look at how code gets from Git to production, cloud accounts and monthly spend, idle or oversized resources, backups, monitoring, alerts and secrets handling, plus a priority list of fixes with fees for the ones you want us to do. It is not a penetration test and not a certificate.",
    },
    {
      question: "Can you reduce our AWS bill?",
      answer:
        "We look for idle resources, missing schedules, oversized instances and leftover volumes. Any saving is estimated in the written audit plan.",
    },
    {
      question: "Do you provide 24/7 managed DevOps support?",
      answer:
        "Managed DevOps is available after a written scope. Round-the-clock monitoring is available when the scope names the channel and response window; it is not the default. Jaipur hours are Monday to Saturday, 10:00 to 19:00.",
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
    {
      question: "Should we use AWS, Azure, or GCP?",
      answer:
        "Pick the cloud your team can run later and the one contracts or data-residency notes already require. We implement on AWS, Azure, and Google Cloud. The audit also says if you should stay on the current provider.",
    },
    {
      question: "When do we need Kubernetes instead of simple hosting?",
      answer:
        "Kubernetes helps when several services must scale independently. A single site or small API is often better on a managed container host or a virtual machine. We recommend the smaller option when a cluster adds load without a matching benefit.",
    },
    {
      question: "Can you certify us for ISO 27001 or SOC 2?",
      answer:
        "No. We do not issue ISO 27001 or SOC 2 certificates and we are not your auditor. DevSecOps work can support readiness with access reviews, scanning, and a gap list. A certification body still has to assess you.",
    },
    {
      question: "Do you work only in Jaipur?",
      answer:
        "No. We work remotely with teams across India and abroad; the office is in Jaipur for in-person meetings.",
    },
    {
      question: "Can you set up CI/CD for an existing app without downtime?",
      answer:
        "Yes. We build the pipeline alongside your current deployment, test it on staging, and switch production over in a planned window once your team is comfortable.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/software-development",
      title: "custom software",
      text: "The product layer these pipelines deploy.",
    },
    {
      href: "/services/ev-charging-app-development",
      title: "OCPP CMS hosting",
      text: "When the product is a charger network CMS.",
    },
    {
      href: "/services/fintech-app-development",
      title: "secure hosting for fintech apps",
      text: "Pipelines and monitoring next to BBPS/AEPS panels.",
    },
    {
      href: "/services/ai-development",
      title: "AI workloads in your cloud",
      text: "Product AI features, separate from AIOps on infrastructure.",
    },
    {
      href: "/solutions/msp-managed-it-services",
      title: "managed IT services",
      text: "Broader application care beside DevOps.",
    },
  ],
};
