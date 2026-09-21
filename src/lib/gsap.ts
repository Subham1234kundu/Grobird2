import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";

// Registering is idempotent, but it must happen on the client only —
// ScrollTrigger touches window/document at registration time.
if (typeof window !== "undefined") {
  gsap.registerPlugin(
    ScrollTrigger,
    SplitText,
    MotionPathPlugin,
    DrawSVGPlugin,
    useGSAP,
  );
}

/**
 * Splits a text block into masked words and reveals them bottom-to-top,
 * one after another, as it scrolls into view (the anveril.com-style
 * description reveal). Call from inside a `useGSAP` scope so the split
 * and its ScrollTrigger are auto-reverted on unmount.
 */
export function splitWordsReveal(
  target: gsap.DOMTarget,
  opts: { start?: string; stagger?: number; duration?: number } = {},
) {
  return SplitText.create(target, {
    type: "words",
    mask: "words",
    onSplit(self) {
      gsap.set(target, { opacity: 1 });
      return gsap.from(self.words, {
        yPercent: 115,
        opacity: 0,
        duration: opts.duration ?? 0.7,
        ease: "power3.out",
        stagger: opts.stagger ?? 0.035,
        scrollTrigger: {
          trigger: target,
          start: opts.start ?? "top 85%",
        },
      });
    },
  });
}

/**
 * Numbered list rows (the "01. / question / answer" pattern) climb into
 * place from well below the fold as each one enters, so they arrive in
 * sequence rather than all at once. Pass a selector for the rows; any
 * `.row-cell` descendants stagger in just behind their row.
 */
export function rowsRiseReveal(
  rows: string,
  opts: { cells?: string } = {},
) {
  gsap.utils.toArray<HTMLElement>(rows).forEach((row) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: "top 95%",
        end: "top 55%",
        scrub: 0.8,
      },
    });

    tl.fromTo(
      row,
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out" },
    );

    const cells = row.querySelectorAll(opts.cells ?? ".row-cell");
    if (cells.length) {
      tl.fromTo(
        cells,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out", stagger: 0.12 },
        0.15,
      );
    }
  });
}

/**
 * Card grids glide in horizontally from the left, one after another, so
 * the eye reads them in order. Used across the service pages for the
 * "four phases"-style rows of cards.
 */
export function cardsSlideReveal(
  cards: gsap.DOMTarget,
  opts: { trigger?: Element | null; start?: string; stagger?: number } = {},
) {
  return gsap.fromTo(
    cards,
    { x: -90, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.1,
      ease: "power2.out",
      stagger: opts.stagger ?? 0.28,
      scrollTrigger: {
        trigger: opts.trigger ?? (cards as Element),
        start: opts.start ?? "top 70%",
      },
    },
  );
}

/**
 * Glass/feature cards lift out of a slight backward tilt as each enters,
 * with their inner `.card-cell` content arriving just behind them.
 */
export function cardsLiftReveal(
  cards: string,
  opts: { cells?: string; stagger?: number; start?: string } = {},
) {
  gsap.utils.toArray<HTMLElement>(cards).forEach((card, i) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: card, start: opts.start ?? "top 88%" },
      delay: i * (opts.stagger ?? 0.18),
    });

    tl.fromTo(
      card,
      { y: 70, opacity: 0, rotateX: -12, transformPerspective: 800 },
      { y: 0, opacity: 1, rotateX: 0, duration: 0.9, ease: "power3.out" },
    );

    const cells = card.querySelectorAll(opts.cells ?? ".card-cell");
    if (cells.length) {
      tl.fromTo(
        cells,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.1 },
        0.25,
      );
    }
  });
}

/**
 * Big "01 / 02 / …" numerals land first — oversized and faint, shrinking
 * to their resting size as the row arrives — while the rest of the row's
 * content assembles around them. The numeral leads, the group follows,
 * so each entry reads as one composed movement rather than a uniform
 * fade. Pass `.step-number` / `.step-cell` markers inside each row.
 */
export function numberedStepsReveal(
  rows: string,
  opts: { number?: string; cells?: string; stagger?: number } = {},
) {
  gsap.utils.toArray<HTMLElement>(rows).forEach((row, i) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: row, start: "top 85%" },
      delay: i * (opts.stagger ?? 0.12),
    });

    tl.fromTo(
      row,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    );

    const numeral = row.querySelectorAll(opts.number ?? ".step-number");
    if (numeral.length) {
      tl.fromTo(
        numeral,
        { scale: 2.4, opacity: 0, filter: "blur(6px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "expo.out",
          transformOrigin: "left center",
        },
        0.05,
      );
    }

    const cells = row.querySelectorAll(opts.cells ?? ".step-cell");
    if (cells.length) {
      tl.fromTo(
        cells,
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.09 },
        0.3,
      );
    }
  });
}

/**
 * Counts stat figures up from zero as they scroll in, keeping whatever
 * prefix/suffix the label carries ("70%", "99.9%", "0×", "~12 hrs").
 * The decimal precision of the written value is preserved, so "99.9%"
 * ticks through one decimal place and "70%" stays whole.
 */
export function countUpReveal(
  targets: string,
  opts: { duration?: number; stagger?: number; start?: string } = {},
) {
  gsap.utils.toArray<HTMLElement>(targets).forEach((el, i) => {
    // The tween rewrites textContent, so the written figure is only the
    // real target on the first pass. Cache it — useGSAP re-runs this in
    // React Strict Mode, and re-reading would parse the counted-down
    // value as the new destination.
    const raw = (el.dataset.countTo ??= el.textContent ?? "");
    const match = raw.match(/-?\d+(?:\.\d+)?/);
    if (!match) return;

    const end = parseFloat(match[0]);
    const decimals = (match[0].split(".")[1] ?? "").length;
    const prefix = raw.slice(0, match.index);
    const suffix = raw.slice((match.index ?? 0) + match[0].length);
    const counter = { value: 0 };

    gsap.to(counter, {
      value: end,
      duration: opts.duration ?? 1.6,
      ease: "power2.out",
      delay: i * (opts.stagger ?? 0.12),
      scrollTrigger: { trigger: el, start: opts.start ?? "top 90%" },
      onUpdate: () => {
        el.textContent = prefix + counter.value.toFixed(decimals) + suffix;
      },
    });
  });
}

/**
 * Reveals a headline one line at a time, each line sliding up from behind
 * a mask so the lines appear to rise into place.
 */
export function headlineLinesReveal(
  target: gsap.DOMTarget,
  opts: { start?: string; stagger?: number } = {},
) {
  return SplitText.create(target, {
    type: "lines",
    mask: "lines",
    onSplit(self) {
      gsap.set(target, { opacity: 1 });
      return gsap.from(self.lines, {
        yPercent: 120,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: opts.stagger ?? 0.12,
        scrollTrigger: {
          trigger: target,
          start: opts.start ?? "top 85%",
        },
      });
    },
  });
}

/**
 * Drifts a decorative background layer slower than the page so it sits
 * visually behind the content. The element should be inset past its
 * container's edges so the drift never exposes a seam.
 */
export function parallaxLayer(
  target: gsap.DOMTarget,
  opts: { trigger?: Element | null; amount?: number } = {},
) {
  const amount = opts.amount ?? 6;
  return gsap.fromTo(
    target,
    { yPercent: -amount },
    {
      yPercent: amount,
      ease: "none",
      scrollTrigger: {
        trigger: opts.trigger ?? (target as Element),
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    },
  );
}

export {
  gsap,
  ScrollTrigger,
  SplitText,
  MotionPathPlugin,
  DrawSVGPlugin,
  useGSAP,
};
