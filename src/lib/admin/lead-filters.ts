export function leadRangeStart(range: string, now = new Date()) {
  if (range === "today") {
    const day = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
    return new Date(`${day}T00:00:00+05:30`).toISOString();
  }
  return ["7", "30", "90"].includes(range) ? new Date(now.getTime() - Number(range) * 86400000).toISOString() : null;
}
export function cleanLeadSearch(value: string) {
  return value.replace(/[,%_().\\]/g, " ").trim().slice(0, 100);
}
