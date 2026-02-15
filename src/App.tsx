import { CursorAura } from "./components/CursorAura";
import { GlobalAnimatedBackground } from "./components/GlobalAnimatedBackground";
import { ScrollTopButton } from "./components/ScrollTopButton";
import { SystemBootOverlay } from "./components/SystemBootOverlay";
import { TopBar } from "./components/TopBar";
import { AutonomousSystemsLab } from "./sections/AutonomousSystemsLab";
import { BackgroundProcesses } from "./sections/BackgroundProcesses";
import { DeployedServices } from "./sections/DeployedServices";
import { ExecutionLogs } from "./sections/ExecutionLogs";
import { Hero } from "./sections/Hero";
import { Milestones } from "./sections/Milestones";
import { SystemBootstrapping } from "./sections/SystemBootstrapping";
import { SystemOverview } from "./sections/SystemOverview";
import { SystemShutdown } from "./sections/SystemShutdown";
import { TechStackModules } from "./sections/TechStackModules";

function App() {
  const simpleView = false;
  const pageCls = "relative min-h-screen text-text selection:bg-accent-blue/20";

  return (
    <div className={pageCls}>
      {/* Global background system - fixed, full-viewport */}
      <GlobalAnimatedBackground />
      <CursorAura />
      
      {/* Existing overlays */}
      <SystemBootOverlay />
      <div className="noise-layer" aria-hidden="true" />
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
