"use client";
import { useRef } from "react";
import { cardsSlideReveal, useGSAP } from "@/lib/gsap";

export default function HowWeDeliver() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      cardsSlideReveal(".deliver-fade", { trigger: root.current });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-black px-6 pb-20 sm:px-10 lg:px-[99px] lg:pb-[101px]">
      <div className="mx-auto max-w-[1261px] pt-12 lg:pt-[97px]">
        <h2 className="gsap-fade deliver-fade font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          How <span className="text-[#ff884c]">We Deliver</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:mt-[48px] lg:grid-cols-2">
          <div className="gsap-fade deliver-fade relative min-h-[279px] overflow-hidden border-[0.8px] border-[rgba(75,73,73,0.4)] bg-[#0d0d0d] px-8 py-8 lg:px-14 lg:py-14">
            <span className="pointer-events-none absolute right-6 bottom-2 font-sora text-7xl font-bold tracking-[-4px] text-white/7 lg:text-[100px]">
              01
            </span>
            <div className="relative flex max-w-[520px] flex-col gap-4">
              <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
                Strategy first
              </p>
              <h3 className="font-sora text-2xl font-semibold text-white lg:text-[26px] lg:leading-[33.8px]">
                Interview your leadership
              </h3>
              <p className="text-[15px] leading-6 text-[#858382]">
                We interview your leadership to understand what they need to
                see and what decisions those metrics drive.
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#ff884c]" />
          </div>

          <div className="gsap-fade deliver-fade relative min-h-[279px] overflow-hidden bg-[#558bfb] px-8 py-8 lg:px-10 lg:py-10">
            <span className="pointer-events-none absolute right-8 bottom-2 font-sora text-7xl font-bold tracking-[-4px] text-white/29 lg:text-[100px]">
              02
            </span>
            <div className="relative flex max-w-[281px] flex-col gap-4">
              <p className="font-mono text-[10px] tracking-[2px] text-white/60 uppercase">
                Process first
              </p>
              <h3 className="font-sora text-xl font-semibold text-white lg:leading-[31.2px]">
                We audit your data
              </h3>
              <p className="text-sm leading-[22px] text-white/70">
                We audit your data sources to identify what&apos;s reliable,
                what&apos;s not, and what transformation is needed.
              </p>
            </div>
          </div>

          <div className="gsap-fade deliver-fade relative min-h-[268.6px] overflow-hidden border-[0.8px] border-white/40 bg-[#558bfb] px-8 py-8 lg:px-10 lg:py-10">
            <span className="pointer-events-none absolute right-8 bottom-2 font-sora text-7xl font-bold tracking-[-4px] text-white/10 lg:text-[100px]">
              03
            </span>
            <div className="relative flex max-w-[281px] flex-col gap-4">
              <p className="font-mono text-[10px] tracking-[2px] text-white uppercase">
                The brand look
              </p>
              <h3 className="font-sora text-lg font-semibold text-white lg:text-xl lg:leading-[26px]">
                We design dashboards
              </h3>
              <p className="text-sm leading-[22px] text-white">
                We design dashboards around workflows, not charts. We show
                you the data you act on, in the order you need it.
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white" />
          </div>

          <div
            className="gsap-fade deliver-fade relative min-h-[268.6px] overflow-hidden border-[0.8px] border-[rgba(75,73,73,0.4)] bg-[#0d0d0d] px-8 py-8 lg:px-14 lg:py-14"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 45% 40% at 50% 50%, rgba(255,136,76,0.08), transparent)",
            }}
          >
            <span className="pointer-events-none absolute right-6 bottom-2 font-sora text-7xl font-bold tracking-[-4px] text-white/5 lg:text-[100px]">
              04
            </span>
            <div className="relative flex max-w-[560px] flex-col gap-4">
              <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
                Long-term success
              </p>
              <h3 className="font-sora text-2xl font-semibold text-white lg:text-[26px] lg:leading-[33.8px]">
                We iterate based on usage
              </h3>
              <p className="text-[15px] leading-6 text-[#858382]">
                As you learn to use the dashboards, we refine them and add
                new views.
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#ff884c]" />
          </div>
        </div>
      </div>
    </section>
  );
}
