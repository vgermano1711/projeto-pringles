import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const HomeCTA = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #E3000B 0%, #FF4500 40%, #FFD700 100%)"
    }}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary-foreground/8"
          style={{
            width: `${250 + i * 180}px`,
            height: `${250 + i * 180}px`,
            left: "50%", top: "50%", x: "-50%", y: "-50%",
          }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, 360] }}
          transition={{ duration: 25 + i * 8, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <motion.div style={{ scale, opacity }} className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          style={{ y: textY }}
          className="font-display text-5xl md:text-8xl text-primary-foreground mb-6 leading-tight"
        >
          PRONTO PARA
          <br />
          <span className="text-pringles-yellow">ABRIR?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-primary-foreground/70 text-xl mb-10 max-w-lg mx-auto font-body"
        >
          Escolha seu sabor favorito e descubra por que Pringles é o snack mais viciante do mundo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/sabores")}
            className="bg-pringles-yellow-gradient text-pringles-dark font-display text-xl px-10 py-5 rounded-full shadow-2xl cursor-pointer border-none"
          >
            EXPLORAR SABORES 🔥
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/comprar")}
            className="border-2 border-primary-foreground/30 text-primary-foreground font-display text-xl px-10 py-5 rounded-full backdrop-blur-sm cursor-pointer bg-transparent hover:border-pringles-yellow hover:text-pringles-yellow transition-colors"
          >
            ONDE COMPRAR 🛒
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeCTA;
