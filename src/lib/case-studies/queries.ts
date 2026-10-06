import "server-only";
import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured, SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/supabase/env";
import type { CaseStudy } from "./types";

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
