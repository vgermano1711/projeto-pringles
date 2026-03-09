import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Sparkles, PartyPopper, Rocket } from "lucide-react";
import pringlesOriginal from "@/assets/pringles-40g-original.png";
import pringlesbbq from "@/assets/pringles-40g-bbq.png";
import pringlessour from "@/assets/pringles-40g-sour-cream.png";

const floatingChips = [
  { src: pringlesOriginal, delay: 0, x: "10%", y: "15%", rotate: -15, size: "w-16 md:w-24" },
  { src: pringlesbbq, delay: 0.3, x: "80%", y: "20%", rotate: 20, size: "w-14 md:w-20" },
  { src: pringlessour, delay: 0.6, x: "85%", y: "70%", rotate: -10, size: "w-16 md:w-24" },
  { src: pringlesOriginal, delay: 0.9, x: "5%", y: "75%", rotate: 25, size: "w-14 md:w-20" },
];

const emojis = ["🎉", "🔥", "😋", "🤩", "💥", "🎊"];

const HomeCTA = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-24 md:py-36 relative overflow-hidden" style={{
      background: "radial-gradient(ellipse at 50% 30%, hsl(0 100% 44% / 0.25) 0%, hsl(var(--pringles-dark)) 70%)"
    }}>
      {/* Confetti-like floating emojis */}
      {emojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl md:text-4xl select-none pointer-events-none"
          style={{
            left: `${10 + (i * 15)}%`,
            top: `${15 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, i % 2 === 0 ? 20 : -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* Floating product cans */}
      {floatingChips.map((chip, i) => (
        <motion.img
          key={i}
          src={chip.src}
          alt=""
          className={`absolute ${chip.size} opacity-40 pointer-events-none drop-shadow-2xl`}
          style={{ left: chip.x, top: chip.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [chip.rotate, chip.rotate + 10, chip.rotate],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: chip.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8 md:h-12">
          <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,0 L0,0 Z" fill="hsl(var(--pringles-dark))" />
        </svg>
      </div>

      <motion.div style={{ scale, opacity }} className="relative z-10 container mx-auto px-4 text-center">
        {/* Fun badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="inline-flex items-center gap-2 bg-pringles-yellow text-pringles-dark font-display text-xs md:text-sm px-5 py-2 rounded-full mb-8 shadow-lg"
        >
          <PartyPopper className="w-4 h-4" />
          HORA DO LANCHE!
          <PartyPopper className="w-4 h-4" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="font-display text-5xl md:text-9xl text-primary-foreground mb-2 leading-none"
        >
          PRONTO PRA
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, delay: 0.15 }}
          className="relative inline-block mb-8"
        >
          <span className="font-display text-6xl md:text-[10rem] leading-none text-pringles-yellow" style={{
            textShadow: "0 0 40px hsl(48 100% 50% / 0.4), 0 4px 0 hsl(30 100% 40%)"
          }}>
            POP?!
          </span>
          <motion.span
            className="absolute -top-4 -right-6 text-3xl md:text-5xl"
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💥
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-primary-foreground/60 text-lg md:text-xl mb-14 max-w-md mx-auto font-body"
        >
          Escolha seu sabor e entre na diversão! 🎉
        </motion.p>

        {/* Fun CTA cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
          className="flex flex-col sm:flex-row gap-6 justify-center max-w-xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.06, rotate: -2 }}
            whileTap={{ scale: 0.95, rotate: 0 }}
            onClick={() => navigate("/produtos")}
            className="flex-1 bg-primary/20 backdrop-blur-sm rounded-3xl p-7 cursor-pointer border-2 border-dashed border-primary/40 hover:border-pringles-yellow transition-colors group"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket className="w-10 h-10 text-pringles-yellow mb-3 mx-auto" />
            </motion.div>
            <h3 className="font-display text-xl text-primary-foreground mb-1">EXPLORAR SABORES</h3>
            <p className="font-body text-sm text-primary-foreground/50">
              Cada lata, uma aventura! 🚀
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.06, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: 0 }}
            onClick={() => navigate("/comprar")}
            className="flex-1 bg-pringles-yellow rounded-3xl p-7 cursor-pointer shadow-2xl group relative overflow-hidden"
          >
            {/* Sparkle overlay */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: "radial-gradient(circle at 30% 50%, hsl(var(--primary-foreground)) 0%, transparent 50%)"
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <ShoppingBag className="w-10 h-10 text-pringles-dark mb-3 mx-auto group-hover:animate-bounce relative z-10" />
            <h3 className="font-display text-xl text-pringles-dark mb-1 relative z-10">COMPRAR AGORA</h3>
            <p className="font-body text-sm text-pringles-dark/60 relative z-10">
              Corre que acaba! 😋
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8 md:h-12">
          <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,0 L0,0 Z" fill="#111111" />
        </svg>
      </div>
    </section>
  );
};

export default HomeCTA;
