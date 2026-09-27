"""Shared href rules for blog generators.

Future posts should link the live service URL, and a template-added block
must not anchor a service URL that the article already links.
"""
from __future__ import annotations

import re

CANONICAL_HREFS = {
    "/services/web-development": "/services/website-development",
    "/services/ecommerce-development": "/solutions/ecommerce-website-development",
    "/solutions/online-store-development": "/solutions/ecommerce-website-development",
    "/web-development": "/services/website-development",
    "/android-app-development": "/services/android-app-development",
    "/ios-app-development": "/services/ios-app-development",
    "/ecommerce-development": "/solutions/ecommerce-website-development",
}

ECOMMERCE_CANONICAL = "/solutions/ecommerce-website-development"
HREF_RE = re.compile(r'href="([^"#?]+)')


def canonical_path(href: str) -> str:
    path = (href or "").split("#")[0].split("?")[0].rstrip("/") or "/"
    return CANONICAL_HREFS.get(path, path)


def is_tracked_service(path: str) -> bool:
    path = canonical_path(path)
    return path.startswith("/services/") or path == ECOMMERCE_CANONICAL


def canonicalize_hrefs(html: str) -> str:
    text = html or ""
    for old, new in CANONICAL_HREFS.items():
        text = re.sub(
            rf'href="{re.escape(old)}(#[^"]*)?"',
            lambda match, dest=new: f'href="{dest}{match.group(1) or ""}"',
            text,
        )
        text = re.sub(
            rf"href='{re.escape(old)}(#[^']*)?'",
            lambda match, dest=new: f"href='{dest}{match.group(1) or ''}'",
            text,
        )
    return text


def service_hrefs(html: str) -> set[str]:
    found = set()
    for href in HREF_RE.findall(html or ""):
        path = canonical_path(href)
        if is_tracked_service(path):
            found.add(path)
    return found


def cap_service_anchors(existing_html: str, fragment: str) -> str:
    """Unwrap later <a> tags that repeat a canonical service URL already linked.

    Anchor text stays. Only template-added fragments should be passed as
    `fragment`; stored article copy is left unchanged by the caller.
    """
    seen = service_hrefs(existing_html)

    def repl(match: re.Match) -> str:
        raw = match.group(1)
        path = canonical_path(raw)
        inner = match.group(2)
        if not is_tracked_service(path):
            return match.group(0)
        if path in seen:
            return inner
        seen.add(path)
        suffix = ""
        if "#" in raw:
            suffix = "#" + raw.split("#", 1)[1]
        return f'<a href="{path}{suffix}">{inner}</a>'

    return re.sub(
        r'<a\s+href="([^"]+)">([^<]*)</a>',
        repl,
        fragment or "",
    )
