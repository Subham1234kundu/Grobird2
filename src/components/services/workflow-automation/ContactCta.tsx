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
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });

      splitWordsReveal(".contact-desc", { start: "top 85%" });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative flex min-h-[455px] items-center overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-6 py-20 sm:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 hidden h-full w-[720px] -translate-x-1/2 opacity-70 lg:block">
          <Image
            src="/services/workflow-automation/contact-beam-photo.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        <Image
          src="/services/workflow-automation/contact-glow-shape.svg"
          alt=""
          width={986}
          height={797}
          className="absolute top-[-120px] left-1/2 hidden w-[70%] -translate-x-1/2 opacity-60 lg:block"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[822px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-[19px]">
          <p className="gsap-fade contact-fade translate-y-8 font-sora text-3xl tracking-[-3px] text-[#858382] sm:text-4xl lg:text-[45px]">
            {"Let's identify where automation will have "}
            <span className="text-white">the biggest impact </span>
            <span className="text-[#ff884c]">on your operation.</span>
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
          Explore Automation Opportunities
        </a>
      </div>
    </section>
  );
}
