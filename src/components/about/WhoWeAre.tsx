const STATS = [
  { value: "50+", label: "Clients served" },
  { value: "6", label: "Industries" },
  { value: "3×", label: "Avg. throughput gain" },
];

export default function WhoWeAre() {
  return (
    <section className="bg-black px-6 py-16 sm:px-10 lg:px-[48px] lg:py-[80px]">
      <div className="mx-auto max-w-[1261px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
          <div className="flex flex-col justify-between lg:w-[630.5px]">
            <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
              Who We <span className="text-[#ff884c]">Are</span>
            </h2>
            <div className="mt-8 flex flex-wrap items-start gap-6 lg:mt-0">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <p className="font-sora text-3xl font-semibold text-[#ff884c]">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] tracking-[1px] text-[#858382] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:w-[630.5px]">
            <p className="text-base leading-[26px] text-white/80">
              GroBird is an operations and technology implementation partner
              for growing B2B companies. We combine operational expertise
              with technical depth to solve the problems that limit growth.
            </p>
            <p className="text-base leading-[26px] text-[#858382]">
              We&apos;ve worked with fintech platforms, logistics networks,
              healthcare providers, lending platforms, and manufacturers.
              Companies that operate at scale but were constrained by process
              gaps, system fragmentation, or manual workflows. Our job is to
              eliminate those constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
