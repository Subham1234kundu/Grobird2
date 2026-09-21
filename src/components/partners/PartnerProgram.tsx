"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  countUpReveal,
  gsap,
  headlineLinesReveal,
  useGSAP,
} from "@/lib/gsap";

const SLIDES = [
  {
    tab: "Adaptability",
    variant: "consultant" as const,
    photo: "/partners/testimonials/slide1-photo.png",
    body: "We work with management consultants, strategy firms, and advisory practices who've identified operational or technology needs their clients must address. We're your execution arm.",
    stat: { value: "100%", label: "Client Satisfaction" },
  },
  {
    tab: "Trust",
    variant: "quote" as const,
    heading:
      "Orchestration layer simplifies workflows and improves overall system efficiency",
    photo: "/partners/testimonials/slide1-photo.png",
    quote:
      '"AgentFlow brings structure to AI workflows, while its orchestration layer simplifies complexity and improves efficiency, enabling scalable and reliable system performance without breaking under scale."',
    name: "Ethan Walker",
    role: "CTO",
    stat: { value: "0%", label: "Reduction in manual work" },
  },
  {
    tab: "Clear Communication",
    variant: "quote" as const,
    heading:
      "Orchestration layer brings clarity and structure to complex digital workflows",
    photo: "/partners/testimonials/reviewer2.png",
    quote:
      '"AgentFlow organizes automation workflows effectively, and its orchestration layer reduces system complexity, enhances control, and enables smooth scalable growth with consistent performance and operational stability."',
    name: "Sophia Martinez",
    role: "Product Manager",
    stat: { value: "0%", label: "Reduction in manual work" },
  },
  {
    tab: "Shared Goals",
    variant: "quote" as const,
    heading:
      "Orchestration layer unifies multiple services into one streamlined workflow system",
    photo: "/partners/testimonials/reviewer3.png",
    quote:
      '"AgentFlow delivers clarity to automation processes, while its orchestration layer simplifies complex systems and improves coordination, ensuring consistent scalable performance with reliable and stable execution."',
    name: "Noah Williams",
    role: "Cloud Engineer",
    stat: { value: "0%", label: "Reduction in manual work" },
  },
];

export default function PartnerProgram() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  useGSAP(
    () => {
      headlineLinesReveal(".testimonials-heading", { start: "top 88%" });

      gsap.to(".testimonials-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });
    },
    { scope: root },
  );

  // Each tab change re-composes the panel: the artwork wipes in, the copy
  // lifts behind it, and the stat counts up from zero.
  useGSAP(
    () => {
      gsap.fromTo(
        ".testimonial-panel",
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
      );

      gsap.fromTo(
        ".testimonial-copy",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.09,
          delay: 0.1,
        },
      );

      countUpReveal(".testimonial-stat", { start: "top 100%" });
    },
    { dependencies: [active], scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-[#2a7bf2] px-6 py-16 sm:px-10 lg:px-20 lg:py-[140px]"
    >
      <div
        className="pointer-events-none absolute top-[7px] right-0 hidden h-[1066px] w-[600px] opacity-37 mix-blend-screen lg:block"
        aria-hidden
      >
        <Image
          src="/partners/testimonials/orbit.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <h2 className="gsap-fade testimonials-heading font-sora text-4xl leading-[52.8px] font-normal tracking-[-1px] text-white/57 lg:text-[56px]">
          Partner <span className="text-white">Program</span>
        </h2>

        <div className="gsap-fade testimonials-fade translate-y-10 mt-14 border border-white/20">
          <div className="grid grid-cols-2 border-b border-white/20 lg:grid-cols-4">
            {SLIDES.map((s, i) => (
              <button
                key={s.tab}
                type="button"
                onClick={() => setActive(i)}
                className={`relative flex h-14 items-center justify-center border-r border-white/20 px-4 font-sora text-sm font-semibold transition-colors last:border-r-0 lg:text-base ${
                  active === i
                    ? "text-white"
                    : "text-white/67 hover:text-white/85"
                }`}
              >
                {s.tab}
                {active === i && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white" />
                )}
              </button>
            ))}
          </div>

          <div
            key={active}
            className={`grid grid-cols-1 lg:min-h-[520px] ${
              slide.variant === "consultant"
                ? "lg:grid-cols-[450px_1fr]"
                : "lg:grid-cols-[450px_1fr_303px]"
            }`}
          >
            <div className="testimonial-panel relative h-[300px] overflow-hidden lg:h-auto">
              <Image src={slide.photo} alt="" fill className="object-cover" />
              {slide.variant === "consultant" && (
                <Image
                  src="/partners/testimonials/slide1-bird-overlay.svg"
                  alt=""
                  width={313}
                  height={481}
                  className="absolute top-1/2 left-1/2 h-[92%] w-auto -translate-x-[18%] -translate-y-1/2 opacity-70 mix-blend-soft-light"
                  aria-hidden
                />
              )}
            </div>

            <div className="flex flex-col justify-between gap-10 p-8 lg:border-r lg:border-white/20 lg:p-[30px]">
              <p
                className={`testimonial-copy leading-[38.4px] font-light text-white ${
                  slide.variant === "consultant"
                    ? "pt-8 text-2xl lg:pl-[7px] lg:text-[32px]"
                    : "pt-12 font-serif text-2xl lg:text-[32px]"
                }`}
              >
                {slide.variant === "consultant" ? slide.body : slide.heading}
              </p>

              <div className="testimonial-copy">
                <p className="flex items-baseline font-serif text-[44px] leading-[44px] font-light text-white">
                  <span className="testimonial-stat">{slide.stat.value}</span>
                </p>
                <p className="mt-2 text-sm leading-[22px] text-white">
                  {slide.stat.label}
                </p>
              </div>
            </div>

            {slide.variant === "quote" && (
              <div className="flex flex-col gap-8 p-[30px]">
                <div className="testimonial-copy relative size-[120px] shrink-0 overflow-hidden">
                  <Image
                    src={slide.photo}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="testimonial-copy mt-auto">
                  <p className="text-base leading-[26px] text-white">
                    {slide.quote}
                  </p>
                  <p className="mt-6 text-base leading-[26px] font-semibold text-white">
                    {slide.name}
                  </p>
                  <p className="text-sm leading-[22px] text-white/70">
                    {slide.role}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="gsap-fade testimonials-fade translate-y-6 mt-8 max-w-[705px] text-base leading-normal font-light text-white">
          Join our partner network and access a team of technologists who
          understand how to deliver on strategic recommendations. Your
          consulting stays focused on strategy. Your client gets working
          systems.
        </p>
      </div>
    </section>
  );
}
