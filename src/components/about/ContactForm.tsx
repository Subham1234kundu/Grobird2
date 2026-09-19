"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const CONTACT_INFO = [
  { label: "Email", value: "contact@grobird.in", icon: "/about/icon-email.svg" },
  { label: "Phone", value: "+91 98765 43210", icon: "/about/icon-phone.svg" },
  { label: "Office", value: "Lucknow", icon: "/about/icon-office.svg" },
];

const REASONS = [
  "Partnership inquiry",
  "Operational discovery",
  "Custom software project",
  "General question",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden border-t-[0.8px] border-[rgba(75,73,73,0.5)] bg-black px-6 py-16 sm:px-10 lg:px-[89px] lg:py-[95px]">
      <div className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[736px] w-[1472px] -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex">
        <Image
          src="/about/contact-glow.png"
          alt=""
          width={736}
          height={1472}
          className="h-[1472px] w-[736px] -rotate-90 object-cover opacity-70 blur-[72px] mix-blend-lighten"
        />
      </div>

      <div className="relative mx-auto grid max-w-[1261px] grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <h2 className="font-sora text-4xl tracking-[-2px] lg:text-[52px]">
            <span className="text-[#858382]">Ready to understand</span>{" "}
            <span className="text-white">your operational</span>{" "}
            <span className="text-[#ff884c]">roadmap?</span>
          </h2>
          <p className="mt-6 max-w-[518px] text-base leading-[26px] text-[#858382]">
            Schedule a conversation with our team. We&apos;ll listen to your
            challenges, map your constraints, and tell you honestly what
            would help.
          </p>

          <div className="mt-12 flex flex-col gap-6">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center border-[0.8px] border-[rgba(75,73,73,0.6)]">
                  <Image src={item.icon} alt="" width={18} height={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[1px] text-[#ff884c] uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[15px] text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-[0.8px] border-[rgba(75,73,73,0.5)] p-6 lg:p-8">
          {submitted ? (
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center gap-3 text-center">
              <p className="font-sora text-xl font-semibold text-white">
                Thanks — we&apos;ll be in touch.
              </p>
              <p className="max-w-[350px] text-sm text-[#858382]">
                We&apos;ve received your request and will reach out shortly
                to schedule a call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="pb-2 font-sora text-xl font-semibold text-white">
                Schedule a Call
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="font-mono text-[10px] tracking-[1px] text-[#e8e8e8] uppercase"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="border-[0.8px] border-[rgba(75,73,73,0.7)] bg-black px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#ff884c] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-mono text-[10px] tracking-[1px] text-[#e8e8e8] uppercase"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="border-[0.8px] border-[rgba(75,73,73,0.7)] bg-black px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#ff884c] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="company"
                    className="font-mono text-[10px] tracking-[1px] text-[#e8e8e8] uppercase"
                  >
                    Company *
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Company name"
                    className="border-[0.8px] border-[rgba(75,73,73,0.7)] bg-black px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#ff884c] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="font-mono text-[10px] tracking-[1px] text-[#e8e8e8] uppercase"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="border-[0.8px] border-[rgba(75,73,73,0.7)] bg-black px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#ff884c] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="reason"
                  className="font-mono text-[10px] tracking-[1px] text-[#e8e8e8] uppercase"
                >
                  What brings you here?
                </label>
                <select
                  id="reason"
                  name="reason"
                  defaultValue=""
                  className="border-[0.8px] border-[rgba(75,73,73,0.7)] bg-black px-4 py-3 text-sm text-white focus:border-[#ff884c] focus:outline-none"
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

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] tracking-[1px] text-[#e8e8e8] uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your challenge or what you're looking to solve..."
                  className="resize-none border-[0.8px] border-[rgba(75,73,73,0.7)] bg-black px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#ff884c] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-[#ff884c] py-4 text-sm font-medium tracking-[0.5px] text-black transition-opacity hover:opacity-90"
              >
                Schedule a Call
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
