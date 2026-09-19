const PHASES = [
  {
    number: "01",
    accent: "#2b7cf2",
    label: "Phase 01",
    title: "Intake",
    description:
      "We understand your operation: team structure, current systems, key pain points, and business objectives. This shapes everything that follows.",
  },
  {
    number: "02",
    accent: "#ff884c",
    label: "Phase 02",
    title: "Deep Dive",
    description:
      "We interview operators, map workflows, document data flows, and identify gaps and redundancies across every layer of your process.",
  },
  {
    number: "03",
    accent: "#2b7cf2",
    label: "Phase 03",
    title: "Analysis",
    description:
      "We quantify the cost of current operations, model improvements, and prioritize solutions by impact — not assumption.",
  },
  {
    number: "04",
    accent: "#ff884c",
    label: "Phase 04",
    title: "Roadmap",
    description:
      "We deliver a clear, prioritized implementation plan with business case, timeline, and investment. You leave with a diagnosis, not a sales pitch.",
  },
];

export default function DiscoveryProcess() {
  return (
    <section
      id="discovery-process"
      className="bg-black px-6 pb-20 sm:px-10 lg:px-[99px] lg:pb-[101px]"
    >
      <div className="mx-auto flex max-w-[1261px] flex-col gap-8 pt-12 lg:flex-row lg:items-end lg:justify-between lg:gap-14 lg:pt-[97px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          Our Discovery <span className="text-[#ff884c]">Process</span>
        </h2>
        <p className="max-w-[340px] text-[15px] leading-[25.5px] text-white/40">
          Four structured phases that move from understanding to a
          decision-ready roadmap in four weeks.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1261px] grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[80px] lg:grid-cols-4 lg:gap-[45px]">
        {PHASES.map((phase) => (
          <div
            key={phase.number}
            className="relative flex h-[319px] flex-col overflow-hidden rounded-[12px] border-[0.8px] border-white/6 bg-[#111] px-6 py-8"
          >
            <div
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{ backgroundColor: phase.accent }}
            />
            <p className="font-sora text-5xl font-extrabold tracking-[-1.92px] text-white/4">
              {phase.number}
            </p>
            <p
              className="mt-6 font-sora text-[10px] font-bold tracking-[1.2px] uppercase"
              style={{ color: phase.accent }}
            >
              {phase.label}
            </p>
            <h3 className="mt-3 font-sora text-xl font-bold tracking-[-0.4px] text-white">
              {phase.title}
            </h3>
            <p className="mt-3.5 text-[13px] leading-[22.1px] text-white/45">
              {phase.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
