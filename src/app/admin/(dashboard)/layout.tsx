import type { Metadata } from "next";
import Sidebar from "@/components/admin/Sidebar";
import { requireUser } from "@/lib/admin/auth";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GroBird Admin",
  robots: { index: false, follow: false },
};

export default async function DashboardLayout({
  children,
}: LayoutProps<"/admin">) {
  const { user } = await requireUser();

  return (
    <div className={`${montserrat.className} min-h-screen bg-[#f5f6fa] text-[#111]`}>
      <Sidebar email={user.email ?? "admin"} />
      <main className="min-w-0 px-4 py-[22px] lg:ml-[224px] lg:px-5">
        <div className="mx-auto max-w-[1200px]">{children}</div>
      </main>
    </div>
  );
}
