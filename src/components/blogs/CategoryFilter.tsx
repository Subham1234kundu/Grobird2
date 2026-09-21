"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const CATEGORIES = [
  "All",
  "Fintech",
  "Logistics",
  "Healthcare",
  "Lending",
  "Manufacturing",
  "Business Intelligence",
  "Workflow Automation",
];

export default function CategoryFilter() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("All");

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
      className="mx-auto flex max-w-[1261px] overflow-x-auto bg-black px-6 sm:px-10 lg:px-0"
    >
      {CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setActive(category)}
          className={`gsap-fade filter-chip shrink-0 border border-white/[0.18] px-8 py-3 text-sm whitespace-nowrap text-white capitalize transition-colors ${
            active === category ? "bg-[#ff884c]" : "hover:bg-white/5"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
