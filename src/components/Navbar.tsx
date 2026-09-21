"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type DropdownItem = {
  label: string;
  description: string;
  href: string;
  icon: string;
};

const SERVICES_MENU: DropdownItem[] = [
  {
    label: "Operational Discovery",
    description: "Identify bottlenecks and map your business processes.",
    href: "/services/operational-discovery",
    icon: "/services/icons/operational-discovery.svg",
  },
  {
    label: "Custom Software",
    description: "Purpose-built applications designed to scale with you.",
    href: "/services/custom-software",
    icon: "/services/icons/custom-software.svg",
  },
  {
    label: "Workflow Automation",
    description: "Streamline operations and eliminate manual tasks.",
    href: "/services/workflow-automation",
    icon: "/services/icons/workflow-automation.svg",
  },
  {
    label: "System Integration",
    description: "Unify your tech stack for seamless data flow.",
    href: "/services/system-integration",
    icon: "/services/icons/system-integration.svg",
  },
  {
    label: "Business Intelligence",
    description: "Transform raw data into clear, actionable insights.",
    href: "/services/business-intelligence",
    icon: "/services/icons/business-intelligence.svg",
  },
  {
    label: "Managed Services",
    description: "Reliable maintenance for your infrastructure.",
    href: "/services/managed-services",
    icon: "/services/icons/managed-services.svg",
  },
];

const INDUSTRIES_MENU: DropdownItem[] = [
  {
    label: "Fintech",
    description: "Secure, compliant, and scalable digital financial platforms.",
    href: "/industries/fintech",
    icon: "/industries/icons/fintech.svg",
  },
  {
    label: "Logistics",
    description: "Optimize supply chains, routing, and inventory tracking.",
    href: "/industries/logistics",
    icon: "/industries/icons/logistics.svg",
  },
  {
    label: "Healthcare",
    description: "Patient-centric software and HIPAA-compliant operational systems.",
    href: "/industries/healthcare",
    icon: "/industries/icons/healthcare.svg",
  },
  {
    label: "Lending",
    description: "Streamlined loan origination, underwriting, and lifecycle management.",
    href: "/industries/lending",
    icon: "/industries/icons/lending.svg",
  },
  {
    label: "Manufacturing",
    description: "Smart factory integrations, ERPs, and production floor analytics.",
    href: "/industries/manufacturing",
    icon: "/industries/icons/manufacturing.svg",
  },
];

const NAV_LINKS = [
  { label: "Services", href: "/services", menu: SERVICES_MENU },
  { label: "Industries", href: "/industries", menu: INDUSTRIES_MENU },
  { label: "Partners", href: "/partners", menu: null },
  { label: "About Us", href: "/about", menu: null },
  { label: "Blogs", href: "/blogs", menu: null },
] as const;

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!openMenu) return;

    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ede9de] bg-[#fafafa]">
      <div className="mx-auto flex h-[71px] max-w-[1357px] items-center justify-between px-6 sm:px-10">
        <Link href="/" className="block h-[30px] w-[114px] shrink-0">
          <Image
            src="/landing/nav-logo.svg"
            alt="GroBird"
            width={114}
            height={30}
            className="h-full w-full"
            priority
          />
        </Link>

        <nav ref={navRef} className="hidden items-center gap-[18px] lg:flex">
          {NAV_LINKS.map((link) =>
            link.menu ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu((current) =>
                      current === link.label ? null : link.label,
                    )
                  }
                  aria-expanded={openMenu === link.label}
                  aria-haspopup="true"
                  className="flex items-center gap-[6px] px-[6px] py-[6px] text-[13.9px] font-medium tracking-[0.4px] text-black/75 transition-colors hover:text-black"
                >
                  {link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`shrink-0 transition-transform ${openMenu === link.label ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M5.60224 8.94084L1.04733 4.38591C0.827648 4.16623 0.827648 3.81007 1.04733 3.59041L1.57859 3.05916C1.79789 2.83985 2.15332 2.83943 2.37314 3.05822L6 6.66809L9.62684 3.05822C9.84666 2.83943 10.2021 2.83985 10.4214 3.05916L10.9526 3.59041C11.1723 3.81009 11.1723 4.16625 10.9526 4.38591L6.39776 8.94084C6.17808 9.1605 5.82192 9.1605 5.60224 8.94084Z"
                      fill="black"
                    />
                  </svg>
                </button>

                {openMenu === link.label && (
                  <div
                    className="absolute top-[calc(100%+12px)] left-1/2 w-[300px] -translate-x-1/2 overflow-clip rounded-bl-2xl rounded-br-2xl border border-[#eaecf0] bg-white shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]"
                    role="menu"
                  >
                    <div className="flex w-full flex-col items-start gap-1.5 p-3">
                      {link.menu.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          role="menuitem"
                          onClick={() => setOpenMenu(null)}
                          className="flex w-full items-start gap-2.5 rounded-lg p-2.5 transition-colors hover:bg-[#f9f8ff]"
                        >
                          <span className="flex shrink-0 items-center justify-center rounded-full bg-[#f9f8ff] p-2">
                            <Image
                              src={item.icon}
                              alt=""
                              width={18}
                              height={18}
                              className="size-[18px]"
                            />
                          </span>
                          <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
                            <span className="text-[13.5px] leading-[1.15] font-semibold text-black">
                              {item.label}
                            </span>
                            <span className="text-[12px] leading-[1.4] text-[#6f6c90]">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="px-[6px] py-[6px] text-[13.9px] font-medium tracking-[0.4px] text-black/75 transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <Link
          href="/contact"
          className="flex h-10 shrink-0 items-center justify-center bg-black px-[18px] text-[12.7px] font-medium tracking-[0.5px] text-white capitalize transition-opacity hover:opacity-85"
        >
          Contact us
        </Link>
      </div>
    </header>
  );
}
