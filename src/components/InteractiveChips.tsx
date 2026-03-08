import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import pringlesChips from "@/assets/pringles-chips.png";

const FloatingChip = ({ index }: { index: number }) => {
  const baseX = (index % 5) * 20 + Math.random() * 10;
  const baseY = Math.floor(index / 5) * 25 + Math.random() * 15;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${baseX}%`,
        top: `${baseY}%`,
        width: `${40 + Math.random() * 30}px`,
      }}
      animate={{
        y: [0, -15 - Math.random() * 10, 0],
        rotate: [0, (Math.random() - 0.5) * 20, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: index * 0.2,
        ease: "easeInOut",
      }}
    >
      <img
        src={pringlesChips}
        alt=""
        className="w-full h-auto object-contain opacity-80"
        style={{
          transform: `rotate(${Math.random() * 360}deg)`,
          filter: `brightness(${0.9 + Math.random() * 0.3})`,
        }}
      />
    </motion.div>
  );
};

const InteractiveChips = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.02);
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.02);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section className="relative py-32 overflow-hidden" style={{
      background: "linear-gradient(180deg, #B8860B 0%, #FFD700 30%, #FFC107 50%, #FFD700 70%, #B8860B 100%)"
    }}>
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-0"
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <FloatingChip key={i} index={i} />
        ))}
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-7xl text-pringles-dark mb-6">
            IMPOSSÍVEL <br />
            <span className="text-pringles-red">COMER SÓ UMA</span>
          </h2>
          <p className="text-pringles-dark/70 text-xl max-w-xl mx-auto font-body">
            Mova o mouse e sinta a energia das batatas mais famosas do mundo
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveChips;
