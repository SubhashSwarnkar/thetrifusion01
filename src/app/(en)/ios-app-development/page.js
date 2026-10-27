import { permanentRedirect } from "next/navigation";

/** Legacy bare path — permanently redirect to the indexed service URL. */
export default function LegacyIosAppDevelopmentRedirect() {
  permanentRedirect("/services/ios-app-development");
}
