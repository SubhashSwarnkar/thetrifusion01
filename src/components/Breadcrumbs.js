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
      "ecommerce-development": "Ecommerce Development",
      "thank-you": "Thanks",
      "mlm-crm-development": "MLM CRM",
      "fintech-app-development": "BBPS AEPS DMT",
      "bbps-software": "BBPS software",
      "aeps-software": "AEPS software",
      "dmt-software": "DMT software",
      "recharge-software": "Recharge software",
      sitemap: "Sitemap",
      "ev-charging-app-development": "EV Charging CMS",
      "crm-erp-development": "CRM & ERP",
      "software-development": "Software Development",
      "website-development": "Website Development",
      "mobile-app-development": "Mobile Apps",
      "ios-app-development": "iOS Apps",
      "android-app-development": "Android Apps",
      "ai-development": "AI Development",
      devops: "DevOps & Cloud Services",
      "ui-ux-design": "UI/UX Design",
      "graphic-design": "Graphic Design",
      branding: "Branding",
      "digital-marketing": "Digital Marketing",
      rpa: "RPA",
      salesforce: "Salesforce",
      "business-modernization": "Business Modernization",
      "on-demand": "On-Demand Developers",
      "website-development-company-bhilwara": "Bhilwara Websites",
      "website-development-company-udaipur": "Udaipur Websites",
      "website-development-company-kota": "Kota Websites",
      "website-development-company-ajmer": "Ajmer Websites",
      "website-development-company-jaipur": "Jaipur Websites",
      "website-development-company-delhi": "Delhi NCR Websites",
      "website-development-company-mumbai": "Mumbai Websites",
      "website-development-company-bangalore": "Bangalore Websites",
      "website-development-company-jodhpur": "Jodhpur Websites",
      "custom-software-development-jaipur": "Jaipur Custom Software",
      "software-development-company-delhi": "Delhi NCR Software",
      "software-development-company-mumbai": "Mumbai Software",
      "software-development-company-bangalore": "Bangalore Software",
      "software-development-company-jodhpur": "Jodhpur Software",
      "mobile-app-development-company-jaipur": "Jaipur Mobile Apps",
      "mobile-app-development-company-delhi": "Delhi NCR Mobile Apps",
      "mobile-app-development-company-mumbai": "Mumbai Mobile Apps",
      "mobile-app-development-company-bangalore": "Bangalore Mobile Apps",
      "mobile-app-development-company-jodhpur": "Jodhpur Mobile Apps",
      "ecommerce-website-development-jaipur": "Jaipur Ecommerce",
      "ecommerce-website-development-delhi": "Delhi NCR Ecommerce",
      "ecommerce-website-development-mumbai": "Mumbai Ecommerce",
      "ecommerce-website-development-bangalore": "Bangalore Ecommerce",
      "ecommerce-website-development-jodhpur": "Jodhpur Ecommerce",
      "digital-marketing-company-jaipur": "Jaipur Digital Marketing",
      "digital-marketing-company-delhi": "Delhi NCR Digital Marketing",
      "digital-marketing-company-mumbai": "Mumbai Digital Marketing",
      "digital-marketing-company-bangalore": "Bangalore Digital Marketing",
      "digital-marketing-company-jodhpur": "Jodhpur Digital Marketing",
      "fintech-app-development-jaipur": "Jaipur Fintech",
      "fintech-app-development-delhi": "Delhi NCR Fintech",
      "fintech-app-development-mumbai": "Mumbai Fintech",
      "fintech-app-development-bangalore": "Bangalore Fintech",
      "fintech-app-development-jodhpur": "Jodhpur Fintech",
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

