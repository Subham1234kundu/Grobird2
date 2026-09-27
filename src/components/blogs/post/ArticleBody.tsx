import Markdown from "./Markdown";

export default function ArticleBody({ content }: { content: string }) {
  return (
    <article className="min-w-0 max-w-[830px]">
      <Markdown content={content} />
    </article>
  );
}
