"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function ProblemStatement() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".problem-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
        },
      });

      // Each word starts at the muted grey (#858382, set in globals.css)
      // and only turns white one at a time, tied directly to scroll
      // position — the same color-reveal effect used on the landing
      // page's ProblemStatement.
      const colorSplit = SplitText.create(".gsap-color-reveal", {
        type: "words",
      });

      gsap.to(colorSplit.words, {
        color: "#ffffff",
        stagger: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".gsap-color-reveal",
          start: "top 85%",
          end: "top 15%",
          scrub: 1,
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex h-[300px] items-start overflow-hidden bg-black pt-10 sm:h-[380px] sm:pt-14 lg:h-[478px] lg:pt-[103px]"
    >
      <Image
        src="/services/operational-discovery/problem-lines-bg.png"
        alt=""
        fill
        className="object-cover opacity-70"
        aria-hidden
      />
      <p className="gsap-fade problem-fade gsap-color-reveal translate-y-8 relative z-10 mx-auto max-w-[800px] px-6 text-center font-sora text-2xl leading-[1.55] tracking-[-0.8px] sm:text-3xl lg:text-left lg:text-[36px] lg:leading-[56px]">
        We diagnose the root of your operational friction so solutions
        actually stick. Not the symptom. Not the tool gap. The process
        breakdown underneath it all.
      </p>
    </section>
  );
}
