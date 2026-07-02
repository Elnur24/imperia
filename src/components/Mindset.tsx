import { motion } from "motion/react";
import chessImg from "../assets/images/chess_metaphor_1782998564586.jpg";

export default function Mindset() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="mindset-section"
      className="relative w-full min-h-screen bg-black flex flex-col justify-center py-16 md:py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Decorative vertical coordinates - cold strategic feel */}
      <div className="absolute right-8 top-1/4 bottom-1/4 flex flex-col justify-between items-center text-white/10 font-mono text-xs tracking-widest pointer-events-none hidden lg:flex">
        <span>STRATEGY 02</span>
        <div className="w-[1px] h-32 bg-white/5" />
        <span>EVOLUTION</span>
        <div className="w-[1px] h-32 bg-white/5" />
        <span>POSITION [A1]</span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Chess Metaphor Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-6 relative flex justify-center"
        >
          {/* Editorial Framing Border */}
          <div className="absolute -inset-4 border border-white/[0.04] pointer-events-none" />
          
          <div className="relative aspect-[4/3] w-full overflow-hidden group border border-white/10 bg-neutral-950">
            {/* Visual shine sweeping across */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            {/* Static overlay dust on hover */}
            <div className="absolute inset-0 bg-neutral-950/10 mix-blend-overlay group-hover:bg-neutral-900/5 transition duration-500" />
            
            <img
              src={chessImg}
              alt="Chess pawn casting shadow of a King"
              className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />

            {/* Corner Labels */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[9px] font-mono tracking-widest text-neutral-400">
              STAGE 01 // COLD ANALYSIS
            </div>
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[9px] font-mono tracking-widest text-[#dc143c]">
              PAWN TO KING
            </div>
          </div>
        </motion.div>

        {/* Right Side: Philosophy & Power Statements */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="font-mono text-xs tracking-[0.4em] text-[#dc143c] uppercase block mb-3 font-semibold">
              // REPEATED CHOICES SHAPE DESTINY
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
              MINDSET IS <span className="text-[#dc143c]">EVERYTHING</span>
            </h2>
            <p className="font-serif text-lg md:text-xl italic text-neutral-300 leading-relaxed font-light">
              “You do not become powerful in a single moment. You become powerful through repeated, painful, microscopic choices.”
            </p>
          </motion.div>

          {/* Staggered animated list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {[
              {
                num: "01",
                title: "Small disciplines become great victories.",
                desc: "An empire is not laid down in a day. It is built stone by painful stone, checkbox by checkbox.",
              },
              {
                num: "02",
                title: "Thought shapes action.",
                desc: "Filter your mind with ruthless focus. What you allow to dwell in your head dictates your field of battle.",
              },
              {
                num: "03",
                title: "Action shapes destiny.",
                desc: "Comfort breeds decay. Stop speaking of what you will be, and begin the brutal execution of who you are.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-6 group clickable border-b border-white/[0.04] pb-5"
              >
                {/* Number indicator with crimson hover */}
                <div className="font-mono text-xs md:text-sm tracking-widest text-neutral-500 group-hover:text-[#dc143c] transition duration-300 mt-1">
                  [{item.num}]
                </div>
                
                <div className="flex-1">
                  <h3 className="font-classic text-sm md:text-base font-semibold text-white group-hover:translate-x-1 transition duration-300 tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-400 mt-1.5 leading-relaxed font-light font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
