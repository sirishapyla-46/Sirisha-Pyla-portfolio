import { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import { SkillCategory, Skill } from "../types";
import { motion } from "motion/react";

interface SkillCardProps {
  category: SkillCategory;
  isDarkMode?: boolean;
  key?: number | string;
}

export default function SkillCard({ category, isDarkMode = true }: SkillCardProps) {
  // Animates the bars on mount/view
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`group relative p-6 rounded-2xl transition-all duration-300 ${
        isDarkMode 
          ? "bg-slate-950/40 border border-slate-800 hover:border-cyber-blue/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]" 
          : "bg-white border border-gray-100 shadow-sm hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] hover:border-cyber-cyan/50"
      }`}
    >
      {/* Absolute futuristic decoration: Corner brackets or labels */}
      <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center select-none opacity-20 group-hover:opacity-60 transition-opacity">
        <span className="text-[10px] font-mono font-bold text-cyber-blue">▲ [AI_SYS]</span>
      </div>

      <h3 className={`font-display text-lg font-bold mb-5 flex items-center gap-2 ${
        isDarkMode ? "text-white group-hover:text-cyber-blue" : "text-slate-800 group-hover:text-cyber-cyan"
      } transition-colors`}>
        <span className={`w-1.5 h-4 rounded-full ${isDarkMode ? "bg-cyber-blue" : "bg-cyber-cyan"} inline-block`}></span>
        {category.title}
      </h3>

      <div className="space-y-4">
        {category.skills.map((skill: Skill, idx: number) => {
          // Get dynamic Lucide icon
          const IconComponent = (Icons as any)[skill.iconName] || Icons.CircleDot;

          return (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className={`flex items-center gap-1.5 font-sans font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  <IconComponent className={`w-4 h-4 ${
                    isDarkMode ? "text-cyber-blue" : "text-cyber-cyan"
                  } group-hover:scale-110 transition-transform`} />
                  {skill.name}
                </span>
                <span className={`font-mono font-semibold ${
                  isDarkMode ? "text-cyber-blue" : "text-cyber-cyan"
                }`}>
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress track */}
              <div className={`w-full h-2 rounded-full overflow-hidden ${
                isDarkMode ? "bg-slate-900" : "bg-gray-100"
              }`}>
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r relative ${
                    isDarkMode 
                      ? "from-cyber-blue to-cyan-500 shadow-[0_0_8px_rgba(0,240,255,0.5)]" 
                      : "from-cyber-cyan to-blue-500"
                  }`}
                  style={{
                    width: animate ? `${skill.percentage}%` : "0%",
                  }}
                >
                  {/* Glowing end node inside the bar */}
                  <span className="absolute right-0 top-0 w-2 h-full bg-white opacity-40 blur-[1px]"></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
