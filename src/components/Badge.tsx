import type { ReactNode } from "react";
import { SystemPulse } from "./SystemPulse";

type Props = {
  tone?: "blue" | "teal" | "purple" | "green" | "neutral";
  pulse?: boolean;
  children: ReactNode;
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  neutral: "border-border/60 text-muted",
  blue: "border-accent-blue/40 text-accent-blue",
  teal: "border-accent-teal/40 text-accent-teal",
  purple: "border-accent-purple/40 text-accent-purple",
  green: "border-accent-green/40 text-accent-green",
};

export function Badge({ tone = "neutral", pulse = false, children }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]} bg-panel/30`}
    >
      {pulse && tone !== "neutral" ? (
        <SystemPulse
          tone={tone as "blue" | "teal" | "purple" | "green"}
          size="sm"
          ariaLabel={`Indicator: ${children}`}
        />
      ) : null}
      {children}
    </span>
  );
}
