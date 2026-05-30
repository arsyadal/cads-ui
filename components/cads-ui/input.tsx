import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "h-11 w-full rounded-2xl border border-bone/12 bg-black/25 px-4 text-sm text-bone outline-none transition placeholder:text-bone/35 hover:border-bone/20 focus:border-acid/55 focus:ring-2 focus:ring-acid/15 disabled:cursor-not-allowed disabled:opacity-45",
        className,
      )}
      {...props}
    />
  );
}
