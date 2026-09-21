"use client";

import { useRef } from "react";
import { gsap, rowsRiseReveal, useGSAP } from "@/lib/gsap";

const FRICTIONS = [
  {
    number: "01.",
    question: "Manual data entry across systems",
    answer:
      "Information lives in one tool but needs to exist in another. Your team copies and pastes, risking errors.",
  },
  {
    number: "02.",
    question: "Approval routing without process",
    answer:
      "Requests loop through email or spreadsheets. No one knows who should approve next or when things are stuck.",
  },
  {
    number: "03.",
    question: "Repetitive manual calculations and formatting",
    answer:
      "Your team spends time on work that could be automated with the right configuration.",
  },
  {
    number: "04.",
    question: "Follow-up chasing and status reporting",
    answer:
      "Without visibility, managers spend time asking for updates instead of acting on data.",
  },
];

export default function WhatSlowsYouDown() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".slows-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
      rowsRiseReveal(".friction-fade");
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-6 pt-20 pb-0 sm:px-10 lg:px-[99px] lg:pt-[146px]">
      <div className="relative mx-auto max-w-[1261px]">
        <h2 className="gsap-fade slows-fade translate-y-8 font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          What Slows <span className="text-[#ff884c]">You Down</span>
        </h2>

        <dl className="slows-list mt-12 flex flex-col">
          {FRICTIONS.map((item) => (
            <div
              key={item.number}
              className="gsap-fade friction-fade grid grid-cols-1 gap-4 border-t border-[rgba(228,228,228,0.37)] py-8 last:border-b lg:grid-cols-[90px_1fr_360px] lg:items-center lg:gap-6"
            >
              <dt className="font-sora text-2xl tracking-[-0.84px] text-[#c3c3c3] lg:text-[32px]">
                {item.number}
              </dt>
              <dt className="font-sora text-2xl tracking-[-0.84px] text-white lg:text-[32px]">
                {item.question}
              </dt>
              <dd className="text-[16px] leading-6 text-[#737373]">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
