"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { Button } from "./ui";

/** Trash action that asks for confirmation in a small modal first. */
export default function DeleteButton({
  onConfirm,
  title,
  body,
  compact,
}: {
  onConfirm: () => Promise<void>;
  title: string;
  body: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  return (
    <>
      {compact ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          title="Delete"
          aria-label="Delete"
          className="rounded-md p-1.5 opacity-60 transition-opacity hover:bg-[#fef3f2] hover:opacity-100"
        >
          <Image src="/Admin/dashboardImage/deleteTwo.png" alt="" width={18} height={18} aria-hidden />
        </button>
      ) : (
        <Button type="button" variant="danger" onClick={() => setOpen(true)}>
          Delete
        </Button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Cancel"
            onClick={() => !pending && setOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-title"
            className="relative w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-2xl"
          >
            <Image
              src="/Admin/delete.png"
              alt=""
              width={56}
              height={56}
              className="mx-auto"
              aria-hidden
            />
            <h3 id="delete-title" className="mt-4 font-sora text-lg font-semibold text-[#111]">
              {title}
            </h3>
            <p className="mt-1 text-sm text-[#8a8a92]">{body}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button type="button" variant="secondary" disabled={pending} onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                type="button"
                variant="danger"
                disabled={pending}
                onClick={() => startTransition(() => onConfirm())}
              >
                {pending ? "Deleting…" : "Delete"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
