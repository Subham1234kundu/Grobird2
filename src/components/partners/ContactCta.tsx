import Image from "next/image";
import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="relative flex min-h-[455px] items-center overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-6 py-20 sm:px-10">
      <Image
        src="/partners/contact-dots.png"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[736px] w-[1472px] -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:left-[calc(50%+613px)] lg:flex"
        aria-hidden
      >
        <Image
          src="/partners/contact-glow.png"
          alt=""
          width={736}
          height={1472}
          className="h-[1472px] w-[736px] -rotate-90 object-cover opacity-70 blur-[72px]"
        />
      </div>
      <Image
        src="/partners/contact-bird.svg"
        alt=""
        width={200}
        height={200}
        className="pointer-events-none absolute right-0 bottom-0 h-[36%] w-auto opacity-40 mix-blend-overlay"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-[500px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-sora text-4xl tracking-[-3px] text-[#858382] sm:text-[45px]">
            Partner With <span className="text-[#ff884c]">GroBird</span>
          </h2>
          <p className="text-base leading-[27px] text-white">
            Let&apos;s discuss how we can support your recommendations and
            strengthen your client outcomes
          </p>
        </div>

        <Link
          href="/contact"
          className="bg-[#ff884c] px-10 py-4 text-[15px] tracking-[0.5px] text-black transition-opacity hover:opacity-90"
        >
          Partner Now
        </Link>
      </div>
    </section>
  );
}
