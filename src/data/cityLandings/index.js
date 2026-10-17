import { websiteCityLandings } from "./website";
import { softwareCityLandings } from "./software";
import { mobileCityLandings } from "./mobile";
import { ecommerceCityLandings } from "./ecommerce";
import { digitalMarketingCityLandings } from "./digitalMarketing";
import { fintechCityLandings } from "./fintech";

export const cityServiceLandings = [
  ...websiteCityLandings,
  ...softwareCityLandings,
  ...mobileCityLandings,
  ...ecommerceCityLandings,
  ...digitalMarketingCityLandings,
  ...fintechCityLandings,
];

export const CITY_LANDING_SLUGS = cityServiceLandings.map((page) => page.slug);
