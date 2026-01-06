import { scrollToId } from "../lib/scroll";
import { Badge } from "./Badge";

type Props = {
  simpleView: boolean;
  onToggleSimpleView: () => void;
};

const nav = [
  { id: "overview", label: "Overview" },
  { id: "modules", label: "Modules" },
  { id: "logs", label: "Logs" },
  { id: "services", label: "Services" },
  { id: "lab", label: "Lab" },
  { id: "boot", label: "Boot" },
];

export function TopBar({ simpleView, onToggleSimpleView }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-accent-green/90 shadow-[0_0_20px_rgb(var(--cc-green)/0.25)]" />
          <div>
            <div className="text-sm font-semibold tracking-tight">
              System Control Center
            </div>
            <div className="text-xs font-mono text-muted">
              status: online • region: local
            </div>
          </div>
          {!simpleView ? (
            <div className="hidden md:block">
              <Badge tone="blue">telemetry: enabled</Badge>
            </div>
          ) : null}
        </div>

        <nav className="hidden items-center gap-3 md:flex">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id)}
              className="rounded-lg px-2 py-1 text-xs font-semibold text-muted transition hover:text-text"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={onToggleSimpleView}
          className="inline-flex items-center gap-3 rounded-xl border border-border/70 bg-panel/50 px-3 py-2 text-xs font-semibold text-text transition hover:border-accent-purple/35"
          aria-pressed={simpleView}
        >
          <span className="font-mono text-muted">view</span>
          <span>{simpleView ? "Simple" : "System"}</span>
          <span
            className={`relative h-5 w-9 rounded-full border border-border/70 bg-bg/70 transition ${
              simpleView
                ? "shadow-none"
                : "shadow-[0_0_22px_rgb(var(--cc-blue)/0.16)]"
            }`}
            aria-hidden
          >
            <span
              className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-text/90 transition ${
                simpleView ? "left-1" : "left-4"
              }`}
            />
          </span>
        </button>
      </div>
    </header>
  );
}
