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
    <section ref={root} className="relative overflow-hidden bg-black lg:min-h-[689px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[-120px] right-[-40px] hidden h-[1546px] w-[560px] lg:block"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, white 14%, white 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, white 22%, white 40%, transparent 58%)",
            maskComposite: "intersect",
          }}
        >
          <Image
            src="/services/managed-services/hero-swoosh.png"
            alt="Managed services system health visualization"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[18px] px-6 py-24 sm:px-10 lg:px-[95px] lg:pt-[205px] lg:pb-[80px]">
        <div className="gsap-fade hero-fade translate-y-6 flex w-fit items-center gap-2 rounded-[4px] border-[0.8px] border-[rgba(255,136,76,0.25)] px-[14px] py-[6px]">
          <span className="size-[6px] rounded-[3px] bg-[#ff884c] opacity-[51%]" />
          <span className="font-sora text-[11px] leading-[16.5px] font-semibold tracking-[1.32px] text-[#ff884c] uppercase">
            Managed Services &amp; Application Support
          </span>
        </div>

        <div className="flex flex-col gap-[7px]">
          <h1 className="gsap-fade hero-fade translate-y-8 font-sora text-4xl font-normal tracking-tight text-[#827e7e] capitalize sm:text-5xl lg:w-[570px] lg:text-[56.6px] lg:leading-[68px] lg:tracking-[-2px]">
            {"Protection for Your "}
            <span className="text-white">{"Technology "}</span>
            <span className="text-[#ff884c]">Investment</span>
          </h1>

          <p className="gsap-fade hero-desc text-[15.1px] leading-6 text-white lg:max-w-[509px]">
            We keep your systems healthy, performant, and aligned with your
            evolving needs through managed support and optimization.
          </p>
        </div>
      </div>
    </section>
  );
}
