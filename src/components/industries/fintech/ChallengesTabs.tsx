"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const TABS = [
  {
    number: "01",
    label: "KYC / AML",
    heading: "Manual compliance checks throttle onboarding",
    description:
      "Every KYC and AML check that requires a human slows your funnel. Clean customers wait behind flagged ones. Your team spends hours on work that should take seconds.",
    costLabel: "Typical cost",
    cost: "~4hrs avg. manual review per customer",
  },
  { number: "02", label: "Reconciliation" },
  { number: "03", label: "Data Fragmentation" },
  { number: "04", label: "Scale" },
] as const;

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
        stagger: 0.1,
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
      className="border-b-[0.8px] border-black/8 bg-black px-6 py-16 sm:px-10 lg:px-[136px] lg:py-[64px]"
    >
      <div className="mx-auto max-w-[1168px]">
        <h2 className="gsap-fade challenges-fade translate-y-8 font-sora text-4xl tracking-[-2px] whitespace-nowrap text-white/25 lg:text-[47.8px]">
          <span className="block">Operations challenges</span>
          <span className="block text-white">every fintech hits.</span>
        </h2>

        <div className="gsap-fade challenges-fade translate-y-6 mt-16 flex flex-wrap gap-2">
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
                className={`text-xs font-medium ${
                  activeTab === i ? "text-white" : "text-white/69"
                }`}
              >
                {t.label}
              </span>
            </button>
          ))}
        </div>

        <div className="gsap-fade challenges-fade translate-y-6 mt-16 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
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
