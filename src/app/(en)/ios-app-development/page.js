import { permanentRedirect } from "next/navigation";

/** Legacy bare path — permanently redirect to the indexed service URL. */
export default function LegacyIosAppDevelopmentRedirect() {
  permanentRedirect("https://thetrifusion.in/services/ios-app-development");
}
