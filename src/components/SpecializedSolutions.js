import React from "react";
import Link from "next/link";

const SPECIALIZED = [
  {
    title: "EV charging management software (CMS & app)",
    description:
      "OCPP/OCPI charging CMS for Indian CPOs. See the PlugOne case study before you brief us. From ₹4,50,000.",
    href: "/services/ev-charging-app-development",
    proof: {
      href: "/portfolio/plugone-ev-charging-platform",
      label: "PlugOne case study",
    },
  },
  {
    title: "Fintech app development",
    description:
      "BBPS, AEPS, DMT and recharge software — retailer, distributor and admin. From ₹99,999.",
    href: "/services/fintech-app-development",
  },
  {
    title: "MLM CRM development",
    description:
      "Unilevel CRM, genealogy, wallets, and payouts. We do not build pyramids. From ₹3,50,000.",
    href: "/services/mlm-crm-development",
  },
  {
    title: "Custom CRM development",
    description:
      "Pipelines, quotations and WhatsApp notes your sales team will use. From ₹3,00,000.",
    href: "/services/crm-erp-development",
    proof: {
      href: "/portfolio/connect-dairy-supply-chain",
      label: "Connect Dairy case study",
    },
  },
  {
    title: "DevOps & cloud",
    description:
      "CI/CD, Kubernetes and cloud for products you already run — start with a free infrastructure audit.",
    href: "/services/devops",
  },
  {
    title: "Business modernization",
    description:
      "Spreadsheet-to-software cutovers and legacy modernization, phased so ops keep running.",
    href: "/services/business-modernization",
  },
  {
    title: "Salesforce developers",
    description:
      "Flows, Apex/LWC and website or ERP integrations on an org you already pay for. From ₹80,000.",
    href: "/services/salesforce",
  },
  {
    title: "AI chatbot & AI agent development",
    description:
      "WhatsApp bots, RAG search and agents with a human review step. Pilot first. From ₹2,00,000.",
    href: "/services/ai-development",
  },
];

export default function SpecializedSolutions() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-light-theme-purple/40 text-theme-purple text-xs font-bold uppercase tracking-[0.18em] mb-4">
                Specialized solutions
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-theme-blue font-black tracking-tight mb-3">
                Niche products we also build
              </h2>
              <p className="text-gray-500 text-base sm:text-lg font-light leading-relaxed">
                These are deeper builds — kept here so the hero stays clear about
                our core: websites, apps, UI/UX, and marketing.
              </p>
            </div>
            <Link
              href="/solutions"
              prefetch={false}
              className="inline-flex items-center self-start lg:self-auto text-theme-purple font-bold hover:underline"
            >
              All solutions →
            </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIALIZED.map((item) => (
              <div
                key={item.href}
                className="group h-full rounded-2xl border border-gray-100 bg-white p-6 hover:border-theme-purple/40 hover:shadow-md transition-all"
              >
                <Link href={item.href} prefetch={false} className="block">
                  <h3 className="text-lg font-bold text-theme-blue mb-2 group-hover:text-theme-purple transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="text-sm font-semibold text-theme-purple">
                    Explore →
                  </span>
                </Link>
                {item.proof ? (
                  <p className="mt-3 text-sm">
                    <Link
                      href={item.proof.href}
                      prefetch={false}
                      className="font-semibold text-theme-blue hover:text-theme-purple underline-offset-2 hover:underline"
                    >
                      {item.proof.label}
                    </Link>
                  </p>
                ) : null}
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
