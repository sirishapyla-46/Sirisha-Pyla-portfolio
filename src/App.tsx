import { useState, useEffect } from "react";
import { 
  ArrowUp, Sun, Moon, Menu, X, Cpu, Award, Terminal, 
  Briefcase, GraduationCap, User, ExternalLink, FileDown,
  Sparkles, CheckCircle2, Milestone, ShieldAlert, Linkedin, Github
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { PORTFOLIO_DATA } from "./data";
import ParticleBackground from "./components/ParticleBackground";
import TypingAnimation from "./components/TypingAnimation";
import SkillCard from "./components/SkillCard";
import Timeline from "./components/Timeline";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sections config
  const sections = [
    { id: "hero", label: "Hero", icon: Terminal },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Cpu },
    { id: "internship", label: "Internship", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Sparkles },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certs", icon: Award },
    { id: "contact", label: "Contact", icon: Milestone }
  ];

  // Active section spy on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check current visible section
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <div className={`min-h-screen relative w-full font-sans transition-colors duration-500 ${
        isDarkMode ? "bg-[#020617] text-gray-100" : "bg-slate-50 text-slate-800"
      }`}>
        
        {/* Cyberpunk Static Scanlines Overlay */}
        <div className="absolute inset-0 scanline opacity-[0.45] pointer-events-none z-10"></div>
        
        {/* Particle nodes network backdrop */}
        <ParticleBackground isDarkMode={isDarkMode} />

        {/* Dynamic decorative backdrop radial glow */}
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 ${
          isDarkMode ? "bg-blue-600/10" : "bg-blue-600/15"
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0 ${
          isDarkMode ? "bg-indigo-600/10" : "bg-indigo-600/15"
        }`}></div>

        {/* MAIN STICKY HEADER */}
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b backdrop-blur-md ${
          isDarkMode 
            ? "bg-slate-950/70 border-slate-900" 
            : "bg-white/70 border-gray-100"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick("hero")}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyber-blue to-cyber-purple flex items-center justify-center p-[1px] shadow-[0_0_15px_rgba(0,240,255,0.25)] group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center">
                  <span className="font-tech text-xs text-white font-bold tracking-widest">SP</span>
                </div>
              </div>
              <div className="text-left select-none">
                <span className={`text-sm font-bold font-tech tracking-wider uppercase ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                  SIRISHA PYLA
                </span>
                <span className={`block text-[9px] font-mono leading-none ${isDarkMode ? "text-cyber-blue" : "text-cyber-cyan font-bold"}`}>
                  SYSTEM ACTIVE
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-slate-950/20 rounded-full p-1 border border-slate-800/20 backdrop-blur">
              {sections.map((sec) => {
                const SecIcon = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleNavClick(sec.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-tech tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-cyber-blue to-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.35)]"
                        : isDarkMode 
                          ? "text-gray-400 hover:text-white hover:bg-slate-900/60" 
                          : "text-gray-600 hover:text-slate-950 hover:bg-slate-200"
                    }`}
                  >
                    <SecIcon className="w-3.5 h-3.5" />
                    {sec.label}
                  </button>
                );
              })}
            </nav>

            {/* Utility Controls (Theme Toggle + Contacts) */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle visual theme preset"
                className={`w-9 h-9 flex items-center justify-center rounded-xl border transition-all cursor-pointer ${
                  isDarkMode 
                    ? "bg-slate-950 border-slate-800 text-yellow-400 hover:border-yellow-500/50" 
                    : "bg-white border-gray-250 text-slate-700 hover:border-cyan-500"
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* GET Resume button (Direct secure download link) */}
              <a 
                href={PORTFOLIO_DATA.personalInfo.contact.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-semibold font-tech tracking-wider uppercase transition-all cursor-pointer ${
                  isDarkMode 
                    ? "bg-slate-950/40 border-slate-800 text-gray-300 hover:text-white hover:border-cyber-blue/40" 
                    : "bg-white border-gray-200 text-slate-700 hover:text-slate-950 hover:border-cyan-500"
                }`}
              >
                <FileDown className="w-3.5 h-3.5 text-cyber-blue" />
                GET RESUME
              </a>

              {/* Hire button (fast responsive cta) */}
              <button 
                onClick={() => handleNavClick("contact")}
                className="hidden md:inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-gradient-to-r from-cyber-blue to-cyan-500 hover:from-cyan-400 hover:to-blue-500 text-black font-tech text-xs tracking-wider font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.45)] transition-all cursor-pointer"
              >
                HIRE ME
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-xl border transition-all cursor-pointer ${
                  isDarkMode 
                    ? "bg-slate-900 border-slate-800 text-white" 
                    : "bg-white border-gray-200 text-slate-800"
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Dropdown Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className={`fixed top-16 left-0 right-0 z-30 lg:hidden border-b p-5 shadow-xl backdrop-blur-xl ${
                isDarkMode 
                  ? "bg-slate-950/95 border-slate-900" 
                  : "bg-white/95 border-gray-200"
              }`}
            >
              <div className="grid grid-cols-2 gap-2.5">
                {sections.map((sec) => {
                  const SecIcon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleNavClick(sec.id)}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold font-tech uppercase transition-all tracking-wider cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-cyber-blue to-cyan-500 text-black border-cyber-blue shadow-[0_0_10px_rgba(0,240,255,0.25)]"
                          : isDarkMode 
                            ? "bg-slate-900/40 border-slate-800 text-gray-300 hover:text-white" 
                            : "bg-slate-100 border-gray-200 text-gray-700 hover:bg-slate-200"
                      }`}
                    >
                      <SecIcon className="w-4 h-4 text-cyber-purple shrink-0" />
                      {sec.label}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/20 flex gap-2">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="flex-1 py-3 text-center rounded-xl bg-gradient-to-r from-cyber-blue to-cyan-500 text-black font-tech text-xs font-bold tracking-wider uppercase border border-cyber-blue shadow-lg"
                >
                  Hire Me Now
                </button>
                <a
                  href={PORTFOLIO_DATA.personalInfo.contact.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex-1 py-3 text-center rounded-xl font-tech text-xs font-bold tracking-wider uppercase border flex items-center justify-center gap-1.5 ${
                    isDarkMode 
                      ? "bg-slate-900 border-slate-800 text-gray-200 hover:text-white" 
                      : "bg-slate-100 border-gray-200 text-gray-700 hover:bg-slate-200"
                  }`}
                >
                  <FileDown className="w-3.5 h-3.5 text-cyber-blue" />
                  Get Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO SECTION */}
        <section 
          id="hero" 
          className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 md:px-8 cyber-dots overflow-hidden"
        >
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-8 flex flex-col items-center lg:items-start w-full">
              {/* Pulsing visual tag */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20"
              >
                <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse"></span>
                PORTFOLIO CONTAINER ONLINE
              </motion.div>

              {/* Main Name Heading */}
              <div className="space-y-2">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-black font-tech tracking-tight text-white uppercase"
                >
                  Sirisha <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyan-400 to-cyber-purple drop-shadow-[0_0_35px_rgba(0,240,255,0.3)] select-none">Pyla</span>
                </motion.h1>
                
                {/* Rotating typed roles subheading */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 md:text-2xl text-lg font-medium font-tech tracking-wide"
                >
                  <span>AI & ML Enthusiast</span>
                  <span className="text-cyber-purple font-mono">|</span>
                  <span>Software Developer</span>
                </motion.div>
              </div>

              {/* Rotating typing text line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-10 flex items-center justify-center lg:justify-start"
              >
                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-slate-950/50 border border-slate-900 shadow">
                  <span className="text-xs font-mono text-gray-500 font-bold">$ sys_profile:</span>
                  <TypingAnimation 
                    words={[
                      "Full Stack Developer",
                      "Java Developer",
                      "Python Developer",
                      "AI & ML Enthusiast",
                      "Problem Solver",
                      "Future Software Engineer"
                    ]} 
                  />
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-2xl mx-auto lg:mx-0 text-base md:text-lg text-gray-400 leading-relaxed font-sans"
              >
                {PORTFOLIO_DATA.personalInfo.tagline}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
              >
                <button
                  onClick={() => handleNavClick("projects")}
                  className="cursor-pointer inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-blue to-cyan-500 text-black font-tech text-xs tracking-wider font-bold shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:shadow-[0_0_25px_rgba(0,240,255,0.455)] transition-all"
                >
                  VIEW PROJECTS
                </button>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="cursor-pointer inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyber-purple text-gray-200 font-tech text-xs tracking-wider font-bold hover:shadow-[0_0_15px_rgba(189,0,255,0.15)] transition-all"
                >
                  CONTACT ME
                </button>
                <a
                  href={PORTFOLIO_DATA.personalInfo.contact.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-slate-950 border border-slate-900 hover:border-cyber-blue text-gray-400 hover:text-white font-tech text-xs tracking-wider transition-all shadow-[0_0_10px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  <FileDown className="w-4 h-4 text-cyber-blue animate-bounce" />
                  GET RESUME
                </a>
              </motion.div>
            </div>

            {/* Right Column: Profile Photo of Sirisha Pyla wrapped with futuristic neon border */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-5 flex justify-center items-center w-full"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative p-3 rounded-full glassmorphism border border-cyan-500/30 neon-border-blue flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.25)]"
              >
                {/* Glowing subtle circle behind photo */}
                <div className="absolute inset-4 rounded-full bg-cyan-500/10 blur-xl pointer-events-none"></div>

                {/* Main avatar placeholder */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-slate-800/80 shadow-[0_0_20px_rgba(59,130,246,0.3)] bg-slate-950">
                  <img 
                    src={PORTFOLIO_DATA.personalInfo.avatarUrl} 
                    alt={PORTFOLIO_DATA.personalInfo.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Decorative radar lines spinner */}
                <div className="absolute inset-0 border border-cyber-purple/20 rounded-full scale-105 animate-spin pointer-events-none" style={{ animationDuration: '24s' }}></div>
                <div className="absolute -inset-2 border border-dashed border-cyber-blue/30 rounded-full animate-spin pointer-events-none" style={{ animationDuration: '48s' }}></div>
                
                {/* Minimalist futuristic HUD node badge */}
                <div className="absolute -bottom-2 px-3.5 py-1 bg-slate-950/95 border border-cyber-blue/40 text-cyber-blue rounded-lg text-[9px] font-mono tracking-widest uppercase font-bold text-center select-none shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                  SYS_PROFILE: ACTIVE_NODE
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scrolling visual hint down */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 select-none pointer-events-none opacity-40">
            <span className="text-[9px] font-mono tracking-widest text-[#00f0ff] uppercase animate-pulse">SCROLL_DOWN</span>
            <div className="w-5 h-8 border border-cyan-500/30 rounded-full flex justify-center p-[2px]">
              <div className="w-1 h-2 bg-cyber-blue rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Stylized edge visual overlays typical of luxury cyberpunk frameworks */}
          <div className="absolute top-10 left-10 w-24 h-[1px] bg-gradient-to-r from-cyber-blue to-transparent opacity-20 hidden md:block"></div>
          <div className="absolute top-10 left-10 w-[1px] h-24 bg-gradient-to-b from-cyber-blue to-transparent opacity-20 hidden md:block"></div>
          <div className="absolute bottom-10 right-10 w-24 h-[1px] bg-gradient-to-l from-cyber-purple to-transparent opacity-20 hidden md:block"></div>
          <div className="absolute bottom-10 right-10 w-[1px] h-24 bg-gradient-to-t from-cyber-purple to-transparent opacity-20 hidden md:block"></div>
        </section>

        {/* ABOUT ME SECTION */}
        <section 
          id="about" 
          className="relative py-24 px-4 md:px-8 border-t border-slate-900 bg-slate-950/20"
        >
          <div className="max-w-7xl mx-auto space-y-12 relative z-20">
            {/* Section Header */}
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-cyber-blue uppercase">&raquo; 01 // OVERVIEW &laquo;</span>
              <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight">
                About Sirisha Pyla
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-cyber-blue to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Detailed introduction block (Left Column) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6"
              >
                <div className="p-8 rounded-3xl glassmorphism border border-slate-800 relative">
                  {/* corner decoration */}
                  <div className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center select-none text-cyber-blue/30 font-mono font-bold text-xs">
                    ┌
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center select-none text-cyber-blue/30 font-mono font-bold text-xs">
                    ┘
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line font-sans">
                    {PORTFOLIO_DATA.personalInfo.about}
                  </p>
                </div>
              </motion.div>

              {/* Decorative bento-stats matrix (Right Column) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {PORTFOLIO_DATA.personalInfo.stats.map((stat, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl glassmorphism border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 group flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                      <span className="text-lg font-mono font-bold text-cyber-blue uppercase group-hover:text-black">
                        #{idx + 1}
                      </span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-mono font-semibold tracking-wider uppercase">
                        {stat.label}
                      </div>
                      <div className="text-sm font-semibold font-display text-white mt-1 group-hover:text-cyber-blue transition-colors">
                        {stat.value}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section 
          id="skills" 
          className="relative py-24 px-4 md:px-8 border-t border-slate-900"
        >
          <div className="max-w-7xl mx-auto space-y-12 relative z-20">
            {/* Section Header */}
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase">&raquo; 02 // TECHNICAL STACK &laquo;</span>
              <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight">
                Skill Directories & Proficiency
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-cyber-blue to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Grid of skill categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PORTFOLIO_DATA.skills.map((category, idx) => (
                <SkillCard 
                  key={idx} 
                  category={category} 
                  isDarkMode={isDarkMode} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* INTERNSHIP SECTION */}
        <section 
          id="internship" 
          className="relative py-24 px-4 md:px-8 border-t border-slate-900 bg-slate-950/25"
        >
          <div className="max-w-6xl mx-auto space-y-12 relative z-20">
            {/* Section Header */}
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-cyber-purple uppercase">&raquo; 03 // INDUSTRY GROUNDING &laquo;</span>
              <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight">
                Professional Experience
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-cyber-purple to-pink-500 mx-auto rounded-full"></div>
            </div>

            {/* Single Internship Showcase Display Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden glassmorphism border border-slate-800 p-6 sm:p-8 md:p-10 hover:border-cyber-purple/40 hover:shadow-[0_0_35px_rgba(189,0,255,0.12)] transition-all group"
            >
              {/* Aesthetic visual sidebar line inside internship */}
              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-cyber-purple via-pink-500 to-transparent"></div>

              {/* Top Details info line */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple rounded-full text-xs font-mono tracking-wider uppercase font-bold">
                    VIRTUAL INTERNSHIP
                  </span>
                  <h3 className="text-2xl font-black font-display text-white mt-2 group-hover:text-cyber-purple transition-colors">
                    {PORTFOLIO_DATA.internship.title}
                  </h3>
                  <p className="text-sm text-cyan-400 font-semibold font-tech mt-1 tracking-wider uppercase">
                    {PORTFOLIO_DATA.internship.provider}
                  </p>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-950 font-mono text-xs font-bold text-gray-300">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse inline-block"></span>
                    {PORTFOLIO_DATA.internship.period}
                  </span>
                </div>
              </div>

              {/* Responsibilities list styled of professional grid */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold text-gray-400 tracking-widest uppercase">
                  PROJECT SCOPES & ATTAINMENTS
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PORTFOLIO_DATA.internship.responsibilities.map((resp, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-xl border border-slate-900 bg-slate-950/40 hover:bg-slate-950/60 transition-colors flex items-start gap-3"
                    >
                      <div className="p-1.5 rounded-lg bg-cyber-purple/10 text-cyber-purple shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed font-sans">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom decorative logo alignment */}
              <div className="absolute bottom-2 right-4 text-[9px] font-mono opacity-25 uppercase tracking-widest">
                VERIFIED_CRED_ID: SMARTINTERNZ_2025
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section 
          id="projects" 
          className="relative py-24 px-4 md:px-8 border-t border-slate-900"
        >
          <div className="max-w-7xl mx-auto space-y-12 relative z-20">
            {/* Section Header */}
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase">&raquo; 04 // PROJECT ARCHIVES &laquo;</span>
              <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight">
                Featured Engineering Showcase
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-cyber-blue to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Grid display of 8 projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {PORTFOLIO_DATA.projects.map((project, idx) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={idx} 
                  isDarkMode={isDarkMode} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section 
          id="education" 
          className="relative py-24 px-4 md:px-8 border-t border-slate-900 bg-slate-950/20"
        >
          <div className="max-w-6xl mx-auto space-y-12 relative z-20">
            {/* Section Header */}
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-cyber-purple uppercase">&raquo; 05 // SCHOLASTIC PATHWAY &laquo;</span>
              <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight">
                Academic Qualifications
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-cyber-purple to-pink-500 mx-auto rounded-full"></div>
            </div>

            {/* Timline component */}
            <Timeline education={PORTFOLIO_DATA.education} isDarkMode={isDarkMode} />
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section 
          id="certifications" 
          className="relative py-24 px-4 md:px-8 border-t border-slate-900"
        >
          <div className="max-w-7xl mx-auto space-y-12 relative z-20">
            {/* Section Header */}
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-cyber-blue uppercase">&raquo; 06 // CREDENTIAL REGISTRY &laquo;</span>
              <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight">
                Industry Certifications & Badges
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-cyber-blue to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Matrix layout of certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                  className="p-5 rounded-xl border border-slate-800 bg-slate-950/40 hover:border-cyber-blue/30 hover:bg-slate-950/75 hover:-translate-y-0.5 transition-all flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-cyber-blue/10 text-cyber-blue mt-0.5 border border-cyber-blue/5">
                    <Award className="w-4 h-4 shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-200 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-cyan-400 font-mono tracking-wider mt-1 uppercase font-semibold">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS AND HIGHLIGHTS SECTION */}
        <section 
          id="achievements" 
          className="relative py-24 px-4 md:px-8 border-t border-slate-900 bg-slate-950/20"
        >
          <div className="max-w-6xl mx-auto space-y-12 relative z-20">
            {/* Section Header */}
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase">&raquo; 07 // TRACK RECORD &laquo;</span>
              <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight">
                Key Professional Competencies
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-cyber-blue to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Matrix of Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PORTFOLIO_DATA.achievements.map((achieve, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl glassmorphism border border-slate-800 hover:border-cyber-purple/35 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="inline-flex p-2.5 rounded-xl bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20">
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </div>
                    <h3 className="text-base font-bold font-display text-white">
                      {achieve.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">
                      {achieve.description}
                    </p>
                  </div>
                  <div className="pt-4 flex justify-end font-mono text-[9px] text-cyber-purple select-none uppercase tracking-widest">
                    COMP_ID: 10{idx + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section 
          id="contact" 
          className="relative py-24 px-4 md:px-8 border-t border-slate-900"
        >
          <div className="max-w-6xl mx-auto space-y-12 relative z-20">
            {/* Section Header */}
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase">&raquo; 08 // TRANSCEIVER &laquo;</span>
              <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight">
                Contact & Hire Transmission
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-cyber-blue to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Futuristic Contact Form */}
            <ContactForm contactInfo={PORTFOLIO_DATA.personalInfo.contact} isDarkMode={isDarkMode} />
          </div>
        </section>

        {/* COHESIVE FOOTER STATEMENT */}
        <footer className={`border-t py-12 px-4 relative z-20 ${
          isDarkMode ? "bg-slate-950/80 border-slate-900" : "bg-white border-gray-200"
        }`}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="font-tech text-sm text-white font-bold tracking-wider">SIRISHA PYLA</p>
              <p className="text-xs text-gray-500 mt-1 font-mono">B.Tech AI & ML Student • Future Full Stack Engineer</p>
            </div>

            {/* Center prompt tagline specified by user request */}
            <p className="text-xs font-mono text-cyan-400 font-medium">
              © 2026 Sirisha Pyla. Built with Passion, Code, and Innovation.
            </p>

            {/* Quick Links Footer */}
            <div className="flex gap-4">
              <a
                href={PORTFOLIO_DATA.personalInfo.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:text-[#00f0ff] transition-colors text-gray-400 border border-slate-900 hover:border-cyan-500/30 rounded-lg bg-slate-950/30"
                aria-label="Sirisha Pyla LinkedIn Link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personalInfo.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:text-[#00f0ff] transition-colors text-gray-400 border border-slate-900 hover:border-cyan-500/30 rounded-lg bg-slate-950/30"
                aria-label="Sirisha Pyla GitHub Link"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </footer>

        {/* SCROLL TO TOP FLOATING BUTTON */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-gradient-to-tr from-cyber-blue to-cyan-500 text-black border border-cyber-blue shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-all"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
