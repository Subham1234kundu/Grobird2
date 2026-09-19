const ITEMS = [
  {
    number: "01.",
    title: "CRM and ERP",
    description:
      "Customer information syncs with operational and financial systems so everyone sees the same picture.",
  },
  {
    number: "02.",
    title: "Accounting platforms and operational systems",
    description:
      "Transaction data flows automatically, eliminating manual entry and reconciliation.",
  },
  {
    number: "03.",
    title: "Marketing, sales, and operations",
    description:
      "Lead data, customer interactions, and operational needs align across teams.",
  },
  {
    number: "04.",
    title: "External systems and internal tools",
    description:
      "Vendor APIs, partner systems, and external data sources connect to your internal operation.",
  },
  {
    number: "05.",
    title: "Custom applications and legacy systems",
    description:
      "Whether old or new, internal or external, we create the integrations that make them work together.",
  },
];

export default function WhatWeIntegrate() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 sm:px-10 lg:px-[99px] lg:py-[80px]">
      <div className="relative mx-auto max-w-[1261px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          What <span className="text-[#ff884c]">We Integrate</span>
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
