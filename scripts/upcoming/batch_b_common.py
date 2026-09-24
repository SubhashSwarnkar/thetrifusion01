"""Shared helpers for Batch B upcoming-event posts."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OG_DIR = ROOT / "public/images/blog-og"
OUT = ROOT / "src/data/upcomingEventsBatchB.js"


def words(html: str) -> int:
    return len(re.findall(r"[A-Za-z0-9']+", re.sub(r"<[^>]+>", " ", html)))


def make_og(slug: str, line1: str, line2: str, hue: int) -> str:
    def e(s: str) -> str:
        return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

    svg = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">\n'
        "  <defs>\n"
        '    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">\n'
        f'      <stop offset="0%" stop-color="hsl({hue},55%,14%)"/>\n'
        f'      <stop offset="55%" stop-color="hsl({(hue + 28) % 360},48%,22%)"/>\n'
        f'      <stop offset="100%" stop-color="hsl({(hue + 55) % 360},42%,28%)"/>\n'
        "    </linearGradient>\n"
        "  </defs>\n"
        '  <rect width="1200" height="630" fill="url(#g)"/>\n'
        f'  <text x="64" y="72" fill="hsl({hue},80%,72%)" font-family="system-ui,sans-serif" font-size="26" font-weight="600">TheTriFusion Blog</text>\n'
        f'  <text x="64" y="250" fill="#f8fafc" font-family="system-ui,sans-serif" font-size="48" font-weight="800"><tspan x="64" dy="0">{e(line1)}</tspan><tspan x="64" dy="58">{e(line2)}</tspan></text>\n'
        f'  <text x="64" y="560" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="22">thetrifusion.in/blog/{e(slug)}</text>\n'
        "</svg>\n"
    )
    OG_DIR.mkdir(parents=True, exist_ok=True)
    (OG_DIR / f"{slug}.svg").write_text(svg)
    return f"/images/blog-og/{slug}.svg"


def js_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def render(posts: list[dict]) -> str:
    chunks = []
    for post in posts:
        event = post["event"]
        loc = event["location"]
        loc_lines = [f'        name: {js_string(loc["name"])},']
        if loc.get("addressLocality"):
            loc_lines.append(f'        addressLocality: {js_string(loc["addressLocality"])},')
        if loc.get("addressRegion"):
            loc_lines.append(f'        addressRegion: {js_string(loc["addressRegion"])},')
        loc_lines.append(f'        addressCountry: {js_string(loc["addressCountry"])},')
        end = ""
        if event.get("endDate"):
            end = f'\n      endDate: {js_string(event["endDate"])},'
        tags = ", ".join(js_string(t) for t in post["tags"])
        services = ", ".join(js_string(s) for s in post["relatedServiceSlugs"])
        chunks.append(
            "  {\n"
            f"    id: {post['id']},\n"
            f"    slug: {js_string(post['slug'])},\n"
            f"    title: {js_string(post['title'])},\n"
            f"    metaTitle: {js_string(post['metaTitle'])},\n"
            f"    excerpt: {js_string(post['excerpt'])},\n"
            f"    content: {js_string(post['content'])},\n"
            f"    category: \"news\",\n"
            f"    tags: [{tags}],\n"
            f"    imageUrl: {js_string(post['imageUrl'])},\n"
            f"    date: \"2026-09-24\",\n"
            f"    updatedAt: \"2026-09-24T16:10:00+05:30\",\n"
            f"    readTime: \"16 min read\",\n"
            f"    author: \"TheTriFusion Team\",\n"
            f"    featured: true,\n"
            f"    relatedServiceSlugs: [{services}],\n"
            "    event: {\n"
            f"      type: {js_string(event['type'])},\n"
            f"      name: {js_string(event['name'])},\n"
            f"      startDate: {js_string(event['startDate'])},{end}\n"
            f"      organizer: {js_string(event['organizer'])},\n"
            "      location: {\n"
            + "\n".join(loc_lines)
            + "\n      },\n"
            "    },\n"
            "  }"
        )
    body = ",\n".join(chunks)
    return (
        "/**\n"
        " * Batch B — cricket and other sports (not football).\n"
        " * Ids 178–197 only. Do not reuse ids from other blog data files.\n"
        " */\n"
        "export const upcomingEventsBatchBPosts = [\n"
        f"{body}\n"
        "];\n"
    )
