"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { LEAD_STATUSES, statusLabel } from "@/lib/admin/lead-options";

export default function LeadFilters({ q, range, status }: { q: string; range: string; status: string }) {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => { if (input.current && document.activeElement !== input.current) input.current.value = q; }, [q]);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const change = (key: string, value: string) => { if (timer.current) clearTimeout(timer.current); const params = new URLSearchParams({ q: input.current?.value ?? q, range, status }); params.set(key, value); router.replace(`/admin/leads?${params}`, { scroll: false }); };
  return <div className="mb-1 flex flex-wrap items-center gap-3">
    <label className="relative mr-auto block w-full sm:w-[360px]"><span className="sr-only">Search leads</span><Image src="/Admin/figma/search.svg" alt="" width={20} height={20} className="absolute top-3 left-3" aria-hidden /><input ref={input} defaultValue={q} onChange={e => { const value = e.target.value; if (timer.current) clearTimeout(timer.current); timer.current = setTimeout(() => change("q", value), 350); }} placeholder="Search for Lead Name" className="h-[42px] w-full rounded border border-[#afafaf] pr-3 pl-11 text-sm outline-none focus:border-black" /></label>
    <label><span className="sr-only">Filter lead status</span><select value={status} onChange={e => change("status", e.target.value)} className="h-10 rounded-md border border-[#e4e4e4] px-2 text-[13px] text-[#717171]"><option value="all">All statuses</option>{LEAD_STATUSES.map(s => <option key={s} value={s}>{statusLabel(s)}</option>)}</select></label>
    <label className="flex h-10 items-center gap-2 rounded-md border border-[#e4e4e4] px-3"><Image src="/Admin/figma/calendar.svg" alt="" width={16} height={16} aria-hidden /><span className="sr-only">Select date range</span><select value={range} onChange={e => change("range", e.target.value)} className="bg-transparent text-[14px] text-[#717171] outline-none"><option value="all">Select Date Range</option><option value="today">Today</option><option value="7">Last 7 days</option><option value="30">Last 30 days</option><option value="90">Last 90 days</option></select></label>
    <a href={`/admin/leads/export?${new URLSearchParams({ q, range, status })}`} className="flex h-10 items-center gap-2 rounded-md border border-[#e4e4e4] px-3 text-[14px] text-[#717171]"><Image src="/Admin/figma/download.svg" alt="" width={16} height={16} aria-hidden />Export</a>
  </div>;
}
