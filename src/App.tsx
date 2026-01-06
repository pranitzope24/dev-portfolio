import { useEffect, useMemo, useState } from "react";
import { TopBar } from "./components/TopBar";
import { Hero } from "./sections/Hero";
import { SystemOverview } from "./sections/SystemOverview";
import { TechStackModules } from "./sections/TechStackModules";
import { ExecutionLogs } from "./sections/ExecutionLogs";
import { DeployedServices } from "./sections/DeployedServices";
import { AutonomousSystemsLab } from "./sections/AutonomousSystemsLab";
import { SystemBootstrapping } from "./sections/SystemBootstrapping";
import { Milestones } from "./sections/Milestones";
import { BackgroundProcesses } from "./sections/BackgroundProcesses";
import { SystemShutdown } from "./sections/SystemShutdown";

const STORAGE_KEY = "cc.simpleView";

function getInitialSimpleView() {
  if (typeof window === "undefined") return false;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return raw === "1";
}

function App() {
  const [simpleView, setSimpleView] = useState(getInitialSimpleView);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, simpleView ? "1" : "0");
  }, [simpleView]);

  const pageCls = useMemo(
    () =>
      `min-h-screen bg-bg text-text ${
        simpleView ? "" : "selection:bg-accent-blue/20"
      }`,
    [simpleView]
  );

  return (
    <div className={pageCls}>
      <TopBar
        simpleView={simpleView}
        onToggleSimpleView={() => setSimpleView((v) => !v)}
      />

      <Hero simpleView={simpleView} />

      <main className="mx-auto max-w-6xl space-y-8 px-5 pb-10">
        <SystemOverview simpleView={simpleView} />
        <TechStackModules simpleView={simpleView} />
        <ExecutionLogs simpleView={simpleView} />
        <DeployedServices simpleView={simpleView} />
        <AutonomousSystemsLab simpleView={simpleView} />
        <SystemBootstrapping simpleView={simpleView} />
        <Milestones simpleView={simpleView} />
        <BackgroundProcesses simpleView={simpleView} />
      </main>

      <SystemShutdown simpleView={simpleView} />
    </div>
  );
}

export default App;
