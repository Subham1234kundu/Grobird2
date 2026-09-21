"use client";

import Image from "next/image";
import { useRef } from "react";
import { cardsSlideReveal, useGSAP } from "@/lib/gsap";

const STATS = [
  { value: "70%", label: "Reduction in onboarding time" },
  { value: "99.9%", label: "Reconciliation accuracy" },
  { value: "0×", label: "Headcount added to scale 5×" },
];

export default function WhatWeAutomate() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      cardsSlideReveal(".automate-fade", { trigger: root.current });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-black px-6 pt-16 pb-0 sm:px-10 lg:px-[99px] lg:pt-[97px]"
    >
      <div className="mx-auto flex max-w-[1261px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <h2 className="gsap-fade automate-fade font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          What We <span className="text-[#ff884c]">Automate</span>
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1261px] grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[57px] lg:grid-cols-4 lg:gap-[32px]">
        {/* Data synchronization */}
        <div className="gsap-fade automate-fade relative flex h-[380px] flex-col overflow-hidden rounded-[12px] border border-white/16 bg-black px-4 pt-5 lg:h-[473px]">
          <Image
            src="/services/workflow-automation/card-data-sync-bg.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
          <div className="relative z-10 flex max-w-[267px] flex-col gap-[7px]">
            <p className="font-sora text-2xl text-white">Data synchronization</p>
            <p className="text-base text-white/50">
              When information changes in one system, it automatically
              updates everywhere it&apos;s needed.
            </p>
          </div>
          <div className="relative z-10 mx-auto mt-auto mb-6 flex w-[179px] flex-col divide-y divide-white/24 rounded-[8px] border border-white/24 lg:absolute lg:top-[205px] lg:left-[63px] lg:mx-0 lg:mt-0 lg:mb-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 px-4 py-4">
                <p className="font-sora text-[28px] font-semibold text-white">
                  {stat.value}
                </p>
                <p className="text-[11px] leading-tight text-[#e8e8e8]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Approval workflows */}
        <div className="gsap-fade automate-fade relative flex h-[380px] flex-col overflow-hidden rounded-[12px] border border-white/16 bg-black px-4 pt-5 lg:h-[473px]">
          <Image
            src="/services/workflow-automation/card-approval-bg.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
          <div className="relative z-10 flex max-w-[267px] flex-col gap-[7px]">
            <p className="font-sora text-2xl text-white">Approval workflows</p>
            <p className="text-base text-white/50">
              Requests route to the right person, escalate if needed, and
              create an audit trail without human orchestration.
            </p>
          </div>
          <div className="relative z-10 mt-auto mb-6 flex items-start justify-between rounded-[8px] border-[0.6px] border-white/28 bg-white/8 p-4 lg:absolute lg:top-[255px] lg:left-[87px] lg:mt-0 lg:mb-0 lg:w-[249px]">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-white">Approved Request</p>
              <div className="flex items-center gap-1.5">
                <p className="font-semibold text-2xl text-white">20K</p>
                <span className="rounded-[2px] border-[0.6px] border-[#14ca74]/20 bg-[#14ca74]/20 px-1 py-0.5 text-[10px] font-medium text-[#14ca74]">
                  28.4%
                </span>
              </div>
            </div>
            <Image
              src="/services/workflow-automation/icon-dots-three.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden
            />
          </div>
        </div>

        {/* Report generation and distribution */}
        <div className="gsap-fade automate-fade relative flex h-[380px] flex-col overflow-hidden rounded-[12px] border border-white/16 bg-black px-4 pt-5 lg:h-[473px]">
          <Image
            src="/services/workflow-automation/card-report-bg.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
          <div className="relative z-10 flex max-w-[282px] flex-col gap-[7px]">
            <p className="font-sora text-2xl text-white">
              Report generation and distribution
            </p>
            <p className="max-w-[267px] text-base text-white/50">
              Dashboards and reports update automatically and reach
              stakeholders on schedule.
            </p>
          </div>
        </div>

        {/* Trigger-based actions */}
        <div className="gsap-fade automate-fade relative flex h-[380px] flex-col overflow-hidden rounded-[12px] border border-white/16 bg-black px-4 pt-5 lg:h-[473px]">
          <Image
            src="/services/workflow-automation/card-trigger-bg.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
          <div className="relative z-10 flex max-w-[282px] flex-col gap-[7px]">
            <p className="font-sora text-2xl text-white">Trigger-based actions</p>
            <p className="max-w-[267px] text-base text-white/50">
              When something happens, the system responds automatically: send
              notification, create task, log data, fetch external info.
            </p>
          </div>
          <div className="relative z-10 mt-auto mb-6 flex flex-col gap-2 rounded-[12px] bg-black/45 p-3 backdrop-blur-[45px] lg:absolute lg:top-[270px] lg:left-[84px] lg:mt-0 lg:mb-0 lg:w-[320px]">
            <div className="flex items-center gap-2">
              <Image
                src="/services/workflow-automation/icon-notification-app.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
              />
              <p className="text-xs tracking-wide text-white/76 uppercase">
                Onboard_agent
              </p>
              <p className="ml-auto text-xs text-white/76 lowercase">1h ago</p>
            </div>
            <p className="text-sm font-bold tracking-[-0.14px] text-white/85">
              25 New Hires have being onboarded
            </p>
            <p className="text-xs text-white/76 lowercase">
              3 more notifications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
