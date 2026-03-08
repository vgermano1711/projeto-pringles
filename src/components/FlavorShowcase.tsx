import { motion } from "framer-motion";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesScream from "@/assets/pringles-sour-cream.png";
import pringlesbbq from "@/assets/pringles-bbq.png";
import pringlesCheddar from "@/assets/pringles-cheddar.png";
import pringlesPizza from "@/assets/pringles-pizza.png";

const flavors = [
  { name: "Original", description: "O clássico sabor que começou tudo. Crocante, salgado e irresistível.", image: pringlesOriginal, color: "hsl(0, 100%, 44%)" },
  { name: "Sour Cream & Onion", description: "A combinação perfeita de creme azedo e cebola que conquista todos.", image: pringlesScream, color: "hsl(120, 40%, 40%)" },
  { name: "BBQ", description: "Sabor defumado e adocicado que traz o melhor do churrasco americano.", image: pringlesbbq, color: "hsl(20, 50%, 25%)" },
  { name: "Cheddar Cheese", description: "Queijo cheddar intenso e cremoso em cada batata perfectamente temperada.", image: pringlesCheddar, color: "hsl(30, 100%, 50%)" },
  { name: "Pizza", description: "Todo o sabor de uma pizza italiana em cada mordida crocante.", image: pringlesPizza, color: "hsl(15, 90%, 50%)" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: 10 },
  show: (i: number) => ({
    opacity: 1, y: 0, scale: 1, rotateX: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const FlavorShowcase = () => {
  return (
    <section id="sabores" className="py-24 overflow-hidden relative scroll-mt-16" style={{
      background: "linear-gradient(180deg, #1A1A1A 0%, #FFD700 20%, #FFC107 50%, #FFD700 80%, #1A1A1A 100%)"
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-pringles-dark mb-4">
            NOSSOS <span className="text-pringles-red">SABORES</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-pringles-red rounded-full mx-auto mb-4"
          />
          <p className="text-pringles-dark/60 text-lg max-w-2xl mx-auto font-body">
            Descubra toda a variedade de sabores que vão fazer você não conseguir parar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
      </div>
    </section>
  );
};

export default FlavorShowcase;
