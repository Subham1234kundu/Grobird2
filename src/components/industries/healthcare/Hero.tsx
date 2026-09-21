"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".hero-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });

      splitWordsReveal(".hero-desc", { start: "top 85%" });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-6 py-16 sm:px-10 lg:min-h-[760px] lg:flex-row lg:items-center lg:justify-between lg:px-[102px] lg:py-[154px]">
        <div className="flex max-w-[674px] flex-col">
          <h1 className="gsap-fade hero-fade translate-y-8 font-sora text-5xl leading-[1.06] tracking-[-2px] text-[#4a4848] sm:text-6xl lg:text-[77.6px] lg:leading-[82.3px]">
            <span className="block">Streamlined</span>
            <span className="block">operations</span>
            <span className="block text-white">for healthcare</span>
            <span className="block text-[#ff884c]">providers.</span>
          </h1>
          <p className="gsap-fade hero-desc mt-8 max-w-[612px] text-lg leading-[30px] text-white/70">
            We&apos;ve built automation systems for healthcare organizations
            that handle eligibility verification, claims processing, prior
            authorization workflows, and patient communication. Faster
            processing. Fewer errors. Better cash flow.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 right-0 hidden h-full w-[45%] lg:block">
        <Image
          src="/industries/healthcare/hero-photo.png"
          alt=""
          fill
          className="object-cover object-left"
          aria-hidden
        />
      </div>
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-[349px] bg-gradient-to-b from-black/0 via-black/80 via-70% to-black"
        aria-hidden
      />
    </section>
  );
}
