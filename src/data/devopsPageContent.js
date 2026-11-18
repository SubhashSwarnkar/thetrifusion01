/**
 * Original DevOps page copy for /services/devops.
 * Optional fields are read only by ServiceDetailPage for this service.
 * Indexed-pages pass 2026-11-18 (§3.11): merged service H2s, G1 leak purge.
 */
export const devopsPageContent = {
  title: "DevOps & Cloud Services",
  metaTitle: "DevOps Services Company in Jaipur & India | Free Audit",
  metaDescription:
    "CI/CD, Kubernetes, Terraform, AWS/Azure/GCP migration and cloud cost reviews for Indian teams. Starts with a free infrastructure audit and a written plan.",
  keywords:
    "DevOps services in Jaipur, managed DevOps, Kubernetes management, CI/CD automation, DevSecOps, cloud cost optimization, infrastructure as code, cloud migration AWS Azure GCP, TheTriFusion",
  bannerTitle: "DevOps & Cloud Services in Jaipur and India",
  bannerDescription:
    "TheTriFusion is a Jaipur team that designs, builds, and runs DevOps and cloud platforms on AWS, Azure, and Google Cloud for companies in India and teams elsewhere.",
  shortDescription:
    "DevOps and cloud services from Jaipur: managed DevOps, Kubernetes, CI/CD, DevSecOps, FinOps, infrastructure as code, and cloud migration for India and worldwide.",
  description:
    "DevOps services in Jaipur from TheTriFusion take you from a first cloud account to a workflow developers can ship on. We set up pipelines, infrastructure as code, Kubernetes where it earns its keep, and monitoring that names the service at fault. Engineers are based in Jaipur and deliver remotely across India and worldwide. If the product is still being shaped, start with [custom software development](/services/software-development) or [website development](/services/website-development). DevOps is the operations layer those products run on.",
  locationLine:
    "Jaipur-based DevOps and cloud engineering — delivered remotely across India and worldwide.",
  scopeKicker: "Services",
  scopeHeading: "DevOps services we provide",
  processHeading: "How a DevOps engagement runs (30/60/90 days)",
  processLayout: "howto",
  ctaHeading: "Request a free infrastructure audit",
  ctaText:
    "Tell us how you build and host today. We reply with free infrastructure audit notes and a practical next step. Implementation is quoted after the free audit. Published plans start at ₹1,00,000.",
  primaryCtaLabel: "Request the free audit",
  primaryCtaHref: "/contact?service=devops",
  secondaryCtaLabel: "Browse DevOps services",
  secondaryCtaHref: "#services-toc",
  serviceType: "DevOps & Cloud Services",
  breadcrumbName: "DevOps & Cloud Services",
  schemaServiceName: "DevOps & Cloud Services",
  whyHeading: "Why teams choose TheTriFusion for DevOps",
  whatsappMessage:
    "Hi TheTriFusion, I want a free DevOps/cloud audit. Cloud: ",
  leadProjectType: "DevOps / Cloud",
  formHeading: "Request a free infrastructure audit",
  midCtaText:
    "Paying too much for cloud, or deploying by hand? Ask for the free audit on WhatsApp.",
  imageAlt:
    "Engineers planning cloud infrastructure and deployment pipelines at TheTriFusion in Jaipur",
  contentUpdatedAt: "2026-11-18",
  hideClientStrip: true,
  hidePricingEstimates: true,
  hideStandardDeliverables: true,
  faqsExpanded: true,
  omitSchemaPrice: true,
  schemaAreaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Worldwide" },
  ],
  quickNav: [
    { href: "#services-toc", label: "Services" },
    { href: "#devops-starter-pack", label: "Starter pack" },
    { href: "#process", label: "Process" },
    { href: "#tech-stack", label: "Tech stack" },
    { href: "#why-us", label: "Why TheTriFusion" },
    { href: "#faq", label: "FAQs" },
  ],
  platforms: ["AWS", "Azure", "GCP", "Kubernetes"],
  features: [
    "Managed DevOps",
    "Kubernetes",
    "CI/CD",
    "DevSecOps",
    "Cloud cost optimization",
  ],
  technologies: [],
  industries: [],
  techStackHeading: "Tech Stack for DevOps and Cloud Delivery",
  technologiesList: [
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Pulumi",
    "Prometheus",
    "Grafana",
    "GitHub Actions",
    "GitLab CI",
    "Jenkins",
    "Argo CD",
    "Helm",
    "Linux",
  ],
  // Eight former H2s merged into one H2 with short role blocks (≤2–3 sentences each).
  detailSections: [
    {
      id: "devops-services-merged",
      tocLabel: "DevOps services",
      heading: "DevOps services we provide",
      schemaDescription:
        "CI/CD, Kubernetes, FinOps, DevSecOps, infrastructure as code, cloud migration and managed DevOps from Jaipur.",
      paragraphs: [
        "We pick the slice the free audit says you need first. Cloud bills and accounts stay in your name.",
      ],
      roles: [
        {
          id: "ai-devops-aiops",
          catalogTitle: "AIOps",
          heading: "AI-powered DevOps and AIOps",
          schemaDescription:
            "Monitoring and assisted incident response using telemetry you already collect.",
          paragraphs: [
            "Alerts name a service and a recent deploy. Auto-scaling follows a measurement you choose. Assisted response is a runbook and an alert channel — not an unattended restart. On-call hours are only when the scope includes them.",
          ],
        },
        {
          id: "cloud-cost-optimization",
          catalogTitle: "FinOps",
          heading: "Cloud cost optimization and FinOps",
          schemaDescription:
            "Right-sizing and cleanup of unused cloud resources, with the provider bill on your account.",
          paragraphs: [
            "We group spend by account, service and environment, then mark idle, oversized or forgotten resources. Right-sizing and cleanup of unattached disks often come first. Any saving is estimated in the written audit plan.",
          ],
        },
        {
          id: "kubernetes-management",
          catalogTitle: "Kubernetes",
          heading: "Kubernetes management",
          schemaDescription:
            "Deploy, scale and monitor Kubernetes on EKS, AKS or GKE, or a smaller host when a cluster is not justified.",
          paragraphs: [
            "On AWS we use EKS, on Azure AKS, and on Google Cloud GKE unless you already run Kubernetes. A single site or small API is often calmer on a managed container service or a virtual machine, and we will say so.",
          ],
        },
        {
          id: "ci-cd-automation",
          catalogTitle: "CI/CD",
          heading: "CI/CD automation",
          schemaDescription:
            "Continuous integration and delivery with GitHub Actions, GitLab CI, Jenkins or Argo CD.",
          paragraphs: [
            "We pick one pipeline tool for the forge you already use, with staging, tests that fail the build, and production from a protected branch. Secrets stay out of the repository.",
          ],
        },
        {
          id: "devsecops",
          catalogTitle: "DevSecOps",
          heading: "DevSecOps and compliance readiness",
          schemaDescription:
            "Identity, vulnerability scanning and compliance monitoring that support ISO 27001 and SOC 2 readiness. TheTriFusion does not issue those certificates.",
          paragraphs: [
            "We review who can reach production, how keys are stored, and whether images and dependencies are scanned before they deploy. We can support ISO 27001 or SOC 2 readiness with a gap list — that is not a certification.",
          ],
        },
        {
          id: "infrastructure-as-code",
          catalogTitle: "Infrastructure as code",
          heading: "Infrastructure as code and automation",
          schemaDescription:
            "Infrastructure as code with Terraform, Ansible or Pulumi so environments are reviewed in Git.",
          paragraphs: [
            "Terraform is the usual choice across AWS, Azure and Google Cloud. A change is a pull request, a plan you can read, and an apply that is not a surprise. Environments stay separate so staging cannot edit production.",
          ],
        },
        {
          id: "cloud-migration",
          catalogTitle: "Cloud migration",
          heading: "Cloud migration to AWS, Azure or GCP",
          schemaDescription:
            "Migration onto AWS, Azure or Google Cloud planned for minimal downtime, with a rehearsal and a rollback.",
          paragraphs: [
            "The order is inventory, a target design, a rehearsal, and a cutover window you have agreed. Minimal downtime means we shrink the cutover — we do not promise a silent switch. Databases are usually the long pole.",
          ],
        },
        {
          id: "managed-devops",
          catalogTitle: "Managed DevOps",
          heading: "Managed DevOps",
          schemaDescription:
            "Ongoing managed DevOps: monitoring, pipeline care, agreed updates, and a regular look at cost and capacity.",
          paragraphs: [
            "After the first pipeline is in place we watch the alerts you named, keep the pipeline able to ship, and send a short note on cost and capacity. The cloud account and repositories stay yours. Coverage outside Jaipur hours is written into the scope when you need it.",
          ],
        },
      ],
    },
  ],
  starterPack: {
    id: "devops-starter-pack",
    heading: "DevOps Starter Pack for Startups",
    intro:
      "The starter pack is a scoped setup for a small team that needs a place to work before it needs a platform group. The pack is quoted. It is not free. Only the initial infrastructure audit, including the cloud cost audit, is free.",
    items: [
      {
        title: "Developer onboarding and training",
        text: "A walkthrough of the repository, pipeline, and who to ask.",
      },
      {
        title: "Linux environment setup",
        text: "A documented host or cloud project a new developer can reproduce.",
      },
      {
        title: "Git and deployment tooling",
        text: "Branch rules and the step that ships to staging.",
      },
      {
        title: "Secure VPN access",
        text: "Admin paths kept off the public internet.",
      },
      {
        title: "Internal Git hosting",
        text: "A private repository on a forge you control.",
      },
      {
        title: "Starter CI/CD pipeline",
        text: "Build, test, and deploy one app to a non-production environment.",
      },
      {
        title: "Basic monitoring stack",
        text: "Uptime, a few charts, and an alert a person reads.",
      },
      {
        title: "Cloud cost audit",
        text: "A free read of the current cloud bill, included with the free infrastructure audit.",
      },
    ],
    note: "Ask for the pack or the free audit on the contact form. Paid work starts only after a written scope. Implementation is quoted after the free audit. Published plans start at ₹1,00,000.",
  },
  process: [
    {
      title: "Free infrastructure audit",
      description:
        "We review how you build, host, and pay today: repositories, environments, access, backups, and the cloud bill if you share it. You get a short note on what is fragile and what can wait. This audit, including the cloud cost audit, is free and does not oblige you to continue.",
    },
    {
      title: "Custom DevOps roadmap (30/60/90 days)",
      description:
        "From the audit we write the sequence: days 1–30 for access and a first safe win, days 31–60 for IaC and monitoring, days 61–90 for a migration slice or managed handover. The roadmap names the cloud, the pipeline tool, and whether Kubernetes is in or out.",
    },
    {
      title: "Hands-on implementation",
      description:
        "We build the agreed slice in your accounts: pipeline, infrastructure code, cluster or simpler host, access, and the first dashboards. Each stage has a handover note.",
    },
    {
      title: "Ongoing management and optimization",
      description:
        "If you want us to stay, managed DevOps covers alerts, the pipeline, updates in the scope, and a regular look at cost and capacity. If your team will run it, you still keep the documentation and the access.",
    },
  ],
  whyPoints: [
    {
      title: "Based in Jaipur",
      description:
        "The people who change your environments are in Jaipur, Rajasthan. You get a named conversation, not an unnamed queue.",
    },
    {
      title: "India and worldwide delivery",
      description:
        "Work is remote for companies in India and for teams in other countries. You do not need an office visit to start.",
    },
    {
      title: "Your accounts stay yours",
      description:
        "Cloud accounts, repositories, and domains remain in your name. Access can be revoked, and the infrastructure code is in a repository you can read.",
    },
    {
      title: "Scope before paid work",
      description:
        "The infrastructure audit is free. Implementation and managed DevOps start only after a written scope. Implementation is quoted after the free audit. Published plans start at ₹1,00,000.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/software-development",
      title: "custom software",
      text: "Build the application, then add DevOps around that repository.",
    },
    {
      href: "/services/ev-charging-app-development",
      title: "OCPP CMS hosting",
      text: "When the product is a charger network, the app and OCPP backend come before the pipeline.",
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
  // FAQs replaced by servicePlan/devops.js (replaceFaqs: true).
  faqs: [],
};
