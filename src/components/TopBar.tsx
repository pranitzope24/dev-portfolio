import { scrollToId } from "../lib/scroll";
import { Badge } from "./Badge";

const nav = [
  { id: "overview", label: "Overview" },
  { id: "modules", label: "Modules" },
  { id: "logs", label: "Logs" },
  { id: "services", label: "Services" },
  { id: "lab", label: "Lab" },
  { id: "boot", label: "Boot" },
];

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 cc-surface">
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
          <div className="hidden md:block">
            <Badge tone="blue">telemetry: enabled</Badge>
          </div>
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
      </div>
    </header>
  );
}
