"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".hero-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });

      splitWordsReveal(".hero-desc", { start: "top 85%" });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black">
      {/* Phone/tablet photo: Figma mobile crops the same portrait so it starts
          at x=189 and runs past the right edge; tablet pins it to the right. */}
      <div className="pointer-events-none absolute top-0 right-[-46px] h-[431px] w-[287px] sm:right-0 sm:h-full sm:w-[45%] lg:hidden">
        <Image
          src="/industries/healthcare/hero-photo.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      {/* Left-to-right fade that darkens the photo behind the copy (mobile frame). */}
      <div
        className="pointer-events-none absolute top-0 left-[167px] h-[431px] w-[356px] bg-gradient-to-r from-black via-black/35 to-black/0 sm:left-auto sm:right-0 sm:h-full sm:w-[45%] lg:hidden"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start px-5 pt-[91px] pb-[92px] sm:px-10 sm:py-24 lg:z-auto lg:min-h-[760px] lg:flex-row lg:items-center lg:justify-between lg:px-[102px] lg:py-[154px]">
        <div className="flex max-w-[674px] flex-col">
          <h1 className="gsap-fade hero-fade translate-y-8 flex flex-col gap-2 font-sora text-[32px] leading-[33.6px] tracking-[-1.5px] text-[#4a4848] sm:block sm:text-6xl sm:leading-[1.06] sm:tracking-[-2px] lg:text-[77.6px] lg:leading-[82.3px]">
            <span className="block">
              Streamlined <span className="sm:block">operations</span>
            </span>
            <span className="block text-white">
              for healthcare{" "}
              <span className="sm:block sm:text-[#ff884c]">providers.</span>
            </span>
          </h1>
          <p className="gsap-fade hero-desc mt-6 max-w-[260px] text-[13px] leading-[22px] text-white/70 sm:mt-8 sm:max-w-[612px] sm:text-lg sm:leading-[30px]">
            We&apos;ve built automation systems for healthcare organizations
            that handle eligibility verification, claims processing, prior
            authorization workflows, and patient communication. Faster
            processing. Fewer errors. Better cash flow.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 right-0 hidden h-full w-[45%] lg:block">
        <Image
          src="/industries/healthcare/hero-photo.png"
          alt=""
          fill
          className="object-cover object-left"
          aria-hidden
        />
      </div>
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-[349px] bg-gradient-to-b from-black/0 via-black/35 via-50% to-black lg:via-black/80 lg:via-70%"
        aria-hidden
      />
    </section>
  );
}
