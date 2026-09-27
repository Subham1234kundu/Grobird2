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
    heading: (
      <>
        <span className="text-white/20">Real-time eligibility </span>
        <span className="text-white">verification</span>
      </>
    ),
    description:
      "Check insurance coverage and benefits instantly at point of service — before the patient sits down. Automated, accurate, and logged.",
  },
  {
    number: "02",
    numberSide: "right" as const,
    tag: "Routing",
    outcome: "First-pass rate 94%+",
    heading: (
      <>
        <span className="text-white/20">Automated claims </span>
        <span className="text-white">assembly and submission</span>
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
    heading: (
      <>
        <span className="text-white/20">Prior authorization </span>
        <span className="text-white">workflows</span>
      </>
    ),
    description:
      "Automate request generation and real-time tracking across payers. Alert providers when approvals stall — with context, not just a flag.",
  },
  {
    number: "04",
    numberSide: "right" as const,
    tag: "Automation",
    outcome: "40% reduction in call volume",
    heading: (
      <>
        <span className="text-white/20">Patient portal for </span>
        <span className="text-white">self-service</span>
      </>
    ),
    description:
      "Patients see bills, check claim status, and access payment options without staff intervention. Inbound volume drops. Staff focus on care.",
  },
];

// Below lg the two grid cells collapse (`contents`) so the row stacks as
// number → heading/description → outcome, matching the Figma mobile frame;
// the `order-*` utilities only matter in that stacked mode.
function NumberBlock({ number, tag, tagMuted }: { number: string; tag: string; tagMuted?: boolean }) {
  return (
    <div className="order-1 flex w-full items-start justify-between lg:order-none">
      <p className="step-number font-sora text-[56px] leading-none font-bold tracking-[-3px] text-white sm:text-7xl sm:tracking-[-4px] lg:text-[100px]">
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
    <div className="step-cell order-3 flex w-fit flex-col gap-1 border-[0.8px] border-white/10 px-4 py-3 lg:order-none lg:mt-8 lg:w-full lg:gap-2 lg:border-0 lg:px-6 lg:py-4">
      <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
        Outcome
      </p>
      <p className="text-sm font-medium text-white max-sm:text-[13px] max-sm:leading-[19.5px]">{renderWithArrows(outcome)}</p>
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
    <div className="order-2 flex flex-col lg:order-none">
      <p className="step-cell pb-5 font-sora text-2xl font-semibold tracking-[-0.5px] max-sm:pt-4 max-sm:pb-3 max-sm:text-xl max-sm:leading-[26px] lg:max-w-[430px] lg:text-[28px]">
        {heading}
      </p>
      <p className="step-cell max-w-[430px] text-base leading-7 text-white/55 max-sm:pb-4 max-sm:text-[13px] max-sm:leading-[22px] lg:max-w-[430px]">
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
      <div className="pointer-events-none absolute top-[474px] left-0 size-[430px] opacity-80 blur-[134px] sm:left-1/2 sm:-translate-x-1/2 lg:top-1/2 lg:size-[736px] lg:-translate-y-1/2 lg:opacity-100">
        <Image
          src="/industries/healthcare/zigzag-glow.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <h2 className="gsap-fade build-fade translate-y-8 font-sora text-4xl tracking-[-2px] text-white/25 max-sm:text-2xl max-sm:leading-9 max-sm:tracking-[-1px] lg:text-[47.8px]">
          How <span className="text-white">GroBird Helps</span>
        </h2>

        <div className="mt-8 flex flex-col sm:mt-16 lg:border-t-[0.8px] lg:border-white/20">
          {ROWS.map((row) => (
            <div
              key={row.number}
              className="gsap-fade build-row flex flex-col border-t-[0.8px] border-white/20 py-6 lg:grid lg:grid-cols-2 lg:border-t-0 lg:border-b-[0.8px] lg:py-0"
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
