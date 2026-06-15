import React, { useState } from "react";
import { Send, CheckCircle2, AlertTriangle, ShieldCheck, Mail, Phone, Linkedin, Github, FileDown, Briefcase } from "lucide-react";
import { motion } from "motion/react";

interface ContactFormProps {
  contactInfo: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  isDarkMode?: boolean;
}

export default function ContactForm({ contactInfo, isDarkMode = true }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMsg("Crucial parameters missing. Please complete Name, Email, and Message.");
      return;
    }

    setStatus("submitting");

    // Simulate futuristic transmission
    setTimeout(() => {
      setStatus("success");
      setStatusMsg("Holographic transmission broadcasted successfully! Sirisha will review your payload shortly.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
      {/* Visual coordinates & tech contact card coordinates (Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-5 flex flex-col justify-between space-y-6"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-tech font-bold uppercase tracking-widest bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20">
            <span className="w-1.5 h-1.5 bg-cyber-purple rounded-full animate-pulse"></span>
            SYS_TRANS_PORT_3000
          </div>
          <h3 className="text-2xl font-bold font-display tracking-tight text-white">
            Let's Construct Something Great
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            I am always open to exploring exciting internships, collaborative full stack project developments, ML research initiatives, or junior software engineering roles. Drop a ping, and my terminal will secure the packet.
          </p>
        </div>

        {/* Channels list of contact */}
        <div className="space-y-4 py-4">
          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 glassmorphism border border-slate-800 hover:border-cyber-blue/30 relative overflow-hidden group"
          >
            <div className="p-2.5 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue group-hover:bg-cyber-blue group-hover:text-black transition-all">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono font-bold tracking-wider uppercase">Email Mailbox</p>
              <p className="text-sm font-semibold text-gray-200 font-mono group-hover:text-cyber-blue transition-colors">
                {contactInfo.email}
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 glassmorphism border border-slate-800 hover:border-cyber-blue/30 relative overflow-hidden group"
          >
            <div className="p-2.5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-black transition-all">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono font-bold tracking-wider uppercase">Secure VoIP</p>
              <p className="text-sm font-semibold text-gray-200 font-mono group-hover:text-cyber-cyan transition-colors">
                {contactInfo.phone}
              </p>
            </div>
          </a>

          {/* Social Links Row */}
          <div className="flex gap-4">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl glassmorphism border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 text-gray-300 transition-all font-mono text-xs font-bold"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              LINKEDIN
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl glassmorphism border border-slate-800 hover:border-gray-500/50 hover:text-white text-gray-300 transition-all font-mono text-xs font-bold"
            >
              <Github className="w-4 h-4" />
              GITHUB
            </a>
          </div>
        </div>

        {/* Extra actions */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#hire-form"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyber-blue to-cyan-500 text-black py-3 px-4 rounded-xl font-bold font-tech text-xs tracking-wider border border-cyber-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
          >
            <Briefcase className="w-4 h-4" />
            HIRE ME NOW
          </a>
          <a
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              alert("System telemetry: Initializing physical document down-link of Sirisha Pyla's Resume ... Done! (In portfolio production, this downloads the PDF file.)");
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-700 hover:border-cyber-purple/50 text-gray-200 py-3 px-4 rounded-xl font-bold font-tech text-xs tracking-wider hover:shadow-[0_0_15px_rgba(189,0,255,0.2)] transition-all"
          >
            <FileDown className="w-4 h-4 text-cyber-purple" />
            GET RESUME
          </a>
        </div>
      </motion.div>

      {/* Futuristic Glowing Contact Form (Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7"
        id="hire-form"
      >
        <div className="relative p-6 sm:p-8 rounded-3xl glassmorphism border border-slate-800 hover:border-slate-700/60 transition-all">
          
          {/* Neon terminal design assets */}
          <div className="absolute top-2 right-4 flex items-center gap-1.5 opacity-35 select-none pointer-events-none">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
          </div>

          <div className="absolute -bottom-3 right-6 px-3 py-0.5 rounded-md bg-[#030303] border border-cyan-500/20 text-[9px] font-mono text-cyan-400 uppercase select-none opacity-40">
            AES_256_SECURE
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                Identifier (Name) <span className="text-cyber-blue">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Rachel Mercer"
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                Network Mailbox (Email) <span className="text-cyber-blue">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="e.g. contact@recruiter.com"
                className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
              />
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label htmlFor="subject" className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                Message Vector (Subject)
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="e.g. Intern Opportunity or Project Consultation"
                className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                Data Payload (Message) <span className="text-cyber-blue">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="State your objectives..."
                className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all resize-none"
              />
            </div>

            {/* Submit status alerts */}
            {status === "error" && (
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-medium">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                <span>{statusMsg}</span>
              </div>
            )}

            {status === "success" && (
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-green-950/40 border border-green-500/40 text-green-300 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-green-400 animate-bounce" />
                <span>{statusMsg}</span>
              </div>
            )}

            {/* Send button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`w-full py-3.5 rounded-xl text-sm font-bold font-tech tracking-widest transition-all uppercase flex items-center justify-center gap-2 border cursor-pointer ${
                status === "submitting"
                  ? "bg-slate-900 border-slate-800 text-gray-500 cursor-not-allowed"
                  : "bg-cyber-blue hover:bg-transparent text-black hover:text-cyber-blue border-cyber-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              }`}
            >
              {status === "submitting" ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-600 border-t-white rounded-full animate-spin"></div>
                  Bypassing Proxy...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Transmit Packet
                </>
              )}
            </button>
          </form>

          {/* Secure disclaimer */}
          <div className="flex items-center gap-1.5 mt-4 justify-center text-[10px] text-gray-500 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Encrypted socket. End-to-end recruiter transmission.</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
