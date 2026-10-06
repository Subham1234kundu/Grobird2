"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, splitWordsReveal, useGSAP } from "@/lib/gsap";

const PROJECTS = [
  {
    title: "Bespoke E-commerce System",
    image: "/landing/selected-work/ecommerce.png",
    alt: "Analytics dashboard from a bespoke e-commerce system",
    tags: ["Bespoke architecture", "Custom workflows", "Scalable platform"],
    description:
      "A tailored e-commerce platform built around the unique workflows, operations, and business requirements of the client, replacing generic tools with a system designed to scale with the business.",
  },
  {
    title: "AI-Powered Presales Evaluation",
    image: "/landing/selected-work/presales.png",
    alt: "Dashboard of an AI-powered presales evaluation platform",
    tags: ["AI evaluation", "Presales intelligence"],
    description:
      "An AI-powered platform that evaluates presales performance across opportunity qualification, pitch analysis, technical positioning, competition, and technical win to help teams make stronger decisions.",
  },
];

export default function SelectedWork() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".work-heading", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".work-heading", start: "top 85%" },
      });

      splitWordsReveal(".work-desc", { start: "top 85%" });

      gsap.utils.toArray<HTMLElement>(".work-card").forEach((card, i) => {
        gsap
          .timeline({
            scrollTrigger: { trigger: card, start: "top 88%" },
            delay: i * 0.12,
          })
          .fromTo(
            card,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          )
          .fromTo(
            card.querySelector(".work-art"),
            { scale: 1.08 },
            { scale: 1, duration: 1.1, ease: "power2.out" },
            0,
          );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-black">
      <div className="border-b-[0.8px] border-[rgba(75,73,73,0.5)] px-5 pt-10 pb-6 sm:px-10 sm:pt-16 lg:pt-[115px] lg:pb-0">
        <div className="gsap-fade work-heading mx-auto max-w-[772px] translate-y-8 text-center lg:h-[146px]">
          <h2 className="font-sora text-[26px] leading-[39px] tracking-[-1px] text-[#858382] uppercase sm:text-5xl sm:leading-tight lg:text-[57.4px] lg:leading-[68px] lg:tracking-[-2.5px]">
            Selected <span className="text-[#ff884c]">Work</span>
          </h2>
          <p className="gsap-fade work-desc mt-3 text-[13px] leading-5 text-white lg:mt-4 lg:text-base lg:leading-6">
            We design and build technology solutions around real business
            challenges, from bespoke commerce systems to AI-powered platforms
            that help teams make better decisions.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-6 px-5 pt-8 pb-10 sm:px-10 sm:pt-12 md:grid-cols-2 lg:gap-8 lg:px-0 lg:pt-[97px] lg:pb-9">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="gsap-fade work-card flex flex-col overflow-hidden rounded-2xl bg-[#fdf9f2]"
          >
            <Link
              href="/case-studies"
              aria-label={`View case studies for ${project.title}`}
              className="relative block aspect-[634/299] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ff884c]"
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(min-width: 1024px) 634px, (min-width: 768px) 50vw, 100vw"
                className="work-art object-cover object-left-top"
              />
            </Link>

            <div className="flex flex-1 flex-col gap-[13px] p-5 sm:p-8 lg:p-10">
              <h3 className="font-sora text-lg leading-tight font-light tracking-[-0.768px] text-[#2a2520] sm:text-[22px] sm:leading-[45px]">
                {project.title}
              </h3>
              <ul className="flex flex-wrap gap-2 sm:gap-[13px]">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="flex h-[30px] items-center rounded-xl border-[0.8px] border-[rgba(10,101,228,0.25)] px-3.5 font-sora text-[10px] leading-[16.5px] font-semibold tracking-[1.32px] whitespace-nowrap text-[#0a65e4] uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="pt-px text-[13px] leading-[21px] text-[#706a60] sm:text-[13.6px] sm:leading-[21.76px]">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
