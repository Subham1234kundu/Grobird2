import Image from "next/image";
import Link from "next/link";

export default function FeaturedPost() {
  return (
    <Link
      href="/blogs/why-hiring-an-ops-coordinator-rarely-fixes-a-process-problem"
      className="group grid grid-cols-1 border-b border-[#dfdfdf]/70 lg:grid-cols-2"
    >
      <div className="relative aspect-[719/410] overflow-hidden border-b border-[#dfdfdf]/70 lg:border-b-0 lg:border-r">
        <Image
          src="/blogs/featured-illustration.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="flex flex-col justify-center gap-3 bg-black px-6 py-10 sm:px-10 lg:px-16">
        <p className="flex items-center gap-1 font-mono text-xs tracking-[1px] text-white uppercase">
          <span className="text-white">|</span>
          <span className="text-[#ffd215]">Business Intelligence</span>
        </p>
        <h2 className="font-sora text-2xl leading-tight text-white capitalize sm:text-[31px]">
          Why Hiring an Ops Coordinator Rarely Fixes a Process Problem
        </h2>
        <p className="font-mono text-xs tracking-[1px] text-white uppercase">
          August 17, 2026
        </p>
        <span className="mt-6 flex items-center justify-between border-t border-[#dfdfdf]/70 pt-6 text-[15.4px] text-white capitalize">
          Read more
          <Image
            src="/landing/blog-arrow.svg"
            alt=""
            width={16}
            height={15}
            aria-hidden
            className="invert transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
