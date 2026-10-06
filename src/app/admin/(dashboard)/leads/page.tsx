import Image from "next/image";
import Link from "next/link";
import LeadTable from "@/components/admin/LeadTable";
import LeadFilters from "@/components/admin/LeadFilters";
import { Alert } from "@/components/admin/ui";
import { requireUser } from "@/lib/admin/auth";
import { cleanLeadSearch, leadRangeStart } from "@/lib/admin/lead-filters";
import { LEAD_STATUSES } from "@/lib/admin/lead-options";
import type { Lead } from "@/lib/blog/types";

export default async function LeadsPage({ searchParams }: { searchParams: Promise<{ q?: string; status?: string; range?: string; page?: string }> }) {
  const { supabase } = await requireUser();
  const params = await searchParams;
  const q = cleanLeadSearch(params.q ?? "");
  const range = ["today", "7", "30", "90"].includes(params.range ?? "") ? params.range! : "all";
  const status = LEAD_STATUSES.some(s => s === params.status) ? params.status! : "all";
  const requestedPage = Math.max(1, Math.min(100000, Math.floor(Number(params.page)) || 1));
  const makeQuery = () => {
    let query = supabase.from("leads").select("*", { count: "exact" });
    if (q) query = query.or(`name.ilike.%${q}%,email.ilike.%${q}%,company.ilike.%${q}%`);
    if (status !== "all") query = query.eq("status", status);
    const start = leadRangeStart(range);
    if (start) query = query.gte("created_at", start);
    return query.order("created_at", { ascending: false }).order("id");
  };
  let result = await makeQuery().range((requestedPage - 1) * 10, requestedPage * 10 - 1);
  const pages = Math.max(1, Math.ceil((result.count ?? 0) / 10));
  const page = Math.min(requestedPage, pages);
  if (page !== requestedPage) result = await makeQuery().range((page - 1) * 10, page * 10 - 1);
  const href = (value: number) => `/admin/leads?${new URLSearchParams({ q, range, status, page: String(value) })}`;
  const numbers = Array.from(new Set([1, ...[page - 1, page, page + 1].filter(p => p >= 1 && p <= pages), pages])).sort((a, b) => a - b);
  const arrow = (icon: string, target: number, disabled: boolean) => <Link key={icon} href={href(target)} aria-label={`${icon} page`} aria-disabled={disabled} tabIndex={disabled ? -1 : undefined} className={`flex size-8 items-center justify-center rounded-lg border border-[#f1f1f1] ${disabled ? "pointer-events-none opacity-40" : ""}`}><Image src={`/Admin/figma/${icon}.svg`} alt="" width={16} height={16} /></Link>;
  return <>
    <header className="mb-6"><h1 className="text-[26px] font-medium leading-[1.25] tracking-[0.2px] text-[#0f172a]">Manage Leads</h1><p className="mt-1 text-[15px] leading-6 text-[#667085]">View, track, and manage demo sign-ups effortlessly from your admin portal.</p></header>
    {result.error && <div className="mb-4"><Alert tone="error">Unable to load leads. Please try again.</Alert></div>}
    <section className="rounded-lg border border-[#e4e4e4] bg-white p-5">
      <LeadFilters q={q} range={range} status={status} />
      <LeadTable leads={(result.data ?? []) as Lead[]} />
      <div className="mt-2 flex flex-wrap items-center justify-between gap-4 text-[13px]">
        <nav aria-label="Lead pages" className="flex items-center gap-1">
          {arrow("first", 1, page === 1)}{arrow("prev", Math.max(1, page - 1), page === 1)}
          {numbers.map((number, i) => <span key={number} className="flex items-center gap-1">{i > 0 && number > numbers[i - 1] + 1 && <span className="px-2">…</span>}<Link href={href(number)} aria-current={number === page ? "page" : undefined} className={`flex size-8 items-center justify-center rounded-lg border border-[#f1f1f1] ${number === page ? "bg-[#18181b] text-white" : "text-[#333]"}`}>{number}</Link></span>)}
          {arrow("next", Math.min(pages, page + 1), page === pages)}{arrow("last", pages, page === pages)}
        </nav>
        <p className="text-[#727272]">{result.count ?? 0} leads · Page <span className="mx-2 inline-block rounded-lg border border-[#ddd] px-4 py-2 text-[#333]">{page}</span> of {pages}</p>
      </div>
    </section>
  </>;
}
