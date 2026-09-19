"use client";

import { useState } from "react";

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
  const [active, setActive] = useState("All");

  return (
    <div className="flex overflow-x-auto bg-black">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setActive(category)}
          className={`shrink-0 border border-white/[0.18] px-8 py-3 text-sm whitespace-nowrap text-white capitalize transition-colors ${
            active === category ? "bg-[#ff884c]" : "hover:bg-white/5"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
