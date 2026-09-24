"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  countUpReveal,
  gsap,
  headlineLinesReveal,
  useGSAP,
} from "@/lib/gsap";

const CONSULTANT_BODY =
  "We work with management consultants, strategy firms, and advisory practices who've identified operational or technology needs their clients must address. We're your execution arm.";

const SLIDES = [
  {
    tab: "Adaptability",
    variant: "consultant" as const,
    body: CONSULTANT_BODY,
    stat: { value: "100", label: "Client Satisfaction" },
  },
  {
    tab: "Trust",
    variant: "quote" as const,
    brand: { src: "/partners/testimonials/brand-2.svg", width: 217, height: 60 },
    heading:
      "Orchestration layer simplifies workflows and improves overall system efficiency",
    photo: "/partners/testimonials/reviewer1.png",
    quote:
      '"AgentFlow brings structure to AI workflows, while its orchestration layer simplifies complexity and improves efficiency, enabling scalable and reliable system performance without breaking under scale."',
    name: "Ethan Walker",
    role: "CTO",
    stat: { value: "0", label: "Reduction in manual work" },
  },
  {
    tab: "Clear Communication",
    variant: "quote" as const,
    brand: { src: "/partners/testimonials/brand-3.svg", width: 297, height: 60 },
    heading:
      "Orchestration layer brings clarity and structure to complex digital workflows",
    photo: "/partners/testimonials/reviewer2.png",
    quote:
      '"AgentFlow organizes automation workflows effectively, and its orchestration layer reduces system complexity, enhances control, and enables smooth scalable growth with consistent performance and operational stability."',
    name: "Sophia Martinez",
    role: "Product Manager",
    stat: { value: "0", label: "Reduction in manual work" },
  },
  {
    tab: "Shared Goals",
    variant: "quote" as const,
    brand: { src: "/partners/testimonials/brand-4.svg", width: 233, height: 60 },
    heading:
      "Orchestration layer unifies multiple services into one streamlined workflow system",
    photo: "/partners/testimonials/reviewer3.png",
    quote:
      '"AgentFlow delivers clarity to automation processes, while its orchestration layer simplifies complex systems and improves coordination, ensuring consistent scalable performance with reliable and stable execution."',
    name: "Noah Williams",
    role: "Cloud Engineer",
    stat: { value: "0", label: "Reduction in manual work" },
  },
];

const CLOSING =
  "Join our partner network and access a team of technologists who understand how to deliver on strategic recommendations. Your consulting stays focused on strategy. Your client gets working systems.";

function ConsultantPhoto({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src="/partners/testimonials/slide1-consultants.png"
        alt=""
        fill
        className="object-cover"
      />
      <Image
        src="/partners/testimonials/slide1-bird-overlay.svg"
        alt=""
        width={313}
        height={481}
        className="absolute top-[calc(50%+52px)] left-[calc(50%+121.5px)] h-[481px] w-[313px] max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-soft-light"
        aria-hidden
      />
    </div>
  );
}

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

      countUpReveal(".testimonial-stat-mobile", { start: "top 90%" });
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
      className="relative mt-8 overflow-hidden bg-[#2b7cf2] px-5 pt-10 pb-[58px] sm:px-10 lg:mt-0 lg:px-20 lg:pt-[140px] lg:pb-[155px]"
    >
      {/* Orbit line-art: full size on desktop, a narrow column on mobile. */}
      <div
        className="pointer-events-none absolute top-0 left-[45%] h-[701px] w-[236.5px] opacity-37 mix-blend-lighten lg:top-[7px] lg:right-0 lg:left-auto lg:h-[1066px] lg:w-[600px] lg:mix-blend-screen"
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
        <h2 className="gsap-fade testimonials-heading font-sora text-[32px] leading-10 font-normal text-white/57 lg:text-[56px] lg:leading-[52.8px]">
          Partner <span className="text-white">Program</span>
        </h2>

        {/* Mobile: a single glass card with the consultant copy and stat,
            then the photo. */}
        <div className="gsap-fade testimonials-fade translate-y-8 mt-8 lg:hidden">
          <div className="border-[0.8px] border-white/10 bg-white/7 p-6">
            <p className="pt-6 font-merriweather text-lg leading-[26px] font-light text-white">
              {CONSULTANT_BODY}
            </p>
            <p className="pt-8 font-merriweather text-[52px] leading-[52px] font-light text-white">
              <span className="testimonial-stat-mobile">100</span>%
            </p>
            <p className="pt-1 font-cabin text-[13px] leading-5 text-white">
              Client Satisfaction
            </p>
          </div>
          <ConsultantPhoto className="aspect-[450/520] w-full" />
        </div>

        {/* Desktop: tabbed 1280×576 panel. */}
        <div className="gsap-fade testimonials-fade translate-y-10 mt-[58px] hidden lg:block">
          <div className="relative grid grid-cols-4">
            {SLIDES.map((s, i) => (
              <button
                key={s.tab}
                type="button"
                onClick={() => setActive(i)}
                className={`flex h-14 items-center justify-center border border-white/10 font-sora text-base leading-[38.4px] font-semibold transition-colors ${
                  active === i
                    ? "text-white"
                    : "text-white/67 hover:text-white/85"
                }`}
              >
                {s.tab}
              </button>
            ))}
            <span
              className="absolute bottom-0 left-0 h-[2px] w-1/4 bg-white transition-transform duration-300"
              style={{ transform: `translateX(${active * 100}%)` }}
              aria-hidden
            />
          </div>

          <div
            key={active}
            className={`grid h-[520px] border border-white/10 ${
              slide.variant === "consultant"
                ? "grid-cols-[450px_673px_1fr]"
                : "grid-cols-[450px_527px_303px]"
            }`}
          >
            {slide.variant === "consultant" ? (
              <ConsultantPhoto className="testimonial-panel h-full" />
            ) : (
              <div className="testimonial-panel relative overflow-hidden">
                <Image
                  src="/partners/testimonials/slide-bg-blue.png"
                  alt=""
                  fill
                  className="object-cover"
                />
                <Image
                  src={slide.brand.src}
                  alt=""
                  width={slide.brand.width}
                  height={slide.brand.height}
                  className="absolute top-1/2 left-1/2 h-[60px] w-auto max-w-none -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            )}

            <div className="relative border-r border-white/10">
              {slide.variant === "consultant" ? (
                <p className="testimonial-copy absolute top-[67.5px] right-[30px] left-[37px] text-[32px] leading-[38.4px] font-light text-white">
                  {slide.body}
                </p>
              ) : (
                <p className="testimonial-copy absolute top-[29px] right-[43px] left-[30px] font-merriweather text-[32px] leading-[38.4px] font-light text-white">
                  {slide.heading}
                </p>
              )}

              <div className="testimonial-copy absolute bottom-[30px] left-[30px]">
                <p className="font-merriweather text-[44px] leading-[44px] font-light text-white">
                  <span className="testimonial-stat">{slide.stat.value}</span>
                  <span className="mix-blend-plus-lighter">%</span>
                </p>
                <p className="font-cabin text-sm leading-[22px] text-white">
                  {slide.stat.label}
                </p>
              </div>
            </div>

            {slide.variant === "quote" ? (
              <div className="relative">
                <div className="testimonial-copy absolute top-[30px] left-[30px] size-[120px] overflow-hidden">
                  <Image
                    src={slide.photo}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="testimonial-copy absolute top-[228px] right-[30px] bottom-[30px] left-[30px]">
                  <p className="absolute top-[3px] right-4 left-0 font-cabin text-base leading-[26px] text-white">
                    {slide.quote}
                  </p>
                  <p className="absolute top-[214px] left-0 font-cabin text-base leading-[26px] font-semibold text-white">
                    {slide.name}
                  </p>
                  <p className="absolute top-[240px] left-0 font-cabin text-sm leading-[22px] text-white/70">
                    {slide.role}
                  </p>
                </div>
              </div>
            ) : (
              <div aria-hidden />
            )}
          </div>
        </div>

        <p className="gsap-fade testimonials-fade translate-y-6 mt-5 text-base leading-normal font-light text-white lg:mt-10 lg:max-w-[705px]">
          {CLOSING}
        </p>
      </div>
    </section>
  );
}
