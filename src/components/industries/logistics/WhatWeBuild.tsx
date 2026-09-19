import Image from "next/image";

const ROWS = [
  {
    number: "01",
    numberSide: "left" as const,
    tag: "Fulfillment",
    outcome: "100% reduction in manual routing",
    heading: (
      <>
        <span className="text-white/20">Automated order </span>
        <span className="text-white">fulfillment</span>
      </>
    ),
    description:
      "Orders route to the right warehouse, picking is optimized, and shipment is generated automatically.",
  },
  {
    number: "02",
    numberSide: "right" as const,
    tag: "Routing",
    outcome: "99.9% match accuracy",
    heading: (
      <>
        <span className="text-white/20">Carrier integration and </span>
        <span className="text-white">routing</span>
      </>
    ),
    description:
      "Connect to multiple carriers, compare rates in real-time, and automate carrier selection.",
  },
  {
    number: "03",
    numberSide: "left" as const,
    tag: "Realtime Track",
    outcome: "100% Realtime tracking of products",
    heading: (
      <>
        <span className="text-white/20">Real-time tracking and </span>
        <span className="text-white">visibility</span>
      </>
    ),
    description:
      "Customers and your team track shipments live. Forecast delivery dates with accuracy.",
  },
  {
    number: "04",
    numberSide: "right" as const,
    tag: "Automation",
    outcome: "40% support ticket deflection",
    heading: <span className="text-white/20">Exception workflow automation</span>,
    description:
      "Damage, delays, and delivery failures are detected and routed to resolution without manual escalation.",
  },
];

function NumberBlock({ number, tag }: { number: string; tag: string }) {
  return (
    <div className="flex w-full items-start justify-between">
      <p className="font-sora text-7xl font-bold tracking-[-4px] text-white lg:text-[100px]">
        {number}
      </p>
      <p className="pt-4 font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
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
      <Image
        src="/industries/logistics/build-glow-bg.png"
        alt=""
        fill
        className="pointer-events-none absolute inset-0 object-cover opacity-40 blur-3xl"
        aria-hidden
      />

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
                    <NumberBlock number={row.number} tag={row.tag} />
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
