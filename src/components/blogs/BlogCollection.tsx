"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Post } from "@/lib/blog/types";
import BlogGrid from "./BlogGrid";
import FeaturedPost from "./FeaturedPost";



const BLOG_FILTERS = [
  "All",
  "Fintech",
  "Logistics",
  "Healthcare",
  "Lending",
  "Manufacturing",
  "Business Intelligence",
  "Workflow Automation",
];

/**
 * The blog page below the hero: category chips, the featured post and
 * the grid, all driven by the same list of published posts.
 */
export default function BlogCollection({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();
  const featured = posts.find((post) => post.featured) ?? posts[0] ?? null;



  const visible = useMemo(() => {
    return posts.filter((post) => {
      if (active !== "All" && post.category !== active) return false;
      if (!search && active === "All" && post.id === featured?.id) return false;

      return `${post.title} ${post.excerpt ?? ""} ${post.category}`.toLowerCase().includes(search);
    });
  }, [posts, active, featured, search]);

  return (
    <>
      <section className="mx-auto max-w-[1440px] bg-black px-5 pt-16 sm:px-10 lg:px-16 lg:pt-24">
      <div className="border-b border-white/20 pb-8 sm:border-0 sm:pb-0">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[11px] leading-[16.5px] tracking-[2px] text-[#ff884c] uppercase">Explore our insights</p>
            <h2 className="mt-2 font-sora text-[30px] leading-9 font-light tracking-[-0.8px] text-[#f5f2ed]">Find a blog</h2>
          </div>
        <label className="flex h-12 w-full max-w-[390px] items-center gap-3 border-[0.8px] border-white/30 bg-white/[0.04] px-4 focus-within:border-[#ff884c]">
          <Image src="/case-studies/search.svg" alt="" width={16.4995} height={16.5001} />
          <input type="search" aria-label="Search blogs" placeholder="Search blogs" value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm text-[#f5f2ed] outline-none placeholder:text-[#858382]" />
        </label>
      </div>
        <div role="group" aria-label="Filter blogs by category" className="mt-7 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {BLOG_FILTERS.map((item) => <button key={item} type="button" aria-pressed={active === item} onClick={() => setActive(item)} className={`shrink-0 border-[0.8px] px-4 py-2 font-mono text-[11px] leading-[16.5px] tracking-[1.2px] uppercase transition-colors ${active === item ? "border-[#ff884c] bg-[#ff884c] text-black" : "border-white/25 text-[#aaa7a3] hover:border-[#ff884c]"}`}>{item}</button>)}
        </div>
      </div>
      </section>
      {!search && active === "All" && featured && <FeaturedPost post={featured} />}
      <BlogGrid posts={visible} />
    </>
  );
}

