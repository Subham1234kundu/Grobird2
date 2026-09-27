"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/admin/auth";

export async function setLeadStatus(id: string, status: "new" | "contacted") {
  const { supabase } = await requireUser();
  await supabase.from("leads").update({ status }).eq("id", id);
  revalidatePath("/admin/leads");
  revalidatePath("/admin/dashboard");
}

export async function deleteLead(id: string) {
  const { supabase } = await requireUser();
  await supabase.from("leads").delete().eq("id", id);
  revalidatePath("/admin/leads");
  revalidatePath("/admin/dashboard");
}
