import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import brokenBustImg from "../assets/images/broken_emperor_bust_1782998597329.jpg";
import columnsImg from "../assets/images/roman_stone_columns_1782998824355.jpg";
import helmetImg from "../assets/images/ancient_stone_helmet_1782998806739.jpg";
import angelImg from "../assets/images/marble_angel_1782998618546.jpg";

export default function QuoteGallery() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Unique parallax speeds for cards to create a scattered, physical museum look
  const yParallax1 = useTransform(scrollYProgress, [0, 1], [-20, 60]);
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yParallax3 = useTransform(scrollYProgress, [0, 1], [-10, 30]);
  const yParallax4 = useTransform(scrollYProgress, [0, 1], [30, -50]);

  const cards = [
    {
      img: brokenBustImg,
      quote: "Waste no more time arguing what a good man should be. Be one.",
      author: "Marcus Aurelius",
      title: "Roman Emperor & Philosopher",
      ref: "Meditations, Book X",
      parallax: yParallax1,
      colSpan: "lg:col-span-7",
      heightClass: "aspect-[4/3] lg:aspect-[16/10]",
    },
    {
      img: columnsImg,
      quote: "Difficulties strengthen the mind, as labor does the body.",
      author: "Seneca",
      title: "Stoic Philosopher & Advisor",
      ref: "Letters from a Stoic",
      parallax: yParallax2,
      colSpan: "lg:col-span-5",
      heightClass: "aspect-[3/4]",
    },
    {
      img: helmetImg,
      quote: "Fortune favors the bold.",
      author: "Roman Proverb",
      title: "Centurion Creed",
      ref: "Aeneid by Virgil",
      parallax: yParallax3,
      colSpan: "lg:col-span-5",
      heightClass: "aspect-[3/4]",
    },
    {
      img: angelImg,
      quote: "He who conquers himself is the mightiest warrior.",
      author: "Confucius",
      title: "Ancient Philosopher",
      ref: "The Analects",
      parallax: yParallax4,
      colSpan: "lg:col-span-7",
      heightClass: "aspect-[4/3] lg:aspect-[16/10]",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="wisdom-section"
      className="relative w-full min-h-screen bg-black py-16 md:py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* Editorial Watermark Label */}
      <div className="absolute left-8 top-12 font-mono text-[9px] tracking-[0.5em] text-neutral-700 uppercase vertical-text hidden xl:block select-none pointer-events-none">
        THE ARCHIVE OF SOVEREIGNTY
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Intro Header */}
        <div className="text-center mb-16 md:mb-28 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <span className="w-1.5 h-1.5 bg-[#dc143c]" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-white uppercase">
              GALLERY 04 // ANCIENT TEMPLE
            </span>
            <span className="w-1.5 h-1.5 bg-[#dc143c]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase"
          >
            TEMPLE OF <span className="text-[#dc143c]">WISDOM</span>
          </motion.h2>
          <p className="font-serif text-lg text-neutral-400 font-light italic">
            “No man is free who is not master of himself. Meditate upon these principles written in cold stone.”
          </p>
        </div>

        {/* Asymmetric Scattered Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              style={{ y: card.parallax }}
              className={`${card.colSpan} flex flex-col justify-center`}
            >
              <div className="group relative w-full border border-white/5 bg-neutral-950 overflow-hidden transition-all duration-700 ease-out border-transparent hover:border-[#dc143c]/40 hover:shadow-[0_20px_60px_rgba(220,20,60,0.12)]">
                {/* Visual Grain Intensifier on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none z-20" 
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                  }}
                />
                
                {/* Clean vignette shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10" />

                {/* Main Card Image */}
                <div className={`${card.heightClass} w-full overflow-hidden relative`}>
                  <img
                    src={card.img}
                    alt={card.author}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-50 group-hover:scale-105 group-hover:brightness-40 transition-all duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Overlaid Editorial Content */}
                <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end">
                  {/* Small tag */}
                  <div className="font-mono text-[9px] tracking-[0.3em] text-[#dc143c] uppercase mb-4 opacity-50 group-hover:opacity-100 transition duration-300">
                    {card.ref}
                  </div>

                  {/* Quote with hover slide-up */}
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                    <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-neutral-100 mb-6 italic leading-relaxed">
                      “{card.quote}”
                    </p>

                    {/* Author credits */}
                    <div className="flex items-center space-x-3 border-t border-white/10 pt-4">
                      <div className="w-1.5 h-1.5 bg-[#dc143c] rounded-full" />
                      <div>
                        <cite className="font-classic text-xs md:text-sm tracking-wider font-semibold text-white not-italic block">
                          {card.author}
                        </cite>
                        <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase block mt-0.5">
                          {card.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
