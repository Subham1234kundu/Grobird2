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
      className="relative h-[415px] overflow-hidden bg-black sm:h-auto lg:h-[640px]"
    >
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-5 pt-[108px] sm:px-10 sm:py-16 lg:min-h-[640px] lg:flex-row lg:items-center lg:justify-between lg:px-[102px] lg:py-[83px]">
        <div className="flex flex-col lg:flex-1">
          <h1 className="gsap-fade hero-heading font-sora text-[32px] leading-[33.6px] tracking-[-1.5px] text-[#4a4848] sm:text-6xl sm:leading-[1.06] sm:tracking-[-2px] lg:text-[77.636px] lg:leading-[82.294px] lg:tracking-[-3px]">
            <span className="mb-2 block whitespace-nowrap sm:mb-0">
              Operations built
            </span>
            <span className="inline whitespace-nowrap text-white sm:block">
              for fintech
            </span>{" "}
            <span className="inline whitespace-nowrap text-white sm:block sm:text-[#ff884c]">
              scale.
            </span>
          </h1>
          <p className="gsap-fade hero-desc mt-6 max-w-[260px] text-[13px] leading-[22px] text-white/70 sm:mt-8 sm:max-w-[475px] sm:text-lg sm:leading-[30px]">
            Fintech operates at speed with zero room for error. Your
            processing is real-time. Your compliance is non-negotiable. Your
            customer experience drives retention. Generic software doesn&apos;t
            cut it.
          </p>
        </div>

        {/* The mobile frame drops the stat column; it returns as a row on
            tablet and the desktop column from lg. */}
        <div className="hidden w-full shrink-0 border-[0.8px] border-white/24 sm:flex sm:flex-row lg:max-w-[179px] lg:flex-col">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`gsap-fade hero-fade translate-y-6 flex min-w-[160px] flex-1 flex-col px-10 py-7 lg:flex-none ${
                i < STATS.length - 1
                  ? "border-[rgba(75,73,73,0.4)] sm:border-r-[0.8px] lg:border-r-0 lg:border-b-[0.8px]"
                  : ""
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

      {/* Phone/tablet card: anchored to the section's bottom-right corner
          as in the 430px frame (card 430x597 at right -150 / bottom -61). */}
      <div
        className="pointer-events-none absolute right-[-150px] bottom-[-61px] h-[597px] w-[430px] isolate overflow-hidden sm:top-[-60px] sm:right-[-100px] sm:bottom-auto sm:h-[480px] sm:w-[346px] lg:hidden"
        aria-hidden
      >
        <Image
          src="/industries/fintech/hero-card.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#ff884c] mix-blend-color" />
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
