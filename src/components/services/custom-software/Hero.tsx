"use client";

import Image from "next/image";
import MobileHeroArt from "../MobileHeroArt";
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
    <section ref={root} className="relative min-h-[500px] overflow-hidden bg-black sm:min-h-0 lg:min-h-[689px]">
      <MobileHeroArt service="custom-software" />
      <div className="relative mx-auto max-w-[1440px] lg:min-h-[689px]">
        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block">
          <div className="absolute -bottom-[380px] -left-[180px] h-[700px] w-[700px] opacity-60 blur-2xl">
            <Image
              src="/services/custom-software/hero-glow-blob.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
          </div>
          <div className="absolute -bottom-[400px] left-[700px] hidden h-[700px] w-[700px] opacity-50 blur-2xl lg:block">
            <Image
              src="/services/custom-software/hero-glow-blob.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
          </div>
          <div className="absolute -bottom-[17px] left-1/2 h-[349px] w-[1440px] -translate-x-1/2">
            <Image
              src="/services/custom-software/hero-fade-bottom.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
          </div>
          <div className="absolute top-[6px] right-[19px] hidden h-[630px] w-[600px] lg:block">
            <Image
              src="/services/custom-software/hero-graphic.png"
              alt=""
              fill
              className="object-cover"
              priority
              aria-hidden
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-[18px] px-5 pt-[104px] pb-12 sm:px-10 sm:py-24 lg:px-[95px] lg:pt-[205px] lg:pb-[80px]">
          <div className="gsap-fade hero-fade translate-y-6 hidden w-fit items-center gap-2 rounded-[4px] border-[0.8px] border-[rgba(255,136,76,0.25)] px-[14px] py-[6px] sm:flex">
            <span className="size-[6px] rounded-[3px] bg-[#ff884c] opacity-[51%]" />
            <span className="font-sora text-[11px] leading-[16.5px] font-semibold tracking-[1.32px] text-[#ff884c] uppercase">
              Custom Software for Business Operations
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:gap-[7px]">
            <h1 className="gsap-fade hero-fade translate-y-8 font-sora text-[32px] leading-[33.6px] font-normal tracking-[-1.5px] text-[#827e7e] capitalize sm:text-5xl sm:leading-tight sm:tracking-tight lg:w-[608px] lg:text-[56.6px] lg:leading-[68px] lg:tracking-[-2px]">
              Software That Fits{" "}
              <span className="block text-[#ff884c] sm:inline">Your Operation</span>
            </h1>

            <p className="gsap-fade hero-desc max-w-[280px] text-[13px] leading-[22px] text-white/75 sm:max-w-none sm:text-[15.1px] sm:leading-6 sm:text-white lg:max-w-[509px]">
              Your operation is unique. But generic software treats you like
              every other company. The result: features you don&apos;t need,
              workflows that don&apos;t match reality, and integration
              nightmares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
