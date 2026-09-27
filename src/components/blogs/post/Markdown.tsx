import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { extractHeadings } from "@/lib/blog/markdown";

/**
 * Renders a post body in the article style. `## ` headings get the same
 * ids as `extractHeadings`, so the table of contents can link to them.
 * Safe in both Server and Client Components.
 */
export default function Markdown({ content }: { content: string }) {
  const headings = extractHeadings(content);
  let headingIndex = 0;

  const components: Components = {
    h1: ({ children }) => (
      <h2 className="mt-14 font-sora text-[30px] leading-[36px] font-semibold tracking-[-0.5px] text-white first:mt-0">
        {children}
      </h2>
    ),
    h2: ({ children }) => {
      const id = headings[headingIndex++]?.id;
      return (
        <h2 className="mt-14 font-sora text-[30px] leading-[36px] font-semibold tracking-[-0.5px] text-white first:mt-0">
          <span id={id} className="block scroll-mt-28">
            {children}
          </span>
        </h2>
      );
    },
    h3: ({ children }) => (
      <h3 className="mt-8 font-sora text-xl leading-7 font-semibold text-white">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="pt-5 text-[17px] leading-[30px] text-[#c8c4bc]">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[#ff884c] underline decoration-[#ff884c]/40 underline-offset-4 hover:decoration-[#ff884c]"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-10 border-l-[1.6px] border-[#ff884c] py-2 pl-6 font-sora text-xl leading-7 tracking-[-0.3px] text-white [&_p]:pt-0 [&_p]:text-xl [&_p]:leading-7 [&_p]:text-white">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="mt-5 flex flex-col gap-3 border border-[#4b4949]/50 bg-[#0d0d0d] p-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-5 flex list-decimal flex-col gap-4 pl-6 text-[17px] leading-[30px] text-[#c8c4bc] marker:font-mono marker:text-[#ff884c]">
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => {
      const ordered = "ordered" in props && Boolean(props.ordered);
      return ordered ? (
        <li className="pl-1 [&_p]:pt-0">{children}</li>
      ) : (
        <li className="flex gap-3 text-[15px] leading-6 text-[#858382] [&_p]:pt-0 [&_p]:text-[15px] [&_p]:leading-6 [&_p]:text-[#858382]">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#ff884c]" />
          <span>{children}</span>
        </li>
      );
    },
    hr: () => <hr className="mt-10 border-[#4b4949]/40" />,
    code: ({ children, className }) =>
      className ? (
        <code className="block overflow-x-auto rounded border border-[#4b4949]/50 bg-[#0d0d0d] p-4 font-mono text-[13px] leading-6 text-[#c8c4bc]">
          {children}
        </code>
      ) : (
        <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[14px] text-[#ffd215]">
          {children}
        </code>
      ),
    pre: ({ children }) => <pre className="mt-5">{children}</pre>,
    img: ({ src, alt }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={typeof src === "string" ? src : undefined}
        alt={alt ?? ""}
        className="mt-8 w-full rounded-lg border border-[#4b4949]/40"
        loading="lazy"
      />
    ),
    table: ({ children }) => (
      <div className="mt-6 overflow-x-auto border border-[#4b4949]/40">
        <table className="w-full text-left text-sm text-[#c8c4bc]">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-b border-[#4b4949]/40 bg-[#0d0d0d] px-4 py-2 font-sora text-xs font-semibold tracking-[1px] text-white uppercase">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-b border-[#4b4949]/20 px-4 py-2 align-top">{children}</td>
    ),
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
