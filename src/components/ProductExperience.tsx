import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Clock, Flame, Sparkles } from "lucide-react";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesScream from "@/assets/pringles-sour-cream.png";
import pringlesbbq from "@/assets/pringles-bbq.png";
import pringlesCheddar from "@/assets/pringles-cheddar.png";
import pringlesPizza from "@/assets/pringles-pizza.png";
import pringlesChips from "@/assets/pringles-chips.png";

const products = [
  {
    name: "Original",
    tagline: "O Clássico Eterno",
    description: "Batata crocante com sal na medida perfeita. O sabor que definiu uma geração.",
    image: pringlesOriginal,
    bgColor: "linear-gradient(135deg, hsl(0, 100%, 50%), hsl(350, 100%, 35%))",
    year: "1968",
    story: "Tudo começou com um desafio: criar a batata perfeita. O químico Fredric Baur inventou a forma hiperbólica parabólica que permitia empilhar cada batata perfeitamente dentro de uma lata cilíndrica. A receita original usa flocos de batata desidratada, amido de trigo e farinha de milho, prensados em moldes e fritos até atingir o crocante ideal. Temperada apenas com sal marinho, a Original é a prova de que a simplicidade é a forma mais sofisticada de genialidade.",
    ingredients: ["Flocos de batata", "Amido de trigo", "Óleo vegetal", "Sal marinho"],
    funFact: "A forma da Pringles é chamada de 'paraboloide hiperbólico' — a mesma forma usada em estruturas arquitetônicas famosas!",
  },
  {
    name: "Sour Cream & Onion",
    tagline: "Frescura em Cada Mordida",
    description: "Creme azedo com toque de cebola. Suave, cremosa e viciante.",
    image: pringlesScream,
    bgColor: "linear-gradient(135deg, hsl(140, 70%, 40%), hsl(160, 80%, 28%))",
    year: "1971",
    story: "Lançada poucos anos após a Original, a Sour Cream & Onion nasceu da tradição americana de combinar creme azedo com cebola em dips para festas. Os engenheiros de sabor da Pringles conseguiram capturar essa combinação clássica em pó, aplicando-a uniformemente sobre cada batata. O segredo está na proporção exata entre a acidez suave do creme e o toque adocicado da cebola caramelizada, criando um equilíbrio perfeito que se tornou um dos sabores mais vendidos do mundo.",
    ingredients: ["Creme azedo em pó", "Cebola desidratada", "Leitelho", "Salsa"],
    funFact: "Este sabor é o #1 em vendas em mais de 15 países ao redor do mundo!",
  },
  {
    name: "BBQ",
    tagline: "Sabor de Churrasco",
    description: "Defumado e adocicado. O melhor do churrasco americano na palma da mão.",
    image: pringlesbbq,
    bgColor: "linear-gradient(135deg, hsl(25, 90%, 40%), hsl(10, 70%, 25%))",
    year: "1975",
    story: "Inspirada nos churrascos do sul dos Estados Unidos, a BBQ foi criada para capturar o sabor da carne defumada lentamente sobre madeira de carvalho. O tempero combina açúcar mascavo, páprica defumada, alho torrado e um toque de mostarda — os mesmos ingredientes de um autêntico molho barbecue americano. Cada batata passa por um processo de aplicação dupla de tempero para garantir intensidade máxima de sabor.",
    ingredients: ["Páprica defumada", "Açúcar mascavo", "Alho torrado", "Mostarda em pó"],
    funFact: "O tempero BBQ é aplicado duas vezes em cada batata para garantir um sabor extra intenso!",
  },
  {
    name: "Cheddar Cheese",
    tagline: "Queijo Intenso",
    description: "Cheddar forte e marcante. Para quem não dispensa um bom queijo.",
    image: pringlesCheddar,
    bgColor: "linear-gradient(135deg, hsl(40, 100%, 50%), hsl(25, 100%, 40%))",
    year: "1979",
    story: "Para criar o sabor perfeito de queijo, a equipe Pringles passou meses testando diferentes tipos de cheddar envelhecido. O resultado é uma combinação de cheddar sharp (maturado por mais de 12 meses) com cheddar mild, criando camadas de sabor que vão do suave ao intenso. O queijo é desidratado e moído em partículas microscópicas para aderir perfeitamente à superfície curva de cada batata, garantindo que cada mordida tenha a mesma explosão de sabor.",
    ingredients: ["Cheddar envelhecido", "Soro de leite", "Culturas lácteas", "Enzimas naturais"],
    funFact: "São necessários 2kg de cheddar fresco para produzir o tempero de uma única lata!",
  },
  {
    name: "Pizza",
    tagline: "Sabor Italiano",
    description: "Tomate, queijo e orégano. Uma fatia de pizza em forma de batata.",
    image: pringlesPizza,
    bgColor: "hsl(15, 80%, 45%)",
    year: "1986",
    story: "A Pizza Pringles nasceu de um experimento ousado: transformar os sabores de uma pizza margherita em um snack portátil. A equipe viajou até Nápoles, Itália, para estudar os sabores autênticos de uma verdadeira pizza napolitana. O tempero combina tomate San Marzano desidratado, mozzarella em pó, orégano fresco seco e um toque de manjericão. O resultado é uma explosão de sabor italiano que transporta você direto para uma pizzaria em Nápoles.",
    ingredients: ["Tomate San Marzano", "Mozzarella em pó", "Orégano", "Manjericão"],
    funFact: "A equipe de desenvolvimento visitou mais de 30 pizzarias em Nápoles antes de finalizar a receita!",
  },
];

const floatingChips = [
  { x: -30, y: -20, rotate: -25, scale: 0.6, delay: 0 },
  { x: 40, y: -35, rotate: 35, scale: 0.5, delay: 0.2 },
  { x: -50, y: 30, rotate: 50, scale: 0.55, delay: 0.4 },
  { x: 55, y: 25, rotate: -40, scale: 0.5, delay: 0.1 },
  { x: 0, y: -50, rotate: 15, scale: 0.45, delay: 0.3 },
];

const ProductExperience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-pringles-dark">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-primary-foreground mb-4">
              EXPERIÊNCIA <span className="text-pringles-yellow">ÚNICA</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollLeft}
              className="w-9 h-9 rounded-full bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/30 hover:text-primary-foreground/60 transition-all cursor-pointer"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollRight}
              className="w-9 h-9 rounded-full bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/30 hover:text-primary-foreground/60 transition-all cursor-pointer"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-8 pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[85vw] md:w-[500px] snap-center cursor-pointer"
            onClick={() => setSelectedProduct(index)}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden h-[500px] p-8 flex flex-col justify-between group"
              style={{ background: product.bgColor }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="font-display text-[200px] leading-none select-none">
                  {product.name.charAt(0)}
                </span>
              </div>

              <div className="relative z-10">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  className="block h-1 bg-primary-foreground/50 mb-4"
                />
                <p className="text-primary-foreground/70 font-body text-sm uppercase tracking-widest mb-1">
                  {product.tagline}
                </p>
                <h3 className="font-display text-4xl text-primary-foreground">
                  {product.name}
                </h3>
              </div>

              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring" }}
                className="relative z-10 flex-1 flex items-center justify-center"
              >
                {floatingChips.map((chip, i) => (
                  <motion.img
                    key={i}
                    src={pringlesChips}
                    alt=""
                    className="absolute w-10 h-10 object-contain drop-shadow-md"
                    style={{
                      filter: `hue-rotate(${(index * 40) + (i * 20)}deg)`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                      opacity: 0.85,
                      scale: chip.scale,
                      x: chip.x,
                      y: chip.y,
                      rotate: chip.rotate,
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + chip.delay, type: "spring", stiffness: 100 }}
                    animate={{
                      y: [chip.y - 4, chip.y + 4, chip.y - 4],
                      rotate: [chip.rotate - 5, chip.rotate + 5, chip.rotate - 5],
                    }}
                  />
                ))}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 object-contain drop-shadow-2xl"
                />
              </motion.div>

              <div className="relative z-10 flex items-center justify-between">
                <p className="text-primary-foreground/80 font-body text-base flex-1">
                  {product.description}
                </p>
                <motion.span
                  className="ml-3 text-primary-foreground/50 font-body text-sm whitespace-nowrap group-hover:text-pringles-yellow transition-colors"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  Clique para saber mais
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        ))}
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
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl"
              style={{ background: products[selectedProduct].bgColor }}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-primary-foreground cursor-pointer"
              >
                <X size={20} />
              </motion.button>

              <div className="p-8 md:p-12">
                {/* Header */}
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
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-2 mb-2"
                    >
                      <Clock size={16} className="text-primary-foreground/60" />
                      <span className="text-primary-foreground/60 font-body text-sm">
                        Desde {products[selectedProduct].year}
                      </span>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      className="font-display text-4xl md:text-5xl text-primary-foreground mb-2"
                    >
                      {products[selectedProduct].name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="font-display text-xl text-pringles-yellow"
                    >
                      {products[selectedProduct].tagline}
                    </motion.p>
                  </div>
                </div>

                {/* Story */}
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

                {/* Ingredients */}
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

                {/* Fun Fact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10"
                >
                  <p className="font-display text-lg text-pringles-yellow mb-2">
                    💡 CURIOSIDADE
                  </p>
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