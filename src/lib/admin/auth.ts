import "server-only";

import { redirect } from "next/navigation";
import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

/**
 * Data-access-layer check used by every admin page and action. The proxy
 * already gates the route optimistically; this is the authoritative check
 * next to the data.
 */
export const requireUser = cache(async () => {
  if (!isSupabaseConfigured()) redirect("/admin/login?error=config");

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");
  return { user, supabase };
});
