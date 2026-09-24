"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import HeroPortal from "./HeroPortal";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const split = SplitText.create(".hero-sub", {
        type: "words",
        mask: "words",
      });
      gsap.set(".hero-sub", { opacity: 1 });

      // The illustration arrives first, then the copy follows it in.
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.to(".hero-illustration", { opacity: 1, scale: 1, duration: 1.1 })
        .to(".hero-heading", { opacity: 1, y: 0 }, "-=0.55")
        .from(
          split.words,
          { yPercent: 115, opacity: 0, duration: 0.6, stagger: 0.025 },
          "-=0.6",
        )
        .to(".hero-cta", { opacity: 1, y: 0 }, "-=0.5");

      // The loader only runs on a fresh landing-page visit; if it has
      // already finished (or was never mounted) play straight away.
      if (window.__grobirdLoaded) {
        tl.play();
      } else {
        window.addEventListener("grobird:loaded", () => tl.play(), {
          once: true,
        });
      }
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:grid lg:min-h-[850px] lg:grid-cols-2">
        {/* Phones and tablets show the funnel above the copy, 562px tall
            and nudged 20px right as in Figma; desktop keeps it beside. */}
        <div className="relative order-1 h-[562px] overflow-hidden sm:h-[680px] lg:order-2 lg:h-auto">
          <div className="hero-illustration absolute inset-0 scale-95 opacity-0">
            <div className="mx-auto h-[557px] w-[471px] translate-x-[20px] sm:h-[675px] sm:w-[572px] lg:h-full lg:w-full lg:translate-x-0">
              <HeroPortal />
            </div>
          </div>
        </div>

        <div className="order-2 flex flex-col gap-6 px-5 pt-10 pb-8 sm:px-10 sm:pt-14 sm:pb-16 lg:order-1 lg:justify-start lg:gap-8 lg:px-[50px] lg:pt-[173px] lg:pb-0">
          <div className="flex w-full flex-col gap-6 lg:max-w-[625px] lg:gap-8">
            <h1 className="gsap-fade hero-heading translate-y-8 font-sora text-[32px] leading-[33.6px] tracking-[-1px] sm:text-[44px] sm:leading-[1.1] lg:text-[56.6px] lg:leading-[68px] lg:font-semibold lg:tracking-[-2px]">
              <span className="text-[#827e7e]">
                Operational Bottlenecks Don&apos;t Get{" "}
              </span>
              <span className="text-[#ff884c]">Better on Their Own</span>
            </h1>

            <p className="gsap-fade hero-sub text-[13px] leading-[22px] text-white lg:text-[15.1px] lg:leading-6 lg:text-white/90">
              Most growing B2B companies reach a point where their people and
              their processes no longer align. Spreadsheets replace systems.
              Manual work crowds out strategy.{" "}
              <span className="hidden lg:inline">
                Teams spend more time managing data than running operations.{" "}
              </span>
              The cost is real: lost time, increased errors, shrinking
              margins, delayed growth.
            </p>

            <a
              href="/contact"
              className="gsap-fade hero-cta flex w-fit translate-y-6 items-center gap-2 bg-white px-6 py-3 text-[13px] leading-[19.5px] font-medium tracking-[0.5px] text-black capitalize transition-transform hover:scale-105 lg:gap-[10px] lg:px-[34px] lg:py-[17px] lg:text-[15.6px] lg:leading-6"
            >
              Book A Demo
              <Image
                src="/landing/arrow-right-black.svg"
                alt=""
                width={16}
                height={15}
                aria-hidden
                className="w-[13px] lg:w-4"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
