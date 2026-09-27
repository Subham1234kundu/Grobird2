"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut } from "@/app/admin/actions";

const NAV = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "/Admin/dashboardImage/dashboard.png" },
  { href: "/admin/blogs", label: "Blogs", icon: "/Admin/dashboardImage/pressRelease.png" },
  { href: "/admin/leads", label: "Leads", icon: "/Admin/dashboardImage/lead.png" },
  { href: "/admin/analytics", label: "Analytics", icon: "/Admin/dashboardImage/googleAnalytics.png" },
];

export default function Sidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = (
    <nav className="flex flex-1 flex-col gap-1 px-3">
      {NAV.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              active
                ? "bg-[#ff884c]/12 text-[#111]"
                : "text-[#5b5b63] hover:bg-[#f0f0f2] hover:text-[#111]"
            }`}
          >
            <span
              className={`flex size-8 items-center justify-center rounded-md ${
                active ? "bg-[#ff884c]" : "bg-[#f0f0f2]"
              }`}
            >
              <Image
                src={item.icon}
                alt=""
                width={18}
                height={18}
                className={active ? "invert" : "opacity-70"}
                aria-hidden
              />
            </span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  const footer = (
    <div className="border-t border-[#eeeef0] p-3">
      <Link
        href="/"
        target="_blank"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#5b5b63] hover:bg-[#f0f0f2] hover:text-[#111]"
      >
        <span className="w-8 text-center" aria-hidden>
          ↗
        </span>
        View site
      </Link>
      <div className="mt-2 flex items-center gap-3 rounded-lg bg-[#f7f7f8] px-3 py-2.5">
        <Image
          src="/Admin/userZero.png"
          alt=""
          width={32}
          height={32}
          className="size-8 rounded-full"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-medium text-[#111]">{email}</p>
          <p className="text-[11px] text-[#8a8a92]">Administrator</p>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            title="Sign out"
            className="rounded-md px-2 py-1 text-[12px] font-medium text-[#8a8a92] hover:bg-white hover:text-[#111]"
          >
            Log out
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-[#eeeef0] bg-white px-4 lg:hidden">
        <Image src="/Admin/loginLogo.png" alt="GroBird" width={512} height={170} className="h-8 w-auto" />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex flex-col gap-1.5 p-2"
        >
          <span className="block h-[2px] w-5 bg-black" />
          <span className="block h-[2px] w-5 bg-black" />
          <span className="block h-[2px] w-5 bg-black" />
        </button>
      </header>

      {/* Drawer (mobile) */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          <aside className="absolute inset-y-0 left-0 flex w-[260px] flex-col bg-white shadow-xl">
            <div className="flex h-14 items-center justify-between px-4">
              <Image src="/Admin/loginLogo.png" alt="GroBird" width={512} height={170} className="h-8 w-auto" />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                <Image src="/Admin/dashboardImage/cross.png" alt="" width={20} height={20} aria-hidden />
              </button>
            </div>
            <div className="py-3">{nav}</div>
            <div className="mt-auto">{footer}</div>
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-[248px] shrink-0 flex-col border-r border-[#eeeef0] bg-white lg:flex">
        <div className="flex h-[72px] items-center px-6">
          <Image src="/Admin/loginLogo.png" alt="GroBird" width={512} height={170} priority className="h-9 w-auto" />
        </div>
        <div className="flex flex-1 flex-col py-2">{nav}</div>
        {footer}
      </aside>
    </>
  );
}
