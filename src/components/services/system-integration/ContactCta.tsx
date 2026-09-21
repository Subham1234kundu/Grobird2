"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";

export default function ContactCta() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".contact-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });

      splitWordsReveal(".contact-desc", { start: "top 85%" });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative flex min-h-[455px] items-center overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-6 py-20 sm:px-10">
      <div
        className="pointer-events-none absolute top-[calc(50%+254.9px)] left-[calc(50%-51px)] hidden h-[900px] w-[720px] -translate-x-1/2 -translate-y-1/2 lg:block"
        aria-hidden
      >
        <Image
          src="/services/system-integration/contact-photo.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div
        className="pointer-events-none absolute top-[calc(50%-102.6px)] left-[calc(50%+20px)] hidden h-[797px] w-[986px] -translate-x-1/2 -translate-y-1/2 lg:block"
        aria-hidden
      >
        <Image
          src="/services/system-integration/contact-shape.svg"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[822px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-[19px]">
          <p className="gsap-fade contact-fade translate-y-8 font-sora text-3xl tracking-[-3px] text-[#858382] sm:text-4xl lg:text-[45px]">
            {"Let's map your integration roadmap and "}
            <span className="text-white">{"eliminate "}</span>
            <span className="text-[#ff884c]">data silos.</span>
          </p>
          <p className="gsap-fade contact-desc text-base leading-[27px] text-white">
            Start your discovery today. We deliver a decision-ready roadmap
            in four weeks — no vendor bias, no guesswork.
          </p>
        </div>

        <a
          href="/contact"
          className="gsap-fade contact-fade translate-y-6 bg-[#ff884c] px-10 py-4 text-[15px] tracking-[0.5px] text-white transition-opacity hover:opacity-90"
        >
          Plan Your System Integration
        </a>
      </div>
    </section>
  );
}
