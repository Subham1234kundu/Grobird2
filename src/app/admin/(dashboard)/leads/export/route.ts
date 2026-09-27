import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import type { Lead } from "@/lib/blog/types";

function csvCell(value: string | null) {
  const s = value ?? "";
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** Downloads every lead as a CSV file. Admins only. */
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.redirect(new URL("/admin/login", process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"));
  }

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return new NextResponse(error.message, { status: 500 });

  const header = ["Date", "Name", "Email", "Phone", "Company", "Reason", "Message", "Source", "Status"];
  const rows = ((data ?? []) as Lead[]).map((l) =>
    [l.created_at, l.name, l.email, l.phone, l.company, l.reason, l.message, l.source, l.status]
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
