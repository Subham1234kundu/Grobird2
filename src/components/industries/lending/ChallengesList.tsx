"use client";

import { useRef } from "react";
import { gsap, rowsRiseReveal, useGSAP } from "@/lib/gsap";

const CHALLENGES = [
  {
    title: "Manual document collection slows origination",
    description:
      "Back-and-forth with borrowers for payslips, tax returns, bank statements.",
  },
  {
    title: "Underwriting requires rework",
    description:
      "Incomplete applications bounce. Missing documents delay decisions.",
  },
  {
    title: "Verification is labor-intensive",
    description:
      "Employment checks, income verification, and title review are manual.",
  },
  {
    title: "Approval routing lacks transparency",
    description:
      "Borrowers don't know where their application is. Staff struggle to track status.",
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
    <section
      ref={root}
      className="border-b-[0.8px] border-black/8 bg-black px-5 py-10 sm:px-10 sm:py-16 lg:px-14 lg:py-24"
    >
      <div className="mx-auto flex max-w-[1204px] flex-col gap-3 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="gsap-fade challenges-fade translate-y-8 font-sora text-[24px] tracking-[-1px] whitespace-nowrap text-white/20 sm:text-4xl sm:tracking-[-2px] lg:text-[47.8px]">
          <span className="block leading-[26.4px] sm:leading-[1.1112]">
            Operations challenges
          </span>
          <span className="mt-1 block leading-9 text-white sm:mt-0 sm:leading-[1.1112]">
            in Lending
          </span>
        </h2>
        <p className="gsap-fade challenges-fade translate-y-6 text-[13px] leading-[22px] text-[#4b4949] sm:text-sm sm:leading-6 sm:text-white lg:max-w-[300px]">
          Every deliverable maps directly to a recommendation in your
          analysis — no scope drift.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1204px] flex-col gap-9 sm:mt-12 lg:mt-16 lg:gap-0">
        {CHALLENGES.map((item) => (
          <div
            key={item.title}
            className="gsap-fade challenge-row flex flex-col gap-2 border-t-[0.8px] border-[rgba(75,73,73,0.35)] py-5 last:border-b-[0.8px] sm:py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
          >
            <p className="font-sora text-[15px] leading-[19.5px] font-semibold text-white sm:text-xl sm:leading-[1.4] lg:text-[22px]">
              {item.title}
            </p>
            <p className="text-[13px] leading-[22px] text-white/55 sm:text-base sm:leading-7 lg:max-w-[430px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
