"use client";

import { useRef } from "react";
import { gsap, rowsRiseReveal, useGSAP } from "@/lib/gsap";

const ITEMS = [
  {
    number: "01.",
    title: "Custom applications we built",
    description:
      "We maintain, debug, and enhance the systems we've created for you.",
  },
  {
    number: "02.",
    title: "System integrations",
    description:
      "We monitor data flows and ensure connectivity stays intact as platforms update.",
  },
  {
    number: "03.",
    title: "Workflow automation",
    description:
      "We refine and optimize workflows based on real-world performance and changing needs.",
  },
  {
    number: "04.",
    title: "Business intelligence systems",
    description:
      "We update dashboards, add new reports, and ensure data accuracy and timeliness.",
  },
];

export default function WhatWeSupport() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".support-heading", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".support-heading", start: "top 85%" },
      });
      rowsRiseReveal(".support-item");
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black px-5 py-12 sm:px-10 sm:py-20 lg:px-[99px] lg:py-[80px]">
      <div className="relative mx-auto max-w-[1261px]">
        <h2 className="gsap-fade support-heading translate-y-8 font-sora text-[26px] leading-[28.6px] tracking-[-1.5px] text-[#858382] sm:text-4xl sm:leading-tight sm:tracking-[-2px] lg:text-[52px] lg:leading-[59.8px]">
          What <span className="text-[#ff884c]">We Support</span>
        </h2>

        <dl className="support-list mt-8 flex flex-col gap-8 sm:mt-[30px] sm:gap-0">
          {ITEMS.map((item) => (
            <div
              key={item.number}
              className="gsap-fade support-item grid grid-cols-[40px_1fr] gap-x-4 border-t-[0.8px] border-[rgba(228,228,228,0.2)] py-5 last:border-b-[0.8px] sm:grid-cols-1 sm:gap-4 sm:border-t sm:border-[rgba(228,228,228,0.37)] sm:py-8 sm:last:border-b lg:grid-cols-[90px_1fr_328px] lg:items-center lg:gap-6 lg:py-10"
            >
              <dt className="row-span-2 font-sora text-[20px] leading-[30px] tracking-[-0.5px] text-[#c3c3c3] sm:row-span-1 sm:text-2xl sm:leading-normal sm:tracking-[-0.84px] lg:text-[32px] lg:leading-[57.6px]">
                {item.number}
              </dt>
              <dt className="font-sora text-[18px] leading-[23.4px] tracking-[-0.5px] text-white sm:text-2xl sm:leading-normal sm:tracking-[-0.84px] lg:text-[32px] lg:leading-[57.6px]">
                {item.title}
              </dt>
              <dd className="col-start-2 pt-2 text-[13px] leading-[22px] text-white/55 sm:col-start-auto sm:pt-0 sm:text-[16px] sm:leading-6 sm:text-[#737373]">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
