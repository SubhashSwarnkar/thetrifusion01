/**
 * EmailJS Gmail service → thetrifusion@gmail.com
 * Public key is expected in the browser; restrict allowed domains in EmailJS.
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
      "template_9e3g7aa",
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
