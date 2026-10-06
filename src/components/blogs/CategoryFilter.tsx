"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // The chips deal in left to right as the row comes into view.
      gsap.fromTo(
        ".filter-chip",
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: { trigger: root.current, start: "top 92%" },
        },
      );
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="mx-auto flex max-w-[1440px] overflow-x-auto bg-black [scrollbar-width:none] sm:px-10 lg:px-[66px] [&::-webkit-scrollbar]:hidden"
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={active === category}
          className={`gsap-fade filter-chip shrink-0 border border-white/[0.18] px-4 py-[10px] text-xs leading-[18px] whitespace-nowrap text-white capitalize transition-colors lg:px-[54px] lg:py-3 lg:text-sm lg:leading-[22px] ${
            active === category ? "bg-[#ff884c]" : "hover:bg-white/5"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
