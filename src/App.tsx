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
import { ScrollTopButton } from "./components/ScrollTopButton";

function App() {
  const simpleView = false;
  const pageCls = "min-h-screen bg-bg text-text selection:bg-accent-blue/20";

  return (
    <div className={pageCls}>
      <TopBar />

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

      <ScrollTopButton />
    </div>
  );
}

export default App;
