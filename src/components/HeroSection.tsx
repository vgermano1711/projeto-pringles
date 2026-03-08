import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesScream from "@/assets/pringles-sour-cream.png";
import pringlesLogo from "@/assets/pringles-logo.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const leftCanY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const rightCanY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-pringles-red" />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url(${pringlesLogo})`,
          backgroundSize: "120px",
          backgroundRepeat: "repeat",
        }}
      />

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-20">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Left can */}
          <motion.div
            style={{ y: leftCanY }}
            className="relative w-32 sm:w-40 md:w-52 shrink-0"
            initial={{ opacity: 0, x: -120, rotate: -20, scale: 0.7 }}
            animate={{ opacity: 1, x: 0, rotate: -6, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 -inset-x-6 rounded-full blur-[50px]"
              style={{ background: "radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)" }}
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={pringlesOriginal}
              alt="Pringles Original"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              animate={{
                rotate: [-6, -2, -6],
                y: [0, -12, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.12, rotate: 0, transition: { type: "spring", stiffness: 300 } }}
            />
          </motion.div>

          {/* Center content */}
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center flex-1 min-w-0">
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img src={pringlesLogo} alt="Pringles" className="h-48 md:h-72 w-auto mx-auto" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-display text-xl sm:text-2xl md:text-3xl text-pringles-yellow tracking-wide"
            >
              ABRA A DIVERSÃO
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-body text-sm md:text-lg text-primary-foreground/80 max-w-md"
            >
              Descubra os sabores icônicos de Pringles
            </motion.p>
          </div>

          {/* Right can */}
          <motion.div
            style={{ y: rightCanY }}
            className="relative w-32 sm:w-40 md:w-52 shrink-0"
            initial={{ opacity: 0, x: 120, rotate: 20, scale: 0.7 }}
            animate={{ opacity: 1, x: 0, rotate: 6, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 -inset-x-6 rounded-full blur-[50px]"
              style={{ background: "radial-gradient(circle, rgba(46,125,50,0.3) 0%, transparent 70%)" }}
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.img
              src={pringlesScream}
              alt="Pringles Sour Cream & Onion"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              animate={{
                rotate: [6, 2, 6],
                y: [0, -15, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.12, rotate: 0, transition: { type: "spring", stiffness: 300 } }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-primary-foreground/60 font-body text-xs uppercase tracking-widest">
          Role para baixo
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-pringles-yellow" />
        </motion.div>
      </motion.div>

      {/* Smooth bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-pringles-red z-[5] pointer-events-none" />
    </section>
  );
};

export default HeroSection;
