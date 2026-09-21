"use client";

import Image from "next/image";
import { useRef } from "react";
import { cardsSlideReveal, gsap, useGSAP } from "@/lib/gsap";

const CARDS = [
  {
    key: "monitoring-and-alerting",
    bg: "/services/managed-services/card-monitoring.png",
    title: "Monitoring and alerting",
    description:
      "We watch your systems 24/7 and respond to issues before they impact your team.",
  },
  {
    key: "performance-optimization",
    bg: "/services/managed-services/card-performance.png",
    title: "Performance optimization",
    description:
      "We analyze usage patterns and optimize for speed, reliability, and cost.",
  },
  {
    key: "bug-fixes-and-enhancements",
    bg: "/services/managed-services/card-bugfixes.png",
    title: "Bug fixes and enhancements",
    description:
      "As you identify needed changes, we prioritize and implement them.",
  },
  {
    key: "platform-updates-and-user-support",
    bg: "/services/managed-services/card-platform-support.png",
    title: "Platform updates and User support",
    description:
      "When your integrated systems update, we ensure your customizations and integrations remain compatible.",
  },
];

export default function WhatsIncluded() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".included-heading", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".included-heading", start: "top 85%" },
      });
      cardsSlideReveal(".included-card", { trigger: root.current });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black px-6 pb-20 sm:px-10 lg:px-[99px] lg:pt-[97px] lg:pb-[80px]">
      <div className="mx-auto max-w-[1261px]">
        <h2 className="gsap-fade included-heading translate-y-8 font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          What&apos;s <span className="text-[#ff884c]">Included</span>
        </h2>

        <div className="included-grid mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[57px] lg:grid-cols-4 lg:gap-[32px]">
          {CARDS.map((card) => (
            <div
              key={card.key}
              className="gsap-fade included-card relative h-[380px] overflow-hidden rounded-[12px] border-[0.8px] border-white/16 lg:h-[473px]"
            >
              <Image src={card.bg} alt="" fill className="object-cover" />
              <div className="absolute top-5 left-[15px] z-10 flex w-[calc(100%-30px)] max-w-[282px] flex-col gap-[7px]">
                <h3 className="font-sora text-[24px] leading-normal text-white">
                  {card.title}
                </h3>
                <p className="text-[16px] leading-normal text-white/50">
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
