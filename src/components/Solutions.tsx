"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

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
        <div className="gsap-fade solutions-heading max-w-[772px] translate-y-8">
          <h2 className="font-sora text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            All your wholesale workflows, in one AI-powered platform
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#a9a9a9]">
            Operating at scale requires systems. But most platforms are built
            for generic companies, not yours. They&apos;re bloated, hard to
            use, or disconnected from the tools your team already uses. We
            specialize in three types of technology delivery:
          </p>
        </div>

        <div className="solutions-grid mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-[76px]">
          <div className="gsap-fade solution-card relative aspect-[413/562] translate-y-10 overflow-hidden rounded-3xl bg-[#ff884c]">
            <Image
              src="/landing/card-operational-discovery.png"
              alt="Operational Discovery"
              fill
              className="object-cover"
            />
            <h3 className="sr-only">Operational Discovery</h3>
          </div>

          <div className="gsap-fade solution-card relative aspect-[413/562] translate-y-10 overflow-hidden rounded-3xl bg-black">
            <Image
              src="/landing/card-systems-integration.png"
              alt="Systems Integration & Business Intelligence"
              fill
              className="object-cover"
            />
            <h3 className="sr-only">
              Systems Integration &amp; Business Intelligence
            </h3>
          </div>

          <div className="gsap-fade solution-card relative aspect-[413/562] translate-y-10 overflow-hidden rounded-3xl bg-[#ff884c]">
            <Image
              src="/landing/card-custom-software-illustration.svg"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
            <h3 className="absolute bottom-[18px] left-[18px] font-sora text-[22px] font-semibold text-white">
              Custom Software &amp; Workflow Automation
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
