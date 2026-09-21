"use client";

import Image from "next/image";
import Link from "next/link";
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
        scrollTrigger: {
          trigger: root.current,
          start: "top 85%",
        },
      });

      splitWordsReveal(".contact-desc", { start: "top 85%" });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[626px] items-center overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-12 lg:py-28"
    >
      <Image
        src="/industries/lending/contact-shapes.png"
        alt=""
        width={644}
        height={859}
        className="pointer-events-none absolute top-[-100px] left-1/2 hidden h-[859px] w-[644px] -translate-x-1/2 object-cover lg:left-[calc(50%+160px)] lg:translate-x-0 lg:block"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-[1194px] flex-col items-center gap-8 text-center">
        <h2 className="gsap-fade contact-fade translate-y-8 relative font-sora text-4xl tracking-[-2px] text-[#858382] sm:text-5xl lg:text-[71.7px]">
          <span className="block">{"Build Your"}</span>
          <span className="block">
            <span className="text-white">Origination</span>{" "}
            <span className="text-[#ff884c]">System</span>
          </span>
        </h2>

        <p className="gsap-fade contact-desc relative max-w-[500px] text-base leading-[27px] text-white">
          No canned proposals. We start by understanding your specific
          constraints, then tell you what&apos;s actually worth building.
        </p>

        <div className="relative flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="gsap-fade contact-fade translate-y-6 bg-[#ff884c] px-10 py-4 text-[15px] tracking-[0.5px] text-black transition-opacity hover:opacity-90"
          >
            Book discovery call
          </Link>
          <Link
            href="/industries"
            className="gsap-fade contact-fade translate-y-6 border-b-[0.8px] border-white pb-0.5 font-mono text-[11px] tracking-[2px] text-white uppercase transition-opacity hover:opacity-70"
          >
            View all industries →
          </Link>
        </div>
      </div>
    </section>
  );
}
