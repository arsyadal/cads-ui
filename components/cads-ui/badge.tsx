import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "acid" | "copper" | "outline";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  default: "border-bone/12 bg-bone/[0.08] text-bone/78",
  acid: "border-acid/25 bg-acid/12 text-acid",
  copper: "border-copper/30 bg-copper/12 text-[#ffb27d]",
  outline: "border-bone/20 bg-transparent text-bone/65",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
