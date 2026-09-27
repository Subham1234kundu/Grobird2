"use client";

import { useMemo, useState } from "react";
import type { Post } from "@/lib/blog/types";
import BlogGrid from "./BlogGrid";
import CategoryFilter from "./CategoryFilter";
import FeaturedPost from "./FeaturedPost";

/**
 * The blog page below the hero: category chips, the featured post and
 * the grid, all driven by the same list of published posts.
 */
export default function BlogCollection({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("All");

  const categories = useMemo(() => {
    const seen = new Set<string>();
    for (const p of posts) seen.add(p.category);
    return ["All", ...Array.from(seen)];
  }, [posts]);

  const featured = posts.find((p) => p.featured) ?? posts[0] ?? null;

  const visible = useMemo(() => {
    if (active === "All") return posts.filter((p) => p.id !== featured?.id);
    return posts.filter((p) => p.category === active);
  }, [posts, active, featured]);

  return (
    <>
      <CategoryFilter categories={categories} active={active} onChange={setActive} />
      {active === "All" && featured && <FeaturedPost post={featured} />}
      <BlogGrid posts={visible} />
    </>
  );
}
