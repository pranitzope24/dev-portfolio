import { Badge } from "../components/Badge";
import { Section } from "../components/Section";
import { SystemPulse } from "../components/SystemPulse";
import { experienceLogs } from "../content";

type Props = {
  simpleView: boolean;
};

function fmt(ts: string) {
  try {
    return new Date(ts).toISOString().replace("T", " ").replace("Z", "Z");
  } catch {
    return ts;
  }
}

export function ExecutionLogs({ simpleView }: Props) {
  return (
    <Section
      id="logs"
      title="Execution Logs"
      subtitle="Experience presented as structured logs: timestamped, expandable, and impact-oriented."
      right={!simpleView ? <Badge tone="green">severity: low</Badge> : null}
    >
      <div className="p-6">
        <div className="space-y-4">
          {experienceLogs.map((e) => (
            <details
              key={`${e.org}-${e.title}-${e.timestamp}`}
              className="group rounded-xl2 border border-border/60 bg-bg/20 cc-surface"
            >
              <summary className="flex cursor-pointer list-none flex-col gap-2 px-5 py-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-mono text-muted">
                    <SystemPulse tone="teal" size="sm" ariaLabel="Log stream active" />
                    {!simpleView ? `[${fmt(e.timestamp)}]` : "entry"}{" "}
                    <span className="text-accent-teal">INFO</span>{" "}
                    <span className="text-text">{e.title}</span>
                    <span className="text-muted"> @ {e.org}</span>
                  </div>
                  <div className="mt-2 text-sm text-text/90">{e.summary}</div>
                </div>
                <div className="mt-1 flex items-center gap-2 md:mt-0">
                  <span className="rounded-full border border-border/60 bg-panel/40 px-3 py-1 text-xs font-mono text-muted cc-surface">
                    expand
                  </span>
                  <span className="text-xs font-mono text-muted transition group-open:rotate-180">
                    ▾
                  </span>
                </div>
              </summary>

              <div className="grid grid-cols-1 gap-5 border-t border-border/60 px-5 py-4 md:grid-cols-3">
                <div>
                  <div className="text-xs font-mono text-muted">impact</div>
                  <ul className="mt-2 space-y-2 text-sm text-text/90">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue/80" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-mono text-muted">stack</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {e.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border/60 bg-panel/30 px-3 py-1 text-xs font-semibold text-text cc-surface"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-muted">learnings</div>
                  <ul className="mt-2 space-y-2 text-sm text-text/90">
                    {e.learnings.map((l) => (
                      <li key={l} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-purple/80" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
