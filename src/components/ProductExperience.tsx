import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Clock, Flame, Sparkles, Star } from "lucide-react";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesScream from "@/assets/pringles-sour-cream.png";
import pringlesbbq from "@/assets/pringles-bbq.png";
import pringlesCheddar from "@/assets/pringles-cheddar.png";
import pringlesPizza from "@/assets/pringles-pizza.png";

const products = [
  {
    name: "Original",
    tagline: "O Clássico Eterno",
    description: "Batata crocante com sal na medida perfeita. O sabor que definiu uma geração.",
    image: pringlesOriginal,
    accent: "from-red-600 to-red-800",
    accentColor: "#E3000B",
    featured: true,
    year: "1968",
    story: "Tudo começou com um desafio: criar a batata perfeita. O químico Fredric Baur inventou a forma hiperbólica parabólica que permitia empilhar cada batata perfeitamente dentro de uma lata cilíndrica.",
    ingredients: ["Flocos de batata", "Amido de trigo", "Óleo vegetal", "Sal marinho"],
    funFact: "A forma da Pringles é chamada de 'paraboloide hiperbólico' — a mesma forma usada em estruturas arquitetônicas famosas!",
  },
  {
    name: "Sour Cream & Onion",
    tagline: "Frescura em Cada Mordida",
    description: "Creme azedo com toque de cebola. Suave, cremosa e viciante.",
    image: pringlesScream,
    accent: "from-green-600 to-green-800",
    accentColor: "#2E7D32",
    featured: true,
    year: "1971",
    story: "Nasceu da tradição americana de combinar creme azedo com cebola em dips para festas. O equilíbrio entre acidez suave e cebola caramelizada tornou este um dos sabores mais vendidos do mundo.",
    ingredients: ["Creme azedo em pó", "Cebola desidratada", "Leitelho", "Salsa"],
    funFact: "Este sabor é o #1 em vendas em mais de 15 países ao redor do mundo!",
  },
  {
    name: "Cheddar Cheese",
    tagline: "Queijo Intenso",
    description: "Cheddar forte e marcante. Para quem não dispensa um bom queijo.",
    image: pringlesCheddar,
    accent: "from-orange-500 to-orange-700",
    accentColor: "#E65100",
    featured: true,
    year: "1979",
    story: "Combinação de cheddar sharp maturado por 12 meses com cheddar mild, criando camadas de sabor do suave ao intenso em cada mordida.",
    ingredients: ["Cheddar envelhecido", "Soro de leite", "Culturas lácteas", "Enzimas naturais"],
    funFact: "São necessários 2kg de cheddar fresco para produzir o tempero de uma única lata!",
  },
  {
    name: "BBQ",
    tagline: "Sabor de Churrasco",
    description: "Defumado e adocicado. O melhor do churrasco americano.",
    image: pringlesbbq,
    accent: "from-amber-700 to-amber-900",
    accentColor: "#795548",
    featured: false,
    year: "1975",
    story: "Inspirada nos churrascos do sul dos EUA, combina açúcar mascavo, páprica defumada, alho torrado e mostarda.",
    ingredients: ["Páprica defumada", "Açúcar mascavo", "Alho torrado", "Mostarda em pó"],
    funFact: "O tempero BBQ é aplicado duas vezes em cada batata para sabor extra intenso!",
  },
  {
    name: "Pizza",
    tagline: "Sabor Italiano",
    description: "Tomate, queijo e orégano. Uma fatia de pizza em forma de batata.",
    image: pringlesPizza,
    accent: "from-red-500 to-yellow-600",
    accentColor: "#D84315",
    featured: false,
    year: "1986",
    story: "A equipe viajou até Nápoles para estudar os sabores autênticos de uma verdadeira pizza napolitana.",
    ingredients: ["Tomate San Marzano", "Mozzarella em pó", "Orégano", "Manjericão"],
    funFact: "A equipe visitou mais de 30 pizzarias em Nápoles antes de finalizar a receita!",
  },
];

const ProductExperience = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const featured = products.filter((p) => p.featured);
  const others = products.filter((p) => !p.featured);

  return (
    <section id="produtos" className="py-24 scroll-mt-16" style={{
      background: "linear-gradient(180deg, #1A1A1A 0%, #222222 50%, #1A1A1A 100%)"
    }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-pringles-yellow mb-4 block">
            Nossos Produtos
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-primary-foreground mb-4">
            SABORES <span className="text-pringles-yellow">ICÔNICOS</span>
          </h2>
          <p className="font-body text-primary-foreground/50 text-lg max-w-lg mx-auto">
            Os favoritos que conquistaram o mundo inteiro
          </p>
        </motion.div>

        {/* Featured — large cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featured.map((product, index) => {
            const globalIndex = products.indexOf(product);
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                onClick={() => setSelectedProduct(globalIndex)}
                className="cursor-pointer group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-3xl overflow-hidden h-[520px] flex flex-col"
                  style={{ background: product.accentColor }}
                >
                  {/* Star badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-pringles-yellow rounded-full px-3 py-1">
                    <Star className="w-3 h-3 text-pringles-dark fill-pringles-dark" />
                    <span className="font-body text-xs font-semibold text-pringles-dark uppercase">Destaque</span>
                  </div>

                  {/* Large letter bg */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <span className="font-display text-[220px] leading-none select-none text-primary-foreground">
                      {product.name.charAt(0)}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="flex-1 flex items-center justify-center relative z-10 pt-12 px-6">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="h-64 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="relative z-10 p-6 bg-gradient-to-t from-black/40 to-transparent">
                    <p className="text-primary-foreground/60 font-body text-xs uppercase tracking-widest mb-1">
                      {product.tagline}
                    </p>
                    <h3 className="font-display text-3xl text-primary-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-primary-foreground/70 font-body text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Others — smaller cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h3 className="font-display text-2xl text-primary-foreground/60 mb-6">
            Mais Sabores
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {others.map((product, index) => {
            const globalIndex = products.indexOf(product);
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProduct(globalIndex)}
                className="cursor-pointer group"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative rounded-2xl overflow-hidden flex items-center gap-6 p-6 h-44"
                  style={{ background: product.accentColor }}
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="h-32 object-contain drop-shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-10">
                    <p className="text-primary-foreground/50 font-body text-xs uppercase tracking-widest mb-1">
                      {product.tagline}
                    </p>
                    <h3 className="font-display text-2xl text-primary-foreground mb-1">
                      {product.name}
                    </h3>
                    <p className="text-primary-foreground/70 font-body text-sm">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedProduct !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl"
              style={{ background: products[selectedProduct].accentColor }}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-primary-foreground cursor-pointer"
              >
                <X size={20} />
              </motion.button>

              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                  <motion.img
                    src={products[selectedProduct].image}
                    alt={products[selectedProduct].name}
                    className="h-56 object-contain drop-shadow-2xl"
                    initial={{ rotate: -10, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={16} className="text-primary-foreground/60" />
                      <span className="text-primary-foreground/60 font-body text-sm">
                        Desde {products[selectedProduct].year}
                      </span>
                    </div>
                    <h3 className="font-display text-4xl md:text-5xl text-primary-foreground mb-2">
                      {products[selectedProduct].name}
                    </h3>
                    <p className="font-display text-xl text-pringles-yellow">
                      {products[selectedProduct].tagline}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h4 className="font-display text-2xl text-primary-foreground mb-4 flex items-center gap-2">
                    <Flame size={22} className="text-pringles-yellow" />
                    A HISTÓRIA
                  </h4>
                  <p className="text-primary-foreground/80 font-body text-base leading-relaxed">
                    {products[selectedProduct].story}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <h4 className="font-display text-2xl text-primary-foreground mb-4 flex items-center gap-2">
                    <Sparkles size={22} className="text-pringles-yellow" />
                    INGREDIENTES ESPECIAIS
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {products[selectedProduct].ingredients.map((ing, i) => (
                      <motion.span
                        key={ing}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.45 + i * 0.08 }}
                        className="bg-black/20 backdrop-blur-sm text-primary-foreground font-body text-sm px-4 py-2 rounded-full border border-primary-foreground/20"
                      >
                        {ing}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10"
                >
                  <p className="font-display text-lg text-pringles-yellow mb-2">💡 CURIOSIDADE</p>
                  <p className="text-primary-foreground/80 font-body text-base">
                    {products[selectedProduct].funFact}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductExperience;
