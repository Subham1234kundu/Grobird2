"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const ROWS = [
  {
    imageSide: "left" as const,
    image: "/partners/partner-row-1.png",
    mobileImage: "/partners/partner-row-1-mobile.png",
    lead: "You recommend",
    rest: ", we estimate",
    description:
      "Share your recommendations and analysis. We provide a technical estimate and timeline.",
  },
  {
    imageSide: "right" as const,
    image: "/partners/partner-row-3.png",
    mobileImage: "/partners/partner-row-3.png",
    lead: "You retain the ",
    rest: "client relationship",
    description:
      "We are a contractor in your engagement. Your client sees you as the leader. We execute your direction.",
  },
  {
    imageSide: "left" as const,
    image: "/partners/partner-row-2.png",
    mobileImage: "/partners/partner-row-2.png",
    lead: "We scale with ",
    rest: "your throughput",
    description:
      "Whether one project a quarter or multiple simultaneous engagements, we scale to your volume.",
  },
  {
    imageSide: "right" as const,
    image: "/partners/partner-row-4.png",
    mobileImage: "/partners/partner-row-4.png",
    lead: "We offer ",
    rest: "flexible commercial models",
    description:
      "Project pricing. Time-and-materials. Retainers for ongoing support. We structure deals to align with your engagement model.",
  },
];

// Sunburst ray boxes (px) inside the 1307.77×1341.84 group, from Figma.
// left/top/w/h is each vector's bounding box; iw/ih the size before the
// shared rotate(-0.88deg) skewX(3.96deg) transform.
const SUNBURST = [
  { src: "ray-0", left: 0.00, top: 0.00, w: 1286.96, h: 810.70, iw: 1219.96, ih: 794.75 },
  { src: "ray-1", left: 850.42, top: 688.92, w: 361.35, h: 372.45, iw: 330.27, ih: 368.70 },
  { src: "ray-2", left: 746.83, top: 811.02, w: 242.91, h: 410.08, iw: 208.48, ih: 408.34 },
  { src: "ray-3", left: 531.16, top: 882.35, w: 248.42, h: 375.89, iw: 216.89, ih: 373.90 },
  { src: "ray-4", left: 257.07, top: 816.35, w: 381.01, h: 346.48, iw: 352.16, ih: 342.30 },
  { src: "ray-5", left: 91.93, top: 700.23, w: 414.11, h: 222.78, iw: 395.80, ih: 217.49 },
];

function ImageBlock({ src }: { src: string }) {
  return (
    <div className="partner-image relative h-[331.41px] w-[635px] overflow-hidden rounded-[10px]">
      <Image src={src} alt="" fill className="object-cover" />
    </div>
  );
}

function TextBlock({
  lead,
  rest,
  description,
  side,
}: {
  lead: string;
  rest: string;
  description: string;
  side: "left" | "right";
}) {
  // Copy beside a left-hand image sits on the image's baseline; copy
  // beside a right-hand image sits on its top edge.
  return (
    <div
      className={`flex w-[626px] flex-col ${
        side === "right"
          ? "justify-end pl-[30px]"
          : "justify-start pl-5"
      }`}
    >
      <p className="partner-copy font-sora text-[28px] leading-10 font-semibold tracking-[-2.16px] whitespace-nowrap">
        <span className="text-[#333]">{lead}</span>
        <span className="text-white">{rest}</span>
      </p>
      <p className="partner-copy mt-[9px] w-[434.7px] font-geist text-[18px] leading-[27px] tracking-[-0.32px] text-white">
        {description}
      </p>
    </div>
  );
}

export default function HowWePartner() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".partner-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });

      // Each row assembles from its own side of the zig-zag: the artwork
      // slides in from the edge it sits on, the copy follows from the other.
      gsap.utils.toArray<HTMLElement>(".partner-row").forEach((row) => {
        const fromLeft = row.dataset.imageSide === "left";
        const tl = gsap.timeline({
          scrollTrigger: { trigger: row, start: "top 82%" },
        });

        tl.fromTo(
          row.querySelector(".partner-image"),
          { x: fromLeft ? -70 : 70, opacity: 0, scale: 1.04 },
          { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        ).fromTo(
          row.querySelectorAll(".partner-copy"),
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power2.out",
            stagger: 0.1,
          },
          0.2,
        );
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative mt-8 overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-5 py-10 sm:px-10 lg:mt-0 lg:border-t-0 lg:px-[42px] lg:pt-20 lg:pb-[110px]"
    >
      <div className="relative z-10 mx-auto max-w-[1261px]">
        <h2 className="gsap-fade partner-fade translate-y-8 font-sora text-[28px] leading-9 tracking-[-1px] text-white lg:text-[52px] lg:leading-[59.8px] lg:tracking-[-2px] lg:text-[#858382]">
          How We <span className="text-[#ff884c]">Partner</span>
        </h2>

        {/* Mobile: numbered cards, image on top. */}
        <div className="mt-8 flex flex-col gap-6 lg:hidden">
          {ROWS.map((row, i) => (
            <article
              key={row.image}
              className="gsap-fade partner-fade translate-y-8 overflow-hidden rounded-[4px] border-[0.8px] border-white/10"
            >
              <div
                className={`relative h-[200px] w-full overflow-hidden ${
                  i === 3 ? "rounded-[10px]" : ""
                }`}
              >
                <Image
                  src={row.mobileImage}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-black p-5">
                <p className="font-mono text-[11px] leading-[16.5px] tracking-[2px] text-[#858382] uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="pt-2 font-sora text-lg leading-[26px] font-semibold tracking-[-0.8px] text-[#555]">
                  {row.lead}
                  <span className="text-white">{row.rest}</span>
                </h3>
                <p className="pt-2 font-geist text-[13px] leading-5 text-white/80">
                  {row.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop zig-zag: 635px artwork, 102.6px between rows. */}
        <div className="mt-12 hidden flex-col gap-[102.6px] lg:flex">
          {ROWS.map((row, i) => (
            <div
              key={i}
              data-image-side={row.imageSide}
              className="partner-row relative flex items-stretch"
            >
              {row.imageSide === "left" ? (
                <>
                  <ImageBlock src={row.image} />
                  <TextBlock
                    lead={row.lead}
                    rest={row.rest}
                    description={row.description}
                    side="right"
                  />
                </>
              ) : (
                <>
                  <TextBlock
                    lead={row.lead}
                    rest={row.rest}
                    description={row.description}
                    side="left"
                  />
                  <ImageBlock src={row.image} />
                </>
              )}

              {i === ROWS.length - 1 && (
                <>
              {/* GroBird sunburst, rebuilt from the six Figma vectors: faint
                  outlined rays (no fill) plus five solid white rays. It starts
                  20px below the top of the last row and sits ABOVE that row's
                  artwork, so the outlines cross the card exactly as in Figma.
                  The section clips it 110px below the row, where the blue
                  Partner Program section starts — same as the Figma page. */}
              <div
                className="pointer-events-none absolute top-5 left-[12.5px] z-20 h-[1341.84px] w-[1307.77px] max-w-none"
                aria-hidden
              >
                {SUNBURST.map((ray) => (
                  <div
                    key={ray.src}
                    className="absolute flex items-center justify-center"
                    style={{ left: ray.left, top: ray.top, width: ray.w, height: ray.h }}
                  >
                    <div
                      className="relative shrink-0"
                      style={{
                        width: ray.iw,
                        height: ray.ih,
                        transform: "rotate(-0.88deg) skewX(3.96deg)",
                      }}
                    >
                      <Image
                        src={`/partners/sunburst/${ray.src}.svg`}
                        alt=""
                        fill
                        className="object-fill"
                      />
                    </div>
                  </div>
                ))}
              </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
