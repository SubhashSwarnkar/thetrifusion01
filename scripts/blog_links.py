"""Shared href rules for blog generators.

Future posts should link the live service URL, and a template-added block
must not anchor a service URL that the article already links.
"""
from __future__ import annotations

import re

CANONICAL_HREFS = {
    "/services/web-development": "/services/website-development",
    "/solutions/online-store-development": "/solutions/ecommerce-website-development",
}

SERVICE_HREF_RE = re.compile(r'href="(/services/[^"#?]+)')


def canonicalize_hrefs(html: str) -> str:
    text = html or ""
    for old, new in CANONICAL_HREFS.items():
        text = text.replace(f'href="{old}"', f'href="{new}"')
    return text


def service_hrefs(html: str) -> set[str]:
    found = set()
    for href in SERVICE_HREF_RE.findall(html or ""):
        found.add(CANONICAL_HREFS.get(href, href).rstrip("/") or "/")
    return found


def cap_service_anchors(existing_html: str, fragment: str) -> str:
    """Unwrap later <a> tags that repeat a /services/ URL already linked.

    Anchor text stays. Only template-added fragments should be passed as
    `fragment`; stored article copy is left unchanged by the caller.
    """
    seen = service_hrefs(existing_html)

    def repl(match: re.Match) -> str:
        href = match.group(1).split("#")[0].split("?")[0]
        href = CANONICAL_HREFS.get(href, href).rstrip("/") or "/"
        inner = match.group(2)
        if not href.startswith("/services/"):
            return match.group(0)
        if href in seen:
            return inner
        seen.add(href)
        canonical = CANONICAL_HREFS.get(match.group(1), match.group(1))
        return f'<a href="{canonical}">{inner}</a>'

    return re.sub(
        r'<a\s+href="([^"]+)">([^<]*)</a>',
        repl,
        fragment or "",
    )
