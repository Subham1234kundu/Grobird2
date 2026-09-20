import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#4b4949] bg-black lg:min-h-[779px]">
      <div className="absolute inset-0">
        <Image
          src="/services/operational-discovery/hero-photo.png"
          alt="Operations team analyzing workflow data on multiple monitors"
          fill
          className="object-cover"
          priority
        />

        <div aria-hidden className="absolute inset-0 bg-black/45" />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 lg:-bottom-[17px] lg:h-[349px]"
        >
          <Image
            src="/services/operational-discovery/hero-fade-bottom.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-[18px] px-6 py-24 sm:px-10 lg:px-[99px] lg:pt-[210px] lg:pb-[80px]">
        <div className="flex w-fit items-center gap-2 rounded-[4px] border-[0.8px] border-[rgba(255,136,76,0.25)] px-[14px] py-[6px]">
          <span className="size-[6px] rounded-[3px] bg-[#ff884c] opacity-[51%]" />
          <span className="font-sora text-[11px] leading-[16.5px] font-semibold tracking-[1.32px] text-[#ff884c] uppercase">
            Operational Discovery · Diagnose
          </span>
        </div>

        <div className="flex flex-col gap-8 lg:mt-[22px] lg:flex-row lg:items-end lg:gap-8">
          <h1 className="font-sora text-4xl font-normal tracking-tight text-[#827e7e] capitalize sm:text-5xl lg:w-[716px] lg:text-[56.6px] lg:leading-[68px] lg:tracking-[-2px]">
            <span className="block">Know Your</span>
            <span className="block text-white">Bottlenecks</span>
            <span className="block text-[#ff884c]">Before You Build</span>
          </h1>

          <p className="text-[15.1px] leading-6 text-white lg:max-w-[513px]">
            Most technology projects fail because they solve the wrong
            problem. A company implements new software, but the underlying
            process remains broken. Data stays fragmented. Manual work
            persists. The tool sits unused. An operational audit changes that
            equation.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="rounded-[8px] bg-[#ff884c] px-8 py-4 text-[15px] font-semibold tracking-[-0.15px] text-white transition-opacity hover:opacity-90"
          >
            Request an Operational Audit
          </a>
          <a
            href="#discovery-process"
            className="rounded-[8px] border-[0.8px] border-[rgba(255,255,255,0.12)] px-7 py-4 text-[15px] text-[rgba(255,255,255,0.6)] transition-colors hover:text-white"
          >
            Learn the process
          </a>
        </div>
      </div>
    </section>
  );
}
