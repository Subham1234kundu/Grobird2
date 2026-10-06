import Link from "next/link";
import { BlogCardRow, type ArticleCard } from "@/components/blogs/BlogGrid";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function RelatedPosts({ posts, collectionHref = "/blogs", caseStudies = false }: { posts: ArticleCard[]; collectionHref?: string; caseStudies?: boolean }) {
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-[#434343]/30 bg-black px-5 pt-8 pb-10 sm:px-10 lg:border-0 lg:py-[97px]">
      <div className="mx-auto max-w-[1360px]">
        <h2 className="text-center font-sora text-[28px] leading-[36px] tracking-[-1px] text-[#858382] sm:text-5xl sm:leading-tight lg:text-left lg:text-[57.4px] lg:tracking-[-2px]">
          {caseStudies ? "More " : "Trending "}<span className="text-[#ff884c]">{caseStudies ? "Case Studies" : "Insights"}</span>
        </h2>

        <div className="mt-8 lg:mt-14">
          <BlogCardRow rowKey="related" posts={posts} collectionHref={collectionHref} compact />
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={collectionHref}
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
