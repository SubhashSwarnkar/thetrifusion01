import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

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
      templates: "Templates",
      estimate: "AI Estimator",
      planner: "Page Planner",
      timeline: "Timeline Calculator",
      team: "Team",
      faq: "FAQ",
      "discuss-project": "Discuss Project",
    };

    // Handle dynamic routes
    if (pathnames.includes(path)) {
      const index = pathnames.indexOf(path);
      if (index < pathnames.length - 1) {
        // It's a detail page, return the slug or ID
        return pathnames[index + 1].replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      }
    }

    return names[path] || path.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3" aria-label="Breadcrumb">
      <div className="container mx-auto px-5">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-500 hover:text-theme-purple transition duration-200"
            >
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName = getBreadcrumbName(name);

            return (
              <li key={name} className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-400 mx-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {isLast ? (
                  <span className="text-theme-purple font-medium" aria-current="page">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-500 hover:text-theme-purple transition duration-200"
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

