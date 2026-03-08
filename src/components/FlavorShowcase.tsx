import { motion } from "framer-motion";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesScream from "@/assets/pringles-sour-cream.png";
import pringlesbbq from "@/assets/pringles-bbq.png";
import pringlesCheddar from "@/assets/pringles-cheddar.png";
import pringlesPizza from "@/assets/pringles-pizza.png";
import pringles40gOriginal from "@/assets/pringles-40g-original.png";
import pringles40gSourCream from "@/assets/pringles-40g-sour-cream.png";
import pringles40gBbq from "@/assets/pringles-40g-bbq.png";
import pringles40gCheddar from "@/assets/pringles-40g-cheddar.png";
import pringles40gPizza from "@/assets/pringles-40g-pizza.png";

const flavors = [
  { name: "Original", description: "O clássico sabor que começou tudo. Crocante, salgado e irresistível.", image: pringlesOriginal, image40g: pringles40gOriginal, color: "hsl(0, 100%, 44%)" },
  { name: "Sour Cream & Onion", description: "A combinação perfeita de creme azedo e cebola que conquista todos.", image: pringlesScream, image40g: pringles40gSourCream, color: "hsl(120, 40%, 40%)" },
  { name: "BBQ", description: "Sabor defumado e adocicado que traz o melhor do churrasco americano.", image: pringlesbbq, image40g: pringles40gBbq, color: "hsl(20, 50%, 25%)" },
  { name: "Cheddar Cheese", description: "Queijo cheddar intenso e cremoso em cada batata temperada.", image: pringlesCheddar, image40g: pringles40gCheddar, color: "hsl(30, 100%, 50%)" },
  { name: "Pizza", description: "Todo o sabor de uma pizza italiana em cada mordida crocante.", image: pringlesPizza, image40g: pringles40gPizza, color: "hsl(15, 90%, 50%)" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: 10 },
  show: (i: number) => ({
    opacity: 1, y: 0, scale: 1, rotateX: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const FlavorShowcase = () => {
  return (
    <section id="sabores" className="py-24 overflow-hidden relative scroll-mt-16" style={{
      background: "linear-gradient(180deg, #1A1A1A 0%, #FFD700 20%, #FFC107 50%, #FFD700 80%, #1A1A1A 100%)"
    }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-[0.4em] text-pringles-red/80 mb-3 block">Descubra</span>
          <h2 className="font-heading text-7xl md:text-9xl text-pringles-dark mb-4 tracking-wide">
            NOSSOS <span className="text-pringles-red">SABORES</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-pringles-red rounded-full mx-auto mb-4"
          />
          <p className="text-pringles-dark/50 text-lg max-w-2xl mx-auto font-body tracking-wide">
            A variedade de sabores que vão fazer você não conseguir parar
          </p>
        </motion.div>

        {/* Classic cans */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl text-pringles-dark mb-6"
        >
          LATA CLÁSSICA <span className="text-pringles-dark/50 font-body text-base">— 114g</span>
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-30px" }}
              className="group relative cursor-pointer"
            >
              <div
                className="relative rounded-2xl overflow-hidden p-6 flex flex-col items-center transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl"
                style={{
                  background: `linear-gradient(180deg, ${flavor.color}22, ${flavor.color}44)`,
                  border: `1px solid ${flavor.color}33`,
                }}
              >
                <div className="relative z-10 w-32 h-48 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={flavor.image}
                    alt={`Pringles ${flavor.name}`}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="font-display text-lg text-primary-foreground mb-2">
                    {flavor.name}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm font-body opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
                    {flavor.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 40g mini cans */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl text-pringles-dark mb-2"
        >
          MINI LATA <span className="text-pringles-dark/50 font-body text-base">— 40g</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-pringles-dark/50 text-sm mb-6"
        >
          Perfeita para levar a qualquer lugar
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {flavors.map((flavor, index) => (
            <motion.div
              key={`40g-${flavor.name}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-30px" }}
              className="group relative cursor-pointer"
            >
              <div
                className="relative rounded-2xl overflow-hidden p-5 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  background: `linear-gradient(180deg, ${flavor.color}22, ${flavor.color}44)`,
                  border: `1px solid ${flavor.color}33`,
                }}
              >
                <div className="relative z-10 w-20 h-32 mb-3 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={flavor.image40g}
                    alt={`Pringles ${flavor.name} 40g`}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="font-display text-sm text-primary-foreground">
                    {flavor.name}
                  </h3>
                  <span className="font-body text-xs text-primary-foreground/50">40g</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorShowcase;
