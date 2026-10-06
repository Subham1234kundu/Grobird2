"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Lead } from "@/lib/blog/types";
import { LEAD_STATUSES, statusLabel, statusColors } from "@/lib/admin/lead-options";
import { deleteLead, updateLead } from "@/app/admin/(dashboard)/leads/actions";
import { Alert, Button, EmptyState, inputClass } from "./ui";

const icon = (name: string, size: number) => <Image src={`/Admin/figma/${name}.svg`} width={size} height={size} alt="" aria-hidden />;

export default function LeadTable({ leads }: { leads: Lead[] }) {
  const router = useRouter();
  const [selected, setSelected] = useState<Lead | null>(null);
  const [deleting, setDeleting] = useState<Lead | null>(null);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();
  const [sort, setSort] = useState<{ key: "name" | "created_at" | "phone"; ascending: boolean } | null>(null);
  const rows = sort ? [...leads].sort((a, b) => String(a[sort.key] ?? "").localeCompare(String(b[sort.key] ?? "")) * (sort.ascending ? 1 : -1)) : leads;
  const run = (action: () => Promise<void>) => startTransition(async () => {
    setError("");
    try { await action(); setSelected(null); setDeleting(null); router.refresh(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Unable to save changes. Please try again."); }
  });
  return <>
    {error && <div className="mb-3"><Alert tone="error">{error}</Alert></div>}
    {!rows.length ? <EmptyState title="No leads found" body="Contact form submissions will appear here. Try adjusting your filters." /> :
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] table-fixed border-separate border-spacing-y-3 text-left text-[14px] leading-[21px]">
          <colgroup>{[17, 14, 17, 17, 12, 15, 8].map((width, i) => <col key={i} style={{ width: `${width}%` }} />)}</colgroup>
          <thead><tr>{["Lead Name", "Date", "Mobile Number", "Message", "Status", "Remark", "Actions"].map((heading, i) => <th key={heading} className="border-y border-[#e4e4e4] bg-[#f9f9f9] px-3 py-3 font-medium text-[#727272] first:rounded-l first:border-l last:rounded-r last:border-r">
            {i < 3 ? <button type="button" className="flex items-center gap-2" onClick={() => { const key = (["name", "created_at", "phone"] as const)[i]; setSort({ key, ascending: sort?.key === key ? !sort.ascending : true }); }} aria-label={`Sort by ${heading}`}>{heading}{icon("sort", 12)}</button> : heading}
          </th>)}</tr></thead>
          <tbody>{rows.map(lead => <tr key={lead.id}>
            <td className="lead-cell font-medium text-black"><button className="block w-full truncate text-left hover:underline" onClick={() => setSelected(lead)} title={lead.name}>{lead.name}</button></td>
            <td className="lead-cell">{new Date(lead.created_at).toLocaleDateString("en-GB", { timeZone: "Asia/Kolkata" }).replaceAll("/", "-")}</td>
            <td className="lead-cell"><a className="block truncate" href={lead.phone ? `tel:${lead.phone}` : `mailto:${lead.email}`} title={lead.phone ?? lead.email}>{lead.phone ?? "—"}</a></td>
            <td className="lead-cell"><button onClick={() => setSelected(lead)} className="block w-full truncate text-left" title={lead.message ?? lead.reason ?? ""}>{lead.message ?? lead.reason ?? "—"}</button></td>
            <td className="lead-cell"><span className={`inline-block whitespace-nowrap rounded-md px-2 py-1 text-[12px] leading-[14px] ${statusColors[lead.status] ?? statusColors.not_qualified}`}>{statusLabel(lead.status)}</span></td>
            <td className="lead-cell"><span className="block truncate" title={lead.remark ?? ""}>{lead.remark || "—"}</span></td>
            <td className="lead-cell"><div className="flex items-center justify-between gap-2"><button aria-label={`Delete ${lead.name}`} title="Delete lead" onClick={() => setDeleting(lead)} className="rounded p-1 hover:bg-red-50">{icon("trash", 16)}</button><button aria-label={`Edit ${lead.name}`} title="View and edit lead" onClick={() => setSelected(lead)} className="rounded hover:bg-gray-100">{icon("more", 24)}</button></div></td>
          </tr>)}</tbody>
        </table>
      </div>}
    {(selected || deleting) && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={() => { if (!pending) { setSelected(null); setDeleting(null); } }}>
      <section role="dialog" aria-modal="true" aria-labelledby="lead-dialog-title" className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-xl" onClick={e => e.stopPropagation()}>
        <h2 id="lead-dialog-title" className="text-lg font-semibold">{deleting ? "Delete this lead?" : selected?.name}</h2>
        {deleting ? <><p className="mt-3 text-sm text-[#727272]">The submission from {deleting.name} will be permanently deleted.</p><div className="mt-6 flex justify-end gap-3"><Button variant="secondary" disabled={pending} onClick={() => setDeleting(null)}>Cancel</Button><Button variant="danger" disabled={pending} onClick={() => run(() => deleteLead(deleting.id))}>{pending ? "Deleting…" : "Delete"}</Button></div></> : selected && <form action={data => run(() => updateLead(selected.id, data))} className="mt-4 space-y-4">
          <p className="text-sm text-[#727272]"><a href={`mailto:${selected.email}`}>{selected.email}</a>{selected.company && ` · ${selected.company}`}</p>
          <p className="whitespace-pre-wrap text-sm">{selected.message || selected.reason || "No message provided."}</p>
          <label className="block text-sm">Status<select name="status" defaultValue={selected.status} className={`${inputClass} mt-1`}>{LEAD_STATUSES.map(s => <option key={s} value={s}>{statusLabel(s)}</option>)}</select></label>
          <label className="block text-sm">Remark<textarea name="remark" defaultValue={selected.remark ?? ""} maxLength={2000} className={`${inputClass} mt-1 h-24 py-2`} /></label>
          {error && <Alert tone="error">{error}</Alert>}
          <div className="flex justify-end gap-3"><Button type="button" variant="secondary" disabled={pending} onClick={() => setSelected(null)}>Cancel</Button><Button disabled={pending}>{pending ? "Saving…" : "Save changes"}</Button></div>
        </form>}
      </section>
    </div>}
  </>;
}
