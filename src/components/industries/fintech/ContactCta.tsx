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
        scrollTrigger: { trigger: root.current, start: "top 85%" },
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
        src="/industries/fintech/contact-bg.png"
        alt=""
        width={1080}
        height={1350}
        className="pointer-events-none absolute top-[-227px] left-1/2 hidden h-[1350px] w-[1080px] -translate-x-1/2 object-cover opacity-70 lg:left-[calc(50%+401px)] lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[487px] left-1/2 hidden h-[736px] w-[1472px] -translate-x-1/2 lg:left-[calc(50%+209px)] lg:flex lg:items-center lg:justify-center"
        aria-hidden
      >
        <Image
          src="/industries/fintech/contact-glow.png"
          alt=""
          width={736}
          height={1472}
          className="h-[1472px] w-[736px] -rotate-90 object-cover opacity-70 blur-[72px] mix-blend-lighten"
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

      <div className="relative mx-auto flex max-w-[1194px] flex-col items-center gap-8 text-center">
        <p
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sora text-[140px] font-bold tracking-[-4px] whitespace-nowrap text-[#ff884c]/[0.04] select-none sm:text-[180px] lg:text-[215px] lg:tracking-[-8px]"
        >
          FINTECH
        </p>

        <h2 className="gsap-fade contact-fade translate-y-8 relative font-sora text-4xl tracking-[-2px] text-[#858382] sm:text-5xl lg:text-[71.7px]">
          <span className="block">{"Let's talk about"}</span>
          <span className="block">
            <span className="text-white">your fintech</span>{" "}
            <span className="text-[#ff884c]">operations.</span>
          </span>
        </h2>

        <p className="gsap-fade contact-desc relative max-w-[500px] text-base leading-[27px] text-[#858382]">
          No canned proposals. We start by understanding your specific
          constraints, then tell you what&apos;s actually worth building.
        </p>

        <div className="gsap-fade contact-fade translate-y-6 relative flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="bg-[#ff884c] px-10 py-4 text-[15px] tracking-[0.5px] text-black transition-opacity hover:opacity-90"
          >
            Discuss Fintech Operations
          </Link>
          <Link
            href="/industries"
            className="border-b-[0.8px] border-[rgba(75,73,73,0.5)] pb-0.5 font-mono text-[11px] tracking-[2px] text-[#858382] uppercase transition-colors hover:text-white"
          >
            View all industries →
          </Link>
        </div>
      </div>
    </section>
  );
}
