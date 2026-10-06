"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";
import MobileSolutionArtwork from "./MobileSolutionArtwork";

const SOLUTIONS = [
  {
    title: "Operational Discovery",
    image: "/landing/card-operational-discovery.png",
    flipImage: "/landing/flip1.png",
    description:
      "We audit your processes, systems, and data flows to identify where friction lives. Most companies skip this step. We never do.",
    frontBg: "bg-[#ff884c]",
    backBg: "bg-black",
  },
  {
    title: "Systems Integration & Business Intelligence",
    image: "/landing/card-systems-integration.png",
    flipImage: "/landing/flip2.png",
    description:
      "Built on your processes, not someone else's template. Whether it's connecting disconnected systems, automating manual data flows, or building a tool that doesn't exist yet, we deliver technology that fits your operation.",
    frontBg: "bg-black",
    backBg: "bg-[#ff884c]",
  },
  {
    title: "Custom Software & Workflow Automation",
    image: "/landing/card-custom-software.png",
    flipImage: "/landing/flip3.png",
    description:
      "One source of truth. Your data lives in multiple systems, but your team needs one clear picture. We connect what's fragmented and make it visible.",
    frontBg: "bg-[#ff884c]",
    backBg: "bg-black",
  },
];

export default function Solutions() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".solutions-heading", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solutions-heading",
          start: "top 85%",
        },
      });

      gsap.to(".solution-card", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".solutions-grid",
          start: "top 80%",
        },
      });

      splitWordsReveal(".solutions-desc", { start: "top 85%" });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-black px-5 pt-10 pb-8 sm:px-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1291px]">
        <div className="gsap-fade solutions-heading mx-auto max-w-[772px] translate-y-8 text-center">
          <h2 className="font-sora text-[26px] leading-[39px] tracking-[-1px] text-[#858382] sm:text-5xl sm:leading-tight lg:text-[57px] lg:tracking-[-2.5px]">
            What We <span className="text-[#ff884c]">Do</span>
          </h2>
          <p className="gsap-fade solutions-desc mt-3 text-[13px] leading-5 text-white lg:mt-4 lg:text-base lg:leading-6">
            <span className="hidden lg:inline">
              Operating at scale requires systems. But most platforms are
              built for generic companies, not yours. They&apos;re bloated,
              hard to use, or disconnected from the tools your team already
              uses.{" "}
            </span>
            We specialize in three types of technology delivery:
          </p>
        </div>

        <div className="solutions-grid mt-6 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5 lg:mt-[76px] lg:gap-[26px]">
          {SOLUTIONS.map((item, index) => (
            <div
              key={item.title}
              className="gsap-fade solution-card group relative aspect-[390/374] translate-y-10 [perspective:1500px] sm:aspect-[413/562]"
            >
              <div className="relative size-full rounded-2xl transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] lg:rounded-3xl">
                <div
                  className={`absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden] lg:rounded-3xl ${item.frontBg}`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="hidden object-cover sm:block"
                  />
                  <MobileSolutionArtwork index={index} />
                  <h3 className={`absolute inset-x-0 p-4 font-sora text-[clamp(14px,3.72vw,16px)] leading-6 font-semibold text-white sm:bottom-0 sm:text-lg lg:p-6 lg:text-[26px] lg:leading-[1.15] ${index === 1 ? "top-[calc(100%-86px)] sm:top-auto" : "top-[81.55%] sm:top-auto"}`}>
                    {item.title}
                  </h3>
                </div>

                <div
                  className={`absolute inset-0 overflow-hidden rounded-2xl bg-cover bg-center [backface-visibility:hidden] [transform:rotateY(180deg)] lg:rounded-3xl ${item.backBg}`}
                  style={{
                    backgroundImage: `url('${item.flipImage}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/55" aria-hidden />
                  <div className="relative flex h-full flex-col justify-between p-4 lg:p-6">
                    <h3 className="font-sora text-lg leading-6 font-semibold text-white lg:text-[22px] lg:leading-[28.6px]">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-normal text-white sm:text-base lg:text-[20px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
