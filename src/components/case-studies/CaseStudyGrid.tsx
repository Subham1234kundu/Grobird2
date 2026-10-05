"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const CASE_STUDIES = [
  {
    image: "/landing/selected-work/ecommerce.png",
    alt: "Analytics dashboard from a bespoke e-commerce system",
    title: "Build customer service agents with empathy",
    tag: "Automate Business Processes",
    description:
      "Bring human-like voice AI agents online to handle calls, qualify leads, and support customers 24/7.",
  },
  {
    image: "/landing/selected-work/presales.png",
    alt: "Dashboard of an AI-powered presales evaluation platform",
    title: "Build customer service agents with empathy",
    tag: "Automate Business Processes",
    description:
      "Bring human-like voice AI agents online to handle calls, qualify leads, and support customers 24/7.",
  },
];

export default function CaseStudyGrid() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".cs-card").forEach((card, i) => {
        gsap
          .timeline({
            scrollTrigger: { trigger: card, start: "top 90%" },
            delay: i * 0.12,
          })
          .fromTo(
            card,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          )
          .fromTo(
            card.querySelector(".cs-card-art"),
            { scale: 1.08 },
            { scale: 1, duration: 1.1, ease: "power2.out" },
            0,
          );
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="bg-black px-[17.5px] pt-[37px] pb-9 sm:px-10 sm:pt-14 lg:px-16 lg:pt-[97px] lg:pb-[35px]"
    >
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {CASE_STUDIES.map((study, i) => (
          <article
            key={i}
            className="gsap-fade cs-card flex flex-col overflow-hidden rounded-2xl bg-[#f5f2ed]"
          >
            <div className="relative h-[299px] overflow-hidden">
              <Image
                src={study.image}
                alt={study.alt}
                fill
                sizes="(min-width: 1024px) 634px, (min-width: 768px) 50vw, 100vw"
                className="cs-card-art object-cover object-[-46px_0px] md:object-left-top"
              />
            </div>

            <div className="flex flex-1 flex-col gap-[13px] p-10">
              <h2 className="max-w-[315px] font-sora text-2xl leading-[30px] font-light tracking-[-0.768px] text-[#2a2520] md:max-w-none md:text-[28px] md:leading-[36px] lg:text-[36px] lg:leading-[45.3px]">
                {study.title}
              </h2>
              <span className="flex h-[30px] w-fit items-center rounded-xl border-[0.8px] border-[rgba(255,136,76,0.25)] px-3.5 font-sora text-[10px] leading-[16.5px] font-semibold tracking-[1.32px] whitespace-nowrap text-[#ff884c] uppercase lg:text-[11px]">
                {study.tag}
              </span>
              <p className="pt-3 text-[15px] leading-[22px] text-[#706a60] lg:pt-10 lg:text-[13.6px] lg:leading-[21.76px]">
                {study.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
