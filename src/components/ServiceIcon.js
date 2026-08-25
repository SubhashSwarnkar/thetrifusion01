export default function ServiceIcon({ slug, className = "w-5 h-5" }) {
  const props = {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (slug) {
    case "software-development":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l3 3-3 3m5 0h3M5 7h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
        </svg>
      );
    case "website-development":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zM3.75 9h16.5" />
        </svg>
      );
    case "mobile-app-development":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 3.75h4M8.25 3.75h7.5A1.5 1.5 0 0117.25 5.25v13.5a1.5 1.5 0 01-1.5 1.5H8.25a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5zM12 17.25h.01" />
        </svg>
      );
    case "ui-ux-design":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 19.5l4.5-1.5 9.75-9.75a2.121 2.121 0 10-3-3L6 15l-1.5 4.5z" />
        </svg>
      );
    case "graphic-design":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 6.75h15M4.5 12h15M4.5 17.25h9" />
        </svg>
      );
    case "digital-marketing":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 17l6-6 4 4 8-8M15 7h6v6" />
        </svg>
      );
    case "branding":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h.01M5.25 4.5h13.5A1.75 1.75 0 0120.5 6.25v11.5A1.75 1.75 0 0118.75 19.5H5.25A1.75 1.75 0 013.5 17.75V6.25A1.75 1.75 0 015.25 4.5z" />
        </svg>
      );
    case "rpa":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 9h6v6H9zM12 3v3M12 18v3M3 12h3M18 12h3" />
        </svg>
      );
    case "business-modernization":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 19.5l7.5-15 7.5 15M8 14h8" />
        </svg>
      );
    case "salesforce":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 15a4 4 0 114.47-5.95A4.5 4.5 0 1117 16H7z" />
        </svg>
      );
    case "ai-development":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.5v2M12 17.5v2M4.5 12h2M17.5 12h2M7.05 7.05l1.4 1.4M15.55 15.55l1.4 1.4M7.05 16.95l1.4-1.4M15.55 8.45l1.4-1.4M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
        </svg>
      );
    case "devops":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317a1.724 1.724 0 013.35 0l.31.9a1.724 1.724 0 002.573 1.017l.83-.48a1.724 1.724 0 012.37 1.724l-.31.9a1.724 1.724 0 001.018 2.573l.9.31a1.724 1.724 0 010 3.35l-.9.31a1.724 1.724 0 00-1.017 2.573l.48.83a1.724 1.724 0 01-1.724 2.37l-.9-.31a1.724 1.724 0 00-2.573 1.018l-.31.9a1.724 1.724 0 01-3.35 0l-.31-.9a1.724 1.724 0 00-2.573-1.018l-.83.48a1.724 1.724 0 01-2.37-1.724l.31-.9a1.724 1.724 0 00-1.018-2.573l-.9-.31a1.724 1.724 0 010-3.35l.9-.31a1.724 1.724 0 001.017-2.573l-.48-.83a1.724 1.724 0 011.724-2.37l.9.31a1.724 1.724 0 002.573-1.018l.31-.9zM12 15a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      );
    case "on-demand":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h10" />
        </svg>
      );
  }
}
