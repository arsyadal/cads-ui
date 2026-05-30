import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full resize-y rounded-2xl border border-bone/12 bg-black/25 px-4 py-3 text-sm text-bone outline-none transition placeholder:text-bone/35 hover:border-bone/20 focus:border-acid/55 focus:ring-2 focus:ring-acid/15 disabled:cursor-not-allowed disabled:opacity-45",
        className,
      )}
      {...props}
    />
  );
}
