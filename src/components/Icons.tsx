type Props = { className?: string };

export function ChipIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className ?? "h-4 w-4"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 7h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function NodeIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className ?? "h-4 w-4"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 7l10 0M7 17l10 0M7 7l0 10M17 7l0 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
