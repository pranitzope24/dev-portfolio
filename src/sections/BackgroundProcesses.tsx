import { Badge } from "../components/Badge";
import { ChipIcon, NodeIcon } from "../components/Icons";
import { Section } from "../components/Section";
import { hobbies } from "../content";

type Props = {
  simpleView: boolean;
};

export function BackgroundProcesses({ simpleView }: Props) {
  return (
    <Section
      id="processes"
      title="Background Processes"
      subtitle="Small routines that keep the system healthy."
      right={!simpleView ? <Badge tone="teal">priority: low</Badge> : null}
    >
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {hobbies.map((h, idx) => (
            <div
              key={h.label}
              className="group flex items-center gap-3 rounded-xl2 border border-border/60 bg-bg/20 px-4 py-3 cc-surface"
              title={!simpleView ? `${h.label} — ${h.hint}` : h.label}
            >
              <div
                className={`grid h-9 w-9 place-items-center rounded-xl border border-border/60 bg-panel/35 cc-surface ${
                  idx % 2 === 0 ? "text-accent-teal" : "text-accent-purple"
                }`}
                aria-hidden
              >
                {idx % 2 === 0 ? (
                  <NodeIcon className="h-4 w-4" />
                ) : (
                  <ChipIcon className="h-4 w-4" />
                )}
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-text">
                  {simpleView ? h.label : h.label}
                </div>
                {!simpleView ? (
                  <div className="mt-0.5 truncate text-xs font-mono text-muted">
                    {h.hint}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
