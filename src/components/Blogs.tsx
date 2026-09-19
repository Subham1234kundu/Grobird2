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
  },
  {
    title: "The Hidden Cost of Manual Data Entry (With the Math)",
    date: "August 13, 2026",
    background: "bg-black",
  },
  {
    title: "5 Signs Your Business Has Outgrown Its Systems",
    date: "August 5, 2026",
    background: "bg-[#2f80ed]",
  },
];

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
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/landing/blog-featured-bg.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
          </div>
          <div className="flex flex-col justify-center gap-6 py-6">
            <h3 className="font-sora text-2xl leading-tight text-white sm:text-3xl">
              {FEATURED_POST.title}
            </h3>
            <p className="font-mono text-xs tracking-widest text-white uppercase">
              {FEATURED_POST.date}
            </p>
            <span className="mt-auto flex items-center gap-2 border-t border-[#dfdfdf]/70 pt-6 text-white">
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

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:divide-x sm:divide-[#dfdfdf]/40">
          {POSTS.map((post) => (
            <Link
              key={post.title}
              href="/blogs/why-hiring-an-ops-coordinator-rarely-fixes-a-process-problem"
              className="gsap-fade blog-fade group flex translate-y-8 flex-col gap-6 sm:px-6 sm:first:pl-0"
            >
              <div
                className={`relative aspect-[413/230] overflow-hidden bg-cover bg-center ${post.background}`}
                style={{
                  backgroundImage: "url('/landing/blog-grid-bg.png')",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 p-6">
                  <p className="text-center font-sora font-light text-white">
                    {post.title}
                  </p>
                </div>
              </div>
              <h3 className="font-sora font-light text-white">
                {post.title}
              </h3>
              <p className="font-mono text-xs tracking-widest text-white uppercase">
                {post.date}
              </p>
              <span className="flex items-center gap-2 border-t border-[#dfdfdf]/70 pt-4 text-white">
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
