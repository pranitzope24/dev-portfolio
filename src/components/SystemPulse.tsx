/**
 * SystemPulse - Reusable heartbeat indicator for monitoring dashboards
 *
 * Shows a clear, visible pulse animation with:
 * - Expanding ring glow (2s cycle, ~2.8x scale)
 * - Static center dot (status color)
 * - Respects prefers-reduced-motion for accessibility
 * - Zero JS timers, pure CSS animation
 */

type Props = {
  tone?: "blue" | "teal" | "purple" | "green";
  size?: "sm" | "md";
  ariaLabel?: string;
};

const tones: Record<NonNullable<Props["tone"]>, { ring: string; dot: string }> = {
  blue: {
    ring: "bg-accent-blue/30",
    dot: "bg-accent-blue",
  },
  teal: {
    ring: "bg-accent-teal/30",
    dot: "bg-accent-teal",
  },
  purple: {
    ring: "bg-accent-purple/30",
    dot: "bg-accent-purple",
  },
  green: {
    ring: "bg-accent-green/30",
    dot: "bg-accent-green",
  },
};

const sizes = {
  sm: {
    container: "h-2.5 w-2.5",
    dot: "h-1.5 w-1.5",
  },
  md: {
    container: "h-3 w-3",
    dot: "h-2 w-2",
  },
};

export function SystemPulse({
  tone = "green",
  size = "md",
  ariaLabel = "System status: active",
}: Props) {
  const colors = tones[tone];
  const dims = sizes[size];

  return (
    <div
      className={`pulse-dot relative inline-flex items-center justify-center ${dims.container}`}
      role="status"
      aria-label={ariaLabel}
    >
      {/* Expanding ring glow - CSS animation */}
      <span
        className={`pulse-ring ${colors.ring} animate-system-pulse`}
        aria-hidden="true"
      />
      {/* Static center dot */}
      <span
        className={`pulse-center ${colors.dot} ${dims.dot}`}
        aria-hidden="true"
      />
    </div>
  );
}
