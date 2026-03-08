import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden" style={{
      background: "linear-gradient(135deg, #E3000B 0%, #FF4500 30%, #FFD700 60%, #FF4500 80%, #E3000B 100%)"
    }}>
      {/* Animated background circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary-foreground/10"
          style={{
            width: `${200 + i * 150}px`,
            height: `${200 + i * 150}px`,
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-8xl text-primary-foreground mb-6 leading-tight">
            PRONTO PARA
            <br />
            <span className="text-pringles-yellow">ABRIR?</span>
          </h2>
          <p className="text-primary-foreground/70 text-xl mb-10 max-w-lg mx-auto font-body">
            Escolha seu sabor favorito e descubra por que Pringles é o snack mais viciante do mundo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pringles-yellow-gradient text-pringles-dark font-display text-xl px-10 py-5 rounded-full shadow-2xl cursor-pointer"
            >
              EXPLORAR SABORES 🔥
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-foreground/30 text-primary-foreground font-display text-xl px-10 py-5 rounded-full backdrop-blur-sm cursor-pointer hover:border-pringles-yellow hover:text-pringles-yellow transition-colors"
            >
              ONDE COMPRAR 🛒
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
