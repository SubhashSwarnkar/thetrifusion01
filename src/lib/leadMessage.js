export function buildLeadExtras(body) {
  return [
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
  ].join("\n");
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

  const extras = buildLeadExtras({ ...body, leadSource });
  const projectBlock = [
    isAwsOffer ? "AWS MARKETPLACE PROMO LEAD" : "",
    projectIdea,
    extras,
  ]
    .filter(Boolean)
    .join("\n\n");

  return {
    from_name: name,
    to_name: "thetrifusion",
    name,
    company,
    email,
    phone,
    projectIdea: projectBlock,
    reply_to: email,
    from_email: email,
    message: projectBlock,
  };
}
