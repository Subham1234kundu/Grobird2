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
      className="relative flex items-center overflow-hidden bg-black px-5 pt-14 pb-16 sm:px-10 sm:py-24 lg:min-h-[626px] lg:px-12 lg:py-28"
    >
      {/* Phone / tablet: soft blurred shapes behind the copy */}
      <Image
        src="/industries/lending/contact-shapes.png"
        alt=""
        width={380}
        height={507}
        className="pointer-events-none absolute top-[calc(50%+52.6px)] left-[calc(50%+5px)] h-[507px] w-[380px] -translate-x-1/2 -translate-y-1/2 object-cover blur-[4.1px] lg:hidden"
        aria-hidden
      />
      <Image
        src="/industries/lending/contact-shapes.png"
        alt=""
        width={644}
        height={859}
        className="pointer-events-none absolute top-[-100px] left-1/2 hidden h-[859px] w-[644px] -translate-x-1/2 object-cover lg:left-[calc(50%+160px)] lg:translate-x-0 lg:block"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-[1194px] flex-col items-center gap-6 text-center lg:gap-8">
        <h2 className="gsap-fade contact-fade translate-y-8 relative font-sora text-[28px] leading-[32.2px] tracking-[-1.5px] text-[#858382] sm:text-5xl sm:leading-none sm:tracking-[-2px] lg:text-[71.7px]">
          <span className="block">{"Build Your"}</span>
          <span className="block">
            <span className="text-white">Origination</span>{" "}
            <span className="text-white lg:text-[#ff884c]">System</span>
          </span>
        </h2>

        <p className="gsap-fade contact-desc relative max-w-[320px] text-[14px] leading-6 text-white sm:max-w-[500px] sm:text-base sm:leading-[27px]">
          No canned proposals. We start by understanding your specific
          constraints, then tell you what&apos;s actually worth building.
        </p>

        <div className="relative flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 sm:pt-4">
          <Link
            href="/contact"
            className="gsap-fade contact-fade translate-y-6 w-[280px] bg-[#ff884c] px-8 py-4 text-center font-sora text-[14px] tracking-[0.5px] text-black transition-opacity hover:opacity-90 max-sm:leading-[21px] sm:w-auto sm:px-10 sm:font-sans sm:text-[15px]"
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
