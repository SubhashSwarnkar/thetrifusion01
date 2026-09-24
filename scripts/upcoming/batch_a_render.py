#!/usr/bin/env python3
"""Render Batch A football posts into src/data/upcomingEventsBatchA.js and OG SVGs."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OG_DIR = ROOT / "public" / "images" / "blog-og"
OUT = ROOT / "src" / "data" / "upcomingEventsBatchA.js"

LIVE = [
    ("/blog/liverpool-vs-man-city-11-oct-2026-preview", "Liverpool vs Man City on 11 October"),
    ("/blog/man-united-vs-tottenham-10-oct-2026-preview", "Man United vs Tottenham on 10 October"),
    ("/blog/arsenal-vs-lille-ucl-13-oct-2026", "Arsenal vs Lille in the Champions League"),
    ("/blog/chelsea-vs-tottenham-24-oct-2026-preview", "Chelsea vs Tottenham on 24 October"),
    ("/blog/bayern-vs-arsenal-ucl-21-oct-2026", "Bayern vs Arsenal in the Champions League"),
    ("/blog/psg-vs-barcelona-ucl-20-oct-2026", "PSG vs Barcelona in the Champions League"),
    ("/blog/liverpool-vs-villarreal-ucl-20-oct-2026", "Liverpool vs Villarreal in the Champions League"),
    ("/blog/atletico-vs-man-united-ucl-13-oct-2026", "Atletico vs Man United in the Champions League"),
    ("/blog/roma-vs-real-madrid-ucl-14-oct-2026", "Roma vs Real Madrid in the Champions League"),
    ("/blog/man-city-vs-psg-ucl-14-oct-2026-preview", "Man City vs PSG in the Champions League"),
    ("/blog/galatasaray-vs-barcelona-ucl-13-oct-2026", "Galatasaray vs Barcelona in the Champions League"),
    ("/blog/uefa-nations-league-why-trending-explained", "why UEFA competition names trend in search"),
]


def words(html: str) -> int:
    text = re.sub(r"<[^>]+>", " ", html)
    return len(re.findall(r"[A-Za-z0-9']+", text))


def og_svg(slug: str, line1: str, line2: str, hue: int) -> None:
    def e(s: str) -> str:
        return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="hsl({hue},55%,14%)"/>
      <stop offset="55%" stop-color="hsl({(hue + 28) % 360},48%,22%)"/>
      <stop offset="100%" stop-color="hsl({(hue + 55) % 360},42%,28%)"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="64" y="72" fill="hsl({hue},80%,72%)" font-family="system-ui,sans-serif" font-size="26" font-weight="600">TheTriFusion Blog</text>
  <text x="64" y="250" fill="#f8fafc" font-family="system-ui,sans-serif" font-size="46" font-weight="800"><tspan x="64" dy="0">{e(line1)}</tspan><tspan x="64" dy="58">{e(line2)}</tspan></text>
  <text x="64" y="560" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="22">thetrifusion.in/blog/{e(slug)}</text>
</svg>
'''
    OG_DIR.mkdir(parents=True, exist_ok=True)
    (OG_DIR / f"{slug}.svg").write_text(svg)


def linkify(pairs):
    return ", ".join(f'<a href="{h}">{lab}</a>' for h, lab in pairs)


def block_time(p, rows):
    return f"""      <h2>{p["time_h2"]}</h2>
      <ul>
{rows}
      </ul>
      <p>{p["time_note"]}</p>"""


def block_watch(p):
    return f"""      <h2>{p["watch_h2"]}</h2>
      <h3>India</h3>
      <p>{p["india"]}</p>
      <h3>United Kingdom</h3>
      <p>{p["uk"]}</p>
      <h3>United States</h3>
      <p>{p["us"]}</p>
      <p>{p["safety"]}</p>"""


def block_sections(p):
    parts = []
    for heading, paras in p["sections"]:
        body = "\n".join(f"      <p>{para}</p>" for para in paras)
        parts.append(f"      <h2>{heading}</h2>\n{body}")
    return "\n".join(parts)


def block_expect(p, expect):
    return f"""      <h2>{p["expect_h2"]}</h2>
      <ul>
{expect}
      </ul>
      <p>{p["expect_note"]}</p>"""


def block_checks(checks):
    return f"""      <h2>Practical checklist</h2>
      <ul>
{checks}
      </ul>"""


def render_post(p: dict) -> str:
    live = p["live_links"]
    rows = "\n".join(f"      <li><strong>{a}:</strong> {b}</li>" for a, b in p["rows"])
    faqs = "\n".join(f"      <h3>{q}</h3><p>{a}</p>" for q, a in p["faqs"])
    expect = "\n".join(f"      <li>{item}</li>" for item in p["expect"])
    checks = "\n".join(f"      <li>{item}</li>" for item in p["checks"])
    time_b = block_time(p, rows)
    watch_b = block_watch(p)
    sect_b = block_sections(p)
    expect_b = block_expect(p, expect)
    check_b = block_checks(checks)
    layout = p.get("layout", "story")
    if layout == "clock":
        middle = "\n".join([time_b, watch_b, sect_b, expect_b, check_b])
    elif layout == "broadcast":
        middle = "\n".join([watch_b, time_b, sect_b, check_b, expect_b])
    elif layout == "ground":
        middle = "\n".join([sect_b, watch_b, time_b, expect_b, check_b])
    else:
        middle = "\n".join([sect_b, time_b, expect_b, watch_b, check_b])
    more = ""
    if p.get("more_paras"):
        body = "\n".join(f"      <p>{para}</p>" for para in p["more_paras"])
        more = f"\n      <h2>{p.get('more_h2', 'Reading the week around this match')}</h2>\n{body}\n"
    html = f"""
      <p>{p["opener"]}</p>
      <p><em>Verification note (TheTriFusion editorial):</em> {p["verify"]}</p>
{middle}{more}
      <p>Related reading already on TheTriFusion: {linkify(live)}. {p.get("sib_sentence", "")} For a calendar product or club-site build, see <a href="/services/digital-marketing">digital marketing</a>, <a href="/services/web-development">web development</a>, and <a href="{p.get("hub", "/ecommerce-development")}">{p.get("hub_label", "ecommerce development")}</a>.</p>
      <h2>FAQ</h2>
{faqs}
      <p>{p["close"]}</p>
"""
    return html


def js_post(p: dict, content: str) -> str:
    event = p["event"]
    loc = event["location"]
    loc_js = ", ".join(
        f"{k}: {json.dumps(v)}" for k, v in loc.items()
    )
    tags = ", ".join(json.dumps(t) for t in p["tags"])
    return f"""  {{
    id: {p["id"]},
    slug: {json.dumps(p["slug"])},
    title: {json.dumps(p["title"])},
    metaTitle: {json.dumps(p["metaTitle"])},
    excerpt: {json.dumps(p["excerpt"])},
    content: `{content.strip()}`,
    category: "news",
    tags: [{tags}],
    imageUrl: {json.dumps("/images/blog-og/" + p["slug"] + ".svg")},
    date: "2026-09-24",
    updatedAt: "2026-09-24T16:40:00+05:30",
    readTime: "16 min read",
    author: "TheTriFusion Team",
    featured: true,
    relatedServiceSlugs: ["digital-marketing", "web-development"],
    event: {{
      type: {json.dumps(event["type"])},
      name: {json.dumps(event["name"])},
      startDate: {json.dumps(event["startDate"])},
      organizer: {json.dumps(event["organizer"])},
      location: {{ {loc_js} }},
    }},
  }}"""


def main(posts):
    chunks = []
    problems = []
    openers = []
    for p in posts:
        content = render_post(p)
        # template literal safety
        if "`" in content or "${" in content:
            problems.append(f"{p['slug']}: unsafe template chars")
        n = words(content)
        if n < 1400:
            problems.append(f"SHORT {p['slug']}: {n} words")
        if len(p["title"]) > 60:
            problems.append(f"TITLE {p['slug']}: {len(p['title'])} '{p['title']}'")
        if not (130 <= len(p["excerpt"]) <= 170):
            problems.append(f"EXCERPT {p['slug']}: {len(p['excerpt'])} '{p['excerpt']}'")
        if p["opener"][:80] in openers:
            problems.append(f"DUP OPENER {p['slug']}")
        openers.append(p["opener"][:80])
        og_svg(p["slug"], p["og1"], p["og2"], p["hue"])
        chunks.append(js_post(p, content))
        print(f"{p['id']} {p['slug']} words={n} title={len(p['title'])} excerpt={len(p['excerpt'])}")
    if len(posts) != 20:
        problems.append(f"count {len(posts)}")
    ids = [p["id"] for p in posts]
    if ids != list(range(158, 178)):
        problems.append(f"ids {ids}")
    header = """/**
 * Batch A — upcoming football events (ids 158–177 only).
 * Dates checked against Premier League, UEFA, club, Bundesliga, Serie A,
 * AIFF and Indian broadcast reports. Unconfirmed items are labelled in copy.
 */
export const upcomingEventsBatchAPosts = [
"""
    text = header + ",\n".join(chunks) + "\n];\n"
    OUT.write_text(text)
    print("WROTE", OUT, "bytes", OUT.stat().st_size)
    if problems:
        print("PROBLEMS:")
        for item in problems:
            print(" -", item)
        raise SystemExit(1)


if __name__ == "__main__":
    from batch_a_data import POSTS  # noqa: E402

    main(POSTS)
