"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, numberedStepsReveal, useGSAP } from "@/lib/gsap";
import { renderWithArrows } from "@/components/ui/ArrowIcon";

const ROWS = [
  {
    number: "01",
    numberSide: "left" as const,
    tag: "Fulfillment",
    outcome: "14 min → under 30 sec",
    // Figma mobile narrows this heading so "order automation" wraps together.
    headingClass: "max-w-[334px]",
    heading: (
      <>
        <span className="text-white/20">Supplier portal and purchase </span>
        <span className="text-white">order automation</span>
      </>
    ),
    description:
      "Suppliers receive orders electronically, manage delivery commitments, and provide tracking data.",
  },
  {
    number: "02",
    numberSide: "right" as const,
    tag: "Inventory",
    outcome: "First-pass rate 94%+",
    headingClass: "",
    heading: (
      <>
        <span className="text-white/20">Inventory visibility across </span>
        <span className="text-white">supply chain</span>
      </>
    ),
    description:
      "Real-time inventory position from suppliers through production.",
  },
  {
    number: "03",
    numberSide: "left" as const,
    tag: "Automation",
    outcome: "3–5 days → same-day for eligible",
    headingClass: "max-w-[312px]",
    heading: (
      <>
        <span className="text-white/20">Quality and compliance </span>
        <span className="text-white">workflow automation</span>
      </>
    ),
    description:
      "Inspections log data automatically. Traceability is built in. Non-conformance triggers workflows.",
  },
  {
    number: "04",
    numberSide: "right" as const,
    tag: "Demands",
    outcome: "40% reduction in call volume",
    headingClass: "",
    heading: (
      <>
        <span className="text-white/20">Demand planning </span>
        <span className="text-white">dashboards</span>
      </>
    ),
    description:
      "Forecast accuracy improves through data integration and visibility.",
  },
];

function NumberBlock({ number, tag, tagMuted }: { number: string; tag: string; tagMuted?: boolean }) {
  return (
    <div className="flex w-full items-start justify-between">
      <p className="step-number font-sora text-[56px] leading-[56px] font-bold tracking-[-3px] text-white sm:text-7xl sm:leading-none sm:tracking-[-4px] lg:text-[100px]">
        {number}
      </p>
      <p
        className={`step-cell pt-2 font-mono text-[10px] tracking-[2px] uppercase sm:pt-4 ${
          tagMuted ? "text-white" : "text-[#ff884c]"
        }`}
      >
        {tag}
      </p>
    </div>
  );
}

function OutcomeBlock({ outcome }: { outcome: string }) {
  return (
    <div className="step-cell mt-8 hidden w-full flex-col gap-2 px-6 py-4 lg:flex">
      <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
        Outcome
      </p>
      <p className="text-sm font-medium text-white">{renderWithArrows(outcome)}</p>
    </div>
  );
}

function ContentBlock({
  heading,
  headingClass,
  description,
}: {
  heading: React.ReactNode;
  headingClass: string;
  description: string;
}) {
  return (
    <div className="flex flex-col">
      <p
        className={`step-cell pb-3 font-sora text-xl leading-[26px] font-semibold tracking-[-0.5px] sm:max-w-none sm:pb-5 sm:text-2xl sm:leading-8 lg:max-w-[430px] lg:text-[28px] ${headingClass}`}
      >
        {heading}
      </p>
      <p className="step-cell text-[13px] leading-[22px] text-white/55 sm:text-base sm:leading-7 lg:max-w-[430px]">
        {description}
      </p>
    </div>
  );
}

export default function WhatWeBuild() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".build-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });
      numberedStepsReveal(".build-row");
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden border-b-[0.8px] border-black/8 bg-black px-5 pt-10 pb-6 sm:px-10 sm:py-16 lg:px-[80px] lg:py-[97px]">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[522px] w-[404px] -translate-x-1/2 -translate-y-1/2 blur-[40px] lg:h-[776px] lg:w-[600px]">
        <Image
          src="/industries/manufacturing/zigzag-glow.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <h2 className="gsap-fade build-fade translate-y-8 font-sora text-2xl leading-9 tracking-[-1px] text-white/25 sm:text-4xl sm:leading-10 sm:tracking-[-2px] lg:text-[47.8px]">
          How <span className="text-white">GroBird Helps</span>
        </h2>

        <div className="mt-8 flex flex-col lg:mt-16 lg:border-t-[0.8px] lg:border-white/20">
          {ROWS.map((row) => {
            const numberCell = (
              <>
                <NumberBlock
                  number={row.number}
                  tag={row.tag}
                  tagMuted={row.number === "03"}
                />
                <OutcomeBlock outcome={row.outcome} />
              </>
            );
            const contentCell = (
              <ContentBlock
                heading={row.heading}
                headingClass={row.headingClass}
                description={row.description}
              />
            );
            const numberOnLeft = row.numberSide === "left";

            return (
              <div
                key={row.number}
                className="gsap-fade build-row grid grid-cols-1 border-t-[0.8px] border-white/20 pt-6 pb-10 lg:grid-cols-2 lg:border-t-0 lg:border-b-[0.8px] lg:py-0"
              >
                {/* Column 1 — number on desktop for odd rows, content for even rows.
                    On phones the number always comes first, so even rows swap order. */}
                <div
                  className={`flex flex-col lg:border-r-[0.8px] lg:border-white/20 lg:p-14 ${
                    numberOnLeft
                      ? "order-1 p-0"
                      : "order-2 justify-center pt-4 lg:order-1 lg:pt-14"
                  }`}
                >
                  {numberOnLeft ? numberCell : contentCell}
                </div>
                <div
                  className={`flex flex-col justify-center lg:p-14 ${
                    numberOnLeft ? "order-2 pt-4 lg:pt-14" : "order-1 p-0"
                  }`}
                >
                  {numberOnLeft ? contentCell : numberCell}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
