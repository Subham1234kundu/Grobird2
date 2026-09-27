import type { ComponentProps, ReactNode } from "react";

type Direction = "right" | "up-right" | "chevron-right";

const PATHS: Record<Direction, string> = {
  right: "M4 12h16m0 0-6-6m6 6-6 6",
  "up-right": "M7 17 17 7m0 0H8m9 0v9",
  "chevron-right": "m9 6 6 6-6 6",
};

/**
 * Inline SVG arrow. Text arrows such as "→" and "↗" fall back to the
 * device font and render as a different glyph on iPhones, so every arrow
 * on the site is drawn with this icon instead. It takes its colour from
 * `currentColor` and its size from a `size-*` class.
 */
export default function ArrowIcon({
  direction = "right",
  className = "size-4",
  ...props
}: ComponentProps<"svg"> & { direction?: Direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      className={`shrink-0 ${className}`}
      {...props}
    >
      <path d={PATHS[direction]} />
    </svg>
  );
}

/** "14 min → under 30 sec" with the arrow drawn as an icon. */
export function renderWithArrows(text: string): ReactNode {
  const parts = text.split("→");
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <span key={i}>
      {i > 0 && (
        <ArrowIcon
          direction="right"
          className="mx-1 inline size-[0.85em] align-[-0.1em]"
        />
      )}
      {part.trim()}
    </span>
  ));
}
