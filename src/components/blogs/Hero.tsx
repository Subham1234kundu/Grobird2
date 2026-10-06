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
      className="relative flex h-[220px] items-center overflow-hidden bg-black sm:h-[280px] lg:h-[323px]"
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
        className="pointer-events-none absolute top-0 left-1/2 h-full w-full -translate-x-1/2 lg:w-[1440px]"
        aria-hidden
      >
        <div className="blogs-hero-dots absolute top-[-5px] left-[calc(50%-49px)] h-[244px] w-[434px] isolate overflow-hidden opacity-50 lg:top-[-95px] lg:left-[724px] lg:h-[562px] lg:w-[1000px]">
          <Image
            src="/blogs/hero-dots.png"
            alt=""
            fill
            className="object-cover mix-blend-hard-light"
          />
          <div className="absolute inset-0 bg-[#ff884c] mix-blend-color" />
        </div>
      </div>

      <h1 className="gsap-fade blogs-hero-heading relative z-10 mx-auto w-full max-w-[350px] px-4 text-center font-sora text-[28px] leading-9 tracking-[-1px] text-[#827e7e] capitalize sm:max-w-[1440px] sm:px-10 sm:text-4xl lg:px-16 lg:text-[48px] lg:leading-[68px] lg:tracking-[-2px] xl:px-0 xl:text-[56.6px] lg:whitespace-nowrap">
        Latest news and <span className="text-[#ff884c]">Business insights</span>
      </h1>
    </section>
  );
}
