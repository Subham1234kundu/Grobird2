import type { Metadata } from "next";
import Sidebar from "@/components/admin/Sidebar";
import { requireUser } from "@/lib/admin/auth";

export const metadata: Metadata = {
  title: "GroBird Admin",
  robots: { index: false, follow: false },
};

export default async function DashboardLayout({
  children,
}: LayoutProps<"/admin">) {
  const { user } = await requireUser();

  return (
    <div className="min-h-screen bg-[#f5f5f6] text-[#111] lg:flex">
      <Sidebar email={user.email ?? "admin"} />
      <main className="min-w-0 flex-1 px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
        <div className="mx-auto max-w-[1200px]">{children}</div>
      </main>
    </div>
  );
}
