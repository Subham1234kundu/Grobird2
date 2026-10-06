const INDUSTRIES = [
  "Fintech",
  "Logistics",
  "Healthcare",
  "Lending",
  "Manufacturing",
  "SaaS",
  "EdTech",
  "Real Estate",
  "Insurance",
  "B2B Services",
];

/** Bordered marquee of industries between the hero and the case studies. */
export default function IndustriesTicker() {
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="relative bg-black py-8 lg:py-9">
      <div className="overflow-hidden border-y-[0.8px] border-white/20 py-3">
        <div className="animate-ticker flex w-max items-center gap-8">
          {items.map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center gap-8">
              <span className="font-mono text-[11px] leading-[16.5px] tracking-[2px] text-[#858382] uppercase">
                {item}
              </span>
              <span className="font-mono text-[6px] leading-[9px] text-[#ff884c]">
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
