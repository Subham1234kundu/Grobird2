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
        <div className="absolute top-[calc(50%+28.5px)] left-[calc(50%+295.5px)] hidden h-[675px] w-[1199px] -translate-x-1/2 -translate-y-1/2 lg:block">
          <Image
            src="/services/system-integration/hero-circuit.png"
            alt="Systems integration diagram connecting multiple platforms"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-[-17px] left-1/2 h-[349px] w-[1440px] -translate-x-1/2">
          <Image
            src="/services/system-integration/hero-fade-bottom.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        <div className="absolute bottom-[-562.89px] left-1/2 hidden h-[1440.775px] w-[352.213px] -translate-x-1/2 items-center justify-center lg:flex">
          <div className="relative h-[349px] w-[1440px] flex-none rotate-[89.87deg]">
            <Image
              src="/services/system-integration/hero-fade-bottom.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
          </div>
        </div>
        <div className="absolute bottom-[-533px] left-[calc(50%+479.5px)] hidden h-[1440px] w-[623px] -translate-x-1/2 items-center justify-center lg:flex">
          <div className="relative h-[623px] w-[1440px] flex-none -rotate-90">
            <Image
              src="/services/system-integration/hero-fade-side.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[18px] px-6 py-24 sm:px-10 lg:px-[95px] lg:pt-[205px] lg:pb-[80px]">
        <div className="gsap-fade hero-fade flex w-fit translate-y-6 items-center gap-2 rounded-[4px] border-[0.8px] border-[rgba(255,136,76,0.25)] px-[14px] py-[6px]">
          <span className="size-[6px] rounded-[3px] bg-[#ff884c] opacity-[51%]" />
          <span className="font-sora text-[11px] leading-[16.5px] font-semibold tracking-[1.32px] text-[#ff884c] uppercase">
            Systems Integration
          </span>
        </div>

        <div className="flex flex-col gap-[7px]">
          <h1 className="gsap-fade hero-fade translate-y-8 font-sora text-4xl font-normal tracking-tight text-[#827e7e] capitalize sm:text-5xl lg:w-[570px] lg:text-[56.6px] lg:leading-[68px] lg:tracking-[-2px]">
            One Source Of Truth.{" "}
            <span className="text-[#ff884c]">No More Data Silos.</span>
          </h1>

          <p className="gsap-fade hero-desc text-[15.1px] leading-6 text-white lg:max-w-[509px]">
            Your company uses multiple systems. Sales lives in a CRM.
            Operations in an ERP. Accounting in a separate platform. Finance
            in another. Information gets duplicated, manually synced, and
            inevitably falls out of sync.
          </p>
        </div>
      </div>
    </section>
  );
}
