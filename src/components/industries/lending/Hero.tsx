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
      {/* Phone / tablet hero image: cropped square hugging the right edge */}
      <div
        className="pointer-events-none absolute top-[-9px] right-[-127px] size-[424px] sm:top-0 sm:right-[-120px] sm:size-[520px] lg:hidden"
        aria-hidden
      >
        <Image
          src="/industries/lending/hero-image.png"
          alt=""
          fill
          sizes="(max-width: 640px) 424px, 520px"
          className="object-cover"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-[-155px] left-[calc(50%+123px)] flex h-[796px] w-[439px] -translate-x-1/2 items-center justify-center lg:bottom-[-152px] lg:left-[calc(50%+104px)] lg:h-[795px] lg:w-[357px]"
        aria-hidden
      >
        <Image
          src="/industries/lending/hero-glow.png"
          alt=""
          width={792}
          height={349}
          className="h-[431px] w-[792px] rotate-[90.56deg] object-cover lg:h-[349px]"
        />
      </div>
      <div className="pointer-events-none absolute top-0 right-0 hidden h-[900px] w-1/2 lg:block">
        <Image
          src="/industries/lending/hero-image.png"
          alt=""
          fill
          className="object-cover object-top"
          aria-hidden
        />
      </div>
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-[349px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.04)_12%,rgba(0,0,0,0.12)_24%,rgba(0,0,0,0.28)_38%,rgba(0,0,0,0.5)_52%,rgba(0,0,0,0.72)_66%,rgba(0,0,0,0.9)_82%,rgba(0,0,0,1)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 bottom-[21px] h-[104px] w-[119px] lg:hidden"
        aria-hidden
      >
        <Image
          src="/industries/lending/hero-fade.png"
          alt=""
          fill
          sizes="119px"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-5 pt-[91px] pb-[92px] sm:px-10 sm:py-16 lg:min-h-[760px] lg:flex-row lg:items-center lg:justify-between lg:px-[102px] lg:py-[154px]">
        <div className="flex max-w-[603px] flex-col">
          <h1 className="gsap-fade hero-fade translate-y-8 font-sora text-[32px] leading-[33.6px] tracking-[-1.5px] text-[#4a4848] sm:text-6xl sm:leading-[1.06] sm:tracking-[-2px] lg:text-[77.6px] lg:leading-[82.3px]">
            <span className="lg:block">Loan</span>{" "}
            <span className="lg:block lg:text-white">Origination at</span>
            <span className="mt-2 block text-white sm:mt-0 lg:text-[#ff884c]">
              Scale
            </span>
          </h1>
          <p className="gsap-fade hero-desc mt-6 max-w-[260px] text-[13px] leading-[22px] text-white/70 sm:mt-8 sm:max-w-[612px] sm:text-lg sm:leading-[30px] lg:max-w-[min(612px,calc(50vw-142px))]">
            We&apos;ve built loan origination systems for lending platforms
            and banks that automate underwriting, document collection,
            verification, and approval routing. Faster closures. Lower cost
            per loan. Better borrower experience.
          </p>
        </div>
      </div>
    </section>
  );
}
