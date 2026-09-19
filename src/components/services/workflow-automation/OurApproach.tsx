import Image from "next/image";

const STEPS = [
  {
    number: "01",
    numberSide: "left" as const,
    heading: (
      <>
        <span className="text-white/75">We map your current workflow </span>
        <span className="text-white">in detail.</span>
      </>
    ),
    description:
      "We identify where manual work lives, quantify its cost, and understand the constraints.",
  },
  {
    number: "02",
    numberSide: "right" as const,
    heading: (
      <>
        <span className="text-white/75">We design the </span>
        <span className="text-white">automated workflow.</span>
      </>
    ),
    description:
      "We ensure it reduces work without adding complexity or governance overhead.",
  },
  {
    number: "03",
    numberSide: "left" as const,
    heading: (
      <>
        <span className="text-white/75">We build and </span>
        <span className="text-white">test thoroughly.</span>
      </>
    ),
    description:
      "We deploy in phases, validate results with real data, and refine based on feedback.",
  },
  {
    number: "04",
    numberSide: "right" as const,
    heading: (
      <>
        <span className="text-white/75">We train and </span>
        <span className="text-white">monitor.</span>
      </>
    ),
    description:
      "Forecast accuracy improves through data integration and visibility.",
  },
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-[#2f7ff2] px-6 py-20 sm:px-10 lg:px-[80px] lg:py-[122px]">
      <Image
        src="/services/workflow-automation/approach-swoosh-bg.png"
        alt=""
        width={674}
        height={1198}
        className="pointer-events-none absolute top-[24%] right-0 hidden h-[75%] w-[47%] object-cover opacity-40 mix-blend-soft-light lg:block"
        aria-hidden
      />

      <h2 className="relative font-sora text-4xl lg:text-[56px]">
        <span className="text-white/57">Our </span>
        <span className="text-white">Approach</span>
      </h2>

      <div className="relative mx-auto mt-12 flex max-w-[1280px] flex-col border-t-[0.8px] border-white/20 lg:mt-[64px]">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="grid grid-cols-1 border-b-[0.8px] border-white/20 lg:grid-cols-2"
          >
            <div
              className={`flex flex-col items-start p-8 lg:border-white/20 lg:p-14 ${
                step.numberSide === "right"
                  ? "justify-center lg:border-r-[0.8px]"
                  : "lg:border-r-[0.8px]"
              }`}
            >
              {step.numberSide === "left" ? (
                <p className="font-sora text-6xl font-bold tracking-[-4px] text-white lg:text-[100px]">
                  {step.number}
                </p>
              ) : (
                <>
                  <p className="pb-5 font-sora text-2xl font-semibold tracking-[-0.5px] lg:max-w-[429px] lg:text-[28px]">
                    {step.heading}
                  </p>
                  <p className="max-w-[430px] text-base leading-7 text-white/75">
                    {step.description}
                  </p>
                </>
              )}
            </div>
            <div className="flex flex-col items-start justify-center p-8 lg:p-14">
              {step.numberSide === "right" ? (
                <p className="font-sora text-6xl font-bold tracking-[-4px] text-white lg:text-[100px]">
                  {step.number}
                </p>
              ) : (
                <>
                  <p className="pb-5 font-sora text-2xl font-semibold tracking-[-0.5px] lg:max-w-[429px] lg:text-[28px]">
                    {step.heading}
                  </p>
                  <p className="max-w-[430px] text-base leading-7 text-white/75">
                    {step.description}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
