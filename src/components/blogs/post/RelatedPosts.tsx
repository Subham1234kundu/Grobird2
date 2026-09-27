import Link from "next/link";
import { BlogCardRow } from "@/components/blogs/BlogGrid";
import type { Post } from "@/lib/blog/types";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-black px-6 py-16 sm:px-10 lg:px-10 lg:py-[97px]">
      <div className="mx-auto max-w-[1360px]">
        <h2 className="text-center font-sora text-4xl tracking-[-2px] text-[#858382] sm:text-5xl lg:text-[57.4px]">
          Trending <span className="text-[#ff884c]">Insights</span>
        </h2>

        <div className="mt-14 border-t border-[#4b4949]/40">
          <BlogCardRow rowKey="related" posts={posts} />
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blogs"
            className="flex items-center gap-2.5 bg-white px-8 py-2.5 text-[15.6px] font-medium tracking-[0.5px] text-black capitalize transition-opacity hover:opacity-90"
          >
            Explore More
            <ArrowIcon direction="right" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
