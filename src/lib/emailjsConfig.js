/**
 * EmailJS delivery inbox (can stay Gmail until Workspace mailbox is live).
 * Public contact on the site is contact@thetrifusion.in — set up forwarding/Workspace separately.
 */
export const EMAILJS_TO_EMAIL = "thetrifusion@gmail.com";

export function getEmailJsConfig() {
  return {
    serviceId:
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      process.env.EMAILJS_SERVICE_ID ||
      "service_vbs5oio",
    templateId:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      process.env.EMAILJS_TEMPLATE_ID ||
      "template_7nvbirx",
    publicKey:
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
      process.env.EMAILJS_PUBLIC_KEY ||
      process.env.EMAILJS_USER_ID ||
      "n0euqkm11TGyLICcv",
    toEmail:
      process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL ||
      process.env.EMAILJS_TO_EMAIL ||
      EMAILJS_TO_EMAIL,
  };
}

export function withEmailJsDefaults(templateParams = {}) {
  const { toEmail } = getEmailJsConfig();
  return {
    to_email: toEmail,
    to_name: "thetrifusion",
    ...templateParams,
  };
}
