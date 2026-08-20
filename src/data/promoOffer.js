export const AWS_PROMO_OFFER = {
  id: "aws-marketplace-9999-aug2026",
  queryValue: "aws-marketplace",
  storageKey: "trifusion_promo_aws_aug2026",
  badge: "Exclusive AWS Partner Offer — Limited Time",
  deadlineLabel: "Offer ends 30 August 2026",
  title: "Get Your SaaS / Product Listed on AWS Marketplace",
  subtitle:
    "Claim the deadline offer: AWS Marketplace listing plus AI integrations and white-label web & mobile apps — starting at ₹9,999.",
  priceLabel: "Starting at",
  price: "₹9,999",
  priceSuffix: "onwards",
  benefits: [
    "Complete SaaS, AMI & Container listing on AWS Marketplace",
    "Advanced AI integrations & automated workflows",
    "Custom white-label web & mobile apps included",
  ],
  ctaLabel: "Claim Your Spot Now",
  formPrefill: {
    company: "AWS Marketplace Offer Enquiry",
    projectIdea: `[AWS Marketplace Offer — ₹9,999 onwards | Deadline: 30 August 2026]

I am interested in this exclusive package:
• Complete SaaS, AMI & Container listing on AWS Marketplace
• Advanced AI integrations & automated workflows
• Custom white-label web & mobile apps

Please contact me with next steps, timeline, and how to proceed.`,
  },
};

export function getOfferPrefill(offerParam) {
  if (offerParam === AWS_PROMO_OFFER.queryValue) {
    return AWS_PROMO_OFFER.formPrefill;
  }
  return null;
}
