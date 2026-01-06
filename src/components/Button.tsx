import type { ReactNode } from "react";

type Props = {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
  children: ReactNode;
};

export function Button({
  variant = "secondary",
  onClick,
  href,
  children,
}: Props) {
  const cls =
    variant === "primary"
      ? "bg-accent-blue/15 border-accent-blue/45 hover:shadow-glow"
      : "bg-panel/50 border-border/70 hover:border-accent-teal/40";

  const common =
    "inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold text-text transition will-change-transform hover:scale-[1.01]";

  if (href) {
    return (
      <a
        className={`${common} ${cls}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${common} ${cls}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}
