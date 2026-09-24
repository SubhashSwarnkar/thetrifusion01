#!/usr/bin/env python3
"""Assemble src/data/upcomingEventsBatchB.js and OG svgs."""
from __future__ import annotations

import importlib.util
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

from batch_b_common import make_og, render, words, OUT  # noqa: E402
from batch_b_extras import EXTRAS  # noqa: E402


def load(name: str):
    spec = importlib.util.spec_from_file_location(name, HERE / f"{name}.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.POSTS


def main() -> None:
    posts = []
    for name in (
        "batch_b_posts_1",
        "batch_b_posts_2",
        "batch_b_posts_3",
        "batch_b_posts_4",
    ):
        posts.extend(load(name))

    ids = [p["id"] for p in posts]
    if ids != list(range(178, 198)):
        raise SystemExit(f"id range mismatch: {ids}")

    slugs = [p["slug"] for p in posts]
    if len(slugs) != len(set(slugs)):
        raise SystemExit("duplicate slug")

    for post in posts:
        extra = EXTRAS.get(post["id"])
        if extra:
            # Insert before the final canonical closer if present, else append.
            post["content"] = post["content"].rstrip() + "\n" + extra.strip() + "\n"
        line1, line2, hue = post.pop("og")
        post["imageUrl"] = make_og(post["slug"], line1, line2, hue)
        post["relatedServiceSlugs"] = ["digital-marketing", "web-development"]
        n = words(post["content"])
        title_len = len(post["title"])
        print(f"{post['id']} {n} words title={title_len} {post['slug']}")
        if n < 1400:
            raise SystemExit(f"short post {post['id']}: {n}")
        if title_len > 60:
            raise SystemExit(f"long title {post['id']}: {title_len}")
        if "FAQ" not in post["content"] or post["content"].count("<h3>") < 4:
            raise SystemExit(f"faq missing {post['id']}")

    OUT.write_text(render(posts), encoding="utf-8")
    print("wrote", OUT, "bytes", OUT.stat().st_size)


if __name__ == "__main__":
    main()
