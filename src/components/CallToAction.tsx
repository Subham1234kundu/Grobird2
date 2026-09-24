"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";

export default function CallToAction() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".cta-panel", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
        },
      });

      splitWordsReveal(".cta-desc", { start: "top 85%" });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden">
      <Image
        src="/landing/cta-bg.png"
        alt=""
        fill
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/[0.42] lg:bg-black/40" aria-hidden />

      {/* Phones: 569px tall, headline at the top, copy and button pinned
          to the bottom. Desktop: one row. */}
      <div className="cta-panel relative mx-auto flex min-h-[569px] w-full max-w-[1276px] translate-y-8 flex-col px-[25px] pt-[68px] pb-[46px] opacity-0 sm:min-h-0 sm:gap-10 sm:px-10 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <h2 className="max-w-[380px] font-sora text-[32px] leading-10 tracking-[-2px] text-white sm:max-w-lg sm:text-4xl sm:leading-tight sm:font-semibold sm:tracking-normal">
          Ready to understand your operational roadmap?
        </h2>

        <div className="mt-auto flex max-w-md flex-col items-start gap-8 sm:mt-0">
          <p className="gsap-fade cta-desc max-w-[371px] text-base leading-[1.27] text-white sm:max-w-none sm:leading-relaxed">
            Start with a diagnostic conversation. We&apos;ll review your
            processes and systems, identify what&apos;s holding you back, and
            outline a path forward.
          </p>
          <a
            href="/contact"
            className="flex h-[58px] items-center gap-[10px] bg-white px-[18px] text-base font-medium text-black transition-transform hover:scale-105 sm:h-auto sm:py-[9px]"
          >
            Schedule an Operational Discovery Call
            <Image
              src="/landing/arrow-up-right.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}
