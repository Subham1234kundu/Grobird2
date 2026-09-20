"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const FEATURED_POST = {
  title: "Why Hiring an Ops Coordinator Rarely Fixes a Process Problem",
  date: "August 17, 2026",
};

const POSTS = [
  {
    title: "How to Scale Operations Without Adding Headcount",
    date: "August 16, 2026",
    background: "bg-[#ff884c]",
    boxBackground: "bg-black",
    boxAlign: "start" as const,
  },
  {
    title: "The Hidden Cost of Manual Data Entry (With the Math)",
    date: "August 13, 2026",
    background: "bg-black",
    boxBackground: "bg-[#ff884c]",
    boxAlign: "center" as const,
  },
  {
    title: "5 Signs Your Business Has Outgrown Its Systems",
    date: "August 5, 2026",
    background: "bg-[#2f80ed]",
    boxBackground: "bg-black",
    boxAlign: "end" as const,
  },
];

const BOX_ALIGN_CLASSES = {
  start: "items-start pt-12",
  center: "items-center",
  end: "items-end pb-0",
};

export default function Blogs() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".blog-fade", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-black px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[772px] text-center">
        <h2 className="gsap-fade blog-fade translate-y-8 font-sora text-4xl tracking-tight text-[#858382] sm:text-5xl lg:text-[57px] lg:tracking-[-2.5px]">
          Insights &amp; <span className="text-[#ff884c]">Blogs</span>
        </h2>
        <p className="gsap-fade blog-fade mt-4 translate-y-8 text-base leading-relaxed text-white">
          We think like operators, not vendors. We don&apos;t start with a
          tool. We start with your problem. We understand that technology
          serves operations, not the reverse.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-[1360px]">
        <Link
          href="/blogs/why-hiring-an-ops-coordinator-rarely-fixes-a-process-problem"
          className="gsap-fade blog-fade group grid translate-y-8 grid-cols-1 border-b border-[#dfdfdf]/70 pb-10 lg:grid-cols-2 lg:gap-10"
        >
          <div className="relative aspect-[719/410] overflow-hidden">
            <Image
              src="/landing/blog-featured-bg.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
          </div>
          <div className="flex flex-col justify-center gap-6 py-6">
            <h3 className="font-sora text-2xl leading-tight tracking-[-0.29px] text-white sm:text-3xl lg:text-[31px] lg:leading-[40px]">
              {FEATURED_POST.title}
            </h3>
            <p className="font-mono text-xs font-medium tracking-widest text-white uppercase">
              {FEATURED_POST.date}
            </p>
            <span className="mt-auto flex items-center gap-2 border-t border-[#dfdfdf]/70 pt-6 text-[15.4px] font-medium tracking-[-0.16px] text-white">
              Read More
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

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 sm:divide-x sm:divide-[#dfdfdf]/55">
          {POSTS.map((post) => (
            <Link
              key={post.title}
              href="/blogs/why-hiring-an-ops-coordinator-rarely-fixes-a-process-problem"
              className="gsap-fade blog-fade group flex translate-y-8 flex-col gap-6 border-t border-[#dfdfdf]/55 pt-10 first:border-t-0 sm:border-t-0 sm:px-6 sm:pt-0 sm:first:pl-0"
            >
              <div
                className={`relative aspect-[413/230] overflow-hidden bg-cover bg-center ${post.background}`}
                style={{
                  backgroundImage: "url('/landing/blog-grid-bg.png')",
                }}
              >
                <div
                  className={`absolute inset-0 flex justify-center p-6 ${BOX_ALIGN_CLASSES[post.boxAlign]}`}
                >
                  <div
                    className={`flex h-[151px] w-[261px] max-w-full items-center justify-center px-4 ${post.boxBackground}`}
                  >
                    <p className="text-center font-sora text-[19px] leading-[26px] font-light tracking-[-0.29px] text-white capitalize">
                      {post.title}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="font-sora text-[19px] leading-[26px] font-light tracking-[-0.29px] text-white capitalize">
                {post.title}
              </h3>
              <p className="font-mono text-xs font-medium tracking-widest text-white uppercase">
                {post.date}
              </p>
              <span className="flex items-center gap-2 border-t border-[#dfdfdf]/70 pt-4 text-[15.4px] font-medium tracking-[-0.16px] text-white">
                Read More
                <Image
                  src="/landing/blog-arrow.svg"
                  alt=""
                  width={16}
                  height={15}
                  aria-hidden
                  className="invert transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href="/blogs"
          className="flex items-center gap-[10px] bg-white px-[33px] py-[10px] text-[15.6px] font-medium tracking-[0.5px] text-black capitalize transition-transform hover:scale-105"
        >
          Explore More
          <Image
            src="/landing/arrow-right-black.svg"
            alt=""
            width={16}
            height={15}
            aria-hidden
          />
        </Link>
      </div>
    </section>
  );
}
