import { NextResponse } from "next/server";
import { getEmailJsConfig, withEmailJsDefaults } from "lib/emailjsConfig";
import { buildLeadTemplateParams } from "lib/leadMessage";

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 8;
const ipHits = new Map();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  ipHits.set(ip, hits);
  return hits.length > RATE_MAX;
}

function normalizePhone(phone) {
  return String(phone || "").replace(/[^\d+]/g, "");
}

async function sendEmailJs(templateParams) {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: withEmailJsDefaults(templateParams),
  };

  if (privateKey) {
    payload.accessToken = privateKey;
  }

  const response = await fetch(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "EmailJS request failed");
  }
}

export async function POST(request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again shortly." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot — bots fill this; humans never see it
    if (body.website || body.honeypot) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const email = String(body.email || "").trim();
    const phone = normalizePhone(body.phone);
    const projectIdea = String(body.projectIdea || "").trim();

    if (!name || !company || !email || !phone || !projectIdea) {
      return NextResponse.json(
        { ok: false, error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    const leadSource = body.leadSource || "discuss_form";
    const isAwsOffer =
      leadSource === "aws_promo_offer" ||
      projectIdea.includes("[AWS Marketplace Offer");

    const templateParams = buildLeadTemplateParams({
      ...body,
      name,
      company,
      email,
      phone,
      projectIdea,
      leadSource,
    });

    // Browser already delivered the mail when clientSent is true.
    // Server send is blocked unless EmailJS Account → Security
    // "Allow API for non-browser applications" is enabled.
    if (!body.clientSent) {
      await sendEmailJs(templateParams);
    }

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      const payload = {
        name,
        company,
        email,
        phone,
        projectIdea,
        serviceInterest: body.serviceInterest || "",
        budgetRange: body.budgetRange || "",
        timeline: body.timeline || "",
        leadSource,
        isAwsOffer,
        attribution: {
          landing_page: body.landing_page || "",
          referrer: body.referrer || "",
          utm_source: body.utm_source || "",
          utm_medium: body.utm_medium || "",
          utm_campaign: body.utm_campaign || "",
          utm_term: body.utm_term || "",
          utm_content: body.utm_content || "",
          gclid: body.gclid || "",
        },
        receivedAt: new Date().toISOString(),
      };

      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        // Webhook failures should not fail the lead response after EmailJS success
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "Failed to submit lead.",
      },
      { status: 500 }
    );
  }
}
