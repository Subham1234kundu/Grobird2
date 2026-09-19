import Image from "next/image";
import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="relative flex min-h-[626px] items-center overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
      <div
        className="pointer-events-none absolute top-[-76px] left-[calc(50%+88px)] hidden h-[864px] w-[1823px] items-center justify-center lg:flex"
        aria-hidden
      >
        <Image
          src="/industries/logistics/contact-car.png"
          alt=""
          width={856}
          height={1819}
          className="h-[1819px] w-[856px] rotate-[-89.74deg] object-bottom"
        />
      </div>
      <div
        className="pointer-events-none absolute top-[-76px] left-[calc(50%-1721px)] hidden h-[864px] w-[1823px] items-center justify-center lg:flex"
        aria-hidden
      >
        <Image
          src="/industries/logistics/contact-car.png"
          alt=""
          width={856}
          height={1819}
          className="h-[1819px] w-[856px] -scale-y-100 rotate-[-90.26deg] object-bottom"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 720px 500px at 50% 50%, rgba(0,0,0,0.4), rgba(0,0,0,0) 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-[1194px] flex-col items-center gap-8 text-center">
        <p
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sora text-[140px] font-bold tracking-[-4px] whitespace-nowrap text-[#ff884c]/[0.04] select-none sm:text-[180px] lg:text-[215px] lg:tracking-[-8px]"
        >
          FINTECH
        </p>

        <h2 className="relative font-sora text-4xl tracking-[-2px] text-[#858382] sm:text-5xl lg:text-[71.7px]">
          <span className="block">{"Let's talk about"}</span>
          <span className="block">
            <span className="text-white">your logistical</span>{" "}
            <span className="text-[#ff884c]">problems.</span>
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
            Optimize Logistics Operations
          </Link>
          <Link
            href="/industries"
            className="border-b-[0.8px] border-[rgba(75,73,73,0.5)] pb-0.5 font-mono text-[11px] tracking-[2px] text-[#858382] uppercase transition-colors hover:text-white"
          >
            View all industries →
          </Link>
        </div>
      </div>
    </section>
  );
}
