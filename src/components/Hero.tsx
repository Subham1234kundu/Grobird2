"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.to(".hero-heading", { opacity: 1, y: 0 })
        .to(".hero-sub", { opacity: 1, y: 0 }, "-=0.6")
        .to(".hero-cta", { opacity: 1, y: 0 }, "-=0.6")
        .to(".hero-illustration", { opacity: 1, scale: 1 }, "-=0.7");
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2 lg:min-h-[850px]">
        <div className="flex flex-col justify-center gap-8 px-6 py-24 sm:px-10 lg:justify-start lg:px-[50px] lg:pt-[173px] lg:pb-0">
          <div className="flex w-full flex-col gap-8 lg:max-w-[625px]">
            <h1 className="gsap-fade hero-heading translate-y-8 font-sora text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[56.6px] lg:leading-[68px] lg:tracking-[-2px]">
              <span className="text-[#827e7e]">
                Operational Bottlenecks Don&apos;t Get{" "}
              </span>
              <span className="text-[#ff884c]">Better on Their Own</span>
            </h1>

            <p className="gsap-fade hero-sub translate-y-6 text-[15.1px] leading-6 text-white/90">
              Most growing B2B companies reach a point where their people and
              their processes no longer align. Spreadsheets replace systems.
              Manual work crowds out strategy. Teams spend more time managing
              data than running operations. The cost is real: lost time,
              increased errors, shrinking margins, delayed growth.
            </p>

            <a
              href="/contact"
              className="gsap-fade hero-cta flex w-fit translate-y-6 items-center gap-[10px] bg-white px-[34px] py-[17px] text-[15.6px] font-medium tracking-[0.5px] text-black capitalize transition-transform hover:scale-105"
            >
              Book A Demo
              <Image
                src="/landing/arrow-right-black.svg"
                alt=""
                width={16}
                height={15}
                aria-hidden
              />
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="hero-illustration absolute inset-0 scale-95 opacity-0">
            <Image
              src="/landing/hero-illustration.svg"
              alt="Illustration of integrations orbiting GroBird's operations platform"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
