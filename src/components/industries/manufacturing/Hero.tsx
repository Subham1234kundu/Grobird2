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
      {/* Phone / tablet: photo pinned to the top-right, fading to black at the bottom */}
      <div
        className="pointer-events-none absolute top-[-9px] right-[-6px] h-[440px] w-[247px] sm:right-0 sm:h-[600px] sm:w-[337px] lg:hidden"
        aria-hidden
      >
        <Image
          src="/industries/manufacturing/hero-image.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[349px] w-full lg:hidden"
        aria-hidden
      >
        <Image
          src="/industries/manufacturing/hero-fade.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-5 pt-[91px] pb-[92px] sm:px-10 sm:py-28 lg:min-h-[760px] lg:flex-row lg:items-center lg:justify-between lg:px-[102px] lg:py-[154px]">
        <div className="flex max-w-[674px] flex-col">
          <h1 className="gsap-fade hero-fade translate-y-8 font-sora text-[32px] leading-[33.6px] tracking-[-1.5px] text-[#4a4848] sm:text-5xl sm:leading-[1.06] sm:tracking-[-2px] lg:text-[77.6px] lg:leading-[82.3px]">
            <span className="block">Supply Chain</span>
            <span className="mt-2 block text-white sm:mt-0">
              Visibility and{" "}
              <span className="sm:block sm:text-[#ff884c]">Control</span>
            </span>
          </h1>
          <p className="gsap-fade hero-desc mt-6 max-w-[260px] text-[13px] leading-[22px] text-white/70 sm:mt-8 sm:max-w-[400px] sm:text-base sm:leading-7 lg:max-w-[min(612px,calc(50vw-142px))] lg:text-lg lg:leading-[30px]">
            We&apos;ve built supply chain systems for manufacturers that
            integrate procurement, supplier management, production planning,
            and delivery. Real-time visibility. Faster lead times. Lower
            inventory costs.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute top-[-130px] right-0 hidden h-[1282px] w-1/2 lg:block">
        <Image
          src="/industries/manufacturing/hero-image.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.8)_10%,rgba(0,0,0,0.6)_20%,rgba(0,0,0,0.4)_30%,rgba(0,0,0,0.22)_40%,rgba(0,0,0,0.08)_50%,rgba(0,0,0,0)_58%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_68%,rgba(0,0,0,0.06)_76%,rgba(0,0,0,0.18)_83%,rgba(0,0,0,0.4)_89%,rgba(0,0,0,0.68)_94%,rgba(0,0,0,0.88)_97%,rgba(0,0,0,1)_100%)]" />
      </div>
      <div
        className="pointer-events-none absolute bottom-[-155px] left-1/2 hidden h-[795px] w-[357px] -translate-x-1/2 items-center justify-center lg:left-[calc(50%+200px)] lg:flex"
        aria-hidden
      >
        <Image
          src="/industries/manufacturing/hero-glow.png"
          alt=""
          width={792}
          height={349}
          className="h-[349px] w-[792px] rotate-[90.56deg] object-cover"
        />
      </div>
    </section>
  );
}
