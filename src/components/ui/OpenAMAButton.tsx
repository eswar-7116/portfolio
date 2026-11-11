"use client";

import type { ReactNode } from "react";

/** Opens the floating AMA chat. */
export default function OpenAMAButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => document.getElementById("ama-fab")?.click()}
      className={className}
    >
      {children}
    </button>
  );
}
