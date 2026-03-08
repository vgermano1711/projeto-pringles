import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesChips from "@/assets/pringles-chips.png";

const chipBurst = [
  { x: -140, y: -180, rotate: -45, scale: 1.1 },
  { x: 150, y: -160, rotate: 30, scale: 1 },
  { x: -80, y: -240, rotate: 60, scale: 0.9 },
  { x: 100, y: -220, rotate: -20, scale: 1.05 },
  { x: -180, y: -100, rotate: 40, scale: 0.85 },
  { x: 170, y: -80, rotate: -55, scale: 0.95 },
  { x: -40, y: -280, rotate: 15, scale: 1.15 },
  { x: 50, y: -260, rotate: -35, scale: 0.9 },
];

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const canRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const canY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pringles-gradient"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--pringles-yellow)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary-foreground leading-none tracking-tight">
            PRINGLES
          </h1>
          <p className="font-display text-2xl md:text-4xl text-pringles-yellow mt-2">
            ABRA A DIVERSÃO
          </p>
        </motion.div>

        {/* Can + Chips Container */}
        <div className="relative w-64 md:w-80 h-[400px] md:h-[500px]">
          {/* Chips bursting out of the can */}
          {chipBurst.map((chip, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-[35%] w-14 h-14 md:w-18 md:h-18 -translate-x-1/2"
              initial={{ x: 0, y: 0, rotate: 0, scale: 0, opacity: 0 }}
              animate={{
                x: chip.x,
                y: chip.y,
                rotate: chip.rotate,
                scale: chip.scale,
                opacity: 1,
              }}
              transition={{
                delay: 1.2 + i * 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 80,
                damping: 12,
              }}
            >
              <motion.img
                src={pringlesChips}
                alt="Pringles chip"
                className="w-full h-full object-contain drop-shadow-lg"
                style={{ filter: `hue-rotate(${i * 12}deg)` }}
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + i * 0.4,
                  ease: "easeInOut",
                  delay: 2 + i * 0.2,
                }}
              />
            </motion.div>
          ))}

          {/* Main Can with shake before burst */}
          <motion.div
            style={{
              rotateZ: canRotate,
              y: canY,
            }}
            className="relative z-10 w-full h-full"
          >
            <motion.img
              src={pringlesOriginal}
              alt="Pringles Original Can"
              className="w-full h-full object-contain drop-shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1, 1, 1.03, 0.98, 1],
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.3,
                times: [0, 0.5, 0.7, 0.8, 0.9, 1],
              }}
            />
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pringles-yellow-gradient text-pringles-dark font-display text-xl md:text-2xl px-10 py-4 rounded-full shadow-lg animate-pulse-glow cursor-pointer"
        >
          ABRA A DIVERSÃO 🎉
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-3 bg-primary-foreground/70 rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
