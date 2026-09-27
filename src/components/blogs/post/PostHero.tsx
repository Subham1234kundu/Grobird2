import Link from "next/link";
import { formatPostDate, type Post } from "@/lib/blog/types";
import ArrowIcon from "@/components/ui/ArrowIcon";

/** Splits a title so its second half carries the brand orange. */
function splitTitle(title: string) {
  const words = title.split(" ");
  if (words.length < 4) return { lead: title, tail: "" };
  const cut = Math.ceil(words.length / 2);
  return { lead: words.slice(0, cut).join(" "), tail: words.slice(cut).join(" ") };
}

export default function PostHero({ post }: { post: Post }) {
  const { lead, tail } = splitTitle(post.title);

  return (
    <section className="border-b border-[#f3f3f3]/15 bg-black px-6 pt-[91px] pb-[45px] sm:px-10 lg:px-0">
      <div className="mx-auto max-w-[1357px]">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 font-sans text-sm text-white"
        >
          <Link href="/" className="hover:text-white/80">
            Home
          </Link>
          <ArrowIcon direction="chevron-right" className="size-3.5 text-white/60" />
          <Link href="/blogs" className="hover:text-white/80">
            Blog Collection
          </Link>
          <ArrowIcon direction="chevron-right" className="size-3.5 text-white/60" />
          <span className="text-[#ff884c]">{post.title}</span>
        </nav>

        <h1 className="mt-[42px] max-w-[936px] font-sora text-3xl leading-tight tracking-[-2px] text-[#827e7e] capitalize sm:text-4xl lg:text-[56.6px] lg:leading-[68px]">
          {lead}
          {tail && (
            <>
              {" "}
              <span className="text-[#ff884c]">{tail}</span>
            </>
          )}
        </h1>

        <p className="mt-[38px] flex flex-wrap items-center gap-3.5 font-mono text-xs tracking-[1px] text-white uppercase">
          <span>Last updated : {formatPostDate(post.updated_at ?? post.published_at)}</span>
          <span aria-hidden>|</span>
          <span className="text-[#ffd215]">{post.category}</span>
        </p>
      </div>
    </section>
  );
}
