"use client";

import Image from "next/image";
import { useState, type ComponentProps } from "react";
import { inputClass } from "./ui";

export default function PasswordInput(props: ComponentProps<"input">) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        {...props}
        type={visible ? "text" : "password"}
        className={`${inputClass} pr-11`}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Hide password" : "Show password"}
        aria-pressed={visible}
        className={`absolute top-1/2 right-3 -translate-y-1/2 transition-opacity ${
          visible ? "opacity-100" : "opacity-50 hover:opacity-80"
        }`}
      >
        <Image src="/Admin/eye.png" alt="" width={20} height={20} aria-hidden />
      </button>
    </div>
  );
}
