"use client";

import { useEffect, useState } from "react";
import ArrowIcon from "@/components/ui/ArrowIcon";

export const TOC_ITEMS = [
  { number: "01", label: "Acceptance of Terms", id: "acceptance-of-terms" },
  { number: "02", label: "Services", id: "services" },
  { number: "03", label: "Client Responsibilities", id: "client-responsibilities" },
  { number: "04", label: "Intellectual Property", id: "intellectual-property" },
  { number: "05", label: "Confidentiality", id: "confidentiality" },
  { number: "06", label: "Payment Terms", id: "payment-terms" },
  { number: "07", label: "Limitation of Liability", id: "limitation-of-liability" },
  { number: "08", label: "Termination", id: "termination" },
  { number: "09", label: "Governing Law", id: "governing-law" },
  { number: "10", label: "Changes to Terms", id: "changes-to-terms" },
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState(TOC_ITEMS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );

    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden w-[220px] shrink-0 lg:block">
      <div className="sticky top-[104px] flex flex-col items-start pt-[56px] pb-10">
        <p className="text-[13px] font-semibold text-white/60">Index</p>

        <nav className="flex w-[220px] flex-col gap-0.5 pt-8">
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-3 border-l-[1.6px] px-3 py-2.5 transition-colors ${
                  isActive
                    ? "border-[#ff884c] bg-white/[0.11]"
                    : "border-transparent hover:bg-white/5"
                }`}
              >
                <span
                  className={`text-[9px] tracking-[1px] ${
                    isActive ? "text-[#ff884c]" : "text-white/70"
                  }`}
                >
                  {item.number}
                </span>
                <span
                  className={`text-[11px] ${
                    isActive ? "text-white/80" : "text-white/64"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-10 w-full border border-white/[0.06] p-4">
          <p className="pb-2 font-mono text-[9px] tracking-[2px] text-white/20 uppercase">
            Also see
          </p>
          <a href="/privacy" className="inline-flex items-center gap-1 text-xs text-white/35">
            Privacy Policy
            <ArrowIcon direction="right" className="size-3" />
          </a>
        </div>
      </div>
    </aside>
  );
}
