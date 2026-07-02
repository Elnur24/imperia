import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Separator from "./components/Separator";
import Mindset from "./components/Mindset";
import InnerWar from "./components/InnerWar";
import QuoteGallery from "./components/QuoteGallery";
import Legacy from "./components/Legacy";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative min-h-screen bg-black text-neutral-100 overflow-hidden selection:bg-[#dc143c] selection:text-white">
      {/* Film Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Entry Loader Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Full Page Content (Rendered after loader) */}
      {!isLoading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full flex flex-col"
        >
          {/* Subtle Ambient Sound Rhythm HUD Indicator */}
          <div className="fixed top-8 right-8 z-[999] flex items-center space-x-3 pointer-events-auto">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="group flex items-center space-x-2 bg-black/60 hover:bg-black/90 border border-white/10 px-3 py-1.5 backdrop-blur-md transition duration-300 cursor-none"
            >
              {/* Pulsing Visual Waveform */}
              <div className="flex items-end space-x-[2px] h-3 w-4">
                <span className={`w-[2px] rounded-full bg-white transition duration-300 ${!isMuted ? "animate-pulse h-full" : "h-[3px]"}`} style={{ animationDuration: "0.6s" }} />
                <span className={`w-[2px] rounded-full bg-[#dc143c] transition duration-300 ${!isMuted ? "animate-pulse h-1/2" : "h-[4px]"}`} style={{ animationDuration: "0.4s" }} />
                <span className={`w-[2px] rounded-full bg-white transition duration-300 ${!isMuted ? "animate-pulse h-[80%]" : "h-[2px]"}`} style={{ animationDuration: "0.8s" }} />
              </div>
              <span className="font-mono text-[9px] tracking-widest text-neutral-400 group-hover:text-white uppercase transition">
                {isMuted ? "AUDIO / OFF" : "AUDIO / ACTIVE"}
              </span>
            </button>
          </div>

          {/* SECTION 1: HERO / AWAKENING */}
          <Hero />

          {/* Separator I */}
          <Separator label="I / TRANSFORMATION" />

          {/* SECTION 2: MINDSET / TRANSFORMATION */}
          <Mindset />

          {/* Separator II */}
          <Separator label="II / THE STRUGGLE" />

          {/* SECTION 3: THE INNER WAR */}
          <InnerWar />

          {/* Separator III */}
          <Separator label="III / ARCHIVE" />

          {/* SECTION 4: ANCIENT WISDOM / QUOTES GALLERY */}
          <QuoteGallery />

          {/* Separator IV */}
          <Separator label="IV / LEGACY" />

          {/* SECTION 5: FINAL CALL / LEGACY */}
          <Legacy />
        </motion.main>
      )}
    </div>
  );
}
