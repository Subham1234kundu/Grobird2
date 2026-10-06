import "server-only";
import { GoogleAuth } from "google-auth-library";

type Report = { rows?: { dimensionValues?: { value: string }[]; metricValues?: { value: string }[] }[] };
export type AnalyticsReport = {
  available: boolean;
  message: string;
  total: number | null;
  daily: { date: string; value: number }[];
  sources: { label: string; value: number; percentage: number }[];
};

export async function getAnalyticsReport(): Promise<AnalyticsReport> {
  const unavailable = (message: string): AnalyticsReport => ({ available: false, message, total: null, daily: [], sources: [] });
  const property = process.env.GA_PROPERTY_ID;
  const email = process.env.GA_CLIENT_EMAIL;
  const key = process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!property || !/^\d+$/.test(property) || !email || !key) return unavailable("Connect Google Analytics reporting to view page views and traffic sources.");
  try {
    const auth = new GoogleAuth({ credentials: { client_email: email, private_key: key }, scopes: ["https://www.googleapis.com/auth/analytics.readonly"] });
    const client = await auth.getClient();
    const report = async (body: object) => {
      const response = await client.request<Report>({ url: `https://analyticsdata.googleapis.com/v1beta/properties/${property}:runReport`, method: "POST", data: body, timeout: 10000 });
      return response.data;
    };
    const [daily, sources, total] = await Promise.all([
      report({ dateRanges: [{ startDate: "13daysAgo", endDate: "today" }], dimensions: [{ name: "date" }], metrics: [{ name: "screenPageViews" }], orderBys: [{ dimension: { dimensionName: "date" } }] }),
      report({ dateRanges: [{ startDate: "29daysAgo", endDate: "today" }], dimensions: [{ name: "sessionDefaultChannelGroup" }], metrics: [{ name: "sessions" }] }),
      report({ dateRanges: [{ startDate: "2020-01-01", endDate: "today" }], metrics: [{ name: "screenPageViews" }] }),
    ]);
    const traffic = (sources.rows ?? []).map(row => ({ label: row.dimensionValues?.[0]?.value ?? "Unknown", value: Number(row.metricValues?.[0]?.value ?? 0) })).sort((a, b) => b.value - a.value);
    const sessions = traffic.reduce((sum, row) => sum + row.value, 0);
    return { available: true, message: "", total: Number(total.rows?.[0]?.metricValues?.[0]?.value ?? 0), daily: (daily.rows ?? []).map(row => ({ date: row.dimensionValues![0].value.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3"), value: Number(row.metricValues?.[0]?.value ?? 0) })), sources: traffic.slice(0, 3).map(row => ({ ...row, percentage: sessions ? Math.round(row.value / sessions * 100) : 0 })) };
  } catch {
    return unavailable("Google Analytics reports are unavailable. Check reporting access and try again.");
  }
}
