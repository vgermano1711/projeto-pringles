import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart } from "lucide-react";

const stores = [
  { name: "Amazon", url: "#", icon: "🛒", color: "hsl(30, 100%, 50%)", desc: "Entrega rápida para todo o Brasil" },
  { name: "Mercado Livre", url: "#", icon: "🤝", color: "hsl(48, 100%, 50%)", desc: "Melhores preços e frete grátis" },
  { name: "iFood", url: "#", icon: "🍔", color: "hsl(0, 100%, 44%)", desc: "Receba em minutos na sua porta" },
  { name: "Rappi", url: "#", icon: "📦", color: "hsl(15, 90%, 50%)", desc: "Entrega ultra-rápida do mercado" },
  { name: "Carrefour", url: "#", icon: "🏪", color: "hsl(210, 80%, 45%)", desc: "Compre online no supermercado" },
  { name: "Pão de Açúcar", url: "#", icon: "🛍️", color: "hsl(120, 40%, 40%)", desc: "Retire na loja ou receba em casa" },
];

const ComprarSection = () => {
  return (
    <section id="comprar" className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #E3000B 0%, #FF4500 30%, #FFD700 60%, #FF4500 80%, #E3000B 100%)"
    }}>
      {/* Animated bg circles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary-foreground/10"
          style={{
            width: `${200 + i * 150}px`,
            height: `${200 + i * 150}px`,
            left: "50%", top: "50%", x: "-50%", y: "-50%",
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-8xl text-primary-foreground mb-4">
            ONDE <span className="text-pringles-yellow">COMPRAR</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto font-body">
            Escolha sua loja favorita e garanta suas Pringles agora mesmo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stores.map((store, index) => (
            <motion.a
              key={store.name}
              href={store.url}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative rounded-2xl p-6 backdrop-blur-sm border border-primary-foreground/15 cursor-pointer block"
              style={{ background: "rgba(0,0,0,0.2)" }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `radial-gradient(circle at center, ${store.color}33, transparent 70%)` }}
              />
              <div className="relative z-10">
                <span className="text-4xl mb-3 block">{store.icon}</span>
                <h3 className="font-display text-xl text-primary-foreground mb-1">{store.name}</h3>
                <p className="text-primary-foreground/60 font-body text-sm mb-4">{store.desc}</p>
                <div className="flex items-center gap-2 text-pringles-yellow font-body text-sm font-semibold group-hover:gap-3 transition-all">
                  <ShoppingCart size={16} />
                  <span>Comprar agora</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pringles-yellow-gradient text-pringles-dark font-display text-xl px-10 py-5 rounded-full shadow-2xl cursor-pointer"
          >
            EXPLORAR TODOS OS SABORES 🔥
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprarSection;
