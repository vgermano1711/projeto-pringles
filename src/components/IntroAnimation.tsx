import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import pringlesLogo from "@/assets/pringles-logo.png";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesScream from "@/assets/pringles-sour-cream.png";
import pringlesbbq from "@/assets/pringles-bbq.png";

const cans = [
  { src: pringlesOriginal, x: "-120%", y: "-30%", rotate: -25, delay: 0.2 },
  { src: pringlesScream, x: "120%", y: "-20%", rotate: 25, delay: 0.35 },
  { src: pringlesbbq, x: "-100%", y: "80%", rotate: -15, delay: 0.5 },
];

const chips = ["🎉", "💥", "🔥", "😋", "🤩", "🎊", "✨", "🎈"];

const IntroAnimation = ({ onFinish }: { onFinish: () => void }) => {
  const [phase, setPhase] = useState<"in" | "pop" | "out">("in");

  useEffect(() => {
    const popTimer = setTimeout(() => setPhase("pop"), 1200);
    const outTimer = setTimeout(() => setPhase("out"), 2200);
    const doneTimer = setTimeout(() => onFinish(), 3000);
    return () => {
      clearTimeout(popTimer);
      clearTimeout(outTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {phase !== "out" ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "hsl(var(--pringles-red))" }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Radial glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, hsl(var(--pringles-yellow) / 0.35) 0%, transparent 65%)",
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Flying cans from outside */}
          {cans.map((can, i) => (
            <motion.img
              key={i}
              src={can.src}
              alt=""
              className="absolute w-24 md:w-36 pointer-events-none drop-shadow-2xl"
              initial={{ x: can.x, y: can.y, opacity: 0, rotate: can.rotate, scale: 0.5 }}
              animate={
                phase === "pop"
                  ? { x: 0, y: 0, opacity: 1, rotate: 0, scale: 1.1 }
                  : { x: can.x, y: can.y, opacity: 0, rotate: can.rotate, scale: 0.5 }
              }
              transition={{
                duration: 0.7,
                delay: can.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                left: `${20 + i * 25}%`,
                top: `${15 + i * 20}%`,
              }}
            />
          ))}

          {/* Floating emojis */}
          {chips.map((emoji, i) => (
            <motion.span
              key={i}
              className="absolute text-3xl md:text-5xl select-none pointer-events-none"
              style={{
                left: `${5 + i * 12}%`,
                top: `${10 + (i % 4) * 22}%`,
              }}
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={
                phase === "pop"
                  ? {
                      opacity: [0, 1, 1, 0],
                      y: [20, 0, -20, -50],
                      scale: [0, 1.2, 1, 0.5],
                      rotate: [0, i % 2 === 0 ? 20 : -20, 0],
                    }
                  : { opacity: 0, y: 20, scale: 0 }
              }
              transition={{
                duration: 1.2,
                delay: 0.3 + i * 0.07,
                ease: "easeOut",
              }}
            >
              {emoji}
            </motion.span>
          ))}

          {/* Center logo */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.img
              src={pringlesLogo}
              alt="Pringles"
              className="h-40 md:h-64 w-auto drop-shadow-2xl"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* POP text burst */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                phase === "pop"
                  ? { scale: [0, 1.4, 1], opacity: [0, 1, 1] }
                  : { scale: 0, opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "backOut" }}
              className="relative"
            >
              <span
                className="font-display text-6xl md:text-9xl"
                style={{
                  color: "hsl(var(--pringles-yellow))",
                  textShadow:
                    "0 0 40px hsl(var(--pringles-yellow) / 0.6), 0 4px 0 hsl(30 100% 35%)",
                }}
              >
                POP!
              </span>
              <motion.span
                className="absolute -top-4 -right-6 text-4xl md:text-5xl"
                animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 0.8, repeat: 2 }}
              >
                💥
              </motion.span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={phase === "pop" ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="font-body text-lg md:text-xl text-white/80 tracking-widest uppercase"
            >
              Once you pop, the fun don't stop!
            </motion.p>
          </div>

          {/* Bottom wave */}
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          >
            <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-10 md:h-16">
              <path
                d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z"
                fill="hsl(var(--pringles-yellow) / 0.25)"
              />
            </svg>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default IntroAnimation;
