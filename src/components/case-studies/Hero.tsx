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
        .to(".cs-hero-title", { opacity: 1, y: 0, duration: 0.9 }, 0.2)
        .fromTo(
          ".cs-hero-dashboard",
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.1 },
          0.35,
        );
    },
    { scope: root },
  );

  return (
    // Phone: 260px banner with the title only (Figma mobile frame).
    // Desktop: 477px below the navbar, title left, dashboard mock right.
    <section
      ref={root}
      className="relative h-[260px] overflow-hidden bg-black sm:h-[380px] lg:h-[477px]"
    >
      <div className="cs-hero-bg absolute inset-y-0 left-0 w-[464px] sm:inset-x-0 sm:w-auto lg:top-[-176px] lg:right-auto lg:bottom-auto lg:left-[-23px] lg:h-[820px] lg:w-[1463px] lg:max-w-none">
        <Image
          src="/case-studies/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
      </div>

      {/* Black fade rising from the bottom edge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-9px] h-[236px] bg-gradient-to-b from-transparent via-black/35 to-black lg:bottom-0 lg:h-[349px] lg:via-black/40 lg:to-black/70"
        aria-hidden
      />

      <div className="relative mx-auto h-full max-w-[1440px]">
        <h1 className="gsap-fade cs-hero-title absolute top-[122px] left-5 translate-y-6 font-sora text-[40px] leading-[48px] tracking-[-2px] text-white capitalize sm:top-[150px] sm:left-10 sm:text-5xl sm:leading-[56px] lg:top-[181px] lg:left-[109px] lg:text-[56.6px] lg:leading-[68px]">
          Case Studies
        </h1>

        <div className="cs-hero-dashboard absolute top-12 left-[660px] hidden h-[429px] w-[780px] lg:block">
          <Image
            src="/case-studies/hero-dashboard.png"
            alt="Analytics dashboard built by GroBird"
            fill
            priority
            sizes="780px"
            className="object-cover object-left-top"
          />
        </div>
      </div>
    </section>
  );
}
