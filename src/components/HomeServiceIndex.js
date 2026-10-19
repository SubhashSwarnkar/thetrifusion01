import Link from "next/link";

const GROUPS = [
  {
    heading: "Websites, design, and demand",
    items: [
      {
        href: "/services/website-development",
        label: "website development company in Jaipur",
        note: "company sites from ₹15,000",
      },
      {
        href: "/services/ui-ux-design",
        label: "UI/UX design company in Jaipur",
        note: "Figma flows from ₹20,000",
      },
      {
        href: "/services/graphic-design",
        label: "graphic design company in Jaipur",
        note: "campaign kits from ₹10,000",
      },
      {
        href: "/services/branding",
        label: "branding agency in Jaipur",
        note: "logo and guidelines from ₹30,000",
      },
      {
        href: "/services/digital-marketing",
        label: "digital marketing company in India",
        note: "SEO and ads from ₹15,000",
      },
    ],
  },
  {
    heading: "Apps and cloud",
    items: [
      {
        href: "/services/ios-app-development",
        label: "iOS app development company in India",
        note: "App Store-first from ₹2,50,000",
      },
      {
        href: "/services/android-app-development",
        label: "Android app development company in Jaipur",
        note: "Play Store-first from ₹2,50,000",
      },
      {
        href: "/services/ai-development",
        label: "AI development company in India",
        note: "assistants with a human step, from ₹2,00,000",
      },
      {
        href: "/services/devops",
        label: "DevOps services in Jaipur",
        note: "CI/CD and cloud, audit first",
      },
      {
        href: "/services/on-demand",
        label: "hire dedicated developers in India",
        note: "named React, Node, or mobile seats",
      },
    ],
  },
  {
    heading: "Ops software and rails",
    items: [
      {
        href: "/services/software-development",
        label: "custom software development company in India",
        note: "MVPs from ₹1,00,000",
      },
      {
        href: "/services/rpa",
        label: "RPA services company in India",
        note: "invoice and Tally bots from ₹50,000",
      },
      {
        href: "/services/salesforce",
        label: "Salesforce implementation company in India",
        note: "Flows on an org you already pay for",
      },
      {
        href: "/services/business-modernization",
        label: "business modernization in India",
        note: "spreadsheet cutovers from ₹1,50,000",
      },
      {
        href: "/services/mlm-crm-development",
        label: "MLM software development company in India",
        note: "unilevel CRM from ₹3,50,000",
      },
      {
        href: "/services/ev-charging-app-development",
        label: "EV charging app development in India",
        note: "OCPP/OCPI CMS from ₹4,50,000",
      },
    ],
  },
  {
    heading: "BBPS, AEPS, DMT, recharge",
    items: [
      {
        href: "/services/fintech-app-development/bbps-software",
        label: "BBPS software development",
        note: "Bharat BillPay panels from ₹99,999",
      },
      {
        href: "/services/fintech-app-development/aeps-software",
        label: "AEPS software development",
        note: "Aadhaar-enabled retailer software",
      },
      {
        href: "/services/fintech-app-development/dmt-software",
        label: "DMT software development",
        note: "domestic money transfer panels",
      },
      {
        href: "/services/fintech-app-development/recharge-software",
        label: "recharge software development",
        note: "mobile/DTH top-up panels",
      },
    ],
  },
];

export default function HomeServiceIndex() {
  return (
    <section
      id="home-service-index"
      className="container mx-auto px-5 py-16"
    >
      <h2 className="text-3xl sm:text-4xl font-black text-theme-blue tracking-tight mb-3">
        Software, websites, and apps from Jaipur
      </h2>
      <p className="text-gray-600 font-light max-w-3xl mb-8 leading-relaxed">
        TheTriFusion is a software company in Jaipur. These are the live
        service pages — not ads landings — with published starting prices in
        INR. Open the one that matches the job.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {GROUPS.map((group) => (
          <div key={group.heading}>
            <h3 className="text-lg font-bold text-theme-blue mb-3">
              {group.heading}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="font-semibold text-theme-purple hover:underline"
                  >
                    {item.label}
                  </Link>
                  <span> — {item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
