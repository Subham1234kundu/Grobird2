import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { Alert, Badge, Button, ButtonLink, Card, EmptyState, PageHeader, inputClass } from "@/components/admin/ui";
import { requireUser } from "@/lib/admin/auth";
import type { CaseStudy } from "@/lib/case-studies/types";
import { deleteCaseStudy, setCaseStudyPublished } from "./actions";

export default async function CaseStudiesAdminPage({ searchParams }: { searchParams: Promise<{ q?: string; status?: string; saved?: string; deleted?: string }> }) {
  const { supabase } = await requireUser();
  const { q = "", status = "all", saved, deleted } = await searchParams;
  let query = supabase.from("case_studies").select("*").order("sort_order").order("updated_at", { ascending: false });
  if (q) query = query.ilike("title", `%${q}%`);
  if (status === "published" || status === "draft") query = query.eq("published", status === "published");
  const { data, error } = await query;
  const studies = (data ?? []) as CaseStudy[];
  return (
    <>
      <PageHeader title="Case Studies" description="Manage the cards on the public case studies page." action={<ButtonLink href="/admin/case-studies/new">+ New case study</ButtonLink>} />
      {saved && <div className="mb-5"><Alert tone="success">Case study saved. The website has been refreshed.</Alert></div>}
      {deleted && <div className="mb-5"><Alert tone="success">Case study deleted.</Alert></div>}
      {error ? <Alert tone="error">Case studies could not be loaded: {error.message}. Run supabase/case-studies.sql in the Supabase SQL Editor.</Alert> : <Card>
        <form className="flex flex-col gap-3 border-b border-[#eeeef0] p-4 sm:flex-row"><input name="q" aria-label="Search by title" placeholder="Search by title" defaultValue={q} className={inputClass} /><select name="status" aria-label="Status" defaultValue={status} className={`${inputClass} sm:w-44`}><option value="all">All case studies</option><option value="published">Published</option><option value="draft">Drafts</option></select><Button type="submit" variant="secondary">Filter</Button></form>
        {studies.length === 0 ? <EmptyState title="No case studies found" body="Add a case study or try another filter." /> : <div className="overflow-x-auto"><table className="w-full min-w-[650px] text-left text-sm"><thead className="bg-[#fafafa] text-[#8a8a92]"><tr><th className="p-4">Title</th><th className="p-4">Industry</th><th className="p-4">Status</th><th className="p-4">Order</th><th className="p-4">Actions</th></tr></thead><tbody className="divide-y divide-[#eeeef0]">{studies.map(study => <tr key={study.id}><td className="p-4"><Link href={`/admin/case-studies/${study.id}`} className="font-medium hover:text-[#c9531a]">{study.title}</Link></td><td className="p-4">{study.industry}</td><td className="p-4"><Badge tone={study.published ? "success" : "warning"}>{study.published ? "Published" : "Draft"}</Badge></td><td className="p-4">{study.sort_order}</td><td className="p-4"><div className="flex items-center gap-3"><Link href={`/admin/case-studies/${study.id}`}>Edit</Link><form action={setCaseStudyPublished.bind(null, study.id, !study.published)}><button type="submit">{study.published ? "Unpublish" : "Publish"}</button></form><DeleteButton compact title="Delete this case study?" body={`“${study.title}” will be removed from the site.`} onConfirm={deleteCaseStudy.bind(null, study.id)} /></div></td></tr>)}</tbody></table></div>}
      </Card>}
    </>
  );
}
