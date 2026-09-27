/** URL-safe slug: "Why Hiring an Ops Coordinator" → "why-hiring-an-ops-coordinator". */
export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

export type TocItem = { id: string; label: string };

/** The `## ` headings of a markdown body, with the ids the renderer uses. */
export function extractHeadings(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  const seen = new Map<string, number>();
  for (const line of markdown.split(/\r?\n/)) {
    const m = /^##\s+(.+?)\s*#*\s*$/.exec(line);
    if (!m) continue;
    const label = m[1].replace(/[*_`]/g, "");
    let id = slugify(label) || "section";
    const n = seen.get(id) ?? 0;
    seen.set(id, n + 1);
    if (n) id = `${id}-${n + 1}`;
    items.push({ id, label });
  }
  return items;
}

/** Plain-text preview of a markdown body for cards and meta descriptions. */
export function markdownExcerpt(markdown: string, max = 160) {
  const text = markdown
    .replace(/^#+\s.*$/gm, "")
    .replace(/[>*_`#\-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}
