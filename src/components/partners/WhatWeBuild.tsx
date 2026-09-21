"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const SLIDES = [
  {
    heading: "Custom systems that operationalize your recommendations",
    tagline:
      "Workflow applications, dashboards, and automation that embed your strategic recommendations into daily operations.",
    image: "/partners/what-we-build-dashboard.png",
    alt: "Example dashboard built by GroBird for a partner engagement",
  },
  {
    heading: "Integrated platforms that connect fragmented systems",
    tagline: "Your consulting identifies the integration roadmap. We build it.",
    image: "/partners/slide-2-integrated-platforms.png",
    alt: "Illustration of two connected platform integrations",
  },
  {
    heading: "Workflow automation that executes your process design",
    tagline: "You design the process. We automate it.",
    image: "/partners/slide-3-workflow-automation.png",
    alt: "Customer support live chat automation interface",
  },
  {
    heading: "White-label solutions for your consulting methodology",
    tagline:
      "Your methodology, your brand, our build. We work invisibly behind your brand.",
    image: "/partners/slide-4-white-label.png",
    alt: "Consultants reviewing a white-labeled client portal",
  },
];

const SLIDE_DURATION = 2200;

export default function WhatWeBuild() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);
  const slide = SLIDES[active];

  const goTo = (next: number) => {
    setPrev(active);
    setActive(next);
  };

  const [inView, setInView] = useState(false);
  const progress = useRef<gsap.core.Tween | null>(null);

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

  // Advancing is driven by the progress tween finishing (see below), so the
  // bar and the slide timer share one clock and pause together.

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

  // The progress bar restarts per slide and drives the advance; it only
  // runs while the deck is on screen.
  useGSAP(
    () => {
      progress.current = gsap.fromTo(
        ".build-progress-fill",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: SLIDE_DURATION / 1000,
          ease: "none",
          transformOrigin: "left center",
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
    const tween = progress.current;
    if (!tween) return;
    if (inView) tween.play();
    else tween.pause();
  }, [active, inView]);

  return (
    <section ref={root} className="bg-black px-6 py-16 sm:px-10 lg:px-[48px] lg:py-[80px]">
      <div className="mx-auto max-w-[1261px]">
        <h2 className="gsap-fade build-fade translate-y-8 font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px] lg:leading-[59.8px]">
          What We <span className="text-[#ff884c]">Build</span>
        </h2>

        <div
          className="mt-14"
        >
          {/* Fixed height so swapping headings of different lengths never
              nudges the artwork below. */}
          {/* Keyed on the slide so React swaps the whole row at once —
              keying the children individually left stale nodes behind
              mid-animation. Fixed height keeps the artwork from shifting. */}
          <div
            key={active}
            className="flex flex-col gap-8 lg:h-[115px] lg:flex-row lg:items-center lg:justify-between lg:gap-6"
          >
            <h3 className="build-slide-copy font-sora text-2xl font-semibold tracking-[-0.96px] text-white lg:max-w-[706px] lg:text-[36px] lg:leading-[57.6px]">
              {slide.heading}
            </h3>
            <p className="build-slide-copy text-base tracking-[-0.32px] text-white/80 lg:max-w-[435px] lg:text-right lg:text-[18px] lg:leading-[27px]">
              {slide.tagline}
            </p>
          </div>

          <div className="gsap-fade build-fade translate-y-8 relative mt-8 aspect-[1261/600] w-full overflow-hidden rounded-[10px] bg-black">
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

          <div className="gsap-fade build-fade translate-y-8 mt-6 flex items-center justify-center gap-3">
            {SLIDES.map((s, i) => (
              <button
                key={s.image}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={active === i}
                className="group py-2"
              >
                <span
                  className={`block h-[3px] overflow-hidden rounded-full transition-all ${
                    active === i
                      ? "w-12 bg-white/25"
                      : "w-5 bg-white/25 group-hover:bg-white/40"
                  }`}
                >
                  {active === i && (
                    <span className="build-progress-fill block h-full w-full bg-[#ff884c]" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
