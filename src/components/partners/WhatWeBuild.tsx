"use client";

import Image from "next/image";
import { useState } from "react";

const SLIDES = [
  {
    heading: "Custom systems that operationalize your recommendations",
    tagline:
      "Workflow applications, dashboards, and automation that embed your strategic recommendations into daily operations.",
    image: "/partners/what-we-build-dashboard.png",
    alt: "Example dashboard built by GroBird for a partner engagement",
  },
  {
    heading: "Integrated platforms that connect fragmented systems",
    tagline: "Your consulting identifies the integration roadmap. We build it.",
    image: "/partners/slide-2-integrated-platforms.png",
    alt: "Illustration of two connected platform integrations",
  },
  {
    heading: "Workflow automation that executes your process design",
    tagline: "You design the process. We automate it.",
    image: "/partners/slide-3-workflow-automation.png",
    alt: "Customer support live chat automation interface",
  },
  {
    heading: "White-label solutions for your consulting methodology",
    tagline:
      "Your methodology, your brand, our build. We work invisibly behind your brand.",
    image: "/partners/slide-4-white-label.png",
    alt: "Consultants reviewing a white-labeled client portal",
  },
];

export default function WhatWeBuild() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  return (
    <section className="bg-black px-6 py-16 sm:px-10 lg:px-[48px] lg:py-[80px]">
      <div className="mx-auto max-w-[1261px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-white lg:text-[42px]">
          What We Build
        </h2>

        <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <h3 className="font-sora text-2xl font-semibold tracking-[-0.96px] text-white lg:max-w-[706px] lg:text-[36px] lg:leading-[57.6px]">
            {slide.heading}
          </h3>
          <p className="text-base tracking-[-0.32px] text-white/80 lg:max-w-[435px] lg:text-right lg:text-[18px] lg:leading-[27px]">
            {slide.tagline}
          </p>
        </div>

        <div className="relative mt-8 aspect-[1261/600] w-full overflow-hidden rounded-[10px] bg-black">
          <Image
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.image}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={active === i}
              className={`h-[3px] rounded-full transition-all ${
                active === i ? "w-8 bg-[#ff884c]" : "w-4 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
