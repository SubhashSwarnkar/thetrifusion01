"use client";

import emailjs from "@emailjs/browser";
import { getEmailJsConfig, withEmailJsDefaults } from "lib/emailjsConfig";

export async function sendSiteEmail(templateParams) {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();
  const params = withEmailJsDefaults(templateParams);

  const result = await emailjs.send(
    serviceId,
    templateId,
    params,
    publicKey
  );

  if (result?.status && result.status !== 200) {
    throw new Error("Failed to send email.");
  }

  return result;
}
