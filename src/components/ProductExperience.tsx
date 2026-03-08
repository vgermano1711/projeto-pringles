import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    bgColor: "hsl(0, 100%, 44%)",
  },
  {
    name: "Sour Cream & Onion",
    tagline: "Frescura em Cada Mordida",
    description: "Creme azedo com toque de cebola. Suave, cremosa e viciante.",
    image: pringlesScream,
    bgColor: "hsl(120, 40%, 35%)",
  },
  {
    name: "BBQ",
    tagline: "Sabor de Churrasco",
    description: "Defumado e adocicado. O melhor do churrasco americano na palma da mão.",
    image: pringlesbbq,
    bgColor: "hsl(20, 50%, 20%)",
  },
  {
    name: "Cheddar Cheese",
    tagline: "Queijo Intenso",
    description: "Cheddar forte e marcante. Para quem não dispensa um bom queijo.",
    image: pringlesCheddar,
    bgColor: "hsl(30, 100%, 45%)",
  },
  {
    name: "Pizza",
    tagline: "Sabor Italiano",
    description: "Tomate, queijo e orégano. Uma fatia de pizza em forma de batata.",
    image: pringlesPizza,
    bgColor: "hsl(15, 80%, 45%)",
  },
];

// Floating chip positions for decoration
const floatingChips = [
  { x: -30, y: -20, rotate: -25, scale: 0.6, delay: 0 },
  { x: 40, y: -35, rotate: 35, scale: 0.5, delay: 0.2 },
  { x: -50, y: 30, rotate: 50, scale: 0.55, delay: 0.4 },
  { x: 55, y: 25, rotate: -40, scale: 0.5, delay: 0.1 },
  { x: 0, y: -50, rotate: 15, scale: 0.45, delay: 0.3 },
];

const ProductExperience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
            <div className="flex items-center gap-3 text-primary-foreground/50 text-lg font-body">
              <span>Deslize para explorar cada sabor</span>
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:border-pringles-yellow hover:text-pringles-yellow transition-colors cursor-pointer"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:border-pringles-yellow hover:text-pringles-yellow transition-colors cursor-pointer"
            >
              <ChevronRight size={24} />
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
            className="flex-shrink-0 w-[85vw] md:w-[500px] snap-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden h-[500px] p-8 flex flex-col justify-between"
              style={{ background: product.bgColor }}
            >
              {/* Large flavor name background */}
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

              {/* Can with floating chips */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring" }}
                className="relative z-10 flex-1 flex items-center justify-center"
              >
                {/* Floating chip decorations around the can */}
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

              <p className="relative z-10 text-primary-foreground/80 font-body text-base">
                {product.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductExperience;
