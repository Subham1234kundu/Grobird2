import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import type { Lead } from "@/lib/blog/types";
import { cleanLeadSearch, leadRangeStart } from "@/lib/admin/lead-filters";
import { LEAD_STATUSES } from "@/lib/admin/lead-options";

function csvCell(value: string | null) {
  const raw = value ?? "";
  const s = /^[=+@\-\t\r]/.test(raw) ? `'${raw}` : raw;
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** Downloads every lead as a CSV file. Admins only. */
export async function GET(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.redirect(new URL("/admin/login", process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"));
  }

  const params = new URL(request.url).searchParams;
  const q = cleanLeadSearch(params.get("q") ?? "");
  const status = params.get("status");
  const start = leadRangeStart(params.get("range") ?? "all");
  const data: Lead[] = [];
  for (let offset = 0; ; offset += 1000) {
    let query = supabase.from("leads").select("*").order("created_at", { ascending: false }).order("id");
    if (q) query = query.or(`name.ilike.%${q}%,email.ilike.%${q}%,company.ilike.%${q}%`);
    if (status && LEAD_STATUSES.some(value => value === status)) query = query.eq("status", status);
    if (start) query = query.gte("created_at", start);
    const result = await query.range(offset, offset + 999);
    if (result.error) return new NextResponse("Unable to export leads.", { status: 500 });
    data.push(...(result.data as Lead[]));
    if (result.data.length < 1000) break;
  }

  const header = ["Date", "Name", "Email", "Phone", "Company", "Reason", "Message", "Source", "Status", "Remark"];
  const rows = ((data ?? []) as Lead[]).map((l) =>
    [l.created_at, l.name, l.email, l.phone, l.company, l.reason, l.message, l.source, l.status, l.remark ?? null]
      .map(csvCell)
      .join(","),
  );
  const csv = [header.join(","), ...rows].join("\r\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="grobird-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
