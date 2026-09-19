import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-[280px] items-center overflow-hidden bg-black sm:h-[340px] lg:h-[394px]">
      <Image
        src="/blogs/hero-pattern.png"
        alt=""
        fill
        className="object-cover opacity-40"
        aria-hidden
      />
      <Image
        src="/blogs/hero-dots.png"
        alt=""
        width={1000}
        height={562}
        className="pointer-events-none absolute top-[-24px] right-0 hidden h-[562px] w-[1000px] object-cover mix-blend-hard-light lg:block"
        aria-hidden
      />
      <h1 className="relative z-10 mx-auto max-w-[1357px] px-6 font-sora text-3xl tracking-[-2px] text-[#827e7e] capitalize sm:px-10 sm:text-4xl lg:text-[56.6px]">
        Latest news and <span className="text-[#ff884c]">Business insights</span>
      </h1>
    </section>
  );
}
