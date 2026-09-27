import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Shared frame for the auth pages: logo, heading and form on the left,
 * one of the tall renders from public/Admin on the right.
 */
export default function AuthShell({
  title,
  subtitle,
  art,
  children,
}: {
  title: string;
  subtitle: string;
  art: "/Admin/sideImage.png" | "/Admin/forgot.png";
  children: ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col px-6 py-8 sm:px-12 lg:px-20 lg:py-12">
        <Image
          src="/Admin/loginLogo.png"
          alt="GroBird"
          width={512}
          height={170}
          priority
          className="h-[46px] w-auto self-start"
        />

        <div className="my-auto w-full max-w-[400px] py-12">
          <h1 className="font-sora text-[30px] leading-tight font-semibold tracking-[-0.6px] text-[#111]">
            {title}
          </h1>
          <p className="mt-2 text-sm text-[#8a8a92]">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>

        <p className="text-xs text-[#a0a0a5]">
          © {new Date().getFullYear()} GroBird. Admin access only.
        </p>
      </div>

      <div className="relative hidden lg:block">
        <Image
          src={art}
          alt=""
          fill
          sizes="50vw"
          priority
          className="object-cover"
          aria-hidden
        />
      </div>
    </>
  );
}
