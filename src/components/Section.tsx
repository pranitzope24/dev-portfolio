import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  right?: ReactNode;
  children: ReactNode;
  delay?: number;
};

export function Section({ id, title, subtitle, right, children, delay = 0 }: Props) {
  return (
    <section
      id={id}
      className="scroll-mt-24 animate-[sectionReveal_300ms_ease-out_forwards]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
            component::{id}
          </div>
          <h2 className="mt-2 text-2xl font-bold uppercase tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-accent-blue/90 to-accent-teal/80 md:text-3xl">
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
