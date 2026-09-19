import Image from "next/image";
import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="relative flex min-h-[626px] items-center overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
      <Image
        src="/industries/manufacturing/contact-image.png"
        alt=""
        width={736}
        height={1308}
        className="pointer-events-none absolute top-[-125px] left-1/2 hidden h-[1308px] w-[736px] -translate-x-1/2 object-cover lg:left-[calc(50%+92px)] lg:translate-x-0 lg:block"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-[1194px] flex-col items-center gap-8 text-center">
        <h2 className="relative font-sora text-4xl tracking-[-2px] text-[#858382] sm:text-5xl lg:text-[71.7px]">
          <span className="block">{"Transform Supply"}</span>
          <span className="block">
            <span className="text-white">Chain</span>{" "}
            <span className="text-[#ff884c]">Operations</span>
          </span>
        </h2>

        <p className="relative max-w-[500px] text-base leading-[27px] text-white">
          No canned proposals. We start by understanding your specific
          constraints, then tell you what&apos;s actually worth building.
        </p>

        <div className="relative flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="bg-[#ff884c] px-10 py-4 text-[15px] tracking-[0.5px] text-black transition-opacity hover:opacity-90"
          >
            Book discovery call
          </Link>
          <Link
            href="/industries"
            className="border-b-[0.8px] border-white pb-0.5 font-mono text-[11px] tracking-[2px] text-white uppercase transition-opacity hover:opacity-70"
          >
            View all industries →
          </Link>
        </div>
      </div>
    </section>
  );
}
