import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { projects } from "../content";

type Props = {
  simpleView: boolean;
};

export function DeployedServices({ simpleView }: Props) {
  return (
    <Section
      id="services"
      title="Deployed Services"
      subtitle="Projects presented like backend services: purpose, architecture snapshot, and reliability posture."
      right={!simpleView ? <Badge tone="teal" pulse>traffic: normal</Badge> : null}
    >
      <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group rounded-xl2 border border-border/60 bg-bg/20 p-5 transition hover:border-accent-blue/35 hover:shadow-glow cc-surface"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-bold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-text/90">{p.purpose}</p>
              </div>
              {!simpleView ? <Badge tone="blue">service</Badge> : null}
            </div>

            <div className="mt-4">
              <div className="text-xs font-mono text-muted">
                architecture snapshot
              </div>
              <pre className="mt-2 overflow-auto rounded-xl border border-border/60 bg-panel/30 p-3 text-xs font-mono text-text/90 cc-surface">
                {p.snapshot}
              </pre>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <div className="text-xs font-mono text-muted">
                  challenges solved
                </div>
                <ul className="mt-2 space-y-2 text-sm text-text/90">
                  {p.challenges.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-purple/80" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs font-mono text-muted">
                  reliability considerations
                </div>
                <ul className="mt-2 space-y-2 text-sm text-text/90">
                  {p.reliability.map((r) => (
                    <li key={r} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-green/80" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-xs font-mono text-muted">stack</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border/60 bg-panel/30 px-3 py-1 text-xs font-semibold text-text"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {p.href || p.repo ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {p.href ? <Button href={p.href}>Live</Button> : null}
                {p.repo ? <Button href={p.repo}>Repo</Button> : null}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
