"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, headlineLinesReveal, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      headlineLinesReveal(".about-hero-heading", { start: "top 95%" });

      // The artwork drifts in and settles, so the mark feels like it is
      // arriving rather than simply appearing.
      gsap.from(".about-hero-art", {
        xPercent: 6,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[300px] items-center overflow-hidden bg-black sm:min-h-[420px] lg:h-[548px]"
    >
      {/* Laid out against the 1440px design frame so the backdrop and bird
          keep their Figma placement as the viewport grows. */}
      <div
        className="about-hero-art pointer-events-none absolute top-0 left-1/2 hidden h-full w-[1440px] -translate-x-1/2 lg:block"
        aria-hidden
      >
        <div className="absolute top-0 bottom-0 left-[557px] w-[1207px] mix-blend-exclusion">
          <Image
            src="/about/hero-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* The mark keeps its Figma proportions and is cropped by the
            section edge, as in the design. */}
        <div className="absolute top-[20px] bottom-0 left-[1047px] w-[406px] overflow-hidden">
          <Image
            src="/about/hero-bird.svg"
            alt=""
            width={406}
            height={624}
            className="h-[624px] w-[406px] max-w-none"
          />
        </div>
      </div>

      {/* Mobile keeps a simple cover crop of the same artwork. */}
      <div className="pointer-events-none absolute inset-0 lg:hidden" aria-hidden>
        <Image
          src="/about/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* Fades the artwork into the black section below. The bundled
          hero-fade.png is a white-to-black ramp, so drawing it normally
          painted a bright band across the image — a gradient does the
          job cleanly. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[349px] bg-gradient-to-b from-transparent to-black"
        aria-hidden
      />

      <h1 className="gsap-fade about-hero-heading relative z-10 mx-auto w-full max-w-[1440px] px-6 font-sora text-4xl tracking-[-2px] text-[#827e7e] capitalize sm:px-10 lg:px-[109px] lg:text-[56.6px] lg:leading-[68px]">
        About <span className="text-[#ff884c]">Us</span>
      </h1>
    </section>
  );
}
