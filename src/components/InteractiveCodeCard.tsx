"use client";

import { TERMINAL_COMMANDS, WELCOME_MESSAGE } from "@/constants/terminal";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type CardState = "open" | "minimized" | "closed" | "fullscreen";

export default function InteractiveCodeCard() {
  const [cardState, setCardState] = useState<CardState>("open");
  const [typingStep, setTypingStep] = useState(0);
  const previousState = useRef<CardState | null>(null);

  // Fullscreen terminal states
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle typing sequence and emitting mesh-activity events
  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];

    const dispatchMeshActivity = (active: boolean) => {
      window.dispatchEvent(
        new CustomEvent("mesh-activity", { detail: { active } })
      );
    };

    if (cardState === "open") {
      if (previousState.current === "closed" || previousState.current === null) {
        // Boot sequence (from closed or mount)
        setTypingStep(0);
        dispatchMeshActivity(false); // mesh sleeps during boot

        timers.push(setTimeout(() => setTypingStep(1), 500));
        timers.push(setTimeout(() => setTypingStep(2), 1000));
        timers.push(
          setTimeout(() => {
            setTypingStep(3); // fully typed
            dispatchMeshActivity(true); // mesh wakes up!
          }, 1500)
        );
      } else if (previousState.current === "minimized" || previousState.current === "fullscreen") {
        // Instant restore from minimized or fullscreen
        setTypingStep(3);
        dispatchMeshActivity(true);
      }
    } else if (cardState === "minimized") {
      timers.forEach(clearTimeout);
      setTypingStep(3);
      dispatchMeshActivity(true);
    } else if (cardState === "closed") {
      timers.forEach(clearTimeout);
      setTypingStep(0);
      dispatchMeshActivity(false);
    } else if (cardState === "fullscreen") {
      timers.forEach(clearTimeout);
      dispatchMeshActivity(true);
      
      // Auto-focus input when going full screen
      setTimeout(() => inputRef.current?.focus(), 100);

      // Initialize terminal history if completely blank
      if (history.length === 0) {
        setHistory([{ command: "", output: WELCOME_MESSAGE }]);
      }
    }

    previousState.current = cardState;

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [cardState, history.length]);

  // Terminal Command Logic
  const handleCommand = () => {
    const cmd = currentCommand.trim().toLowerCase();
    
    if (cmd === "clear") {
      setHistory([{ command: "", output: "" }]);
      setCurrentCommand("");
      setHistoryIndex(-1);
      return;
    }

    const output = TERMINAL_COMMANDS[cmd] 
      ? TERMINAL_COMMANDS[cmd] 
      : cmd !== "" ? `Command not found: ${cmd}\nType 'help' to see available commands.` : "";

    setHistory((prev) => [...prev, { command: currentCommand, output }]);
    setCurrentCommand("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const typedHistory = history.filter(h => h.command !== "");
        const newIndex = Math.min(prev + 1, typedHistory.length - 1);
        if (typedHistory.length > 0) {
          setCurrentCommand(typedHistory[typedHistory.length - 1 - newIndex]?.command || "");
        }
        return newIndex;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const typedHistory = history.filter(h => h.command !== "");
        const newIndex = Math.max(prev - 1, -1);
        setCurrentCommand(
          newIndex === -1 ? "" : typedHistory[typedHistory.length - 1 - newIndex]?.command || ""
        );
        return newIndex;
      });
    }
  };

  useEffect(() => {
    if (cardState === "fullscreen" && terminalRef.current) {
      setTimeout(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, 10);
    }
  }, [history, cardState]);

  useEffect(() => {
    if (cardState !== "fullscreen") return;
    const handleClick = () => inputRef.current?.focus();
    const term = terminalRef.current;
    if (term) {
      term.addEventListener("click", handleClick);
    }
    return () => {
      if (term) term.removeEventListener("click", handleClick);
    };
  }, [cardState]);

  const renderOutput = (output: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    
    let parts = output.split(urlRegex);
    parts = parts.flatMap((part) => (urlRegex.test(part) ? [part] : part.split(emailRegex)));
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-[#00d4ff] hover:text-white transition-colors underline">
            {part}
          </a>
        );
      } else if (emailRegex.test(part)) {
        return (
          <a key={index} href={`mailto:${part}`} className="text-[#00d4ff] hover:text-white transition-colors underline">
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      <AnimatePresence>
        {cardState === "open" && (
          <motion.div
            layoutId="code-card"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="group absolute bottom-6 left-6 right-6 surface_container_highest bg-[#2a2a2a]/90 backdrop-blur-xl rounded-lg border border-[#3c494e]/60 p-5 font-mono shadow-[0_8px_32px_-12px_rgba(0,212,255,0.3)] z-50 cursor-default origin-bottom"
          >
            <div className="flex gap-2 mb-4">
              {/* Close */}
              <button
                onClick={() => setCardState("closed")}
                className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center group/btn transition-colors relative"
              >
                <div className="opacity-0 group-hover/btn:opacity-100 text-[#4c0000] text-[8px] font-black absolute">
                  ✕
                </div>
              </button>
              {/* Minimize */}
              <button
                onClick={() => setCardState("minimized")}
                className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 flex items-center justify-center group/btn transition-colors relative"
              >
                <div className="opacity-0 group-hover/btn:opacity-100 text-[#995700] text-[8px] font-black absolute mt-[0.5px]">
                  -
                </div>
              </button>
              {/* Fullscreen */}
              <button 
                onClick={() => setCardState("fullscreen")}
                className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 flex items-center justify-center group/btn transition-colors relative"
              >
                <div className="opacity-0 group-hover/btn:opacity-100 text-[#006500] text-[8px] font-black absolute">
                  ⤢
                </div>
              </button>
            </div>

            <div className="space-y-2 text-left font-mono tracking-wide text-xs leading-tight opacity-90 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-500 min-h-[80px]">
              <div className="flex text-[#a8e8ff] items-center">
                <span className="opacity-80 shrink-0">pranit-zope:~$</span>
                {typingStep >= 1 && <span className="ml-2">deploy-neural-mesh</span>}
                {typingStep < 1 && (
                  <span className="ml-2 animate-pulse font-bold">|</span>
                )}
              </div>

              {typingStep >= 2 && (
                <div className="text-[#bbc9cf] animate-in fade-in slide-in-from-bottom-1 duration-300">
                  Init spatial parameters...
                </div>
              )}

              {typingStep >= 3 && (
                <>
                  <div className="text-[#edb1ff] font-bold break-all animate-in fade-in slide-in-from-bottom-1 duration-300">
                    Success: Mesh established [0x4F2...]
                  </div>
                  {/* <div className="flex text-[#a8e8ff] mt-2 animate-in fade-in duration-300">
                    <span className="opacity-80 shrink-0">pranit-zope:~$</span>
                    <span className="ml-2 animate-pulse font-bold">|</span>
                  </div> */}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULLSCREEN STATE */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {cardState === "fullscreen" && (
            <motion.div
              layoutId="code-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              className="fixed inset-4 md:inset-10 z-[100] bg-[#1a1a1a]/90 backdrop-blur-2xl rounded-2xl border border-[#3c494e]/60 shadow-[0_8px_32px_rgba(0,0,0,0.8)] flex flex-col font-mono overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 p-4 bg-black/40 border-b border-[#3c494e]/40 shrink-0">
                <div className="flex gap-2">
                  {/* Close */}
                  <button
                    onClick={() => setCardState("closed")}
                    className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center group/btn transition-colors relative"
                  >
                    <div className="opacity-0 group-hover/btn:opacity-100 text-[#4c0000] text-[9px] font-black absolute">✕</div>
                  </button>
                  {/* Minimize */}
                  <button
                    onClick={() => setCardState("minimized")}
                    className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 flex items-center justify-center group/btn transition-colors relative"
                  >
                    <div className="opacity-0 group-hover/btn:opacity-100 text-[#995700] text-[9px] font-black absolute mt-[0.5px]">-</div>
                  </button>
                  {/* Return to Window */}
                  <button
                    onClick={() => setCardState("open")}
                    className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 flex items-center justify-center group/btn transition-colors relative"
                  >
                    <div className="opacity-0 group-hover/btn:opacity-100 text-[#006500] text-[9px] font-black absolute">⤢</div>
                  </button>
                </div>
                <div className="flex-1 text-center font-bold text-xs tracking-widest text-gray-400 uppercase">
                  Celestial.Dev // Operational Interface
                </div>
              </div>

              {/* Terminal Body */}
              <div 
                ref={terminalRef} 
                className="flex-1 overflow-y-auto p-6 space-y-4 text-sm md:text-base cursor-text custom-scrollbar selection:bg-[#00d4ff]/30"
              >
                {history.filter((e, i) => i === 0 || e.command !== "").map((entry, i) => (
                  <div key={i} className="space-y-2">
                    {entry.command && (
                      <div className="flex gap-3 text-lg items-center">
                        <span className="text-[#a8e8ff] font-bold">pranit-zope:~$</span>
                        <span className="text-white font-medium">{entry.command}</span>
                      </div>
                    )}
                    {entry.output && (
                      <div className="whitespace-pre-wrap text-[#bbc9cf] pl-6 leading-relaxed">
                        {renderOutput(entry.output)}
                      </div>
                    )}
                  </div>
                ))}

                {/* Current Input */}
                <div className="flex gap-3 items-center text-lg mt-4 mb-4">
                  <span className="text-[#a8e8ff] font-bold">pranit-zope:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentCommand}
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-white caret-[#00d4ff] font-medium"
                    autoFocus
                    spellCheck="false"
                  />
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="bg-black/60 px-6 py-3 text-xs text-[#a8e8ff]/50 border-t border-[#3c494e]/40 flex justify-between items-center shrink-0">
                <span>Type 'help' for available commands • Use ↑/↓ arrows for history</span>
                <span className="hidden sm:inline">Press Enter to execute • 'clear' to reset</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* CLOSED STATE: Centered Floating Dot */}
      <AnimatePresence>
        {cardState === "closed" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            className="absolute bottom-6 inset-x-0 flex justify-center z-50 pointer-events-none"
          >
            <div className="relative pointer-events-auto group">
              {/* Tooltip positioned outside layoutId target */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform origin-bottom bg-black/90 text-white text-[10px] px-2.5 py-1.5 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none shadow-xl tracking-wide delay-100">
                Open Terminal
              </div>

              <motion.button
                layoutId="code-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCardState("open")}
                className="w-14 h-14 bg-[#1a1a1a]/90 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_8px_32px_-10px_rgba(0,0,0,0.5)] flex items-center justify-center hover:border-[#00d4ff]/50 transition-colors relative"
              >
                <Terminal className="w-6 h-6 text-[#00d4ff] group-hover:text-white transition-colors" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MINIMIZED STATE: Dock App */}
      <AnimatePresence>
        {cardState === "minimized" && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="absolute bottom-4 inset-x-0 flex justify-center z-50 pointer-events-none"
          >
            <div className="p-2 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center justify-center relative pointer-events-auto before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/5 before:to-transparent before:rounded-lg before:pointer-events-none group">
              
              {/* Tooltip positioned outside layoutId target */}
              <div className="absolute -top-12 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom bg-[#2a2a2a]/95 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 whitespace-nowrap z-[60] pointer-events-none shadow-xl tracking-wide delay-100">
                Terminal
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-[#2a2a2a]/95"></div>
              </div>

              <motion.button
                layoutId="code-card"
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCardState("open")}
                className="relative w-12 h-12 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center overflow-visible"
              >
                {/* Dock Icon Gloss */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl pointer-events-none"></div>
                <Terminal className="w-5 h-5 text-[#00d4ff] relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:text-white transition-colors" />

                {/* Active Indicator dot */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full blur-[0.3px] shadow-[0_0_4px_rgba(255,255,255,0.8)]"></div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
