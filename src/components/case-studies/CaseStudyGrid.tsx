"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { CASE_STUDY_INDUSTRIES, type CaseStudy } from "@/lib/case-studies/types";
import { DEMO_CASE_STUDIES } from "@/lib/case-studies/demos";

export default function CaseStudyGrid({ studies }: { studies: CaseStudy[] | null }) {
  const root = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...CASE_STUDY_INDUSTRIES];
  const cards = (studies ?? DEMO_CASE_STUDIES).map(study => ({ ...study, image: study.cover_image_url, alt: study.title }));
  const visible = cards.filter((study) =>
    (category === "All" || study.industry === category) &&
    `${study.title} ${study.tag} ${study.description}`.toLowerCase().includes(query.trim().toLowerCase()),
  );

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
    { scope: root, dependencies: [query, category, studies], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      className="mx-auto max-w-[1440px] bg-[#030408] px-5 py-16 sm:bg-black sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="border-b border-white/20 pb-8 sm:border-0">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[11px] leading-[16.5px] tracking-[2px] text-[#ff884c] uppercase">Explore our work</p>
            <h2 className="mt-2 font-sora text-[30px] leading-9 font-light tracking-[-0.8px] text-[#f5f2ed]">Find a case study</h2>
          </div>
          <label className="flex h-12 w-full max-w-[390px] items-center gap-3 border-[0.8px] border-white/30 bg-white/[0.04] px-4">
            <Image src="/case-studies/search.svg" alt="" width={16.4995} height={16.5001} />
            <input type="search" aria-label="Search case studies" placeholder="Search case studies" value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm text-[#f5f2ed] outline-none placeholder:text-[#858382]" />
          </label>
        </div>
        <div role="group" aria-label="Filter case studies by category" className="mt-7 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`shrink-0 border-[0.8px] px-4 py-2 font-mono text-[11px] leading-[16.5px] tracking-[1.2px] uppercase transition-colors ${category === item ? "border-[#ff884c] bg-[#ff884c] text-black" : "border-white/25 text-[#aaa7a3] hover:border-[#ff884c]"}`}>{item}</button>)}
        </div>
      </div>
      <div className="mt-12 grid max-w-[1066.4px] grid-cols-1 gap-8 md:mt-0 md:grid-cols-2">
        {visible.map((study) => (
          <article
            key={study.id}
            className="gsap-fade cs-card group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-[#f5f2ed] transition-shadow hover:ring-2 hover:ring-[#ff884c] focus-within:ring-2 focus-within:ring-[#ff884c]"
          >
              <Link
                href={`/case-studies/${study.id}`}
                aria-label={`Read case study: ${study.title}`}
                className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ff884c]"
              />
            <div className="relative h-[250px] overflow-hidden md:h-[299px]">
              <Image
                src={study.image}
                alt={study.alt}
                fill
                sizes="(min-width: 1440px) 517px, (min-width: 768px) 45vw, 100vw"
                className="cs-card-art object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" aria-hidden />
            </div>

            <div className="flex flex-1 flex-col px-4 py-7 md:p-10">
              <h3 className="font-sora text-[28px] leading-[35.28px] font-light tracking-[-0.75px] text-[#2a2520] lg:text-[36px] lg:leading-[45.36px]">
                {study.title}
              </h3>
              <span className="mt-4 flex min-h-[30px] w-fit max-w-full items-center rounded-xl border-[0.8px] border-[rgba(255,136,76,0.25)] px-3.5 py-1 font-sora text-[10px] leading-[15px] font-semibold tracking-[1.2px] text-[#ff884c] uppercase">
                {study.tag}
              </span>
              <p className="pt-10 text-[13.6px] leading-[21.76px] text-[#706a60]">
                {study.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      {visible.length === 0 && <p role="status" className="py-12 text-[#aaa7a3]">No case studies match your search. Try another category or search term.</p>}
    </section>
  );
}
