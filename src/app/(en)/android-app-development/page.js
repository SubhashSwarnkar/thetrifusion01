import { permanentRedirect } from "next/navigation";

/** Legacy bare path — permanently redirect to the indexed service URL. */
export default function LegacyAndroidAppDevelopmentRedirect() {
  permanentRedirect("https://thetrifusion.in/services/android-app-development");
}
