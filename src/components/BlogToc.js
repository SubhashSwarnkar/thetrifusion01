"use client";

import React, { useEffect, useMemo, useState } from "react";

const SIDEBAR_H3_LIMIT = 12;

function groupToc(items) {
  const groups = [];
  let current = null;
  for (const item of items || []) {
    if (item.level === 2) {
      current = { ...item, children: [] };
      groups.push(current);
      continue;
    }
    if (item.level === 3) {
      if (!current) {
        current = { id: item.id, text: item.text, level: 2, children: [] };
        groups.push(current);
      } else {
        current.children.push(item);
      }
    }
  }
  return groups;
}

function TocList({
  groups,
  showH3,
  activeId,
  numbered = true,
  className = "",
}) {
  return (
    <ol
      className={`space-y-1 text-sm leading-snug text-theme-blue ${className}`}
      style={numbered ? { listStyle: "none", counterReset: "toc" } : undefined}
    >
      {groups.map((group, index) => {
        const isActive =
          activeId === group.id ||
          group.children.some((child) => child.id === activeId);
        return (
          <li
            key={group.id}
            className="relative"
            style={numbered ? { counterIncrement: "toc" } : undefined}
          >
            <a
              href={`#${group.id}`}
              className={`block border-l-2 py-1.5 pl-3 pr-1 transition-colors line-clamp-2 ${
                isActive && activeId === group.id
                  ? "border-theme-purple font-semibold text-theme-purple"
                  : isActive
                    ? "border-theme-purple/40 text-theme-blue"
                    : "border-transparent text-theme-blue hover:border-theme-purple/30 hover:text-theme-purple"
              }`}
            >
              {numbered ? (
                <span className="mr-1.5 tabular-nums text-gray-400">
                  {index + 1}.
                </span>
              ) : null}
              {group.text}
            </a>
            {showH3 && group.children.length > 0 ? (
              <ul className="mb-1 ml-3 space-y-0.5 border-l border-gray-100 pl-3">
                {group.children.map((child) => (
                  <li key={child.id}>
                    <a
                      href={`#${child.id}`}
                      className={`block py-1 text-[13px] leading-snug line-clamp-2 transition-colors ${
                        activeId === child.id
                          ? "font-medium text-theme-purple"
                          : "text-gray-600 hover:text-theme-purple"
                      }`}
                    >
                      <span className="mr-1.5 text-gray-300" aria-hidden>
                        •
                      </span>
                      {child.text}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Single table of contents for blog posts.
 * - Desktop (lg+): sticky sidebar titled "Contents"
 * - Mobile/tablet: collapsible "Contents" above the article (closed by default)
 */
export default function BlogToc({ items = [], variant = "sidebar" }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  const groups = useMemo(() => groupToc(items), [items]);
  const h3Count = useMemo(
    () => groups.reduce((sum, g) => sum + g.children.length, 0),
    [groups]
  );
  const showH3 =
    variant === "mobile" ? h3Count > 0 && h3Count <= SIDEBAR_H3_LIMIT + 4 : h3Count > 0 && h3Count <= SIDEBAR_H3_LIMIT;

  useEffect(() => {
    if (!items?.length) return undefined;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!headings.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 1],
      }
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length < 2 || groups.length === 0) return null;

  if (variant === "mobile") {
    return (
      <nav
        aria-label="Table of contents"
        className="mb-10 rounded-2xl border border-gray-100 bg-slate-50/80 lg:hidden"
      >
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-theme-purple">
            Contents
          </span>
          <span
            className={`text-theme-purple transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          >
            ▾
          </span>
        </button>
        {open ? (
          <div className="border-t border-gray-100 px-4 pb-4 pt-2">
            <TocList groups={groups} showH3={showH3} activeId={activeId} />
          </div>
        ) : null}
      </nav>
    );
  }

  return (
    <nav
      aria-label="Table of contents"
      className="hidden rounded-2xl border border-gray-100 bg-white p-4 lg:block"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-theme-purple">
        Contents
      </p>
      <div className="max-h-[min(70vh,28rem)] overflow-y-auto pr-1">
        <TocList groups={groups} showH3={showH3} activeId={activeId} />
      </div>
    </nav>
  );
}
