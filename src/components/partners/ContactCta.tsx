"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";

export default function ContactCta() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".contact-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: root.current,
          start: "top 85%",
        },
      });

      splitWordsReveal(".contact-desc", { start: "top 85%" });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative mt-8 flex min-h-[344px] items-center overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-6 py-20 sm:px-10 lg:mt-0 lg:min-h-[455px]"
    >
      <Image
        src="/partners/contact-dots.png"
        alt=""
        fill
        className="pointer-events-none hidden object-cover opacity-60 lg:block"
        aria-hidden
      />
      {/* The glow's centre sits well below the section, so only its upper
          half washes across the copy. */}
      <div
        className="pointer-events-none absolute bottom-[-72px] left-[calc(50%+145px)] flex h-[202px] w-[404px] -translate-x-1/2 items-center justify-center lg:top-[273px] lg:bottom-auto lg:left-[calc(50%+613px)] lg:h-[736px] lg:w-[1472px]"
        aria-hidden
      >
        <Image
          src="/partners/contact-glow.png"
          alt=""
          width={736}
          height={1472}
          className="h-[404px] w-[202px] -rotate-90 object-cover opacity-70 blur-[72px] lg:h-[1472px] lg:w-[736px]"
        />
      </div>
      <Image
        src="/partners/contact-bird.svg"
        alt=""
        width={406}
        height={624}
        className="pointer-events-none absolute top-[40%] right-[-4%] h-[74%] w-auto max-w-none mix-blend-overlay lg:top-[-7px] lg:right-[-16px] lg:h-[624px] lg:w-[406px]"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-[500px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-4 lg:gap-[19px]">
          <h2 className="gsap-fade contact-fade translate-y-8 font-sora text-[32px] leading-10 tracking-[-2px] text-[#858382] lg:text-[45px] lg:leading-normal lg:tracking-[-3px]">
            Partner With <span className="text-[#ff884c]">GroBird</span>
          </h2>
          <p className="gsap-fade contact-desc max-w-[320px] text-[15px] leading-6 text-white lg:max-w-none lg:text-base lg:leading-[27px]">
            Let&apos;s discuss how we can support your recommendations and
            strengthen your client outcomes
          </p>
        </div>

        <div className="lg:pt-4">
          <Link
            href="/contact"
            className="gsap-fade contact-fade translate-y-6 inline-block bg-[#ff884c] px-10 py-4 font-sora text-[15px] leading-[22.5px] tracking-[0.5px] text-black transition-opacity hover:opacity-90"
          >
            Partner Now
          </Link>
        </div>
      </div>
    </section>
  );
}
