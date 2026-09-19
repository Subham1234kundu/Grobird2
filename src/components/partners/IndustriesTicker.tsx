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

export default function IndustriesTicker() {
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <div className="overflow-hidden border-y-[0.8px] border-white/40 bg-black py-3">
      <div className="animate-ticker flex w-max items-center gap-8">
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="font-mono text-[11px] tracking-[2px] text-[#858382] uppercase">
              {item}
            </span>
            <span className="font-mono text-[6px] text-[#ff884c]">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
