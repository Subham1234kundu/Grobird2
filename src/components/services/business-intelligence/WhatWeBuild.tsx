"use client";
import Image from "next/image";
import { useRef } from "react";
import { cardsSlideReveal, useGSAP } from "@/lib/gsap";

const CARDS = [
  {
    key: "operational-dashboards",
    bg: "/services/business-intelligence/card-operational-dashboards.png",
    alt: "Operational dashboards — real-time visibility into throughput, capacity, bottlenecks, and team performance.",
  },
  {
    key: "financial-dashboards",
    bg: "/services/business-intelligence/card-financial-dashboards.png",
    alt: "Financial dashboards — cash position, profitability, margins, and cash flow projections updated live.",
  },
  {
    key: "sales-pipeline-dashboards",
    bg: "/services/business-intelligence/card-sales-pipeline.png",
    alt: "Sales and pipeline dashboards — opportunity status, conversion rates, forecast accuracy, and deal velocity.",
  },
  {
    key: "custom-reporting-portals",
    bg: "/services/business-intelligence/card-custom-reporting.png",
    alt: "Custom reporting portals — self-service analytics where your team filters data and builds their own views.",
  },
];

export default function WhatWeBuild() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      cardsSlideReveal(".build-fade", { trigger: root.current });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black px-6 pb-20 sm:px-10 lg:px-[99px] lg:pt-[97px] lg:pb-[80px]">
      <div className="mx-auto max-w-[1261px]">
        <h2 className="gsap-fade build-fade font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          What <span className="text-[#ff884c]">We Build</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[57px] lg:grid-cols-4 lg:gap-[32px]">
          {CARDS.map((card) => (
            <div
              key={card.key}
              className="gsap-fade build-fade relative h-[380px] overflow-hidden rounded-[12px] border-[0.8px] border-white/16 lg:h-[473px]"
            >
              <Image src={card.bg} alt={card.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
