"use client";

import { useRef } from "react";
import { cardsSlideReveal, gsap, useGSAP } from "@/lib/gsap";

const RESULTS = [
  {
    number: "01",
    accent: "#2b7cf2",
    title: "Reduced errors",
    description:
      "Automation eliminates manual entry mistakes. Data is consistent and trustworthy.",
  },
  {
    number: "02",
    accent: "rgba(255,255,255,0.37)",
    title: "Faster execution",
    description:
      "What took hours now happens in minutes. Approvals move faster. Reports appear instantly.",
  },
  {
    number: "03",
    accent: "rgba(255,255,255,0.37)",
    title: "Better visibility",
    description:
      "Process status is transparent in real-time. You see where things are stuck and why.",
  },
  {
    number: "04",
    accent: "rgba(255,255,255,0.37)",
    title: "Team time recovered",
    description:
      "Your people focus on judgment calls and strategy, not administrative overhead.",
  },
];

export default function TheImpact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".impact-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
      cardsSlideReveal(".impact-card", { trigger: root.current });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-black px-6 pt-16 pb-20 sm:px-10 lg:px-[99px] lg:pt-[97px] lg:pb-[101px]">
      <div className="mx-auto flex max-w-[1261px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
        <h2 className="gsap-fade impact-fade translate-y-8 font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          The Impact
        </h2>
        <p className="gsap-fade impact-fade translate-y-8 max-w-[340px] text-[15px] leading-[25.5px] text-white/40">
          Four structured phases that move from understanding to a
          decision-ready roadmap in four weeks.
        </p>
      </div>

      <div className="impact-grid mx-auto mt-12 grid max-w-[1261px] grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[80px] lg:grid-cols-4 lg:gap-[45px]">
        {RESULTS.map((item) => (
          <div
            key={item.number}
            className="gsap-fade impact-card relative flex h-[319px] flex-col overflow-hidden rounded-[12px] border-[0.8px] border-white/6 bg-[#111] px-6 py-8"
          >
            <div
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{ backgroundColor: item.accent }}
            />
            <p className="font-sora text-5xl font-extrabold tracking-[-1.92px] text-white/4">
              {item.number}
            </p>
            <h3 className="mt-3 font-sora text-xl font-bold tracking-[-0.4px] text-white">
              {item.title}
            </h3>
            <p className="mt-3.5 text-[13px] leading-[22.1px] text-white/45">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
