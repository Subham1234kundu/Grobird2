import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[300px] items-center overflow-hidden bg-black sm:min-h-[420px] lg:min-h-[548px]">
      <div className="absolute top-0 right-0 hidden h-full w-[calc(100%-233px)] mix-blend-exclusion lg:block">
        <Image
          src="/about/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="absolute top-[91px] right-[233px] hidden h-[624px] w-[406px] lg:block">
        <Image
          src="/about/hero-bird.svg"
          alt=""
          width={406}
          height={624}
          className="h-full w-full"
          aria-hidden
        />
      </div>
      <Image
        src="/about/hero-fade.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
        aria-hidden
      />

      <h1 className="relative z-10 px-6 font-sora text-4xl tracking-[-2px] text-[#827e7e] capitalize sm:px-10 lg:pl-[115px] lg:text-[56.6px]">
        About <span className="text-[#ff884c]">Us</span>
      </h1>
    </section>
  );
}
