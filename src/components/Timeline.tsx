import { Education } from "../types";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { motion } from "motion/react";

interface TimelineProps {
  education: Education[];
  isDarkMode?: boolean;
}

export default function Timeline({ education, isDarkMode = true }: TimelineProps) {
  return (
    <div className="relative border-l border-dashed border-cyan-500/30 pl-6 sm:pl-8 space-y-12 max-w-4xl mx-auto py-4">
      {/* Central glowing vertical track */}
      <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-cyber-blue via-cyber-purple to-transparent pointer-events-none"></div>

      {education.map((item, index) => {
        const isLatest = index === 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative"
          >
            {/* Pulsing cyber-node indicator on the track */}
            <div className="absolute -left-[31px] sm:-left-[35px] top-1.5 flex items-center justify-center">
              <div className="relative">
                <div className={`absolute inset-0 rounded-full blur-[4px] opacity-75 animate-ping ${
                  isLatest ? "bg-cyber-blue" : "bg-cyber-purple"
                }`}></div>
                <div className={`w-4 h-4 rounded-full border-2 relative z-10 flex items-center justify-center ${
                  isLatest 
                    ? "bg-[#030303] border-cyber-blue scale-110" 
                    : "bg-[#030303] border-cyber-purple"
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${isLatest ? "bg-cyber-blue" : "bg-cyber-purple"}`}></div>
                </div>
              </div>
            </div>

            {/* Glowing connecting line decorative */}
            <div className="absolute -left-[14px] top-[14px] w-4 h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent group-hover:w-6 transition-all duration-300"></div>

            {/* Timline Box Card */}
            <div className={`glassmorphism rounded-2xl p-6 relative transition-all duration-300 hover:-translate-y-1 ${
              isDarkMode 
                ? "bg-slate-950/40 border border-slate-800/80 hover:border-cyber-blue/40" 
                : "bg-white border border-gray-150 shadow-md hover:border-cyber-cyan/40 hover:shadow-cyan-100/20"
            }`}>
              {/* Year Stamp */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-tech tracking-wider border ${
                  isLatest 
                    ? "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/30 shadow-[0_0_8px_rgba(0,240,255,0.1)]" 
                    : "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/30"
                }`}>
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>

                {/* score badge */}
                <span className={`inline-flex items-center gap-1.5 text-sm font-semibold font-mono ${
                  isLatest ? "text-cyber-blue" : "text-gray-400"
                }`}>
                  <Award className="w-4 h-4" />
                  {item.score}
                </span>
              </div>

              {/* institution level */}
              <h3 className={`text-xl font-bold font-display ${
                isDarkMode ? "text-white group-hover:text-cyber-blue" : "text-slate-800 group-hover:text-cyber-cyan"
              } transition-colors flex items-center gap-2`}>
                <GraduationCap className="w-5 h-5 opacity-70" />
                {item.institution}
              </h3>

              {/* Degree Major */}
              <div className="mt-1 flex items-center flex-wrap gap-2 text-sm italic font-sans text-gray-400">
                <span className={isDarkMode ? "text-cyan-400 font-medium" : "text-cyan-600 font-medium"}>
                  {item.degree}
                </span>
                {item.major && (
                  <>
                    <span className="opacity-50">•</span>
                    <span className={isDarkMode ? "text-purple-400" : "text-purple-600"}>
                      {item.major}
                    </span>
                  </>
                )}
              </div>

              {/* Location */}
              <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                <MapPin className="w-3.5 h-3.5" />
                {item.location}
              </div>

              {/* Cyber decoration lines inside cards */}
              <div className={`absolute bottom-2 right-2 flex items-center gap-1 opacity-20 pointer-events-none group-hover:opacity-60 transition-opacity ${
                isLatest ? "text-cyber-blue" : "text-cyber-purple"
              }`}>
                <span className="font-mono text-[9px]">ID: {index + 1}027</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
