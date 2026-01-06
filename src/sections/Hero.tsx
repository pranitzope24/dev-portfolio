import { lazy, Suspense } from "react";
import { profile } from "../content";
import { scrollToId } from "../lib/scroll";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";
import { SystemCoreFallback } from "../components/SystemCoreFallback";

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgb(var(--cc-blue)/0.14),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgb(var(--cc-purple)/0.12),transparent_55%)]" />
        </div>
      ) : null}

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 py-10 md:grid-cols-[1.2fr_1fr] md:py-14">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="green">SYSTEM ONLINE</Badge>
            <Badge tone="blue">backend::control-center</Badge>
            {!simpleView ? <Badge tone="purple">agentic::lab</Badge> : null}
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
            {profile.name}
          </h1>
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
