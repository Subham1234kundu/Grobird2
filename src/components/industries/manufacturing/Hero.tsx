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
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-6 py-16 sm:px-10 lg:min-h-[760px] lg:flex-row lg:items-center lg:justify-between lg:px-[102px] lg:py-[154px]">
        <div className="flex max-w-[674px] flex-col">
          <h1 className="gsap-fade hero-fade translate-y-8 font-sora text-5xl leading-[1.06] tracking-[-2px] text-[#4a4848] sm:text-6xl lg:text-[77.6px] lg:leading-[82.3px]">
            <span className="block">Supply Chain</span>
            <span className="block text-white">Visibility and</span>
            <span className="block text-[#ff884c]">Control</span>
          </h1>
          <p className="gsap-fade hero-desc mt-8 max-w-[612px] text-lg leading-[30px] text-white/70 lg:max-w-[min(612px,calc(50vw-142px))]">
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
