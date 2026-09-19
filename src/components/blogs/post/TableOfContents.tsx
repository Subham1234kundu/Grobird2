"use client";

import { useState } from "react";

const TOC_ITEMS = [
  { id: "the-hire-that-doesnt-fix-it", label: "The Hire That Doesn't Fix It" },
  { id: "the-real-problem-is-upstream", label: "The Real Problem Is Upstream" },
  { id: "the-coordinator-trap", label: "The Coordinator Trap" },
  { id: "what-actually-needs-fixing", label: "What Actually Needs Fixing" },
  { id: "when-the-hire-makes-sense", label: "When the Hire Makes Sense" },
  { id: "the-takeaway", label: "The Takeaway" },
];

const SHARE_LINKS = [
  { label: "LinkedIn", glyph: "in" },
  { label: "Twitter / X", glyph: "𝕏" },
  { label: "Copy link", glyph: "⌘" },
];

export default function TableOfContents() {
  const [active, setActive] = useState(TOC_ITEMS[0].id);

  return (
    <aside className="hidden w-[220px] shrink-0 lg:block">
      <div className="sticky top-[100px] flex flex-col">
        <p className="pb-4 font-mono text-[9px] tracking-[2px] text-[#4b4949] uppercase">
          In this article
        </p>
        <nav className="flex flex-col">
          {TOC_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className="flex items-start gap-3 py-1.5"
            >
              <span
                aria-hidden
                className={`mt-1 h-4 w-[2px] shrink-0 rounded-full ${
                  active === item.id ? "bg-[#ff884c]" : "bg-transparent"
                }`}
              />
              <span
                className={`text-xs ${
                  active === item.id ? "text-white" : "text-[#4b4949]"
                }`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#4b4949] pt-8">
          <p className="font-mono text-[9px] tracking-[2px] text-[#4b4949] uppercase">
            Share
          </p>
          {SHARE_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              className="flex items-center gap-2 text-left"
            >
              <span className="w-4 font-mono text-[11px] text-[#4b4949]">
                {link.glyph}
              </span>
              <span className="text-xs text-[#4b4949]">{link.label}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
