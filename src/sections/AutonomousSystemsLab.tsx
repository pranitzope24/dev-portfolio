import { Badge } from "../components/Badge";
import { Section } from "../components/Section";

type Props = {
  simpleView: boolean;
};

export function AutonomousSystemsLab({ simpleView }: Props) {
  return (
    <Section
      id="lab"
      title="Autonomous Systems Lab"
      subtitle="Agentic systems, explained like production software: orchestration, state, tools, and failure modes."
      right={!simpleView ? <Badge tone="purple" pulse>lab: active</Badge> : null}
    >
      <div className="space-y-5 p-6">
        <div className="rounded-xl2 border border-border/60 bg-bg/20 p-5 cc-surface">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-mono text-muted">layer 1</div>
              <h3 className="mt-1 text-base font-bold">
                Recruiter-Friendly Overview
              </h3>
            </div>
            {!simpleView ? <Badge tone="blue">high-signal</Badge> : null}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <div className="text-xs font-mono text-muted">what / why</div>
              <ul className="mt-2 space-y-2 text-sm text-text/90">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue/80" />
                  <span>
                    <span className="font-semibold text-text">
                      Agentic systems
                    </span>{" "}
                    are supervised workflows where an LLM can plan and use
                    tools, not just answer questions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-teal/80" />
                  <span>
                    They are useful when tasks are multi-step: fetch context,
                    take actions, verify outcomes, and recover from partial
                    failure.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-purple/80" />
                  <span>
                    My focus is not “prompting” — it’s building a system with
                    constraints, logging, and predictable operational behavior.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono text-muted">
                supervisor diagram
              </div>
              <pre className="mt-2 overflow-auto rounded-xl border border-border/60 bg-panel/30 p-3 text-xs font-mono text-text/90 cc-surface">
                {`┌──────────────┐
│  Supervisor  │  decides next step, routes by state
└──────┬───────┘
       │
 ┌─────▼─────┐    ┌──────────┐
 │ Sub-agent │───►│  Tools   │  (DB, APIs, search, queues)
 └─────┬─────┘    └──────────┘
       │
 ┌─────▼───────────┐
 │ Validate + Log   │  (guardrails, traces, outcomes)
 └─────────────────┘`}
              </pre>
            </div>
          </div>
        </div>

        <div className="rounded-xl2 border border-border/60 bg-bg/20 p-5 cc-surface">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-mono text-muted">layer 2</div>
              <h3 className="mt-1 text-base font-bold">
                System Design Thinking
              </h3>
            </div>
            {!simpleView ? <Badge tone="teal">engineer view</Badge> : null}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <div className="text-xs font-mono text-muted">
                orchestration + state
              </div>
              <ul className="mt-2 space-y-2 text-sm text-text/90">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-teal/80" />
                  <span>
                    <span className="font-semibold">Orchestration</span>:
                    graph/state-machine approach (not a single giant agent) so
                    steps are inspectable and retryable.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-teal/80" />
                  <span>
                    <span className="font-semibold">State</span>: explicit run
                    state (inputs, decisions, tool outputs, errors) with a
                    stable schema.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-teal/80" />
                  <span>
                    <span className="font-semibold">Memory</span>: short-term
                    scratchpad in-run, long-term retrieval via vector store, and
                    strict scoping for sensitive data.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono text-muted">
                tools + reliability
              </div>
              <ul className="mt-2 space-y-2 text-sm text-text/90">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue/80" />
                  <span>
                    <span className="font-semibold">Tool usage</span>: typed
                    inputs/outputs, least-privilege, and strong validation
                    before any side effects.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue/80" />
                  <span>
                    <span className="font-semibold">
                      Deterministic vs reasoning agents
                    </span>
                    : deterministic steps for safety-critical transitions;
                    reasoning for bounded planning.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue/80" />
                  <span>
                    <span className="font-semibold">Guarded execution</span>:
                    timeouts, retries with backoff, and fallback paths when
                    dependencies degrade.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-xl2 border border-border/60 bg-bg/20 p-5 cc-surface">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-mono text-muted">layer 3</div>
              <h3 className="mt-1 text-base font-bold">
                Deep Internals (Expandable)
              </h3>
            </div>
            {!simpleView ? <Badge tone="purple">internals</Badge> : null}
          </div>

          <div className="mt-4 space-y-3">
            <details className="rounded-xl border border-border/60 bg-panel/25 px-4 py-3 cc-surface">
              <summary className="cursor-pointer text-sm font-semibold text-text">
                Failure modes
              </summary>
              <ul className="mt-3 space-y-2 text-sm text-text/90">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-purple/80" />
                  <span>
                    Hallucinated tool parameters → prevented by strict schemas
                    and verification steps.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-purple/80" />
                  <span>
                    Runaway loops → capped steps, budgets, and terminating
                    conditions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-purple/80" />
                  <span>
                    Tool flakiness → idempotency + retries + dead-letter paths.
                  </span>
                </li>
              </ul>
            </details>

            <details className="rounded-xl border border-border/60 bg-panel/25 px-4 py-3 cc-surface">
              <summary className="cursor-pointer text-sm font-semibold text-text">
                Guardrails
              </summary>
              <ul className="mt-3 space-y-2 text-sm text-text/90">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-teal/80" />
                  <span>
                    Allowlisted tools and actions; deny-by-default policies.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-teal/80" />
                  <span>
                    Content and intent checks for unsafe requests before
                    execution.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-teal/80" />
                  <span>
                    Separation of planning vs acting to reduce accidental side
                    effects.
                  </span>
                </li>
              </ul>
            </details>

            <details className="rounded-xl border border-border/60 bg-panel/25 px-4 py-3 cc-surface">
              <summary className="cursor-pointer text-sm font-semibold text-text">
                Timeouts, retries, and budgets
              </summary>
              <ul className="mt-3 space-y-2 text-sm text-text/90">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue/80" />
                  <span>
                    Per-tool timeouts and a per-run budget (steps + wall time).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue/80" />
                  <span>
                    Retries only for transient errors; exponential backoff with
                    jitter.
                  </span>
                </li>
              </ul>
            </details>

            <details className="rounded-xl border border-border/60 bg-panel/25 px-4 py-3 cc-surface">
              <summary className="cursor-pointer text-sm font-semibold text-text">
                Observability and logging
              </summary>
              <ul className="mt-3 space-y-2 text-sm text-text/90">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-green/80" />
                  <span>
                    Structured events: decision, tool-call, tool-result, and
                    outcome.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-green/80" />
                  <span>
                    Correlation IDs across tools and downstream services.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-green/80" />
                  <span>
                    Replayability: persist run state so failures can be
                    re-simulated.
                  </span>
                </li>
              </ul>
            </details>

            <details className="rounded-xl border border-border/60 bg-panel/25 px-4 py-3 cc-surface">
              <summary className="cursor-pointer text-sm font-semibold text-text">
                Human-in-the-loop
              </summary>
              <ul className="mt-3 space-y-2 text-sm text-text/90">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-purple/80" />
                  <span>
                    Approval checkpoints for high-risk actions (writes, deletes,
                    money, user data).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-purple/80" />
                  <span>
                    Escalation paths when confidence is low or context is
                    missing.
                  </span>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </Section>
  );
}
