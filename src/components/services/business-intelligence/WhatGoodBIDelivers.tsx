"use client";

import { useRef } from "react";
import { rowsRiseReveal, useGSAP } from "@/lib/gsap";

const ITEMS = [
  {
    number: "01.",
    title: "One source of truth",
    description:
      "Data comes from your authoritative systems and updates in real time. No more conflicting versions of the same number.",
  },
  {
    number: "02.",
    title: "Role-specific dashboards",
    description:
      "Finance sees cash flow and margins. Operations sees capacity and throughput. Sales sees pipeline and conversion. Everyone sees what matters to them.",
  },
  {
    number: "03.",
    title: "Predictive visibility",
    description:
      "You see trends before they become problems. Forecast cash position, capacity needs, and opportunities.",
  },
  {
    number: "04.",
    title: "Faster decision-making",
    description:
      "Good data reduces meetings. People make decisions based on facts, not theories.",
  },
];

export default function WhatGoodBIDelivers() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      rowsRiseReveal(".good-fade");
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black px-6 py-20 sm:px-10 lg:px-[99px] lg:py-[80px]">
      <div className="relative mx-auto max-w-[1261px]">
        <h2 className="gsap-fade good-fade font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          What Good <span className="text-[#ff884c]">BI Delivers</span>
        </h2>

        <dl className="mt-12 flex flex-col">
          {ITEMS.map((item) => (
            <div
              key={item.number}
              className="gsap-fade good-fade grid grid-cols-1 gap-4 border-t border-[rgba(228,228,228,0.37)] py-8 last:border-b lg:grid-cols-[90px_1fr_360px] lg:items-center lg:gap-6"
            >
              <dt className="font-sora text-2xl tracking-[-0.84px] text-[#c3c3c3] lg:text-[32px]">
                {item.number}
              </dt>
              <dt className="font-sora text-2xl tracking-[-0.84px] text-white lg:text-[32px]">
                {item.title}
              </dt>
              <dd className="text-[16px] leading-6 text-[#737373]">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
