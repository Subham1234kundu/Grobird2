"use client";

import { useRef } from "react";
import {
  countUpReveal,
  gsap,
  headlineLinesReveal,
  splitWordsReveal,
  useGSAP,
} from "@/lib/gsap";

const STATS = [
  { value: "50+", label: "Clients served" },
  { value: "6", label: "Industries" },
  { value: "3×", label: "Avg. throughput gain" },
];

export default function WhoWeAre() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      headlineLinesReveal(".who-heading", { start: "top 88%" });
      splitWordsReveal(".who-lede", { start: "top 85%" });

      gsap.fromTo(
        ".who-stat",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".who-stats", start: "top 90%" },
        },
      );

      countUpReveal(".who-stat-value", { start: "top 92%" });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="bg-black px-6 py-16 sm:px-10 lg:px-[48px] lg:py-[80px]"
    >
      <div className="mx-auto max-w-[1261px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          <div className="flex flex-1 flex-col lg:h-[228px] lg:justify-start">
            <h2 className="gsap-fade who-heading font-sora text-4xl tracking-[-2px] text-[#858382] lg:max-w-[497px] lg:text-[52px] lg:leading-[59.8px]">
              Who We <span className="text-[#ff884c]">Are</span>
            </h2>
            <div className="who-stats mt-8 flex flex-wrap items-start gap-6 lg:mt-[52px]">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="gsap-fade who-stat flex flex-col gap-1"
                >
                  <p className="who-stat-value font-sora text-[30px] leading-9 font-semibold text-[#ff884c]">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] leading-[15px] tracking-[1px] text-[#858382] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-5 lg:h-[228px]">
            <p className="gsap-fade who-lede text-base leading-[26px] text-white/80">
              GroBird is an operations and technology implementation partner
              for growing B2B companies. We combine operational expertise
              with technical depth to solve the problems that limit growth.
            </p>
            <p className="gsap-fade who-lede text-base leading-[26px] text-[#858382]">
              We&apos;ve worked with fintech platforms, logistics networks,
              healthcare providers, lending platforms, and manufacturers.
              Companies that operate at scale but were constrained by process
              gaps, system fragmentation, or manual workflows. Our job is to
              eliminate those constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
