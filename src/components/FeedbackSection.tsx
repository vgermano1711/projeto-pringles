import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas M.",
    location: "São Paulo, SP",
    text: "Pringles Original é viciante! Impossível comer só uma. A textura crocante é incomparável.",
    rating: 5,
    flavor: "Original",
    avatar: "🧑‍💻",
  },
  {
    name: "Camila R.",
    location: "Rio de Janeiro, RJ",
    text: "Sour Cream & Onion é o melhor snack pra assistir séries. Minha família inteira ama!",
    rating: 5,
    flavor: "Sour Cream & Onion",
    avatar: "👩‍🎨",
  },
  {
    name: "Pedro H.",
    location: "Belo Horizonte, MG",
    text: "A Cheddar tem um sabor intenso que nenhuma outra marca consegue igualar. Top demais!",
    rating: 5,
    flavor: "Cheddar Cheese",
    avatar: "🧑‍🍳",
  },
  {
    name: "Ana B.",
    location: "Curitiba, PR",
    text: "A versão 40g é perfeita pro lanche da tarde. Prática, gostosa e sempre fresquinha.",
    rating: 4,
    flavor: "BBQ",
    avatar: "👩‍💼",
  },
  {
    name: "Rafael S.",
    location: "Porto Alegre, RS",
    text: "Pizza Pringles é surreal. Parece que estou comendo uma fatia de pizza de verdade!",
    rating: 5,
    flavor: "Pizza",
    avatar: "🎮",
  },
  {
    name: "Juliana F.",
    location: "Salvador, BA",
    text: "Compro toda semana! O formato único faz toda a diferença. Sempre crocante até o fim.",
    rating: 5,
    flavor: "Original",
    avatar: "🎶",
  },
];

const FeedbackSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #1A1A1A 0%, #222 50%, #1A1A1A 100%)"
    }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-pringles-yellow mb-3 block">
            O que dizem sobre nós
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-4">
            FEEDBACK DO <span className="text-pringles-yellow">PÚBLICO</span>
          </h2>
          <p className="font-body text-primary-foreground/40 text-base max-w-lg mx-auto">
            Milhares de fãs ao redor do Brasil compartilham sua paixão por Pringles
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 h-full flex flex-col gap-4 transition-colors"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < t.rating ? "text-pringles-yellow fill-pringles-yellow" : "text-primary-foreground/20"}`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-sm text-primary-foreground/70 leading-relaxed flex-1">
                  "{t.text}"
                </p>

                {/* Author + flavor */}
                <div className="flex items-center justify-between pt-2 border-t border-primary-foreground/5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{t.avatar}</span>
                    <div>
                      <p className="font-body text-sm text-primary-foreground font-semibold">{t.name}</p>
                      <p className="font-body text-xs text-primary-foreground/30">{t.location}</p>
                    </div>
                  </div>
                  <span className="font-body text-xs text-pringles-yellow/60 bg-pringles-yellow/10 px-2 py-1 rounded-full">
                    {t.flavor}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
