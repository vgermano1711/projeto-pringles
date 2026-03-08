import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Sparkles } from "lucide-react";
import pringlesLogo from "@/assets/pringles-logo.png";

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
      {/* Animated rings */}
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
        {/* Logo watermark */}
        <motion.img
          src={pringlesLogo}
          alt=""
          className="w-20 h-20 mx-auto mb-6 opacity-80"
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        />

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
          className="text-primary-foreground/70 text-xl mb-12 max-w-lg mx-auto font-body"
        >
          Escolha seu sabor favorito e descubra por que Pringles é o snack mais viciante do mundo.
        </motion.p>

        {/* Visual CTA cards instead of simple buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-5 justify-center max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/produtos")}
            className="flex-1 bg-black/20 backdrop-blur-md rounded-2xl p-6 cursor-pointer border border-primary-foreground/15 hover:border-pringles-yellow/50 transition-colors group"
          >
            <Sparkles className="w-8 h-8 text-pringles-yellow mb-3 mx-auto group-hover:animate-bounce" />
            <h3 className="font-display text-xl text-primary-foreground mb-1">EXPERIÊNCIA PRINGLES</h3>
            <p className="font-body text-sm text-primary-foreground/50">
              Conheça cada sabor, história e curiosidade
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/comprar")}
            className="flex-1 bg-pringles-yellow rounded-2xl p-6 cursor-pointer border-none shadow-xl group"
          >
            <ShoppingBag className="w-8 h-8 text-pringles-dark mb-3 mx-auto group-hover:animate-bounce" />
            <h3 className="font-display text-xl text-pringles-dark mb-1">ONDE COMPRAR</h3>
            <p className="font-body text-sm text-pringles-dark/60">
              Encontre Pringles perto de você
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeCTA;
