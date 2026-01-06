import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  right?: ReactNode;
  children: ReactNode;
};

export function Section({ id, title, subtitle, right, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-mono tracking-wide text-muted">
            component::{id}
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-2xl text-sm text-muted">{subtitle}</p>
          ) : null}
        </div>
        {right ? <div className="shrink-0">{right}</div> : null}
      </div>

      <div className="cc-panel rounded-xl2 shadow-panel">{children}</div>
    </section>
  );
}
