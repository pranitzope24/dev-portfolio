import { skillGroups } from "../content";
import { Section } from "../components/Section";
import { Badge } from "../components/Badge";
import { ChipIcon } from "../components/Icons";

type Props = {
  simpleView: boolean;
};

const accentCls: Record<string, string> = {
  blue: "text-accent-blue border-accent-blue/30",
  teal: "text-accent-teal border-accent-teal/30",
  purple: "text-accent-purple border-accent-purple/30",
  green: "text-accent-green border-accent-green/30",
};

export function TechStackModules({ simpleView }: Props) {
  return (
    <Section
      id="modules"
      title="Tech Stack Modules"
      subtitle="Skills exposed as runtime modules — each has a real-world purpose, not a buzzword."
      right={!simpleView ? <Badge tone="blue">load: stable</Badge> : null}
    >
      <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className={`rounded-xl2 border bg-bg/20 p-5 ${accentCls[g.accent]}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-text">{g.title}</div>
                <div className="mt-1 text-xs text-muted">{g.subtitle}</div>
              </div>
              {!simpleView ? <Badge tone={g.accent}>module</Badge> : null}
            </div>

            <div className="mt-4 space-y-3">
              {g.items.map((it) => (
                <div
                  key={it.name}
                  className="flex gap-3 rounded-xl border border-border/50 bg-panel/30 px-4 py-3"
                >
                  <div className="mt-0.5 shrink-0 text-text/80">
                    <ChipIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text">
                      {it.name}
                    </div>
                    <div className="mt-1 text-xs text-muted">{it.usage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
