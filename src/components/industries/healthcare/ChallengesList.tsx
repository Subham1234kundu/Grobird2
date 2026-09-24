"use client";

import { useRef } from "react";
import { gsap, rowsRiseReveal, useGSAP } from "@/lib/gsap";

const CHALLENGES = [
  {
    title: "Eligibility verification is manual and slow",
    description:
      "Staff call insurers or search portals. Real-time verification is rare.",
  },
  {
    title: "Claims submission requires rework",
    description: "Incomplete claims bounce. Staff resubmit manually.",
  },
  {
    title: "Prior authorization is a bottleneck",
    description:
      "Doctors wait for approvals. Paperwork gets lost. Processes are opaque.",
  },
  {
    title: "Patient communication is ad-hoc",
    description:
      "Billing questions loop through email or phone. Status updates are manual.",
  },
];

export default function ChallengesList() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".challenges-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });
      rowsRiseReveal(".challenge-row");
    },
    { scope: root },
  );

  return (
    <section ref={root} className="border-b-[0.8px] border-black/8 bg-black px-5 py-10 sm:px-10 sm:py-16 lg:px-14 lg:py-24">
      <div className="mx-auto flex max-w-[1204px] flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="gsap-fade challenges-fade translate-y-8 font-sora text-4xl tracking-[-2px] whitespace-nowrap text-white/20 max-sm:text-2xl max-sm:tracking-[-1px] lg:text-[47.8px]">
          <span className="block max-sm:leading-[26.4px]">Operations challenges</span>
          <span className="block text-white max-sm:mt-1 max-sm:leading-9">in healthcare.</span>
        </h2>
        <p className="gsap-fade challenges-fade translate-y-6 text-[13px] leading-[22px] text-[#4b4949] sm:max-w-[300px] sm:text-sm sm:leading-6">
          Every deliverable maps directly to a recommendation in your
          analysis — no scope drift.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1204px] flex-col gap-9 border-[rgba(75,73,73,0.35)] sm:mt-16 sm:gap-0 sm:border-t-[0.8px]">
        {CHALLENGES.map((item) => (
          <div
            key={item.title}
            className="gsap-fade challenge-row flex flex-col gap-2 border-t-[0.8px] border-[rgba(75,73,73,0.35)] py-5 last:border-b-[0.8px] sm:border-t-0 sm:border-b-[0.8px] sm:py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
          >
            <p className="font-sora text-[15px] leading-[19.5px] font-semibold text-white sm:text-xl sm:leading-[1.4] lg:text-[22px]">
              {item.title}
            </p>
            <p className="text-[13px] leading-[22px] text-white/55 sm:max-w-[430px] sm:text-base sm:leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
