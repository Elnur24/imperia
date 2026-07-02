import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import heroImg from "../assets/images/imperium_hero_statue_1782998545860.jpg";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // HTML5 Canvas for Floating Dust Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
    }> = [];

    const createParticles = () => {
      const count = Math.min(Math.floor(width / 20), 60);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.5,
          speedY: -(Math.random() * 0.4 + 0.1),
          speedX: (Math.random() * 0.2 - 0.1),
          opacity: Math.random() * 0.5 + 0.1,
          pulse: Math.random() * Math.PI,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    createParticles();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += p.pulseSpeed;

        // Wrap around borders
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const alpha = p.opacity * (0.5 + Math.sin(p.pulse) * 0.5);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  const titleWords = "DISCIPLINE BUILDS DESTINY".split(" ");

  const scrollToNext = () => {
    const nextSection = document.getElementById("mindset-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      id="hero-section"
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center bg-black"
    >
      {/* Background Image Container with Parallax Zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          scale: 1.05,
          x: mousePos.x * 12,
          y: mousePos.y * 12,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
        <img
          src={heroImg}
          alt="Monumental Roman Emperor Statue"
          className="w-full h-full object-cover grayscale brightness-50 contrast-125 object-center"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Floating particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />

      {/* Subtle Fog/Smoke effect */}
      <div className="absolute inset-0 fog-overlay z-10 opacity-70 animate-pulse" />

      {/* Thin Editorial Accent Lines */}
      <div className="absolute left-8 right-8 top-12 bottom-12 border border-white/[0.03] pointer-events-none z-20 hidden md:block">
        <div className="absolute left-0 top-0 w-3 h-[1px] bg-[#dc143c]" />
        <div className="absolute left-0 top-0 h-3 w-[1px] bg-[#dc143c]" />
        <div className="absolute right-0 bottom-0 w-3 h-[1px] bg-[#dc143c]" />
        <div className="absolute right-0 bottom-0 h-3 w-[1px] bg-[#dc143c]" />
      </div>

      {/* Main content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 max-w-4xl select-none">
        
        {/* Subtle Brand Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-6 flex items-center space-x-3"
        >
          <span className="w-1.5 h-1.5 bg-[#dc143c] rotate-45" />
          <span className="font-mono text-xs tracking-[0.6em] text-white font-light uppercase">
            IMPERIUM / THE SCRIPT
          </span>
          <span className="w-1.5 h-1.5 bg-[#dc143c] rotate-45" />
        </motion.div>

        {/* Headline Word-by-Word Animation */}
        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6 uppercase flex flex-wrap justify-center overflow-hidden">
          {titleWords.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden mr-3 md:mr-6">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: wordIndex * 0.15 + 0.4,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
          className="font-serif text-lg md:text-2xl italic text-neutral-300 font-light max-w-2xl mb-3"
        >
          “Your mind is your first kingdom.”
        </motion.p>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-neutral-400 uppercase mb-10"
        >
          Rule yourself before you rule the world.
        </motion.p>

        {/* Refined CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="relative group"
        >
          {/* Subtle red backing glow on hover */}
          <div className="absolute inset-0 bg-[#dc143c]/15 rounded-none blur-xl group-hover:bg-[#dc143c]/30 transition duration-700 pointer-events-none" />
          
          <button
            onClick={scrollToNext}
            className="relative px-8 py-4 bg-white text-black font-classic font-semibold tracking-[0.25em] text-xs uppercase hover:bg-[#dc143c] hover:text-white transition-all duration-500 ease-out flex items-center space-x-2"
          >
            <span>ENTER THE ASCENT</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ delay: 2, duration: 2.5, repeat: Infinity }}
        onClick={scrollToNext}
        className="absolute bottom-10 flex flex-col items-center justify-center cursor-none z-30"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-500 uppercase mb-2">
          SCROLL
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-neutral-500 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-3 bg-[#dc143c]"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
