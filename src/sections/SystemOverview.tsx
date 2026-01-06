import { overview } from "../content";
import { Section } from "../components/Section";
import { Badge } from "../components/Badge";

type Props = {
  simpleView: boolean;
};

export function SystemOverview({ simpleView }: Props) {
  return (
    <Section
      id="overview"
      title="System Overview"
      subtitle="A calm, recruiter-scannable view of what this system is optimized for."
      right={
        !simpleView ? (
          <Badge tone="teal">mode: observability-first</Badge>
        ) : null
      }
    >
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
        <div>
          <div className="text-xs font-mono text-muted">/health</div>
          <p className="mt-3 text-sm leading-relaxed text-text/90">
            {overview.summary}
          </p>
        </div>

        <div>
          <div className="text-xs font-mono text-muted">/capabilities</div>
          <ul className="mt-3 space-y-3 text-sm text-text/90">
            {overview.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue/80" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
