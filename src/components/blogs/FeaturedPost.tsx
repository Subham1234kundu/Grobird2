"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { formatPostDate, type Post } from "@/lib/blog/types";

export default function FeaturedPost({ post }: { post: Post }) {
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
    { scope: root, dependencies: [post.id] },
  );

  return (
    <Link
      ref={root}
      href={`/blogs/${post.slug}`}
      className="group mx-auto mt-8 grid max-w-[1440px] grid-cols-1 border-b border-white/20 px-4 pb-4 sm:px-10 lg:mt-[66px] lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:border-0 lg:px-20 lg:pb-0"
    >
      <div className="featured-art relative h-[160px] overflow-hidden bg-[#ff884c] lg:aspect-[720/410] lg:h-auto">
        <div className="absolute inset-0 flex items-center justify-center px-4 lg:hidden">
          <div className="absolute inset-0 bg-[url('/landing/blog-grid-bg.png')] bg-cover opacity-20" aria-hidden />
          <p className="relative text-center font-sora text-base font-light leading-[22px] text-white">{post.title}</p>
        </div>
        <Image
          src={post.cover_image_url ?? "/blogs/featured-illustration.png"}
          alt=""
          fill
          sizes="(min-width: 1024px) 628px, 100vw"
          className="hidden object-cover lg:block"
          aria-hidden
        />
      </div>
      <div className="flex flex-col gap-3 bg-black pt-4 lg:pt-9 lg:pl-[45px]">
        <p className="gsap-fade featured-cell flex items-center gap-1 font-mono text-xs tracking-[1px] text-white uppercase">
          <span className="text-white">|</span>
          <span className="text-[#ffd215]">{post.category}</span>
        </p>
        <h2 className="gsap-fade featured-cell font-sora text-lg font-light leading-[26px] text-white capitalize lg:text-[31px] lg:leading-10">
          {post.title}
        </h2>
        <p className="gsap-fade featured-cell font-mono text-xs tracking-[1px] text-white uppercase">
          {formatPostDate(post.published_at)}
        </p>
        <span className="gsap-fade featured-cell mt-1 flex items-center justify-between border-t border-[#dfdfdf]/70 pt-4 text-xs text-white capitalize lg:mt-auto lg:pb-6 lg:pt-6 lg:text-[15.4px]">
          Read more
          <Image
            src="/landing/blog-arrow.svg"
            alt=""
            width={16}
            height={15}
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
