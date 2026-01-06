import type { ReactNode } from "react";

type Props = {
  tone?: "blue" | "teal" | "purple" | "green" | "neutral";
  children: ReactNode;
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  neutral: "border-border/60 text-muted",
  blue: "border-accent-blue/40 text-accent-blue",
  teal: "border-accent-teal/40 text-accent-teal",
  purple: "border-accent-purple/40 text-accent-purple",
  green: "border-accent-green/40 text-accent-green",
};

export function Badge({ tone = "neutral", children }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]} bg-panel/30`}
    >
      {children}
    </span>
  );
}
