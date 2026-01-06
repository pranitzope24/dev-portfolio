import { profile } from "../content";
import { Badge } from "../components/Badge";

type Props = {
  simpleView: boolean;
};

export function SystemShutdown({ simpleView }: Props) {
  return (
    <footer className="mt-10 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-mono text-muted">system::shutdown</div>
            <div className="mt-2 text-lg font-bold tracking-tight">
              Contact / Links
            </div>
            <div className="mt-2 text-sm text-muted">
              Calm, async-friendly. I reply with context and next steps.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              className="rounded-xl border border-border/70 bg-panel/40 px-4 py-2 text-sm font-semibold text-text transition hover:border-accent-blue/35"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-xl border border-border/70 bg-panel/40 px-4 py-2 text-sm font-semibold text-text transition hover:border-accent-teal/35"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-xl border border-border/70 bg-panel/40 px-4 py-2 text-sm font-semibold text-text transition hover:border-accent-purple/35"
              href={profile.links.email}
            >
              Email
            </a>
            {!simpleView ? <Badge tone="green">heartbeat</Badge> : null}
            {!simpleView ? (
              <div
                className="ml-1 h-2 w-2 rounded-full bg-accent-green/80 animate-pulseSoft"
                aria-hidden
              />
            ) : null}
          </div>
        </div>

        <div className="mt-8 text-xs font-mono text-muted">
          built as a single-page backend control center • graceful degradation
          enabled
        </div>
      </div>
    </footer>
  );
}
