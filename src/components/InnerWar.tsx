import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import warriorImg from "../assets/images/warrior_inner_war_1782998579642.jpg";

export default function InnerWar() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Dynamic Scroll Tracking for the Moving Crimson Line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Grow the red line from left to right as the user scrolls
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  const principles = [
    { num: "01", text: "Control your mind.", desc: "If you do not rule your thoughts, your thoughts will rule you." },
    { num: "02", text: "Respect your discipline.", desc: "Motivation gets you started. Uncompromising habits build the fortress." },
    { num: "03", text: "End excuses.", desc: "The universe does not care about your circumstances. Only your results endure." },
    { num: "04", text: "Build your legacy.", desc: "Every action today is a permanent pen stroke in the book of your life." },
  ];

  return (
    <section
      ref={sectionRef}
      id="inner-war-section"
      className="relative w-full min-h-screen bg-black flex flex-col justify-center py-16 md:py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* Absolute Moving Crimson Divider Line across the top of this section */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/[0.04]">
        <motion.div
          style={{ width: lineWidth }}
          className="h-full bg-[#dc143c] origin-left shadow-[0_0_10px_#dc143c]"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Gladiator/Warrior Artwork */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          {/* Accent frame decoration */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#dc143c] pointer-events-none hidden md:block" />
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#dc143c] pointer-events-none hidden md:block" />

          <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-neutral-950">
            <img
              src={warriorImg}
              alt="Ancient Gladiator Sculpture"
              className="w-full h-full object-cover grayscale contrast-125 brightness-50"
              referrerPolicy="no-referrer"
            />
            {/* Visual moody gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            
            {/* Stamp Detail */}
            <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
              // MARCUS AURELIUS MEDITATIONS
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Philosophy Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 mb-4"
          >
            <div className="w-10 h-[1px] bg-[#dc143c]" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-white uppercase">
              SECTION 03 // THE CAMPAIGN
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase"
          >
            THE WAR IS <span className="text-[#dc143c]">WITHIN</span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed font-light"
          >
            “The greatest battle is not fought against external foes. It is fought in the dark chambers of your own skull. It is a quiet war against weakness, comfort, distraction, and delay.”
          </motion.p>

          {/* Staggered Animated Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {principles.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
                className="group p-5 border border-white/[0.03] bg-neutral-950/20 hover:border-neutral-800 transition duration-300 relative overflow-hidden"
              >
                {/* Background red indicator on hover */}
                <div className="absolute top-0 right-0 w-1.5 h-0 bg-[#dc143c] group-hover:h-full transition-all duration-300" />
                
                {/* Number */}
                <div className="font-mono text-xs text-[#dc143c] mb-2 tracking-widest font-semibold">
                  [{p.num}]
                </div>
                {/* Principle title */}
                <h3 className="font-classic text-sm font-semibold tracking-wider text-white mb-1">
                  {p.text}
                </h3>
                {/* Description */}
                <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative p-6 md:p-8 bg-neutral-950/60 border border-white/5 relative"
          >
            {/* Elegant quotes mark */}
            <span className="absolute -top-4 left-6 font-serif text-6xl text-[#dc143c]/10 select-none pointer-events-none">
              “
            </span>
            <blockquote className="font-serif text-xl italic text-neutral-200 mb-3 tracking-wide leading-relaxed">
              “The obstacle in the path becomes the path. Never forget, the obstacle is the way.”
            </blockquote>
            <cite className="font-mono text-[10px] tracking-[0.3em] text-[#dc143c] uppercase block not-italic font-medium">
              — MARCUS AURELIUS, ROMAN EMPEROR
            </cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
