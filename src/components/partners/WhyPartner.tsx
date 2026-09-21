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
    title: "You stay in the advisory seat",
    description: "We handle the build. You focus on strategy and outcomes.",
    variant: "accent" as const,
  },
  {
    icon: "/partners/why-partner-icon-2.svg",
    title: "Your recommendations get delivered",
    description: "Clients see working systems, not roadmaps.",
    variant: "dark" as const,
  },
  {
    icon: "/partners/why-partner-icon-3.svg",
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
    <section ref={root} className="bg-black px-6 py-16 sm:px-10 lg:px-[42px] lg:py-[97px]">
      <div className="mx-auto max-w-[1261px]">
        <h2 className="gsap-fade why-heading font-sora text-4xl tracking-[-2px] text-white/40 lg:text-[56.6px] lg:leading-[68px]">
          <span className="block">Why Partner With</span>
          <span className="block text-[#ff884c]">GroBird</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 border-t border-white/10 sm:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`gsap-fade why-card flex h-[362px] flex-col justify-end border border-white/10 px-10 py-8 ${
                card.variant === "accent" ? "bg-[#ff884c]" : "bg-black"
              }`}
            >
              <Image
                src={card.icon}
                alt=""
                width={133}
                height={133}
                className="why-icon mb-auto size-[110px] lg:size-[133px]"
                aria-hidden
              />
              <p
                className={`why-cell text-sm leading-[22px] ${
                  card.variant === "accent" ? "text-white/84" : "text-white/38"
                }`}
              >
                {card.description}
              </p>
              <p className="why-cell mt-2 font-sora text-2xl text-white">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
