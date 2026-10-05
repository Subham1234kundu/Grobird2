"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  cardsLiftReveal,
  gsap,
  parallaxLayer,
  splitWordsReveal,
  useGSAP,
} from "@/lib/gsap";
import ArrowIcon from "@/components/ui/ArrowIcon";

const STAKEHOLDERS = [
  {
    tag: "CFO",
    title: "Sees clear ROI",
    description:
      "Every recommendation comes with a business case. Investment in the audit pays for itself in avoided wasted software spend.",
  },
  {
    tag: "Head of Operations",
    title: "Sees workflow clarity",
    description:
      "Documented processes, mapped hand-offs, and identified redundancies — with a fix priority your team can actually act on.",
  },
  {
    tag: "Tech Team",
    title: "Sees integration requirements",
    description:
      "System-to-system data flow documented, gaps named, and technical complexity scoped before a line of code is written.",
  },
];

export default function WhyAuditFirst() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".why-audit-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
        },
      });

      splitWordsReveal(".why-audit-desc", { start: "top 80%" });

      parallaxLayer(".why-audit-dots", { trigger: root.current });

      cardsLiftReveal(".why-audit-card", { cells: ".why-audit-cell" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".why-audit-panel-fade",
            start: "top 90%",
          },
        })
        .to(".why-audit-panel-fade", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .fromTo(
          ".why-audit-arrow",
          { scale: 0.4, opacity: 0, rotate: -45 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.7,
            ease: "back.out(2.2)",
          },
          "-=0.35",
        );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-[#ff884c] px-5 pt-[76px] pb-[78px] sm:px-10 sm:py-16 lg:px-[80px] lg:py-[122px]"
    >
      {/* Dot grid matching the Figma export (same pitch and dot size), drawn
          as black dots on a transparent PNG at 2x for the full 1440px canvas.
          The container width sets how far right the dots reach; the dots are
          anchored to the bottom-left, leaving the gap at the top. */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full lg:left-1/2 lg:w-[1440px] lg:-translate-x-1/2"
        aria-hidden
      >
        <div className="why-audit-dots absolute top-[26px] left-5 h-[533px] w-[546px] max-w-none mix-blend-color-burn sm:top-auto sm:bottom-0 sm:left-0 sm:h-[853px] sm:w-[700px] sm:max-w-full sm:opacity-[41%] sm:mix-blend-normal">
          <Image
            src="/services/operational-discovery/why-audit-dots.png"
            alt=""
            fill
            sizes="700px"
            className="object-cover object-right-top sm:object-left-bottom"
          />
        </div>
      </div>
      <div className="relative mx-auto flex max-w-[1285px] flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="gsap-fade why-audit-fade translate-y-8 font-sora text-[28px] leading-[32.2px] tracking-[-1.5px] whitespace-nowrap text-white max-[380px]:text-[24px] sm:text-4xl sm:leading-normal sm:tracking-normal sm:whitespace-normal sm:text-white/57 lg:text-[56px]">
          Why Operational <span className="text-white">Audit First?</span>
        </h2>
        <p className="gsap-fade why-audit-desc text-sm leading-6 text-white sm:text-base sm:leading-[27.2px] lg:max-w-[436px]">
          Too many companies buy software and hire consultants without
          understanding what they&apos;re actually trying to fix. An audit
          aligns everyone on the same diagnosis — before you spend.
        </p>
      </div>

      <div className="relative mx-auto mt-[34px] grid max-w-[1285px] grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-3">
        {STAKEHOLDERS.map((item) => (
          <div
            key={item.tag}
            className="gsap-fade why-audit-card flex h-[306px] flex-col rounded-[12px] border-[0.8px] border-[rgba(228,228,228,0.88)] bg-white/4 px-7 py-9 backdrop-blur-[23px] sm:border-white/6 sm:bg-white/6"
          >
            <span className="why-audit-cell w-fit rounded-[4px] border-[0.8px] border-white/19 px-3 py-1.5 font-sora text-[11px] font-semibold tracking-[0.88px] text-white uppercase">
              {item.tag}
            </span>
            <h3 className="why-audit-cell mt-[29px] max-w-[267px] font-sora text-[22px] leading-[33px] font-bold tracking-[-0.44px] text-white sm:mt-6 sm:max-w-none">
              {item.title}
            </h3>
            <p className="why-audit-cell mt-3.5 max-w-[267px] text-sm leading-[23.8px] text-white/81">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="gsap-fade why-audit-panel-fade translate-y-8 relative mx-auto mt-6 flex max-w-[1285px] flex-col gap-7 rounded-[12px] border-[0.8px] border-white/6 bg-white/8 px-10 py-9 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 lg:px-10">
        <div>
          <p className="font-sora text-[11px] leading-[16.5px] font-semibold tracking-[1.32px] text-white uppercase">
            Investment Protection
          </p>
          <p className="max-w-[302px] font-sora text-xl leading-[29px] font-semibold tracking-[-0.4px] text-white sm:mt-2.5 sm:max-w-[831px] sm:leading-normal">
            With a clear diagnosis, the solutions you build address actual
            problems, not perceived ones.
          </p>
        </div>
        <div className="why-audit-arrow flex size-[60px] shrink-0 items-center justify-center rounded-full border-[1.6px] border-white text-white">
          <ArrowIcon direction="up-right" className="size-6" />
        </div>
      </div>
    </section>
  );
}
