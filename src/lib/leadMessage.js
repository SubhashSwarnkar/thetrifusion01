export function buildLeadMessage(body) {
  const lines = [
    body.projectIdea || "",
    "",
    "--- Qualification ---",
    `Service: ${body.serviceInterest || "n/a"}`,
    `Budget: ${body.budgetRange || "n/a"}`,
    `Timeline: ${body.timeline || "n/a"}`,
    "",
    "--- Attribution ---",
    `Landing: ${body.landing_page || ""}`,
    `Referrer: ${body.referrer || ""}`,
    `utm_source: ${body.utm_source || ""}`,
    `utm_medium: ${body.utm_medium || ""}`,
    `utm_campaign: ${body.utm_campaign || ""}`,
    `utm_term: ${body.utm_term || ""}`,
    `utm_content: ${body.utm_content || ""}`,
    `gclid: ${body.gclid || ""}`,
    `lead_source: ${body.leadSource || "discuss_form"}`,
  ];
  return lines.join("\n");
}

export function buildLeadTemplateParams(body) {
  const name = String(body.name || "").trim();
  const company = String(body.company || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const projectIdea = String(body.projectIdea || "").trim();
  const leadSource = body.leadSource || "discuss_form";
  const isAwsOffer =
    leadSource === "aws_promo_offer" ||
    projectIdea.includes("[AWS Marketplace Offer");

  const message = buildLeadMessage({ ...body, projectIdea, leadSource });

  return {
    from_name: isAwsOffer
      ? `[AWS OFFER ₹9999] ${name} - ${company} (${phone} - ${email})`
      : `${name} - ${company} (${phone} - ${email})`,
    from_email: email,
    reply_to: email,
    user_name: name,
    user_company: company,
    user_email: email,
    user_phone: phone,
    message: isAwsOffer
      ? `AWS MARKETPLACE PROMO LEAD\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
      : `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
  };
}
