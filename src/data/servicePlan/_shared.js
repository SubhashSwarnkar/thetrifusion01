/**
 * Shared facts for the 12 Oct 2026 per-service SEO plan.
 * Only NAP, published /pricing figures, named live projects, and named
 * team members already in the repo. Do not invent stats, reviews, or prices.
 */

export const NAP_LINE =
  "5th Floor, Amoro Building, Patrakar Colony, Jaipur, Rajasthan 302020 · +91 63781 33780 · Mon–Sat 10 AM–7 PM IST";

export const MAPS_SEARCH =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Trifusion Infotech Private Limited, 5th Floor, Amoro Building, Patrakar Colony, Jaipur, Rajasthan 302020, India"
  );

/** Official sources cited on service pages. */
export const SOURCES = {
  rbi: "https://www.rbi.org.in/",
  npci: "https://www.npci.org.in/",
  npciBbps: "https://www.npci.org.in/what-we-do/bharat-billpay/product-overview",
  npciAeps: "https://www.npci.org.in/what-we-do/aeps/product-overview",
  meity: "https://www.meity.gov.in/",
  dpdAct: "https://www.indiacode.nic.in/handle/123456789/20029",
  consumerAffairs: "https://consumeraffairs.nic.in/",
  directSellingRules:
    "https://consumeraffairs.nic.in/sites/default/files/file-uploads/latestnews/Consumer%20Protection%20%28Direct%20Selling%29%20Rules%2C%202021.pdf",
  ocpp: "https://openchargealliance.org/protocols/ocpp/",
  oca: "https://openchargealliance.org/",
  ocpi: "https://evroaming.org/",
  certIn: "https://www.cert-in.org.in/",
};

/** Names and roles from json/landingPageData.js TeamMembers. No bios or LinkedIn in repo. */
export const TEAM = {
  ceo: "Amardeep, CEO",
  pm: "Manvender, Project Manager",
  frontend: "Rahul and Subhash, front-end developers",
  backend: "Anjali and Ajay, back-end developers",
  mobile: "Ashutosh and Karan, mobile developers",
  design: "Aradhana, UI/UX designer",
};

export const LIVE = {
  plugone: "[PlugOne](https://plugone.in)",
  dairy: "[Connect Dairy](https://connectdairy.in)",
  daily: "[DailyConcepts India](https://dailyconceptsindia.com)",
  atharv: "[Atharv Narayan](https://atharvnarayan.in)",
};
