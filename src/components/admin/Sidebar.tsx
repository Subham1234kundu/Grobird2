"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut } from "@/app/admin/actions";

const NAV = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/admin/leads", label: "Lead", icon: "lead" },
  { href: "/admin/analytics", label: "Google Analytics", icon: "analytics" },
  { href: "/admin/blogs", label: "Blogs", icon: "blog" },
  { href: "/admin/case-studies", label: "Case Studies", icon: "blog" },
];
export default function Sidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const nav = <nav className="flex flex-col gap-1 p-[7px] pt-[19px]">{NAV.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname.startsWith(item.href) ? "page" : undefined} className={`flex h-[32px] items-center gap-[18px] rounded-md px-[11px] text-[12px] text-[#313336] transition-colors ${pathname.startsWith(item.href) ? "bg-[#edeef2]" : "hover:bg-[#edeef2]"}`}><Image src={`/Admin/figma/${item.icon}.svg`} alt="" width={14} height={14} aria-hidden />{item.label}</Link>)}</nav>;
  const logout = <form action={signOut} className="mt-auto border-t border-[#e4e4e4] p-[14px]"><button className="flex h-8 w-full items-center gap-[18px] px-[11px] text-[12px]"><Image src="/Admin/figma/logout.svg" alt="" width={14} height={14} aria-hidden />Logout</button></form>;
  return <>
    <header className="flex h-[53px] items-center justify-between bg-[#000a1b] px-[21px]">
      <Link href="/admin/dashboard" aria-label="GroBird dashboard" className="relative block h-[31px] w-[92px] overflow-hidden"><Image src="/Admin/figma/logo.png" alt="GroBird" width={92} height={92} className="absolute top-[-30.5px] left-0" priority /></Link>
      <div className="flex items-center gap-4"><button aria-label="Open menu" className="text-xl text-white lg:hidden" onClick={() => setOpen(true)}>☰</button><span title={email} className="flex size-7 items-center justify-center rounded-full bg-white text-[10.5px] text-[#000a1b]">{email.slice(0, 2).toUpperCase()}</span></div>
    </header>
    <aside className="fixed top-[53px] bottom-0 left-0 hidden w-[224px] flex-col border-r border-[#e4e4e4] bg-[#fafafa] lg:flex">{nav}{logout}</aside>
    {open && <div className="fixed inset-0 z-40 lg:hidden"><button aria-label="Close menu" className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} /><aside className="absolute inset-y-0 left-0 flex w-[224px] flex-col bg-[#fafafa]"><button aria-label="Close menu" className="self-end p-4" onClick={() => setOpen(false)}>✕</button>{nav}{logout}</aside></div>}
  </>;
}
