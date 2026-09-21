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

function NumberBlock({ number, tag }: { number: string; tag: string }) {
  return (
    <div className="flex w-full items-start justify-between">
      <p className="step-number font-sora text-7xl font-bold tracking-[-4px] text-white lg:text-[100px]">
        {number}
      </p>
      <p className="step-cell pt-4 font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
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
    <section
      ref={root}
      className="relative overflow-hidden border-b-[0.8px] border-black/8 bg-black px-6 py-16 sm:px-10 lg:px-[80px] lg:py-[97px]"
    >
      <Image
        src="/industries/fintech/build-glow-bg.png"
        alt=""
        fill
        className="pointer-events-none absolute inset-0 object-cover opacity-40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px]">
        <h2 className="gsap-fade build-fade translate-y-8 font-sora text-4xl tracking-[-2px] text-white/25 lg:text-[47.8px]">
          What we <span className="text-white">build for you.</span>
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
                    <NumberBlock number={row.number} tag={row.tag} />
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
