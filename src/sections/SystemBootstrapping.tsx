import { Badge } from "../components/Badge";
import { Section } from "../components/Section";
import { education } from "../content";

type Props = {
  simpleView: boolean;
};

export function SystemBootstrapping({ simpleView }: Props) {
  return (
    <Section
      id="boot"
      title="System Bootstrapping"
      subtitle="Education as the base image: what I learned and what I built on top."
      right={!simpleView ? <Badge tone="green">boot: ok</Badge> : null}
    >
      <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-3">
        <div className="rounded-xl2 border border-border/60 bg-bg/20 p-5 md:col-span-2 cc-surface">
          <div className="text-xs font-mono text-muted">degree</div>
          <div className="mt-2 text-base font-bold">{education.degree}</div>
          <div className="mt-1 text-sm text-muted">{education.institution}</div>
          <div className="mt-3 rounded-xl border border-border/60 bg-panel/25 px-3 py-2 text-xs font-mono text-muted cc-surface">
            {education.years}
          </div>
        </div>

        <div className="rounded-xl2 border border-border/60 bg-bg/20 p-5 cc-surface">
          <div className="text-xs font-mono text-muted">focus areas</div>
          <ul className="mt-3 space-y-2 text-sm text-text/90">
            {education.focus.map((f) => (
              <li key={f} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-teal/80" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
