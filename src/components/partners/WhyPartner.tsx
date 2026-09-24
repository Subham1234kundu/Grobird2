"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  cardsLiftReveal,
  gsap,
  headlineLinesReveal,
  useGSAP,
} from "@/lib/gsap";

const CARDS = [
  {
    icon: "/partners/why-partner-icon-1.svg",
    iconClass: "lg:top-[22px] lg:left-[26px] lg:size-[133px]",
    title: "You stay in the advisory seat",
    description: "We handle the build. You focus on strategy and outcomes.",
    variant: "accent" as const,
  },
  {
    icon: "/partners/why-partner-icon-2.svg",
    iconClass: "lg:top-[25px] lg:left-10 lg:h-[124px] lg:w-[133px]",
    title: "Your recommendations get delivered",
    description: "Clients see working systems, not roadmaps.",
    variant: "dark" as const,
  },
  {
    icon: "/partners/why-partner-icon-3.svg",
    iconClass: "lg:top-[21px] lg:left-10 lg:size-[133px]",
    title: "We understand your client's business",
    description: "We start by reviewing your analysis and recommendations.",
    variant: "dark" as const,
  },
];

export default function WhyPartner() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      headlineLinesReveal(".why-heading", { start: "top 88%" });

      cardsLiftReveal(".why-card", { cells: ".why-cell" });

      // The line-art icons draw themselves in as each card settles.
      gsap.utils.toArray<HTMLElement>(".why-card").forEach((card, i) => {
        gsap.fromTo(
          card.querySelector(".why-icon"),
          { scale: 0.7, opacity: 0, rotate: -8 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.9,
            ease: "back.out(1.6)",
            delay: i * 0.18 + 0.2,
            scrollTrigger: { trigger: card, start: "top 88%" },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-5 pt-8 pb-10 sm:px-10 lg:border-t-0 lg:px-[42px] lg:pt-[70px] lg:pb-[102px]"
    >
      <div className="mx-auto max-w-[1261px]">
        <h2 className="gsap-fade why-heading font-sora text-[28px] leading-9 tracking-[-1px] text-[#858382] lg:text-[56.6px] lg:leading-normal lg:tracking-[-2px] lg:text-white/40">
          <span className="lg:block">Why Partner With </span>
          <span className="text-[#ff884c] lg:block">GroBird</span>
        </h2>

        {/* Desktop: a 1280px strip of three 362px cells that overhangs the
            1261px column by 9.5px on each side, as drawn in Figma. */}
        <div className="mt-7 flex flex-col gap-4 lg:-mx-[9.5px] lg:mt-[97px] lg:grid lg:grid-cols-3 lg:gap-0">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`gsap-fade why-card relative flex flex-col gap-5 border-[0.8px] border-white/10 p-6 lg:block lg:h-[362px] lg:overflow-hidden lg:border lg:p-0 ${
                i < 2 ? "lg:border-r-0" : ""
              } ${card.variant === "accent" ? "bg-[#ff884c]" : "bg-black"}`}
            >
              <Image
                src={card.icon}
                alt=""
                width={133}
                height={133}
                className={`why-icon size-20 lg:absolute ${card.iconClass}`}
                aria-hidden
              />
              <div className="flex flex-col lg:contents">
                <p className="why-cell font-sora text-lg leading-[26px] text-white lg:absolute lg:top-[273px] lg:left-10 lg:w-[300px] lg:text-2xl lg:leading-8">
                  {card.title}
                </p>
                <p
                  className={`why-cell pt-2 text-[13px] leading-5 lg:absolute lg:top-[214px] lg:left-10 lg:w-[281px] lg:pt-0 lg:text-sm lg:leading-[22px] ${
                    card.variant === "accent" ? "text-white/84" : "text-white/38"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
