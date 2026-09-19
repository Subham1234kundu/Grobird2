import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-6 py-16 sm:px-10 lg:min-h-[760px] lg:flex-row lg:items-center lg:justify-between lg:px-[102px] lg:py-[154px]">
        <div className="flex max-w-[674px] flex-col">
          <h1 className="font-sora text-5xl leading-[1.06] tracking-[-2px] text-[#4a4848] sm:text-6xl lg:text-[77.6px] lg:leading-[82.3px]">
            <span className="block">Supply Chain</span>
            <span className="block text-white">Visibility and</span>
            <span className="block text-[#ff884c]">Control</span>
          </h1>
          <p className="mt-8 max-w-[612px] text-lg leading-[30px] text-white/70">
            We&apos;ve built supply chain systems for manufacturers that
            integrate procurement, supplier management, production planning,
            and delivery. Real-time visibility. Faster lead times. Lower
            inventory costs.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute top-[-130px] right-0 hidden h-[1282px] w-[721px] lg:block">
        <Image
          src="/industries/manufacturing/hero-image.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-[349px]">
        <Image
          src="/industries/manufacturing/hero-fade.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-[-155px] left-1/2 hidden h-[795px] w-[357px] -translate-x-1/2 items-center justify-center lg:left-[calc(50%+200px)] lg:flex"
        aria-hidden
      >
        <Image
          src="/industries/manufacturing/hero-glow.png"
          alt=""
          width={792}
          height={349}
          className="h-[349px] w-[792px] rotate-[90.56deg] object-cover"
        />
      </div>
    </section>
  );
}
