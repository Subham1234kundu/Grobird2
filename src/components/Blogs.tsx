"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";

const FEATURED_POST = {
  title: "Why Hiring an Ops Coordinator Rarely Fixes a Process Problem",
  date: "August 17, 2026",
};

// Phones tint every card's banner as Figma draws it (black, black, blue)
// with an orange caption box; desktop keeps its alternating scheme.
const POSTS = [
  {
    title: "How to Scale Operations Without Adding Headcount",
    date: "August 16, 2026",
    background: "lg:bg-[#ff884c]",
    mobileBackground: "bg-black",
    boxBackground: "bg-black",
    boxAlign: "start" as const,
  },
  {
    title: "The Hidden Cost of Manual Data Entry (With the Math)",
    date: "August 13, 2026",
    background: "lg:bg-black",
    mobileBackground: "bg-black",
    boxBackground: "bg-[#ff884c]",
    boxAlign: "center" as const,
  },
  {
    title: "5 Signs Your Business Has Outgrown Its Systems",
    date: "August 5, 2026",
    background: "lg:bg-[#2f80ed]",
    mobileBackground: "bg-[#2f80ed]",
    boxBackground: "bg-black",
    boxAlign: "end" as const,
  },
];

const BOX_ALIGN_CLASSES = {
  start: "items-start pt-12",
  center: "items-center",
  end: "items-end pb-0",
};

const POST_HREF =
  "/blogs/why-hiring-an-ops-coordinator-rarely-fixes-a-process-problem";

function ReadMore({ light }: { light?: boolean }) {
  return (
    <span
      className={`flex items-center gap-2 text-[13px] leading-[19.5px] font-medium capitalize lg:text-[15.4px] lg:leading-normal lg:tracking-[-0.16px] lg:normal-case ${
        light ? "text-black lg:text-white" : "text-white"
      }`}
    >
      Read More
      <Image
        src="/landing/blog-arrow.svg"
        alt=""
        width={16}
        height={15}
        aria-hidden
        className="hidden invert transition-transform group-hover:translate-x-1 lg:block"
      />
    </span>
  );
}

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

      splitWordsReveal(".blog-desc", { start: "top 82%" });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-black px-5 pt-5 pb-8 sm:px-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[772px] text-center">
        <h2 className="gsap-fade blog-fade translate-y-8 font-sora text-[26px] leading-[39px] tracking-[-1px] text-[#858382] sm:text-5xl sm:leading-tight lg:text-[57px] lg:tracking-[-2.5px]">
          Insights &amp; <span className="text-[#ff884c]">Blogs</span>
        </h2>
        <p className="gsap-fade blog-desc mt-3 text-[13px] leading-5 text-white lg:mt-4 lg:text-base lg:leading-relaxed">
          We think like operators, not vendors. We don&apos;t start with a
          tool. We start with your problem.{" "}
          <span className="hidden lg:inline">
            We understand that technology serves operations, not the reverse.
          </span>
        </p>
      </div>

      <div className="mx-auto mt-6 max-w-[1360px] sm:mt-10 lg:mt-16">
        <Link
          href={POST_HREF}
          className="gsap-fade blog-fade group flex translate-y-8 flex-col overflow-hidden border-[0.8px] border-[#dfdfdf] lg:grid lg:grid-cols-2 lg:gap-10 lg:border-0 lg:border-b lg:border-[#dfdfdf]/70 lg:pb-10"
        >
          <div className="relative h-[200px] bg-[#ff884c] sm:h-[300px] lg:aspect-[719/410] lg:h-auto lg:overflow-hidden lg:bg-transparent">
            <Image
              src="/landing/blog-featured-bg.png"
              alt=""
              fill
              className="object-cover opacity-80 lg:opacity-100"
              aria-hidden
            />
          </div>
          <div className="flex flex-col bg-white p-4 lg:justify-center lg:gap-6 lg:bg-transparent lg:p-0 lg:py-6">
            <h3 className="font-sora text-base leading-[20.8px] text-black capitalize sm:text-xl lg:text-[31px] lg:leading-10 lg:tracking-[-0.29px] lg:text-white lg:normal-case">
              {FEATURED_POST.title}
            </h3>
            <p className="pt-2 font-mono text-[11px] leading-[16.5px] tracking-[1.06px] text-black uppercase lg:pt-0 lg:text-xs lg:font-medium lg:tracking-widest lg:text-white">
              {FEATURED_POST.date}
            </p>
            <div className="mt-3 border-t-[0.8px] border-[#dfdfdf]/70 pt-3 lg:mt-auto lg:pt-6">
              <ReadMore light />
            </div>
          </div>
        </Link>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-5 lg:mt-10 lg:gap-0 lg:divide-x lg:divide-[#dfdfdf]/55">
          {POSTS.map((post) => (
            <Link
              key={post.title}
              href={POST_HREF}
              className="gsap-fade blog-fade group flex translate-y-8 flex-col overflow-hidden border-[0.8px] border-[#dfdfdf]/20 lg:gap-6 lg:border-0 lg:px-6 lg:first:pl-0"
            >
              <div
                className={`relative h-[120px] overflow-hidden lg:aspect-[413/230] lg:h-auto lg:bg-[url('/landing/blog-grid-bg.png')] lg:bg-cover lg:bg-center ${post.mobileBackground} ${post.background}`}
              >
                <Image
                  src="/landing/blog-grid-bg.png"
                  alt=""
                  fill
                  className="object-cover opacity-20 lg:hidden"
                  aria-hidden
                />
                {/* Phone caption: one orange box across the banner */}
                <div className="absolute inset-x-4 top-[29.8px] bg-[#ff884c] p-3 lg:hidden">
                  <p className="text-center font-sora text-[14px] leading-[18.2px] font-light text-white capitalize">
                    {post.title}
                  </p>
                </div>
                <div
                  className={`absolute inset-0 hidden justify-center p-6 lg:flex ${BOX_ALIGN_CLASSES[post.boxAlign]}`}
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
              <div className="flex flex-col p-4 lg:contents">
                <h3 className="font-sora text-[15px] leading-[19.5px] font-light text-white capitalize lg:text-[19px] lg:leading-[26px] lg:tracking-[-0.29px]">
                  {post.title}
                </h3>
                <p className="pt-2 font-mono text-[11px] leading-[16.5px] tracking-[1.06px] text-white uppercase lg:pt-0 lg:text-xs lg:font-medium lg:tracking-widest">
                  {post.date}
                </p>
                <div className="mt-3 border-t-[0.8px] border-[#dfdfdf]/70 pt-3 lg:mt-0 lg:pt-4">
                  <ReadMore />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center sm:mt-12 lg:mt-16">
        <Link
          href="/blogs"
          className="flex items-center gap-2 bg-white px-6 py-3 text-[13px] leading-[19.5px] font-medium tracking-[0.5px] text-black capitalize transition-transform hover:scale-105 lg:gap-[10px] lg:px-[33px] lg:py-[10px] lg:text-[15.6px] lg:leading-normal"
        >
          Explore More
          <Image
            src="/landing/arrow-right-black.svg"
            alt=""
            width={16}
            height={15}
            aria-hidden
            className="w-[13px] lg:w-4"
          />
        </Link>
      </div>
    </section>
  );
}
