import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black lg:min-h-[760px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] right-[-17px] hidden h-[1546px] w-[874px] lg:block">
          <Image
            src="/services/managed-services/hero-swoosh.png"
            alt="Managed services system health visualization"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-[-17px] left-1/2 h-[349px] w-[1440px] -translate-x-1/2">
          <Image
            src="/services/managed-services/hero-fade-bottom.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        <div className="absolute bottom-[-562.89px] left-1/2 hidden h-[1440.775px] w-[352.213px] -translate-x-1/2 items-center justify-center lg:flex">
          <div className="flex-none rotate-[89.87deg]">
            <div className="relative h-[349px] w-[1440px]">
              <Image
                src="/services/managed-services/hero-fade-bottom.png"
                alt=""
                fill
                className="object-cover"
                aria-hidden
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-533px] left-[calc(50%+479.5px)] hidden h-[1440px] w-[623px] -translate-x-1/2 items-center justify-center lg:flex">
          <div className="flex-none -rotate-90">
            <div className="relative h-[623px] w-[1440px]">
              <Image
                src="/services/managed-services/hero-fade-side.png"
                alt=""
                fill
                className="object-cover"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[18px] px-6 py-24 sm:px-10 lg:px-[95px] lg:pt-[205px] lg:pb-[80px]">
        <div className="flex w-fit items-center gap-2 rounded-[4px] border-[0.8px] border-[rgba(255,136,76,0.25)] px-[14px] py-[6px]">
          <span className="size-[6px] rounded-[3px] bg-[#ff884c] opacity-[51%]" />
          <span className="font-sora text-[11px] leading-[16.5px] font-semibold tracking-[1.32px] text-[#ff884c] uppercase">
            Managed Services &amp; Application Support
          </span>
        </div>

        <div className="flex flex-col gap-[7px]">
          <h1 className="font-sora text-4xl font-normal tracking-tight text-[#827e7e] capitalize sm:text-5xl lg:w-[570px] lg:text-[56.6px] lg:leading-[68px] lg:tracking-[-2px]">
            {"Protection for Your "}
            <span className="text-white">{"Technology "}</span>
            <span className="text-[#ff884c]">Investment</span>
          </h1>

          <p className="text-[15.1px] leading-6 text-white lg:max-w-[509px]">
            We keep your systems healthy, performant, and aligned with your
            evolving needs through managed support and optimization.
          </p>
        </div>
      </div>
    </section>
  );
}
