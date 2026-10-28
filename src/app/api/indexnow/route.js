import { NextResponse } from "next/server";
import {
  INDEXNOW_HOST,
  INDEXNOW_KEY,
  INDEXNOW_KEY_LOCATION,
} from "data/indexnowKey";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const urls = Array.isArray(body.urls) ? body.urls.filter(Boolean) : [];
    if (!urls.length) {
      return NextResponse.json({ error: "urls required" }, { status: 400 });
    }
    const payload = {
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList: urls.slice(0, 100),
    };
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    return NextResponse.json({
      ok: res.ok,
      status: res.status,
      body: text,
      submitted: payload.urlList.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "IndexNow failed" },
      { status: 500 }
    );
  }
}
