import { permanentRedirect } from "next/navigation";

/** Legacy bare path — permanently redirect to the indexed service URL. */
export default function LegacyAiDevelopmentRedirect() {
  permanentRedirect("https://thetrifusion.in/services/ai-development");
}
