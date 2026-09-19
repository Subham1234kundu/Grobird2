import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-6 py-16 sm:px-10 lg:min-h-[760px] lg:flex-row lg:items-center lg:justify-between lg:px-[102px] lg:py-[154px]">
        <div className="flex max-w-[674px] flex-col">
          <h1 className="font-sora text-5xl leading-[1.06] tracking-[-2px] text-[#4a4848] sm:text-6xl lg:text-[77.6px] lg:leading-[82.3px]">
            <span className="block">Streamlined</span>
            <span className="block">operations</span>
            <span className="block text-white">for healthcare</span>
            <span className="block text-[#ff884c]">providers.</span>
          </h1>
          <p className="mt-8 max-w-[612px] text-lg leading-[30px] text-white/70">
            We&apos;ve built automation systems for healthcare organizations
            that handle eligibility verification, claims processing, prior
            authorization workflows, and patient communication. Faster
            processing. Fewer errors. Better cash flow.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 right-0 hidden h-full w-[45%] lg:block">
        <Image
          src="/industries/healthcare/hero-photo.png"
          alt=""
          fill
          className="object-cover object-left"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-[349px]">
        <Image
          src="/industries/healthcare/hero-fade.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
    </section>
  );
}
