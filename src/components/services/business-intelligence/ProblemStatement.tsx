import Image from "next/image";

export default function ProblemStatement() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:h-[588px] lg:py-0">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-118px] left-[63px] hidden h-[906px] w-[1313px] lg:block">
          <Image
            src="/services/business-intelligence/problem-pattern.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden
          />
        </div>
        <div className="absolute left-[764px] top-[-908.8px] hidden h-[1634.463px] w-[1778.784px] items-center justify-center lg:flex">
          <div className="rotate-[57.49deg]">
            <div className="relative h-[1472px] w-[1000px]">
              <Image
                src="/services/business-intelligence/problem-diagonal.png"
                alt=""
                fill
                className="object-cover opacity-41"
                aria-hidden
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[397.8px] left-1/2 h-[349px] w-[1440px] -translate-x-1/2 rotate-180">
          <Image
            src="/services/business-intelligence/problem-fade.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[955px] px-6 sm:px-10 lg:absolute lg:top-[94.2px] lg:left-1/2 lg:mx-0 lg:-translate-x-1/2 lg:px-0">
        <p className="font-sora text-2xl leading-[1.55] tracking-[-0.8px] sm:text-3xl lg:text-[36px] lg:leading-[56px]">
          <span className="text-white/85">
            Business intelligence brings clarity. We design dashboards and
            reporting systems that give you live{" "}
          </span>
          <span className="text-white/55">
            visibility into your operation, your metrics, and your
            performance.
          </span>
        </p>
      </div>
    </section>
  );
}
