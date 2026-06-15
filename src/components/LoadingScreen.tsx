import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "Establishing handshake with Vignan's Autonomous portal...",
    "Allocating memory heap for py-models, OOP & Rest-APIs...",
    "Syncing neural weights for GiftCraft AI & CropCare databases...",
    "Initiating full-stack portfolio visualization container on Port:3000...",
    "Handshake secure. Welcome Sirisha Pyla's Space."
  ];

  useEffect(() => {
    // Increment progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 120);

    // Increments logs
    const logInterval = setInterval(() => {
      setLogIndex((prev) => {
        if (prev < logs.length - 1) return prev + 1;
        clearInterval(logInterval);
        return prev;
      });
    }, 380);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#020205] flex flex-col items-center justify-center p-6 select-none font-mono text-gray-400">
      {/* Central stylized boot module */}
      <div className="w-full max-w-lg space-y-6">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 text-cyan-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 animate-pulse" />
            <span className="text-xs font-bold font-tech tracking-wider">SIRISHA_PYLA_AI_BOOT_V2.0</span>
          </div>
          <span className="text-[10px] text-gray-600 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded">
            PORT:3000
          </span>
        </div>

        {/* Dynamic logs readout */}
        <div className="h-28 text-xs space-y-1.5 font-mono text-gray-500 overflow-hidden">
          {logs.slice(0, logIndex + 1).map((log, i) => (
            <div key={i} className={`flex items-start gap-1.5 ${i === logIndex ? "text-cyber-blue" : "text-gray-500"}`}>
              <span className="text-cyber-purple shrink-0">&raquo;</span>
              <span className="leading-relaxed">{log}</span>
            </div>
          ))}
        </div>

        {/* Progress percent & bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400 tracking-wider font-semibold font-tech">INITIALIZING SYSTEM TELEMETRY</span>
            <span className="text-cyber-blue font-bold tracking-widest">{progress}%</span>
          </div>
          
          {/* Progress bar container */}
          <div className="w-full h-3 bg-slate-950 border border-slate-900 rounded-lg p-[2px] overflow-hidden">
            <div
              className="h-full rounded bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple transition-all duration-150 shadow-[0_0_10px_rgba(0,240,255,0.4)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Subtitle brand */}
        <div className="text-[10px] text-gray-600 text-center leading-relaxed font-mono">
          © 2026 Sirisha Pyla • B.Tech AI & ML Student<br />
          Andhra Pradesh, India
        </div>
      </div>
    </div>
  );
}
