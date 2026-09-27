"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import Markdown from "@/components/blogs/post/Markdown";
import { savePost, type PostFormState } from "@/app/admin/(dashboard)/blogs/actions";
import { slugify } from "@/lib/blog/markdown";
import { POST_CATEGORIES, type Post } from "@/lib/blog/types";
import { Alert, Button, Field, inputClass } from "./ui";

const textareaClass = `${inputClass} h-auto min-h-[120px] resize-y py-3 leading-6`;

function toDateInput(iso: string | null | undefined) {
  return iso ? new Date(iso).toISOString().slice(0, 10) : "";
}

export default function PostForm({ post }: { post?: Post }) {
  const [state, action, pending] = useActionState<PostFormState, FormData>(
    savePost,
    {},
  );

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(post));
  const [content, setContent] = useState(post?.content ?? "");
  const [preview, setPreview] = useState(false);
  const [coverPreview, setCoverPreview] = useState<string | null>(
    post?.cover_image_url ?? null,
  );
  const [removeCover, setRemoveCover] = useState(false);

  const effectiveSlug = slugTouched ? slug : slugify(title);

  return (
    <form action={action} className="grid gap-6 lg:grid-cols-[1fr_320px]">
      {post && <input type="hidden" name="id" value={post.id} />}
      {post && <input type="hidden" name="previous_slug" value={post.slug} />}

      <div className="flex flex-col gap-5">
        {state.error && <Alert tone="error">{state.error}</Alert>}

        <Field label="Title" htmlFor="title">
          <input
            id="title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Why Hiring an Ops Coordinator Rarely Fixes a Process Problem"
            className={`${inputClass} h-12 font-sora text-base font-semibold`}
          />
        </Field>

        <Field
          label="Slug"
          htmlFor="slug"
          hint={`Public URL: /blogs/${effectiveSlug || "…"}`}
        >
          <input
            id="slug"
            name="slug"
            value={effectiveSlug}
            onChange={(e) => {
              setSlugTouched(true);
              setSlug(e.target.value);
            }}
            placeholder="auto-generated-from-title"
            className={`${inputClass} font-mono text-[13px]`}
          />
        </Field>

        <Field
          label="Excerpt"
          htmlFor="excerpt"
          hint="One or two sentences shown on cards and in search results."
        >
          <textarea
            id="excerpt"
            name="excerpt"
            defaultValue={post?.excerpt ?? ""}
            rows={2}
            className={`${textareaClass} min-h-[72px]`}
          />
        </Field>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="content" className="text-[12px] font-medium tracking-[0.2px] text-[#5b5b63]">
              Content (Markdown)
            </label>
            <div className="flex rounded-md border border-[#e3e3e6] p-0.5 text-[12px] font-medium">
              <button
                type="button"
                onClick={() => setPreview(false)}
                className={`rounded px-3 py-1 ${!preview ? "bg-black text-white" : "text-[#5b5b63]"}`}
              >
                Write
              </button>
              <button
                type="button"
                onClick={() => setPreview(true)}
                className={`rounded px-3 py-1 ${preview ? "bg-black text-white" : "text-[#5b5b63]"}`}
              >
                Preview
              </button>
            </div>
          </div>

          {/* The textarea stays mounted while previewing so its value is
              always submitted with the form. */}
          <textarea
            id="content"
            name="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={"## First section heading\n\nWrite the article here. Use `## ` for section headings — they become the table of contents.\n\n> A pull quote\n\n- A bullet"}
            className={`${textareaClass} min-h-[460px] font-mono text-[13px] leading-6 ${preview ? "hidden" : ""}`}
          />
          {preview && (
            <div className="min-h-[460px] rounded-lg border border-[#e3e3e6] bg-black px-6 py-8 sm:px-10">
              {content.trim() ? (
                <article className="max-w-[830px]">
                  <Markdown content={content} />
                </article>
              ) : (
                <p className="text-sm text-[#858382]">Nothing to preview yet.</p>
              )}
            </div>
          )}
          <p className="text-[11px] text-[#8a8a92]">
            Supports headings, bold, links, quotes, lists, tables and images.
          </p>
        </div>
      </div>

      <aside className="flex flex-col gap-5">
        <div className="rounded-xl border border-[#e8e8eb] bg-white p-5">
          <p className="font-sora text-[13px] font-semibold text-[#111]">Publish</p>
          <div className="mt-4 flex flex-col gap-3">
            <label className="flex items-center gap-3 text-sm text-[#111]">
              <input
                type="checkbox"
                name="published"
                defaultChecked={post?.published ?? false}
                className="size-4 accent-[#ff884c]"
              />
              Published (visible on the site)
            </label>
            <label className="flex items-center gap-3 text-sm text-[#111]">
              <input
                type="checkbox"
                name="featured"
                defaultChecked={post?.featured ?? false}
                className="size-4 accent-[#ff884c]"
              />
              Featured (headlines the blog page)
            </label>
            <Field label="Publish date" htmlFor="published_at" hint="Leave empty to use today when publishing.">
              <input
                id="published_at"
                name="published_at"
                type="date"
                defaultValue={toDateInput(post?.published_at)}
                className={inputClass}
              />
            </Field>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <Button type="submit" disabled={pending} className="w-full">
              {pending ? "Saving…" : post ? "Save changes" : "Create post"}
            </Button>
            <Link
              href="/admin/blogs"
              className="text-center text-sm text-[#8a8a92] hover:text-[#111]"
            >
              Cancel
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-[#e8e8eb] bg-white p-5">
          <p className="font-sora text-[13px] font-semibold text-[#111]">Category</p>
          <select
            name="category"
            defaultValue={post?.category ?? POST_CATEGORIES[5]}
            className={`${inputClass} mt-3`}
          >
            {POST_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-xl border border-[#e8e8eb] bg-white p-5">
          <p className="font-sora text-[13px] font-semibold text-[#111]">Cover image</p>
          <p className="mt-1 text-[11px] text-[#8a8a92]">
            Optional. Shown on the blog page and above the article. Under 5 MB.
          </p>

          {coverPreview && !removeCover ? (
            <div className="relative mt-3 aspect-[16/9] overflow-hidden rounded-lg border border-[#e3e3e6] bg-[#f5f5f6]">
              <Image src={coverPreview} alt="" fill className="object-cover" unoptimized />
            </div>
          ) : (
            <label
              htmlFor="cover"
              className="mt-3 flex aspect-[16/9] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#d0d0d5] bg-[#fafafa] text-[12px] text-[#8a8a92] hover:border-[#ff884c]"
            >
              <Image src="/Admin/dashboardImage/image.png" alt="" width={28} height={28} className="opacity-60" aria-hidden />
              Click to choose an image
            </label>
          )}

          <input
            id="cover"
            name="cover"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setRemoveCover(false);
                setCoverPreview(URL.createObjectURL(file));
              }
            }}
            className="mt-3 block w-full text-[12px] text-[#5b5b63] file:mr-3 file:rounded-md file:border-0 file:bg-[#f0f0f2] file:px-3 file:py-1.5 file:text-[12px] file:font-medium file:text-[#111]"
          />

          {post?.cover_image_url && (
            <label className="mt-3 flex items-center gap-2 text-[12px] text-[#5b5b63]">
              <input
                type="checkbox"
                name="remove_cover"
                checked={removeCover}
                onChange={(e) => setRemoveCover(e.target.checked)}
                className="size-4 accent-[#ff884c]"
              />
              Remove current cover
            </label>
          )}
        </div>
      </aside>
    </form>
  );
}
