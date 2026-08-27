"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  const getBreadcrumbName = (path) => {
    const names = {
      blog: "Blog",
      services: "Services",
      portfolio: "Portfolio",
      project: "Portfolio",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      estimate: "AI Estimator",
      planner: "Page Planner",
      timeline: "Timeline Calculator",
      team: "Team",
      faq: "FAQ",
      "discuss-project": "Discuss Project",
      solutions: "Solutions",
      "web-development": "Web Development",
      "android-app-development": "Android Apps",
      "ios-app-development": "iOS Apps",
      "white-label-development": "White-label",
      "thank-you": "Thanks",
      "mlm-crm-development": "MLM CRM",
      "fintech-app-development": "Fintech Apps",
      "ev-charging-app-development": "EV Charging Apps",
      "crm-erp-development": "CRM & ERP",
      "software-development": "Software Development",
      "website-development": "Website Development",
      "mobile-app-development": "Mobile Apps",
      "website-development-company-bhilwara": "Bhilwara Websites",
      "web-development-company-jaipur": "Jaipur Web Development",
      "crm-erp-software-development": "CRM & ERP",
      "custom-software-development-company": "Custom Software",
      "ecommerce-website-development": "Ecommerce Websites",
      "mobile-app-development-company": "Mobile App Company",
    };

    return names[path] || path.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <nav className="bg-white/50 backdrop-blur-sm pt-28 pb-6 border-b border-gray-100" aria-label="Breadcrumb">
      <div className="container mx-auto px-5">
        <ol className="flex items-center flex-wrap gap-2 text-xs uppercase tracking-widest font-bold">
          <li>
            <Link
              href="/"
              className="text-gray-400 hover:text-theme-purple transition duration-300 flex items-center gap-2"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName = getBreadcrumbName(name);

            return (
              <li key={name} className="flex items-center">
                <span className="text-gray-300 mx-1 font-light">/</span>
                {isLast ? (
                  <span className="text-theme-purple px-2 py-1 rounded-md bg-light-theme-purple/20" aria-current="page">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    href={routeTo}
                    className="text-gray-400 hover:text-theme-purple transition duration-300"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

