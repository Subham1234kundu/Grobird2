"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const TABS = [
  {
    number: "01",
    label: "Manual Order",
    heading: "Manual order fulfillment creates bottlenecks",
    description:
      "Orders pile up faster than your team can process. Picking errors increase. Time to ship extends.",
    costLabel: "Typical cost",
    cost: "~4hrs avg. manual review per customer",
  },
  { number: "02", label: "Fragmented Carrier Management" },
  { number: "03", label: "Visibility Gaps" },
  { number: "04", label: "Exception Handling" },
] as const;

// Below lg the Figma frame swaps the tab explorer for a flat list of all
// four challenges, each with its own description.
const CHALLENGES = [
  {
    heading: "Manual order fulfillment creates bottlenecks",
    description:
      "Orders pile up faster than your team can process. Picking errors increase. Time to ship extends.",
  },
  {
    heading: "Fragmented carrier management",
    description:
      "Different carrier APIs, different formats, manual routing decisions.",
  },
  {
    heading: "Visibility gaps across network",
    description:
      "You don't see inventory position or shipment status in real-time. Customer inquiry response is slow.",
  },
  {
    heading: "Exception handling consumes time",
    description:
      "Damaged goods. Lost shipments. Delivery failures. Manual investigation and resolution.",
  },
];

export default function ChallengesTabs() {
  const root = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const tab = TABS[activeTab];

  useGSAP(
    () => {
      gsap.to(".challenges-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });

      // The tab chips deal in one at a time, so the row assembles rather
      // than appearing whole.
      gsap.fromTo(
        ".challenge-tab",
        { y: 20, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          ease: "back.out(1.7)",
          stagger: 0.09,
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        },
      );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="border-b-[0.8px] border-black/8 bg-black px-5 py-10 sm:px-10 sm:py-16 lg:px-[136px] lg:py-[64px]"
    >
      <div className="mx-auto max-w-[1168px]">
        <h2 className="gsap-fade challenges-fade translate-y-8 font-sora text-2xl tracking-[-1px] text-white/25 sm:text-4xl sm:tracking-[-2px] lg:text-[47.8px]">
          <span className="block leading-[26.4px] text-white/20 sm:leading-10 sm:text-white/25">
            Operations challenges
          </span>
          <span className="mt-1 block leading-9 text-white sm:mt-0 sm:leading-10">
            in Logistics.
          </span>
        </h2>
        <p className="gsap-fade challenges-fade translate-y-6 mt-3 text-[13px] leading-[22px] text-[#4b4949] sm:text-sm lg:hidden">
          Every deliverable maps directly to a recommendation in your analysis
          — no scope drift.
        </p>

        <ul className="gsap-fade challenges-fade translate-y-6 mt-8 flex flex-col gap-9 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8 lg:hidden">
          {CHALLENGES.map((item, i) => (
            <li
              key={item.heading}
              className={`border-t-[0.8px] border-[rgba(75,73,73,0.35)] py-5 sm:border-b-[0.8px] ${
                i === CHALLENGES.length - 1 ? "border-b-[0.8px]" : ""
              }`}
            >
              <p className="font-sora text-[15px] leading-[19.5px] font-semibold text-white sm:text-base sm:leading-6">
                {item.heading}
              </p>
              <p className="mt-2 text-[13px] leading-[22px] text-white/55 sm:text-sm sm:leading-6">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="gsap-fade challenges-fade translate-y-6 mt-16 hidden flex-wrap gap-2 lg:flex">
          {TABS.map((t, i) => (
            <button
              key={t.number}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`challenge-tab flex items-center gap-3 border-t-[1.6px] px-5 py-3 text-left transition-colors ${
                activeTab === i
                  ? "border-[#ff884c] bg-[#ff884c]/19"
                  : "border-white/25 bg-white/15"
              }`}
            >
              <span
                className={`font-mono text-[10px] tracking-[1px] ${
                  activeTab === i ? "text-white" : "text-white/30"
                }`}
              >
                {t.number}
              </span>
              <span
                className={`text-xs font-medium whitespace-nowrap ${
                  activeTab === i ? "text-white" : "text-white/69"
                }`}
              >
                {t.label}
              </span>
            </button>
          ))}
        </div>

        <div className="gsap-fade challenges-fade translate-y-6 mt-16 hidden flex-col gap-10 lg:flex lg:flex-row lg:items-start lg:justify-between">
          {"heading" in tab ? (
            <>
              <div className="flex flex-col justify-between lg:max-w-[693px]">
                <p className="font-sora text-2xl font-semibold tracking-[-0.5px] text-white lg:text-[30px]">
                  {tab.heading}
                </p>
                <p className="mt-5 max-w-[580px] text-base leading-7 text-white/55">
                  {tab.description}
                </p>
              </div>
              <div className="flex min-w-[240px] max-w-[350px] flex-col gap-3 bg-[#ff884c] px-8 py-6">
                <p className="font-mono text-[10px] tracking-[2px] text-white uppercase">
                  {tab.costLabel}
                </p>
                <p className="text-[15px] font-medium text-black">{tab.cost}</p>
              </div>
            </>
          ) : (
            <p className="text-base text-white/40">
              Content for this challenge is coming soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
