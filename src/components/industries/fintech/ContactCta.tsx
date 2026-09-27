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
      className="relative flex items-center overflow-hidden bg-black px-5 pt-14 pb-16 sm:px-10 sm:py-24 lg:min-h-[626px] lg:px-12 lg:py-28"
    >
      <Image
        src="/industries/fintech/contact-bg.png"
        alt=""
        width={1080}
        height={1350}
        className="pointer-events-none absolute top-[-69px] left-[calc(50%+42px)] h-[735px] w-[588px] max-w-none -translate-x-1/2 object-cover opacity-70 lg:top-[-227px] lg:left-[calc(50%+401px)] lg:h-[1350px] lg:w-[1080px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[299px] left-[calc(50%+15.5px)] flex h-[543px] w-[1085px] -translate-x-1/2 items-center justify-center lg:top-[487px] lg:left-[calc(50%+209px)] lg:h-[736px] lg:w-[1472px]"
        aria-hidden
      >
        <Image
          src="/industries/fintech/contact-glow.png"
          alt=""
          width={736}
          height={1472}
          className="h-[1085px] w-[543px] max-w-none -rotate-90 object-cover opacity-70 blur-[72px] mix-blend-lighten lg:h-[1472px] lg:w-[736px]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 720px 500px at 50% 50%, rgba(0,0,0,0.6), rgba(0,0,0,0) 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-[1194px] flex-col items-center gap-6 text-center lg:gap-8">
        <p
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 font-sora font-bold tracking-[-4px] whitespace-nowrap text-[#ff884c]/[0.04] select-none sm:block sm:text-[130px] md:text-[160px] lg:text-[215px] lg:tracking-[-8px]"
        >
          FINTECH
        </p>

        <h2 className="gsap-fade contact-fade translate-y-8 relative font-sora text-[28px] leading-[32.2px] tracking-[-1.5px] text-white sm:text-5xl sm:leading-none sm:tracking-[-2px] sm:text-[#858382] lg:text-[71.7px]">
          <span className="block">{"Let's talk about"}</span>
          <span className="block">
            <span className="sm:text-white">your fintech</span>{" "}
            <span className="text-[#ff884c]">operations.</span>
          </span>
        </h2>

        <p className="gsap-fade contact-desc relative max-w-[320px] text-sm leading-6 text-white sm:max-w-[500px] sm:text-base sm:leading-[27px] sm:text-[#858382]">
          No canned proposals. We start by understanding your specific
          constraints, then tell you what&apos;s actually worth building.
        </p>

        <div className="gsap-fade contact-fade translate-y-6 relative flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 sm:pt-4">
          <Link
            href="/contact"
            className="w-[280px] max-w-full bg-[#ff884c] px-8 py-4 text-center font-sora text-sm leading-[21px] tracking-[0.5px] text-black transition-opacity hover:opacity-90 sm:w-auto sm:px-10 sm:font-sans sm:text-[15px] sm:leading-normal"
          >
            Discuss Fintech Operations
          </Link>
          <Link
            href="/industries"
            className="border-b-[0.8px] border-white pb-0.5 font-mono text-[11px] tracking-[2px] text-white uppercase transition-colors hover:text-white sm:border-[rgba(75,73,73,0.5)] sm:text-[#858382]"
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
