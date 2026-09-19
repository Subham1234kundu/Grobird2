"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const PILLARS = [
  "We build for outcomes, not features. Every system we create reduces operational cost, increases control, and creates room for your business to scale.",
  "We work with the buying committee, not against it. We know your CFO cares about ROI, your Head of Operations cares about running the department smoothly, and your technical team cares about integration and maintainability. We address all three.",
  "We stay invested after launch. Technology is only valuable if it keeps working. We offer ongoing support and optimization to protect your investment and adapt to growth.",
];

export default function WhyChooseUs() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".why-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-black bg-[url('/landing/why-choose-bg.png')] bg-cover bg-center px-6 py-24 sm:px-10"
    >
      <div className="mx-auto max-w-[772px] text-center">
        <h2 className="gsap-fade why-fade translate-y-8 font-sora text-4xl tracking-tight text-[#858382] sm:text-5xl lg:text-[57px] lg:tracking-[-2.5px]">
          Why Choose <span className="text-[#ff884c]">GroBird</span>
        </h2>
        <p className="gsap-fade why-fade mt-4 translate-y-8 text-base leading-relaxed text-white">
          We think like operators, not vendors. We don&apos;t start with a
          tool. We start with your problem. We understand that technology
          serves operations, not the reverse.
        </p>
      </div>

      <div className="mx-auto mt-20 grid max-w-[1060px] grid-cols-1 gap-10 text-justify text-lg text-white sm:grid-cols-3">
        {PILLARS.map((text) => (
          <p key={text} className="gsap-fade why-fade translate-y-8">
            {text}
          </p>
        ))}
      </div>

      <div className="mx-auto mt-20 grid max-w-[1236px] grid-cols-1 gap-px overflow-hidden border border-[#dfdfdf] bg-[#dfdfdf] sm:grid-cols-3">
        <div className="gsap-fade why-fade flex translate-y-8 items-center justify-between gap-4 bg-[#fafafa] p-6">
          <div>
            <p className="font-mono text-4xl font-extralight text-black">
              85%
            </p>
            <p className="mt-2 text-xs font-semibold tracking-wide text-black uppercase">
              Improvement in business forecasting accuracy
            </p>
          </div>
          <Image
            src="/landing/arrow-up-right.svg"
            alt=""
            width={16}
            height={15}
            aria-hidden
            className="shrink-0 bg-[#ff884c] p-2"
          />
        </div>

        <div className="gsap-fade why-fade flex translate-y-8 flex-col justify-center gap-4 bg-[#fafafa] p-6">
          <p className="text-xs font-semibold tracking-wide text-black uppercase">
            Grobird didn&apos;t just write code; they{" "}
            <span className="text-[#ff884c]">engineered the core</span>{" "}
            software behind PresalesForce.ai.
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="/landing/psf-logo-white.png"
              alt="PresalesForce.ai"
              width={65}
              height={22}
              className="h-[22px] w-auto invert"
            />
            <span className="text-[11.6px] tracking-wide text-black uppercase">
              Satya Murthy
            </span>
            <span className="h-4 w-px bg-[#b1b1b1]" aria-hidden />
            <span className="text-[11.8px] tracking-wide text-black uppercase">
              Co-Founder, PSF
            </span>
          </div>
        </div>

        <div className="gsap-fade why-fade flex translate-y-8 items-center justify-between gap-4 bg-[#fafafa] p-6">
          <div>
            <p className="font-mono text-4xl font-extralight text-black">
              32%
            </p>
            <p className="mt-2 text-xs font-semibold tracking-wide text-black uppercase">
              Faster decision-making speed through data integration
            </p>
          </div>
          <Image
            src="/landing/arrow-up-right.svg"
            alt=""
            width={16}
            height={15}
            aria-hidden
            className="shrink-0 bg-[#ff884c] p-2"
          />
        </div>
      </div>
    </section>
  );
}
