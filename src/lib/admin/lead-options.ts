export const LEAD_STATUSES = ["new", "contacted", "negotiation", "proposal_sent", "converted", "lost", "follow_up", "not_qualified", "reopened"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];
export const statusLabel = (status: string) => status.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
export const statusColors: Record<string, string> = {
  new: "bg-[#dbeafe] text-[#193cb8]", contacted: "bg-[#dcfce7] text-[#008236]",
  negotiation: "bg-[#ffedd5] text-[#9f2d00]", proposal_sent: "bg-[#ffdbcc] text-[#fe4b00]",
  converted: "bg-[#d0eddb] text-[#16a34a]", lost: "bg-[#fecaca] text-[#c40f0f]",
  follow_up: "bg-[#e0e7ff] text-[#818cf8]", not_qualified: "bg-[#f5f5f5] text-[#64748b]",
  reopened: "bg-[#cce3fc] text-[#2382db]",
};
