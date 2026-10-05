"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";

const M = "/services/managed-services/mobile";

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
    <section ref={root} className="relative min-h-[449px] overflow-hidden bg-black sm:min-h-0 lg:min-h-[689px]">
      {/* Phone art (Figma mobile frame): the green swoosh top-right,
          softened by three black fades. */}
      <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden>
        <div className="absolute top-[-137px] right-[-65px] h-[598px] w-[338px]">
          <Image src={`${M}/swoosh.png`} alt="" fill priority sizes="338px" className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-[calc(50%-5.5px)] h-[227px] w-[557px] -translate-x-1/2">
          <Image src={`${M}/hero-fade-bottom.png`} alt="" fill sizes="557px" className="object-cover" />
        </div>
        <div className="absolute bottom-[-23.9px] left-[calc(50%-7.9px)] flex h-[557px] w-[136px] -translate-x-1/2 items-center justify-center">
          <div className="relative h-[135px] w-[557px] shrink-0 rotate-[89.87deg]">
            <Image src={`${M}/hero-fade-band.png`} alt="" fill sizes="557px" className="object-cover" />
          </div>
        </div>
        <div className="absolute bottom-[35px] left-[calc(50%+120.5px)] flex h-[557px] w-[241px] -translate-x-1/2 items-center justify-center">
          <div className="relative h-[241px] w-[557px] shrink-0 -rotate-90">
            <Image src={`${M}/hero-fade-right.png`} alt="" fill sizes="557px" className="object-cover" />
          </div>
        </div>
      </div>

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

      <div className="relative z-10 flex flex-col gap-[18px] px-5 pt-[124px] pb-12 sm:px-10 sm:py-24 lg:px-[95px] lg:pt-[205px] lg:pb-[80px]">
        <div className="gsap-fade hero-fade translate-y-6 hidden w-fit items-center gap-2 rounded-[4px] border-[0.8px] border-[rgba(255,136,76,0.25)] px-[14px] py-[6px] sm:flex">
          <span className="size-[6px] rounded-[3px] bg-[#ff884c] opacity-[51%]" />
          <span className="font-sora text-[11px] leading-[16.5px] font-semibold tracking-[1.32px] text-[#ff884c] uppercase">
            Managed Services &amp; Application Support
          </span>
        </div>
        <div className="flex flex-col gap-4 sm:gap-[7px]">
          <h1 className="gsap-fade hero-fade translate-y-8 font-sora text-[30px] leading-[33px] font-normal tracking-[-1.5px] text-[#827e7e] sm:text-5xl sm:leading-tight sm:tracking-tight sm:capitalize lg:w-[570px] lg:text-[56.6px] lg:leading-[68px] lg:tracking-[-2px]">
            {"Protection for Your "}
            <span className="text-white">{"Technology "}</span>
            <span className="text-white sm:text-[#ff884c]">Investment</span>
          </h1>
          <p className="gsap-fade hero-desc max-w-[280px] text-[13px] leading-[22px] text-white/75 sm:max-w-none sm:text-[15.1px] sm:leading-6 sm:text-white lg:max-w-[509px]">
            We keep your systems healthy, performant, and aligned with your
            evolving needs through managed support and optimization.
          </p>
        </div>
      </div>
    </section>
  );
}
