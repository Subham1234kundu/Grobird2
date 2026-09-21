"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function ProblemStatement() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".problem-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
        },
      });

      // Every word starts at the muted grey (#858382, set in globals.css)
      // and only turns white one at a time, tied directly to scroll
      // position — not a one-off "enter the viewport" trigger.
      const colorSplit = SplitText.create(".gsap-color-reveal", {
        type: "words",
      });

      gsap.to(colorSplit.words, {
        color: "#ffffff",
        stagger: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".gsap-color-reveal",
          start: "top 85%",
          end: "top 15%",
          scrub: 1,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-black">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 border-y border-[rgba(75,73,73,0.58)] px-6 py-16 sm:px-10 lg:grid-cols-[454px_1fr] lg:grid-rows-[auto_auto] lg:gap-x-[190px] lg:gap-y-10 lg:px-16 lg:py-24">
        <h2 className="gsap-fade problem-fade translate-y-8 font-sora text-3xl leading-tight font-normal tracking-tight text-[#858382] sm:text-5xl lg:col-start-1 lg:row-start-1 lg:text-[57px] lg:leading-[68px] lg:tracking-[-1.2px]">
          Knowing the problem<span className="text-[#ff884c]"> isn&apos;t the hard part</span>.
        </h2>
        <p className="gsap-fade problem-fade gsap-color-reveal translate-y-8 text-xl leading-[1.4] tracking-tight lg:col-start-2 lg:row-start-2 lg:text-[32px] lg:tracking-[-1.47px]">
          Most teams can already name what&apos;s broken. The hard part is
          fixing it without disrupting what already works. That&apos;s the
          part GroBird handles.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 border-b border-[#4b4949] sm:grid-cols-2 lg:grid-cols-[389px_1fr]">
        <div className="relative min-h-[320px] border-[#4b4949] sm:min-h-[420px] sm:border-r">
          <Image
            src="/landing/testimonial-vaibhav.jpg"
            alt="Vaibhav, Co-founder of PresalesForce.ai"
            fill
            className="object-cover"
          />
        </div>

        <div className="gsap-fade problem-fade flex translate-y-8 flex-col justify-center gap-10 px-6 py-16 sm:px-10 lg:px-16">
          <Image
            src="/landing/psf-logo-white.png"
            alt="PresalesForce.ai"
            width={229}
            height={77}
            className="h-[56px] w-auto self-start"
          />

          <p className="text-xl leading-[1.4] tracking-tight text-white lg:text-[32px] lg:tracking-[-1.47px]">
            Building an AI-driven decision intelligence platform required
            complex engineering. Grobird acted as our true product partners,
            developing the entire software architecture for PresalesForce.ai
            from the ground up and delivering a seamless, highly scalable
            product.
          </p>

          <div className="flex w-fit items-center gap-[10px] border border-[#4b4949] px-[10px] py-[7px] text-[15.6px] whitespace-nowrap text-white uppercase">
            <span className="text-[#a9a9a9]">Vaibhav</span>
            <span className="h-[22px] w-px bg-[#b1b1b1]" aria-hidden />
            <span>Co-founder Presalesforce.ai</span>
          </div>
        </div>
      </div>
    </section>
  );
}
