"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";

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

      splitWordsReveal(".hero-desc", { start: "top 85%" });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black">
      <div className="mx-auto flex max-w-[1261px] flex-col gap-8 px-6 pt-16 pb-10 sm:px-10 lg:flex-row lg:items-end lg:gap-8 lg:px-[90px] lg:pt-[190px] lg:pb-10">
        <h1 className="gsap-fade hero-fade translate-y-8 font-sora text-4xl leading-[1.1] tracking-[-2px] text-[#827e7e] capitalize sm:text-5xl lg:max-w-[716px] lg:text-[56.6px] lg:leading-[68px]">
          {"Your Recommendations "}
          <span className="text-white">{"Need An Execution "}</span>
          <span className="text-[#ff884c]">Partner</span>
        </h1>
        <p className="gsap-fade hero-desc text-[15.1px] leading-6 text-white lg:max-w-[513px]">
          GroBird is the execution partner that turns your recommendations
          into working systems. We build the custom applications,
          integrations, and workflows your consulting prescribes. Your
          clients see results. Your recommendations become real.
        </p>
      </div>

      <div className="gsap-fade hero-fade translate-y-10 relative grid grid-cols-1 sm:grid-cols-3">
        <div className="relative h-[280px] sm:h-[400px] lg:h-[550px]">
          <Image
            src="/partners/hero-left.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[280px] overflow-hidden bg-black sm:h-[400px] lg:h-[550px]">
          <Image
            src="/partners/hero-glow.png"
            alt=""
            fill
            className="object-cover opacity-70 mix-blend-lighten"
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-mono text-xs tracking-[3px] text-white uppercase sm:text-sm">
              GROBIRD <span className="text-[#ff884c]">X</span> YOU
            </p>
          </div>
        </div>
        <div className="relative h-[280px] sm:h-[400px] lg:h-[550px]">
          <Image
            src="/partners/hero-right.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
