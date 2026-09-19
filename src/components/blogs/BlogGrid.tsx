import Image from "next/image";
import Link from "next/link";

export const BLOG_GRID_POSTS = [
  {
    title: "How to Scale Operations Without Adding Headcount",
    date: "August 16, 2026",
    outerBg: "bg-[#ff884c]",
    boxBg: "bg-black",
  },
  {
    title: "The Hidden Cost of Manual Data Entry (With the Math)",
    date: "August 13, 2026",
    outerBg: "bg-black",
    boxBg: "bg-[#ff884c]",
  },
  {
    title: "5 Signs Your Business Has Outgrown Its Systems",
    date: "August 5, 2026",
    outerBg: "bg-[#2f80ed]",
    boxBg: "bg-black",
  },
];

export function BlogCardRow({ rowKey = "row" }: { rowKey?: string }) {
  return (
    <div className="grid grid-cols-1 divide-y divide-[#dfdfdf]/55 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {BLOG_GRID_POSTS.map((post) => (
        <Link
          key={`${rowKey}-${post.title}`}
          href="/blogs/why-hiring-an-ops-coordinator-rarely-fixes-a-process-problem"
          className="group flex flex-col gap-6 px-6 py-10 sm:px-8"
        >
          <div
            className={`relative aspect-[388/230] overflow-hidden bg-cover bg-center ${post.outerBg}`}
            style={{ backgroundImage: "url('/landing/blog-grid-bg.png')" }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div
                className={`flex h-[151px] w-[261px] max-w-full items-center justify-center px-4 ${post.boxBg}`}
              >
                <p className="text-center font-sora text-lg font-light text-white capitalize">
                  {post.title}
                </p>
              </div>
            </div>
          </div>
          <h3 className="font-sora text-lg font-light text-white capitalize">
            {post.title}
          </h3>
          <p className="font-mono text-xs tracking-[1px] text-white uppercase">
            {post.date}
          </p>
          <span className="mt-auto flex items-center justify-between border-t border-[#dfdfdf]/70 pt-4 text-[15.4px] text-white capitalize">
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
        </Link>
      ))}
    </div>
  );
}

export default function BlogGrid() {
  return (
    <div>
      <BlogCardRow rowKey="row-0" />
      <BlogCardRow rowKey="row-1" />
    </div>
  );
}
