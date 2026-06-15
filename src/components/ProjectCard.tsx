import { useState } from "react";
import { Project } from "../types";
import { Github, ExternalLink, ChevronDown, ChevronUp, Cpu, Bot, Coins, FileSymlink, ShoppingCart, Landmark, Leaf, HeartPulse, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectCardProps {
  project: Project;
  index: number;
  isDarkMode?: boolean;
  key?: number | string;
}

export default function ProjectCard({ project, index, isDarkMode = true }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Maps category icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Application":
      case "Artificial Intelligence":
        return <Bot className="w-4 h-4" />;
      case "FinTech Application":
        return <Coins className="w-4 h-4" />;
      case "Utility Application":
        return <FileSymlink className="w-4 h-4" />;
      case "E-Commerce Website":
        return <ShoppingCart className="w-4 h-4" />;
      case "Social Impact Platform":
        return <Landmark className="w-4 h-4" />;
      case "AgriTech Solution":
        return <Leaf className="w-4 h-4" />;
      case "Healthcare Application":
        return <HeartPulse className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  // Create a stunning premium procedural placeholder gradient based on project index
  const getPlaceholderGradient = (i: number) => {
    const gradients = [
      "from-cyan-500/20 via-slate-900/90 to-blue-500/10",
      "from-purple-500/20 via-slate-900/90 to-fuchsia-500/10",
      "from-amber-500/20 via-slate-900/90 to-yellow-500/10",
      "from-emerald-500/20 via-slate-900/90 to-green-500/10",
      "from-pink-500/20 via-slate-900/90 to-purple-500/10",
      "from-rose-500/20 via-slate-900/90 to-orange-500/10",
      "from-blue-500/20 via-slate-900/90 to-cyan-500/10",
      "from-red-500/20 via-slate-900/90 to-rose-500/10"
    ];
    return gradients[i % gradients.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className={`relative group rounded-2xl overflow-hidden transition-all duration-500 flex flex-col h-full ${
        isDarkMode
          ? "bg-slate-950/45 border border-slate-800 hover:border-cyber-blue/40"
          : "bg-white border border-gray-150 shadow-md hover:shadow-cyan-100/30 hover:border-cyber-cyan/40"
      }`}
      style={{
        boxShadow: isDarkMode 
          ? "0 4px 30px rgba(0, 0, 0, 0.4)" 
          : "0 10px 30px rgba(0, 0, 0, 0.04)"
      }}
    >
      {/* Dynamic colorful border flare overlay on group hover */}
      <div 
        className="absolute top-0 left-0 w-full h-[3px] transition-all duration-500 scale-x-75 group-hover:scale-x-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor || "#00F0FF"}, transparent)`
        }}
      ></div>

      {/* Hero Visual Mockup space - cyber grid with logo */}
      <div className={`relative h-44 overflow-hidden flex items-center justify-center bg-gradient-to-br ${getPlaceholderGradient(index)}`}>
        {/* Cyber overlay elements */}
        <div className="absolute inset-0 cyber-grid opacity-30 group-hover:opacity-40 transition-opacity"></div>
        <div className="absolute top-2 left-2 z-10">
          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold font-tech tracking-wider uppercase border border-white/10 ${
            isDarkMode ? "bg-black/45 text-cyan-300" : "bg-slate-50 text-cyan-600"
          }`}>
            {getCategoryIcon(project.category)}
            {project.category}
          </span>
        </div>

        {/* Decorative ID number inside image background */}
        <div className="absolute right-3 top-2 font-mono text-xs opacity-20 group-hover:opacity-45 text-cyber-blue select-none uppercase tracking-widest font-bold">
          PRJ_{index + 1}
        </div>

        {/* Big stylized Icon / Title overlay within canvas */}
        <div className="text-center transform group-hover:scale-105 transition-transform duration-500 relative z-20 px-4">
          <div className="inline-flex p-3 rounded-xl bg-slate-950/60 border border-white/10 mb-2 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <div style={{ color: project.accentColor || "#00f0ff" }} className="w-8 h-8 flex items-center justify-center">
              {getCategoryIcon(project.category)}
            </div>
          </div>
          <h4 className="text-lg font-bold font-tech text-white tracking-wide group-hover:neon-glow-blue transition-all">
            {project.name}
          </h4>
        </div>

        {/* Diagonal tech corner bracket accents */}
        <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-cyan-500/20 group-hover:border-cyan-500/60 transition-colors"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-cyan-500/20 group-hover:border-cyan-500/60 transition-colors"></div>
      </div>

      {/* Description Content */}
      <div className="p-5 flex-grow flex flex-col">
        <p className={`text-sm mb-4 leading-relaxed line-clamp-3 ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}>
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                isDarkMode 
                  ? "bg-slate-900/60 text-gray-300 border-slate-800" 
                  : "bg-gray-50 text-gray-600 border-gray-150"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons / Actions */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-800/20 dark:border-slate-800/40 mt-3 justify-between">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`inline-flex items-center gap-1 text-xs font-semibold py-1.5 px-3 rounded-lg border transition-colors ${
              isDarkMode 
                ? "bg-slate-900/30 border-slate-800 text-gray-300 hover:text-cyber-blue hover:border-cyber-blue/30" 
                : "bg-slate-50 border-gray-200 text-gray-700 hover:text-cyber-cyan hover:border-cyber-cyan/30"
            }`}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                Less Info
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5" />
                More Info
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors border ${
                isDarkMode
                  ? "bg-slate-900/60 border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400"
                  : "bg-gray-50 border-gray-200 hover:border-cyan-500/50 hover:text-cyan-600"
              }`}
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
            
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors border ${
                  isDarkMode
                    ? "bg-cyber-blue/10 border-cyber-blue/30 hover:border-cyber-blue text-cyber-blue shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                    : "bg-cyber-cyan/10 border-cyber-cyan/30 hover:border-cyber-cyan text-cyber-cyan"
                }`}
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Expandable Features Area */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden mt-4"
            >
              <div className={`p-4 rounded-xl text-xs space-y-2 border ${
                isDarkMode 
                  ? "bg-slate-950/80 border-slate-900 text-gray-300" 
                  : "bg-slate-50 border-gray-200 text-gray-700"
              }`}>
                <div className="font-tech flex items-center gap-1 text-[10px] text-cyber-blue mb-1 uppercase tracking-wider font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Features
                </div>
                <ul className="space-y-1.5 list-none pl-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className={`inline-block mt-1 w-1.5 h-1.5 rounded-full ${isDarkMode ? "bg-cyber-blue" : "bg-cyber-cyan"} shrink-0`}></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
