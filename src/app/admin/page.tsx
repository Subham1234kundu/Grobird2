import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

/** /admin always lands on the dashboard when signed in, else on login. */
export default async function AdminIndexPage() {
  if (!isSupabaseConfigured()) redirect("/admin/login?error=config");

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  redirect(user ? "/admin/dashboard" : "/admin/login");
}
