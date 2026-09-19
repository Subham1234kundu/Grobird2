import Image from "next/image";

export default function WhatWeBelieve() {
  return (
    <section className="bg-black px-6 py-16 sm:px-10 lg:px-[48px] lg:py-[80px]">
      <div className="mx-auto max-w-[1261px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          What We <span className="text-[#ff884c]">Believe</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:mt-[48px] lg:grid-cols-2">
          <div className="relative min-h-[279px] overflow-hidden border-[0.8px] border-[rgba(75,73,73,0.4)] bg-[#0d0d0d] px-8 py-8 lg:px-14 lg:py-14">
            <span className="pointer-events-none absolute right-10 bottom-4 font-sora text-7xl font-bold tracking-[-4px] text-white/7 lg:right-[56px] lg:text-[100px]">
              01
            </span>
            <div className="relative flex max-w-[520px] flex-col gap-4">
              <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
                Strategy first
              </p>
              <h3 className="font-sora text-2xl font-semibold text-white lg:text-[26px] lg:leading-[33.8px]">
                Technology is a tool, not a solution.
              </h3>
              <p className="text-[15px] leading-6 text-[#858382]">
                We start every engagement by understanding your operation,
                your bottlenecks, and your business objectives. Technology
                serves those objectives — not the other way around.
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#ff884c]" />
          </div>

          <div className="relative min-h-[279px] overflow-hidden bg-[#e8e8e8] px-8 py-8 lg:px-10 lg:py-10">
            <Image
              src="/about/believe-process.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
            <span className="pointer-events-none absolute right-10 bottom-4 font-sora text-7xl font-bold tracking-[-4px] text-white/29 lg:right-14 lg:text-[100px]">
              02
            </span>
            <div className="relative flex max-w-[281px] flex-col gap-4">
              <p className="font-mono text-[10px] tracking-[2px] text-black/60 uppercase">
                Process first
              </p>
              <h3 className="font-sora text-xl font-semibold text-black lg:leading-[31.2px]">
                Process matters as much as software.
              </h3>
              <p className="text-sm leading-[22px] text-black/70">
                A well-designed process with mediocre software beats great
                software that doesn&apos;t fit how you work. We optimize
                both.
              </p>
            </div>
          </div>

          <div className="relative min-h-[268.6px] overflow-hidden border-[0.8px] border-white/40 bg-white px-8 py-8 lg:px-10 lg:py-10">
            <Image
              src="/about/believe-stakeholder.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
            <span className="pointer-events-none absolute right-10 bottom-4 font-sora text-7xl font-bold tracking-[-4px] text-[#ff884c]/10 lg:right-14 lg:text-[100px]">
              03
            </span>
            <div className="relative flex max-w-[281px] flex-col gap-4">
              <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
                Stakeholder fit
              </p>
              <h3 className="font-sora text-lg font-semibold text-black lg:text-xl lg:leading-[26px]">
                The buying committee is diverse.
              </h3>
              <p className="text-sm leading-[22px] text-[#858382]">
                CFOs care about ROI. Heads of Operations care about
                execution. Technical leaders care about integration. Good
                implementations address all three.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 h-[2px] w-[45%] bg-[#ff884c]" />
          </div>

          <div
            className="relative min-h-[268.6px] overflow-hidden border-[0.8px] border-[rgba(75,73,73,0.4)] bg-[#0d0d0d] px-8 py-8 lg:px-14 lg:py-14"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 45% 40% at 50% 50%, rgba(255,136,76,0.08), transparent)",
            }}
          >
            <span className="pointer-events-none absolute right-10 bottom-4 font-sora text-7xl font-bold tracking-[-4px] text-white/5 lg:right-[56px] lg:text-[100px]">
              04
            </span>
            <div className="relative flex max-w-[560px] flex-col gap-4">
              <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
                Long-term success
              </p>
              <h3 className="font-sora text-2xl font-semibold text-white lg:text-[26px] lg:leading-[33.8px]">
                Implementation is not the end.
              </h3>
              <p className="text-[15px] leading-6 text-[#858382]">
                Technology requires ongoing support, optimization, and
                adaptation. We stay invested in your success after launch —
                not just at the handoff.
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#ff884c]" />
          </div>
        </div>
      </div>
    </section>
  );
}
