"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gsap, headlineLinesReveal, splitWordsReveal, useGSAP } from "@/lib/gsap";

const DETAILS = [
  {
    icon: "/contact/icon-email.svg",
    label: "Email",
    value: "contact@grobird.in",
    href: "mailto:contact@grobird.in",
  },
  {
    icon: "/contact/icon-phone.svg",
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: "/contact/icon-office.svg",
    label: "Office",
    value: "Lucknow",
  },
];

const REASONS = [
  "Operational discovery",
  "Custom software",
  "System integration",
  "Workflow automation",
  "Business intelligence",
  "Managed services",
  "Partnership",
  "Something else",
];

const FIELD =
  "h-[45.6px] w-full border-[0.8px] border-[rgba(75,73,73,0.7)] bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[rgba(232,232,232,0.74)] focus:border-[#ff884c]";
const LABEL =
  "font-mono text-[10px] leading-[15px] tracking-[1px] text-[#e8e8e8] uppercase";

export default function ContactSection() {
  const root = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  useGSAP(
    () => {
      headlineLinesReveal(".contact-heading", { start: "top 85%" });
      splitWordsReveal(".contact-lede", { start: "top 85%" });

      gsap.fromTo(
        ".contact-detail",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.14,
          scrollTrigger: { trigger: ".contact-details", start: "top 88%" },
        },
      );

      gsap.fromTo(
        ".contact-form",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-form", start: "top 88%" },
        },
      );

      gsap.fromTo(
        ".contact-field",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.07,
          scrollTrigger: { trigger: ".contact-form", start: "top 85%" },
        },
      );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-6 py-20 sm:px-10 lg:px-[89.5px] lg:pt-[94px] lg:pb-[120px]"
    >
      <div
        className="pointer-events-none absolute top-[557px] left-1/2 hidden h-[736px] w-[1472px] -translate-x-1/2 items-center justify-center lg:flex"
        aria-hidden
      >
        <Image
          src="/contact/form-glow.png"
          alt=""
          width={736}
          height={1472}
          className="h-[1472px] w-[736px] -rotate-90 object-cover blur-[72px]"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1098px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <h2 className="gsap-fade contact-heading font-sora text-4xl tracking-[-2px] text-[#858382] lg:text-[52px] lg:leading-[59.8px]">
            <span className="block">Ready to understand</span>
            <span className="block text-white">your operational</span>
            <span className="block text-[#ff884c]">roadmap?</span>
          </h2>

          <p className="gsap-fade contact-lede mt-6 max-w-[518px] text-base leading-[26px] text-[#858382]">
            Schedule a conversation with our team. We&apos;ll listen to your
            challenges, map your constraints, and tell you honestly what would
            help.
          </p>

          <div className="contact-details mt-12 flex flex-col gap-6">
            {DETAILS.map((item) => {
              const value = item.href ? (
                <a
                  href={item.href}
                  className="text-[15px] leading-[22.5px] text-white transition-colors hover:text-[#ff884c]"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-[15px] leading-[22.5px] text-white">
                  {item.value}
                </p>
              );

              return (
                <div
                  key={item.label}
                  className="gsap-fade contact-detail flex items-start gap-4"
                >
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center border-[0.8px] border-[rgba(75,73,73,0.6)]">
                    <Image
                      src={item.icon}
                      alt=""
                      width={18}
                      height={18}
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-mono text-[10px] leading-[15px] tracking-[1px] text-[#ff884c] uppercase">
                      {item.label}
                    </p>
                    <div className="pt-1">{value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <form
          className="gsap-fade contact-form flex flex-col gap-4 border-[0.8px] border-[rgba(75,73,73,0.5)] p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("sent");
          }}
        >
          <h3 className="contact-field pb-2 font-sora text-[20px] leading-[28px] font-semibold text-white">
            Schedule a Call
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="contact-field flex flex-col gap-1.5">
              <label className={LABEL} htmlFor="contact-name">
                Name *
              </label>
              <input
                id="contact-name"
                name="name"
                required
                placeholder="Your full name"
                className={FIELD}
              />
            </div>
            <div className="contact-field flex flex-col gap-1.5">
              <label className={LABEL} htmlFor="contact-email">
                Email *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className={FIELD}
              />
            </div>
            <div className="contact-field flex flex-col gap-1.5">
              <label className={LABEL} htmlFor="contact-company">
                Company *
              </label>
              <input
                id="contact-company"
                name="company"
                required
                placeholder="Company name"
                className={FIELD}
              />
            </div>
            <div className="contact-field flex flex-col gap-1.5">
              <label className={LABEL} htmlFor="contact-phone">
                Phone
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className={FIELD}
              />
            </div>
          </div>

          <div className="contact-field flex flex-col gap-1.5">
            <label className={LABEL} htmlFor="contact-reason">
              What brings you here?
            </label>
            <select
              id="contact-reason"
              name="reason"
              defaultValue=""
              className={`${FIELD} appearance-none bg-black`}
            >
              <option value="" disabled>
                Select a reason
              </option>
              {REASONS.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
          </div>

          <div className="contact-field flex flex-col gap-1.5">
            <label className={LABEL} htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Describe your challenge or what you're looking to solve..."
              className={`${FIELD} h-[105.6px] resize-none leading-5`}
            />
          </div>

          <div className="contact-field pt-2">
            <button
              type="submit"
              className="h-[53px] w-full bg-[#ff884c] text-sm leading-[21px] font-medium tracking-[0.5px] text-black transition-opacity hover:opacity-90"
            >
              Schedule a Call
            </button>
            {status === "sent" && (
              <p role="status" className="mt-3 text-sm text-white/70">
                Thanks — we&apos;ll be in touch shortly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
