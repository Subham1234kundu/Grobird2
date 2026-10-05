"use client";

import { useRef } from "react";
import { cardsSlideReveal, gsap, useGSAP } from "@/lib/gsap";

/*
 * Below lg the cards follow the Figma mobile frame: equal 199px blocks
 * stacked 12px apart, alternating near-black and blue, with a 2px accent
 * bar across the top-left and the copy pinned to the bottom. From lg the
 * desktop 2×2 grid (dark / orange / orange / dark) takes over.
 */
const MODELS = [
  {
    title: "Retainer-based support",
    description:
      "Predictable monthly cost for ongoing monitoring, maintenance, and support.",
    mobile: "bg-[#0d0d0d]",
    bar: "bg-[#ff884c]",
    desktop:
      "lg:min-h-[279px] lg:border-[0.8px] lg:border-[rgba(75,73,73,0.4)] lg:bg-[#0d0d0d] lg:px-14 lg:py-14",
    titleLg: "lg:text-[26px] lg:leading-[33.8px]",
    descLg: "lg:max-w-none lg:text-[15px] lg:leading-6 lg:text-[#858382]",
    bottomRule: true,
  },
  {
    title: "Priority response",
    description:
      "Faster turnaround for critical issues, with guaranteed response times.",
    mobile: "bg-[#558bfb]",
    bar: "bg-white",
    desktop: "lg:min-h-[279px] lg:bg-[#ff884c] lg:px-10 lg:py-10",
    titleLg: "lg:text-[26px] lg:leading-[31.2px]",
    descLg: "lg:max-w-[281px] lg:text-sm lg:leading-[22px] lg:text-white/70",
  },
  {
    title: "Capacity allocation",
    description:
      "A reserved portion of our team's time available for your needs, whether fixes or enhancements.",
    mobile: "bg-[#0d0d0d]",
    bar: "bg-[#ff884c]",
    desktop: "lg:min-h-[268.6px] lg:bg-[#ff884c] lg:px-10 lg:py-10",
    titleLg: "lg:text-[26px] lg:leading-[26px]",
    descLg: "lg:max-w-[281px] lg:text-sm lg:leading-[22px] lg:text-white",
  },
  {
    title: "Custom models",
    description:
      "We build support packages that match your specific operational needs and risk profile.",
    mobile: "bg-[#558bfb]",
    bar: "bg-white",
    desktop:
      "lg:min-h-[268.6px] lg:border-[0.8px] lg:border-[rgba(75,73,73,0.4)] lg:bg-[#0d0d0d] lg:bg-[radial-gradient(ellipse_45%_40%_at_50%_50%,rgba(255,136,76,0.08),transparent)] lg:px-14 lg:py-14",
    titleLg: "lg:text-[26px] lg:leading-[33.8px]",
    descLg: "lg:max-w-[410px] lg:text-[15px] lg:leading-6 lg:text-[#858382]",
    bottomRule: true,
  },
];

export default function ServiceModels() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".models-heading", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".models-heading", start: "top 85%" },
      });

      cardsSlideReveal(".models-card", { trigger: root.current });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-black px-5 pb-12 sm:px-10 sm:pb-20 lg:px-[99px] lg:pb-[101px]">
      <div className="mx-auto max-w-[1261px] pt-12 lg:pt-[97px]">
        <h2 className="gsap-fade models-heading translate-y-8 font-sora text-[26px] leading-[39px] tracking-[-1.5px] text-[#858382] sm:text-4xl sm:leading-normal sm:tracking-[-2px] lg:text-[52px] lg:leading-[59.8px]">
          Service <span className="text-[#ff884c]">Models</span>
        </h2>

        <div className="models-grid mt-8 grid grid-cols-1 gap-3 lg:mt-[48px] lg:grid-cols-2 lg:gap-0">
          {MODELS.map((m) => (
            <div
              key={m.title}
              className={`gsap-fade models-card relative flex h-[199.4px] flex-col justify-end overflow-hidden p-4 lg:h-auto lg:justify-center ${m.mobile} ${m.desktop}`}
            >
              {/* Accent bar (phones and tablets) */}
              <span className={`absolute top-0 left-0 h-[2px] w-[189px] lg:hidden ${m.bar}`} aria-hidden />

              <div className="flex flex-col gap-2 lg:gap-4">
                <h3 className={`font-sora text-sm leading-[18.2px] font-semibold text-white ${m.titleLg}`}>
                  {m.title}
                </h3>
                <p className={`text-xs leading-5 text-white/65 ${m.descLg}`}>
                  {m.description}
                </p>
              </div>

              {m.bottomRule && (
                <span className="absolute inset-x-0 bottom-0 hidden h-[2px] bg-[#ff884c] lg:block" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
