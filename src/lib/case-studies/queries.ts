import "server-only";
import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured, SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/supabase/env";
import type { CaseStudy } from "./types";
import { cache } from "react";
import { DEMO_CASE_STUDIES } from "./demos";

export const getPublishedCaseStudy = cache(async (id: string): Promise<CaseStudy | null> => {
  const demo = DEMO_CASE_STUDIES.find(study => study.id === id);
  if (demo) return demo;
  if (!isSupabaseConfigured() || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) return null;
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await supabase.from("case_studies").select("*").eq("id", id).eq("published", true).maybeSingle();
  if (error) return null;
  return data as CaseStudy | null;
});

export async function getPublishedCaseStudies(): Promise<CaseStudy[] | null> {
  if (!isSupabaseConfigured()) return null;
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
    const { data, error } = await supabase.from("case_studies").select("*").eq("published", true).order("sort_order").order("created_at", { ascending: false });
    if (error) {
      console.error("Case studies query failed:", error.code);
      return null;
    }
    return (data ?? []) as CaseStudy[];
  } catch {
    return null;
  }
}
