export default function ServiceModels() {
  return (
    <section className="bg-black px-6 pb-20 sm:px-10 lg:px-[99px] lg:pb-[101px]">
      <div className="mx-auto max-w-[1261px] pt-12 lg:pt-[97px]">
        <h2 className="font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px] lg:leading-[59.8px]">
          Service <span className="text-[#ff884c]">Models</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:mt-[48px] lg:grid-cols-2">
          <div className="relative flex min-h-[279px] items-center overflow-hidden border-[0.8px] border-[rgba(75,73,73,0.4)] bg-[#0d0d0d] px-8 py-8 lg:px-14 lg:py-14">
            <div className="flex max-w-[520px] flex-col gap-4">
              <h3 className="font-sora text-2xl font-semibold text-white lg:text-[26px] lg:leading-[33.8px]">
                Retainer-based support
              </h3>
              <p className="text-[15px] leading-6 text-[#858382]">
                Predictable monthly cost for ongoing monitoring, maintenance,
                and support.
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#ff884c]" />
          </div>

          <div className="relative flex min-h-[279px] items-center overflow-hidden bg-[#ff884c] px-8 py-8 lg:px-10 lg:py-10">
            <div className="flex max-w-[281px] flex-col gap-4">
              <h3 className="font-sora text-xl font-semibold text-white lg:text-[26px] lg:leading-[31.2px]">
                Priority response
              </h3>
              <p className="text-sm leading-[22px] text-white/70">
                Faster turnaround for critical issues, with guaranteed
                response times.
              </p>
            </div>
          </div>

          <div className="relative flex min-h-[268.6px] items-center overflow-hidden bg-[#ff884c] px-8 py-8 lg:px-10 lg:py-10">
            <div className="flex max-w-[281px] flex-col gap-4">
              <h3 className="font-sora text-xl font-semibold text-white lg:text-[26px] lg:leading-[26px]">
                Capacity allocation
              </h3>
              <p className="text-sm leading-[22px] text-white">
                A reserved portion of our team&apos;s time available for your
                needs, whether fixes or enhancements.
              </p>
            </div>
          </div>

          <div
            className="relative flex min-h-[268.6px] items-center overflow-hidden border-[0.8px] border-[rgba(75,73,73,0.4)] bg-[#0d0d0d] px-8 py-8 lg:px-14 lg:py-14"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 45% 40% at 50% 50%, rgba(255,136,76,0.08), transparent)",
            }}
          >
            <div className="flex max-w-[560px] flex-col gap-4">
              <h3 className="font-sora text-2xl font-semibold text-white lg:text-[26px] lg:leading-[33.8px]">
                Custom models
              </h3>
              <p className="max-w-[410px] text-[15px] leading-6 text-[#858382]">
                We build support packages that match your specific
                operational needs and risk profile.
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#ff884c]" />
          </div>
        </div>
      </div>
    </section>
  );
}
