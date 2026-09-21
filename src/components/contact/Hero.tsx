"use client";

import Image from "next/image";
import { useRef } from "react";
import { headlineLinesReveal, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      headlineLinesReveal(".contact-hero-heading", { start: "top 95%" });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-black py-24 sm:py-28 lg:h-[402px] lg:py-0"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-[-199px] left-[42px] hidden h-[834px] w-[1483px] opacity-60 lg:block">
          <Image
            src="/contact/hero-grid.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/contact/hero-grid.jpg"
            alt=""
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="absolute bottom-[-19px] left-1/2 h-[421px] w-[1440px] -translate-x-1/2">
          <Image
            src="/contact/hero-fade.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      <h1 className="gsap-fade contact-hero-heading relative z-10 mx-auto max-w-[1440px] px-6 font-sora text-4xl tracking-[-2px] text-[#827e7e] capitalize sm:px-10 sm:text-5xl lg:absolute lg:top-[252px] lg:left-1/2 lg:mx-0 lg:w-[1222px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:px-0 lg:text-[56.6px] lg:leading-[68px]">
        Contact <span className="text-[#ff884c]">Us</span>
      </h1>
    </section>
  );
}
