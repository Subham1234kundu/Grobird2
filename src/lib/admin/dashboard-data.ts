import "server-only";
import { requireUser } from "./auth";
import { getAnalyticsReport } from "./analytics";
import type { Lead } from "@/lib/blog/types";

export function indiaDate(date: Date) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}
export function percentageChange(current: number, previous: number) {
  return previous === 0 ? (current === 0 ? "0%" : "New") : `${current >= previous ? "+" : ""}${((current - previous) / previous * 100).toFixed(1)}%`;
}
export async function getDashboardData() {
  const { supabase } = await requireUser();
  const now = new Date();
  const dates = Array.from({ length: 14 }, (_, i) => indiaDate(new Date(now.getTime() - (13 - i) * 86400000)));
  const [recent, posts, analytics, days] = await Promise.all([
    supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(5),
    supabase.from("posts").select("id", { count: "exact", head: true }),
    getAnalyticsReport(),
    Promise.all(dates.map(async date => {
      const start = new Date(`${date}T00:00:00+05:30`);
      const end = new Date(start.getTime() + 86400000);
      const [leads, posts] = await Promise.all([
        supabase.from("leads").select("id", { count: "exact", head: true }).gte("created_at", start.toISOString()).lt("created_at", end.toISOString()),
        supabase.from("posts").select("id", { count: "exact", head: true }).gte("created_at", start.toISOString()).lt("created_at", end.toISOString()),
      ]);
      return { date, leads: leads.error ? null : leads.count ?? 0, posts: posts.error ? null : posts.count ?? 0 };
    })),
  ]);
  const databaseError = Boolean(recent.error || posts.error || days.some(day => day.leads === null || day.posts === null));
  return { recent: (recent.data ?? []) as Lead[], posts: posts.error ? null : posts.count ?? 0, analytics, days, databaseError };
}
