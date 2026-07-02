import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600); // Small delay for final visual impact
          return 100;
        }
        // Realistic step progress
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  const textLetters = "FORGING DISCIPLINE...".split("");

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      {/* Absolute background grain for texture */}
      <div className="grain-overlay" />

      {/* Decorative roman column line */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-white/5" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-white/5" />

      <div className="relative flex flex-col items-center max-w-md px-6 text-center">
        {/* Stoic Monolith Emblem */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: [0.3, 0.8, 0.3], y: 0, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <div className="w-12 h-16 border border-white/20 relative flex items-center justify-center p-1 bg-neutral-950/40">
            <div className="w-full h-full border border-white/5 bg-gradient-to-t from-[#dc143c]/10 to-transparent flex items-center justify-center">
              <span className="font-classic text-sm text-neutral-400 tracking-wider">I</span>
            </div>
          </div>
        </motion.div>

        {/* Animated Headline letter-by-letter */}
        <div className="flex justify-center space-x-[2px] mb-6">
          {textLetters.map((letter, index) => (
            <motion.span
              key={index}
              className="font-classic text-xs md:text-sm tracking-[0.25em] text-neutral-200 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.04,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Dynamic progress bar line */}
        <div className="w-48 h-[1px] bg-neutral-900 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#dc143c]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.1 }}
          />
        </div>

        {/* Dynamic Percentage label */}
        <motion.div
          className="mt-3 font-mono text-[10px] tracking-[0.3em] text-neutral-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
        >
          {progress}%
        </motion.div>
      </div>

      {/* Decorative corner labels */}
      <div className="absolute top-12 left-12 font-mono text-[9px] tracking-[0.4em] text-neutral-600 uppercase hidden md:block">
        STOIC ERA / IMPERIUM
      </div>
      <div className="absolute bottom-12 right-12 font-mono text-[9px] tracking-[0.4em] text-neutral-600 uppercase hidden md:block">
        MEMENTO MORI
      </div>
    </motion.div>
  );
}
