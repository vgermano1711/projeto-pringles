import { motion } from "framer-motion";

const brandFeatures = [
  {
    icon: "🥫",
    title: "A Lata Icônica",
    description: "Desde 1968, a lata cilíndrica Pringles é reconhecida no mundo inteiro. Um design pensado para manter cada batata intacta e crocante.",
  },
  {
    icon: "📐",
    title: "Formato Perfeito",
    description: "Cada batata tem o formato de paraboloide hiperbólico — desenhada matematicamente para encaixar na sua boca e na pilha.",
  },
  {
    icon: "🧑‍🍳",
    title: "Sabores Ousados",
    description: "Com mais de 100 sabores já criados ao redor do mundo, Pringles nunca para de inovar e surpreender paladares.",
  },
  {
    icon: "🌍",
    title: "Presença Global",
    description: "Vendida em mais de 140 países, Pringles é um snack global que une pessoas e celebrações ao redor do planeta.",
  },
];

const BrandStory = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #B8860B 0%, #FFD700 25%, #FFA500 50%, #FFD700 75%, #B8860B 100%)"
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl text-pringles-dark mb-4">
            O QUE NOS TORNA{" "}
            <span className="text-pringles-red">ÚNICOS</span>
          </h2>
          <p className="text-pringles-dark/60 text-lg max-w-2xl mx-auto font-body">
            Mais do que um snack — uma experiência que virou cultura pop
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {brandFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl border border-primary-foreground/10 backdrop-blur-sm cursor-default"
              style={{
                background: "hsl(0 0% 100% / 0.03)",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-5xl mb-4 inline-block"
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-display text-2xl text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/60 font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
