import { motion } from "framer-motion";
import { useState } from "react";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesScream from "@/assets/pringles-sour-cream.png";
import pringlesbbq from "@/assets/pringles-bbq.png";
import pringlesCheddar from "@/assets/pringles-cheddar.png";
import pringlesPizza from "@/assets/pringles-pizza.png";

const flavors = [
  {
    name: "Original",
    description: "O clássico sabor que começou tudo. Crocante, salgado e irresistível.",
    image: pringlesOriginal,
    bg: "from-red-600 to-red-800",
    color: "hsl(0, 100%, 44%)",
  },
  {
    name: "Sour Cream & Onion",
    description: "A combinação perfeita de creme azedo e cebola que conquista todos.",
    image: pringlesScream,
    bg: "from-green-500 to-green-700",
    color: "hsl(120, 40%, 40%)",
  },
  {
    name: "BBQ",
    description: "Sabor defumado e adocicado que traz o melhor do churrasco americano.",
    image: pringlesbbq,
    bg: "from-amber-800 to-amber-950",
    color: "hsl(20, 50%, 25%)",
  },
  {
    name: "Cheddar Cheese",
    description: "Queijo cheddar intenso e cremoso em cada batata perfectamente temperada.",
    image: pringlesCheddar,
    bg: "from-orange-400 to-orange-600",
    color: "hsl(30, 100%, 50%)",
  },
  {
    name: "Pizza",
    description: "Todo o sabor de uma pizza italiana em cada mordida crocante.",
    image: pringlesPizza,
    bg: "from-red-500 to-orange-600",
    color: "hsl(15, 90%, 50%)",
  },
];

const FlavorShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-pringles-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-primary-foreground mb-4">
            NOSSOS <span className="text-pringles-yellow">SABORES</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto font-body">
            Descubra toda a variedade de sabores que vão fazer você não conseguir parar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                  y: hoveredIndex === index ? -10 : 0,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-2xl overflow-hidden p-6 flex flex-col items-center"
                style={{
                  background: `linear-gradient(180deg, ${flavor.color}22, ${flavor.color}44)`,
                  border: `1px solid ${flavor.color}33`,
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${flavor.color}33, transparent 70%)`,
                  }}
                />

                {/* Can image */}
                <motion.div
                  animate={{
                    rotateY: hoveredIndex === index ? 15 : 0,
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative z-10 w-32 h-48 mb-4"
                >
                  <img
                    src={flavor.image}
                    alt={`Pringles ${flavor.name}`}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </motion.div>

                {/* Flavor info */}
                <div className="relative z-10 text-center">
                  <h3 className="font-display text-lg text-primary-foreground mb-2">
                    {flavor.name}
                  </h3>
                  <motion.p
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      height: hoveredIndex === index ? "auto" : 0,
                    }}
                    className="text-primary-foreground/70 text-sm font-body overflow-hidden"
                  >
                    {flavor.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorShowcase;
