"use client";

import { useActionState } from "react";
import PasswordInput from "@/components/admin/PasswordInput";
import { Alert, Button, Field } from "@/components/admin/ui";
import { updatePassword, type AuthState } from "@/app/admin/actions";

export default function ResetForm() {
  const [state, action, pending] = useActionState<AuthState, FormData>(
    updatePassword,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-5">
      {state.error && <Alert tone="error">{state.error}</Alert>}

      <Field label="New password" htmlFor="password" hint="At least 8 characters.">
        <PasswordInput
          id="password"
          name="password"
          autoComplete="new-password"
          required
          minLength={8}
        />
      </Field>

      <Field label="Confirm password" htmlFor="confirm">
        <PasswordInput
          id="confirm"
          name="confirm"
          autoComplete="new-password"
          required
          minLength={8}
        />
      </Field>

      <Button type="submit" disabled={pending} className="h-11 w-full">
        {pending ? "Saving…" : "Update password"}
      </Button>
    </form>
  );
}
