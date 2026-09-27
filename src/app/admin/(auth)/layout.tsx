import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GroBird Admin",
  robots: { index: false, follow: false },
};

/** Split layout for sign-in, forgot and reset pages: form left, art right. */
export default function AuthLayout({ children }: LayoutProps<"/admin">) {
  return (
    <div className="min-h-screen bg-white text-[#111] lg:grid lg:grid-cols-2">
      {children}
    </div>
  );
}
