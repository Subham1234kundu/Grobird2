"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/blog/markdown";

export default function TableOfContents({
  items,
  title,
}: {
  items: TocItem[];
  title: string;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [copied, setCopied] = useState(false);

  // Highlight the section currently in view.
  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -70% 0px" },
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const share = (network: "linkedin" | "x" | "copy") => {
    const url = window.location.href;
    if (network === "copy") {
      navigator.clipboard?.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      });
      return;
    }
    const target =
      network === "linkedin"
        ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        : `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(target, "_blank", "noopener,noreferrer");
  };

  const SHARE = [
    { key: "linkedin" as const, label: "LinkedIn", glyph: "in" },
    { key: "x" as const, label: "Twitter / X", glyph: "𝕏" },
    { key: "copy" as const, label: copied ? "Link copied" : "Copy link", glyph: "⌘" },
  ];

  return (
    <aside className="hidden w-[220px] shrink-0 lg:block">
      <div className="sticky top-[100px] flex flex-col">
        {items.length > 0 && (
          <>
            <p className="pb-4 font-mono text-[9px] tracking-[2px] text-[#4b4949] uppercase">
              In this article
            </p>
            <nav className="flex flex-col">
              {items.map((item) => (
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
          </>
        )}

        <div className={`flex flex-col gap-3 ${items.length ? "mt-10 border-t border-[#4b4949] pt-8" : ""}`}>
          <p className="font-mono text-[9px] tracking-[2px] text-[#4b4949] uppercase">
            Share
          </p>
          {SHARE.map((link) => (
            <button
              key={link.key}
              type="button"
              onClick={() => share(link.key)}
              className="flex items-center gap-2 text-left"
            >
              <span className="w-4 font-mono text-[11px] text-[#4b4949]">
                {link.glyph}
              </span>
              <span className="text-xs text-[#4b4949] hover:text-white">{link.label}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
