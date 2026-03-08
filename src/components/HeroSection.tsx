import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesChips from "@/assets/pringles-chips.png";
import pringlesLogo from "@/assets/pringles-logo.png";

// Chips that burst from the can top
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
];

// Floating chips around the can with orbit-like positions
const floatingChips = [
  { x: -220, y: -80, rotate: 25, scale: 0.7, duration: 4.2, delay: 0.5 },
  { x: 230, y: -120, rotate: -35, scale: 0.65, duration: 3.8, delay: 0.8 },
  { x: -180, y: 100, rotate: 50, scale: 0.6, duration: 5.0, delay: 0.2 },
  { x: 200, y: 80, rotate: -20, scale: 0.75, duration: 4.5, delay: 1.0 },
  { x: -260, y: -200, rotate: 40, scale: 0.55, duration: 3.5, delay: 0.3 },
  { x: 270, y: -180, rotate: -55, scale: 0.5, duration: 4.8, delay: 0.7 },
  { x: -140, y: 180, rotate: -30, scale: 0.68, duration: 4.0, delay: 1.2 },
  { x: 160, y: 160, rotate: 60, scale: 0.58, duration: 3.6, delay: 0.9 },
  { x: -300, y: 20, rotate: 15, scale: 0.52, duration: 5.2, delay: 0.4 },
  { x: 310, y: -30, rotate: -45, scale: 0.62, duration: 4.3, delay: 0.6 },
  { x: -80, y: 220, rotate: 70, scale: 0.48, duration: 3.9, delay: 1.1 },
  { x: 100, y: -280, rotate: -10, scale: 0.56, duration: 4.7, delay: 0.1 },
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-pringles-red" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 flex flex-col items-center gap-6 px-4 pt-20">
        {/* Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <img src={pringlesLogo} alt="Pringles" className="h-28 md:h-36 w-auto mx-auto" />
          <p className="font-display text-xl md:text-2xl text-pringles-yellow mt-3">
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

          {/* Floating chips around the can */}
          {floatingChips.map((chip, i) => (
            <motion.div
              key={`float-${i}`}
              className="absolute left-1/2 top-1/2 w-10 h-10 md:w-14 md:h-14 z-5"
              initial={{ x: chip.x, y: chip.y, rotate: chip.rotate, scale: 0, opacity: 0 }}
              animate={{
                x: chip.x,
                y: chip.y,
                rotate: chip.rotate,
                scale: chip.scale,
                opacity: 0.85,
              }}
              transition={{
                delay: 2.0 + chip.delay,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <motion.img
                src={pringlesChips}
                alt=""
                className="w-full h-full object-contain drop-shadow-md"
                style={{ filter: `hue-rotate(${i * 30}deg)` }}
                animate={{
                  y: [0, -12, 0, 8, 0],
                  x: [0, 6, 0, -6, 0],
                  rotate: [chip.rotate, chip.rotate + 15, chip.rotate, chip.rotate - 10, chip.rotate],
                  scale: [chip.scale, chip.scale * 1.08, chip.scale, chip.scale * 0.95, chip.scale],
                }}
                transition={{
                  repeat: Infinity,
                  duration: chip.duration,
                  ease: "easeInOut",
                  delay: 2.5 + chip.delay,
                }}
              />
            </motion.div>
          ))}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-0">
            <motion.div
              className="w-full h-full rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,215,0,0.5) 0%, rgba(255,69,0,0.25) 40%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

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

      </motion.div>
    </section>
  );
};

export default HeroSection;
