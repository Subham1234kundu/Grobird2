"use client";

import Image from "next/image";
import { useRef } from "react";
import { cardsLiftReveal, gsap, useGSAP } from "@/lib/gsap";

const SHAPES = "/services/managed-services";

/** Absolutely placed SVG at an exact Figma size and offset. */
function Shape({ src, className }: { src: string; className: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden>
      <Image src={`${SHAPES}/${src}`} alt="" fill className="object-contain" />
    </div>
  );
}

export default function WhyManagedServicesMatter() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".why-matters-heading", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".why-matters-heading", start: "top 85%" },
      });
      cardsLiftReveal(".why-matters-card");
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black px-5 pt-12 pb-12 sm:px-10 sm:pt-16 sm:pb-0 lg:px-[99px] lg:pt-[97px]">
      <div className="mx-auto max-w-[1261px]">
        <h2 className="gsap-fade why-matters-heading max-w-[281px] translate-y-8 font-sora text-[26px] leading-[28.6px] tracking-[-1.5px] text-[#858382] sm:max-w-none sm:text-4xl sm:leading-normal sm:tracking-[-2px] lg:text-[52px] lg:leading-[59.8px]">
          Why Managed Services <span className="text-[#df7205] sm:text-[#ff884c]">Matter</span>
        </h2>

        {/* Phones follow the Figma mobile frame: 542px cards, 32px apart,
            with the large line art bleeding off each card. Tablet and
            desktop keep the three-column layout. */}
        <div className="why-matters-grid mt-8 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:mt-[57px]">
          {/* 1 — Technology breaks when unattended */}
          <div className="gsap-fade why-matters-card relative flex h-[542px] flex-col justify-end overflow-hidden rounded-[24px] bg-white px-5 pb-[26px] sm:h-[380px] sm:p-5 lg:h-[542px] lg:p-6">
            {/* Phone: the cube flipped and turned -150°, top-left */}
            <div
              className="pointer-events-none absolute top-[-131.8px] left-[-110.5px] flex h-[500.6px] w-[480.7px] items-center justify-center sm:hidden"
              aria-hidden
            >
              <div className="relative h-[386.3px] w-[332px] shrink-0 -scale-y-100 -rotate-150">
                <Image src={`${SHAPES}/shape-cube.svg`} alt="" fill className="object-contain" />
              </div>
            </div>
            <Shape
              src="shape-cube.svg"
              className="hidden sm:top-2 sm:left-2 sm:block sm:h-[140px] sm:w-[140px] lg:-top-8 lg:-left-6 lg:h-[300px] lg:w-[300px]"
            />
            <div className="relative z-10 flex flex-col gap-4 sm:gap-1.5">
              <h3 className="max-w-[321px] font-sora text-lg leading-[28.6px] font-semibold text-black sm:max-w-none sm:text-xl sm:leading-normal lg:text-[22px] lg:leading-[28.6px]">
                Technology breaks when unattended.
              </h3>
              <p className="max-w-[313px] text-[11px] leading-[19.8px] font-medium text-black">
                Without monitoring and maintenance, downtime increases,
                performance degrades, and data integrity suffers.
              </p>
            </div>
          </div>

          {/* 2 — Managed services protect that investment */}
          <div className="gsap-fade why-matters-card relative flex h-[542px] flex-col justify-start overflow-hidden rounded-[24px] bg-[#ff884c] px-5 pt-[33.6px] sm:h-[380px] sm:p-5 lg:h-[542px] lg:p-6">
            <div className="relative z-10 flex flex-col gap-2.5 sm:gap-1.5">
              <h3 className="max-w-[330px] font-sora text-lg leading-[28.6px] font-semibold text-white sm:max-w-none sm:text-xl sm:leading-normal lg:max-w-[330px] lg:text-[22px] lg:leading-[28.6px]">
                Managed services protect that investment.
              </h3>
              <p className="max-w-[313px] text-[11px] leading-[19.8px] font-medium text-white">
                You get ongoing optimization, issue resolution, and
                enhancements all bundled into one relationship.
              </p>
            </div>
            <Shape
              src="shape-polyhedron.svg"
              className="top-[221.2px] left-[111.2px] h-[438px] w-[460px] sm:top-auto sm:right-2 sm:bottom-2 sm:left-auto sm:h-[140px] sm:w-[140px] lg:-right-16 lg:-bottom-16 lg:h-[300px] lg:w-[300px]"
            />
          </div>

          {/* 3 — We scale with you */}
          <div className="gsap-fade why-matters-card relative flex h-[542px] flex-col justify-end overflow-hidden rounded-[24px] bg-white px-5 pb-[39px] sm:h-[380px] sm:p-5 lg:h-[542px] lg:p-6">
            {/* Phone: the four orbits at their Figma offsets */}
            <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden>
              <Shape src="shape-ellipse-1.svg" className="top-[9.2px] left-[140.8px] h-[426px] w-[162px]" />
              <Shape src="shape-ellipse-2.svg" className="top-[141.2px] left-[8.8px] h-[160px] w-[426px]" />
              <Shape src="shape-ellipse-3.svg" className="top-[61.2px] left-[60.8px] h-[321px] w-[322px]" />
              <Shape src="shape-ellipse-4.svg" className="top-[61.2px] left-[60.8px] h-[321px] w-[322px]" />
            </div>
            <div className="pointer-events-none absolute top-2 left-1/2 hidden h-[140px] w-[140px] -translate-x-1/2 sm:block lg:top-0 lg:h-[280px] lg:w-[280px]">
              {["shape-ellipse-1.svg", "shape-ellipse-2.svg", "shape-ellipse-3.svg", "shape-ellipse-4.svg"].map((src) => (
                <Image key={src} src={`${SHAPES}/${src}`} alt="" fill className="object-contain" aria-hidden />
              ))}
            </div>
            <div className="relative z-10 flex flex-col gap-3.5 sm:gap-1.5">
              <h3 className="font-sora text-lg leading-[28.6px] font-semibold text-black sm:text-xl sm:leading-normal lg:text-[22px] lg:leading-[28.6px]">
                We scale with you.
              </h3>
              <p className="max-w-[288px] text-[11px] leading-[19.8px] font-medium text-black">
                As your operation grows, we ensure your systems scale too,
                without surprises or emergency projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
