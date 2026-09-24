"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, numberedStepsReveal, useGSAP } from "@/lib/gsap";

const ROWS = [
  {
    number: "01",
    numberSide: "left" as const,
    tag: "Compliance",
    outcome: "80% reduction in manual review",
    heading: (
      <>
        <span className="text-white">Automated </span>
        <span className="text-white/20">compliance workflows</span>
      </>
    ),
    description:
      "Verification, screening, and approval flows that flag risks and accelerate clean customers — no human in the loop for standard cases.",
  },
  {
    number: "02",
    numberSide: "right" as const,
    tag: "Reconciliation",
    outcome: "99.9% match accuracy",
    heading: (
      <>
        <span className="text-white/20">Transaction </span>
        <span className="text-white">reconciliation systems</span>
      </>
    ),
    description:
      "Real-time matching across payment partners and internal records. Exceptions surface immediately with full context, not days later.",
  },
  {
    number: "03",
    numberSide: "left" as const,
    tag: "Integration",
    outcome: "Eliminates ~12 hrs/week of manual work",
    heading: (
      <>
        <span className="text-white/20">Data integration</span>
        <span className="text-white"> platforms</span>
      </>
    ),
    description:
      "One source of truth across your core system, payment processors, and reporting. No more manual syncing, no more version conflicts.",
  },
  {
    number: "04",
    numberSide: "right" as const,
    tag: "Automation",
    outcome: "40% support ticket deflection",
    heading: (
      <>
        <span className="text-white/20">Customer-facing </span>
        <span className="text-white">automation</span>
      </>
    ),
    description:
      "Self-service KYC, dispute resolution, and account management that reduces your support load while improving customer experience.",
  },
];

// Below lg the two grid cells collapse (`contents`) so the blocks stack in
// the phone frame's order: number row, heading, copy, outcome. The `order-*`
// utilities only matter there; inside each lg cell the relative order is the
// same as before.
function NumberBlock({ number, tag }: { number: string; tag: string }) {
  return (
    <div className="order-1 flex w-full items-start justify-between">
      <p className="step-number font-sora text-[56px] leading-[56px] font-bold tracking-[-3px] text-white sm:text-7xl sm:leading-none sm:tracking-[-4px] lg:text-[100px]">
        {number}
      </p>
      <p className="step-cell pt-2 font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase sm:pt-4">
        {tag}
      </p>
    </div>
  );
}

function OutcomeBlock({ outcome }: { outcome: string }) {
  return (
    <div className="step-cell order-3 flex w-auto max-w-full flex-col gap-1 self-start border-[0.8px] border-white/10 px-4 py-3 lg:mt-8 lg:w-full lg:gap-2 lg:border-0 lg:px-6 lg:py-4">
      <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
        Outcome
      </p>
      <p className="text-[13px] leading-[19.5px] font-medium text-white sm:text-sm sm:leading-5">
        {outcome}
      </p>
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
    <div className="order-2 flex flex-col">
      <p className="step-cell pt-4 pb-3 font-sora text-xl leading-[26px] font-semibold tracking-[-0.5px] sm:text-2xl sm:leading-8 lg:max-w-[430px] lg:pt-0 lg:pb-5 lg:text-[28px]">
        {heading}
      </p>
      <p className="step-cell max-w-[430px] pb-4 text-[13px] leading-[22px] text-white/55 sm:text-base sm:leading-7 lg:pb-0">
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
    <section
      ref={root}
      className="relative overflow-hidden border-b-[0.8px] border-black/8 bg-black px-5 pt-10 pb-6 sm:px-10 sm:py-16 lg:px-[80px] lg:py-[97px]"
    >
      <Image
        src="/industries/fintech/build-glow-bg.png"
        alt=""
        fill
        className="pointer-events-none absolute inset-0 hidden object-cover opacity-40 blur-3xl lg:block"
        aria-hidden
      />
      {/* The phone frame uses a portrait glow centred slightly below the
          section's midpoint. */}
      <div
        className="pointer-events-none absolute top-[calc(50%+114px)] left-[calc(50%+7px)] h-[935px] w-[526px] -translate-x-1/2 -translate-y-1/2 blur-[64px] lg:hidden"
        aria-hidden
      >
        <Image
          src="/industries/fintech/build-glow-mobile.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <h2 className="gsap-fade build-fade translate-y-8 font-sora text-2xl leading-9 tracking-[-1px] text-white/25 sm:text-4xl sm:leading-10 sm:tracking-[-2px] lg:text-[47.8px]">
          What we <span className="text-white">build for you.</span>
        </h2>

        <div className="mt-8 flex flex-col border-t-[0.8px] border-white/20 sm:mt-16">
          {ROWS.map((row, i) => (
            <div
              key={row.number}
              className={`gsap-fade build-row flex flex-col py-6 sm:py-10 lg:grid lg:grid-cols-2 lg:border-b-[0.8px] lg:border-white/20 lg:py-0 ${
                i < ROWS.length - 1 ? "border-b-[0.8px] border-white/20" : ""
              }`}
            >
              <div
                className={`contents lg:flex lg:flex-col lg:p-14 ${
                  row.numberSide === "left"
                    ? "lg:border-r-[0.8px] lg:border-white/20"
                    : "lg:justify-center lg:border-r-[0.8px] lg:border-white/20"
                }`}
              >
                {row.numberSide === "left" ? (
                  <>
                    <NumberBlock number={row.number} tag={row.tag} />
                    <OutcomeBlock outcome={row.outcome} />
                  </>
                ) : (
                  <ContentBlock heading={row.heading} description={row.description} />
                )}
              </div>
              <div className="contents lg:flex lg:flex-col lg:justify-center lg:p-14">
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
