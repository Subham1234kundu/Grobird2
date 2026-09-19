const CHALLENGES = [
  {
    title: "Eligibility verification is manual and slow",
    description:
      "Staff call insurers or search portals. Real-time verification is rare.",
  },
  {
    title: "Claims submission requires rework",
    description: "Incomplete claims bounce. Staff resubmit manually.",
  },
  {
    title: "Prior authorization is a bottleneck",
    description:
      "Doctors wait for approvals. Paperwork gets lost. Processes are opaque.",
  },
  {
    title: "Patient communication is ad-hoc",
    description:
      "Billing questions loop through email or phone. Status updates are manual.",
  },
];

export default function ChallengesList() {
  return (
    <section className="border-b-[0.8px] border-black/8 bg-black px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto flex max-w-[1204px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-sora text-4xl tracking-[-2px] whitespace-nowrap text-white/20 lg:text-[47.8px]">
          <span className="block">Operations challenges</span>
          <span className="block text-white">in healthcare.</span>
        </h2>
        <p className="max-w-[300px] text-sm leading-6 text-[#4b4949]">
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
