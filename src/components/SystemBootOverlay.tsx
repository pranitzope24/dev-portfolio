import { useEffect, useState } from 'react';

const BOOT_STEPS = [
  'Initializing backend systems…',
  'Loading services…',
  'Syncing agent state…',
  'Ready',
];

const STEP_DURATION = 550; // ms per step
const FADE_OUT_DELAY = 300; // ms after last step

export function SystemBootOverlay() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if boot was already shown this session
  useEffect(() => {
    const hasShownBoot = sessionStorage.getItem('boot-sequence-shown');
    if (hasShownBoot) {
      setIsDismissed(true);
    }
  }, []);

  // Auto-advance steps
  useEffect(() => {
    if (isDismissed || currentStep > BOOT_STEPS.length - 1) return;

    const timer = setTimeout(() => {
      if (currentStep < BOOT_STEPS.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        // All steps shown, start fade out
        setTimeout(() => {
          setIsComplete(true);
          sessionStorage.setItem('boot-sequence-shown', 'true');
          setIsDismissed(true);
        }, FADE_OUT_DELAY);
      }
    }, STEP_DURATION);

    return () => clearTimeout(timer);
  }, [currentStep, isDismissed]);

  const handleSkip = () => {
    setIsComplete(true);
    sessionStorage.setItem('boot-sequence-shown', 'true');
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-bg/95 backdrop-blur-sm transition-opacity duration-500 ${
        isComplete ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={isComplete}
    >
      <div className="mx-auto max-w-lg space-y-8 px-5 text-center">
        {/* Boot Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
            system::boot
          </div>
          <h1 className="mt-3 text-2xl font-bold text-text">
            Control Center
          </h1>
        </div>

        {/* Boot Steps */}
        <div className="space-y-3 font-mono text-sm">
          {BOOT_STEPS.map((step, idx) => (
            <div
              key={step}
              className={`flex items-center gap-2 transition-opacity duration-300 ${
                idx < currentStep
                  ? 'text-accent-green opacity-60'
                  : idx === currentStep
                  ? 'text-text opacity-100'
                  : 'text-muted opacity-40'
              }`}
            >
              <span className="text-xs">
                {idx < currentStep ? '✓' : idx === currentStep ? '>' : '○'}
              </span>
              <span>{step}</span>
              {idx === currentStep && (
                <span className="ml-auto inline-block animate-pulse">
                  _
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-panel/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted transition hover:border-accent-blue/40 hover:text-text"
        >
          SKIP BOOT
        </button>
      </div>
    </div>
  );
}
