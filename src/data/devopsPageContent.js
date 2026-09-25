/**
 * Original DevOps page copy for /services/devops.
 * Optional fields are read only by ServiceDetailPage for this service.
 */
export const devopsPageContent = {
  title: "DevOps & Cloud Services",
  metaTitle: "DevOps Services in Jaipur | Managed DevOps | TheTriFusion",
  metaDescription:
    "DevOps and cloud services in Jaipur. Kubernetes, CI/CD, DevSecOps, FinOps, migration, and managed DevOps for India and worldwide. Free infrastructure audit.",
  keywords:
    "DevOps services in Jaipur, managed DevOps, Kubernetes management, CI/CD automation, DevSecOps, cloud cost optimization, infrastructure as code, cloud migration AWS Azure GCP, TheTriFusion",
  bannerTitle: "DevOps & Cloud Services in Jaipur",
  bannerDescription:
    "TheTriFusion is a Jaipur team that designs, builds, and runs DevOps and cloud platforms on AWS, Azure, and Google Cloud for companies in India and teams elsewhere.",
  shortDescription:
    "DevOps and cloud services from Jaipur: managed DevOps, Kubernetes, CI/CD, DevSecOps, FinOps, infrastructure as code, and cloud migration for India and worldwide.",
  description:
    "DevOps services in Jaipur from TheTriFusion take you from a first cloud account to a workflow developers can ship on. We set up pipelines, infrastructure as code, Kubernetes where it earns its keep, and monitoring that names the service at fault. Engineers are based in Jaipur and deliver remotely across India and worldwide. If the product is still being shaped, start with [custom software development](/services/software-development) or [website development](/services/website-development). This page is the operations layer those products run on.",
  locationLine:
    "Jaipur-based DevOps and cloud engineering — delivered remotely across India and worldwide.",
  scopeKicker: "On this page",
  scopeHeading: "DevOps Services in Jaipur",
  processHeading: "How a DevOps Engagement Runs",
  processLayout: "howto",
  ctaHeading: "Request a DevOps review from Jaipur",
  ctaText:
    "Tell us how you build and host today. We reply with free infrastructure audit notes and a practical next step. Use the contact form. This page does not list a package price; the fee follows the audit.",
  primaryCtaLabel: "Request a free infrastructure audit",
  primaryCtaHref: "/contact",
  secondaryCtaLabel: "Browse the eight services",
  secondaryCtaHref: "#services-toc",
  serviceType: "DevOps and Cloud Services",
  whatsappMessage:
    "Hi TriFusion, I want a DevOps and cloud conversation with the Jaipur team. Please start with the free infrastructure audit.",
  imageAlt:
    "Engineers planning cloud infrastructure and deployment pipelines at TheTriFusion in Jaipur",
  contentUpdatedAt: "2026-09-25",
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
  detailSections: [
    {
      id: "ai-devops-aiops",
      tocLabel: "AI-powered DevOps / AIOps",
      heading: "AI-Powered DevOps and AIOps",
      schemaDescription:
        "Monitoring, threshold-based scaling, and assisted incident response using telemetry you already collect, with on-call hours only when the scope includes them.",
      paragraphs: [
        "AI-powered DevOps, often called AIOps, lines up metrics, logs, and the latest deploy so an alert names a service and a recent change. Where the history is steady, we flag unusual latency or error rate and write how a person confirms that signal before production changes.",
        "Auto-scaling grows and shrinks on a measurement you choose, so idle replicas do not pile up overnight. Assisted response is a runbook, an alert channel, and a short note after the event — not an unattended restart. Cost checks cover idle disks, oversized machines, and logs kept past your retention note. Round-the-clock monitoring is available only when the scope includes the hours and the escalation path.",
      ],
      included: [
        "Alerts tied to a service and a recent deploy",
        "Scaling rules with a written scale-in policy",
        "A runbook a developer can follow without a war room",
        "A pass over idle or oversized cloud resources",
        "On-call hours only when the statement of work includes them",
      ],
      tools: [
        "Amazon CloudWatch",
        "Azure Monitor",
        "Google Cloud Operations",
        "Prometheus",
        "Grafana",
        "OpenTelemetry",
      ],
    },
    {
      id: "cloud-cost-optimization",
      tocLabel: "Cloud cost optimization",
      heading: "Cloud Cost Optimization and FinOps",
      schemaDescription:
        "Right-sizing, reserved and spot planning, and cleanup of unused cloud resources, with the provider bill staying on your account.",
      paragraphs: [
        "Cloud cost optimization starts from the bill you already pay. We group spend by account, service, and environment, then mark what is idle, oversized, or left from a forgotten test. Right-sizing matches instance, disk, and database class to measured load, and we write down headroom we would not remove.",
        "Reservations suit a steady baseline. Spot capacity suits jobs that can stop. Cleanup of unattached disks, old snapshots, and unbounded logs is often the first change that does not touch traffic.",
      ],
      included: [
        "A written read of the current bill by service and environment",
        "Right-sizing notes for compute, disks, and databases",
        "A reservation and spot plan only where the workload fits",
        "Cleanup of unattached disks, stale snapshots, and unbounded logs",
        "A short list of changes we would not make, and why",
      ],
      tools: [
        "AWS Cost Explorer",
        "AWS Budgets",
        "Azure Cost Management",
        "Google Cloud Billing",
        "Kubecost",
        "Infracost",
      ],
    },
    {
      id: "kubernetes-management",
      tocLabel: "Kubernetes management",
      heading: "Kubernetes Management",
      schemaDescription:
        "Deploy, scale, monitor, and keep Kubernetes highly available on EKS, AKS, or GKE, or a smaller host when a cluster is not justified.",
      paragraphs: [
        "Kubernetes management covers how a release is deployed, how it scales, how you know it is unhealthy, and how a node loss does not take the service with it. On AWS we use EKS, on Azure AKS, and on Google Cloud GKE, unless you already run Kubernetes and want that kept. Namespaces, resource requests, and a documented upgrade path matter more than a long add-on list.",
        "A single site or a small API is often calmer on a managed container service or a virtual machine, and we will say so. When a cluster is justified, spread workloads across nodes and back up data the cluster does not protect. See [website development](/services/website-development) when you are shipping the site.",
      ],
      included: [
        "Cluster build or takeover on EKS, AKS, or GKE",
        "Deployments, services, and ingress with resource limits",
        "Horizontal scaling tied to a measured signal",
        "Health checks, node spread, and a tested upgrade note",
        "Dashboards for saturation, restarts, and failed releases",
      ],
      tools: ["EKS", "AKS", "GKE", "Helm", "Argo CD", "Kubernetes"],
    },
    {
      id: "ci-cd-automation",
      tocLabel: "CI/CD automation",
      heading: "CI/CD Automation",
      schemaDescription:
        "Continuous integration and delivery with GitHub Actions, GitLab CI, Jenkins, or Argo CD, including a staging path before production.",
      paragraphs: [
        "CI/CD automation is the path from a merged change to a running environment, with tests and approvals your team will keep. We pick one system and document it: GitHub Actions when the code is on GitHub, GitLab CI when it is on GitLab, Jenkins when you already operate it, and Argo CD when the target is Kubernetes and the cluster should reconcile to Git.",
        "A useful pipeline has staging, tests that fail the build, and production from a protected branch. Secrets stay out of the repository. If we also build the app, see [custom software development](/services/software-development). The [React Server Components note](/blog/react-server-components) covers the HTML those builds should ship.",
      ],
      included: [
        "One pipeline tool, chosen for the forge you already use",
        "Build, test, and a staging deploy before production",
        "Protected branch rules and a written rollback step",
        "Secrets kept in the forge or the cloud secret store",
        "A README a new developer can follow on the first day",
      ],
      tools: ["GitHub Actions", "GitLab CI", "Jenkins", "Argo CD", "Docker"],
    },
    {
      id: "devsecops",
      tocLabel: "DevSecOps",
      heading: "DevSecOps and Compliance Readiness",
      schemaDescription:
        "Identity, vulnerability scanning, and compliance monitoring that support ISO 27001 and SOC 2 readiness. TheTriFusion does not issue those certificates.",
      paragraphs: [
        "DevSecOps here means checks inside the way you already build and host. We review who can reach production, how keys are stored, and whether images and dependencies are scanned before they deploy. Findings are a list with an owner, a severity, and the change that would close the item. Compliance monitoring repeats that list for security groups, public buckets, and admin roles.",
        "We can support ISO 27001 or SOC 2 readiness by mapping gaps in access, logging, and vulnerability handling. That is not a certification, and we do not issue those certificates. Product AI features live under [AI development](/services/ai-development).",
      ],
      included: [
        "IAM review for cloud accounts and the deployment forge",
        "Dependency and image scanning on the pipeline",
        "A gap list aimed at ISO 27001 or SOC 2 readiness",
        "Logging and retention notes for admin and deploy events",
        "A recurring check for public exposure and excess admin rights",
      ],
      tools: [
        "AWS IAM",
        "Microsoft Entra ID",
        "Google Cloud IAM",
        "Trivy",
        "Dependabot",
        "CloudTrail",
      ],
    },
    {
      id: "infrastructure-as-code",
      tocLabel: "Infrastructure as Code",
      heading: "Infrastructure as Code and Automation",
      schemaDescription:
        "Infrastructure as code with Terraform, Ansible, or Pulumi so environments are reviewed in Git instead of edited by hand.",
      paragraphs: [
        "Infrastructure as code describes networks, accounts, and servers in files that go through review. Terraform is the usual choice across AWS, Azure, and Google Cloud. Pulumi fits when the team would rather use a language it already knows. Ansible configures virtual machines and Linux hosts that the cloud API does not finish alone.",
        "We import or rewrite what you have into small modules, and we keep state where the team can lock and back it up. A change is a pull request, a plan you can read, and an apply that is not a surprise. Environments stay separate so a staging experiment cannot edit production. Hand-built extras are folded into the code or listed as known drift.",
      ],
      included: [
        "Modules for network, compute, data, and access",
        "Separate state per environment",
        "Plan output reviewed before apply",
        "Ansible or cloud-init where the host still needs configuration",
        "A note on how to recover state and who may apply",
      ],
      tools: ["Terraform", "Ansible", "Pulumi", "Git", "CloudFormation"],
    },
    {
      id: "cloud-migration",
      tocLabel: "Cloud migration",
      heading: "Cloud Migration to AWS, Azure, or GCP",
      schemaDescription:
        "Migration onto AWS, Azure, or Google Cloud planned for minimal downtime, with a rehearsal and a rollback before cutover.",
      paragraphs: [
        "Cloud migration moves an application, its data, and its operators onto AWS, Azure, or Google Cloud. The order is inventory, a target design, a rehearsal, and a cutover window you have agreed. Minimal downtime means we shrink the cutover. We do not promise a silent switch. Databases are usually the long pole: a replica, measured lag, and a moment to stop writes.",
        "The provider follows a contract, a data-residency note, or the cloud your team can run later. Lift-and-shift is fine when you are leaving an ageing host. [Business modernization](/services/business-modernization) fits a replacement. [Ecommerce development](/ecommerce-development) covers the store if that is the workload.",
      ],
      included: [
        "Inventory of hosts, data stores, and dependencies",
        "A target design on AWS, Azure, or Google Cloud",
        "A rehearsal with timings written down",
        "A cutover plan and a rollback that has been tried",
        "DNS, certificates, and access moved with the workload",
      ],
      tools: ["AWS", "Azure", "Google Cloud", "Docker", "Database replicas"],
    },
    {
      id: "managed-devops",
      tocLabel: "Managed DevOps",
      heading: "Managed DevOps",
      schemaDescription:
        "Ongoing managed DevOps across the lifecycle: monitoring, pipeline care, agreed updates, and a regular look at cost and capacity.",
      paragraphs: [
        "Managed DevOps continues after the first pipeline and environment are in place. We watch the alerts you named, keep the pipeline able to ship, apply updates listed in the scope, and send a short note on cost and capacity. The cloud account and the repositories stay yours. Access can be revoked.",
        "A one-time setup ends at the handover. Many teams implement first and add management once staging is stable. Coverage outside Jaipur hours — Monday to Saturday, 10:00 to 19:00 — including a 24/7 paging path, is written into the scope when you need it. We do not imply a response time we have not agreed. Broader application care is on the [managed IT page](/solutions/msp-managed-it-services).",
      ],
      included: [
        "Pipeline and environment care on an agreed cadence",
        "Alert routing for the services in scope",
        "Updates and patches listed in the statement of work",
        "A regular note on cost, capacity, and open risks",
        "Access that stays on your accounts and can be revoked",
      ],
      tools: [
        "Prometheus",
        "Grafana",
        "Cloud monitoring",
        "Terraform",
        "GitHub",
        "GitLab",
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
    note: "Ask for the pack or the free audit on the contact form. Paid work starts only after a written scope.",
  },
  process: [
    {
      title: "Free infrastructure audit",
      description:
        "We review how you build, host, and pay today: repositories, environments, access, backups, and the cloud bill if you share it. You get a short note on what is fragile and what can wait. This audit, including the cloud cost audit, is free and does not oblige you to continue.",
    },
    {
      title: "Custom DevOps roadmap",
      description:
        "From the audit we write the sequence: what to do first, what to leave, and which of the eight services apply. The roadmap names the cloud, the pipeline tool, and whether Kubernetes is in or out.",
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
        "The infrastructure audit is free. Implementation and managed DevOps start only after a written scope. This page does not list a package price.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/software-development",
      title: "Custom software development",
      text: "Build the application, then add DevOps around that repository.",
    },
    {
      href: "/services/website-development",
      title: "Website development",
      text: "Sites and web apps, with a pipeline chosen for that host.",
    },
    {
      href: "/services/ai-development",
      title: "AI development",
      text: "Product AI features, separate from AIOps on infrastructure.",
    },
    {
      href: "/blog/react-server-components",
      title: "React Server Components",
      text: "How pages stay in the initial HTML a pipeline should deploy.",
    },
    {
      href: "/blog/how-to-build-ecommerce-website-india-2026",
      title: "Ecommerce website guide",
      text: "If the workload you want to host is an online store.",
    },
    {
      href: "/services/ev-charging-app-development",
      title: "EV charging app development",
      text: "When the product is a charger network, the app and OCPP backend come before the pipeline.",
    },
  ],
  faqs: [
    {
      question: "What affects the cost of DevOps services?",
      answer:
        "Cost follows environment count, application count, Kubernetes versus a simpler host, and on-call cover. Cloud bills stay on your account. After the free audit we send a written scope and fee. No package price is listed on this page.",
    },
    {
      question: "How long does a DevOps engagement take?",
      answer:
        "A starter pipeline and basic monitoring for one app often take a few weeks once access is ready. Larger migrations are staged. We do not promise a week count before seeing the current hosting.",
    },
    {
      question: "Should we use AWS, Azure, or GCP?",
      answer:
        "Pick the cloud your team can run later and the one contracts or data-residency notes already require. We implement on AWS, Azure, and Google Cloud. The audit also says if you should stay on the current provider.",
    },
    {
      question: "Do you support startups?",
      answer:
        "Yes. The starter pack covers onboarding, Linux, Git, VPN, internal Git hosting, a first pipeline, and basic monitoring. The pack is quoted. Only the infrastructure audit and cloud cost audit are free.",
    },
    {
      question: "Do you offer 24/7 support?",
      answer:
        "Round-the-clock monitoring is available when the scope names the channel and response window. It is not the default. Jaipur hours are Monday to Saturday, 10:00 to 19:00. Hours outside that are written into the scope.",
    },
    {
      question: "When do we need Kubernetes instead of simple hosting?",
      answer:
        "Kubernetes helps when several services must scale independently. A single site or small API is often better on a managed container host or a virtual machine. We recommend the smaller option when a cluster adds load without a matching benefit.",
    },
    {
      question: "What is included in the free infrastructure audit?",
      answer:
        "We review repositories, environments, access, backups, and the cloud bill if you share it. You get a note on what is fragile and what can wait. The cloud cost audit is included and free. Later work is quoted. Continuing is optional.",
    },
    {
      question: "Can you certify us for ISO 27001 or SOC 2?",
      answer:
        "No. We do not issue ISO 27001 or SOC 2 certificates and we are not your auditor. DevSecOps work can support readiness with access reviews, scanning, and a gap list. A certification body still has to assess you.",
    },
    {
      question: "Do you work only in Jaipur?",
      answer:
        "The team is based in Jaipur. Delivery is remote across India and worldwide. A call and repository access are enough to start. Your location can change the cloud region we recommend.",
    },
    {
      question: "How is managed DevOps different from a one-time setup?",
      answer:
        "A one-time setup ends at handover of the pipeline, infrastructure code, and dashboards. Managed DevOps keeps that path healthy, applies scoped updates, and watches named alerts. You keep the accounts either way.",
    },
  ],
};
