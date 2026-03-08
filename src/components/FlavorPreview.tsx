import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesScream from "@/assets/pringles-sour-cream.png";
import pringlesbbq from "@/assets/pringles-bbq.png";
import pringlesCheddar from "@/assets/pringles-cheddar.png";
import pringlesPizza from "@/assets/pringles-pizza.png";

const flavors = [
  { name: "Original", image: pringlesOriginal, color: "hsl(0, 100%, 44%)" },
  { name: "Sour Cream", image: pringlesScream, color: "hsl(120, 40%, 40%)" },
  { name: "BBQ", image: pringlesbbq, color: "hsl(20, 50%, 25%)" },
  { name: "Cheddar", image: pringlesCheddar, color: "hsl(30, 100%, 50%)" },
  { name: "Pizza", image: pringlesPizza, color: "hsl(15, 90%, 50%)" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 80, scale: 0.85, rotateX: 15 },
  show: { opacity: 1, y: 0, scale: 1, rotateX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const FlavorPreview = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #1A1A1A 0%, #222 50%, #1A1A1A 100%)"
    }}>
      {/* Parallax decorative elements */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-20"
      >
        <div className="w-full h-full bg-pringles-red" />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 80]) }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[150px] opacity-15"
      >
        <div className="w-full h-full bg-pringles-yellow" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-7xl text-primary-foreground mb-4"
          >
            NOSSOS <span className="text-pringles-yellow">SABORES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-primary-foreground/50 font-body text-lg max-w-xl mx-auto"
          >
            Cada lata é uma nova aventura de sabor
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-8"
        >
          {flavors.map((flavor) => (
            <motion.div
              key={flavor.name}
              variants={item}
              className="group relative cursor-pointer"
              onClick={() => navigate("/sabores")}
            >
              <div
                className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ background: `${flavor.color}44` }}
              />
              <div className="relative w-28 md:w-36 transition-transform duration-300 group-hover:-translate-y-4 group-hover:scale-105">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
                <p className="text-center font-display text-sm text-primary-foreground/80 mt-3 group-hover:text-pringles-yellow transition-colors">
                  {flavor.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/sabores")}
            className="bg-pringles-yellow-gradient text-pringles-dark font-display text-sm px-8 py-3 rounded-full cursor-pointer border-none uppercase tracking-wider"
          >
            Ver todos os sabores →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FlavorPreview;
