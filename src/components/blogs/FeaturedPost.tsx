"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function FeaturedPost() {
  const root = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      // The artwork unveils from the left while the copy lifts in behind it.
      gsap
        .timeline({
          scrollTrigger: { trigger: root.current, start: "top 85%" },
        })
        .fromTo(
          ".featured-art",
          { clipPath: "inset(0 100% 0 0)", scale: 1.06 },
          {
            clipPath: "inset(0 0% 0 0)",
            scale: 1,
            duration: 1,
            ease: "power3.inOut",
          },
        )
        .fromTo(
          ".featured-cell",
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.09,
          },
          0.25,
        );
    },
    { scope: root },
  );

  return (
    <Link
      ref={root}
      href="/blogs/why-hiring-an-ops-coordinator-rarely-fixes-a-process-problem"
      className="group mx-auto mt-14 grid max-w-[1261px] grid-cols-1 px-6 sm:px-10 lg:grid-cols-2 lg:px-0"
    >
      <div className="featured-art relative aspect-[628/362] overflow-hidden">
        <Image
          src="/blogs/featured-illustration.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="flex flex-col justify-center gap-3 bg-black py-10 lg:py-0 lg:pl-9">
        <p className="gsap-fade featured-cell flex items-center gap-1 font-mono text-xs tracking-[1px] text-white uppercase">
          <span className="text-white">|</span>
          <span className="text-[#ffd215]">Business Intelligence</span>
        </p>
        <h2 className="gsap-fade featured-cell font-sora text-2xl leading-tight text-white capitalize sm:text-[31px]">
          Why Hiring an Ops Coordinator Rarely Fixes a Process Problem
        </h2>
        <p className="gsap-fade featured-cell font-mono text-xs tracking-[1px] text-white uppercase">
          August 17, 2026
        </p>
        <span className="gsap-fade featured-cell mt-6 flex items-center justify-between border-t border-[#dfdfdf]/70 pt-6 text-[15.4px] text-white capitalize">
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
