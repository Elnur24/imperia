import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, Twitter, Shield, Heart, ArrowUp } from "lucide-react";
import angelImg from "../assets/images/marble_angel_1782998618546.jpg";

export default function Legacy() {
  const [isPledgeOpen, setIsPledgeOpen] = useState(false);
  const [pledgeName, setPledgeName] = useState("");
  const [savedPledge, setSavedPledge] = useState<string | null>(null);
  const [assignedMantra, setAssignedMantra] = useState("");

  const mantras = [
    "Sovereign of Mind. Conqueror of Comfort.",
    "Master of Self. Builder of Legacy.",
    "Uncompromising Focus. Intimidating Discipline.",
    "The Obstacle is Your Runway. Act Ruthlessly.",
  ];

  useEffect(() => {
    const stored = localStorage.getItem("imperium_pledge_name");
    if (stored) {
      setSavedPledge(stored);
      const storedMantra = localStorage.getItem("imperium_pledge_mantra") || mantras[0];
      setAssignedMantra(storedMantra);
    }
  }, []);

  const handlePledgeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!pledgeName.trim()) return;

    const randomMantra = mantras[Math.floor(Math.random() * mantras.length)];
    localStorage.setItem("imperium_pledge_name", pledgeName);
    localStorage.setItem("imperium_pledge_mantra", randomMantra);

    setSavedPledge(pledgeName);
    setAssignedMantra(randomMantra);
    setIsPledgeOpen(false);
  };

  const clearPledge = () => {
    localStorage.removeItem("imperium_pledge_name");
    localStorage.removeItem("imperium_pledge_mantra");
    setSavedPledge(null);
    setPledgeName("");
  };

  const scrollToTop = () => {
    const topSection = document.getElementById("hero-section");
    if (topSection) {
      topSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="legacy-section"
      className="relative w-full min-h-screen bg-black flex flex-col justify-between pt-16 md:pt-28 px-6 md:px-16 overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <img
          src={angelImg}
          alt="Majestic Marble Angel wings background"
          className="w-full h-full object-cover grayscale brightness-35 contrast-125 object-center scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Subtle glowing lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/0 via-white/[0.03] to-white/0 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-15 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 select-none">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ once: true }}
          className="mb-6 flex items-center space-x-2"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] text-white uppercase">
            SECTION 05 // FINAL SOVEREIGNTY
          </span>
        </motion.div>

        {/* Big Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 uppercase"
        >
          YOUR STORY <span className="text-[#dc143c]">STARTS NOW</span>
        </motion.h2>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-serif text-lg md:text-2xl italic text-neutral-300 mb-2 font-light"
        >
          “Do not wait for motivation. Build discipline.”
        </motion.p>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-mono text-[10px] tracking-[0.3em] text-neutral-400 uppercase mb-12"
        >
          History remembers those who acted. Comfort remembers nothing.
        </motion.p>

        {/* Dynamic State Display: Pledge Status */}
        <div className="flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!savedPledge ? (
              <motion.div
                key="pledge-button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative group"
              >
                {/* Subtle red glow backing */}
                <div className="absolute -inset-1 bg-[#dc143c]/20 rounded-none blur-lg group-hover:bg-[#dc143c]/40 transition duration-500 pointer-events-none" />
                
                <button
                  onClick={() => setIsPledgeOpen(true)}
                  className="relative px-10 py-5 border border-white/20 bg-neutral-950/80 backdrop-blur-md text-white font-classic font-semibold tracking-[0.3em] text-xs uppercase hover:border-[#dc143c] hover:bg-[#dc143c] hover:text-white transition-all duration-500 ease-out"
                >
                  BEGIN THE ASCENT
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="pledge-sealed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-6 md:p-8 border border-[#dc143c]/30 bg-neutral-950/80 backdrop-blur-md max-w-md w-full relative"
              >
                {/* Visual Seal stamp */}
                <div className="absolute top-4 right-4 text-[#dc143c] opacity-60">
                  <Shield size={20} />
                </div>
                <div className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase mb-2">
                  THE SOVEREIGN PLEDGE SECURED
                </div>
                <h4 className="font-classic text-lg font-bold text-white tracking-wider mb-2">
                  {savedPledge}
                </h4>
                <p className="font-serif text-sm italic text-[#dc143c] mb-6">
                  “{assignedMantra}”
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={scrollToTop}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-white font-mono text-[9px] tracking-widest uppercase hover:bg-white/10 transition"
                  >
                    RETURN TO THE TOP
                  </button>
                  <button
                    onClick={clearPledge}
                    className="px-4 py-2 bg-transparent text-neutral-500 font-mono text-[9px] tracking-widest uppercase hover:text-white transition"
                  >
                    RESET COVENANT
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Sovereign Pledge Input Modal */}
      <AnimatePresence>
        {isPledgeOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
            {/* Dark background grain */}
            <div className="grain-overlay" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md bg-neutral-950 border border-white/10 p-8 md:p-10 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-10 h-10 border border-[#dc143c] flex items-center justify-center text-[#dc143c]">
                  <Shield size={18} />
                </div>
              </div>

              <h3 className="font-classic text-xl font-bold text-white tracking-wider mb-3">
                SEAL THE COVENANT
              </h3>
              
              <p className="font-serif text-sm text-neutral-400 mb-6 italic leading-relaxed">
                “Write your name in stone. Commit yourself to daily discipline, uncompromising focus, and the ultimate pursuit of legacy.”
              </p>

              <form onSubmit={handlePledgeSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="ENTER YOUR SOVEREIGN NAME"
                  value={pledgeName}
                  onChange={(e) => setPledgeName(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-white placeholder-neutral-600 font-mono text-xs tracking-widest text-center focus:outline-none focus:border-[#dc143c] transition duration-300 uppercase"
                />
                
                <div className="flex space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsPledgeOpen(false)}
                    className="flex-1 px-4 py-3 bg-neutral-900 text-neutral-400 font-mono text-[10px] tracking-widest uppercase hover:text-white transition duration-300 border border-white/5"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-[#dc143c] text-white font-classic font-semibold text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition duration-300"
                  >
                    SEAL PLEDGE
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Minimal Footer Column */}
      <div className="relative z-10 border-t border-white/[0.05] mt-16 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center text-neutral-600 font-mono text-[9px] tracking-[0.3em] uppercase">
        <div className="mb-4 md:mb-0">
          © 2026 IMPERIUM. ALL SOVEREIGNTY RESERVED.
        </div>
        
        <div className="mb-4 md:mb-0 text-center italic font-serif text-[11px] text-neutral-500 tracking-normal normal-case">
          “Built for those who refuse to stay ordinary.”
        </div>

        {/* Social Icons & Top-scroll Arrow */}
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-white transition duration-300" aria-label="Instagram">
            <Instagram size={14} />
          </a>
          <a href="#" className="hover:text-white transition duration-300" aria-label="Twitter">
            <Twitter size={14} />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-neutral-500 hover:text-[#dc143c] transition duration-300 cursor-none"
          >
            <span>TOP</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}
