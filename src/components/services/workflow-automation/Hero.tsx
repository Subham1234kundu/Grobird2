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
    <section ref={root} className="relative min-h-[428px] overflow-hidden bg-black sm:min-h-0 lg:min-h-[689px]">
      <MobileHeroArt service="workflow-automation" />
      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 mx-auto hidden max-w-[1440px] sm:block">
        <div className="absolute top-[-137px] left-[603px] hidden h-[1200px] w-[1200px] lg:block">
          <Image
            src="/services/workflow-automation/hero-graphic.png"
            alt="Automation workflow diagram connecting an AI agent to tools and data sources"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-y-0 left-0 w-1/3"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0))",
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-1/4"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,0.75), rgba(0,0,0,0))",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/3"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
            }}
          />
        </div>
        <div className="absolute right-0 bottom-[-17px] left-0 h-[349px]">
          <Image
            src="/services/workflow-automation/hero-fade-bottom.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-[18px] px-5 pt-[104px] pb-12 sm:px-10 sm:py-24 lg:px-[95px] lg:pt-[205px] lg:pb-[80px]">
        <div className="gsap-fade hero-fade translate-y-6 hidden w-fit items-center gap-2 rounded-[4px] border-[0.8px] border-[rgba(255,136,76,0.25)] px-[14px] py-[6px] sm:flex">
          <span className="size-[6px] rounded-[3px] bg-[#ff884c] opacity-[51%]" />
          <span className="font-sora text-[11px] leading-[16.5px] font-semibold tracking-[1.32px] text-[#ff884c] uppercase">
            Automate Business Processes
          </span>
        </div>

        <div className="flex flex-col gap-[35px] sm:gap-[7px]">
          <h1 className="gsap-fade hero-fade translate-y-8 font-sora text-[32px] leading-[33.6px] font-normal tracking-[-1.5px] text-[#827e7e] capitalize sm:text-5xl sm:leading-tight sm:tracking-tight lg:w-[608px] lg:text-[56.6px] lg:leading-[68px] lg:tracking-[-2px]">
            <span className="block sm:inline">Automate Manual </span><span className="text-white">Business Processes</span>,{" "}
            <span className="text-[#ff884c]">Reclaim Your Team</span>
          </h1>

          <p className="gsap-fade hero-desc max-w-[280px] text-[13px] leading-[22px] text-white/75 sm:max-w-none sm:text-[15.1px] sm:leading-6 sm:text-white lg:max-w-[509px]">
            Manual work kills productivity. Your team spends hours moving data
            between systems, chasing approvals, and managing processes that
            should run on their own.
          </p>
        </div>
      </div>
    </section>
  );
}
