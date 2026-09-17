import { adsenseSlots } from "lib/adsenseSlots";

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-M8RQSNHN";
export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1703426564054952";
export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18407666983";
export const GOOGLE_ADS_LEAD_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL || "Su6WCLOl9eYcEKfquslE";
/** Google AdSense publisher client (site ownership / ads). */
export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-3861153173590764";
/** Display units — paste slot IDs in `adsenseSlots.js` (env can override). */
export const ADSENSE_SLOT_BLOG_TOP =
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_TOP || adsenseSlots.top || "";
export const ADSENSE_SLOT_BLOG_SIDEBAR =
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_SIDEBAR ||
  adsenseSlots.sidebar ||
  "";
export const ADSENSE_SLOT_BLOG_BOTTOM =
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_BOTTOM ||
  adsenseSlots.bottom ||
  "";
/** When true (default), enable Auto ads only on blog article pages. */
export const ADSENSE_BLOG_AUTO_ADS =
  (process.env.NEXT_PUBLIC_ADSENSE_BLOG_AUTO_ADS || "true").toLowerCase() !==
  "false";
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "";
