"use client";

import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const SPECIALIZED = [
  {
    title: "Fintech — BBPS / AEPS / DMT",
    description:
      "Bill-pay, Aadhaar banking, and remittance software for operators — not a generic banking brochure site.",
    href: "/services/fintech-app-development",
  },
  {
    title: "EV charging (OCPI / OCPP)",
    description:
      "Maps, sessions, and roaming-ready stacks. See PlugOne live before you brief us.",
    href: "/services/ev-charging-app-development",
  },
  {
    title: "MLM CRM",
    description:
      "Compensation plans, genealogy, wallets, and payouts scoped for network businesses.",
    href: "/services/mlm-crm-development",
  },
  {
    title: "CRM & ERP tools",
    description:
      "Ops panels, inventory, and field workflows tailored to how your team actually works.",
    href: "/services/crm-erp-development",
  },
];

export default function SpecializedSolutions() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <Fade direction="up" triggerOnce>
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
              className="inline-flex items-center self-start lg:self-auto text-theme-purple font-bold hover:underline"
            >
              All solutions →
            </Link>
          </div>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIALIZED.map((item, index) => (
            <Fade key={item.href} direction="up" delay={index * 80} triggerOnce>
              <Link
                href={item.href}
                className="group block h-full rounded-2xl border border-gray-100 bg-white p-6 hover:border-theme-purple/40 hover:shadow-md transition-all"
              >
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
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
