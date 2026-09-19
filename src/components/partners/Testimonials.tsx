"use client";

import Image from "next/image";
import { useState } from "react";

const SLIDES = [
  {
    tab: "Adaptability",
    variant: "consultant" as const,
    photo: "/partners/hero-left.png",
    body: "We work with management consultants, strategy firms, and advisory practices who've identified operational or technology needs their clients must address. We're your execution arm.",
    stat: { value: "100%", label: "Client Satisfaction" },
  },
  {
    tab: "Trust",
    variant: "quote" as const,
    photo: "/partners/testimonials/reviewer1.png",
    quote:
      '"AgentFlow brings structure to AI workflows, while its orchestration layer simplifies complexity and improves efficiency, enabling scalable and reliable system performance without breaking under scale."',
    name: "Ethan Walker",
    role: "CTO",
    stat: { value: "0%", label: "Reduction in manual work" },
  },
  {
    tab: "Clear Communication",
    variant: "quote" as const,
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
    photo: "/partners/testimonials/reviewer3.png",
    quote:
      '"AgentFlow delivers clarity to automation processes, while its orchestration layer simplifies complex systems and improves coordination, ensuring consistent scalable performance with reliable and stable execution."',
    name: "Noah Williams",
    role: "Cloud Engineer",
    stat: { value: "0%", label: "Reduction in manual work" },
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  return (
    <section className="bg-black px-6 py-16 sm:px-10 lg:px-20 lg:py-[97px]">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-white lg:text-[42px]">
          What People Are Saying
        </h2>

        <div className="mt-16 border border-white/10">
          <div className="grid grid-cols-2 border-b border-white/10 lg:grid-cols-4">
            {SLIDES.map((s, i) => (
              <button
                key={s.tab}
                type="button"
                onClick={() => setActive(i)}
                className={`relative flex h-14 items-center justify-center border-r border-white/10 px-4 text-sm font-semibold last:border-r-0 ${
                  active === i ? "text-white" : "text-white/67"
                }`}
              >
                {s.tab}
                {active === i && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white" />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:min-h-[520px] lg:grid-cols-[450px_1fr]">
            <div className="relative h-[300px] lg:h-auto">
              <Image src={slide.photo} alt="" fill className="object-cover" />
              {slide.variant === "consultant" && (
                <div className="absolute inset-0 bg-[#2563eb]/70" aria-hidden />
              )}
            </div>

            <div
              className={`flex flex-col justify-center gap-10 p-8 lg:border-l lg:border-white/10 lg:p-16 ${
                slide.variant === "consultant" ? "bg-[#2563eb]" : "bg-black"
              }`}
            >
              {slide.variant === "consultant" ? (
                <p className="font-sans text-2xl leading-[1.2] font-light text-white lg:text-[32px]">
                  {slide.body}
                </p>
              ) : (
                <div className="flex items-start gap-6">
                  <div className="relative size-[80px] shrink-0 overflow-hidden rounded-full lg:size-[120px]">
                    <Image
                      src={slide.photo}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base leading-[26px] text-white">
                      {slide.quote}
                    </p>
                    <p className="mt-4 font-semibold text-white">
                      {slide.name}
                    </p>
                    <p className="text-sm text-white/70">{slide.role}</p>
                  </div>
                </div>
              )}

              <div className="border-t border-white/10 pt-6">
                <p className="font-serif text-4xl font-light text-white">
                  {slide.stat.value}
                </p>
                <p className="mt-1 text-sm text-white">{slide.stat.label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
