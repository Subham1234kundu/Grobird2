const ITEMS = [
  {
    number: "01.",
    title: "Custom applications we built",
    description:
      "We maintain, debug, and enhance the systems we've created for you.",
  },
  {
    number: "02.",
    title: "System integrations",
    description:
      "We monitor data flows and ensure connectivity stays intact as platforms update.",
  },
  {
    number: "03.",
    title: "Workflow automation",
    description:
      "We refine and optimize workflows based on real-world performance and changing needs.",
  },
  {
    number: "04.",
    title: "Business intelligence systems",
    description:
      "We update dashboards, add new reports, and ensure data accuracy and timeliness.",
  },
];

export default function WhatWeSupport() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 sm:px-10 lg:px-[99px] lg:py-[80px]">
      <div className="relative mx-auto max-w-[1261px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          What <span className="text-[#ff884c]">We Support</span>
        </h2>

        <dl className="mt-12 flex flex-col">
          {ITEMS.map((item) => (
            <div
              key={item.number}
              className="grid grid-cols-1 gap-4 border-t border-[rgba(228,228,228,0.37)] py-8 last:border-b lg:grid-cols-[90px_1fr_360px] lg:items-center lg:gap-6"
            >
              <dt className="font-sora text-2xl tracking-[-0.84px] text-[#c3c3c3] lg:text-[32px]">
                {item.number}
              </dt>
              <dt className="font-sora text-2xl tracking-[-0.84px] text-white lg:text-[32px]">
                {item.title}
              </dt>
              <dd className="text-[16px] leading-6 text-[#737373]">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
