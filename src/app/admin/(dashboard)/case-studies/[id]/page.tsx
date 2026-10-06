import { notFound } from "next/navigation";
import CaseStudyForm from "@/components/admin/CaseStudyForm";
import { Alert, PageHeader } from "@/components/admin/ui";
import { requireUser } from "@/lib/admin/auth";
import type { CaseStudy } from "@/lib/case-studies/types";

export default async function EditCaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { supabase } = await requireUser();
  const { data, error } = await supabase.from("case_studies").select("*").eq("id", id).maybeSingle();
  if (error) return <Alert tone="error">{error.message}</Alert>;
  if (!data) notFound();
  return <><PageHeader title="Edit case study" /><CaseStudyForm study={data as CaseStudy} /></>;
}
