"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ContactCta() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".contact-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[391px] items-start overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-5 pt-14 pb-12 sm:min-h-[455px] sm:items-center sm:px-10 sm:py-20"
    >
      {/* Phone art: the glass photo lower-centre under a soft radial frame */}
      <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden>
        <div className="absolute top-[213.4px] left-[60px] h-[376px] w-[301px]">
          <Image src="/services/business-intelligence/contact-photo.png" alt="" fill sizes="301px" className="object-cover" />
        </div>
        <div className="absolute top-[68.4px] left-[33px] h-[333px] w-[412px]">
          <Image src="/services/managed-services/mobile/cta-frame.svg" alt="" fill className="object-fill" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        <Image
          src="/services/managed-services/contact-beam.svg"
          alt=""
          fill
          className="object-cover opacity-80"
          aria-hidden
        />
        <Image
          src="/services/managed-services/contact-photo.png"
          alt=""
          fill
          className="object-cover opacity-70"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[822px] flex-col items-center gap-6 text-center sm:gap-8">
        <div className="flex flex-col items-center gap-6 sm:gap-[19px]">
          <p className="gsap-fade contact-fade translate-y-8 font-sora text-[28px] leading-[32.2px] tracking-[-1.5px] text-white sm:text-4xl sm:leading-normal sm:tracking-[-3px] sm:text-[#858382] lg:text-[45px]">
            {"Let's discuss a support model that keeps "}
            <span className="text-white">{"your systems "}</span>
            <span className="text-white sm:text-[#ff884c]">healthy and growing</span>
            <span className="text-white">.</span>
          </p>
          <p className="gsap-fade contact-fade translate-y-6 text-[13px] leading-6 text-white sm:text-base sm:leading-[27px]">
            We deliver a decision-ready roadmap in four weeks — no vendor
            bias, no guesswork.
          </p>
        </div>

        <div className="gsap-fade contact-fade translate-y-6 sm:pt-4">
          <a
            href="/contact"
            className="block w-[280px] bg-[#ff884c] py-4 text-center whitespace-nowrap font-sora text-sm leading-[21px] tracking-[0.5px] text-black transition-opacity hover:opacity-90 sm:inline sm:w-auto sm:px-10 sm:whitespace-normal sm:font-sans sm:text-[15px] sm:leading-[22.5px] sm:text-white"
          >
            Design Your Support Package
          </a>
        </div>
      </div>
    </section>
  );
}
