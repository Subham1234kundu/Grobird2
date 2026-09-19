"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

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
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="cta-panel relative mx-auto flex max-w-[1276px] translate-y-8 flex-col gap-10 px-6 py-24 opacity-0 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-lg font-sora text-3xl leading-tight font-semibold text-white sm:text-4xl">
          Ready to understand your operational roadmap?
        </h2>

        <div className="flex max-w-md flex-col items-start gap-8">
          <p className="leading-relaxed text-white">
            Start with a diagnostic conversation. We&apos;ll review your
            processes and systems, identify what&apos;s holding you back, and
            outline a path forward.
          </p>
          <a
            href="/contact"
            className="flex items-center gap-[10px] bg-white px-[18px] py-[9px] font-medium text-black transition-transform hover:scale-105"
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
