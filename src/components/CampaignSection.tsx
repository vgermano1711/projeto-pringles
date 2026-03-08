import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import campaignImg from "@/assets/pringles-hand.jpg";
import pringlesLogo from "@/assets/pringles-logo.png";

const CampaignSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-pringles-red">
      <div className="container mx-auto px-4 py-20 md:py-0 relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center min-h-[600px] md:min-h-[700px]">
          {/* Left — Text */}
          <motion.div style={{ y: textY, opacity }} className="relative z-10 py-8 md:py-16 md:pr-12">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-body text-sm uppercase tracking-[0.3em] text-pringles-yellow mb-6 block"
            >
              A HISTÓRIA DA PRINGLES
            </motion.span>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h-1 bg-pringles-yellow rounded-full mb-8"
            />

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[0.95] mb-8"
            >
              IDEIAS
              <br />
              <span className="text-pringles-yellow">GENIAIS</span>
              <br />
              IRRESISTÍVEIS.
              <br />
              <span className="text-primary-foreground/60 text-2xl md:text-3xl lg:text-4xl">
                ESTÁ NO NOSSO
              </span>
              <br />
              <span className="text-pringles-yellow">DNA.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-body text-primary-foreground/60 text-base md:text-lg max-w-md leading-relaxed"
            >
              Desde 1968 fazendo o mundo sorrir com snacks que desafiam a lógica — 
              e conquistam paladares. Porque ser diferente é o nosso sabor favorito.
            </motion.p>

            {/* Decorative dots */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.15 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-10 -left-10 w-40 h-40"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--pringles-yellow)) 1.5px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Background glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[80%] h-[80%] rounded-full blur-[80px]"
              style={{ background: "rgba(255,215,0,0.3)" }}
            />

            <motion.div
              style={{ scale: imgScale }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={campaignImg}
                alt="Campanha Pringles — pessoa animada segurando uma lata"
                className="w-full max-w-md md:max-w-lg object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-pringles-red/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              className="absolute -bottom-2 -left-2 md:bottom-8 md:-left-8 z-20 bg-pringles-yellow rounded-2xl px-5 py-3 shadow-xl"
            >
              <span className="font-display text-pringles-dark text-lg md:text-xl">
                DESDE 1968 🥫
              </span>
            </motion.div>

            {/* Fun sticker */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, type: "spring", stiffness: 300 }}
              animate={{ rotate: [0, 5, -5, 0] }}
              className="absolute top-4 -right-2 md:top-8 md:-right-4 z-20 text-4xl md:text-5xl"
            >
              🔥
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Smooth top fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-pringles-red via-pringles-red/80 to-transparent z-[2] pointer-events-none" />

      {/* Smooth bottom fade into dark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent z-[2] pointer-events-none" />
    </section>
  );
};

export default CampaignSection;
