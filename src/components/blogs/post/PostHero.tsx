import Link from "next/link";
import { formatPostDate, type Post } from "@/lib/blog/types";
import ArrowIcon from "@/components/ui/ArrowIcon";

/** Splits a title so its second half carries the brand orange. */
function splitTitle(title: string) {
  const words = title.split(" ");
  if (words.length < 4) return { lead: title, tail: "" };
  const cut = Math.floor(words.length / 2);
  return { lead: words.slice(0, cut).join(" "), tail: words.slice(cut).join(" ") };
}

export default function PostHero({ post, collectionHref = "/blogs", collectionLabel = "Blog Collection" }: {
  post: Pick<Post, "title" | "updated_at" | "published_at" | "category">;
  collectionHref?: string;
  collectionLabel?: string;
}) {
  const { lead, tail } = splitTitle(post.title);

  return (
    <section className="border-b border-[#f3f3f3]/15 bg-black px-5 pt-14 pb-8 sm:px-10 lg:px-[85px] lg:pt-[91px] lg:pb-[47px]">
      <div className="mx-auto max-w-[1270px]">
        <nav
          aria-label="Breadcrumb"
          className="flex min-w-0 items-center gap-1 font-sans text-xs text-white lg:gap-2 lg:text-sm"
        >
          <Link href="/" className="hover:text-white/80">
            Home
          </Link>
          <ArrowIcon direction="chevron-right" className="size-3.5 text-white/60" />
          <Link href={collectionHref} className="shrink-0 hover:text-white/80">
            {collectionLabel}
          </Link>
          <ArrowIcon direction="chevron-right" className="size-3.5 text-white/60" />
          <span className="min-w-0 truncate text-[#ff884c]" aria-current="page">{post.title}</span>
        </nav>

        <h1 className="mt-5 max-w-[936px] font-sora text-[24px] leading-8 tracking-[-1px] text-[#827e7e] capitalize sm:text-4xl sm:leading-tight lg:mt-[22px] lg:text-[56.6px] lg:leading-[68px] lg:tracking-[-2px]">
          {lead}
          {tail && (
            <>
              {" "}
              <span className="text-[#ff884c]">{tail}</span>
            </>
          )}
        </h1>

        <p className="mt-4 flex flex-wrap items-center gap-x-3.5 gap-y-3 font-mono text-xs leading-[18px] tracking-[1px] text-white uppercase lg:mt-[10px]">
          <span>Last updated : {formatPostDate(post.updated_at ?? post.published_at)}</span>
          <span aria-hidden>|</span>
          <span className="w-full text-[#ffd215] sm:w-auto">{post.category}</span>
        </p>
      </div>
    </section>
  );
}
