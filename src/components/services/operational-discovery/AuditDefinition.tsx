import Image from "next/image";

const QUESTIONS = [
  {
    number: "01.",
    question: "Where does manual work create bottlenecks?",
    answer:
      "We map every step where people manage data by hand instead of systems doing it — quantifying the time lost and error rate introduced.",
  },
  {
    number: "02.",
    question: "Which systems should talk but don't?",
    answer:
      "We identify data that lives in silos and calculate the true cost of keeping it there — in duplicated effort, delayed decisions, and missed growth.",
  },
  {
    number: "03.",
    question: "What's the true cost of your current approach?",
    answer:
      "We quantify the time, errors, and growth friction your operational setup creates — numbers your CFO and Head of Operations can act on.",
  },
  {
    number: "04.",
    question: "What's the right first step?",
    answer:
      "We build a roadmap that fixes the bottleneck with the highest impact first. No guesswork. No vendor bias. Just prioritized clarity.",
  },
];

export default function AuditDefinition() {
  return (
    <div className="relative px-6 pt-16 pb-10 sm:px-10 sm:pt-20 sm:pb-12 lg:px-[99px] lg:pt-[134px] lg:pb-[54px]">
      <div className="relative mx-auto max-w-[1261px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          What Is an <span className="text-[#ff884c]">Operational Audit?</span>
        </h2>
        <p className="mt-4 max-w-[560px] text-base leading-[27.2px] text-white/76">
          A systematic review of how your business processes work, where your
          systems live, and how information flows between them. It answers
          questions your team already lives with.
        </p>

        <dl className="relative mt-12 flex flex-col">
          <div className="pointer-events-none absolute top-[19px] left-[-78.5px] z-[-1] hidden h-[684px] w-[1480px] items-center justify-center overflow-hidden rounded-[24px] lg:flex">
            <div className="-rotate-90">
              <div className="relative h-[1480px] w-[684px] rounded-[24px] blur-[85px]">
                <Image
                  src="/services/operational-discovery/audit-glow.png"
                  alt=""
                  fill
                  className="rounded-[24px] object-cover"
                  aria-hidden
                />
              </div>
            </div>
          </div>

          {QUESTIONS.map((item) => (
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
    </div>
  );
}
