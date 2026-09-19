import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pt-[71px] pb-16 sm:px-10 lg:px-0 lg:pb-0">
      <div className="pointer-events-none absolute top-[-110px] right-0 hidden h-[1313px] w-[736px] lg:block">
        <Image
          src="/privacy/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-[278px] hidden h-[357px] lg:block"
        aria-hidden
      >
        <Image src="/privacy/hero-fade.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto flex max-w-[1357px] flex-col gap-3.5 py-16 lg:px-[78px] lg:py-[197px]">
        <h1 className="font-sora text-4xl tracking-[-2px] text-[#827e7e] capitalize sm:text-5xl lg:text-[56.6px]">
          Privacy <span className="text-[#ff884c]">Policy</span>
        </h1>
        <p className="max-w-[526px] text-sm leading-[26px] text-white/35">
          GroBird is committed to protecting the privacy of our clients,
          contacts, and website visitors. This policy describes how we
          collect, use, and protect personal information.
        </p>
        <div className="flex items-center gap-2 pt-1.5">
          <span className="font-mono text-[9px] tracking-[1px] text-white/50 uppercase">
            Effective
          </span>
          <span className="text-[9px] text-white">January 1, 2025</span>
        </div>
      </div>
    </section>
  );
}
