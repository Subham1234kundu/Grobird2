"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/admin/auth";
import { LEAD_STATUSES } from "@/lib/admin/lead-options";

export async function setLeadStatus(id: string, status: "new" | "contacted") {
  const { supabase } = await requireUser();
  const { error } = await supabase.from("leads").update({ status }).eq("id", id);
  if (error) throw new Error("Unable to update the lead status.");
  revalidatePath("/admin/leads");
  revalidatePath("/admin/dashboard");
}

export async function deleteLead(id: string) {
  const { supabase } = await requireUser();
  const { error } = await supabase.from("leads").delete().eq("id", id);
  if (error) throw new Error("Unable to delete this lead.");
  revalidatePath("/admin/leads");
  revalidatePath("/admin/dashboard");
}

export async function updateLead(id: string, data: FormData) {
  const status = String(data.get("status") ?? "");
  const remark = String(data.get("remark") ?? "").trim();
  if (!LEAD_STATUSES.some(value => value === status) || remark.length > 2000) throw new Error("Invalid lead details.");
  const { supabase } = await requireUser();
  const { error } = await supabase.from("leads").update({ status, remark: remark || null }).eq("id", id);
  if (error) throw new Error("Unable to save the lead. Ensure the leads-admin.sql migration has been applied.");
  revalidatePath("/admin/leads");
  revalidatePath("/admin/dashboard");
}
