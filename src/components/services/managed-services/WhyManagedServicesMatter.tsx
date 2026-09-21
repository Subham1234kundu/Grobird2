"use client";

import Image from "next/image";
import { useRef } from "react";
import { cardsLiftReveal, gsap, useGSAP } from "@/lib/gsap";

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
    <section ref={root} className="relative overflow-hidden bg-black px-6 pt-16 pb-0 sm:px-10 lg:px-[99px] lg:pt-[97px]">
      <div className="mx-auto max-w-[1261px]">
        <h2 className="gsap-fade why-matters-heading translate-y-8 font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px] lg:leading-[59.8px]">
          Why Managed Services <span className="text-[#ff884c]">Matter</span>
        </h2>

        <div className="why-matters-grid mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-[57px]">
          <div className="gsap-fade why-matters-card relative flex h-[380px] flex-col justify-end overflow-hidden rounded-[24px] bg-white p-5 lg:h-[542px] lg:p-6">
            <div className="pointer-events-none absolute top-2 left-2 h-[140px] w-[140px] lg:-top-8 lg:-left-6 lg:h-[300px] lg:w-[300px]">
              <Image
                src="/services/managed-services/shape-cube.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
            </div>
            <div className="relative z-10 flex flex-col gap-1.5">
              <h3 className="font-sora text-xl font-semibold text-black lg:text-[22px] lg:leading-[28.6px]">
                Technology breaks when unattended.
              </h3>
              <p className="max-w-[313px] text-[11px] leading-[19.8px] font-medium text-black">
                Without monitoring and maintenance, downtime increases,
                performance degrades, and data integrity suffers.
              </p>
            </div>
          </div>

          <div className="gsap-fade why-matters-card relative flex h-[380px] flex-col justify-start overflow-hidden rounded-[24px] bg-[#ff884c] p-5 lg:h-[542px] lg:p-6">
            <div className="relative z-10 flex flex-col gap-1.5">
              <h3 className="font-sora text-xl font-semibold text-white lg:max-w-[330px] lg:text-[22px] lg:leading-[28.6px]">
                Managed services protect that investment.
              </h3>
              <p className="max-w-[313px] text-[11px] leading-[19.8px] font-medium text-white">
                You get ongoing optimization, issue resolution, and
                enhancements all bundled into one relationship.
              </p>
            </div>
            <div className="pointer-events-none absolute right-2 bottom-2 h-[140px] w-[140px] lg:-right-16 lg:-bottom-16 lg:h-[300px] lg:w-[300px]">
              <Image
                src="/services/managed-services/shape-polyhedron.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
            </div>
          </div>

          <div className="gsap-fade why-matters-card relative flex h-[380px] flex-col justify-end overflow-hidden rounded-[24px] bg-white p-5 lg:h-[542px] lg:p-6">
            <div className="pointer-events-none absolute top-2 left-1/2 h-[140px] w-[140px] -translate-x-1/2 lg:top-0 lg:h-[280px] lg:w-[280px]">
              <Image
                src="/services/managed-services/shape-ellipse-1.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
              <Image
                src="/services/managed-services/shape-ellipse-2.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
              <Image
                src="/services/managed-services/shape-ellipse-3.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
              <Image
                src="/services/managed-services/shape-ellipse-4.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
            </div>
            <div className="relative z-10 flex flex-col gap-1.5">
              <h3 className="font-sora text-xl font-semibold text-black lg:text-[22px] lg:leading-[28.6px]">
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
