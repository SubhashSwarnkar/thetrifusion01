import { NextResponse } from "next/server";

const HOST = "thetrifusion.in";
const KEY = "trifusion-indexnow-2026a1b2c3d4e5";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const urls = Array.isArray(body.urls) ? body.urls.filter(Boolean) : [];
    if (!urls.length) {
      return NextResponse.json({ error: "urls required" }, { status: 400 });
    }
    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: urls.slice(0, 100),
    };
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    return NextResponse.json({ ok: res.ok, status: res.status, body: text, submitted: payload.urlList.length });
  } catch (error) {
    return NextResponse.json({ error: error.message || "IndexNow failed" }, { status: 500 });
  }
}
