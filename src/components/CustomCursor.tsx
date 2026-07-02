import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  // 1. All hook declarations strictly at the top level, unconditionally
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 450,
    damping: 32,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 450,
    damping: 32,
  });

  // Media query check for desktop (pointer: fine)
  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    const updateDevice = () => {
      setIsDesktop(media.matches);
    };

    updateDevice();
    media.addEventListener("change", updateDevice);

    return () => {
      media.removeEventListener("change", updateDevice);
    };
  }, []);

  // Track mouse coordinates and hovered status for clickable elements
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target && (
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("clickable") ||
          target.getAttribute("role") === "button"
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // 2. Early return condition checked only after ALL hooks have been executed
  if (!isDesktop) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <motion.div 
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/80 bg-black/20 backdrop-blur-sm"
        animate={{
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? "rgba(220, 20, 60, 0.8)" : "rgba(255, 255, 255, 0.8)",
          backgroundColor: isHovered ? "rgba(220, 20, 60, 0.1)" : "rgba(0, 0, 0, 0.2)"
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-[#dc143c]" />
      </motion.div>
    </motion.div>
  );
}
