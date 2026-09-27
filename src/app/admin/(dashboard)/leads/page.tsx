import Image from "next/image";
import DeleteButton from "@/components/admin/DeleteButton";
import { Alert, Badge, Button, ButtonLink, Card, EmptyState, PageHeader, inputClass } from "@/components/admin/ui";
import { requireUser } from "@/lib/admin/auth";
import type { Lead } from "@/lib/blog/types";
import { deleteLead, setLeadStatus } from "./actions";

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; status?: string }>;
}) {
  const { supabase } = await requireUser();
  const { q = "", status = "all" } = await searchParams;

  let query = supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });
  if (q) {
    query = query.or(
      `name.ilike.%${q}%,email.ilike.%${q}%,company.ilike.%${q}%`,
    );
  }
  if (status !== "all") query = query.eq("status", status);

  const { data, error } = await query;
  const leads = (data ?? []) as Lead[];

  return (
    <>
      <PageHeader
        title="Leads"
        description="Every submission from the contact and schedule-a-call forms."
        action={
          <ButtonLink href="/admin/leads/export" variant="secondary" prefetch={false}>
            <Image src="/Admin/dashboardImage/export.png" alt="" width={16} height={16} className="opacity-70" aria-hidden />
            Export CSV
          </ButtonLink>
        }
      />

      {error && <div className="mb-5"><Alert tone="error">{error.message}</Alert></div>}

      <Card>
        <form className="flex flex-col gap-3 border-b border-[#eeeef0] p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Image
              src="/Admin/dashboardImage/search.png"
              alt=""
              width={18}
              height={18}
              className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 opacity-70"
              aria-hidden
            />
            <input name="q" defaultValue={q} placeholder="Search name, email or company" className={`${inputClass} pl-10`} />
          </div>
          <select name="status" defaultValue={status} className={`${inputClass} sm:w-44`}>
            <option value="all">All leads</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
          </select>
          <Button type="submit" variant="secondary">Filter</Button>
        </form>

        {leads.length === 0 ? (
          <EmptyState
            title={q || status !== "all" ? "No leads match" : "No leads yet"}
            body="Submissions from the site's contact forms will appear here as soon as they arrive."
          />
        ) : (
          <ul className="divide-y divide-[#eeeef0]">
            {leads.map((lead) => (
              <li key={lead.id} className="grid gap-3 px-5 py-4 lg:grid-cols-[1fr_1fr_auto] lg:items-start">
                <div className="min-w-0">
                  <p className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#111]">
                    {lead.name}
                    <Badge tone={lead.status === "new" ? "brand" : "neutral"}>{lead.status}</Badge>
                    <Badge tone="neutral">{lead.source}</Badge>
                  </p>
                  <p className="mt-1 text-[13px] text-[#5b5b63]">
                    <a href={`mailto:${lead.email}`} className="hover:text-[#c9531a]">{lead.email}</a>
                    {lead.phone && <> · <a href={`tel:${lead.phone}`} className="hover:text-[#c9531a]">{lead.phone}</a></>}
                    {lead.company && <> · {lead.company}</>}
                  </p>
                  <p className="mt-1 text-[11px] text-[#a0a0a5]">{formatDateTime(lead.created_at)}</p>
                </div>
                <div className="min-w-0 text-[13px] text-[#5b5b63]">
                  {lead.reason && <p className="font-medium text-[#111]">{lead.reason}</p>}
                  {lead.message ? (
                    <p className="mt-1 whitespace-pre-line">{lead.message}</p>
                  ) : (
                    <p className="mt-1 text-[#a0a0a5]">No message.</p>
                  )}
                </div>
                <div className="flex items-center gap-1 lg:justify-end">
                  <form action={setLeadStatus.bind(null, lead.id, lead.status === "new" ? "contacted" : "new")}>
                    <button type="submit" className="rounded-md px-2 py-1 text-[12px] font-medium text-[#5b5b63] hover:bg-[#f0f0f2]">
                      {lead.status === "new" ? "Mark contacted" : "Mark new"}
                    </button>
                  </form>
                  <DeleteButton
                    compact
                    title="Delete this lead?"
                    body={`The submission from ${lead.name} will be removed permanently.`}
                    onConfirm={deleteLead.bind(null, lead.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </>
  );
}
