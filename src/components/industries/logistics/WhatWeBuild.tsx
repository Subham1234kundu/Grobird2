"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, numberedStepsReveal, useGSAP } from "@/lib/gsap";

// The phone frame brightens a different span of each heading than the
// desktop frame does, so headings are segments with a per-width tone.
type Tone = "dim" | "bright";
type Segment = { text: string; phone: Tone; desktop: Tone };

const TONE: Record<`${Tone}-${Tone}`, string> = {
  "dim-dim": "text-white/20",
  "bright-bright": "text-white",
  "bright-dim": "text-white lg:text-white/20",
  "dim-bright": "text-white/20 lg:text-white",
};

const ROWS: {
  number: string;
  numberSide: "left" | "right";
  tag: string;
  outcome: string;
  heading: Segment[];
  description: string;
}[] = [
  {
    number: "01",
    numberSide: "left",
    tag: "Fulfillment",
    outcome: "100% reduction in manual routing",
    heading: [
      { text: "Automated ", phone: "dim", desktop: "dim" },
      { text: "order ", phone: "bright", desktop: "dim" },
      { text: "fulfillment", phone: "bright", desktop: "bright" },
    ],
    description:
      "Orders route to the right warehouse, picking is optimized, and shipment is generated automatically.",
  },
  {
    number: "02",
    numberSide: "right",
    tag: "Routing",
    outcome: "99.9% match accuracy",
    heading: [
      { text: "Carrier integration ", phone: "dim", desktop: "dim" },
      { text: "and ", phone: "bright", desktop: "dim" },
      { text: "routing", phone: "bright", desktop: "bright" },
    ],
    description:
      "Connect to multiple carriers, compare rates in real-time, and automate carrier selection.",
  },
  {
    number: "03",
    numberSide: "left",
    tag: "Realtime Track",
    outcome: "100% Realtime tracking of products",
    heading: [
      { text: "Real-time ", phone: "dim", desktop: "dim" },
      { text: "tracking and ", phone: "bright", desktop: "dim" },
      { text: "visibility", phone: "bright", desktop: "bright" },
    ],
    description:
      "Customers and your team track shipments live. Forecast delivery dates with accuracy.",
  },
  {
    number: "04",
    numberSide: "right",
    tag: "Automation",
    outcome: "40% support ticket deflection",
    heading: [
      { text: "Exception ", phone: "dim", desktop: "dim" },
      { text: "workflow automation", phone: "bright", desktop: "dim" },
    ],
    description:
      "Damage, delays, and delivery failures are detected and routed to resolution without manual escalation.",
  },
];

function NumberBlock({ number, tag }: { number: string; tag: string }) {
  return (
    <div className="flex w-full items-start justify-between max-md:order-1">
      <p className="step-number font-sora text-[56px] leading-none font-bold tracking-[-3px] text-white sm:text-7xl sm:tracking-[-4px] lg:text-[100px]">
        {number}
      </p>
      <p className="step-cell pt-2 font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase lg:pt-4">
        {tag}
      </p>
    </div>
  );
}

function OutcomeBlock({ outcome }: { outcome: string }) {
  return (
    <div className="step-cell mt-8 flex w-full flex-col gap-2 px-6 py-4 max-md:order-3 max-md:mt-0 max-md:w-auto max-md:gap-1 max-md:justify-self-start max-md:border-[0.8px] max-md:border-white/10 max-md:px-4 max-md:py-3">
      <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
        Outcome
      </p>
      <p className="text-[13px] leading-[19.5px] font-medium text-white md:text-sm md:leading-5">
        {outcome}
      </p>
    </div>
  );
}

function ContentBlock({
  heading,
  description,
}: {
  heading: Segment[];
  description: string;
}) {
  return (
    <div className="flex flex-col max-md:order-2 max-md:pt-4 max-md:pb-4">
      <p className="step-cell pb-3 font-sora text-[20px] leading-[26px] font-semibold tracking-[-0.5px] sm:text-2xl sm:leading-8 md:pb-5 lg:max-w-[430px] lg:text-[28px]">
        {heading.map((seg) => (
          <span key={seg.text} className={TONE[`${seg.phone}-${seg.desktop}`]}>
            {seg.text}
          </span>
        ))}
      </p>
      <p className="step-cell max-w-[430px] text-[13px] leading-[22px] text-white/55 sm:text-base sm:leading-7">
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
        src="/industries/logistics/build-glow-bg.png"
        alt=""
        fill
        className="pointer-events-none absolute inset-0 object-cover opacity-40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px]">
        <h2 className="gsap-fade build-fade translate-y-8 font-sora text-2xl leading-9 tracking-[-1px] text-white/25 sm:text-4xl sm:leading-10 sm:tracking-[-2px] lg:text-[47.8px]">
          How <span className="text-white">GroBird Helps</span>
        </h2>

        <div className="mt-8 flex flex-col border-t-[0.8px] border-white/20 sm:mt-16">
          {ROWS.map((row) => (
            <div
              key={row.number}
              className="gsap-fade build-row grid grid-cols-1 border-b-[0.8px] border-white/20 max-md:py-6 max-md:last:border-b-0 md:grid-cols-2"
            >
              {/*
                Below md the two cells dissolve (display: contents) so the
                blocks stack as number → copy → outcome, the phone order.
              */}
              <div
                className={`flex flex-col max-md:contents md:p-8 lg:p-14 ${
                  row.numberSide === "left"
                    ? "md:border-r-[0.8px] md:border-white/20"
                    : "justify-center md:border-r-[0.8px] md:border-white/20"
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
              <div className="flex flex-col justify-center max-md:contents md:p-8 lg:p-14">
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
