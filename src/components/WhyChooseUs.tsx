"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";

const PILLARS = [
  {
    text: "We build for outcomes, not features. Every system we create reduces operational cost, increases control, and creates room for your business to scale.",
  },
  {
    text: "We work with the buying committee, not against it. We know your CFO cares about ROI, your Head of Operations cares about running the department smoothly, and your technical team cares about integration and maintainability.",
    desktopTail: " We address all three.",
  },
  {
    text: "We stay invested after launch. Technology is only valuable if it keeps working. We offer ongoing support and optimization to protect your investment and adapt to growth.",
  },
];

function StatCard({ value, label }: { value: string; label: string }) {
  // Phones lay the number, label and arrow out in one row; desktop
  // stacks the number over the label with the arrow to the right.
  return (
    <div className="gsap-fade why-fade flex h-[87px] translate-y-8 items-center gap-3 border-[0.8px] border-[#dfdfdf] bg-[#fafafa] p-4 sm:h-auto sm:gap-4 sm:px-5 sm:py-6 lg:justify-between">
      <div className="contents sm:block">
        <p className="font-mono text-[36px] leading-9 text-black sm:text-[50px] sm:leading-[60px] sm:font-extralight">
          {value}
        </p>
        <p className="flex-1 font-sora text-[11px] leading-[18px] font-semibold text-black uppercase sm:mt-2 sm:flex-none sm:text-[13px] sm:leading-5">
          {label}
        </p>
      </div>
      <span className="flex size-8 shrink-0 items-center justify-center bg-[#ff884c] sm:size-auto sm:p-2">
        <Image
          src="/landing/arrow-up-right.svg"
          alt=""
          width={16}
          height={15}
          aria-hidden
        />
      </span>
    </div>
  );
}

export default function WhyChooseUs() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".why-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
        },
      });

      splitWordsReveal(".why-desc", { start: "top 80%" });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-black px-5 pt-10 pb-8 sm:px-10 sm:py-16 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute top-[26.67%] left-1/4 hidden h-[73.33%] w-1/2 bg-[url(/landing/why-choose-bg.png)] bg-[length:100%_100%] bg-no-repeat sm:block"
      />

      <div className="relative mx-auto max-w-[772px] text-center">
        <h2 className="gsap-fade why-fade translate-y-8 font-sora text-[26px] leading-[39px] tracking-[-1px] text-[#858382] sm:text-5xl sm:leading-tight lg:text-[57px] lg:leading-[68px] lg:tracking-[-2.5px]">
          Why Choose <span className="text-[#ff884c]">GroBird</span>
        </h2>
        <p className="gsap-fade why-desc mt-3 text-[13px] leading-5 text-white lg:mt-4 lg:text-base lg:leading-6">
          We think like operators, not vendors. We don&apos;t start with a
          tool. We start with your problem.{" "}
          <span className="hidden lg:inline">
            We understand that technology serves operations, not the reverse.
          </span>
        </p>
      </div>

      <div className="relative mx-auto mt-10 grid max-w-[1060px] grid-cols-1 gap-4 text-[13px] leading-5 text-white sm:grid-cols-3 sm:gap-10 sm:text-base sm:text-justify lg:mt-20 lg:max-w-[1255px] lg:grid-cols-[316fr_397fr_346fr] lg:gap-x-[clamp(24px,5vw,98px)] lg:text-[20px] lg:leading-normal">
        {PILLARS.map((pillar) => (
          <p key={pillar.text} className="gsap-fade why-fade min-w-0 translate-y-8">
            {pillar.text}
            {pillar.desktopTail && (
              <span className="hidden lg:inline">{pillar.desktopTail}</span>
            )}
          </p>
        ))}
      </div>

      <div className="relative mx-auto mt-[27px] grid max-w-[1200px] grid-cols-1 gap-[27px] sm:mt-16 sm:grid-cols-3 sm:gap-5 lg:mt-20">
        <StatCard value="85%" label="Improvement in business forecasting accuracy" />

        <div className="gsap-fade why-fade flex translate-y-8 flex-col gap-3 border-[0.8px] border-[#dfdfdf] bg-[#fafafa] p-4 sm:justify-center sm:gap-4 sm:p-6">
          <Image
            src="/landing/psf-logo-white.png"
            alt="PresalesForce.ai"
            width={65}
            height={22}
            className="h-5 w-auto self-start invert sm:hidden"
          />
          <p className="font-sora text-[11px] leading-[18px] font-semibold text-black uppercase sm:text-[13px] sm:leading-5">
            Grobird didn&apos;t just write code; they{" "}
            <span className="text-[#ff884c]">engineered the core</span>{" "}
            software behind PresalesForce.ai.
          </p>
          <div className="flex flex-wrap items-center gap-2 border-t-[0.8px] border-[#dfdfdf] pt-2 whitespace-nowrap sm:gap-3 sm:border-0 sm:pt-0">
            <Image
              src="/landing/psf-logo-white.png"
              alt="PresalesForce.ai"
              width={65}
              height={22}
              className="hidden h-[22px] w-auto invert sm:block"
            />
            <span className="text-[11px] leading-[16.5px] text-black uppercase sm:text-[11.6px] sm:leading-6">
              Satya Murthy
            </span>
            <span className="h-4 w-px bg-[#b1b1b1]" aria-hidden />
            <span className="text-[11px] leading-[16.5px] text-black uppercase sm:text-[11.8px] sm:leading-6">
              Co-Founder, PSF
            </span>
          </div>
        </div>

        <StatCard value="32%" label="Faster decision-making speed through data integration" />
      </div>
    </section>
  );
}
