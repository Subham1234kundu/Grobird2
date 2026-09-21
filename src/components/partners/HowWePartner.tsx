"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const ROWS = [
  {
    imageSide: "left" as const,
    image: "/partners/partner-row-1.png",
    heading: (
      <>
        <span className="text-[#333]">You recommend</span>
        <span className="text-white">, we estimate</span>
      </>
    ),
    description:
      "Share your recommendations and analysis. We provide a technical estimate and timeline.",
  },
  {
    imageSide: "right" as const,
    image: "/partners/partner-row-3.png",
    heading: (
      <>
        <span className="text-[#333]">You retain the </span>
        <span className="text-white">client relationship</span>
      </>
    ),
    description:
      "We are a contractor in your engagement. Your client sees you as the leader. We execute your direction.",
  },
  {
    imageSide: "left" as const,
    image: "/partners/partner-row-2.png",
    heading: (
      <>
        <span className="text-[#333]">We scale with </span>
        <span className="text-white">your throughput</span>
      </>
    ),
    description:
      "Whether one project a quarter or multiple simultaneous engagements, we scale to your volume.",
  },
  {
    imageSide: "right" as const,
    image: "/partners/partner-row-4.png",
    heading: (
      <>
        <span className="text-[#333]">We offer </span>
        <span className="text-white">flexible commercial models</span>
      </>
    ),
    description:
      "Project pricing. Time-and-materials. Retainers for ongoing support. We structure deals to align with your engagement model.",
  },
];

function ImageBlock({ src }: { src: string }) {
  return (
    <div className="partner-image relative aspect-[635/331] w-full overflow-hidden rounded-[10px]">
      <Image src={src} alt="" fill className="object-cover" />
    </div>
  );
}

function TextBlock({
  heading,
  description,
}: {
  heading: React.ReactNode;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center lg:px-[39px]">
      <p className="partner-copy font-sora text-2xl font-semibold tracking-[-1px] lg:text-[28px] lg:leading-[40px] lg:tracking-[-2.16px]">
        {heading}
      </p>
      <p className="partner-copy mt-4 max-w-[435px] text-lg leading-[27px] tracking-[-0.32px] text-white">
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
    <section ref={root} className="relative overflow-hidden bg-black px-6 pt-16 pb-24 sm:px-10 lg:px-[42px] lg:pt-[80px] lg:pb-32">
      <div className="relative z-10 mx-auto max-w-[1261px]">
        <h2 className="gsap-fade partner-fade translate-y-8 font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px]">
          How We <span className="text-[#ff884c]">Partner</span>
        </h2>

        <div className="mt-12 flex flex-col gap-16 lg:mt-12 lg:gap-[103px]">
          {ROWS.map((row, i) => (
            <div
              key={i}
              data-image-side={row.imageSide}
              className="partner-row grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-0"
            >
              {row.imageSide === "left" ? (
                <>
                  <ImageBlock src={row.image} />
                  <TextBlock
                    heading={row.heading}
                    description={row.description}
                  />
                </>
              ) : (
                <>
                  <TextBlock
                    heading={row.heading}
                    description={row.description}
                  />
                  <ImageBlock src={row.image} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* The sunburst sits behind the closing row, its rays fanning up from
          the foot of the section. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center overflow-hidden">
        <Image
          src="/partners/sunburst.png"
          alt=""
          width={1308}
          height={1342}
          className="h-auto w-[1308px] max-w-none translate-y-[62%] rotate-180 opacity-[0.07] mix-blend-screen"
          aria-hidden
        />
      </div>
    </section>
  );
}
