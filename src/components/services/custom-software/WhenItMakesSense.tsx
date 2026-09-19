const REASONS = [
  {
    number: "01.",
    question: "You have a process no off-the-shelf tool covers",
    answer:
      "Whether it's a unique workflow, proprietary business logic, or a combination of operations that exist nowhere else, custom software is the right move.",
  },
  {
    number: "02.",
    question: "Integration matters more than functionality",
    answer:
      "Your data lives in multiple systems. You need them to talk to each other seamlessly. Custom software bridges the gap.",
  },
  {
    number: "03.",
    question: "You need to own the logic",
    answer:
      "Licensing costs, vendor lock-in, and feature updates outside your control erode your margins and agility. Custom software means you own the code.",
  },
  {
    number: "04.",
    question: "Off-the-shelf would require rewriting your process",
    answer:
      "If fitting generic software means restructuring your operation, custom is cheaper and faster than the alternative.",
  },
];

export default function WhenItMakesSense() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 sm:px-10 lg:px-[99px] lg:py-[80px]">
      <div className="relative mx-auto max-w-[1261px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          When Custom Software <span className="text-[#ff884c]">Makes Sense</span>
        </h2>

        <dl className="mt-12 flex flex-col">
          {REASONS.map((item) => (
            <div
              key={item.number}
              className="grid grid-cols-1 gap-4 border-t border-[rgba(228,228,228,0.37)] py-8 last:border-b lg:grid-cols-[90px_1fr_360px] lg:items-center lg:gap-6"
            >
              <dt className="font-sora text-2xl tracking-[-0.84px] text-[#c3c3c3] lg:text-[32px]">
                {item.number}
              </dt>
              <dt className="font-sora text-2xl tracking-[-0.84px] text-white lg:text-[32px]">
                {item.question}
              </dt>
              <dd className="text-[16px] leading-6 text-[#737373]">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
