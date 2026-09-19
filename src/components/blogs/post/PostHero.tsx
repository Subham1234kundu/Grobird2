import Link from "next/link";

export default function PostHero() {
  return (
    <section className="border-b border-[#f3f3f3]/15 bg-black px-6 pt-[91px] pb-[45px] sm:px-10 lg:px-0">
      <div className="mx-auto max-w-[1357px]">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-sans text-sm text-white"
        >
          <Link href="/" className="hover:text-white/80">
            Home
          </Link>
          <span aria-hidden className="text-white/60">
            ›
          </span>
          <Link href="/blogs" className="hover:text-white/80">
            Blog Collection
          </Link>
          <span aria-hidden className="text-white/60">
            ›
          </span>
          <span className="text-[#ff884c]">
            Why Hiring an Ops Coordinator Rarely Fixes a Process Problem
          </span>
        </nav>

        <h1 className="mt-[42px] max-w-[936px] font-sora text-3xl leading-tight tracking-[-2px] text-[#827e7e] capitalize sm:text-4xl lg:text-[56.6px] lg:leading-[68px]">
          Why Hiring an Ops Coordinator{" "}
          <span className="text-[#ff884c]">Rarely Fixes a Process Problem</span>
        </h1>

        <p className="mt-[38px] flex items-center gap-3.5 font-mono text-xs tracking-[1px] text-white uppercase">
          <span>Last updated : August 7, 2026</span>
          <span aria-hidden>|</span>
          <span className="text-[#ffd215]">Business Intelligence</span>
        </p>
      </div>
    </section>
  );
}
