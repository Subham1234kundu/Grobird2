"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(".cs-hero-bg", { scale: 1.08 }, { scale: 1, duration: 1.6 }, 0)
        .to(".cs-hero-title", { opacity: 1, y: 0, duration: 0.9 }, 0.2);
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative h-[303px] overflow-hidden bg-black sm:h-[360px]"
    >
      <div className="cs-hero-bg absolute top-0 left-0 h-[260px] w-[464px] sm:inset-0 sm:h-auto sm:w-auto lg:top-[-176px] lg:right-auto lg:bottom-auto lg:left-[-23px] lg:h-[820px] lg:w-[1463px] lg:max-w-none">
        <Image
          src="/case-studies/landscape.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[34px] h-[236px] sm:hidden" aria-hidden>
        <Image src="/case-studies/hero-fade-mobile.png" alt="" fill sizes="100vw" loading="eager" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[349px] sm:block" aria-hidden>
        <Image src="/case-studies/hero-fade-desktop.png" alt="" fill sizes="100vw" loading="eager" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[34px] h-24 bg-gradient-to-b from-transparent to-black sm:bottom-0"
      />

      <div className="relative mx-auto h-full max-w-[1440px]">
        <h1 className="gsap-fade cs-hero-title absolute top-[122px] left-5 translate-y-6 font-sora text-[40px] leading-[48px] tracking-[-2px] text-white capitalize sm:top-[150px] sm:left-10 sm:text-5xl sm:leading-[56px] lg:top-[181px] lg:left-[109px] lg:text-[56.6px] lg:leading-[68px]">
          Case Studies
        </h1>

      </div>
    </section>
  );
}
