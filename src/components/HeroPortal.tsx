"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

// All coordinates live in the 720x850 space of /landing/hero/base.png so the
// scene scales with the wireframe.
const W = 720;
const H = 850;
const GREEN = "#2ed52e";
const RED = "#ee2020";

const PLATE = { x: 335, y: 535 };
const NECK = { x: 324, y: 455 };
const BOTTOM = { cx: 337, cy: 770, rx: 118, ry: 58 };

type Logo = { file: string; w: number; h: number; x: number; y: number };

// Hover spots at the funnel mouth, mirroring the original illustration layout.
const LOGOS: Logo[] = [
  { file: "logo1.png", w: 87, h: 91, x: 140, y: 240 },
  { file: "logo2.png", w: 82, h: 49, x: 202, y: 190 },
  { file: "logo3.png", w: 91, h: 95, x: 237, y: 135 },
  { file: "logo4.png", w: 95, h: 95, x: 328, y: 110 },
  { file: "logo5.png", w: 92, h: 92, x: 295, y: 185 },
  { file: "logo6.png", w: 92, h: 86, x: 370, y: 150 },
  { file: "logo7.png", w: 67, h: 67, x: 432, y: 122 },
  { file: "logo8.png", w: 67, h: 64, x: 240, y: 252 },
  { file: "logo9.png", w: 92, h: 92, x: 320, y: 262 },
  { file: "logo10.png", w: 70, h: 67, x: 383, y: 205 },
  { file: "logo11.png", w: 58, h: 64, x: 476, y: 182 },
  { file: "logo12.png", w: 67, h: 64, x: 440, y: 255 },
  { file: "logo13.png", w: 56, h: 52, x: 272, y: 315 },
  { file: "logo14.png", w: 82, h: 80, x: 368, y: 316 },
];

const REVS = [
  { file: "logo15rev.png", w: 88, h: 88 },
  { file: "logo16rev.png", w: 84, h: 76 },
  { file: "logo17rev.png", w: 90, h: 92 },
];

const LOGO_BOX = 50;
const REV_BOX = 56;
const RED_REV_COUNT = 7;

function fit(w: number, h: number, box: number) {
  const s = box / Math.max(w, h);
  return { w: w * s, h: h * s };
}

// Deterministic pseudo-random so the server and client render identical paths.
const seeded = (n: number) => {
  const x = Math.sin(n * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

type Pt = { x: number; y: number };

// Catmull-Rom → cubic bezier so the sampled wave reads as one smooth stroke.
function smoothPath(pts: Pt[]) {
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(i + 2, pts.length - 1)];
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    d += ` C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}, ${c2.x.toFixed(1)} ${c2.y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

// Rays start above the funnel mouth, ripple down its wall into the plate,
// then fan out beneath it to the bottom ring. The sine wobble fades as each
// ray converges. Every path is authored top→bottom; the "up" flow simply
// draws the comet from the other end.
const TOP_RAYS = Array.from({ length: 14 }, (_, i) => {
  const dx0 = -205 + i * 31.5;
  const y0 = 40 + Math.abs(dx0) * 0.5;
  const amp = 12 + seeded(i) * 12;
  const freq = 1.4 + seeded(i + 40) * 1.2;
  const phase = seeded(i + 80) * Math.PI * 2;
  const pts: Pt[] = [];
  for (let s = 0; s <= 40; s++) {
    const t = s / 40;
    const shrink = Math.pow(1 - t, 1.7);
    const wave = Math.sin(t * Math.PI * 2 * freq + phase) * amp * (1 - t * 0.85);
    pts.push({
      x: NECK.x + dx0 * shrink + wave,
      y: y0 + (PLATE.y - 22 - y0) * t,
    });
  }
  return smoothPath(pts);
});

const BOTTOM_RAYS = Array.from({ length: 11 }, (_, i) => {
  const dx1 = -118 + i * 23.6;
  const yEnd = BOTTOM.cy + Math.sqrt(Math.max(0, 1 - (dx1 / 128) ** 2)) * 72;
  const amp = 8 + seeded(i + 120) * 10;
  const freq = 1.2 + seeded(i + 160) * 1;
  const phase = seeded(i + 200) * Math.PI * 2;
  const pts: Pt[] = [];
  for (let s = 0; s <= 30; s++) {
    const t = s / 30;
    const wave = Math.sin(t * Math.PI * 2 * freq + phase) * amp * t;
    pts.push({
      x: PLATE.x + dx1 * Math.pow(t, 1.25) + wave,
      y: PLATE.y + 34 + (yEnd - PLATE.y - 34) * t,
    });
  }
  return smoothPath(pts);
});

function ringSlot(i: number, count: number) {
  const a = Math.PI * (0.1 + (i / (count - 1)) * 0.8);
  return {
    x: BOTTOM.cx + Math.cos(a) * BOTTOM.rx,
    y: BOTTOM.cy + Math.sin(a) * BOTTOM.ry * 0.9,
  };
}

const flowVars = (ease: string) => ({
  duration: gsap.utils.random(1.6, 2.8),
  delay: gsap.utils.random(0, 2.4),
  repeat: -1,
  repeatDelay: gsap.utils.random(0.15, 0.9),
  ease,
});

export default function HeroPortal() {
  const root = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = root.current;
      if (!svg) return;
      const q = gsap.utils.selector(svg);
      const section = svg.closest("section") ?? svg;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const greenLoops: gsap.core.Timeline[] = [];
        const redLoops: gsap.core.Timeline[] = [];
        const ring = q(".portal-ring")[0];
        const glow = q(".plate-glow")[0];
        gsap.set(ring, { svgOrigin: `${PLATE.x} ${PLATE.y}`, opacity: 0 });

        const pulse = () => {
          gsap.fromTo(
            ring,
            { scale: 0.2, opacity: 1 },
            { scale: 2.2, opacity: 0, duration: 0.8, ease: "power3.out", overwrite: true },
          );
          gsap.fromTo(
            glow,
            { opacity: 1.6 },
            { opacity: 1, duration: 0.6, ease: "power2.out", overwrite: true },
          );
        };

        // Green state: integrations dive into the plate, products drop out.
        q<SVGGElement>(".logo").forEach((el, i) => {
          const p = LOGOS[i];
          const rev = q(`.rev-${i}`)[0];
          const slot = ringSlot(i, LOGOS.length);
          gsap.set(el, { x: p.x, y: p.y, opacity: 0, scale: 0.6 });

          const revDrop = gsap
            .timeline({ paused: true })
            .fromTo(
              rev,
              { x: PLATE.x, y: PLATE.y + 40, opacity: 0, scale: 0.2 },
              { x: slot.x, y: slot.y, opacity: 1, scale: 1, duration: 0.55, ease: "power3.out" },
            )
            .to(rev, { opacity: 0, scale: 0.8, duration: 0.35, ease: "power1.in" }, "+=0.5");

          const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 0.25,
            delay: (i * 0.37) % 3.4,
          });
          tl.to(el, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)" })
            .to(el, {
              y: p.y - 7,
              duration: 0.8 + (i % 5) * 0.2,
              yoyo: true,
              repeat: 1,
              ease: "sine.inOut",
            })
            .to(el, {
              motionPath: {
                path: [
                  { x: p.x, y: p.y },
                  { x: p.x * 0.35 + NECK.x * 0.65, y: 380 },
                  NECK,
                  PLATE,
                ],
                curviness: 1.1,
              },
              scale: 0.08,
              rotation: p.x < NECK.x ? -30 : 30,
              duration: 0.42,
              ease: "expo.in",
            })
            .to(el, { opacity: 0, duration: 0.1 }, "-=0.1")
            .call(() => {
              pulse();
              revDrop.restart();
            })
            .set(el, { x: p.x, y: p.y, scale: 0.6, rotation: 0 });
          greenLoops.push(tl);
        });

        // Red state: products on the ring get pulled back up into the plate.
        q<SVGGElement>(".rev-up").forEach((el, j) => {
          const slot = ringSlot(j, RED_REV_COUNT);
          gsap.set(el, { x: slot.x, y: slot.y, opacity: 0, scale: 0.6 });

          const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 0.3,
            delay: (j * 0.43) % 3.2,
            paused: true,
          });
          tl.to(el, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)" })
            .to(el, {
              y: slot.y - 6,
              duration: 0.9 + (j % 4) * 0.2,
              yoyo: true,
              repeat: 1,
              ease: "sine.inOut",
            })
            .to(el, {
              motionPath: {
                path: [
                  { x: slot.x, y: slot.y },
                  { x: slot.x * 0.4 + PLATE.x * 0.6, y: PLATE.y + 130 },
                  { x: PLATE.x, y: PLATE.y + 45 },
                ],
                curviness: 1.1,
              },
              scale: 0.08,
              rotation: slot.x < PLATE.x ? 30 : -30,
              duration: 0.45,
              ease: "expo.in",
            })
            .to(el, { opacity: 0, duration: 0.1 }, "-=0.1")
            .call(pulse)
            .set(el, { x: slot.x, y: slot.y, scale: 0.6, rotation: 0 });
          redLoops.push(tl);
        });

        // Comets: "down" enters at the path start and exits at its end;
        // "up" runs the same paths in reverse.
        const flowDown = gsap.timeline();
        const flowUp = gsap.timeline({ paused: true });
        q<SVGGElement>(".ray-top").forEach((g) => {
          const paths = g.querySelectorAll("path");
          flowDown.fromTo(paths, { drawSVG: "0% 0%" }, { drawSVG: "62% 100%", ...flowVars("power2.in") }, 0);
          flowUp.fromTo(paths, { drawSVG: "100% 100%" }, { drawSVG: "0% 38%", ...flowVars("power2.out") }, 0);
        });
        q<SVGGElement>(".ray-bottom").forEach((g) => {
          const paths = g.querySelectorAll("path");
          flowDown.fromTo(paths, { drawSVG: "0% 0%" }, { drawSVG: "62% 100%", ...flowVars("power2.out") }, 0);
          flowUp.fromTo(paths, { drawSVG: "100% 100%" }, { drawSVG: "0% 38%", ...flowVars("power2.in") }, 0);
        });

        gsap.to(q(".plate"), {
          scale: 1.03,
          svgOrigin: `${PLATE.x} ${PLATE.y}`,
          duration: 2.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        let red = false;
        buildScrollScrub(section, (next) => {
          if (next === red) return;
          red = next;
          greenLoops.forEach((t) => (red ? t.pause() : t.play()));
          redLoops.forEach((t) => (red ? t.play() : t.pause()));
          if (red) {
            flowDown.pause();
            flowUp.play();
          } else {
            flowUp.pause();
            flowDown.play();
          }
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        q<SVGGElement>(".logo").forEach((el, i) =>
          gsap.set(el, { x: LOGOS[i].x, y: LOGOS[i].y, opacity: 1 }),
        );
        q<SVGGElement>(".rev-up").forEach((el, j) => {
          const slot = ringSlot(j, RED_REV_COUNT);
          gsap.set(el, { x: slot.x, y: slot.y, opacity: 1 });
        });
        gsap.set(q(".ray-top path, .ray-bottom path"), { drawSVG: "100%", opacity: 0.35 });
        buildScrollScrub(section);
      });

      function buildScrollScrub(
        trigger: Element,
        onState?: (red: boolean) => void,
      ) {
        gsap
          .timeline({
            defaults: { ease: "none", duration: 1 },
            scrollTrigger: {
              trigger,
              start: 0,
              end: () => window.innerHeight * 0.6,
              invalidateOnRefresh: true,
              scrub: 0.6,
              onUpdate: (self) => onState?.(self.progress > 0.5),
            },
          })
          .to(q(".plate-green"), { opacity: 0 }, 0)
          .to(q(".plate-red"), { opacity: 1 }, 0)
          .to(q(".rays"), { attr: { stroke: RED } }, 0)
          .to(q(".portal-ring"), { attr: { stroke: RED } }, 0)
          .to(q(".glow-stop"), { attr: { "stop-color": RED } }, 0)
          .to(q(".stream-green"), { opacity: 0, duration: 0.45 }, 0)
          .to(q(".stream-red"), { opacity: 1, duration: 0.45 }, 0.55);
      }
    },
    { scope: root },
  );

  return (
    <svg
      ref={root}
      viewBox={`0 0 ${W} ${H}`}
      className="h-full w-full"
      aria-label="Integrations flowing through GroBird's operations platform"
      role="img"
    >
      <defs>
        <radialGradient id="hero-portal-glow" cx="50%" cy="50%" r="50%">
          <stop className="glow-stop" offset="0%" stopColor={GREEN} stopOpacity="0.6" />
          <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
        </radialGradient>
        <filter id="hero-portal-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="hero-ray-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <image href="/landing/hero/base.png" width={W} height={H} />

      <ellipse
        className="plate-glow"
        cx={PLATE.x}
        cy={PLATE.y + 10}
        rx="200"
        ry="85"
        fill="url(#hero-portal-glow)"
        filter="url(#hero-portal-blur)"
      />

      <g className="rays" stroke={GREEN} fill="none" strokeLinecap="round">
        <g opacity="0.14" strokeWidth="1">
          {TOP_RAYS.map((d, i) => (
            <path key={`t${i}`} d={d} />
          ))}
          {BOTTOM_RAYS.map((d, i) => (
            <path key={`b${i}`} d={d} />
          ))}
        </g>
        {TOP_RAYS.map((d, i) => (
          <g key={`t${i}`} className="ray-top">
            <path d={d} strokeWidth="7" opacity="0.5" filter="url(#hero-ray-glow)" />
            <path d={d} strokeWidth="2" />
          </g>
        ))}
        {BOTTOM_RAYS.map((d, i) => (
          <g key={`b${i}`} className="ray-bottom">
            <path d={d} strokeWidth="7" opacity="0.5" filter="url(#hero-ray-glow)" />
            <path d={d} strokeWidth="2" />
          </g>
        ))}
      </g>

      <g className="stream-red" opacity="0">
        {Array.from({ length: RED_REV_COUNT }, (_, j) => {
          const r = REVS[j % REVS.length];
          const s = fit(r.w, r.h, REV_BOX);
          return (
            <g key={j} className="rev-up" opacity="0">
              <image
                href={`/landing/hero/${r.file}`}
                x={-s.w / 2}
                y={-s.h / 2}
                width={s.w}
                height={s.h}
              />
            </g>
          );
        })}
      </g>

      <g className="stream-green">
        {LOGOS.map((l, i) => {
          const r = REVS[i % REVS.length];
          const s = fit(r.w, r.h, REV_BOX);
          return (
            <g key={r.file + i} className={`rev rev-${i}`} opacity="0">
              <image
                href={`/landing/hero/${r.file}`}
                x={-s.w / 2}
                y={-s.h / 2}
                width={s.w}
                height={s.h}
              />
            </g>
          );
        })}
      </g>

      <g className="stream-green">
        {LOGOS.map((l) => {
          const s = fit(l.w, l.h, LOGO_BOX);
          return (
            <g key={l.file} className="logo" opacity="0">
              <image
                href={`/landing/hero/${l.file}`}
                x={-s.w / 2}
                y={-s.h / 2}
                width={s.w}
                height={s.h}
              />
            </g>
          );
        })}
      </g>

      <ellipse
        className="portal-ring"
        cx={PLATE.x}
        cy={PLATE.y}
        rx="60"
        ry="30"
        fill="none"
        stroke={GREEN}
        strokeWidth="2.5"
        opacity="0"
      />

      <g className="plate">
        <image
          className="plate-green"
          href="/landing/hero/greenbase.png"
          x={PLATE.x - 142.5}
          y={PLATE.y - 83.5}
          width="285"
          height="167"
        />
        <image
          className="plate-red"
          href="/landing/hero/redbase.png"
          x={PLATE.x - 142.5}
          y={PLATE.y - 83.5}
          width="285"
          height="167"
          opacity="0"
        />
      </g>
    </svg>
  );
}
