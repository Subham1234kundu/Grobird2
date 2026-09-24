"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const INDUSTRIES = [
  "Fintech",
  "Logistics",
  "Healthcare",
  "Lending",
  "Manufacturing",
  "SaaS",
  "EdTech",
  "Real Estate",
  "Insurance",
  "B2B Services",
];

export default function IndustriesTicker() {
  const root = useRef<HTMLDivElement>(null);
  const items = [...INDUSTRIES, ...INDUSTRIES];

  useGSAP(
    () => {
      gsap.to(".ticker-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="gsap-fade ticker-fade translate-y-6 my-8 overflow-hidden border-y-[0.8px] border-white/40 bg-black py-3 lg:mt-[60px] lg:mb-0"
    >
      <div className="animate-ticker flex w-max items-center gap-8">
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="font-mono text-[11px] leading-[16.5px] tracking-[2px] text-[#858382] uppercase">
              {item}
            </span>
            <span className="font-mono text-[6px] leading-[9px] text-[#ff884c]">
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
