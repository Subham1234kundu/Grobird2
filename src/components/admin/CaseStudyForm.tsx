"use client";

import Image from "next/image";
import { useActionState } from "react";
import { saveCaseStudy } from "@/app/admin/(dashboard)/case-studies/actions";
import { CASE_STUDY_INDUSTRIES, type CaseStudy } from "@/lib/case-studies/types";
import { Alert, Button, ButtonLink, Card, Field, inputClass } from "./ui";

export default function CaseStudyForm({ study }: { study?: CaseStudy }) {
  const [state, action, pending] = useActionState(saveCaseStudy, {});
  return (
    <Card>
      <form action={action} className="flex max-w-3xl flex-col gap-5 p-5 sm:p-7">
        {study && <input type="hidden" name="id" value={study.id} />}
        {state.error && <Alert tone="error">{state.error}</Alert>}
        <Field label="Title" htmlFor="title"><input id="title" name="title" required maxLength={200} defaultValue={study?.title} className={inputClass} /></Field>
        <Field label="Description" htmlFor="description"><textarea id="description" name="description" required maxLength={2000} defaultValue={study?.description} className={`${inputClass} h-auto min-h-28 py-3`} /></Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Industry" htmlFor="industry"><select id="industry" name="industry" required defaultValue={study?.industry ?? ""} className={inputClass}><option value="" disabled>Choose an industry</option>{CASE_STUDY_INDUSTRIES.map(item => <option key={item}>{item}</option>)}</select></Field>
          <Field label="Service label" htmlFor="tag"><input id="tag" name="tag" required maxLength={60} defaultValue={study?.tag ?? "Automate Business Processes"} className={inputClass} /></Field>
        </div>
        <Field label="Cover image" htmlFor="cover" hint="JPG, PNG, WebP, or AVIF. Maximum 5 MB. Upload a new image to replace the current one.">
          {study?.cover_image_url && <Image src={study.cover_image_url} alt="Current cover" width={360} height={210} className="max-h-52 w-auto rounded-lg object-cover" />}
          <input id="cover" name="cover" type="file" required={!study} accept="image/jpeg,image/png,image/webp,image/avif" className="text-sm text-[#5b5b63]" />
        </Field>
        <Field label="Display order" htmlFor="sort_order" hint="Lower numbers appear first."><input id="sort_order" name="sort_order" type="number" min={0} max={100000} step={1} required defaultValue={study?.sort_order ?? 0} className={inputClass} /></Field>
        <label className="flex items-center gap-2 text-sm text-[#111]"><input name="published" type="checkbox" defaultChecked={study?.published ?? false} className="accent-[#ff884c]" />Publish on the website</label>
        <div className="flex gap-3"><Button type="submit" disabled={pending}>{pending ? "Saving..." : "Save case study"}</Button><ButtonLink href="/admin/case-studies" variant="secondary">Cancel</ButtonLink></div>
      </form>
    </Card>
  );
}
