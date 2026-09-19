import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto flex max-w-[1261px] flex-col gap-8 px-6 pt-16 pb-10 sm:px-10 lg:flex-row lg:items-end lg:gap-8 lg:px-[90px] lg:pt-[190px] lg:pb-10">
        <h1 className="font-sora text-4xl leading-[1.1] tracking-[-2px] text-[#827e7e] capitalize sm:text-5xl lg:max-w-[716px] lg:text-[56.6px] lg:leading-[68px]">
          {"Your Recommendations "}
          <span className="text-white">{"Need An Execution "}</span>
          <span className="text-[#ff884c]">Partner</span>
        </h1>
        <p className="text-[15.1px] leading-6 text-white lg:max-w-[513px]">
          GroBird is the execution partner that turns your recommendations
          into working systems. We build the custom applications,
          integrations, and workflows your consulting prescribes. Your
          clients see results. Your recommendations become real.
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-3">
        <div className="relative h-[280px] sm:h-[400px] lg:h-[550px]">
          <Image
            src="/partners/hero-left.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[280px] overflow-hidden bg-black sm:h-[400px] lg:h-[550px]">
          <Image
            src="/partners/hero-glow.png"
            alt=""
            fill
            className="object-cover opacity-70 mix-blend-lighten"
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-mono text-xs tracking-[3px] text-white uppercase sm:text-sm">
              GROBIRD <span className="text-[#ff884c]">X</span> YOU
            </p>
          </div>
        </div>
        <div className="relative h-[280px] sm:h-[400px] lg:h-[550px]">
          <Image
            src="/partners/hero-right.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
