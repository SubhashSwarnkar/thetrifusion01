"use client";

import { useEffect } from "react";
import { captureAttribution } from "utils/attribution";

/** First-touch UTM / referrer capture for lead forms. */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
