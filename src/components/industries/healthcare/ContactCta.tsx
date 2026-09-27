"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";
import ArrowIcon from "@/components/ui/ArrowIcon";

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
    <section
      ref={root}
      className="relative flex items-center overflow-hidden bg-black px-5 pt-14 pb-16 sm:min-h-[626px] sm:px-10 sm:py-24 lg:px-12 lg:py-28"
    >
      <Image
        src="/industries/healthcare/contact-photo.png"
        alt=""
        width={958}
        height={958}
        className="pointer-events-none absolute top-0 left-0 size-full object-cover opacity-60 blur-[17px] lg:top-[147px] lg:left-[257px] lg:size-[958px] lg:opacity-70"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-[1194px] flex-col items-center gap-6 text-center lg:gap-8">
        <h2 className="gsap-fade contact-fade translate-y-8 relative font-sora text-[28px] leading-[32.2px] tracking-[-1.5px] text-[#858382] sm:text-5xl sm:leading-none sm:tracking-[-2px] lg:text-[57px]">
          <span>
            {"Let's map your operations and show "}
            <span className="text-white">{"you what's "}</span>
            <span className="text-[#ff884c]">automatable.</span>
          </span>
        </h2>

        <p className="gsap-fade contact-desc relative max-w-[320px] text-sm leading-6 text-white sm:max-w-[500px] sm:text-base sm:leading-[27px]">
          No canned proposals. We start by understanding your specific
          constraints, then tell you what&apos;s actually worth building.
        </p>

        <div className="relative flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 sm:pt-4">
          <Link
            href="/contact"
            className="gsap-fade contact-fade translate-y-6 bg-[#ff884c] px-10 py-4 text-[15px] tracking-[0.5px] text-black transition-opacity hover:opacity-90 max-sm:w-[280px] max-sm:max-w-full max-sm:px-8 max-sm:text-center max-sm:font-sora max-sm:text-sm max-sm:leading-[21px]"
          >
            Book discovery call
          </Link>
          <Link
            href="/industries"
            className="gsap-fade contact-fade translate-y-6 border-b-[0.8px] border-white pb-0.5 font-mono text-[11px] tracking-[2px] text-white uppercase transition-opacity hover:opacity-70"
          >
            <span className="inline-flex items-center gap-1.5">
              View all industries
              <ArrowIcon direction="right" className="size-3" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
