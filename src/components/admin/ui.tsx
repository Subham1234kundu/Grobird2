import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* Small set of admin primitives. Light theme: white cards on #f5f5f6,
   black primary buttons, brand orange (#ff884c) for accents. */

export const inputClass =
  "h-11 w-full rounded-lg border border-[#e3e3e6] bg-white px-3.5 text-sm text-[#111] outline-none transition-colors placeholder:text-[#a0a0a5] focus:border-[#ff884c] focus:ring-2 focus:ring-[#ff884c]/20 disabled:bg-[#f5f5f6]";

export const labelClass =
  "text-[12px] font-medium tracking-[0.2px] text-[#5b5b63]";

export function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
      {hint && <p className="text-[11px] text-[#8a8a92]">{hint}</p>}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";

const buttonBase =
  "inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-black text-white hover:bg-[#222]",
  secondary:
    "border border-[#e3e3e6] bg-white text-[#111] hover:border-[#c8c8cd] hover:bg-[#fafafa]",
  danger: "bg-[#d92d20] text-white hover:bg-[#b42318]",
  ghost: "text-[#5b5b63] hover:bg-[#f0f0f2] hover:text-[#111]",
};

export function buttonClass(variant: ButtonVariant = "primary") {
  return `${buttonBase} ${buttonVariants[variant]}`;
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: ButtonVariant }) {
  return (
    <button
      {...props}
      className={`${buttonClass(variant)} ${className}`}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  return (
    <Link {...props} className={`${buttonClass(variant)} ${className}`} />
  );
}

export function Card({
  title,
  action,
  children,
  className = "",
}: {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-xl border border-[#e8e8eb] bg-white ${className}`}
    >
      {(title || action) && (
        <header className="flex items-center justify-between gap-4 border-b border-[#eeeef0] px-5 py-3.5">
          {title && (
            <h2 className="font-sora text-[15px] font-semibold text-[#111]">
              {title}
            </h2>
          )}
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

export function Badge({
  tone = "neutral",
  children,
}: {
  tone?: "neutral" | "success" | "warning" | "brand";
  children: ReactNode;
}) {
  const tones = {
    neutral: "bg-[#f0f0f2] text-[#5b5b63]",
    success: "bg-[#e7f6ec] text-[#1a7f42]",
    warning: "bg-[#fff4e5] text-[#b25e09]",
    brand: "bg-[#ff884c]/15 text-[#c9531a]",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-6 py-16 text-center">
      <p className="font-sora text-[15px] font-semibold text-[#111]">{title}</p>
      {body && <p className="max-w-sm text-sm text-[#8a8a92]">{body}</p>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}

export function Alert({
  tone,
  children,
}: {
  tone: "error" | "success" | "info";
  children: ReactNode;
}) {
  const tones = {
    error: "border-[#f5c2bd] bg-[#fef3f2] text-[#b42318]",
    success: "border-[#b7e4c7] bg-[#ecfdf3] text-[#1a7f42]",
    info: "border-[#ffd9c4] bg-[#fff7f2] text-[#9a4a1c]",
  };
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={`rounded-lg border px-4 py-3 text-sm ${tones[tone]}`}
    >
      {children}
    </div>
  );
}

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-sora text-2xl font-semibold tracking-[-0.5px] text-[#111]">
          {title}
        </h1>
        {description && (
          <p className="mt-1 text-sm text-[#8a8a92]">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
