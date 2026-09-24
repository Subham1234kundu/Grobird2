"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const strip = useRef<HTMLDivElement>(null);

  // On small screens the photo strip scrolls sideways. It opens 90px in,
  // as drawn in Figma, so both outer photos peek in from the edges.
  useEffect(() => {
    const el = strip.current;
    if (el && el.scrollWidth > el.clientWidth) el.scrollLeft = 90;
  }, []);

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
      {/* Desktop: 716px headline + fluid copy, bottom-aligned, 1261px wide.
          Mobile: stacked, 28px headline, 20px gutters. */}
      <div className="mx-auto flex max-w-[1261px] flex-col px-5 pt-7 pb-8 sm:px-10 lg:flex-row lg:items-end lg:gap-8 lg:px-0 lg:pt-[119px] lg:pb-[94px]">
        <h1 className="gsap-fade hero-fade translate-y-8 font-sora text-[28px] leading-9 tracking-[-1.5px] text-[#827e7e] capitalize sm:text-5xl sm:leading-[1.15] lg:w-[716px] lg:shrink-0 lg:text-[56.6px] lg:leading-[68px] lg:tracking-[-2px]">
          {"Your Recommendations "}
          <span className="text-white">{"Need An Execution "}</span>
          <span className="text-[#ff884c]">Partner</span>
        </h1>
        <p className="gsap-fade hero-desc pt-4 text-sm leading-[22px] text-white/84 lg:flex-1 lg:pt-0 lg:text-[15.1px] lg:leading-6 lg:text-white">
          GroBird is the execution partner that turns your recommendations
          into working systems. We build the custom applications,
          integrations, and workflows your consulting prescribes. Your
          clients see results. Your recommendations become real.
        </p>
      </div>

      {/* Mobile: three 212.5px panels shifted 90px left so the outer
          photos are cropped. Desktop: three equal thirds, 550px tall
          images clipped to 485px. */}
      <div
        ref={strip}
        className="gsap-fade hero-fade translate-y-10 relative h-[220px] overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:h-[485px] lg:overflow-hidden"
      >
        <div className="flex h-full w-max gap-[5px] lg:absolute lg:inset-0 lg:w-auto lg:gap-0">
          <div className="relative h-full w-[212.5px] shrink-0 lg:h-[550px] lg:w-1/3">
            <Image
              src="/partners/hero-left.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-full w-[212.5px] shrink-0 overflow-hidden bg-black lg:h-[550px] lg:w-1/3">
            <div
              className="pointer-events-none absolute bottom-[-461px] left-[calc(50%+542px)] flex h-[736px] w-[1472px] -translate-x-1/2 items-center justify-center"
              aria-hidden
            >
              <Image
                src="/partners/hero-glow.png"
                alt=""
                width={736}
                height={1472}
                className="h-[1472px] w-[736px] -rotate-90 object-cover blur-[72px]"
              />
            </div>
            {/* Bird silhouette, overlay-blended so it only shows in the glow */}
            <div
              className="pointer-events-none absolute inset-[20.9%_-7.04%_-10.25%_40.38%] mix-blend-overlay lg:inset-[-2.36%_2.5%_-11.09%_12.92%]"
              aria-hidden
            >
              <Image
                src="/partners/contact-bird.svg"
                alt=""
                fill
                className="object-fill"
              />
            </div>
            <p className="absolute top-[14px] right-[8px] font-mono text-[11px] leading-none tracking-[3.5px] text-white uppercase lg:top-[25px] lg:right-[12px] lg:text-[20px] lg:tracking-[7px]">
              Grobird x <span className="text-[#ff884c]">You</span>
            </p>
          </div>
          <div className="relative h-full w-[212.5px] shrink-0 lg:h-[550px] lg:w-1/3">
            <Image
              src="/partners/hero-right.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
