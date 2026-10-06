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
    <section ref={root} className="relative min-h-[519px] overflow-hidden bg-black sm:min-h-0 lg:min-h-[689px]">
      <MobileHeroArt service="business-intelligence" />
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block">
        <div className="absolute top-[195px] right-[-10px] hidden h-[420px] w-[705px] lg:block">
          <Image
            src="/services/business-intelligence/hero-chart.png"
            alt="Real-time business intelligence chart visualization"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-[-17px] left-1/2 h-[349px] w-[1440px] -translate-x-1/2">
          <Image
            src="/services/business-intelligence/hero-fade-bottom.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        <div className="absolute bottom-[-562.89px] left-1/2 hidden h-[1440.775px] w-[352.213px] -translate-x-1/2 items-center justify-center lg:flex">
          <div className="relative h-[349px] w-[1440px] shrink-0 rotate-[89.87deg]">
            <Image
              src="/services/business-intelligence/hero-fade-bottom.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
          </div>
        </div>
        <div className="absolute bottom-[-533px] left-[calc(50%+479.5px)] hidden h-[1440px] w-[623px] -translate-x-1/2 items-center justify-center lg:flex">
          <div className="relative h-[623px] w-[1440px] shrink-0 -rotate-90">
            <Image
              src="/services/business-intelligence/hero-fade-right.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[18px] px-5 pt-[124px] pb-12 sm:px-10 sm:py-24 lg:px-[95px] lg:pt-[205px] lg:pb-[80px]">
        <div className="gsap-fade hero-fade translate-y-6 hidden w-fit items-center gap-2 rounded-[4px] border-[0.8px] border-[rgba(255,136,76,0.25)] px-[14px] py-[6px] sm:flex">
          <span className="size-[6px] rounded-[3px] bg-[#ff884c] opacity-[51%]" />
          <span className="font-sora text-[11px] leading-[16.5px] font-semibold tracking-[1.32px] text-[#ff884c] uppercase">
            Business Intelligence
          </span>
        </div>

        <div className="flex flex-col gap-4 sm:gap-[7px]">
          <h1 className="gsap-fade hero-fade translate-y-8 font-sora text-[30px] leading-[33px] font-normal tracking-[-1.5px] text-[#827e7e] capitalize sm:text-5xl sm:leading-tight sm:tracking-tight lg:w-[570px] lg:text-[56.6px] lg:leading-[68px] lg:tracking-[-2px]">
            Real-Time Visibility{" "}
            <span className="text-[#ff884c]">Into Your Operation</span>
          </h1>

          <p className="gsap-fade hero-desc max-w-[280px] text-[13px] leading-[22px] text-white/75 sm:max-w-none sm:text-[15.1px] sm:leading-6 sm:text-white lg:max-w-[509px]">
            Data scattered across systems doesn&apos;t help. Your team spends
            time compiling spreadsheets instead of acting on insights. By the
            time you have a report, conditions have changed.
          </p>
        </div>
      </div>
    </section>
  );
}
