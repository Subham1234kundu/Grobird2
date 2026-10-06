"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { formatPostDate, type Post } from "@/lib/blog/types";

// Cards alternate through the three brand treatments by position.
const CARD_STYLES = [
  { outerBg: "bg-[#ff884c]", boxBg: "bg-black" },
  { outerBg: "bg-black", boxBg: "bg-[#ff884c]" },
  { outerBg: "bg-[#2f80ed]", boxBg: "bg-black" },
];

export type ArticleCard = Pick<Post, "id" | "slug" | "title" | "published_at" | "cover_image_url">;

export function BlogCardRow({
  posts,
  rowKey = "row",
  collectionHref = "/blogs",
  compact = false,
}: {
  posts: ArticleCard[];
  rowKey?: string;
  collectionHref?: string;
  compact?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 divide-y divide-[#dfdfdf]/55 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {posts.map((post, i) => {
        const style = CARD_STYLES[i % CARD_STYLES.length];
        return (
          <Link
            key={`${rowKey}-${post.id}`}
            href={`${collectionHref}/${post.slug}`}
            className={`group blog-card flex min-w-0 flex-col ${compact ? "gap-6 px-0 py-6 sm:px-8" : "gap-4 px-0 py-5 sm:gap-6 sm:px-6 sm:py-10"}`}
          >
            <div
              className={`blog-card-art relative ${compact ? "aspect-[388/230]" : "h-[160px] sm:aspect-[388/230] sm:h-auto"} overflow-hidden bg-cover bg-center ${style.outerBg}`}
              style={{ backgroundImage: "url('/landing/blog-grid-bg.png')" }}
            >
              {post.cover_image_url ? (
                <Image
                  src={post.cover_image_url}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                  aria-hidden
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div
                    className={`flex ${compact ? "h-[151px] w-[261px]" : "h-[112px] w-[350px] sm:h-[151px]"} max-w-full items-center justify-center px-4 ${style.boxBg}`}
                  >
                    <p className={`text-center font-sora font-light text-white capitalize ${compact ? "text-lg" : "text-base sm:text-lg"}`}>
                      {post.title}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <h3 className="font-sora text-lg font-light text-white capitalize">
              {post.title}
            </h3>
            <p className="font-mono text-xs tracking-[1px] text-white uppercase">
              {formatPostDate(post.published_at)}
            </p>
            <span className="mt-auto flex items-center justify-between border-t border-[#dfdfdf]/70 pt-4 text-[15.4px] text-white capitalize">
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
          </Link>
        );
      })}
    </div>
  );
}

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Cards rise in as each row reaches the fold, with their artwork
      // easing out of a slight zoom behind the text.
      gsap.utils.toArray<HTMLElement>(".blog-card").forEach((card, i) => {
        gsap
          .timeline({
            scrollTrigger: { trigger: card, start: "top 92%" },
            delay: (i % 3) * 0.1,
          })
          .fromTo(
            card,
            { y: 44, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" },
          )
          .fromTo(
            card.querySelector(".blog-card-art"),
            { scale: 1.08 },
            { scale: 1, duration: 1, ease: "power2.out" },
            0,
          );
      });
    },
    { scope: root, dependencies: [posts], revertOnUpdate: true },
  );

  return (
    <div
      ref={root}
      className="mx-auto mt-8 max-w-[1328px] px-4 pb-12 sm:mt-[70px] sm:px-10 sm:pb-20 lg:px-0"
    >
      {posts.length === 0 ? (
        <p role="status" className="col-span-full py-12 text-[#aaa7a3]">
          No blogs match your search. Try another category or search term.
        </p>
      ) : (
        Array.from({ length: Math.ceil(posts.length / 3) }, (_, i) => (
          <BlogCardRow key={`row-${i}`} rowKey={`row-${i}`} posts={posts.slice(i * 3, i * 3 + 3)} />
        ))
      )}
    </div>
  );
}

