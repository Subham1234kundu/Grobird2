"use client";

import Image from "next/image";
import { useRef } from "react";
import { cardsSlideReveal, splitWordsReveal, useGSAP } from "@/lib/gsap";

const CARDS = [
  {
    key: "workflow-applications",
    title: "Workflow Applications",
    description:
      "Tools that automate manual processes, capture data at the right moment, and route work to the right person.",
    bg: "/services/custom-software/card-workflow-applications.png",
  },
  {
    key: "operational-dashboards",
    title: "Operational Dashboards",
    description:
      "Real-time visibility into your operation: pipeline, performance, bottlenecks, and capacity.",
    bg: "/services/custom-software/card-operational-dashboards-bg.png",
    mockup: "/services/custom-software/card-operational-dashboards-mockup.png",
  },
  {
    key: "integration-layers",
    title: "Integration Layers",
    description:
      "Custom data pipelines that connect fragmented systems and keep information in sync.",
    bg: "/services/custom-software/card-integration-layers.png",
  },
  {
    key: "specialized-tools",
    title: "Specialized Tools",
    description:
      "Whatever your operation needs, from mobile apps for field teams to procurement systems for supply chain.",
    bg: "/services/custom-software/card-specialized-tools.png",
  },
];

export default function WhatWeBuild() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      cardsSlideReveal(".build-fade", { trigger: root.current });

      splitWordsReveal(".build-desc", { start: "top 80%" });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black px-6 pb-20 sm:px-10 lg:px-[99px] lg:pt-[151px] lg:pb-[80px]">
      <div className="mx-auto flex max-w-[1261px] flex-col gap-8 pt-12 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:pt-0">
        <h2 className="gsap-fade build-fade font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          What <span className="text-[#ff884c]">We Build</span>
        </h2>
        <p className="gsap-fade build-desc max-w-[340px] text-[15px] leading-[25.5px] text-white/40">
          Four structured phases that move from understanding to a
          decision-ready roadmap in four weeks.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1261px] grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[57px] lg:grid-cols-4 lg:gap-[32px]">
        {CARDS.map((card) => (
          <div
            key={card.key}
            className="gsap-fade build-fade relative flex h-[380px] flex-col overflow-hidden rounded-[12px] bg-black px-4 pt-[21px] lg:h-[473px]"
          >
            <Image
              src={card.bg}
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
            {card.mockup && (
              <div className="pointer-events-none absolute right-0 bottom-0 w-[89%]">
                <Image
                  src={card.mockup}
                  alt=""
                  width={266}
                  height={255}
                  className="h-auto w-full"
                  aria-hidden
                />
              </div>
            )}
            <div className="relative z-10 flex max-w-[267px] flex-col gap-[7px]">
              <p className="font-sora text-2xl text-white">{card.title}</p>
              <p className="text-base text-white/50">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
