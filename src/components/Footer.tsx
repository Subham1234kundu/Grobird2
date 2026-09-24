"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const FOOTER_COLUMNS = [
  {
    heading: "Services",
    links: [
      "Operational Discovery",
      "Custom Software",
      "Workflow Automation",
      "System Integration",
      "Business Intelligence",
      "Managed Services",
    ],
  },
  {
    heading: "Industries",
    links: ["Fintech", "Logistics", "Healthcare", "Lending", "Manufacturing"],
  },
  {
    heading: "Resources",
    links: [
      { label: "Partners", href: "/partners" },
      { label: "Blog", href: "/blogs" },
      { label: "About Us", href: "/about" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Linkedin", icon: "/landing/icon-linkedin.svg", href: "https://linkedin.com" },
  { label: "Instagram", icon: "/landing/icon-instagram.svg", href: "https://instagram.com" },
];

export default function Footer() {
  const root = useRef<HTMLElement>(null);

  // Reveal: the page content sticks once its bottom meets the viewport
  // bottom, and the footer, which has no fill of its own, slides up over
  // it while its backdrop blur turns whatever is beneath into frosted
  // glass. Plain CSS sticky (as on grounded2026.com) rather than a GSAP
  // pin, because the browser only blurs sticky content, not pinned/fixed.
  useEffect(() => {
    const footer = root.current;
    const main = footer?.previousElementSibling;
    if (!footer || !(main instanceof HTMLElement)) return;

    const place = () => {
      main.style.position = "sticky";
      main.style.top = `${Math.min(0, window.innerHeight - main.offsetHeight)}px`;
      main.style.zIndex = "0";
    };
    place();
    // The black fill is only a fallback for when scripts don't run.
    footer.style.backgroundColor = "transparent";

    const ro = new ResizeObserver(place);
    ro.observe(main);
    window.addEventListener("resize", place);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", place);
      main.style.position = "";
      main.style.top = "";
      main.style.zIndex = "";
    };
  }, []);

  return (
    <footer
      ref={root}
      className="relative z-10 overflow-hidden bg-black backdrop-blur-[10px]"
    >
      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 gap-10 border-b border-[rgba(67,67,67,0.54)] px-6 py-12 sm:px-10 lg:grid-cols-[360px_1fr_360px] lg:gap-0 lg:px-0 lg:py-0">
        <div className="flex flex-col justify-center gap-5 lg:border-r lg:border-[rgba(67,67,67,0.54)] lg:px-10 lg:py-12">
          <Image
            src="/landing/footer-logo.svg"
            alt="GroBird"
            width={257}
            height={67}
            className="h-[67px] w-auto"
          />
          <p className="font-sora text-[15.1px] text-[#f36f07]">
            Growing Beyond Limits.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:border-r lg:border-[rgba(67,67,67,0.54)] lg:px-10 lg:py-12 lg:gap-x-[92px]">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <p className="text-[15.5px] text-white/50">{column.heading}</p>
              <ul className="flex flex-col gap-[10px] text-[13.3px] text-white">
                {column.links.map((link) =>
                  typeof link === "string" ? (
                    <li key={link}>{link}</li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-white/70"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-5 lg:px-10 lg:py-12">
          <p className="text-[15.4px] tracking-[0.2px] text-white/50">
            Connect With Us
          </p>
          <ul className="flex flex-col gap-[13px]">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-[13px] text-[15.1px] text-white"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={22}
                    height={22}
                    aria-hidden
                  />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Wordmark only, no glow; the footer stays see-through beneath it. */}
      <div
        className="pointer-events-none relative w-full"
        style={{ aspectRatio: "1440 / 372" }}
        aria-hidden
      >
        <Image
          src="/landing/footer-wordmark-bg.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </footer>
  );
}
