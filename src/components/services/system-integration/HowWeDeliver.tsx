"use client";

import { useRef } from "react";
import { cardsSlideReveal, gsap, useGSAP } from "@/lib/gsap";

const PHASES = [
  {
    number: "01",
    accent: "#2b7cf2",
    title: "We audit your current systems and data flows.",
    description:
      "We understand your architecture and identify integration pain points.",
  },
  {
    number: "02",
    accent: "rgba(255,255,255,0.37)",
    title: "We design a scalable integration strategy",
    description:
      "We map which data flows where, how often it needs to sync, and what transformations are required.",
  },
  {
    number: "03",
    accent: "rgba(255,255,255,0.37)",
    title: "We build and test incrementally.",
    description:
      "We integrate one system pair at a time, validate data accuracy, and expand from there.",
  },
  {
    number: "04",
    accent: "rgba(255,255,255,0.37)",
    title: "We monitor and optimize",
    description:
      "After launch, we track integration health and refine for performance and reliability.",
  },
];

export default function HowWeDeliver() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".deliver-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
      cardsSlideReveal(".deliver-card", { trigger: root.current });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-black px-6 pb-20 sm:px-10 lg:px-[99px] lg:pb-[101px]">
      <div className="mx-auto flex max-w-[1261px] flex-col gap-8 pt-12 lg:flex-row lg:items-end lg:justify-between lg:gap-14 lg:pt-[97px]">
        <h2 className="gsap-fade deliver-fade translate-y-8 font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          How <span className="text-[#ff884c]">We Deliver</span>
        </h2>
        <p className="gsap-fade deliver-fade translate-y-6 max-w-[340px] text-[15px] leading-[25.5px] text-white/40">
          Four structured phases that move from understanding to a
          decision-ready roadmap in four weeks.
        </p>
      </div>

      <div className="deliver-grid mx-auto mt-12 grid max-w-[1261px] grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[80px] lg:grid-cols-4 lg:gap-[45px]">
        {PHASES.map((phase) => (
          <div
            key={phase.number}
            className="gsap-fade deliver-card relative flex h-[319px] flex-col overflow-hidden rounded-[12px] border-[0.8px] border-white/6 bg-[#111] px-6 py-8"
          >
            <div
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{ backgroundColor: phase.accent }}
            />
            <p className="font-sora text-5xl font-extrabold tracking-[-1.92px] text-white/4">
              {phase.number}
            </p>
            <h3 className="mt-3 font-sora text-xl font-bold tracking-[-0.4px] text-white">
              {phase.title}
            </h3>
            <p className="mt-3.5 text-[13px] leading-[22.1px] text-white/45">
              {phase.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
