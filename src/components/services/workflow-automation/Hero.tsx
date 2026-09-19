import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black lg:min-h-[760px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-40px] right-[-140px] hidden h-[900px] w-[900px] opacity-70 lg:block">
          <Image
            src="/services/workflow-automation/hero-graphic.png"
            alt="Automation workflow diagram connecting an AI agent to tools and data sources"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute right-0 bottom-[-17px] left-0 h-[262px]">
          <Image
            src="/services/workflow-automation/hero-fade-bottom.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-[18px] px-6 py-24 sm:px-10 lg:px-[95px] lg:pt-[276px] lg:pb-[80px]">
        <div className="flex w-fit items-center gap-2 rounded-[4px] border-[0.8px] border-[rgba(255,136,76,0.25)] px-[14px] py-[6px]">
          <span className="size-[6px] rounded-[3px] bg-[#ff884c] opacity-51" />
          <span className="font-sora text-[11px] font-semibold tracking-[1.32px] text-[#ff884c] uppercase">
            Automate Business Processes
          </span>
        </div>

        <h1 className="font-sora text-4xl font-normal tracking-tight text-[#827e7e] capitalize sm:text-5xl lg:w-[608px] lg:text-[56.6px] lg:leading-[68px] lg:tracking-[-2px]">
          Automate Manual <span className="text-white">Business Processes</span>,{" "}
          <span className="text-[#ff884c]">Reclaim Your Team</span>
        </h1>

        <p className="text-[15.1px] leading-6 text-white lg:max-w-[509px]">
          Manual work kills productivity. Your team spends hours moving data
          between systems, chasing approvals, and managing processes that
          should run on their own.
        </p>
      </div>
    </section>
  );
}
