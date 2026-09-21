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
    <section ref={root} className="relative flex min-h-[455px] items-center overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-6 py-20 sm:px-10">
      <div className="pointer-events-none absolute inset-0">
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

      <div className="relative z-10 mx-auto flex max-w-[822px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-[19px]">
          <p className="gsap-fade contact-fade translate-y-8 font-sora text-3xl tracking-[-3px] text-[#858382] sm:text-4xl lg:text-[45px]">
            {"Let's discuss a support model that keeps "}
            <span className="text-white">{"your systems "}</span>
            <span className="text-[#ff884c]">healthy and growing</span>
            <span className="text-white">.</span>
          </p>
          <p className="gsap-fade contact-fade translate-y-6 text-base leading-[27px] text-white">
            We deliver a decision-ready roadmap in four weeks — no vendor
            bias, no guesswork.
          </p>
        </div>

        <div className="gsap-fade contact-fade translate-y-6 pt-4">
          <a
            href="/contact"
            className="bg-[#ff884c] px-10 py-4 text-[15px] leading-[22.5px] tracking-[0.5px] text-white transition-opacity hover:opacity-90"
          >
            Design Your Support Package
          </a>
        </div>
      </div>
    </section>
  );
}
