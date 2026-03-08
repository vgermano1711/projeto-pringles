import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { year: "1968", title: "O Nascimento", desc: "Fredric Baur inventa a forma icônica da Pringles e a lata cilíndrica revolucionária.", icon: "🥫" },
  { year: "1971", title: "Sour Cream & Onion", desc: "O primeiro sabor alternativo é lançado e se torna um fenômeno instantâneo.", icon: "🧅" },
  { year: "1975", title: "Expansão BBQ", desc: "Com o sabor BBQ, Pringles conquista os amantes de churrasco americano.", icon: "🔥" },
  { year: "1986", title: "Sabor Pizza", desc: "A ousadia de transformar pizza em batata conquista novos fãs ao redor do mundo.", icon: "🍕" },
  { year: "1991", title: "Presença Global", desc: "Pringles começa a ser vendida em mais de 40 países simultaneamente.", icon: "🌍" },
  { year: "2000", title: "100+ Sabores", desc: "A marca atinge a marca de mais de 100 sabores criados ao redor do mundo.", icon: "🎉" },
  { year: "2012", title: "Nova Era Kellogg's", desc: "Kellogg's adquire a marca e inicia uma nova fase de inovação e expansão.", icon: "⭐" },
  { year: "2024", title: "Inovação Contínua", desc: "Novos sabores, edições limitadas e colaborações surpreendem a cada temporada.", icon: "🚀" },
];

const HistoriaSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} id="historia" className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #1A1A1A 0%, #B8860B 20%, #FFD700 50%, #B8860B 80%, #1A1A1A 100%)"
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-rounded text-5xl md:text-7xl text-pringles-dark mb-4">
            NOSSA <span className="text-pringles-red">HISTÓRIA</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-pringles-red rounded-full mx-auto mb-4"
          />
          <p className="text-pringles-dark/60 text-lg max-w-2xl mx-auto font-body">
            Mais de 50 anos criando momentos inesquecíveis de sabor
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Static timeline line bg */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-pringles-dark/10 md:-translate-x-px" />
          {/* Animated fill line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-0.5 bg-pringles-red md:-translate-x-px origin-top"
          />

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: isLeft ? -80 : 80, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start gap-6 mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                <div className={`flex-1 ml-16 md:ml-0 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-6 rounded-2xl border border-pringles-dark/10 backdrop-blur-sm"
                    style={{ background: "rgba(0,0,0,0.1)" }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      className="font-rounded text-pringles-red text-sm"
                    >
                      {item.year}
                    </motion.span>
                    <h3 className="font-rounded text-xl text-pringles-dark mt-1 mb-2">{item.title}</h3>
                    <p className="text-pringles-dark/70 font-body text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.08, type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-pringles-red flex items-center justify-center text-base z-10 shadow-lg"
                >
                  {item.icon}
                </motion.div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HistoriaSection;
