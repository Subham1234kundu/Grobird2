"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, headlineLinesReveal, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      headlineLinesReveal(".blogs-hero-heading", { start: "top 95%" });

      // The dot spiral eases in and keeps turning slowly, so the header
      // has a little life to it.
      gsap.from(".blogs-hero-dots", {
        scale: 1.12,
        opacity: 0,
        duration: 1.6,
        ease: "power3.out",
      });

      gsap.to(".blogs-hero-dots", {
        rotate: 360,
        duration: 180,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex h-[280px] items-center overflow-hidden bg-black sm:h-[340px] lg:h-[394px]"
    >
      <Image
        src="/blogs/hero-pattern.png"
        alt=""
        fill
        className="object-cover opacity-40"
        aria-hidden
      />

      {/* Positioned against the 1440px design frame. The dot artwork is blue,
          so an #ff884c colour-blend layer tints it orange as in the design. */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-[1440px] -translate-x-1/2 lg:block"
        aria-hidden
      >
        <div className="blogs-hero-dots absolute top-[-24px] left-[724px] h-[562px] w-[1000px] isolate overflow-hidden">
          <Image
            src="/blogs/hero-dots.png"
            alt=""
            fill
            className="object-cover mix-blend-hard-light"
          />
          <div className="absolute inset-0 bg-[#ff884c] mix-blend-color" />
        </div>
      </div>

      <h1 className="gsap-fade blogs-hero-heading relative z-10 mx-auto w-full max-w-[1440px] px-6 font-sora text-3xl tracking-[-2px] text-[#827e7e] capitalize sm:px-10 sm:text-4xl lg:px-[184px] lg:text-[56.6px] lg:leading-[68px] lg:whitespace-nowrap">
        Latest news and <span className="text-[#ff884c]">Business insights</span>
      </h1>
    </section>
  );
}
