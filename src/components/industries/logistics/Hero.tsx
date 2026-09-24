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
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });

      headlineLinesReveal(".hero-heading", { start: "top 90%" });
      splitWordsReveal(".hero-desc", { start: "top 85%" });
      countUpReveal(".hero-stat");
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black">
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-5 pt-[75px] pb-[57px] sm:px-10 sm:py-16 lg:min-h-[760px] lg:flex-row lg:items-center lg:justify-between lg:px-[102px] lg:py-[154px]">
        <div className="flex max-w-[700px] flex-col">
          {/*
            Desktop breaks the headline as three block spans; the phone frame
            breaks it as "End-to-End Visibility / Into Your Logistics /
            Network" instead, which the 341px measure (Figma's column) gives
            us by natural wrapping, so the copy is not duplicated. SplitText
            forces a break at any <br>, so none are used.
          */}
          <h1 className="gsap-fade hero-heading max-w-[341px] font-sora text-[32px] leading-[42px] tracking-[-1.5px] text-[#4a4848] sm:max-w-[520px] sm:text-5xl sm:leading-[1.06] sm:tracking-[-2px] lg:max-w-none lg:text-[77.6px] lg:leading-[82.3px]">
            <span className="lg:block lg:font-light">End-to-End </span>
            <span className="lg:block lg:text-white">
              Visibility <span className="text-white">Into Your</span>{" "}
            </span>
            <span className="text-white lg:block lg:text-[#ff884c]">
              Logistics Network
            </span>
          </h1>
          <p className="gsap-fade hero-desc mt-[25px] max-w-[260px] text-[13px] leading-[22px] text-white/70 sm:mt-8 sm:max-w-[440px] sm:text-lg sm:leading-[30px] lg:max-w-[612px]">
            We&apos;ve built operational systems for logistics companies that
            automate order fulfillment, routing optimization, real-time
            tracking, and exception management. Systems that move volume
            efficiently and keep you ahead of problems.
          </p>
        </div>

        {/* The phone frame drops the stat column; tablet lays it out as a row. */}
        <div className="hidden w-full max-w-[179px] shrink-0 flex-col border-[0.8px] border-white/24 sm:flex sm:max-w-[560px] sm:flex-row lg:max-w-[179px] lg:flex-col">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`gsap-fade hero-fade translate-y-6 flex flex-col px-10 py-7 sm:flex-1 sm:px-6 lg:flex-none lg:px-10 ${
                i < STATS.length - 1
                  ? "border-b-[0.8px] border-[rgba(75,73,73,0.4)] sm:border-r-[0.8px] sm:border-b-0 lg:border-r-0 lg:border-b-[0.8px]"
                  : ""
              }`}
            >
              <p className="hero-stat font-sora text-4xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="mt-1 max-w-[130px] text-xs leading-[18px] text-[#e8e8e8]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute top-[41px] left-[calc(50%+390px)] hidden h-[776px] w-[620px] -translate-x-1/2 lg:block">
        <Image
          src="/industries/logistics/hero-crate.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      {/*
        Below lg this is the hero photo itself (the container ship, drawn
        plain); on desktop it becomes the soft-light overlay above the crate.
      */}
      <div className="pointer-events-none absolute top-[-52px] left-[178px] h-[649px] w-[365px] sm:left-auto sm:right-[-120px] lg:top-[-310px] lg:right-auto lg:left-[calc(50%+358px)] lg:h-[1308px] lg:w-[736px] lg:-translate-x-1/2 lg:mix-blend-soft-light">
        <Image
          src="/industries/logistics/hero-overlay.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-[-154px] left-[calc(50%+130px)] flex h-[795px] w-[357px] -translate-x-1/2 items-center justify-center sm:left-auto sm:right-[18px] sm:translate-x-0 lg:hidden"
        aria-hidden
      >
        <div className="shrink-0 rotate-[90.56deg]">
          <Image
            src="/industries/logistics/hero-side-fade.png"
            alt=""
            width={792}
            height={349}
            className="h-[349px] w-[792px] max-w-none"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-[349px]">
        <Image
          src="/industries/logistics/hero-fade.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute top-[290px] left-[311px] h-[104px] w-[119px] sm:hidden">
        <Image
          src="/industries/logistics/hero-fade.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
    </section>
  );
}
