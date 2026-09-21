"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function ProblemStatement() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Every word starts at the muted grey (#858382, set in globals.css)
      // and only turns white one at a time, tied directly to scroll
      // position — the same reveal used on the landing page.
      const split = SplitText.create(".gsap-color-reveal", { type: "words" });

      gsap.to(split.words, {
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
    <section ref={root} className="relative overflow-hidden bg-black py-16 sm:py-20 lg:h-[588px] lg:py-0">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-118px] left-[63px] hidden h-[906px] w-[1313px] lg:block">
          <Image
            src="/services/business-intelligence/problem-pattern.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden
          />
        </div>
        <div className="absolute left-[764px] top-[-908.8px] hidden h-[1634.463px] w-[1778.784px] items-center justify-center lg:flex">
          <div className="rotate-[57.49deg]">
            <div className="relative h-[1472px] w-[1000px]">
              <Image
                src="/services/business-intelligence/problem-diagonal.png"
                alt=""
                fill
                className="object-cover opacity-41"
                aria-hidden
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[397.8px] left-1/2 h-[349px] w-[1440px] -translate-x-1/2 rotate-180">
          <Image
            src="/services/business-intelligence/problem-fade.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[955px] px-6 sm:px-10 lg:absolute lg:top-[94.2px] lg:left-1/2 lg:mx-0 lg:-translate-x-1/2 lg:px-0">
        <p className="gsap-color-reveal font-sora text-2xl leading-[1.55] tracking-[-0.8px] sm:text-3xl lg:text-[36px] lg:leading-[56px]">
          Business intelligence brings clarity. We design dashboards and
          reporting systems that give you live visibility into your
          operation, your metrics, and your performance.
        </p>
      </div>
    </section>
  );
}
