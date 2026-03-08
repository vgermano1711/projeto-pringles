import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ShoppingCart } from "lucide-react";

const stores = [
  { name: "Mercado Livre", url: "https://lista.mercadolivre.com.br/pringles", icon: "🤝", color: "hsl(48, 100%, 50%)", desc: "Melhores preços e frete grátis" },
  { name: "iFood", url: "https://www.ifood.com.br/busca?q=pringles", icon: "🍔", color: "hsl(0, 100%, 44%)", desc: "Receba em minutos na sua porta" },
  { name: "Rappi", url: "https://www.rappi.com.br/search?query=pringles", icon: "📦", color: "hsl(15, 90%, 50%)", desc: "Entrega ultra-rápida do mercado" },
  { name: "Pão de Açúcar", url: "https://www.paodeacucar.com/busca?terms=pringles", icon: "🛍️", color: "hsl(120, 40%, 40%)", desc: "Retire na loja ou receba em casa" },
  { name: "Shopee", url: "https://shopee.com.br/search?keyword=pringles", icon: "🧡", color: "hsl(20, 100%, 55%)", desc: "Ofertas e cupons exclusivos" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const ComprarSection = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <section ref={ref} id="comprar" className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #E3000B 0%, #FF4500 30%, #FFD700 60%, #FF4500 80%, #E3000B 100%)"
    }}>
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary-foreground/10"
          style={{
            width: `${200 + i * 150}px`, height: `${200 + i * 150}px`,
            left: "50%", top: "50%", x: "-50%", y: "-50%",
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <motion.div style={{ scale: bgScale }} className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-8xl text-primary-foreground mb-4">
            ONDE <span className="text-pringles-yellow">COMPRAR</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-pringles-yellow rounded-full mx-auto mb-4"
          />
          <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto font-body">
            Escolha sua loja favorita e garanta suas Pringles agora mesmo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stores.map((store, index) => (
            <motion.a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-30px" }}
              className="group relative rounded-2xl p-6 backdrop-blur-sm border border-primary-foreground/15 cursor-pointer block transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.03]"
              style={{ background: "rgba(0,0,0,0.2)" }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at center, ${store.color}33, transparent 70%)` }}
              />
              <div className="relative z-10">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 300 }}
                  className="text-4xl mb-3 block"
                >
                  {store.icon}
                </motion.span>
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

      </motion.div>
    </section>
  );
};

export default ComprarSection;
