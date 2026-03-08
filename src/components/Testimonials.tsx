import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas M.",
    text: "Pringles Original é simplesmente perfeita. Abro a lata e não consigo parar! A textura crocante é incomparável.",
    rating: 5,
    flavor: "Original",
    avatar: "🧑",
  },
  {
    name: "Ana Clara",
    text: "Sour Cream & Onion é meu vício! O equilíbrio entre cremosidade e cebola é absurdo. Melhor snack que existe.",
    rating: 5,
    flavor: "Sour Cream",
    avatar: "👩",
  },
  {
    name: "Rafael S.",
    text: "A BBQ tem aquele gostinho defumado que me faz sentir num churrasco americano. Já virou tradição nos jogos!",
    rating: 5,
    flavor: "BBQ",
    avatar: "👨",
  },
  {
    name: "Juliana P.",
    text: "Cheddar Cheese é um sonho! O sabor é forte, intenso e cada batata tem a quantidade perfeita de tempero.",
    rating: 4,
    flavor: "Cheddar",
    avatar: "👩‍🦰",
  },
  {
    name: "Pedro H.",
    text: "Pizza Pringles me surpreendeu demais! Saborosa, diferente e super criativa. Sempre tenho em casa.",
    rating: 5,
    flavor: "Pizza",
    avatar: "🧔",
  },
  {
    name: "Mariana F.",
    text: "Impossível escolher só um sabor! Toda semana compro uma diferente. Pringles é a melhor escolha sempre.",
    rating: 5,
    flavor: "Vários",
    avatar: "👧",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #1A1A1A 0%, #B8860B 25%, #FFD700 50%, #B8860B 75%, #1A1A1A 100%)"
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-pringles-dark mb-4">
            O QUE <span className="text-pringles-red">DIZEM</span>
          </h2>
          <p className="text-pringles-dark/60 font-body text-lg max-w-xl mx-auto">
            Milhões de fãs ao redor do mundo não podem estar errados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border border-pringles-dark/10 backdrop-blur-sm"
              style={{ background: "rgba(0,0,0,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{t.avatar}</span>
                <div>
                  <h4 className="font-display text-base text-pringles-dark">{t.name}</h4>
                  <span className="font-body text-xs text-pringles-dark/50 uppercase tracking-wider">
                    Fã de {t.flavor}
                  </span>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < t.rating ? "fill-pringles-red text-pringles-red" : "text-pringles-dark/20"}
                  />
                ))}
              </div>
              <p className="text-pringles-dark/70 font-body text-sm leading-relaxed">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
