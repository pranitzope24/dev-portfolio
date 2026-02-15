import { lazy, Suspense } from "react";
import githubSvg from "../assets/github.svg";
import linkedinSvg from "../assets/linkedin.svg";
import mailSvg from "../assets/mail.svg";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { SystemCoreFallback } from "../components/SystemCoreFallback";
import { profile } from "../content";
import { scrollToId } from "../lib/scroll";

const LazySystemCore = lazy(() => import("../components/SystemCoreLazy"));

type Props = {
  simpleView: boolean;
};

export function Hero({ simpleView }: Props) {
  return (
    <section className="relative overflow-hidden">
      {!simpleView ? (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 cc-grid opacity-35" />
        </div>
      ) : null}

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 py-10 md:grid-cols-[1.2fr_1fr] md:py-14">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="green" pulse>
              SYSTEM ONLINE
            </Badge>
            <Badge tone="blue">backend::control-center</Badge>
            {!simpleView ? <Badge tone="purple">agentic::lab</Badge> : null}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              {profile.name}
            </h1>
            <div className="flex items-center gap-2 text-text/80">
              {profile.links.github ? (
                <a
                  href={profile.links.github}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl transition hover:text-text"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={githubSvg}
                    alt="GitHub"
                    className="h-8 w-8 icon-filter"
                  />
                </a>
              ) : null}
              {profile.links.linkedin ? (
                <a
                  href={profile.links.linkedin}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl transition hover:text-text"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedinSvg}
                    alt="LinkedIn"
                    className="h-8 w-8 icon-filter"
                  />
                </a>
              ) : null}
              {profile.links.email ? (
                <a
                  href={profile.links.email}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl transition hover:text-text"
                  aria-label="Email"
                >
                  <img
                    src={mailSvg}
                    alt="Email"
                    className="h-8 w-8 icon-filter"
                  />
                </a>
              ) : null}
            </div>
          </div>
          <p className="mt-3 text-sm font-semibold text-muted md:text-base">
            {profile.role}
          </p>

          <p className="mt-5 max-w-xl text-base text-text/90 md:text-lg">
            {profile.positioning}
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="cc-panel rounded-xl2 px-4 py-3 shadow-panel"
              >
                <div className="text-[11px] font-mono text-muted">
                  {s.label}
                </div>
                <div className="mt-1 text-sm font-bold tracking-tight">
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="primary" onClick={() => scrollToId("overview")}>
              Explore System
            </Button>
            <Button variant="secondary" onClick={() => scrollToId("services")}>
              View Projects
            </Button>
          </div>

          <div className="mt-5 text-xs font-mono text-muted">
            hint: click the System Core nodes to jump sections
          </div>
        </div>

        <div className="relative max-w-[520px] w-full justify-self-end">
          {simpleView ? (
            <SystemCoreFallback />
          ) : (
            <Suspense fallback={<SystemCoreFallback />}>
              <LazySystemCore
                simpleView={simpleView}
                onNavigate={(id: string) => scrollToId(id)}
              />
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
}
