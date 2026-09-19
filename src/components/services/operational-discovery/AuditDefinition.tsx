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
    <section className="relative overflow-hidden bg-black px-6 py-20 sm:px-10 lg:px-[99px] lg:py-[80px]">
      <div className="pointer-events-none absolute top-0 left-[-10%] size-[700px] rounded-full bg-[#2b7cf2]/20 blur-[120px]" />
      <Image
        src="/services/operational-discovery/problem-glow.png"
        alt=""
        width={684}
        height={1480}
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rotate-90 opacity-30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1261px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          What Is an <span className="text-[#ff884c]">Operational Audit?</span>
        </h2>
        <p className="mt-4 max-w-[560px] text-base leading-[27.2px] text-white/76">
          A systematic review of how your business processes work, where your
          systems live, and how information flows between them. It answers
          questions your team already lives with.
        </p>

        <dl className="mt-12 flex flex-col">
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
    </section>
  );
}
