import Image from "next/image";

const ROWS = [
  {
    number: "01",
    numberSide: "left" as const,
    tag: "Fulfillment",
    outcome: "14 min → under 30 sec",
    heading: (
      <>
        <span className="text-white/20">Real-time eligibility </span>
        <span className="text-white">verification</span>
      </>
    ),
    description:
      "Check insurance coverage and benefits instantly at point of service — before the patient sits down. Automated, accurate, and logged.",
  },
  {
    number: "02",
    numberSide: "right" as const,
    tag: "Routing",
    outcome: "First-pass rate 94%+",
    heading: (
      <>
        <span className="text-white/20">Automated claims </span>
        <span className="text-white">assembly and submission</span>
      </>
    ),
    description:
      "Consolidate data from EMR, schedule, and billing into complete, validated claims. First-pass acceptance climbs. Manual rework drops to near zero.",
  },
  {
    number: "03",
    numberSide: "left" as const,
    tag: "Realtime Track",
    outcome: "3–5 days → same-day for eligible",
    heading: (
      <>
        <span className="text-white/20">Prior authorization </span>
        <span className="text-white">workflows</span>
      </>
    ),
    description:
      "Automate request generation and real-time tracking across payers. Alert providers when approvals stall — with context, not just a flag.",
  },
  {
    number: "04",
    numberSide: "right" as const,
    tag: "Automation",
    outcome: "40% reduction in call volume",
    heading: (
      <>
        <span className="text-white/20">Patient portal for </span>
        <span className="text-white">self-service</span>
      </>
    ),
    description:
      "Patients see bills, check claim status, and access payment options without staff intervention. Inbound volume drops. Staff focus on care.",
  },
];

function NumberBlock({ number, tag, tagMuted }: { number: string; tag: string; tagMuted?: boolean }) {
  return (
    <div className="flex w-full items-start justify-between">
      <p className="font-sora text-7xl font-bold tracking-[-4px] text-white lg:text-[100px]">
        {number}
      </p>
      <p
        className={`pt-4 font-mono text-[10px] tracking-[2px] uppercase ${
          tagMuted ? "text-white" : "text-[#ff884c]"
        }`}
      >
        {tag}
      </p>
    </div>
  );
}

function OutcomeBlock({ outcome }: { outcome: string }) {
  return (
    <div className="mt-8 flex w-full flex-col gap-2 px-6 py-4">
      <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
        Outcome
      </p>
      <p className="text-sm font-medium text-white">{outcome}</p>
    </div>
  );
}

function ContentBlock({
  heading,
  description,
}: {
  heading: React.ReactNode;
  description: string;
}) {
  return (
    <div className="flex flex-col">
      <p className="pb-5 font-sora text-2xl font-semibold tracking-[-0.5px] lg:max-w-[430px] lg:text-[28px]">
        {heading}
      </p>
      <p className="max-w-[430px] text-base leading-7 text-white/55">
        {description}
      </p>
    </div>
  );
}

export default function WhatWeBuild() {
  return (
    <section className="relative overflow-hidden border-b-[0.8px] border-black/8 bg-black px-6 py-16 sm:px-10 lg:px-[80px] lg:py-[97px]">
      <div className="pointer-events-none absolute top-1/2 left-1/2 size-[736px] -translate-x-1/2 -translate-y-1/2 blur-[134px]">
        <Image
          src="/industries/healthcare/zigzag-glow.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-white/25 lg:text-[47.8px]">
          How <span className="text-white">GroBird Helps</span>
        </h2>

        <div className="mt-16 flex flex-col border-t-[0.8px] border-white/20">
          {ROWS.map((row) => (
            <div
              key={row.number}
              className="grid grid-cols-1 border-b-[0.8px] border-white/20 lg:grid-cols-2"
            >
              <div
                className={`flex flex-col p-8 lg:p-14 ${
                  row.numberSide === "left"
                    ? "lg:border-r-[0.8px] lg:border-white/20"
                    : "justify-center lg:border-r-[0.8px] lg:border-white/20"
                }`}
              >
                {row.numberSide === "left" ? (
                  <>
                    <NumberBlock
                      number={row.number}
                      tag={row.tag}
                      tagMuted={row.number === "03"}
                    />
                    <OutcomeBlock outcome={row.outcome} />
                  </>
                ) : (
                  <ContentBlock heading={row.heading} description={row.description} />
                )}
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-14">
                {row.numberSide === "right" ? (
                  <>
                    <NumberBlock number={row.number} tag={row.tag} />
                    <OutcomeBlock outcome={row.outcome} />
                  </>
                ) : (
                  <ContentBlock heading={row.heading} description={row.description} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
