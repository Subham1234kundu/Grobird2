"use server";

import { createAdminClient } from "@/lib/supabase/admin";

export type LeadResult = { ok: true } | { ok: false; error: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Stores a public form submission so it appears under Leads in the admin. */
export async function submitLead(formData: FormData): Promise<LeadResult> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();

  const name = get("name");
  const email = get("email");
  if (!name || !EMAIL.test(email)) {
    return { ok: false, error: "Please enter your name and a valid email." };
  }

  // Honeypot: bots fill every field, people never see this one.
  if (get("website")) return { ok: true };

  const supabase = createAdminClient();
  if (!supabase) {
    return {
      ok: false,
      error: "The contact form is not connected yet. Email us at contact@grobird.in.",
    };
  }

  const { error } = await supabase.from("leads").insert({
    name: name.slice(0, 120),
    email: email.slice(0, 200),
    company: get("company").slice(0, 160) || null,
    phone: get("phone").slice(0, 40) || null,
    reason: get("reason").slice(0, 120) || null,
    message: get("message").slice(0, 4000) || null,
    source: get("source").slice(0, 40) || "contact",
  });

  if (error) {
    return {
      ok: false,
      error: "Something went wrong sending your message. Please try again or email contact@grobird.in.",
    };
  }
  return { ok: true };
}
