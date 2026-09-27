import Image from "next/image";
import Link from "next/link";
import { Badge, ButtonLink, Card, EmptyState, PageHeader } from "@/components/admin/ui";
import { requireUser } from "@/lib/admin/auth";
import { formatPostDate, type Lead, type Post } from "@/lib/blog/types";

type Stat = { label: string; value: number; icon: string; href: string };

/** ISO timestamp for "one week ago", evaluated per request. */
function weekAgoIso() {
  const d = new Date();
  d.setDate(d.getDate() - 7);
  return d.toISOString();
}

export default async function DashboardPage() {
  const { supabase } = await requireUser();
  const weekAgo = weekAgoIso();

  const [posts, published, leads, weekLeads, recentPosts, recentLeads] =
    await Promise.all([
      supabase.from("posts").select("id", { count: "exact", head: true }),
      supabase
        .from("posts")
        .select("id", { count: "exact", head: true })
        .eq("published", true),
      supabase.from("leads").select("id", { count: "exact", head: true }),
      supabase
        .from("leads")
        .select("id", { count: "exact", head: true })
        .gte("created_at", weekAgo),
      supabase
        .from("posts")
        .select("id,title,slug,published,published_at,updated_at,category")
        .order("updated_at", { ascending: false })
        .limit(5),
      supabase
        .from("leads")
        .select("id,name,email,company,reason,status,created_at")
        .order("created_at", { ascending: false })
        .limit(5),
    ]);

  const dbError =
    posts.error?.message ?? leads.error?.message ?? recentPosts.error?.message;

  const stats: Stat[] = [
    { label: "Blog posts", value: posts.count ?? 0, icon: "/Admin/dashboardImage/pressRelease.png", href: "/admin/blogs" },
    { label: "Published", value: published.count ?? 0, icon: "/Admin/dashboardImage/dashboard.png", href: "/admin/blogs" },
    { label: "Leads", value: leads.count ?? 0, icon: "/Admin/dashboardImage/lead.png", href: "/admin/leads" },
    { label: "Leads this week", value: weekLeads.count ?? 0, icon: "/Admin/dashboardImage/calender.png", href: "/admin/leads" },
  ];

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="What's happening across the GroBird site."
        action={<ButtonLink href="/admin/blogs/new">+ New post</ButtonLink>}
      />

      {dbError && (
        <div className="mb-6 rounded-lg border border-[#ffd9c4] bg-[#fff7f2] px-4 py-3 text-sm text-[#9a4a1c]">
          The database tables are not reachable yet ({dbError}). Run{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs">
            supabase/schema.sql
          </code>{" "}
          in the Supabase SQL editor to create them.
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="flex items-center gap-4 rounded-xl border border-[#e8e8eb] bg-white p-5 transition-colors hover:border-[#ff884c]/60"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#ff884c]/12">
              <Image src={s.icon} alt="" width={22} height={22} className="opacity-80" aria-hidden />
            </span>
            <div>
              <p className="font-sora text-[26px] leading-none font-semibold text-[#111]">
                {s.value}
              </p>
              <p className="mt-1 text-[12px] text-[#8a8a92]">{s.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card
          title="Recent leads"
          action={
            <Link href="/admin/leads" className="text-sm font-medium text-[#c9531a] hover:underline">
              View all
            </Link>
          }
        >
          {(recentLeads.data as Lead[] | null)?.length ? (
            <ul className="divide-y divide-[#eeeef0]">
              {(recentLeads.data as Lead[]).map((lead) => (
                <li key={lead.id} className="flex items-center gap-4 px-5 py-3.5">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-[#111]">
                      {lead.name}
                      {lead.company && (
                        <span className="font-normal text-[#8a8a92]"> · {lead.company}</span>
                      )}
                    </p>
                    <p className="truncate text-[12px] text-[#8a8a92]">
                      {lead.email}
                      {lead.reason ? ` · ${lead.reason}` : ""}
                    </p>
                  </div>
                  <Badge tone={lead.status === "new" ? "brand" : "neutral"}>{lead.status}</Badge>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="No leads yet"
              body="Submissions from the contact and schedule-a-call forms will show up here."
            />
          )}
        </Card>

        <Card
          title="Recently edited posts"
          action={
            <Link href="/admin/blogs" className="text-sm font-medium text-[#c9531a] hover:underline">
              Manage blogs
            </Link>
          }
        >
          {(recentPosts.data as Post[] | null)?.length ? (
            <ul className="divide-y divide-[#eeeef0]">
              {(recentPosts.data as Post[]).map((post) => (
                <li key={post.id} className="flex items-center gap-4 px-5 py-3.5">
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/admin/blogs/${post.id}`}
                      className="block truncate text-sm font-medium text-[#111] hover:text-[#c9531a]"
                    >
                      {post.title}
                    </Link>
                    <p className="text-[12px] text-[#8a8a92]">
                      {post.category}
                      {post.published_at ? ` · ${formatPostDate(post.published_at)}` : ""}
                    </p>
                  </div>
                  <Badge tone={post.published ? "success" : "warning"}>
                    {post.published ? "Published" : "Draft"}
                  </Badge>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="No posts yet"
              body="Write your first article and it will appear on the public blog."
              action={<ButtonLink href="/admin/blogs/new">Write a post</ButtonLink>}
            />
          )}
        </Card>
      </div>
    </>
  );
}
