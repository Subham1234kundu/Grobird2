import Image from "next/image";

const STATS = [
  { value: "70%", label: "Reduction in onboarding time" },
  { value: "99.9%", label: "Reconciliation accuracy" },
  { value: "0×", label: "Headcount added to scale 5×" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-6 py-16 sm:px-10 lg:min-h-[760px] lg:flex-row lg:items-center lg:justify-between lg:px-[102px] lg:py-[154px]">
        <div className="flex max-w-[674px] flex-col">
          <h1 className="font-sora text-5xl leading-[1.06] tracking-[-2px] text-[#4a4848] sm:text-6xl lg:text-[77.6px] lg:leading-[82.3px]">
            <span className="block">End-to-End</span>
            <span className="block text-white">Visibility Into Your</span>
            <span className="block text-[#ff884c]">Logistics Network</span>
          </h1>
          <p className="mt-8 max-w-[612px] text-lg leading-[30px] text-white/70">
            We&apos;ve built operational systems for logistics companies that
            automate order fulfillment, routing optimization, real-time
            tracking, and exception management. Systems that move volume
            efficiently and keep you ahead of problems.
          </p>
        </div>

        <div className="flex w-full max-w-[179px] shrink-0 flex-col border-[0.8px] border-white/24">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col px-10 py-7 ${
                i < STATS.length - 1
                  ? "border-b-[0.8px] border-[rgba(75,73,73,0.4)]"
                  : ""
              }`}
            >
              <p className="font-sora text-4xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="mt-1 max-w-[130px] text-xs leading-[18px] text-[#e8e8e8]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute top-[-31px] left-[calc(50%+1px)] hidden h-[920px] w-[736px] -translate-x-1/2 lg:block">
        <Image
          src="/industries/logistics/hero-crate.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute top-[-310px] left-[calc(50%-31px)] hidden h-[1308px] w-[736px] -translate-x-1/2 mix-blend-soft-light lg:block">
        <Image
          src="/industries/logistics/hero-overlay.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-[349px]">
        <Image
          src="/industries/logistics/hero-fade.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
    </section>
  );
}
