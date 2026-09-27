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
    // The Figma mobile frame only draws the outcome chip on step 02.
    outcomeOnMobile: false,
    heading: (
      <>
        <span className="text-white/20">Document collection </span>
        <span className="text-white">automation</span>
      </>
    ),
    description:
      "Borrowers upload required documents via secure portal. Validation flags incompleteness.",
  },
  {
    number: "02",
    numberSide: "right" as const,
    tag: "Routing",
    outcome: "First-pass rate 94%+",
    outcomeOnMobile: true,
    heading: (
      <>
        <span className="text-white/20">Underwriting </span>
        <span className="text-white">workflow automation</span>
      </>
    ),
    description:
      "Consolidate data from EMR, schedule, and billing into complete, validated claims. First-pass acceptance climbs. Manual rework drops to near zero.",
  },
  {
    number: "03",
    numberSide: "left" as const,
    tag: "Realtime Track",
    outcome: "3–5 days → same-day for eligible",
    outcomeOnMobile: false,
    heading: (
      <>
        <span className="text-white/20">Third-party </span>
        <span className="text-white">integrations</span>
      </>
    ),
    description:
      "Connect to employment verifiers, income validators, and credit bureaus for real-time checks.",
  },
  {
    number: "04",
    numberSide: "right" as const,
    tag: "Automation",
    outcome: "40% reduction in call volume",
    outcomeOnMobile: false,
    heading: (
      <>
        <span className="text-white/20">Borrower </span>
        <span className="text-white">self-service portal</span>
      </>
    ),
    description:
      "Applicants track status in real-time. They upload documents and respond to requests without phone calls.",
  },
];

function NumberBlock({ number, tag, tagMuted }: { number: string; tag: string; tagMuted?: boolean }) {
  return (
    <div className="flex w-full items-start justify-between max-lg:order-1">
      <p className="step-number font-sora text-[56px] leading-none font-bold tracking-[-3px] text-white sm:text-7xl sm:tracking-[-4px] lg:text-[100px]">
        {number}
      </p>
      <p
        className={`step-cell pt-2 font-mono text-[10px] tracking-[2px] uppercase lg:pt-4 ${
          tagMuted ? "text-white" : "text-[#ff884c]"
        }`}
      >
        {tag}
      </p>
    </div>
  );
}

function OutcomeBlock({ outcome, mobile }: { outcome: string; mobile: boolean }) {
  return (
    <div
      className={`step-cell flex w-fit flex-col gap-1 px-4 py-3 max-lg:order-3 max-lg:border-[0.8px] max-lg:border-white/10 lg:mt-8 lg:w-full lg:gap-2 lg:px-6 lg:py-4 ${
        mobile ? "" : "max-lg:hidden"
      }`}
    >
      <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
        Outcome
      </p>
      <p className="text-[13px] leading-[19.5px] font-medium whitespace-nowrap text-white sm:text-sm sm:leading-5">
        {renderWithArrows(outcome)}
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
    <div className="flex flex-col max-lg:order-2">
      <p className="step-cell pt-4 pb-3 font-sora text-[20px] leading-[26px] font-semibold tracking-[-0.5px] sm:text-2xl sm:leading-[1.3334] lg:max-w-[430px] lg:pt-0 lg:pb-5 lg:text-[28px]">
        {heading}
      </p>
      <p className="step-cell pb-4 text-[13px] leading-[22px] text-white/55 sm:text-base sm:leading-7 lg:max-w-[430px] lg:pb-0">
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
      <div className="pointer-events-none absolute top-[calc(50%+4.6px)] left-[calc(50%+2.5px)] h-[855px] w-[481px] -translate-x-1/2 -translate-y-1/2 opacity-33 lg:top-1/2 lg:left-1/2 lg:h-[1308px] lg:w-[736px]">
        <Image
          src="/industries/lending/zigzag-glow.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 481px, 736px"
          className="object-cover"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <h2 className="gsap-fade build-fade translate-y-8 font-sora text-[24px] leading-9 tracking-[-1px] text-white/25 sm:text-4xl sm:leading-[1.1112] sm:tracking-[-2px] lg:text-[47.8px]">
          How <span className="text-white">GroBird Helps</span>
        </h2>

        <div className="mt-8 flex flex-col sm:mt-12 lg:mt-16">
          {ROWS.map((row) => (
            <div
              key={row.number}
              className="gsap-fade build-row grid grid-cols-1 border-t-[0.8px] border-white/20 py-6 lg:grid-cols-2 lg:py-0 lg:last:border-b-[0.8px]"
            >
              <div
                className={`max-lg:contents lg:flex lg:flex-col lg:p-14 ${
                  row.numberSide === "left"
                    ? "lg:border-r-[0.8px] lg:border-white/20"
                    : "lg:justify-center lg:border-r-[0.8px] lg:border-white/20"
                }`}
              >
                {row.numberSide === "left" ? (
                  <>
                    <NumberBlock
                      number={row.number}
                      tag={row.tag}
                      tagMuted={row.number === "03"}
                    />
                    <OutcomeBlock outcome={row.outcome} mobile={row.outcomeOnMobile} />
                  </>
                ) : (
                  <ContentBlock heading={row.heading} description={row.description} />
                )}
              </div>
              <div className="max-lg:contents lg:flex lg:flex-col lg:justify-center lg:p-14">
                {row.numberSide === "right" ? (
                  <>
                    <NumberBlock number={row.number} tag={row.tag} />
                    <OutcomeBlock outcome={row.outcome} mobile={row.outcomeOnMobile} />
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
