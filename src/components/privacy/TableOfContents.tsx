"use client";

import { useEffect, useState } from "react";

export const TOC_ITEMS = [
  { number: "01", label: "Information We Collect", id: "information-we-collect" },
  { number: "02", label: "How We Use Information", id: "how-we-use-information" },
  { number: "03", label: "Information Sharing", id: "information-sharing" },
  { number: "04", label: "Data Security", id: "data-security" },
  { number: "05", label: "Data Retention", id: "data-retention" },
  { number: "06", label: "Your Rights", id: "your-rights" },
  { number: "07", label: "Cookies & Tracking", id: "cookies-tracking" },
  { number: "08", label: "Third-Party Services", id: "third-party-services" },
  { number: "09", label: "International Transfers", id: "international-transfers" },
  { number: "10", label: "Changes to Policy", id: "changes-to-policy" },
  { number: "11", label: "Contact Us", id: "contact-us" },
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
          <a href="/terms" className="text-xs text-white/35">
            Terms &amp; Conditions →
          </a>
        </div>
      </div>
    </aside>
  );
}
