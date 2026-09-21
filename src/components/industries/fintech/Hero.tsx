"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  countUpReveal,
  gsap,
  headlineLinesReveal,
  splitWordsReveal,
  useGSAP,
} from "@/lib/gsap";

const STATS = [
  { value: "70%", label: "Reduction in onboarding time" },
  { value: "99.9%", label: "Reconciliation accuracy" },
  { value: "0×", label: "Headcount added to scale 5×" },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".hero-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });

      headlineLinesReveal(".hero-heading", { start: "top 90%" });
      splitWordsReveal(".hero-desc", { start: "top 85%" });
      countUpReveal(".hero-stat");
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-black lg:h-[640px]"
    >
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-6 py-16 sm:px-10 lg:min-h-[640px] lg:flex-row lg:items-center lg:justify-between lg:px-[102px] lg:py-[83px]">
        <div className="flex flex-col lg:flex-1">
          <h1 className="gsap-fade hero-heading font-sora text-5xl leading-[1.06] tracking-[-2px] text-[#4a4848] sm:text-6xl lg:text-[77.636px] lg:leading-[82.294px] lg:tracking-[-3px]">
            <span className="block whitespace-nowrap">Operations built</span>
            <span className="block whitespace-nowrap text-white">
              for fintech
            </span>
            <span className="block whitespace-nowrap text-[#ff884c]">
              scale.
            </span>
          </h1>
          <p className="gsap-fade hero-desc mt-8 max-w-[475px] text-lg leading-[30px] text-white/70">
            Fintech operates at speed with zero room for error. Your
            processing is real-time. Your compliance is non-negotiable. Your
            customer experience drives retention. Generic software doesn&apos;t
            cut it.
          </p>
        </div>

        <div className="flex w-full max-w-[179px] shrink-0 flex-col border-[0.8px] border-white/24">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`gsap-fade hero-fade translate-y-6 flex min-w-[160px] flex-col px-10 py-7 ${
                i < STATS.length - 1 ? "border-b-[0.8px] border-[rgba(75,73,73,0.4)]" : ""
              }`}
            >
              <p className="hero-stat font-sora text-[36px] leading-[40px] font-semibold whitespace-nowrap text-white">
                {stat.value}
              </p>
              <p className="mt-1 max-w-[130px] text-xs leading-[18px] text-[#e8e8e8]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Positioned against the 1440px design frame, so the card keeps its
          Figma placement as the viewport grows. */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-[1440px] -translate-x-1/2 lg:block"
        aria-hidden
      >
        {/* isolate keeps the colour blend acting on the card alone, not on
            the section behind it. */}
        <div className="absolute top-[-661px] left-[671px] h-[1600px] w-[1152px] isolate overflow-hidden">
          <Image
            src="/industries/fintech/hero-card.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#ff884c] mix-blend-color" />
        </div>
      </div>
    </section>
  );
}
