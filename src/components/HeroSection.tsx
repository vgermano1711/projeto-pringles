import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesLogo from "@/assets/pringles-logo.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const canY = useTransform(scrollYProgress, [0, 1], [0, -60]);
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

      <motion.div style={{ opacity }} className="relative z-10 flex flex-col items-center gap-6 px-4 pt-20">
        {/* Logo */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={pringlesLogo} alt="Pringles" className="h-28 md:h-36 w-auto mx-auto" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-display text-2xl md:text-3xl text-pringles-yellow tracking-wide"
        >
          ABRA A DIVERSÃO
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-body text-base md:text-lg text-primary-foreground/80 max-w-md text-center"
        >
          Descubra os sabores icônicos de Pringles
        </motion.p>

        {/* Clean Can */}
        <motion.div
          style={{ y: canY }}
          className="relative w-52 md:w-64 mt-2"
        >
          {/* Subtle glow behind can */}
          <motion.div
            className="absolute inset-0 -inset-x-8 -inset-y-4 rounded-full blur-[60px]"
            style={{ background: "radial-gradient(circle, rgba(255,215,0,0.35) 0%, transparent 70%)" }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.img
            src={pringlesOriginal}
            alt="Pringles Original"
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          />
        </motion.div>
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
