import Image from "next/image";

const CARDS = [
  {
    key: "api-based",
    title: "API-based integrations",
    description:
      "We use standard APIs to create real-time, automated data flows between your platforms.",
    bg: "/services/system-integration/card-api-bg.png",
  },
  {
    key: "etl-pipelines",
    title: "ETL pipelines",
    description:
      "For systems without APIs or complex data transformation, we build custom extraction, transformation, and loading processes.",
    bg: "/services/system-integration/card-etl-bg.png",
  },
  {
    key: "webhooks",
    title: "Webhooks and event-driven flows",
    description:
      "When something happens in one system, the other responds automatically.",
    bg: "/services/system-integration/card-webhooks-bg.png",
  },
  {
    key: "hybrid",
    title: "Hybrid approaches",
    description:
      "Most real operations need a combination. We design integration architecture that fits your specific environment.",
    bg: "/services/system-integration/card-hybrid-bg.png",
  },
];

export default function IntegrationApproaches() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-20 sm:px-10 lg:px-[99px] lg:pt-[97px] lg:pb-[80px]">
      <div className="mx-auto flex max-w-[1261px] flex-col gap-8 pt-12 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:pt-0">
        <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          Integration <span className="text-[#ff884c]">Approaches</span>
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1261px] grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[57px] lg:grid-cols-4 lg:gap-[32px]">
        {CARDS.map((card) => (
          <div
            key={card.key}
            className="relative h-[380px] overflow-hidden rounded-[12px] border border-white/16 lg:h-[473px]"
          >
            <Image src={card.bg} alt="" fill className="object-cover" aria-hidden />
            <div className="absolute right-0 bottom-[88.6px] left-0 h-[186px] rotate-180">
              <Image
                src="/services/system-integration/card-fade.png"
                alt=""
                fill
                className="object-cover"
                aria-hidden
              />
            </div>
            <div className="relative z-10 flex max-w-[267px] flex-col gap-[7px] px-4 pt-5">
              <p className="font-sora text-2xl text-white">{card.title}</p>
              <p className="text-base text-white/50">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
