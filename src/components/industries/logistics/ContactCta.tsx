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
      className="relative flex items-center overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-5 pt-14 pb-16 max-lg:border-t-0 sm:px-10 sm:py-24 lg:min-h-[626px] lg:px-12 lg:py-28"
    >
      {/*
        The same car photo is placed twice; below lg the frame sits over
        the mirrored copy so its orange field fills the whole section.
      */}
      <div
        className="pointer-events-none absolute top-[-109px] left-[calc(50%+676px)] flex h-[864px] w-[1823px] items-center justify-center lg:top-[-76px] lg:left-[calc(50%+88px)]"
        aria-hidden
      >
        <Image
          src="/industries/logistics/contact-car.png"
          alt=""
          width={856}
          height={1819}
          className="h-[1819px] w-[856px] max-w-none rotate-[-89.74deg] object-bottom"
        />
      </div>
      <div
        className="pointer-events-none absolute top-[-109px] left-[calc(50%-1133px)] flex h-[864px] w-[1823px] items-center justify-center lg:top-[-76px] lg:left-[calc(50%-1721px)]"
        aria-hidden
      >
        <Image
          src="/industries/logistics/contact-car.png"
          alt=""
          width={856}
          height={1819}
          className="h-[1819px] w-[856px] max-w-none -scale-y-100 rotate-[-90.26deg] object-bottom"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          background:
            "radial-gradient(ellipse 720px 500px at 50% 50%, rgba(0,0,0,0.4), rgba(0,0,0,0) 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-[1194px] flex-col items-center gap-6 text-center sm:gap-8">
        <p
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 font-sora text-[140px] font-bold tracking-[-4px] whitespace-nowrap text-[#ff884c]/[0.04] select-none sm:block sm:text-[180px] lg:text-[215px] lg:tracking-[-8px]"
        >
          FINTECH
        </p>

        <h2 className="gsap-fade contact-fade translate-y-8 relative font-sora text-[28px] leading-[32.2px] tracking-[-1.5px] text-white sm:text-5xl sm:leading-none sm:tracking-[-2px] sm:text-[#858382] lg:text-[71.7px]">
          <span className="block">{"Let's talk about"}</span>
          <span className="block">
            <span className="text-white">your logistical</span>{" "}
            <span className="text-white sm:text-[#ff884c]">problems.</span>
          </span>
        </h2>

        <p className="gsap-fade contact-desc relative max-w-[320px] text-sm leading-6 text-white sm:max-w-[500px] sm:text-base sm:leading-[27px]">
          No canned proposals. We start by understanding your specific
          constraints, then tell you what&apos;s actually worth building.
        </p>

        <div className="gsap-fade contact-fade translate-y-6 relative flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-4">
          <Link
            href="/contact"
            className="w-[280px] max-w-full bg-[#ff884c] px-8 py-4 text-center font-sora text-sm tracking-[0.5px] text-black transition-opacity hover:opacity-90 sm:w-auto sm:px-10 sm:font-sans sm:text-[15px]"
          >
            <span className="sm:hidden">Book discovery call</span>
            <span className="hidden sm:inline">
              Optimize Logistics Operations
            </span>
          </Link>
          <Link
            href="/industries"
            className="border-b-[0.8px] border-white pb-0.5 font-mono text-[11px] tracking-[2px] text-white uppercase transition-colors hover:text-white sm:border-[rgba(75,73,73,0.5)] sm:text-[#858382]"
          >
            View all industries →
          </Link>
        </div>
      </div>
    </section>
  );
}
