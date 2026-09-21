"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  gsap,
  headlineLinesReveal,
  splitWordsReveal,
  useGSAP,
} from "@/lib/gsap";

const PILLARS = [
  {
    number: "01",
    title: "Operations",
    subtitle: "Process design & execution",
    image: "/about/team-operations.png",
  },
  {
    number: "02",
    title: "Architecture",
    subtitle: "System design & integration",
    image: "/about/team-architecture.png",
  },
  {
    number: "03",
    title: "Implementation",
    subtitle: "Build, deploy, optimise",
    image: "/about/team-implementation.png",
  },
  {
    number: "04",
    title: "Global Delivery",
    subtitle: "South Asia & worldwide",
    image: "/about/team-global.png",
  },
];

export default function OurTeam() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      headlineLinesReveal(".team-heading", { start: "top 88%" });
      splitWordsReveal(".team-lede", { start: "top 85%" });

      // The framing panel draws itself open, then the pillars deal in
      // one at a time with their artwork settling behind the labels.
      gsap.fromTo(
        ".team-panel",
        { scaleY: 0.94, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          transformOrigin: "top center",
          scrollTrigger: { trigger: root.current, start: "top 82%" },
        },
      );

      gsap.utils.toArray<HTMLElement>(".team-pillar").forEach((pillar, i) => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: pillar, start: "top 90%" },
          delay: i * 0.12,
        });

        tl.fromTo(
          pillar,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        )
          .fromTo(
            pillar.querySelector(".team-art"),
            { scale: 1.18, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
            0,
          )
          .fromTo(
            pillar.querySelectorAll(".team-cell"),
            { y: 14, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.07,
            },
            0.18,
          );
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="bg-black px-6 py-16 sm:px-10 lg:px-[48px] lg:py-[80px]"
    >
      <div className="team-panel mx-auto max-w-[1261px] border-[0.8px] border-[rgba(75,73,73,0.4)] p-6 lg:p-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col lg:w-[476px]">
            <h2 className="gsap-fade team-heading font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[48px]">
              Our <span className="text-[#ff884c]">Team</span>
            </h2>
            <p className="gsap-fade team-lede mt-6 text-base leading-[26px] text-white/80">
              GroBird is built by technologists who&apos;ve worked across
              operations, architecture, and implementation. We&apos;ve led
              teams. We&apos;ve managed large programs. We&apos;ve worked
              with enterprise platforms and built from scratch. We
              understand what it takes to deliver.
            </p>
            <p className="gsap-fade team-lede mt-5 text-base leading-[26px] text-[#858382]">
              We&apos;re based in India and serve B2B companies across South
              Asia and globally. We&apos;re familiar with local context
              while applying global best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[2px] lg:w-[517px]">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="gsap-fade team-pillar relative min-h-[176px] overflow-hidden border-[0.8px] border-[rgba(75,73,73,0.4)] p-6"
              >
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  className="team-art object-cover"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-2">
                  <p className="team-cell font-mono text-[9px] tracking-[2px] text-[#ff884c] uppercase">
                    {pillar.number}
                  </p>
                  <p className="team-cell font-sora text-[15px] font-semibold text-white">
                    {pillar.title}
                  </p>
                  <p className="team-cell max-w-[120px] text-xs leading-[18px] text-white">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
