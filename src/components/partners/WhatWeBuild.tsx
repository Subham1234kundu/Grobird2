"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const SLIDES = [
  {
    lead: "Custom systems ",
    rest: "that operationalize your recommendations",
    tagline:
      "Workflow applications, dashboards, and automation that embed your strategic recommendations into daily operations.",
    image: "/partners/slide-1-custom-systems.png",
    alt: "Example dashboard built by GroBird for a partner engagement",
  },
  {
    lead: "Integrated platforms ",
    rest: "that connect fragmented systems",
    tagline: "Your consulting identifies the integration roadmap. We build it.",
    image: "/partners/slide-2-integrated-platforms.png",
    alt: "Illustration of two connected platform integrations",
  },
  {
    lead: "Workflow automation ",
    rest: "that executes your process design",
    tagline: "You design the process. We automate it.",
    image: "/partners/slide-3-workflow-automation.png",
    alt: "Customer support live chat automation interface",
  },
  {
    lead: "White-label solutions ",
    rest: "for your consulting methodology",
    tagline:
      "Your methodology, your brand, our build. We work invisibly behind your brand.",
    image: "/partners/slide-4-white-label.png",
    alt: "Consultants reviewing a white-labeled client portal",
  },
];

const SLIDE_DURATION = 4000;

export default function WhatWeBuild() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);
  const slide = SLIDES[active];

  const [inView, setInView] = useState(false);
  const timer = useRef<gsap.core.Tween | null>(null);

  // Only cycle while the deck is actually on screen, so a visitor scrolling
  // down always arrives at slide 1 with a full interval ahead of them.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useGSAP(
    () => {
      gsap.to(".build-fade", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    },
    { scope: root },
  );

  // The incoming artwork slides in from the right and covers the previous
  // one, which stays put underneath rather than fading out.
  useGSAP(
    () => {
      gsap.fromTo(
        ".build-slide-incoming",
        { xPercent: 100 },
        { xPercent: 0, duration: 0.65, ease: "power3.inOut" },
      );

      gsap.fromTo(
        ".build-slide-copy",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
        },
      );
    },
    // Only the slide index, so nothing else can replay the transition.
    { dependencies: [active], scope: root },
  );

  // A paused timer per slide drives the advance; it only runs while the
  // deck is on screen. (The design has no visible progress control.)
  useGSAP(
    () => {
      timer.current = gsap.to(
        {},
        {
          duration: SLIDE_DURATION / 1000,
          paused: true,
          onComplete: () => {
            setPrev(active);
            setActive((i) => (i + 1) % SLIDES.length);
          },
        },
      );
    },
    { dependencies: [active], scope: root },
  );

  useEffect(() => {
    const tween = timer.current;
    if (!tween) return;
    if (inView) tween.play();
    else tween.pause();
  }, [active, inView]);

  return (
    <section
      ref={root}
      className="mt-8 border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-5 py-10 sm:px-10 lg:mt-0 lg:border-t-0 lg:px-12 lg:pt-20 lg:pb-[54px]"
    >
      <div className="mx-auto max-w-[1261px]">
        <h2 className="gsap-fade build-fade translate-y-8 font-sora text-[28px] leading-9 tracking-[-1px] text-[#858382] lg:text-[52px] lg:leading-[59.8px] lg:tracking-[-2px]">
          What We <span className="text-[#ff884c]">Build</span>
        </h2>

        {/* Mobile: all four builds stacked as numbered cards. */}
        <div className="mt-8 flex flex-col gap-6 lg:hidden">
          {SLIDES.map((s, i) => (
            <article
              key={s.image}
              className="gsap-fade build-fade translate-y-8 overflow-hidden rounded-[4px] border-[0.8px] border-white/10"
            >
              <div className="px-5 pt-7">
                <div className="relative aspect-[348/223] w-full overflow-hidden rounded-[8px] border-[0.8px] border-white/8">
                  <Image src={s.image} alt={s.alt} fill className="object-cover" />
                </div>
              </div>
              <div className="bg-black p-5">
                <p className="font-mono text-[11px] leading-[16.5px] tracking-[2px] text-[#858382] uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="pt-2 font-sora text-lg leading-[26px] font-semibold tracking-[-0.8px] text-[#555]">
                  {s.lead}
                  <span className="text-white">{s.rest}</span>
                </h3>
                <p className="pt-2 font-geist text-[13px] leading-5 text-white/80">
                  {s.tagline}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: auto-advancing deck — 115px copy row, 92px gap, then
            a 1261×600 canvas. */}
        <div className="mt-12 hidden lg:block">
          {/* Keyed on the slide so React swaps the whole row at once;
              fixed height keeps the artwork from shifting. */}
          <div
            key={active}
            className="flex h-[115px] items-center justify-between gap-6"
          >
            <h3 className="build-slide-copy w-[706px] font-sora text-[36px] leading-[57.6px] tracking-[-0.96px] text-white">
              {slide.lead}
              {slide.rest}
            </h3>
            <p className="build-slide-copy w-[434.7px] text-right font-geist text-[18px] leading-[27px] tracking-[-0.32px] text-white">
              {slide.tagline}
            </p>
          </div>

          <div className="gsap-fade build-fade translate-y-8 relative mt-[92px] h-[600px] w-full overflow-hidden bg-black">
            {/* The outgoing slide stays put; the incoming one slides across
                it, so each image is covered rather than cross-faded. */}
            {prev !== active && (
              <Image
                key={`under-${SLIDES[prev].image}`}
                src={SLIDES[prev].image}
                alt=""
                fill
                className="object-cover"
                aria-hidden
              />
            )}
            <Image
              key={`over-${slide.image}`}
              src={slide.image}
              alt={slide.alt}
              fill
              priority={active === 0}
              className="build-slide-incoming object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
