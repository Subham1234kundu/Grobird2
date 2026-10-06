import Link from "next/link";
import LeadTable from "@/components/admin/LeadTable";
import { Sparkline, PageViewsChart, TrafficSources } from "@/components/admin/DashboardCharts";
import { Alert } from "@/components/admin/ui";
import { getDashboardData, percentageChange } from "@/lib/admin/dashboard-data";

export default async function DashboardPage() {
  const data = await getDashboardData();
  const sum = (values: number[]) => values.reduce((total, value) => total + value, 0);
  const leadValues = data.days.map(day => day.leads ?? 0);
  const postValues = data.days.map(day => day.posts ?? 0);
  const viewValues = data.days.map(day => data.analytics.daily.find(row => row.date === day.date)?.value ?? 0);
  const metrics = [
    { title: "New Leads Today", value: data.databaseError ? null : data.days.at(-1)?.leads, values: leadValues, href: "/admin/leads" },
    { title: "Total Blog Posts", value: data.posts, values: postValues, href: "/admin/blogs" },
    { title: "Total Page Views", value: data.analytics.total, values: viewValues, href: "/admin/analytics" },
  ];
  return <>
    <header className="mb-6"><h1 className="text-[26px] font-medium leading-[1.25] tracking-[0.2px] text-[#0f172a]">Analytics Dashboard</h1><p className="mt-1 text-[15px] leading-6 text-[#313336]">Unlock Actionable Insights: Track Performance and Boost Customer Engagement.</p></header>
    {data.databaseError && <div className="mb-4"><Alert tone="error">Some database values could not be loaded. Please try again.</Alert></div>}
    <div className="grid gap-4 md:grid-cols-3">{metrics.map(metric => {
      const current = sum(metric.values.slice(7));
      const previous = sum(metric.values.slice(0, 7));
      const negative = current < previous;
      return <Link key={metric.title} href={metric.href} className="relative h-[200px] overflow-hidden rounded-xl border-[1.5px] border-[#dcdcdc] bg-white p-[17px]">
        {metric.value != null && <Sparkline values={metric.values} negative={negative} />}
        <div className="relative z-10"><h2 className="text-[18px] font-medium tracking-[-0.14px] text-black/70">{metric.title}</h2><p className="mt-2 text-[32px] font-medium leading-10">{metric.value == null ? "—" : metric.value.toLocaleString("en-IN")}</p>
          {metric.value == null ? <p className="mt-3 text-xs text-[#727272]">Reporting unavailable</p> : <span className={`mt-3 inline-flex rounded px-1 py-0.5 text-[12px] ${negative ? "bg-[#f4cece] text-[#c40f0f]" : "bg-[#e0f0e4] text-[#06a561]"}`}>{negative ? "↓" : "↑"} {percentageChange(current, previous)} · vs Last 7 days</span>}
        </div>
      </Link>;
    })}</div>
    <section className="mt-6 rounded-lg border border-[#e4e4e4] bg-white p-5"><div className="mb-1 flex items-center justify-between"><h2 className="text-[18px] font-medium text-black/70">Top Recent Leads</h2><Link href="/admin/leads" className="text-[13px] text-[#727272] hover:underline">View all</Link></div><LeadTable leads={data.recent} /></section>
    <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.82fr)_minmax(340px,1fr)]"><PageViewsChart days={data.days.map((day, i) => ({ date: day.date, value: viewValues[i] }))} available={data.analytics.available} message={data.analytics.message} /><TrafficSources sources={data.analytics.sources} available={data.analytics.available} message={data.analytics.message} /></div>
  </>;
}
