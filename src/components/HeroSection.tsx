import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesChips from "@/assets/pringles-chips.png";

// Chips burst from the top of the can opening, arcing outward
const chipBurst = [
  { x: -60, y: -200, rotate: -50, scale: 1.0 },
  { x: 70, y: -220, rotate: 35, scale: 1.05 },
  { x: -130, y: -150, rotate: 55, scale: 0.9 },
  { x: 140, y: -130, rotate: -40, scale: 0.95 },
  { x: -20, y: -280, rotate: 20, scale: 1.1 },
  { x: 30, y: -260, rotate: -25, scale: 0.85 },
  { x: -100, y: -240, rotate: 70, scale: 0.92 },
  { x: 110, y: -200, rotate: -60, scale: 1.0 },
  { x: 0, y: -310, rotate: 10, scale: 1.15 },
  { x: -160, y: -60, rotate: 45, scale: 0.88 },
  { x: -190, y: -180, rotate: -30, scale: 0.93 },
  { x: 180, y: -170, rotate: 50, scale: 1.02 },
  { x: -45, y: -340, rotate: -15, scale: 0.87 },
  { x: 55, y: -330, rotate: 40, scale: 0.95 },
  { x: -200, y: -110, rotate: 65, scale: 0.8 },
  { x: 200, y: -100, rotate: -70, scale: 0.85 },
  { x: 90, y: -300, rotate: 25, scale: 1.08 },
  { x: -80, y: -310, rotate: -55, scale: 0.9 },
  { x: 160, y: -250, rotate: 15, scale: 1.0 },
  { x: -170, y: -220, rotate: -65, scale: 0.92 },
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
          {/* Chips ejecting from the top opening of the can */}
          {chipBurst.map((chip, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-[10%] w-12 h-12 md:w-16 md:h-16 -translate-x-1/2 z-20"
              initial={{ x: 0, y: 40, rotate: 0, scale: 0, opacity: 0 }}
              animate={{
                x: [0, chip.x * 0.3, chip.x],
                y: [40, chip.y * 0.5, chip.y],
                rotate: [0, chip.rotate * 0.5, chip.rotate],
                scale: [0, chip.scale * 1.2, chip.scale],
                opacity: [0, 1, 1],
              }}
              transition={{
                delay: 1.4 + i * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.4, 1],
              }}
            >
              <motion.img
                src={pringlesChips}
                alt="Pringles chip"
                className="w-full h-full object-contain drop-shadow-lg"
                style={{ filter: `hue-rotate(${i * 15}deg)` }}
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 4, -4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5 + i * 0.3,
                  ease: "easeInOut",
                  delay: 2.5 + i * 0.15,
                }}
              />
            </motion.div>
          ))}

          {/* Main Can — shakes then pops open */}
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
              initial={{ scale: 0.8, opacity: 0, y: 60 }}
              animate={{
                scale: [0.8, 1, 1, 1.04, 0.97, 1],
                opacity: 1,
                y: [60, 0, 0, -8, 2, 0],
                rotate: [0, 0, -2, 3, -1, 0],
              }}
              transition={{
                duration: 1.4,
                ease: "easeOut",
                delay: 0.3,
                times: [0, 0.45, 0.65, 0.78, 0.9, 1],
              }}
            />
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
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
