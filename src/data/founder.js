import { siteConfig, absoluteSiteUrl } from "../config/site.js";

/**
 * Named author/CEO from json/landingPageData.js TeamMembers.
 * Team page lists Amardeep as CEO only — no personal LinkedIn, years of
 * experience, or certifications are stored in this repo.
 */
export const FOUNDER = {
  name: "Amardeep",
  jobTitle: "CEO",
  imagePath: "/images/team/amardeep.png",
  profilePath: "/team",
  bio: "Amardeep is CEO of Trifusion Infotech Private Limited (TheTriFusion), a software development company in Jaipur, Rajasthan. The studio has operated since 2023 with a team of about ten developers and consultants.",
};

export function founderImageUrl() {
  return absoluteSiteUrl(FOUNDER.imagePath);
}

export function founderProfileUrl() {
  return absoluteSiteUrl(FOUNDER.profilePath);
}

export function whatsappMeUrl() {
  const digits = String(siteConfig.whatsappNumber || "").replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}
