"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function ProblemStatement() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Every word starts at the muted grey (#858382, set in globals.css)
      // and only turns white one at a time, tied directly to scroll
      // position — the same reveal used on the landing page.
      gsap.utils.toArray<HTMLElement>(".gsap-color-reveal").forEach((para) => {
        const split = SplitText.create(para, { type: "words" });

        gsap.to(split.words, {
          color: "#ffffff",
          stagger: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: para,
            start: "top 85%",
            end: "top 15%",
            scrub: 1,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black py-16 sm:py-20 lg:h-[725px] lg:py-0">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-145px] left-[63px] hidden h-[1118px] w-[1313px] opacity-80 lg:block">
          <Image
            src="/services/system-integration/problem-pattern.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden
          />
        </div>
        <div
          className="absolute top-[-292px] left-[615px] hidden h-[1456px] w-[816px] lg:block"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, transparent 22%, white 48%, white 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, transparent 22%, white 48%, white 100%)",
          }}
        >
          <Image
            src="/services/system-integration/problem-circuit.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #000 0%, transparent 34%, transparent 86%, #000 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[955px] flex-col gap-8 px-6 sm:px-10 lg:absolute lg:top-[57.2px] lg:left-1/2 lg:mx-0 lg:block lg:-translate-x-1/2 lg:px-0">
        <p className="gsap-color-reveal font-sora text-2xl leading-[1.55] tracking-[-0.8px] sm:text-3xl lg:text-[36px] lg:leading-[56px]">
          Fragmented systems create fragmented workflows. A customer updates
          an order in your CRM, but inventory doesn&apos;t know. Operations
          works with stale data. Forecasts suffer.
        </p>
        <p className="gsap-color-reveal font-sora text-2xl leading-[1.55] tracking-[-0.8px] sm:text-3xl lg:mt-[46px] lg:text-[36px] lg:leading-[56px]">
          Real integration changes that. Data enters once, updates
          everywhere. Your team has consistent information. Decisions are
          better. Execution is faster.
        </p>
      </div>
    </section>
  );
}
