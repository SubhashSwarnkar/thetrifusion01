import { permanentRedirect } from "next/navigation";

/** Legacy bare path — permanently redirect to the indexed service URL. */
export default function LegacyWebDevelopmentRedirect() {
  permanentRedirect("https://thetrifusion.in/services/website-development");
}
