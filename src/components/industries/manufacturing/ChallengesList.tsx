const CHALLENGES = [
  {
    title: "Supplier coordination is fragmented",
    description:
      "Purchase orders go via email or disparate systems. Delivery tracking is manual.",
  },
  {
    title: "Production planning lacks visibility",
    description:
      "You can't see supplier lead times or inventory position in one view.",
  },
  {
    title: "Quality tracking and compliance is labor-intensive",
    description:
      "Inspections, documentation, and traceability require manual effort.",
  },
  {
    title: "Demand forecasting is reactive",
    description:
      "Plans update slowly. Surprises lead to rush orders and waste.",
  },
];

export default function ChallengesList() {
  return (
    <section className="border-b-[0.8px] border-black/8 bg-black px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto flex max-w-[1204px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-sora text-4xl tracking-[-2px] whitespace-nowrap text-white/20 lg:text-[47.8px]">
          <span className="block">Operations challenges</span>
          <span className="block text-white">in Manufacturing</span>
        </h2>
        <p className="max-w-[300px] text-sm leading-6 text-white">
          Every deliverable maps directly to a recommendation in your
          analysis — no scope drift.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1204px] flex-col border-t-[0.8px] border-[rgba(75,73,73,0.35)]">
        {CHALLENGES.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-2 border-b-[0.8px] border-[rgba(75,73,73,0.35)] py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
          >
            <p className="font-sora text-xl font-semibold text-white lg:text-[22px]">
              {item.title}
            </p>
            <p className="max-w-[430px] text-base leading-7 text-white/55">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
