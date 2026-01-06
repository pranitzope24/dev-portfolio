import { achievements } from "../content";
import { Section } from "../components/Section";
import { Badge } from "../components/Badge";
import { NodeIcon } from "../components/Icons";

type Props = {
  simpleView: boolean;
};

export function Milestones({ simpleView }: Props) {
  return (
    <Section
      id="milestones"
      title="Milestones"
      subtitle="Small, elegant checkpoints: certifications, recognitions, and shipped wins."
      right={!simpleView ? <Badge tone="green">progress: steady</Badge> : null}
    >
      <div className="p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {achievements.map((a) => (
            <div
              key={`${a.label}-${a.value}`}
              className="relative rounded-xl2 border border-border/60 bg-bg/20 p-5"
            >
              {!simpleView ? (
                <div className="absolute right-4 top-4 text-accent-green/80">
                  <NodeIcon className="h-5 w-5" />
                </div>
              ) : null}
              <div className="text-xs font-mono text-muted">{a.label}</div>
              <div className="mt-2 text-sm font-semibold text-text">
                {a.value}
              </div>
              {!simpleView ? (
                <div className="mt-4 h-px w-full bg-gradient-to-r from-accent-green/35 to-transparent" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
