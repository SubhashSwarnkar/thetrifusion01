import { isNoindexCitySolutionSlug } from "../cityLandingRobots";
import { websiteCityLandings } from "./website";
import { softwareCityLandings } from "./software";
import { mobileCityLandings } from "./mobile";
import { ecommerceCityLandings } from "./ecommerce";
import { digitalMarketingCityLandings } from "./digitalMarketing";
import { fintechCityLandings } from "./fintech";

/** Live city landings: Jaipur HQ only. Other cities 301 via solutionRedirects. */
export const cityServiceLandings = [
  ...websiteCityLandings,
  ...softwareCityLandings,
  ...mobileCityLandings,
  ...ecommerceCityLandings,
  ...digitalMarketingCityLandings,
  ...fintechCityLandings,
].filter((page) => !isNoindexCitySolutionSlug(page.slug));

export const CITY_LANDING_SLUGS = cityServiceLandings.map((page) => page.slug);
