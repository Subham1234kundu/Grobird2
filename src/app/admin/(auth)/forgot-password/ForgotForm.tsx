"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Alert, Button, Field, inputClass } from "@/components/admin/ui";
import { requestPasswordReset, type AuthState } from "@/app/admin/actions";

export default function ForgotForm() {
  const [state, action, pending] = useActionState<AuthState, FormData>(
    requestPasswordReset,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-5">
      {state.error && <Alert tone="error">{state.error}</Alert>}
      {state.message && <Alert tone="success">{state.message}</Alert>}

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

      <Button type="submit" disabled={pending} className="h-11 w-full">
        {pending ? "Sending…" : "Send reset link"}
      </Button>

      <Link
        href="/admin/login"
        className="text-center text-sm font-medium text-[#5b5b63] hover:text-[#111]"
      >
        ← Back to sign in
      </Link>
    </form>
  );
}
