"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const SOLUTIONS = [
  {
    title: "Operational Discovery",
    image: "/landing/card-operational-discovery.png",
    description:
      "We audit your processes, systems, and data flows to identify where friction lives. Most companies skip this step. We never do.",
    frontBg: "bg-[#ff884c]",
    backBg: "bg-black",
  },
  {
    title: "Systems Integration & Business Intelligence",
    image: "/landing/card-systems-integration.png",
    description:
      "Built on your processes, not someone else's template. Whether it's connecting disconnected systems, automating manual data flows, or building a tool that doesn't exist yet, we deliver technology that fits your operation.",
    frontBg: "bg-black",
    backBg: "bg-[#ff884c]",
  },
  {
    title: "Custom Software & Workflow Automation",
    image: "/landing/card-custom-software.png",
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
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-black px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[1291px]">
        <div className="gsap-fade solutions-heading mx-auto max-w-[772px] translate-y-8 text-center">
          <h2 className="font-sora text-3xl tracking-tight text-[#858382] sm:text-5xl lg:text-[57px] lg:tracking-[-2.5px]">
            What We <span className="text-[#ff884c]">Do</span>
          </h2>
          <p className="mt-4 text-base leading-[24px] text-white">
            Operating at scale requires systems. But most platforms are built
            for generic companies, not yours. They&apos;re bloated, hard to
            use, or disconnected from the tools your team already uses. We
            specialize in three types of technology delivery:
          </p>
        </div>

        <div className="solutions-grid mt-16 grid grid-cols-1 gap-[26px] md:grid-cols-3 lg:mt-[76px]">
          {SOLUTIONS.map((item) => (
            <div
              key={item.title}
              className="gsap-fade solution-card group relative aspect-[413/562] translate-y-10 [perspective:1500px]"
            >
              <div className="relative size-full rounded-3xl transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div
                  className={`absolute inset-0 overflow-hidden rounded-3xl [backface-visibility:hidden] ${item.frontBg}`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <h3 className="absolute inset-x-0 bottom-0 p-6 font-sora text-[26px] leading-[1.15] font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                <div
                  className={`absolute inset-0 flex [transform:rotateY(180deg)] flex-col justify-between overflow-hidden rounded-3xl bg-cover bg-center p-6 [backface-visibility:hidden] ${item.backBg}`}
                  style={{
                    backgroundImage: "url('/landing/blog-grid-bg.png')",
                  }}
                >
                  <h3 className="font-sora text-[22px] leading-[28.6px] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-[20px] leading-normal text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
