import { useId } from "react";
import { EmptyState } from "./ui";

export function Sparkline({ values, negative = false }: { values: number[]; negative?: boolean }) {
  const id = useId().replaceAll(":", "");
  const max = Math.max(1, ...values);
  const points = values.map((value, i) => `${i / Math.max(1, values.length - 1) * 400},${145 - value / max * 125}`);
  const color = negative ? "#ff5364" : "#00ae6a";
  return <svg viewBox="0 0 400 160" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[130px] w-full" role="img" aria-label={`Daily values: ${values.join(", ")}`}><defs><pattern id={id} width="4" height="160" patternUnits="userSpaceOnUse"><path d="M0 0V160" stroke={color} strokeWidth="1" opacity=".35" /></pattern></defs><polygon points={`0,160 ${points.join(" ")} 400,160`} fill={`url(#${id})`} /><polyline points={points.join(" ")} stroke={color} strokeWidth="2.5" fill="none" vectorEffect="non-scaling-stroke" /></svg>;
}

export function PageViewsChart({ days, available, message }: { days: { date: string; value: number }[]; available: boolean; message: string }) {
  const max = Math.max(4, ...days.map(day => day.value));
  const top = Math.ceil(max / 4) * 4;
  return <section className="min-h-[400px] rounded-xl border border-[#e4e4e4] bg-white p-5"><h2 className="text-[18px] font-medium text-black/70">Page Views</h2>
    {!available ? <EmptyState title="Analytics unavailable" body={message} /> : <>
      <p className="mt-1 text-xs text-[#8a8a92]">Last 14 days</p>
      <svg viewBox="0 0 720 310" className="mt-5 w-full" role="img" aria-label="Daily page views for the last 14 days">
        {[0, 1, 2, 3, 4].map(i => <g key={i}><text x="35" y={262 - i * 58} textAnchor="end" fill="#727272" fontSize="12">{top * i / 4}</text><line x1="46" x2="705" y1={258 - i * 58} y2={258 - i * 58} stroke="#ecebff" /></g>)}
        {days.map((day, i) => { const x = 55 + i * 46; const height = day.value / top * 232; return <g key={day.date}><title>{`${day.date}: ${day.value} views`}</title><rect x={x} y={258 - height} width="24" height={height} rx="5" fill="#ffbe73" /><text x={x + 12} y="288" textAnchor="middle" fill="#727272" fontSize="11">{new Date(day.date + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</text></g>; })}
      </svg>
      {days.every(day => day.value === 0) && <p className="text-center text-sm text-[#727272]">No recorded page views during this period.</p>}
    </>}
  </section>;
}

export function TrafficSources({ sources, available, message }: { sources: { label: string; percentage: number; value: number }[]; available: boolean; message: string }) {
  const colors = ["#ffa33b", "#8580e4", "#39bfda"];
  return <section className="min-h-[400px] rounded-xl border border-[#e4e4e4] bg-white p-5"><h2 className="text-[18px] font-medium text-black/70">Top Traffic Sources</h2><p className="mt-1 text-xs text-[#8a8a92]">Share of sessions · Last 30 days</p>
    {!available ? <EmptyState title="Analytics unavailable" body={message} /> : !sources.length ? <EmptyState title="No traffic yet" body="Traffic sources will appear once Google Analytics records sessions." /> : <div className="relative mx-auto mt-7 h-[270px] w-[304px] max-w-full">{sources.map((source, i) => <div key={source.label} className={`absolute flex flex-col items-center justify-center rounded-full border-4 border-white px-3 text-center text-white outline outline-1 outline-offset-2 ${i === 0 ? "top-[40px] right-0 size-[174px]" : i === 1 ? "top-0 left-[49px] size-[107px]" : "top-[140px] left-0 size-[126px]"}`} style={{ backgroundColor: colors[i], outlineColor: colors[i] }} title={`${source.value} sessions`}><span className={i === 0 ? "text-[32px]" : "text-[22px]"}>{source.percentage}%</span><span className="text-[14px] leading-5">{source.label}</span></div>)}</div>}
  </section>;
}
