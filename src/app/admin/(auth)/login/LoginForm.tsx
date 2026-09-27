"use client";

import Link from "next/link";
import { useActionState } from "react";
import PasswordInput from "@/components/admin/PasswordInput";
import { Alert, Button, Field, inputClass } from "@/components/admin/ui";
import { signIn, type AuthState } from "@/app/admin/actions";

export default function LoginForm({ initialError }: { initialError?: string }) {
  const [state, action, pending] = useActionState<AuthState, FormData>(
    signIn,
    { error: initialError },
  );

  return (
    <form action={action} className="flex flex-col gap-5">
      {state.error && <Alert tone="error">{state.error}</Alert>}

      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@grobird.in"
          className={inputClass}
        />
      </Field>

      <Field label="Password" htmlFor="password">
        <PasswordInput
          id="password"
          name="password"
          autoComplete="current-password"
          required
          placeholder="••••••••"
        />
      </Field>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-[#5b5b63]">
          <input
            type="checkbox"
            name="remember"
            defaultChecked
            className="size-4 accent-[#ff884c]"
          />
          Remember me
        </label>
        <Link
          href="/admin/forgot-password"
          className="font-medium text-[#c9531a] hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" disabled={pending} className="mt-2 h-11 w-full">
        {pending ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  );
}
