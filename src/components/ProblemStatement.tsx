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
      {/* Phones drop the headline and lead with the justified statement. */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 pt-3 pb-10 sm:px-10 sm:pt-10 lg:grid-cols-[454px_1fr] lg:grid-rows-[auto_auto] lg:gap-x-[190px] lg:gap-y-10 lg:border-y lg:border-[rgba(75,73,73,0.58)] lg:px-16 lg:py-24">
        <h2 className="gsap-fade problem-fade hidden translate-y-8 font-sora text-3xl leading-tight font-normal tracking-tight text-[#858382] sm:block sm:text-5xl lg:col-start-1 lg:row-start-1 lg:text-[57px] lg:leading-[68px] lg:tracking-[-1.2px]">
          Knowing the problem<span className="text-[#ff884c]"> isn&apos;t the hard part</span>.
        </h2>
        <p className="gsap-fade problem-fade gsap-color-reveal translate-y-8 text-justify text-[24px] leading-normal tracking-[-0.3px] sm:text-left sm:text-2xl lg:col-start-2 lg:row-start-2 lg:text-[32px] lg:leading-[1.4] lg:tracking-[-1.47px]">
          Most teams can already name what&apos;s broken. The hard part is
          fixing it without disrupting what already works. That&apos;s the
          part GroBird handles.
        </p>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 pb-10 sm:px-10 lg:grid lg:grid-cols-[389px_1fr] lg:border-b lg:border-[#4b4949] lg:px-0 lg:pb-0">
        <div className="relative aspect-[389/458] border-r border-[#4b4949] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[420px]">
          <Image
            src="/landing/testimonial-vaibhav.jpg"
            alt="Vaibhav, Co-founder of PresalesForce.ai"
            fill
            className="object-cover"
          />
        </div>

        <div className="gsap-fade problem-fade mt-2 flex translate-y-8 flex-col gap-3 border-[0.8px] border-[#4b4949] p-4 sm:p-6 lg:mt-0 lg:justify-center lg:gap-10 lg:border-0 lg:px-16 lg:py-16">
          <Image
            src="/landing/psf-logo-white.png"
            alt="PresalesForce.ai"
            width={229}
            height={77}
            className="h-6 w-auto self-start lg:h-[56px]"
          />

          <p className="text-[13px] leading-5 text-white sm:text-lg lg:text-[32px] lg:leading-[1.4] lg:tracking-[-1.47px]">
            Building an AI-driven decision intelligence platform required
            complex engineering. Grobird acted as our true product partners,
            developing the entire software architecture for PresalesForce.ai
            from the ground up
            <span className="hidden lg:inline">
              {" "}
              and delivering a seamless, highly scalable product
            </span>
            .
          </p>

          <div className="flex items-center gap-2 border-t-[0.8px] border-[#4b4949] pt-1 text-[12px] leading-[18px] font-medium whitespace-nowrap text-white uppercase lg:w-fit lg:gap-[10px] lg:border lg:px-[10px] lg:py-[7px] lg:text-[15.6px] lg:leading-normal lg:font-normal">
            <span className="text-[#a9a9a9]">Vaibhav</span>
            <span className="h-4 w-px bg-[#b1b1b1] lg:h-[22px]" aria-hidden />
            <span>Co-founder Presalesforce.ai</span>
          </div>
        </div>
      </div>
    </section>
  );
}
