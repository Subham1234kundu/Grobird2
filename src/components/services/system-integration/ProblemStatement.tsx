import Image from "next/image";

export default function ProblemStatement() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:h-[725px] lg:py-0">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-145px] left-[63px] hidden h-[1118px] w-[1313px] opacity-80 lg:block">
          <Image
            src="/services/system-integration/problem-pattern.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden
          />
        </div>
        <div className="absolute top-[-292px] left-[615px] hidden h-[1456px] w-[816px] lg:block">
          <Image
            src="/services/system-integration/problem-circuit.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[955px] flex-col gap-8 px-6 sm:px-10 lg:absolute lg:top-[57.2px] lg:left-1/2 lg:mx-0 lg:block lg:-translate-x-1/2 lg:px-0">
        <p className="font-sora text-2xl leading-[1.55] tracking-[-0.8px] sm:text-3xl lg:text-[36px] lg:leading-[56px]">
          <span className="text-white/85">
            Fragmented systems create fragmented workflows. A customer
            updates an order in your CRM, but inventory doesn&apos;t know.{" "}
          </span>
          <span className="text-white/55">
            Operations works with stale data. Forecasts suffer.
          </span>
        </p>
        <p className="font-sora text-2xl leading-[1.55] tracking-[-0.8px] text-white/55 sm:text-3xl lg:mt-[46px] lg:text-[36px] lg:leading-[56px]">
          Real integration changes that. Data enters once, updates
          everywhere. Your team has consistent information. Decisions are
          better. Execution is faster.
        </p>
      </div>
    </section>
  );
}
