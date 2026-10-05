"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  gsap,
  headlineLinesReveal,
  splitWordsReveal,
  useGSAP,
} from "@/lib/gsap";

// Each illustration sits at a fixed size and offset inside its card,
// spilling off the bottom-right edge, exactly as placed in Figma.
// `art` is the phone placement (170×160 card), `artLg` the tablet and
// desktop placement (252.6×176.3 card).
const PILLARS = [
  {
    number: "01",
    title: "Operations",
    subtitle: "Process design & execution",
    image: "/about/team-operations.png",
    art: "left-[57.4px] top-[57.4px] h-[120px] w-[120px] object-contain",
    artLg: "sm:left-[130.1px] sm:top-[15.9px] sm:h-[193px] sm:w-[154px] sm:object-cover",
    subtitleTone: "text-[#858382] sm:text-white",
  },
  {
    number: "02",
    title: "Architecture",
    subtitle: "System design & integration",
    image: "/about/team-architecture.png",
    art: "left-[84.2px] top-[67.4px] h-[120px] w-[99.65px] object-contain",
    artLg: "sm:left-[129.3px] sm:top-[15.7px] sm:h-[186px] sm:w-[154px] sm:object-cover",
    subtitleTone: "text-[#858382] sm:text-white",
  },
  {
    number: "03",
    title: "Implementation",
    subtitle: "Build, deploy, optimise",
    image: "/about/team-implementation.png",
    art: "left-[54.4px] top-[53.4px] h-[120px] w-[132.35px] object-contain",
    artLg: "sm:left-[83.1px] sm:top-[-7.4px] sm:h-[203px] sm:w-[224px] sm:object-cover",
    subtitleTone: "text-white sm:text-[#858382]",
  },
  {
    number: "04",
    title: "Global Delivery",
    subtitle: "South Asia & worldwide",
    image: "/about/team-global.png",
    art: "left-[62.2px] top-[71.4px] h-[120px] w-[120px] object-contain",
    artLg: "sm:left-[86.5px] sm:top-[20.6px] sm:h-[216px] sm:w-[216px] sm:object-cover",
    subtitleTone: "text-white",
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

          <div className="grid grid-cols-2 gap-2 sm:w-[517.2px] sm:grid-cols-[252.6px_252.6px] sm:gap-3 lg:shrink-0">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="gsap-fade team-pillar relative h-[160px] overflow-hidden border-[0.8px] border-[rgba(75,73,73,0.4)] p-4 sm:h-[176.3px] sm:p-6"
              >
                <Image
                  src={pillar.image}
                  alt=""
                  width={600}
                  height={600}
                  sizes="(min-width: 640px) 224px, 132px"
                  className={`team-art absolute max-w-none ${pillar.art} ${pillar.artLg}`}
                  aria-hidden
                />
                <div className="relative flex flex-col">
                  <p className="team-cell font-mono text-[9px] leading-[13.5px] tracking-[2px] text-[#ff884c] uppercase">
                    {pillar.number}
                  </p>
                  <p className="team-cell pt-2 font-sora text-sm leading-5 font-semibold whitespace-nowrap text-white sm:text-[15px] sm:leading-[22.5px]">
                    {pillar.title}
                  </p>
                  <p
                    className={`team-cell pt-1 text-xs leading-[18px] sm:pt-2 ${pillar.subtitleTone} ${
                      pillar.number === "03" ? "sm:whitespace-nowrap" : "max-w-[137px] sm:max-w-[116px]"
                    }`}
                  >
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
