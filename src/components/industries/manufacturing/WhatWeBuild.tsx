"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, numberedStepsReveal, useGSAP } from "@/lib/gsap";

const ROWS = [
  {
    number: "01",
    numberSide: "left" as const,
    tag: "Fulfillment",
    outcome: "14 min → under 30 sec",
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
    heading: <span className="text-white/20">Demand planning dashboards</span>,
    description:
      "Forecast accuracy improves through data integration and visibility.",
  },
];

function NumberBlock({ number, tag, tagMuted }: { number: string; tag: string; tagMuted?: boolean }) {
  return (
    <div className="flex w-full items-start justify-between">
      <p className="step-number font-sora text-7xl font-bold tracking-[-4px] text-white lg:text-[100px]">
        {number}
      </p>
      <p
        className={`step-cell pt-4 font-mono text-[10px] tracking-[2px] uppercase ${
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
    <div className="step-cell mt-8 flex w-full flex-col gap-2 px-6 py-4">
      <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
        Outcome
      </p>
      <p className="text-sm font-medium text-white">{outcome}</p>
    </div>
  );
}

function ContentBlock({
  heading,
  description,
}: {
  heading: React.ReactNode;
  description: string;
}) {
  return (
    <div className="flex flex-col">
      <p className="step-cell pb-5 font-sora text-2xl font-semibold tracking-[-0.5px] lg:max-w-[430px] lg:text-[28px]">
        {heading}
      </p>
      <p className="step-cell max-w-[430px] text-base leading-7 text-white/55">
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
    <section ref={root} className="relative overflow-hidden border-b-[0.8px] border-black/8 bg-black px-6 py-16 sm:px-10 lg:px-[80px] lg:py-[97px]">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[776px] w-[600px] -translate-x-1/2 -translate-y-1/2 blur-[40px]">
        <Image
          src="/industries/manufacturing/zigzag-glow.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <h2 className="gsap-fade build-fade translate-y-8 font-sora text-4xl tracking-[-2px] text-white/25 lg:text-[47.8px]">
          How <span className="text-white">GroBird Helps</span>
        </h2>

        <div className="mt-16 flex flex-col border-t-[0.8px] border-white/20">
          {ROWS.map((row) => (
            <div
              key={row.number}
              className="gsap-fade build-row grid grid-cols-1 border-b-[0.8px] border-white/20 lg:grid-cols-2"
            >
              <div
                className={`flex flex-col p-8 lg:p-14 ${
                  row.numberSide === "left"
                    ? "lg:border-r-[0.8px] lg:border-white/20"
                    : "justify-center lg:border-r-[0.8px] lg:border-white/20"
                }`}
              >
                {row.numberSide === "left" ? (
                  <>
                    <NumberBlock
                      number={row.number}
                      tag={row.tag}
                      tagMuted={row.number === "03"}
                    />
                    <OutcomeBlock outcome={row.outcome} />
                  </>
                ) : (
                  <ContentBlock heading={row.heading} description={row.description} />
                )}
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-14">
                {row.numberSide === "right" ? (
                  <>
                    <NumberBlock number={row.number} tag={row.tag} />
                    <OutcomeBlock outcome={row.outcome} />
                  </>
                ) : (
                  <ContentBlock heading={row.heading} description={row.description} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
